import { motion } from "framer-motion";

import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import StaggerContainer from "../../components/animations/StaggerContainer";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏆",
      title: "25+ Years Experience",
      description:
        "Building musical excellence through structured learning.",
    },
    {
      icon: "🎓",
      title: "Certified Courses",
      description:
        "Industry-recognized training programs and certifications.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description:
        "Learn from experienced musicians and performers.",
    },
    {
      icon: "🌐",
      title: "Online & Offline Classes",
      description:
        "Flexible learning options to suit your schedule.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="A Learning Experience Designed For Growth"
          description="We combine expert mentorship, structured curriculum, and real performance opportunities."
        />

        <StaggerContainer>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariant}
                className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}