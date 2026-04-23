import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Stats from "@/app/components/sections/Stats";
import Services from "@/app/components/sections/Services";
import Features from "@/app/components/sections/Features";
import Quote from "@/app/components/sections/Quote";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Features />
      <Quote />
      <Team />
      <Testimonials />
    </>
  );
}