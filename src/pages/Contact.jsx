import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      USER_ID
    ).then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });
  };

  return (
    <>
      <SEO
        title="Alvin Phiri | Contact"
        description="Contact Alvin Phiri for full stack development and AI freelance projects."
        keywords="Contact, Alvin Phiri, Full Stack Developer, AI, Freelance"
      />
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Contact Me
          </motion.h1>

          <AnimatePresence>
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl transition-all focus:ring-2 focus:ring-blue-500"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl transition-all focus:ring-2 focus:ring-blue-500"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl transition-all focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  required
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.p
                className="text-green-600 text-center font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! I’ll get back to you soon.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div
            className="mt-8 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </>
  );
}
