import { Outlet } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import WhatsAppButton from "../../components/shared/WhatsAppButton";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}