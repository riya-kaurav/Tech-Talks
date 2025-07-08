import React, { useState } from 'react';

export default function Tips() {
  const [newTip, setNewTip] = useState('');
  const [tips, setTips] = useState([
    'Prepare your own questions to ask the interviewer.',
    'Always walk through your thinking in coding rounds.',
    'Mock interviews help build confidence!',
  ]);

  const submitTip = (e) => {
    e.preventDefault();
    if (!newTip.trim()) return;

    // TODO: integrate with backend tip POST API
    setTips([newTip, ...tips]);
    setNewTip('');
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-dark border-b border-gray-200 pb-2">
        💡 Interview Tips
      </h2>

      <form onSubmit={submitTip} className="flex gap-2">
        <input
          type="text"
          placeholder="Share a quick tip..."
          className="w-full p-2 border border-gray-300 rounded"
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
        />
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-dark transition"
        >
          Add
        </button>
      </form>

      <div className="grid gap-3">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded p-3 shadow-sm text-muted text-sm"
          >
            {tip}
          </div>
        ))}
      </div>
    </section>
  );
}
