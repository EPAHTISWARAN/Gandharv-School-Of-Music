import Container from "../../components/shared/Container";
import directorImg from "../../assets/images/home/director.jpeg";

export default function DirectorSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Director Image */}
          <div className="relative">
            <img
              src={directorImg}
              alt="Director"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 text-white shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Director Content */}
          <div>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Prof. Bipeen Ithape
            </h2>

            

            <span className="font-semibold uppercase tracking-widest text-[var(--primary)]">
              Founder & Director oF Gandharva School Of Music
            </span>

            

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              At Gandharva School of Music, we believe that music and dance are
              not merely skills but lifelong journeys of self-expression,
              discipline, and creativity.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our mission is to nurture talent through structured training,
              performance opportunities, and internationally recognized
              certifications while preserving the rich traditions of Indian
              classical arts.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We strive to create an environment where every student can
              discover their artistic potential and confidently perform on
              national and international platforms.
            </p>

            <div className="mt-8 border-l-4 border-[var(--primary)] pl-5">
              <h3 className="text-3xl font-bold text-[var(--primary)]">
                
              </h3>

              <p className="text-gray-500">
               
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}