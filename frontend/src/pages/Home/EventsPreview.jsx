import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function EventsPreview() {
const events = [
{
title: "Annual Music Concert",
icon: "🎤",
description:
"A grand showcase of our students' musical talents and achievements.",
},
{
title: "Instrument Showcase",
icon: "🎹",
description:
"Experience live performances featuring various musical instruments.",
},
{
title: "Dance Festival",
icon: "💃",
description:
"Celebrate creativity and expression through captivating dance performances.",
},
];

return ( <section className="py-24"> <Container> <SectionHeading
       subtitle="Events"
       title="Upcoming Performances & Programs"
       description="Join us for exciting concerts, showcases, workshops, and cultural events."
     />

```
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <div
          key={event.title}
          className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="mb-4 text-4xl">
            {event.icon}
          </div>

          <h3 className="text-xl font-semibold">
            {event.title}
          </h3>

          <p className="mt-3 text-gray-600">
            {event.description}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/events"
        className="inline-block rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        View All Events →
      </Link>
    </div>
  </Container>
</section>

);
}
