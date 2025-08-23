import Navbar from "@/components/navbar";
import Hero from "@/pages/welcome/Hero";
import Services from "@/pages/welcome/Services";
import Receipes from "@/pages/welcome/Receipes";
export default function Welcome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Receipes />
    </>
  );
}
