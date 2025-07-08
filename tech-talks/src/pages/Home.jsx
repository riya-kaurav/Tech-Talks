import SubmitExperience from '../features/experiences/SubmitExperience';
import ExperienceList from '../features/experiences/ExperienceList';
import Tips from '../features/tips/Tips';
import QnA from '../features/qna/QNA';

export default function Home() {
  const scrollToForm = () => {
    document.getElementById('submit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="space-y-16">
      {/* 🧠 Hero Section */}
      <div className="text-center space-y-4 py-10 rounded-lg bg-[#F7F9FA] shadow-md px-4">
        <h1 className="text-4xl font-bold text-[#242424] tracking-tight">
          TechTalks 💬
        </h1>
        <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
          Real stories. Real interviews. Real learning.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#FC7C89] hover:bg-[#e86271] text-white font-semibold px-6 py-2 rounded transition duration-200"
        >
          Submit Your Interview Experience
        </button>
      </div>

      {/* ✍️ Submit Experience */}
      <div id="submit-form">
        <SubmitExperience />
      </div>

      {/* 📋 Experience List */}
      <ExperienceList />

      {/* 💡 Tips */}
      <Tips />

      {/* ❓ Q&A */}
      <QnA />
    </section>
  );
}
