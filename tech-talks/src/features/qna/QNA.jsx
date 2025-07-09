// import React, { useState } from 'react';

// export default function QnA() {
//   const [newQ, setNewQ] = useState('');
//   const [questions, setQuestions] = useState([
//     'What’s the difference between var, let, and const?',
//     'How does React handle reconciliation?',
//     'What is a closure in JavaScript?',
//   ]);

//   const submitQuestion = (e) => {
//     e.preventDefault();
//     if (!newQ.trim()) return;
//     setQuestions([newQ, ...questions]);
//     setNewQ('');
//   };

//   return (
//     <section className="space-y-6 pt-6">
//       <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
//         ❓ Interview Q&A
//       </h2>

//       <form onSubmit={submitQuestion} className="flex flex-col sm:flex-row gap-2">
//         <input
//           type="text"
//           placeholder="Post a frequently asked interview question..."
//           className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
//           value={newQ}
//           onChange={(e) => setNewQ(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition"
//         >
//           Add
//         </button>
//       </form>

//       <div className="grid gap-3">
//         {questions.map((q, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-[#1F4959] rounded p-4 shadow-sm hover:shadow-md transition text-[#6B7280] text-sm"
//           >
//             {q}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useState, useEffect } from 'react';

export default function QnA() {
  const [newQ, setNewQ] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE = import.meta.env.VITE_API_URL;

  // 🔹 Fetch existing questions from backend
  useEffect(() => {
    fetch(`${BASE}/questions`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
        setLoading(false);
      });
  }, []);

  // 🔹 Handle question submission
  const submitQuestion = async (e) => {
    e.preventDefault();
    const trimmed = newQ.trim();
    if (!trimmed) return;

    try {
      const res = await fetch(`${BASE}/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      if (res.ok) {
        // Optionally refetch or append new question
        setQuestions([trimmed, ...questions]);
        setNewQ('');
      } else {
        console.error("Failed to post question");
      }
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <section className="space-y-6 pt-6">
      <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
        ❓ Interview Q&A
      </h2>

      <form onSubmit={submitQuestion} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Post a frequently asked interview question..."
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
          value={newQ}
          onChange={(e) => setNewQ(e.target.value)}
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
          <p className="text-sm text-gray-500">Loading questions...</p>
        )}

        {!loading && questions.length === 0 && (
          <p className="text-sm text-gray-500">No questions posted yet.</p>
        )}

        {!loading &&
          questions.map((q, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1F4959] rounded p-4 shadow-sm hover:shadow-md transition text-[#6B7280] text-sm"
            >
              {typeof q === "string" ? q : q.text}
            </div>
          ))}
      </div>
    </section>
  );
}
