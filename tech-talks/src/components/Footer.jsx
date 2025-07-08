import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-[#6B7280] py-6 border-t mt-16">
      © {new Date().getFullYear()} TechTalks. All rights reserved.
    </footer>
  );
}
