import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

import Navbar from './Navbar';

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-container"
      >
        {children}
      </motion.div>
    </>
  );
}
