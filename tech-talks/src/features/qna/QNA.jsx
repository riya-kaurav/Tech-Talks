import React, { useState } from 'react';

export default function QnA() {
  const [newQ, setNewQ] = useState('');
  const [questions, setQuestions] = useState([
    'What’s the difference between var, let, and const?',
    'How does React handle reconciliation?',
    'What is a closure in JavaScript?',
  ]);

  const submitQuestion = (e) => {
    e.preventDefault();
    if (!newQ.trim()) return;
    setQuestions([newQ, ...questions]);
    setNewQ('');
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
          className="bg-[#FC7C89] text-white px-6 py-2 rounded hover:bg-[#e86271] transition"
        >
          Add
        </button>
      </form>

      <div className="grid gap-3">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#1F4959] rounded p-4 shadow-sm hover:shadow-md transition text-[#6B7280] text-sm"
          >
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}
