import { useState } from "react";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

import news1 from "../../assets/images/home/news1.jpeg";
import news2 from "../../assets/images/home/news2.jpeg";
import news3 from "../../assets/images/home/news3.jpeg";

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      image: news1,
      title: "Swargandharv",
    },
    {
      image: news2,
      title: "Bhakti Gandharva",
    },
    {
      image: news3,
      title: "Bhav Gandharva",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Events"
          title="Our Musical Events & Achievements"
          description="A glimpse of Gandharva School of Music's prestigious events, performances and cultural programs."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                onClick={() => setSelectedImage(event.image)}
                className="h-[450px] w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[var(--secondary)]">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="News Article"
              className="max-h-[95vh] max-w-[95vw] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-8 top-6 text-5xl font-bold text-white transition hover:scale-110"
            >
              ×
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}