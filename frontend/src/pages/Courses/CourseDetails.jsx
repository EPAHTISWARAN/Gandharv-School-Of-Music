import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function CourseDetails() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Programs"
          title="Our Course Offerings"
          description="Choose from Singing, Instrumental Music and Dance programs."
        />

        <div className="mt-16 space-y-12">

          {/* Singing */}
          <div
            id="singing"
            className="rounded-3xl bg-white p-8 shadow-md scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-[var(--primary)]">
              🎤 Singing
            </h2>

            <ul className="mt-4 space-y-2 text-lg">
              <li>• Hindustani Classical Vocal</li>
              <li>• Semi-Classical Music</li>
              <li>• Light Music</li>
              <li>• Bollywood Singing</li>
              <li>• Bhajans & Devotional Music</li>
            </ul>
          </div>

          {/* Instrumental */}
          <div
            id="instrumental"
            className="rounded-3xl bg-white p-8 shadow-md scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-[var(--primary)]">
              🎹 Instrumental Music
            </h2>

            <ul className="mt-4 space-y-2 text-lg">
              <li>• Guitar</li>
              <li>• Keyboard</li>
              <li>• Harmonium</li>
              <li>• Tabla</li>
              <li>• Flute</li>
              <li>• Violin</li>
            </ul>
          </div>

          {/* Dance */}
          <div
            id="dance"
            className="rounded-3xl bg-white p-8 shadow-md scroll-mt-32"
          >
            <h2 className="text-3xl font-bold text-[var(--primary)]">
              💃 Dance
            </h2>

            <ul className="mt-4 space-y-2 text-lg">
              <li>• Kathak</li>
              <li>• Bharatanatyam</li>
              <li>• Bollywood Dance</li>
              <li>• Folk Dance</li>
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}