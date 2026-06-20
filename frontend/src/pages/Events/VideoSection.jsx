import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function VideoSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Performances"
          title="Watch Our Students In Action"
          description="A glimpse into our concerts, recitals and performances."
        />

        <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            className="h-[600px] w-full"
            src="https://www.youtube.com/embed/5400NIxU7gw"
            title="Gandharva School Of Music Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            Student Performance Showcase
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Experience the dedication, artistry and musical excellence of our
            students through live performances, concerts and stage presentations.
          </p>
        </div>
      </Container>
    </section>
  );
}