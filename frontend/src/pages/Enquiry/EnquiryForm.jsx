import { useState } from "react";

import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import DemoSessionRadio from "./DemoSessionRadio";

export default function EnquiryForm() {
  const [demoSession, setDemoSession] =
    useState("no");

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          subtitle="Enquiry"
          title="Start Your Musical Journey"
          description="Fill out the form and our team will contact you."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border p-4"
            />

            <select className="rounded-xl border p-4">
              <option>Select Course</option>
              <option>Singing</option>
              <option>Instrumental</option>
              <option>Dance</option>
            </select>

            <DemoSessionRadio
              value={demoSession}
              onChange={setDemoSession}
            />

            {demoSession === "yes" && (
              <>
                <input
                  type="date"
                  className="rounded-xl border p-4"
                />

                <input
                  type="time"
                  className="rounded-xl border p-4"
                />
              </>
            )}

            <button
              type="submit"
              className="rounded-xl bg-[var(--primary)] px-6 py-4 text-white"
            >
              Submit Enquiry
            </button>

          </form>
        </div>
      </Container>
    </section>
  );
}