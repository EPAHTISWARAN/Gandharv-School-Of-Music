import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      course: "Vocal Music",
      review:
        "The faculty is extremely supportive and the structured curriculum helped me improve my singing significantly.",
    },
    {
      name: "Priya Deshmukh",
      course: "Keyboard",
      review:
        "The classes are engaging and practical. I gained confidence performing in front of an audience.",
    },
    {
      name: "Rohan Patil",
      course: "Guitar",
      review:
        "Excellent mentors and a great learning environment. Highly recommended for aspiring musicians.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Students Say"
          description="Success stories from students who transformed their passion into skill."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">🎵</div>

              <p className="text-gray-600 italic">
                "{testimonial.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}