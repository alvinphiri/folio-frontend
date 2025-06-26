import React, { useState } from 'react';
import axios from 'axios';
import PageWrapper from '../components/PageWrapper';

export default function AiDemo() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await axios.post('http://localhost:5000/chat', { message });
      setResponse(res.data.response);
    } catch (err) {
      setResponse('Error connecting to server.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">AI Chatbot Demo (Gemma 3-1B)</h1>
        <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
          <input
            className="flex-grow border p-2 rounded-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>
        {response && (
          <div className="border p-4 rounded-xl bg-gray-100">
            <strong>Response:</strong>
            <p>{response}</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
