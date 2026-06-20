import PageBanner from "../../components/shared/PageBanner";
import Container from "../../components/shared/Container";

import dance1 from "../../assets/images/home/dance1.JPG";
import dance2 from "../../assets/images/home/dance2.JPG";
import dance3 from "../../assets/images/home/dance3.jpg";


export default function Dance() {
  const dancePrograms = [
    {
      title: "Kathak",
      image: dance1,
      description:
        "Learn graceful footwork, spins, expressions and storytelling through one of India's most celebrated classical dance forms.",
    },
    {
      title: "Bharatanatyam",
      image: dance2,
      description:
        "Master traditional Bharatanatyam techniques, mudras, expressions and stage performances.",
    },
    {
      title: "Bollywood Dance",
      image: dance3,
      description:
        "Learn energetic Bollywood choreography, stage presence and performance skills.",
    },
    
  ];

  return (
    <>
      <PageBanner
        title="Dance"
        subtitle="Express yourself through rhythm and movement."
      />

      <section className="bg-gray-50 py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Dance Programs
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Professional dance training for students of all ages and skill
              levels.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {dancePrograms.map((dance) => (
              <div
                key={dance.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Dance Image */}
                <div className="overflow-hidden">
                  <img
                    src={dance.image}
                    alt={dance.title}
                    className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[var(--primary)]">
                    {dance.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {dance.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                      Beginner Friendly
                    </span>

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                      Stage Performances
                    </span>

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                      Certification Available
                    </span>
                  </div>

                  <button className="mt-8 rounded-xl bg-[var(--primary)] px-6 py-3 text-white transition-all duration-300 hover:scale-105">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}