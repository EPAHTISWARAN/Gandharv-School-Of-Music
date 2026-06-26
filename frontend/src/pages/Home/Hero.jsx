
import { motion } from "framer-motion";
import heroVideo from "../../assets/images/home/hero-video.webm";
import Container from "../../components/shared/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          scale-110
          md:scale-100
        "
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Premium Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/40
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[90vh]
          md:min-h-screen
          items-center
          justify-center
          text-center
          px-4
          pt-16
          md:pt-0
        "
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-white"
          >
            <h1
              className="
                font-heading
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                font-bold
                tracking-wide
                leading-tight
              "
            >
              संगीत के{" "}
              <span className="bg-gradient-to-r from-[#F05A22] via-[#F28C28] to-[#F4B400] bg-clip-text text-transparent">
                साधक
              </span>{" "}
              हैं हम
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                px-2
                text-base
                sm:text-lg
                md:text-2xl
                text-gray-200
                leading-relaxed
              "
            >
              
            </p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

