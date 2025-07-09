// import React, { useState } from 'react';

// export default function Tips() {
//   const [newTip, setNewTip] = useState('');
//   const [tips, setTips] = useState([
//     'Prepare your own questions to ask the interviewer.',
//     'Always walk through your thinking in coding rounds.',
//     'Mock interviews help build confidence!',
//   ]);

//   const submitTip = (e) => {
//     e.preventDefault();
//     if (!newTip.trim()) return;

//     // TODO: integrate with backend tip POST API
//     setTips([newTip, ...tips]);
//     setNewTip('');
//   };

//   return (
//     <section className="space-y-6 pt-6">
//       <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
//         💡 Interview Tips
//       </h2>

//       <form onSubmit={submitTip} className="flex flex-col sm:flex-row gap-2">
//         <input
//           type="text"
//           placeholder="Share a quick tip..."
//           className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
//           value={newTip}
//           onChange={(e) => setNewTip(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition"
//         >
//           Add
//         </button>
//       </form>

//       <div className="grid gap-3">
//         {tips.map((tip, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-[#1F4959] rounded p-4 shadow-sm hover:shadow-md transition text-[#6B7280] text-sm"
//           >
//             {tip}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import React, { useState, useEffect } from 'react';

export default function Tips() {
  const [newTip, setNewTip] = useState('');
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE = import.meta.env.VITE_API_URL;

  // 🔹 Fetch tips from backend
  useEffect(() => {
    fetch(`${BASE}/tips`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tips:", err);
        setLoading(false);
      });
  }, []);

  // 🔹 Submit new tip to backend
  const submitTip = async (e) => {
    e.preventDefault();
    const trimmed = newTip.trim();
    if (!trimmed) return;

    try {
      const res = await fetch(`${BASE}/tips`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      if (res.ok) {
        setTips([trimmed, ...tips]);
        setNewTip('');
      } else {
        console.error("Failed to submit tip");
      }
    } catch (error) {
      console.error("Error submitting tip:", error);
    }
  };

  return (
    <section className="space-y-6 pt-6">
      <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
        💡 Interview Tips
      </h2>

      <form onSubmit={submitTip} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Share a quick tip..."
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          Add
        </button>
      </form>

      <div className="grid gap-3">
        {loading && (
          <p className="text-sm text-gray-500">Loading tips...</p>
        )}

        {!loading && tips.length === 0 && (
          <p className="text-sm text-gray-500">No tips posted yet.</p>
        )}

        {!loading &&
          tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1F4959] rounded p-4 shadow-sm hover:shadow-md transition text-[#6B7280] text-sm"
            >
              {typeof tip === "string" ? tip : tip.text}
            </div>
          ))}
      </div>
    </section>
  );
}
