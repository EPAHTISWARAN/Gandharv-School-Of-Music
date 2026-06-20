import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import CourseCard from "../Courses/CourseCard";

export default function CoursesPreview() {
  const courses = [
    {
      title: "Singing",
      description:
        "Learn Indian Classical and Bollywood Music from experienced instructors.",
      icon: "🎤",
      link: "/courses/vocal",
    },
    {
      title: "Instrumental",
      description:
        "Master Guitar, Keyboard, Tabla, Harmonium, Flute and more.",
      icon: "🎹",
      link: "/courses/instrumental",
    },
    {
      title: "Dance",
      description:
        "Explore Bharatanatyam, Kathak and Bollywood Dance styles.",
      icon: "💃",
      link: "/courses/dance",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Courses"
          title="Explore Our Programs"
          description="Discover professionally designed music, dance, and instrumental courses for all age groups."
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