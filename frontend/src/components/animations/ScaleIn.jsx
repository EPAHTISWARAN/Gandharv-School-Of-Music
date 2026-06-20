import { motion } from "framer-motion";

export default function ScaleIn({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}