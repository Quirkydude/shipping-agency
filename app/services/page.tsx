import Services from "@/app/components/sections/Services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/images/services-hero.jpeg')",
        }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>Our Services</h1>
          <p>
            From ocean and air freight to road transport, customs clearance, and
            warehouse solutions — we provide end-to-end logistics services
            tailored to your business needs.
          </p>
        </div>
      </section>

      <div className="reveal">
        <Services />
      </div>
    </>
  );
}
