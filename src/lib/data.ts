import {
  Industry,
  Business,
  Founder,
  CoreValue,
  Milestone,
} from "./types";

// ── Founders ────────────────────────────────────────────────────────────────

export const founders: Founder[] = [
  {
    name: "Gillala Dinesh Reddy",
    role: "Co-Founder & CEO",
    bio: "A visionary technologist with deep expertise in building scalable SaaS platforms and distributed systems. Dinesh brings together the ancient wisdom of Bharat with modern engineering to create technology that serves humanity. His work on FeatureSignals demonstrates his commitment to open-source, developer-first tools that empower teams worldwide. He envisions a future where India leads the global technology landscape through innovation rooted in dharma.",
    linkedin: "https://www.linkedin.com/in/dinesh-gillala-6a7503215/",
    github: "https://github.com/dinesh-g1",
  },
  {
    name: "Jakka Shashi Kumar Reddy",
    role: "Co-Founder & CTO",
    bio: "A passionate engineer and product thinker who believes technology should be accessible, sustainable, and transformative. Shashi brings a unique perspective that blends deep technical knowledge with an understanding of Bharat's cultural heritage. His approach to building products emphasizes simplicity, performance, and user-centric design — principles drawn from the timeless Indian philosophy of doing more with less.",
    linkedin: "https://www.linkedin.com/in/ssjvirtually/",
  },
];

// ── Core Values ─────────────────────────────────────────────────────────────

export const coreValues: CoreValue[] = [
  {
    title: "Dharma-Driven Innovation",
    sanskrit: "धर्मो रक्षति रक्षितः",
    description:
      "We build technology guided by dharma — the eternal principle of righteousness, duty, and cosmic order. Every product we create must serve the greater good, uphold ethical standards, and contribute positively to society. Innovation without ethics is destruction; we choose the path of conscious creation.",
    icon: "🕉️",
  },
  {
    title: "Sustainability & Harmony with Nature",
    sanskrit: "प्रकृतिः रक्षति रक्षिता",
    description:
      "Drawing from Bharat's ancient reverence for nature, we design technology that harmonizes with the environment rather than exploits it. From energy-efficient infrastructure to minimal-waste development practices, we honor Mother Earth in every line of code we write and every server we deploy.",
    icon: "🌿",
  },
  {
    title: "Knowledge as Service",
    sanskrit: "ज्ञानं परमं ध्येयम्",
    description:
      "True to the tradition of Nalanda, Takshashila, and the great gurukuls, we believe knowledge grows when shared. Our open-source initiatives, documentation, and community engagement reflect our commitment to democratizing technology and empowering the next generation of builders.",
    icon: "📚",
  },
  {
    title: "Atmanirbhar Bharat",
    sanskrit: "आत्मनिर्भर भारत",
    description:
      "We are committed to building a self-reliant India that creates world-class technology on its own soil. Every product we build strengthens India's position in the global technology landscape, reduces dependency on foreign solutions, and creates opportunities for Indian talent to shine on the world stage.",
    icon: "🇮🇳",
  },
  {
    title: "Excellence through Yoga",
    sanskrit: "योगः कर्मसु कौशलम्",
    description:
      "Excellence in action is yoga. We pursue perfection not as a destination but as a continuous practice — a yajna of quality. Every commit, every deployment, every customer interaction is an offering made with complete dedication and mindfulness.",
    icon: "🙏",
  },
  {
    title: "Vasudhaiva Kutumbakam",
    sanskrit: "वसुधैव कुटुम्बकम्",
    description:
      "The world is one family. While our roots are in Bharat, our vision is global. We build technology that transcends borders, languages, and cultures — serving humanity as one interconnected family, just as our ancient seers envisioned.",
    icon: "🌍",
  },
];

// ── Milestones ──────────────────────────────────────────────────────────────

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "The Foundation",
    description:
      "Vivekananda Technology Labs was established by Dinesh Reddy and Shashi Kumar Reddy with a vision to take Bharat to the forefront of the global technological revolution. The foundation draws its name and inspiration from Swami Vivekananda's call to arise, awake, and stop not till the goal is reached.",
  },
  {
    year: "2025",
    title: "FeatureSignals — First Venture",
    description:
      "Our first SaaS venture, FeatureSignals, was launched — an open-source feature flag management platform built for developers who demand sub-millisecond performance, transparent pricing, and zero vendor lock-in. Built with Go and Next.js, it represents our philosophy of pragmatic, high-performance engineering.",
  },
  {
    year: "2026",
    title: "Expanding Horizons",
    description:
      "With FeatureSignals gaining traction in the IT & Software industry, we begin laying the groundwork for expansion into new sectors — healthcare, agriculture, education, manufacturing, and beyond. The Vivekananda Technology Labs platform becomes the parent organization for a growing family of purpose-driven ventures.",
  },
];

// ── Industries ──────────────────────────────────────────────────────────────

export const industries: Industry[] = [
  {
    slug: "it-software",
    name: "IT & Software",
    nameSanskrit: "सूचना प्रौद्योगिकी",
    description:
      "Building the digital backbone of the new Bharat — from developer tools and SaaS platforms to AI/ML infrastructure and cybersecurity solutions. Our software products are engineered for performance, reliability, and scale, serving developers and enterprises worldwide.",
    icon: "💻",
    color: "#C75B1A",
    order: 1,
    status: "active",
    businesses: [
      {
        slug: "featuresignals",
        name: "FeatureSignals",
        tagline:
          "Open-source feature flag management with sub-millisecond evaluation",
        description:
          "An open-source feature flag management platform that delivers sub-millisecond evaluation, real-time updates via SSE streaming, and zero vendor lock-in through OpenFeature-native SDKs. Built as a single Go binary with PostgreSQL — no Redis, no message queues, just pure performance.",
        longDescription:
          "FeatureSignals is our flagship SaaS product in the IT & Software industry. It eliminates the trade-offs that plague existing feature flag platforms: unpredictable pricing, operational complexity, and vendor lock-in. With transparent flat-tier pricing, an in-memory ruleset cache powered by PostgreSQL LISTEN/NOTIFY, and native OpenFeature support across Go, Node.js, Python, Java, C#, and Ruby SDKs, FeatureSignals represents the best of what Indian engineering can deliver to the global developer community.\n\nBuilt from the ground up with enterprise-grade security, RBAC, approval workflows, and tamper-evident audit logging, FeatureSignals serves teams of all sizes — from startups running a single environment to enterprises managing hundreds of flags across dozens of projects.",
        industry: "it-software",
        website: "https://featuresignals.com",
        status: "in-progress",
        features: [
          "Boolean, string, number, and JSON flag types",
          "Advanced targeting with segmentation and percentage rollouts",
          "Real-time flag updates via SSE streaming",
          "Sub-millisecond local evaluation in all SDKs",
          "Approval workflows with tamper-evident audit logging",
          "Per-environment RBAC and API key management",
          "HMAC-signed webhooks with automatic retry",
          "Kill switches and scheduled flag changes",
          "A/B testing with consistent user assignment",
          "Relay proxy for edge caching and air-gapped environments",
        ],
        technologies: [
          "Go",
          "Next.js",
          "PostgreSQL",
          "TypeScript",
          "Docker",
          "OpenFeature",
        ],
        links: {
          website: "https://featuresignals.com",
          github: "https://github.com/dinesh-g1/featuresignals",
          docs: "https://featuresignals.com/docs",
        },
      },
    ],
  },
  {
    slug: "healthcare-biotech",
    name: "Healthcare & Biotech",
    nameSanskrit: "आरोग्य विज्ञान",
    description:
      "Leveraging AI, genomics, and digital health platforms to make quality healthcare accessible to every corner of Bharat. Inspired by Ayurveda's holistic approach, we aim to integrate traditional wisdom with cutting-edge biotechnology.",
    icon: "🏥",
    color: "#2E7D32",
    order: 2,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "agriculture-food",
    name: "Agriculture & Food Technology",
    nameSanskrit: "कृषि प्रौद्योगिकी",
    description:
      "Transforming Indian agriculture through precision farming, AI-driven crop management, sustainable practices, and farm-to-fork supply chain innovation. Honoring the farmer — the Annadata — while building the technology to secure our food future.",
    icon: "🌾",
    color: "#558B2F",
    order: 3,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "education-edtech",
    name: "Education & EdTech",
    nameSanskrit: "विद्या प्रौद्योगिकी",
    description:
      "Reviving the gurukul spirit for the digital age. Building platforms that make world-class education — from Vedic mathematics to quantum computing — accessible to every Indian student, regardless of geography or economic background.",
    icon: "🎓",
    color: "#5C6BC0",
    order: 4,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "manufacturing-industry",
    name: "Manufacturing & Industry 4.0",
    nameSanskrit: "उद्योग प्रौद्योगिकी",
    description:
      "Powering India's manufacturing renaissance with IoT, robotics, digital twins, and smart factory solutions. Building the technology stack for Make in India 2.0 — automated, efficient, and globally competitive.",
    icon: "🏭",
    color: "#6D4C41",
    order: 5,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "energy-sustainability",
    name: "Energy & Sustainability",
    nameSanskrit: "ऊर्जा प्रौद्योगिकी",
    description:
      "Driving India's clean energy transition with smart grid technology, renewable energy optimization, battery storage innovations, and carbon management platforms. Technology in service of a sustainable future for all.",
    icon: "⚡",
    color: "#F9A825",
    order: 6,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "space-defence",
    name: "Space & Defence Technology",
    nameSanskrit: "अन्तरिक्ष प्रौद्योगिकी",
    description:
      "Contributing to India's space program and defence capabilities through advanced software, simulation systems, satellite data analytics, and secure communication platforms. From the legacy of Aryabhata to the age of Gaganyaan.",
    icon: "🚀",
    color: "#1A237E",
    order: 7,
    status: "upcoming",
    businesses: [],
  },
  {
    slug: "fintech-blockchain",
    name: "FinTech & Digital Economy",
    nameSanskrit: "अर्थ प्रौद्योगिकी",
    description:
      "Building the infrastructure for India's digital economy — payment systems, blockchain platforms, decentralized finance, and digital identity solutions. Creating a financial ecosystem that is inclusive, secure, and borderless.",
    icon: "💰",
    color: "#B8860B",
    order: 8,
    status: "upcoming",
    businesses: [],
  },
];

// ── Helper Functions ─────────────────────────────────────────────────────────

export function getAllBusinesses(): Business[] {
  return industries.flatMap((industry) => industry.businesses);
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return getAllBusinesses().find((b) => b.slug === slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getActiveIndustries(): Industry[] {
  return industries.filter((i) => i.status === "active");
}

// ── Site Metadata ───────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Vivekananda Technology Labs",
  shortName: "VTL",
  tagline: "Bharat's Technological Renaissance — For the World",
  description:
    "Vivekananda Technology Labs is a foundation dedicated to taking Bharat to the forefront of the global technological revolution. We build world-class software products, platforms, and ventures that carry forward India's ancient legacy of scientific excellence and spiritual wisdom.",
  url: "https://vivekanandatechnologylabs.com",
  ogImage: "https://vivekanandatechnologylabs.com/images/og-image.jpg",
  links: {
    github: "https://github.com/dinesh-g1",
    email: "hello@vivekanandatechnologylabs.com",
  },
  founded: 2025,
  founders: "Gillala Dinesh Reddy & Jakka Shashi Kumar Reddy",
  location: "India (Bharat)",
};
