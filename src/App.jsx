import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AiDemo from "./pages/AiDemo";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import FloatingChatButton from "./components/FloatingChatButton";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ai-demo" element={<AiDemo />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {open ? (
        <ChatWidget onClose={() => setOpen(false)} />
      ) : (
        <FloatingChatButton onClick={() => setOpen(true)} />
      )}
    </HelmetProvider>
  );
}

export default App;
