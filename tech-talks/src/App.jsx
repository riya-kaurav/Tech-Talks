import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Experiences from './pages/Experiences';
import TipsPage from './pages/Tips';
import QnAPage from './pages/QnA';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-slate-300 text-[#242424] font-sans">


      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/qna" element={<QnAPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />  {/* 👈 Add this */}

    </div>
  );
}

export default App;

