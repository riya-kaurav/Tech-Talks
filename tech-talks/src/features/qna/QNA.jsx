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

    // TODO: Integrate with backend POST /api/questions
    setQuestions([newQ, ...questions]);
    setNewQ('');
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-dark border-b border-gray-200 pb-2">❓ Interview Q&A</h2>

      <form onSubmit={submitQuestion} className="flex gap-2">
        <input
          type="text"
          placeholder="Post a frequently asked interview question..."
          className="w-full p-2 border border-gray-300 rounded"
          value={newQ}
          onChange={(e) => setNewQ(e.target.value)}
        />
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-dark transition"
        >
          Add
        </button>
      </form>

      <div className="grid gap-3">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded p-3 shadow-sm text-muted text-sm"
          >
            {q}
          </div>
        ))}
      </div>
    </section>
  );
}
