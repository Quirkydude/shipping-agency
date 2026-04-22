/**
 * theme.js — Central configuration for the Advanced Security website.
 *
 * Update this file to change the company name, colors, contact details,
 * navigation links, services, fleet info, testimonials, and social links.
 * All components read from this single source of truth.
 */

const THEME = {
  /* ─── Company Identity ─────────────────────────────────────── */
  company: {
    name: "Advanced Security",
    tagline: "Reliable. Secure. On Time.",
    description:
      "Advanced Security is a leading global shipping and logistics company delivering excellence across land, sea, and air. We connect businesses and individuals with fast, safe, and affordable freight solutions.",
    founded: "2005",
    logoText: "AS", // Used as a text logo; swap for an <img> in components.js if you have one
  },

  /* ─── Brand Colors ──────────────────────────────────────────── */
  colors: {
    primary: "#003087",      // Deep navy blue
    primaryDark: "#001f5b",
    primaryLight: "#1a4dab",
    accent: "#e8a020",       // Golden amber
    accentDark: "#c47c00",
    accentLight: "#ffc14d",
    textDark: "#1a1a2e",
    textMid: "#4a4a6a",
    textLight: "#ffffff",
    bgLight: "#f4f6fb",
    bgWhite: "#ffffff",
    borderColor: "#d8dfe8",
  },

  /* ─── Typography ────────────────────────────────────────────── */
  fonts: {
    heading: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    body: "'Open Sans', 'Segoe UI', Arial, sans-serif",
  },

  /* ─── Navigation Links ──────────────────────────────────────── */
  nav: [
    { label: "Home",      href: "#home" },
    { label: "Services",  href: "#services" },
    { label: "Tracking",  href: "#tracking" },
    { label: "About",     href: "#about" },
    { label: "Fleet",     href: "#fleet" },
    { label: "Contact",   href: "#contact" },
  ],

  /* ─── Hero / Banner ─────────────────────────────────────────── */
  hero: {
    heading: "Your Cargo. Our Priority.",
    subheading:
      "Trusted worldwide shipping solutions for businesses and individuals. Fast. Insured. Delivered.",
    ctaPrimary:   { label: "Get a Quote",      href: "#contact" },
    ctaSecondary: { label: "Track Shipment",   href: "#tracking" },
    stats: [
      { value: "50+",    label: "Countries Served" },
      { value: "200K+",  label: "Shipments Delivered" },
      { value: "99.8%",  label: "On-Time Rate" },
      { value: "24/7",   label: "Customer Support" },
    ],
  },

  /* ─── Services ──────────────────────────────────────────────── */
  services: {
    heading: "Our Services",
    subheading: "End-to-end logistics tailored to your needs",
    items: [
      {
        icon: "🚢",
        title: "Ocean Freight",
        description:
          "Full container load (FCL) and less-than-container load (LCL) shipping across major global sea routes.",
      },
      {
        icon: "✈️",
        title: "Air Freight",
        description:
          "Express and standard air cargo services for time-sensitive shipments to over 150 destinations.",
      },
      {
        icon: "🚛",
        title: "Road Freight",
        description:
          "Domestic and cross-border road transport with real-time GPS tracking and temperature-controlled options.",
      },
      {
        icon: "📦",
        title: "Warehousing",
        description:
          "Secure, climate-controlled storage facilities with inventory management and fulfilment services.",
      },
      {
        icon: "🛡️",
        title: "Cargo Insurance",
        description:
          "Comprehensive cargo insurance policies to protect your goods from origin to final destination.",
      },
      {
        icon: "🔄",
        title: "Customs Clearance",
        description:
          "Expert customs brokerage and documentation support to keep your shipments moving without delays.",
      },
    ],
  },

  /* ─── Tracking Section ──────────────────────────────────────── */
  tracking: {
    heading: "Track Your Shipment",
    subheading:
      "Enter your tracking number below to get real-time updates on your cargo.",
    placeholder: "e.g. AS-2024-001234",
    buttonLabel: "Track Now",
    demoMessage:
      "Demo mode: In a live environment this calls the shipment API. Enter any code and press Track Now.",
  },

  /* ─── About Section ─────────────────────────────────────────── */
  about: {
    heading: "About Advanced Security",
    body: [
      "Founded in 2005, Advanced Security has grown from a regional courier into a globally recognized freight and logistics brand trusted by thousands of businesses worldwide.",
      "Our mission is simple: deliver your cargo safely, on time, every time. We invest continuously in technology, fleet upgrades, and staff training to stay ahead of industry standards.",
      "With strategic partnerships across six continents and a dedicated team of logistics professionals, we offer seamless door-to-door solutions that scale with your business.",
    ],
    highlights: [
      { icon: "🏆", text: "ISO 9001:2015 Certified" },
      { icon: "🌍", text: "6 Continental Hubs" },
      { icon: "👥", text: "1,500+ Dedicated Staff" },
      { icon: "📡", text: "Live GPS Tracking" },
    ],
  },

  /* ─── Fleet / Coverage ──────────────────────────────────────── */
  fleet: {
    heading: "Our Fleet & Coverage",
    subheading: "Modern vehicles and vessels built for reliability",
    items: [
      { icon: "🚢", count: "12",  label: "Cargo Vessels" },
      { icon: "✈️", count: "8",   label: "Air Freighters" },
      { icon: "🚛", count: "320", label: "Road Trucks" },
      { icon: "🏭", count: "15",  label: "Warehouse Hubs" },
    ],
  },

  /* ─── Testimonials ──────────────────────────────────────────── */
  testimonials: {
    heading: "What Our Clients Say",
    items: [
      {
        quote:
          "Advanced Security has been our logistics partner for 7 years. They never miss a deadline and their customer service is outstanding.",
        author: "Sarah Thompson",
        company: "Thompson Electronics Ltd.",
      },
      {
        quote:
          "The online tracking system gives us full visibility. We always know exactly where our shipments are. Highly recommended.",
        author: "Carlos Mendez",
        company: "Mendez Import & Export",
      },
      {
        quote:
          "Switching to Advanced Security cut our shipping costs by 18% while improving delivery times. The best decision we made this year.",
        author: "Aisha Okafor",
        company: "GreenLeaf Organics",
      },
    ],
  },

  /* ─── Contact Details ───────────────────────────────────────── */
  contact: {
    heading: "Get In Touch",
    subheading:
      "Our team is available 24/7 to assist with quotes, tracking, and logistics inquiries.",
    email: "info@advancedsecurity.online",
    phone: "+1 (800) 555-0199",
    phone2: "+1 (800) 555-0200",
    address: {
      street: "742 Harbor Boulevard, Suite 300",
      city: "Miami, FL 33132",
      country: "United States",
    },
    hours: "Monday – Friday: 07:00 – 21:00 EST | Saturday: 09:00 – 15:00 EST",
    formFields: [
      { name: "name",    label: "Full Name",       type: "text",  required: true },
      { name: "email",   label: "Email Address",   type: "email", required: true },
      { name: "phone",   label: "Phone Number",    type: "tel",   required: false },
      { name: "service", label: "Service Needed",  type: "select",required: false,
        options: ["Ocean Freight", "Air Freight", "Road Freight", "Warehousing", "Cargo Insurance", "Customs Clearance", "Other"] },
      { name: "message", label: "Message",         type: "textarea", required: true },
    ],
  },

  /* ─── Social / Footer Links ─────────────────────────────────── */
  social: [
    { label: "Facebook",  icon: "f",  href: "#" },
    { label: "Twitter",   icon: "t",  href: "#" },
    { label: "LinkedIn",  icon: "in", href: "#" },
    { label: "Instagram", icon: "ig", href: "#" },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Advanced Security Shipping & Logistics. All rights reserved.`,
    links: [
      { label: "Privacy Policy",  href: "#" },
      { label: "Terms of Service",href: "#" },
      { label: "Cookie Policy",   href: "#" },
    ],
  },
};
