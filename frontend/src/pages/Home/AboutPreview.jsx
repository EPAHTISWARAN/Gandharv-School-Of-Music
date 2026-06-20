
import Container from "../../components/shared/Container";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Over Two Decades Of Musical Excellence
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Gandharva School has been nurturing talent through
            professional training in vocal music, instrumental music,
            and dance. We provide both online and offline learning
            experiences for students of all age groups.
          </p>

          <a
            href="#enquiry-section"
            className="
              group
              relative
              mt-12
              inline-flex
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              bg-gradient-to-r
              from-[#f97316]
              via-[#fb923c]
              to-[#f59e0b]
              px-16
              py-8
              text-2xl
              font-extrabold
              tracking-wider
              text-white
              shadow-[0_0_30px_rgba(249,115,22,0.65)]
              animate-pulse
              transition-all
              duration-500
              hover:animate-none
              hover:scale-110
              hover:shadow-[0_0_60px_rgba(249,115,22,1)]
              active:scale-95
            "
          >
            <span className="relative z-10">
              JOIN GANDHARVA
            </span>

            <span
              className="
                absolute
                left-[-100%]
                top-0
                h-full
                w-full
                bg-white/25
                transition-all
                duration-1000
                group-hover:left-[100%]
              "
            />
          </a>
        </div>
      </Container>
    </section>
  );
}

