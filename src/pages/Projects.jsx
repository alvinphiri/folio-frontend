import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const projects = [
  {
    title: "Gemma C# Chatbot",
    desc: "A console-based chatbot using HuggingFace and C#.",
    tags: ["C#", "AI", "Gemma"],
    demo: "#",
    code: "https://github.com/yourusername/gemma-chatbot"
  },
  {
    title: "Loan Platform MVP",
    desc: "Zero-interest loan platform for students with marketing integration.",
    tags: ["Node", "React", "MongoDB"],
    demo: "#",
    code: "#"
  },
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Alvin Phiri | Projects Portfolio"
        description="Explore the projects portfolio of Alvin Phiri, featuring AI chatbots, loan platforms, and more."
        keywords="Projects, Portfolio, AI, Chatbot, React, Node.js, MongoDB"
      />
      <PageWrapper>
        <section id="projects" className="min-h-screen px-6 py-10 bg-gray-900 text-white">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-sm bg-indigo-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.demo} className="text-indigo-400 underline">Demo</a>
                  <a href={p.code} className="text-indigo-400 underline">Code</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
