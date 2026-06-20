import PageBanner from "../../components/shared/PageBanner";
import EventGallery from "./EventGallery";
import VideoSection from "./VideoSection";

export default function Events() {
  return (
    <>
      <PageBanner
        title="Events & Certifications"
        subtitle="Discover our training programs, prestigious events, workshops, stage performances and internationally recognized music certifications."
      />

      <EventGallery />
      <VideoSection />
    </>
  );
}