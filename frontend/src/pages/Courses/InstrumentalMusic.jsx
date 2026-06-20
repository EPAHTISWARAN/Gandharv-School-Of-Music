import PageBanner from "../../components/shared/PageBanner";
import Container from "../../components/shared/Container";

import guitar1 from "../../assets/images/home/guitar1.JPG";
import keyboard1 from "../../assets/images/home/keyboard1.jpg";
import tabla1 from "../../assets/images/home/tabla1.jpg";
import harmonium1 from "../../assets/images/home/harmonium1.JPG";
import flute from "../../assets/images/home/flute.jpg";
import mrudungam from "../../assets/images/home/mrudungam.webp";
import violin from "../../assets/images/home/violin.webp";

export default function InstrumentalMusic() {
  const instrumentalCourses = [
    {
      title: "Guitar",
      image: guitar1,
      description:
        "Learn acoustic, electric and lead guitar techniques from beginner to advanced levels.",
    },
    {
      title: "Keyboard",
      image: keyboard1,
      description:
        "Master chords, scales, melodies and keyboard performance techniques.",
    },
    {
      title: "Tabla",
      image: tabla1,
      description:
        "Develop rhythm, taal knowledge and traditional tabla performance skills.",
    },
    {
      title: "Harmonium",
      image: harmonium1,
      description:
        "Learn classical accompaniment and devotional music techniques.",
    },
    {
      title: "Flute",
      image: flute,
      description:
        "Build breath control, fingering techniques and melodic expression.",
    },
    {
      title: "Mrudungam",
      image: mrudungam,
      description:
        "Master Carnatic percussion techniques and rhythm training.",
    },
    {
      title: "Violin",
      image: violin,
      description:
        "Learn classical and contemporary violin performance with structured guidance.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Instrumental Music"
        subtitle="Learn instruments from expert faculty."
      />

      <section className="bg-gray-50 py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
              Instrumental Music Programs
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Discover specialized instrumental courses designed for beginners
              and advanced learners.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {instrumentalCourses.map((course) => (
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

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                      Practical Training
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