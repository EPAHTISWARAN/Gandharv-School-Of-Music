import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

import akhilLogo from "../../assets/images/home/akhil-gandharva-logo.jpg";
import trinityLogo from "../../assets/images/home/trinity-logo.jpg";

export default function Certifications() {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-24">
      <Container>
        <SectionHeading
          subtitle="AFFILIATIONS & CERTIFICATIONS"
          title="Certified Learning Pathways"
          description="Gandharva School of Music offers structured training aligned with prestigious Indian and International music certification programs."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Gandharva */}
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md overflow-hidden">
                <img
                  src={akhilLogo}
                  alt="Akhil Bharatiya Gandharva Mahavidyalaya"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  Akhil Bharatiya Gandharva Mahavidyalaya
                </h3>

                <p className="text-sm text-gray-500">
                  Classical Music Examination Board
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              Students receive guidance and preparation for the prestigious
              Akhil Bharatiya Gandharva Mahavidyalaya examinations in Vocal,
              Instrumental and Performing Arts disciplines.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✓ Prarambhik</li>
              <li>✓ Praveshika</li>
              <li>✓ Madhyama</li>
              <li>✓ Visharad</li>
              <li>✓ Alankar</li>
            </ul>
          </div>

          {/* Trinity */}
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md overflow-hidden">
                <img
                  src={trinityLogo}
                  alt="Trinity College London"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  Trinity College London
                </h3>

                <p className="text-sm text-gray-500">
                  International Music Certification
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              Guitar and Keyboard students can follow Trinity College London
              curriculum pathways, helping them prepare for internationally
              recognized music examinations and certifications.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✓ Keyboard Grades 1–8</li>
              <li>✓ Guitar Grades 1–8</li>
              <li>✓ Music Theory</li>
              <li>✓ Performance Assessments</li>
              <li>✓ International Recognition</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Learn • Perform • Get Certified
          </h3>

          <p className="mt-4 text-lg">
            From Gandharva Mahavidyalaya certifications to Trinity College
            London pathways, we help students build recognized credentials
            alongside musical excellence.
          </p>
        </div>
      </Container>
    </section>
  );
}