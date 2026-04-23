import About from "@/app/components/sections/About";
import Stats from "@/app/components/sections/Stats";
import Team from "@/app/components/sections/Team";

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/images/about-hero.jpeg')",
        }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>About Us</h1>
          <p>
            Advanced Security Shipping & Logistics is a trusted leader in shipping
            and logistics, delivering comprehensive security solutions tailored to
            each client's unique requirements. With years of industry expertise,
            we ensure your cargo reaches its destination safely and on time.
          </p>
        </div>
      </section>

      <div className="reveal">
        <About />
      </div>
      <div className="reveal reveal-delay-1">
        <Stats />
      </div>
      <div className="reveal reveal-delay-2">
        <Team />
      </div>
    </>
  );
}
