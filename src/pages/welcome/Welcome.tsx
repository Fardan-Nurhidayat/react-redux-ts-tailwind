import Navbar from "@/components/Navbar";
import Hero from "@/pages/welcome/Hero";
import Services from "@/pages/welcome/Services";
import Receipes from "@/pages/welcome/Receipes";
import Contact from "@/pages/welcome/Contact";
export default function Welcome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Receipes />
      <Contact />
    </>
  );
}
