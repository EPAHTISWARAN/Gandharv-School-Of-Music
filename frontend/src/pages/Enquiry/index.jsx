
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Enquiry() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("enquiry-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }, [navigate]);

  return null;
}

