import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Alvin Phiri | Full Stack Dev & AI Freelancer"
        description="Portfolio of Alvin Phiri, a skilled React/Node/C# developer with AI expertise. Explore projects, resume, and contact info."
        keywords="C#, React, Node.js, AI Developer, Portfolio, Freelance"
      />
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center text-center justify-center bg-gray-950 text-white px-4">
          <h1 className="text-4xl md:text-6xl max-w-[65%] font-bold mb-4">Alvin <br/> Coder, Builder, your all around Systems guy</h1>
          <p className="text-xl text-gray-400 max-w-[65%] mb-6">I make things work, fix what’s broken, and keep it clean while I’m at it.
From Zimbabwe to the world. Cybersecurity certified. Backend and frontend fluent.
Wanna see what I can do?</p>
          <div className="mt-8 flex w-full justify-center space-x-4">
              <Link to="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition mr-4">View My Work</Link>
              <Link to="/resume" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition">View Resume</Link>
        </div>
        </div>
      </PageWrapper>
    </>
  );
}
