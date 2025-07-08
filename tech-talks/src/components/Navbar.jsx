import React from 'react';
export default function Navbar() {
return (
    <header className="bg-dark text-white py-4 shadow">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">TechTalks 💬</h1>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li className="hover:text-accent cursor-pointer">Experiences</li>
            <li className="hover:text-accent cursor-pointer">Tips</li>
            <li className="hover:text-accent cursor-pointer">Q&A</li>
          </ul>
        </nav>
      </div>
    </header>
);
 }