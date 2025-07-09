// import React, { useState } from 'react';

// export default function SubmitExperience() {
//   const [form, setForm] = useState({
//     company: '',
//     role: '',
//     content: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Experience:', form);
//     setForm({ company: '', role: '', content: '' });
//   };

//   return (
//     <section className="space-y-6 pt-6">
//       <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
//         📝 Share Your Interview Experience
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border border-[#1F4959] rounded-xl p-6 shadow-md space-y-5"
//       >
//         <input
//           type="text"
//           name="company"
//           placeholder="Company"
//           className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
//           value={form.company}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="role"
//           placeholder="Role"
//           className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
//           value={form.role}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="content"
//           placeholder="Your interview story..."
//           rows="5"
//           className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
//           value={form.content}
//           onChange={handleChange}
//           required
//         />

//         <div className="pt-2 text-right">
//           <button
//             type="submit"
//             className="bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }







import React, { useState } from 'react';

export default function SubmitExperience() {
  const [form, setForm] = useState({
    company: '',
    role: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);
  const BASE = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE}/experiences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        console.log("Experience submitted successfully");
        setForm({ company: '', role: '', content: '' });
      } else {
        console.error("Failed to submit experience");
      }
    } catch (error) {
      console.error("Error submitting experience:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6 pt-6">
      <h2 className="text-2xl font-semibold text-[#242424] border-b border-[#E5E7EB] pb-2">
        📝 Share Your Interview Experience
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#1F4959] rounded-xl p-6 shadow-md space-y-5"
      >
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
          value={form.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
          value={form.role}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Your interview story..."
          rows="5"
          className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#FC7C89] transition"
          value={form.content}
          onChange={handleChange}
          required
        />

        <div className="pt-2 text-right">
          <button
            type="submit"
            className={`bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
}
