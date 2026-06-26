
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold sm:text-2xl">
              Gandharva School
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Inspiring musical excellence through expert training in vocal
              music, instruments, and dance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold sm:text-lg">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-400 sm:text-base">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="transition hover:text-white"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="transition hover:text-white"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/#enquiry-section"
                  className="transition hover:text-white"
                >
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-base font-semibold sm:text-lg">
              Courses
            </h4>

            <ul className="space-y-2 text-sm text-gray-400 sm:text-base">

              <li>
                <Link
                  to="/courses/vocal"
                  className="transition hover:text-[var(--primary)]"
                >
                  Vocal Music
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/instrumental"
                  className="transition hover:text-[var(--primary)]"
                >
                  Instrumental Music
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/dance"
                  className="transition hover:text-[var(--primary)]"
                >
                  Dance
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base font-semibold sm:text-lg">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">

              <li>
                <a
                  href="https://maps.app.goo.gl/Fwf6T8C4Z17hUgZo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--primary)]"
                >
                  📍 Gandharva School Of Music
                </a>
              </li>

              <li>
                <a
                  href="tel:+918329195495"
                  className="transition hover:text-[var(--primary)]"
                >
                  📞 +91 8329195495
                </a>
              </li>

              <li>
                <a
                  href="tel:+919960073357"
                  className="transition hover:text-[var(--primary)]"
                >
                  📞 +91 9960073357
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@gandharvaschool.com"
                  className="break-all transition hover:text-[var(--primary)]"
                >
                  ✉️ info@gandharvaschool.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-5 text-center text-xs text-gray-500 sm:text-sm">
          © {new Date().getFullYear()} Gandharva School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

