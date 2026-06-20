import PageBanner from "../../components/shared/PageBanner";
import Container from "../../components/shared/Container";

import vocals1 from "../../assets/images/home/vocals1.JPG";
import vocals2 from "../../assets/images/home/vocals2.JPG";
import vocals3 from "../../assets/images/home/vocals3.jpg";
import vocals4 from "../../assets/images/home/vocals4.png";
import vocals5 from "../../assets/images/home/vocals5.png";

export default function VocalMusic() {
  const vocalCourses = [
    {
      title: "Hindustani Classical Vocal",
      image: vocals1,
      description:
        "Learn Raag, Alaap, Taan, Bandish and traditional Indian classical singing techniques under expert guidance.",
    },
    {
      title: "Semi-Classical Music",
      image: vocals2,
      description:
        "Explore Thumri, Dadra, Ghazal and other semi-classical forms that blend tradition with expression.",
    },
    {
      title: "Light Music",
      image: vocals3,
      description:
        "Develop melody, voice control and performance skills through light music training.",
    },
    {
      title: "Bollywood Singing",
      image: vocals4,
      description:
        "Master playback-style singing, microphone techniques and modern Bollywood songs.",
    },
    {
      title: "Bhajans & Devotional Music",
      image: vocals5,
      description:
        "Learn devotional songs, bhajans and spiritual music with proper vocal training.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Vocal Music"
        subtitle="Master the art of singing with structured training."
      />

      <section className="bg-gray-50 py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Vocal Music Programs
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Discover specialized vocal courses designed for beginners and
              advanced learners.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {vocalCourses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Course Image */}
                <div className="overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Course Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[var(--primary)]">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {course.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                      Beginner Friendly
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