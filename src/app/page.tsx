import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Maison Laurent | Fine Dining Restaurant",
  description:
    "Experience contemporary French cuisine in an intimate setting. Award-winning chef, seasonal menus, and impeccable service."
};

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Gallery />
        <Team />
        <Testimonials />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
