import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold">
              Gandharva School
            </h3>

            <p className="mt-4 text-gray-400">
              Inspiring musical excellence through expert
              training in vocal music, instruments, and dance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-white transition">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Courses
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Vocal Music</li>
              <li>Instrumental Music</li>
              <li>Dance</li>
              <li>Online Classes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-400">

              {/* Clickable Google Maps Location */}
              <li>
                <a
                  href="https://maps.app.goo.gl/KTMyuMGBzbuFvr7q7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition"
                >
                  📍 Pune, Maharashtra
                </a>
              </li>

              <li>📞 +91 8329195495</li>
              <li>📞 +91 9960073357</li>

              <li>
                <a
                  href="mailto:info@gandharvaschool.com"
                  className="hover:text-[var(--primary)] transition"
                >
                  ✉️ info@gandharvaschool.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Gandharva School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}