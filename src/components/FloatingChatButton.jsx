const FloatingChatButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    aria-label="Open Chat"
  >
    💬
  </button>
);

export default FloatingChatButton;