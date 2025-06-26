import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <>
      <SEO
        title="Alvin Phiri | Resume"
        description="Resume of Alvin Phiri, showcasing experience, education, and skills in full stack development and AI."
        keywords="Resume, Alvin Phiri, Full Stack Developer, AI, C#, React, Node.js"
      />
      <PageWrapper>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-4">Resume</h1>
          <p className="mb-2">Download my full resume <a className="text-blue-600 underline" href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Experience</h2>
              <p className="text-gray-700">Freelance C# AI Developer — Ongoing</p>
              <p className="text-sm text-gray-600">Integrating LLMs with desktop apps, backend APIs, and cross-platform tooling.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Education</h2>
              <p className="text-gray-700">BSc in Computer Science</p>
              <p className="text-sm text-gray-600">Coursework included advanced C#, AI/ML, React, Node, full stack dev.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Skills</h2>
              <p className="text-gray-700">C#, Node.js, React, Express, MongoDB, PHP, Python, AI/ML APIs, Git, TailwindCSS</p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
