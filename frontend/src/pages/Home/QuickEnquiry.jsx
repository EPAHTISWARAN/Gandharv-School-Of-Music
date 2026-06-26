import { useState } from "react";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";

export default function QuickEnquiry() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [subCourse, setSubCourse] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !course) {
      alert("Please fill all required fields.");
      return;
    }

    if (phone.length < 6) {
  alert("Please enter a valid phone number.");
  return;
}
    

    if (
      (course === "singing" ||
        course === "instrumental" ||
        course === "dance") &&
      !subCourse
    ) {
      alert("Please select a course specialization.");
      return;
    }

    setShowSuccessModal(true);

setName("");
setPhone("");
setEmail("");
setCourse("");
setSubCourse("");
setCountryCode("+91");

    // Add your API / EmailJS / backend submission here
  };

  return (
    <section
      id="enquiry-section"
      className="py-16 md:py-24 scroll-mt-32"
    >
      <Container>
        <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-white/90 shadow-2xl backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">

            {/* Left CTA */}
            <div className="bg-[var(--primary)] p-6 md:p-10 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Get Started
              </p>

              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Begin Your Musical Journey Today
              </h2>

              <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
                Learn Vocal Music, Instruments and Dance from experienced
                faculty through structured training programs.
              </p>

              <div className="mt-8 space-y-3">
                <p>✓ Online & Offline Classes</p>
                <p>✓ Expert Faculty</p>
                <p>✓ Certification Programs</p>
                <p>✓ Free Demo Session Available</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-6 md:p-10">
              <SectionHeading
                subtitle="Enquiry"
                title="Book A Free Demo"
                description="Fill out the form and our team will contact you."
              />
              {successMessage && (
  <div className="mb-6 rounded-2xl border border-green-300 bg-green-50 p-5 text-center shadow-md">
    

    <h2 className="mb-4 text-5xl font-extrabold text-[var(--primary)]">
  Enquiry Submitted Successfully!
</h2>

    <p className="mt-2 text-sm leading-relaxed text-green-600">
      {successMessage}
    </p>
  </div>
)}
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-xl border p-4"
                />

                <div className="flex flex-col md:flex-row gap-3">
  <select
    value={countryCode}
    onChange={(e) => setCountryCode(e.target.value)}
    className="w-full md:w-36 rounded-xl border p-4"
  >
    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+61">🇦🇺 +61</option>
    <option value="+971">🇦🇪 +971</option>
    <option value="+65">🇸🇬 +65</option>
    <option value="+81">🇯🇵 +81</option>
    <option value="+49">🇩🇪 +49</option>
    <option value="+33">🇫🇷 +33</option>
    <option value="+39">🇮🇹 +39</option>
    <option value="+86">🇨🇳 +86</option>
    <option value="+7">🇷🇺 +7</option>
    <option value="+92">🇵🇰 +92</option>
    <option value="+880">🇧🇩 +880</option>
    <option value="+94">🇱🇰 +94</option>
    <option value="+977">🇳🇵 +977</option>
  </select>

  <input
    type="tel"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) =>
      setPhone(e.target.value.replace(/\D/g, ""))
    }
    maxLength={15}
    required
    className="w-full rounded-xl border p-3 md:p-4"
  />
</div>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-xl border p-4"
                />

                {/* Main Course */}
                <select
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                    setSubCourse("");
                  }}
                  required
                  className="
w-full
rounded-xl
bg-[var(--primary)]
px-6
py-3
md:py-4
text-white
transition
hover:opacity-90
disabled:cursor-not-allowed
disabled:opacity-50
"
                >
                  <option value="">Select Course</option>
                  <option value="singing">Singing</option>
                  <option value="instrumental">
                    Instrumental Music
                  </option>
                  <option value="dance">Dance</option>
                </select>

                {/* Singing */}
                {course === "singing" && (
                  <select
                    value={subCourse}
                    onChange={(e) => setSubCourse(e.target.value)}
                    required
                    className="rounded-xl border p-4"
                  >
                    <option value="">
                      Select Singing Course
                    </option>
                    <option>Hindustani Classical Vocal</option>
                    <option>Light Music</option>
                    <option>Bhajan & Devotional</option>
                    <option>Bollywood Singing</option>
                  </select>
                )}

                {/* Instrumental */}
                {course === "instrumental" && (
                  <select
                    value={subCourse}
                    onChange={(e) => setSubCourse(e.target.value)}
                    required
                    className="rounded-xl border p-4"
                  >
                    <option value="">
                      Select Instrument
                    </option>
                    <option>Acoustic Guitar</option>
                    <option>Electric Guitar</option>
                    <option>Keyboard</option>
                    <option>Harmonium</option>
                    <option>Tabla</option>
                    <option>Flute</option>
                    <option>Mrudungam</option>
                    <option>Violin</option>
                  </select>
                )}

                {/* Dance */}
                {course === "dance" && (
                  <select
                    value={subCourse}
                    onChange={(e) => setSubCourse(e.target.value)}
                    required
                    className="rounded-xl border p-4"
                  >
                    <option value="">
                      Select Dance Form
                    </option>
                    <option>Kathak</option>
                    <option>Bharatanatyam</option>
                    <option>Bollywood Dance</option>
                  </select>
                )}

                <button
                  type="submit"
                  disabled={
                    !name ||
                    !phone ||
                    !email ||
                    !course ||
                    (course && !subCourse)
                  }
                  className="
w-full
rounded-xl
bg-[var(--primary)]
px-6
py-3
md:py-4
text-white
transition
hover:opacity-90
disabled:cursor-not-allowed
disabled:opacity-50
"
                >
                  Submit Enquiry
                </button>

              </form>
            </div>

          </div>
        </div>
      </Container>
      {showSuccessModal && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="
mx-4
w-full
max-w-3xl
rounded-3xl
bg-white
p-6
md:p-12
text-center
shadow-2xl
">

      <h2 className="mb-4 text-2xl md:text-5xl font-extrabold text-[var(--primary)]">
        Enquiry Submitted Successfully!
      </h2>

      <p className="
mx-auto
max-w-2xl
text-sm
md:text-xl
leading-relaxed
text-gray-600
">
        Thank you for your interest in Gandharva School of Music.
        We have successfully received your enquiry and our team will
        contact you shortly with course details, batch timings, and
        admission guidance.
      </p>

      <button
        onClick={() => {
          setShowSuccessModal(false);

          setName("");
          setPhone("");
          setEmail("");
          setCourse("");
          setSubCourse("");
          setCountryCode("+91");
        }}
        className="
mt-8
w-full
md:w-auto
rounded-2xl
bg-[var(--primary)]
px-8
md:px-12
py-3
md:py-4
text-base
md:text-xl
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:scale-105
"
      >
        OK
      </button>

    </div>
  </div>
)}
    </section>
  );
}