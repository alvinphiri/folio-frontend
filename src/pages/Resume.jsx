import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <>
      <SEO
        title="Alvin Phiri | Resume"
        description="Resume of Alvin Phiri, showcasing experience, education, and skills in full stack development, AI, and IT support."
        keywords="Resume, Alvin Phiri, Software Developer, AI Engineer, C#, React, Node.js"
      />
      <PageWrapper>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-4">Resume</h1>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1j2OYV9IONOxg49dHWaRo01ATOPb4Xj1W
"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Resume (PDF)
            </a>
            <a
              href="mailto:alvin.phiri@africau.edu"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
            >
              Contact Me
            </a>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="text-gray-700">
              Versatile Computer Science graduate with hands-on experience in full-stack web development,
              AI tools, cybersecurity, and IT support. Known for building intelligent systems, automating workflows, and supporting digital teams in high-paced environments.
              Certified in Cybersecurity and actively developing real-world projects including educational AR apps and AI assistants.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Experience</h2>

            <div className="mt-2">
              <p className="font-medium">
                Freelance Developer & IT Consultant <span className="text-sm text-gray-500">Remote | 2022 – Present</span>
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Built and maintained client websites using HTML, CSS, JS, WordPress & PHP</li>
                <li>Integrated AI models, API backends, and automations using Node and Python</li>
                <li>Provided tech support, training, and remote troubleshooting</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-medium">
                IT Intern – Hillcrest Preparatory School <span className="text-sm text-gray-500">Jan 2024 – Dec 2024</span>
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Managed Google Workspace & SEO for school systems</li>
                <li>Improved parent communications via website forms & portals</li>
                <li>Handled diagnostics and network troubleshooting on site</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p className="font-medium">
              Africa University – BSc Computer Science <span className="text-sm text-gray-500">2021 – 2025</span>
            </p>
            <p className="text-sm text-gray-600">
              Final Year Project:{' '}
              <a
                href="https://github.com/C0de-Warrior/Playful-Minds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Playful Minds
              </a>{' '}
              — an AI/AR learning platform for early learners in Zimbabwe.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li><strong>Languages:</strong> Python, JavaScript, PHP, C#, HTML/CSS</li>
              <li><strong>Frameworks:</strong> Laravel, React, Node.js, Flutter</li>
              <li><strong>Tools:</strong> Git, Docker, VS Code, WordPress, Render</li>
              <li><strong>Systems:</strong> Linux, Windows, Google Workspace Admin</li>
              <li><strong>Other:</strong> Troubleshooting, Deployment, Automation, LLMs, Chatbot APIs</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.credly.com/badges/38a49a86-bd2f-47ec-843a-69b1f0881609/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  ISC2 Certified in Cybersecurity (CC)
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/AlvinPhiri/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Responsive Web Design – freeCodeCamp
                </a>
              </li>
            </ul>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
