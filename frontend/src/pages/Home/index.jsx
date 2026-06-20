import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import CoursesPreview from "./CoursesPreview";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import EventsPreview from "./EventsPreview";
import QuickEnquiry from "./QuickEnquiry";

import FadeIn from "../../components/animations/FadeIn";
import SlideUp from "../../components/animations/SlideUp";
import ScaleIn from "../../components/animations/ScaleIn";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(
          135deg,
          var(--background-start) 0%,
          var(--background-middle) 50%,
          var(--background-end) 100%
        )`,
      }}
    >
      <Hero />

      <SlideUp>
        <AboutPreview />
      </SlideUp>

      <SlideUp>
        <CoursesPreview />
      </SlideUp>

      <FadeIn>
        <WhyChooseUs />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <SlideUp>
        <EventsPreview />
      </SlideUp>

      <ScaleIn>
        <QuickEnquiry />
      </ScaleIn>
    </div>
  );
}