import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
  const courses = [
    {
      title: "Vocal Music",
      icon: "🎤",
      description:
        "Indian Classical, Semi-Classical and Bollywood Singing.",
      link: "/courses/vocal",
    },
    {
      title: "Instrumental Music",
      icon: "🎹",
      description:
        "Keyboard, Guitar, Tabla, Harmonium, Flute, Mrudungam and Violin.",
      link: "/courses/instrumental",
    },
    {
      title: "Dance",
      icon: "💃",
      description:
        "Kathak, Bharatanatyam and Bollywood Dance and more.",
      link: "/courses/dance",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Courses"
          title="Programs For Every Passion"
          description="Choose from a wide range of music, dance and instrumental training programs."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              icon={course.icon}
              link={course.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}