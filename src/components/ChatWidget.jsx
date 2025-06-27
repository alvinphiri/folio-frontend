import { useState } from "react";

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey! Need help with anything?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://folio-backend-y210.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "bot", text: "❌ Server error." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-900 text-white rounded-xl shadow-lg z-50 flex flex-col overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Gibby</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-red-500">✕</button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
className={`p-2 rounded-md text-sm ${msg.role === "user" ? "bg-blue-600 text-right ml-auto" : "bg-gray-700"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type something..."
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-white"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-3 bg-green-600 hover:bg-green-700 rounded disabled:opacity-50"
        >
          {loading ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;