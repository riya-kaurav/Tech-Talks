import React from 'react';

export default function ExperienceList() {
  // TODO: Replace with fetchExperiences() from backend later
  const dummyExperiences = [
    {
      id: 1,
      company: 'Google',
      role: 'Frontend Intern',
      content:
        'The interview focused mostly on JavaScript fundamentals and basic system design. I was asked to build a simple React app that fetches data from an API. I also had to explain my code and thought process during the interview. They appreciated my understanding of React hooks and state management.',
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
    <section className="space-y-6 pt-6">
      <h2 className="text-2xl font-bold text-[#242424] border-b border-[#E5E7EB] pb-2">
        🧑‍💻 Interview Experiences
      </h2>

      {dummyExperiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-white rounded-lg p-5 border border-[#1F4959] shadow-sm hover:shadow-md transition duration-200"
        >
          <h3 className="text-[#FC7C89] font-semibold text-lg">
            {exp.company} — {exp.role}
          </h3>
          <p className="text-[#6B7280] mt-2 text-sm leading-relaxed">
            {exp.content}
          </p>
        </div>
      ))}
    </section>
  );
}
