import PageBanner from "../../components/shared/PageBanner";
import DirectorSection from "./DirectorSection";
import Achievements from "./Achievements";
import Certifications from "./Certifications";

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Discover our journey, our passion for music and dance, and the people who inspire excellence every day."
      />

      {/* Certifications */}
      <Certifications />

      {/* Director Section */}
      <DirectorSection />

      {/* Achievements */}
      <Achievements />
    </>
  );
}