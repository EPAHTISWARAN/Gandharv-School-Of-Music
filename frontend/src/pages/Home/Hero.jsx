import { motion } from "framer-motion";
import heroVideo from "../../assets/images/home/hero-video.webm";
import Container from "../../components/shared/Container";

export default function Hero() {
return ( <section className="relative min-h-screen overflow-hidden">
{/* Background Video */} <video
     autoPlay
     loop
     muted
     playsInline
     className="absolute inset-0 h-full w-full object-cover"
   > <source src={heroVideo} type="video/mp4" /> </video>

```
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto text-white"
      >
        <h1 className="font-heading text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl">
          संगीत के{" "}
          <span className="bg-gradient-to-r from-[#F05A22] via-[#F28C28] to-[#F4B400] bg-clip-text text-transparent">
            साधक
          </span>{" "}
          हैं हम
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-2xl">
          Preserving Tradition • Inspiring Excellence • Creating Artists
        </p>
      </motion.div>
    </Container>
  </div>
</section>

);
}
