import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function Achievements() {
  const stats = [
    "5000+ Students",
    "25+ Years Experience",
    "100+ Events",
    "50+ Awards",
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Achievements"
          title="Numbers That Speak"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-2xl bg-white p-6 text-center shadow-md"
            >
              <h3 className="text-2xl font-bold">
                {stat}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}