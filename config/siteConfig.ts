// config/siteConfig.ts
// ─────────────────────────────────────────────
// Edit everything here to update your site info
// No need to touch component files for basic changes
// ─────────────────────────────────────────────

export const siteConfig = {
  // ── Company basics ──────────────────────────
  name: "Advanced Security",
  fullName: "Advanced Security Shipping & Logistics",
  tagline: "Shipping & Logistics Solutions",
  headline: "#1 Place For Your",
  headlineHighlight: "Logistics",
  headlineEnd: "Solution",
  description:
    "Advance security company provides comprehensive security solutions to businesses and individuals. With our expertise and experience, we provide effective security solutions that are tailored to the specific requirements of each client.",

  // ── Contact details ──────────────────────────
  contact: {
    phone: "+1(408)622-9552",
    email: "contact@advancedsecurities.co",
    address: "United States",
  },

  // ── Theme colors ─────────────────────────────
  colors: {
    primary: "#FF0707",       // red — buttons, accents
    secondary: "#00C5FF",     // cyan — section labels
    dark: "#00042E",          // footer background
    white: "#FFFFFF",
    text: "#000000",
  },

  // ── Navigation ───────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  // ── Stats ────────────────────────────────────
  stats: [
    { icon: "heart", value: "80,324", label: "Happy Clients" },
    { icon: "info", value: "82,651", label: "Complete Shipments" },
    { icon: "star", value: "51,428", label: "Customer Reviews" },
  ],

  // ── Services ─────────────────────────────────
  services: [
    {
      title: "Air Freight",
      description:
        "Welcome to our Air Freight service! We offer fast and reliable shipping solutions for your urgent and time-sensitive cargo.",
      image: "/images/service-1.jpeg",
    },
    {
      title: "Ocean Freight",
      description:
        "Our ocean freight services offer a seamless and efficient way to transport your goods across the globe.",
      image: "/images/service-2.jpeg",
    },
    {
      title: "Road Freight",
      description:
        "Road freight is a reliable and cost-effective way to transport goods across the country.",
      image: "/images/service-3.jpeg",
    },
    {
      title: "Train Freight",
      description:
        "Advanced Security Shipping and Logistics provides dependable and effective train freight services.",
      image: "/images/service-4.jpeg",
    },
    {
      title: "Customs Clearance",
      description:
        "Customs clearance is an essential part of the shipping process, and we ensure your packages arrive on time.",
      image: "/images/service-5.jpeg",
    },
    {
      title: "Warehouse Solutions",
      description:
        "Our company offers all-inclusive warehouse solutions that aid businesses in streamlining their operations.",
      image: "/images/service-6.jpeg",
    },
  ],

  // ── Team members ─────────────────────────────
  team: [
    {
      name: "Michael Thompson",
      role: "Chief Executive Officer",
      image: "/images/team-1.jpeg",
    },
    {
      name: "James Walker",
      role: "Chief Operations Officer",
      image: "/images/team-2.jpeg",
    },
    {
      name: "John Lewis",
      role: "Director of Shipping Operations",
      image: "/images/team-3.jpeg",
    },
    {
      name: "Suzanne Merritt",
      role: "Senior Supply Chain Manager",
      image: "/images/team-4.jpeg",
    },
  ],

  // ── Testimonials ─────────────────────────────
  testimonials: [
    {
      name: "Karen",
      text: "I trust Advance Security Shipping and Logistics to handle my packages with care. They have never let me down and always deliver on time.",
      image: "/images/testimonial-1.jpeg",
    },
    {
      name: "Carol",
      text: "Advance Security Shipping and Logistics has been a game changer for my business. Their reliable and efficient services have helped me streamline my shipping process.",
      image: "/images/testimonial-2.jpeg",
    },
    {
      name: "John",
      text: "Advance Security Shipping and Logistics provides top-notch warehousing services for all your storage needs.",
      image: "/images/testimonial-3.jpeg",
    },
  ],

  // ── Social links ─────────────────────────────
  social: [
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "Twitter", href: "https://www.twitter.com", icon: "twitter" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  ],

  // ── Quote form dropdown options ───────────────
  serviceOptions: [
    "Air Freight",
    "Ocean Freight",
    "Road Freight",
    "Train Freight",
    "Customs Clearance",
    "Warehouse Solutions",
  ],

  // ── Global Branches / Locations ──────────────
  branches: [
    { country: "Philippines", flag: "🇵🇭" },
    { country: "United Kingdom", flag: "🇬🇧" },
    { country: "United States", flag: "🇺🇸" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "UAE", flag: "🇦🇪" },
    { country: "Singapore", flag: "🇸🇬" },
    { country: "Australia", flag: "🇦🇺" },
    { country: "Canada", flag: "🇨🇦" },
  ],

  // ── Footer ───────────────────────────────────
  footerTagline: "©AdvancedSecurityShipping, All Rights Reserved.",
  foundedYear: "1990",
};