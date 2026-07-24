export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const avatarUrls = Array.from(
  { length: 10 },
  (_, i) => `/images/avatars/avatar-${i + 1}.jpg`
);

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export type ProjectBackgroundItem = {
  icon: string;
  title: string;
  description: string;
};

export type MatrixBubble = {
  label: string;
  top: number;
  left: number;
  size: number;
  tier: 1 | 2;
  pulse?: boolean;
};

export type MatrixDot = {
  label: string;
  top: number;
  left: number;
  tier: 1 | 2;
};

export type MatrixExcluded = {
  label: string;
  top: number;
  left: number;
  size: number;
};

export type MatrixSideCard = {
  title: string;
  image: string;
  description: string;
  imagePosition?: string;
};

export type PriorityMatrix = {
  legend: { tier: 1 | 2 | 3; label: string }[];
  bubbles: MatrixBubble[];
  dots: MatrixDot[];
  excluded: MatrixExcluded[];
  axis: { top: string; bottom: string; right: string; yLabel: string; xLabel: string };
  sideCards: MatrixSideCard[];
};

export type ProcessStep = {
  label: string[];
  emphasis: boolean;
};

export type ProcessSolution = {
  icon: string;
  title: string;
  description: string;
};

export type ProcessPainPoint = {
  step: number;
  title: string;
  description: string;
  solution: ProcessSolution;
};

export type ProcessFlow = {
  steps: ProcessStep[];
  painPoints: ProcessPainPoint[];
};

export type HowItWorksStep = {
  title: string;
  description: string;
  image?: string;
  fit?: "cover" | "contain";
};

export type DesignHighlight = {
  heading: string;
  subtitle?: string;
};

export type DesignIterationItem = {
  title: string;
  description: string;
  beforeImage?: string;
  afterImage?: string;
  workflowBefore?: string;
  workflowAfter?: string;
};

export type DesignIteration = {
  eyebrow: string;
  items?: DesignIterationItem[];
};

export type HowItWorks = {
  eyebrow: string;
  title: string;
  subtitle: string;
  query: string;
  steps: HowItWorksStep[];
  feedbackLoop: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  client: string;
  type: string;
  image: string;
  deviceMockup: boolean;
  description: string;
  duration: string;
  team: string[];
  role: string[];
  background?: ProjectBackgroundItem[];
  summary?: { eyebrow?: string; title: string; description: string };
  priorityMatrix?: PriorityMatrix;
  processFlow?: ProcessFlow;
  howItWorks?: HowItWorks;
  designHighlight?: DesignHighlight;
  designIteration?: DesignIteration;
  personaAvatar?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "nimbus-finance",
    name: "Nimbus Finance",
    client: "Nimbus",
    type: "Brand Identity & Web App",
    image: "/images/projects/project-1.jpg",
    deviceMockup: true,
    description:
      "A fintech onboarding and dashboard redesign that cut signup drop-off and gave a 50,000-customer platform a brand system it could finally scale with.",
    duration: "6 weeks",
    team: ["Founder ×1", "Engineer ×2", "Designer ×1"],
    role: [
      "User interviews & analysis",
      "Competitive analysis",
      "User flows & UI design",
      "Design system & handoff",
    ],
  },
  {
    id: "2",
    slug: "solace-wellness",
    name: "Solace Wellness",
    client: "Solace",
    type: "Landing Page Design",
    image: "/images/projects/project-2.jpg",
    deviceMockup: true,
    description:
      "A conversion-focused landing page for a wellness booking platform, rebuilt from the ground up to make the core booking flow feel effortless.",
    duration: "4 weeks",
    team: ["Founder ×1", "Marketing ×1", "Designer ×1"],
    role: [
      "Landing page strategy",
      "Wireframes & UI design",
      "Copy direction",
      "Framer build",
    ],
  },
  {
    id: "3",
    slug: "fieldnote-studio",
    name: "Fieldnote Studio",
    client: "Fieldnote",
    type: "Brand Identity",
    image: "/images/projects/project-3.jpg",
    deviceMockup: true,
    description:
      "A full brand identity for a creative studio, from naming exploration to a visual system that carries across their site, decks, and social presence.",
    duration: "5 weeks",
    team: ["Founder ×2", "Designer ×1"],
    role: [
      "Brand strategy",
      "Logo & visual identity",
      "Brand guidelines",
      "Website design",
    ],
  },
  {
    id: "4",
    slug: "orbit-analytics",
    name: "Orbit Analytics",
    client: "Orbit",
    type: "Web App Design",
    image: "/images/projects/project-4.jpg",
    deviceMockup: true,
    description:
      "A data-dense analytics dashboard redesigned for clarity — restructuring the information hierarchy so teams could act on insights, not dig for them.",
    duration: "8 weeks",
    team: ["Product Manager ×1", "Engineer ×3", "Designer ×1"],
    role: [
      "Information architecture",
      "Dashboard UI design",
      "Design system",
      "Usability testing",
    ],
  },
  {
    id: "5",
    slug: "vision-detect",
    name: "VisionDetect AI B2B SaaS Platform",
    client: "VisionDetect",
    type: "AI B2B SaaS Platform",
    image: "/images/projects/vision-detect/hero.png",
    deviceMockup: false,
    description:
      "A computer vision platform that fills the surveillance gaps between EHS patrols, lowering factory safety incident rates.",
    duration: "9 weeks",
    team: ["Project Manager ×2", "Software Engineer ×2", "UI/UX Designer ×1"],
    role: [
      "User interviews & analysis",
      "Competitive analysis",
      "User flows & UI design",
      "Cross-team stakeholder workshops",
    ],
    background: [
      {
        icon: "chart-line",
        title: "1. Industry Pain Points",
        description:
          "Manufacturing ranks 2nd in fatal workplace accidents (targets missed 2022–2024), driving the need for automated monitoring.",
      },
      {
        icon: "smile",
        title: "2. Business Needs",
        description:
          "SI interviews identify factory safety as the top enterprise demand, guiding product focus.",
      },
      {
        icon: "scan-eye",
        title: "3. Technical Advantages",
        description:
          "Leveraging Advantech's edge computing to validate PoC sites and deliver a smart vision safety platform.",
      },
    ],
    summary: {
      eyebrow: "User Research",
      title: "PoC Deployment Focus",
      description:
        "Targeting high-potential manufacturing sites for factory safety PoC validation.",
    },
    priorityMatrix: {
      legend: [
        { tier: 1, label: "Final adoption · Priority PoC site" },
        { tier: 2, label: "Candidate — not prioritized this round" },
        { tier: 3, label: "Excluded (hardware / tech limits)" },
      ],
      bubbles: [
        {
          label: "Hazardous Machinery Alert",
          top: 24,
          left: 45,
          size: 150,
          tier: 1,
          pulse: true,
        },
        {
          label: "PPE Compliance Detection",
          top: 36,
          left: 62,
          size: 126,
          tier: 1,
          pulse: true,
        },
        {
          label: "Restricted Zone Access",
          top: 70,
          left: 64,
          size: 112,
          tier: 2,
        },
      ],
      dots: [
        { label: "Cleanroom Attire Compliance", top: 48, left: 47, tier: 2 },
        { label: "Contractor Safety Monitoring", top: 55, left: 47, tier: 2 },
        { label: "Restricted Area Control", top: 61, left: 33, tier: 2 },
        { label: "Personnel Work Zones", top: 67, left: 33, tier: 2 },
        { label: "Cleanroom Access Control", top: 73, left: 33, tier: 2 },
      ],
      excluded: [
        { label: "Equipment Perimeter Alert", top: 63, left: 15, size: 108 },
        { label: "Gas Leak Detection", top: 82, left: 10, size: 92 },
      ],
      axis: {
        top: "High priority",
        bottom: "Low priority",
        right: "High feasibility",
        yLabel: "Client's desired priority",
        xLabel: "Technical feasibility",
      },
      sideCards: [
        {
          title: "Hazardous Machinery Alert",
          image: "/images/projects/vision-detect/scenario-forklift.png",
          description: "Detects whether forklifts are operating at unsafe speeds.",
        },
        {
          title: "PPE Compliance Detection",
          image: "/images/projects/vision-detect/scenario-ppe.png",
          description: "Detects whether contractors are properly wearing required PPE.",
          imagePosition: "center 15%",
        },
      ],
    },
    processFlow: {
      steps: [
        { label: ["Inspection Prep", "& Route Planning"], emphasis: false },
        { label: ["Contractor Liaison", "& Briefing"], emphasis: false },
        { label: ["On-Site", "Inspection"], emphasis: true },
        { label: ["Event Occurrence", "and Resolution"], emphasis: true },
        { label: ["Major Incident", "Reporting &", "Investigation"], emphasis: true },
        { label: ["Periodic Reporting", "& Auditing"], emphasis: false },
      ],
      painPoints: [
        {
          step: 3,
          title: "On-Site Inspection",
          description:
            "Manual inspections only 2–3 times daily leave significant monitoring blind spots.",
          solution: {
            icon: "scan-eye",
            title: "24/7 Proactive VLM Video Monitoring",
            description: "Fills the gaps of manual inspection time.",
          },
        },
        {
          step: 4,
          title: "Event Occurrence and Resolution",
          description:
            "Passive CCTV recording lacks real-time anomaly detection, leaving unmitigated safety blind spots.",
          solution: {
            icon: "scan-eye",
            title: "Proactive Detection of Violations and Anomalies via VLM",
            description:
              "Shifting from \"passive recording\" to \"active analysis\" with real-time video evidence retention.",
          },
        },
        {
          step: 5,
          title: "Major Incident Reporting & Investigation",
          description:
            "In a major incident, critical data (e.g., event timeline and cause) cannot be obtained immediately.",
          solution: {
            icon: "bot-message-square",
            title: "LLM-Powered Event Reconstruction and Automated Reporting",
            description:
              "Consolidates event timelines, detection results, and video evidence, enabling fast queries via natural language and generating ISO 45001 audit reports within 8 hours.",
          },
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title:
        "To solve key pain points, our v1 MVP delivers an end-to-end product workflow.",
      subtitle:
        "Let's take “Is the contractor wearing a helmet?” as our PoC validation scenario:",
      query:
        "I need to check whether contractors are following ISO 45001 procedures (wearing helmets). If someone is in violation, I need to know how many people and see the corresponding video evidence, to use as audit report documentation.",
      steps: [
        {
          title: "Bind Stream or Upload Video",
          description: "Connect a live camera stream or existing footage.",
          image: "/images/projects/vision-detect/step1.gif",
        },
        {
          title: "VLM Active Analysis",
          description:
            "Set a template like “Is a helmet being worn?” for continuous, full-time detection.",
          image: "/images/projects/vision-detect/step2.mp4",
        },
        {
          title: "LLM Retrieves Information",
          description:
            "Ask in natural language for violation counts, timestamps, and footage.",
          image: "/images/projects/vision-detect/step3.mp4",
          fit: "cover",
        },
        {
          title: "Get Report & Key Frames",
          description:
            "Generate ISO 45001 audit reports with supporting video evidence.",
          image: "/images/projects/vision-detect/step4.gif",
          fit: "cover",
        },
      ],
      feedbackLoop:
        "LLM feeds configuration suggestions back to the VLM, forming a feedback loop that continuously improves detection accuracy.",
    },
    designHighlight: {
      heading: "Design Iteration: Step 2 (VLM Active Analysis)",
      subtitle: "Internal testing insights led to two key feature enhancements.",
    },
    designIteration: {
      eyebrow: "Design Iteration",
      items: [
        {
          title: "Key 1: Streamlining Video Setup — Solving Scalability Bottlenecks",
          description:
            "Before: Manual setups for each camera drove up deployment time linearly with scale.\nAfter: Fine-tune 1 video feed in the Test Zone and one-click apply to 10 Operational Zones, cutting manual effort by 80%.",
          beforeImage: "/images/projects/vision-detect/design-iteration-1-before.png",
          afterImage: "/images/projects/vision-detect/design-iteration-1-after.png",
          workflowBefore:
            "每增加一支攝影機就需重複測試一次，設定時間隨鏡頭數倍增。",
          workflowAfter:
            "完成單一驗證後一鍵套用全場，節省 80% 重複操作時間。",
        },
        {
          title: "Key 2: Optimizing Prompt Input Interface — Enhancing Model Precision",
          description: "",
        },
      ],
    },
    personaAvatar: "/images/projects/vision-detect/persona-avatar.png",
  },
];

export const services = [
  { name: "Framer Dev" },
  { name: "Brand Design" },
  { name: "Web Apps" },
  { name: "Landing Pages" },
  { name: "Motion Graphics" },
  { name: "3D Design" },
  { name: "UI UX Consultation" },
];

export const techStack = [
  "Figma",
  "Framer",
  "Webflow",
  "Notion",
  "Slack",
  "Jira",
  "Photoshop",
  "Illustrator",
];

export const workHistory = [
  {
    role: "Senior Product Designer",
    company: "Nimbus Labs",
    dates: "2022 — Present",
    description:
      "Leading brand and product design for a fintech platform used by 50,000+ customers, from design system to shipped features.",
  },
  {
    role: "Product Designer",
    company: "Solace",
    dates: "2020 — 2022",
    description:
      "Designed the core booking flow and marketing site, improving conversion by 34% through iterative testing.",
  },
  {
    role: "Freelance Designer",
    company: "Self-employed",
    dates: "2018 — 2020",
    description:
      "Worked with early-stage startups on brand identity, landing pages, and product design sprints.",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Joseph was the best design decision we made this year. Our conversion rate doubled within two months of launch.",
    name: "Amara Cole",
    role: "Founder, Nimbus Finance",
    avatar: avatarUrls[0],
  },
  {
    quote:
      "Incredibly fast, thoughtful, and detail-oriented. The new site finally feels like our brand.",
    name: "Daniel Osei",
    role: "CEO, Solace Wellness",
    avatar: avatarUrls[1],
  },
  {
    quote:
      "He doesn't just make things pretty — every decision was backed by a reason tied to our goals.",
    name: "Priya Nair",
    role: "Marketing Lead, Fieldnote",
    avatar: avatarUrls[2],
  },
  {
    quote:
      "Communication was seamless from kickoff to launch. Would work with him again in a heartbeat.",
    name: "Marcus Lin",
    role: "Founder, Orbit Analytics",
    avatar: avatarUrls[3],
  },
  {
    quote:
      "The subscription model let us ship design updates weekly instead of waiting on quarterly sprints.",
    name: "Elena Brandt",
    role: "COO, Layerhouse",
    avatar: avatarUrls[4],
  },
  {
    quote:
      "Sharp eye for detail and genuinely invested in our outcomes, not just deliverables.",
    name: "Tomas Reyes",
    role: "Founder, Vantage Studio",
    avatar: avatarUrls[5],
  },
];

export const faqs = [
  {
    question: "What's included in the design subscription?",
    answer:
      "Unlimited design requests, revisions, and a dedicated Trello board to track progress — pause or cancel anytime.",
  },
  {
    question: "How fast do you turn around requests?",
    answer:
      "Most requests are completed within 2-3 business days, with priority requests turned around in 24-48 hours.",
  },
  {
    question: "Do you work with startups on a budget?",
    answer:
      "Yes — the single project rate is designed for teams that need one-off work without a monthly commitment.",
  },
  {
    question: "What tools do you design in?",
    answer:
      "Figma for product and brand work, Framer and Webflow for development, with After Effects for motion.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free discovery call, and I'll follow up with a proposal and timeline within 24 hours.",
  },
];

export const articles = [
  {
    title: "How I structure a design sprint for early-stage startups",
    date: "Jun 12, 2025",
    description:
      "A breakdown of the exact process I use to go from brief to shipped design in under two weeks.",
    image: "/images/blog/blog-featured.jpeg",
    featured: true,
  },
  {
    title: "Why most landing pages fail to convert",
    date: "May 3, 2025",
    description: "Five patterns I see repeatedly across underperforming pages.",
    image: "/images/blog/blog-2.jpeg",
  },
  {
    title: "Design subscriptions vs. project work",
    date: "Apr 18, 2025",
    description: "How to decide which pricing model fits your team's pace.",
    image: "/images/blog/blog-3.jpeg",
  },
];
