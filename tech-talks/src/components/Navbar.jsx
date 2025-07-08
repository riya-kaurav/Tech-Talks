import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#011425] text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">TechTalks 💬</h1>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li>
              <NavLink
                to="/experiences"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FC7C89] font-semibold'
                    : 'hover:text-[#FC7C89] transition'
                }
              >
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tips"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FC7C89] font-semibold'
                    : 'hover:text-[#FC7C89] transition'
                }
              >
                Tips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/qna"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FC7C89] font-semibold'
                    : 'hover:text-[#FC7C89] transition'
                }
              >
                Q&A
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
