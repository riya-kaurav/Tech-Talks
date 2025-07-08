import React, { useState } from 'react';

export default function SubmitExperience() {
  const [form, setForm] = useState({
    company: '',
    role: '',
    content: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook up backend API call here
    console.log('Submitted Experience:', form);
    setForm({ company: '', role: '', content: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-muted rounded-lg p-6 shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-dark mb-2">Share Your Interview Experience</h2>

      <input
        type="text"
        name="company"
        placeholder="Company"
        className="w-full p-2 border border-gray-300 rounded"
        value={form.company}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        className="w-full p-2 border border-gray-300 rounded"
        value={form.role}
        onChange={handleChange}
        required
      />

      <textarea
        name="content"
        placeholder="Your interview story..."
        rows="5"
        className="w-full p-2 border border-gray-300 rounded"
        value={form.content}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-accent text-white px-6 py-2 rounded hover:bg-dark transition"
      >
        Submit
      </button>
    </form>
  );
}
// This component allows users to submit their interview experiences.