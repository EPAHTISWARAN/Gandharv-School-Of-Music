import PageBanner from "../../components/shared/PageBanner";
import CourseGrid from "./CourseGrid";

export default function Courses() {
  return (
    <>
      <PageBanner
        title="Our Courses"
        subtitle="Explore music, dance and instrumental programs."
      />

      <CourseGrid />
    </>
  );
}