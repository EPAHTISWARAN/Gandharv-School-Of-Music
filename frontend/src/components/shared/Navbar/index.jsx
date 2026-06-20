
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/images/home/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnquiryClick = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("enquiry-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };



// TO THIS
const navLinkClass = `
relative
text-2xl
font-semibold
tracking-wide
transition-all
duration-300
hover:text-[var(--primary)]
hover:scale-110
hover:-translate-y-1
hover:drop-shadow-[0_0_12px_rgba(240,90,34,0.8)]
after:absolute
after:left-0
after:-bottom-2
after:h-[3px]
after:w-0
after:bg-[var(--primary)]
after:transition-all
after:duration-300
hover:after:w-full
`;


  
   

  
const dropdownItemClass = `
block
text-lg
font-medium
rounded-lg
px-3
py-2
transition-all
duration-300
hover:text-[var(--primary)]
hover:bg-white/10
hover:translate-x-2
hover:scale-105
hover:drop-shadow-[0_0_10px_rgba(240,90,34,0.8)]
`;


    "block transition-all duration-300 hover:text-[var(--primary)] hover:translate-x-1";

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-28 items-center justify-between pl-1 pr-6">

  {/* Logo */}
  <Link to="/" className="flex items-center gap-4 -ml-2">
    <img
      src={logo}
      alt="Gandharva School Of Music"
      className="h-44 w-auto object-contain drop-shadow-2xl"
    />

    <span
  style={{ fontFamily: "Cinzel, serif" }}
  className={`text-5xl font-extrabold tracking-normal leading-tight ${
    scrolled ? "text-black" : "text-white"
  }`}
>
  Gandharv School Of Music
</span>
  </Link>

  {/* Navigation */}
  <div
    className={`flex items-center gap-8 ${
      scrolled ? "text-black" : "text-white"
    }`}
  >


          <Link to="/" className={navLinkClass}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="group relative">
            <Link to="/courses" className={navLinkClass}>
              Courses
            </Link>

            
<div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[900px] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/70 p-8 text-white opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">


              <div className="grid grid-cols-3 gap-10">
                {/* Vocal */}
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[var(--primary)] transition-all duration-300 group-hover:scale-105">
  🎤 Vocal Music
</h3>

                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Hindustani Classical
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Semi-Classical
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Light Music
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Bollywood Singing
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Bhajans & Devotional
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Instrumental */}
                {/* Instrumental */}
<div className="-ml-8">
                  
<h3 className="mb-4 whitespace-nowrap text-2xl font-bold text-[var(--primary)] transition-all duration-300 group-hover:scale-105">
  🎹 Instrumental Music
</h3>



                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Keyboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Guitar
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Tabla
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Harmonium
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Flute
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Violin
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Mrudungam
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Dance */}
                <div>
                  
<h3 className="mb-4 text-2xl font-bold text-[var(--primary)] transition-all duration-300 group-hover:scale-105">
  💃 Dance
</h3>



                  <ul className="space-y-3">
                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Kathak
                      </Link>
                    </li>

                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Bharatanatyam
                      </Link>
                    </li>

                    

                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Bollywood Dance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className={navLinkClass}>
            About
          </Link>

          <Link to="/events" className={navLinkClass}>
            Events
          </Link>

          <button
            type="button"
            onClick={handleEnquiryClick}
            className={`${navLinkClass} cursor-pointer border-none bg-transparent p-0 text-inherit`}
          >
            Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
}