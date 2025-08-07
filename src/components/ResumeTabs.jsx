const tabs = ['Summary', 'Experience', 'Education', 'Skills', 'Certifications'];

export default function ResumeTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
            active === tab
              ? 'bg-green-600 text-white border-green-700'
              : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
