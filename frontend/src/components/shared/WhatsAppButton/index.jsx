
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "919960073357";

  const message =
  "Hello Gandharva School of Music,%0A%0AI would like to enquire about admission to your music programs.%0A%0AStudent Name:%0AContact Number:%0AAge:%0AInterested Course:%0APreferred Mode (Online/Offline):%0ACity:%0A%0AKindly share the admission process, course fees, batch timings, and any additional details.%0A%0AThank you.";

  const instagramUrl =
    "https://www.instagram.com/gandharv_school_of_music_";

  return (
    <>
      {/* Instagram Button */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
        className="fixed top-[45%] right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-lg"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <FaInstagram size={30} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed top-[55%] right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </>
  );
}

