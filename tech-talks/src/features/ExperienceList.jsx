import React from 'react';

export default function ExperienceList() {
  // TODO: Replace with fetchExperiences() from backend later
  const dummyExperiences = [
    {
      id: 1,
      company: 'Google',
      role: 'Frontend Intern',
      content:
        'The interview focused mostly on JavaScript fundamentals and basic system design.I was asked to build a simple React app that fetches data from an API. I also had to explain my code and thought process during the interview. They appreciated my understanding of React hooks and state management.',
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'SDE-1',
      content:
        'It was a 3-round process: DSA, projects, and behavioral. They loved my React portfolio! I had to solve a problem using recursion and explain my thought process. I also discussed my previous projects in detail.',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-dark mb-4">Interview Experiences</h2>
      {dummyExperiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <h3 className="text-lg font-bold text-accent">{exp.company} — {exp.role}</h3>
          <p className="text-muted mt-2">{exp.content}</p>
        </div>
      ))}
    </div>
  );
}
// This component will later be connected to the backend to fetch real experiences