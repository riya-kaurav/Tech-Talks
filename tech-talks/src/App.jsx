
import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import SubmitExperience from './features/experiences/SubmitExperience';
import ExperienceList from './features/ExperienceList'


function App() {
  

  return (
    
            <div className="min-h-screen bg-white text-primary font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <p className="text-muted text-center text-lg">
          Share and explore real-world interview stories 🚀
        </p>
        <SubmitExperience />
        <ExperienceList />

      </main>
    </div>  
    
  );
}

export default App
