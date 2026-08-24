import type { Localized } from "@/lib/i18n/resolve";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/files/resume.pdf" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juiling?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

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
  label: Localized;
  top: number;
  left: number;
  size: number;
  tier: 1 | 2;
  pulse?: boolean;
};

export type MatrixDot = {
  label: Localized;
  top: number;
  left: number;
  tier: 1 | 2;
};

export type MatrixExcluded = {
  label: Localized;
  top: number;
  left: number;
  size: number;
};

export type MatrixSideCard = {
  title: Localized;
  image: string;
  description: Localized;
  imagePosition?: string;
};

export type PriorityMatrix = {
  legend: { tier: 1 | 2 | 3; label: Localized }[];
  bubbles: MatrixBubble[];
  dots: MatrixDot[];
  excluded: MatrixExcluded[];
  axis: { top: Localized; bottom: Localized; right: Localized; yLabel: Localized; xLabel: Localized };
  sideCards: MatrixSideCard[];
};

export type ProcessStep = {
  label: Localized[];
  emphasis: boolean;
};

export type ProcessSolution = {
  icon: string;
  title: Localized;
  description: Localized;
};

export type ProcessPainPoint = {
  step: number;
  title: Localized;
  description: Localized;
  solution: ProcessSolution;
};

export type ProcessFlow = {
  steps: ProcessStep[];
  painPoints: ProcessPainPoint[];
};

export type HowItWorksStep = {
  title: Localized;
  description: Localized;
  image?: string;
  fit?: "cover" | "contain";
};

export type DesignHighlightBranch = { title: Localized; description: Localized };

export type DesignHighlight = {
  eyebrow: Localized;
  stepLabel: Localized;
  stepTitle: Localized;
  stepDescription: Localized;
  branches: [DesignHighlightBranch, DesignHighlightBranch];
};

export type DesignIterationImpact = {
  icon: string;
  label: Localized;
  valueHighlight: string;
  valueRest: Localized;
};

export type DesignIterationItem = {
  tag?: Localized;
  title: Localized;
  painPoint: Localized;
  solution: Localized;
  beforeImage?: string;
  afterImage?: string;
  workflowBefore?: Localized;
  workflowAfter?: Localized;
  secondaryImage?: string;
  secondaryImageCaption?: string;
  stackedBeforeAfter?: boolean;
  promptOptimization?: boolean;
  impact?: DesignIterationImpact[];
};

export type DesignIteration = {
  eyebrow: Localized;
  items?: DesignIterationItem[];
};

export type InterfaceOptimizationCase = {
  number: string;
  title: Localized;
  sideBySide?: boolean;
  painPoints?: Localized[];
  hmw?: Localized[];
  solutions?: Localized[];
  beforeImage?: string;
  beforeImageAlt?: Localized;
  beforeImageWidth?: number;
  beforeImageHeight?: number;
  beforeVideo?: string;
  beforeSwipeHint?: { hand: string; arrow: string };
  afterImage?: string;
  afterImageAlt?: Localized;
  afterImageWidth?: number;
  afterImageHeight?: number;
  afterTapHint?: { hand: string; left: string; top: string };
};

export type InterfaceOptimization = {
  eyebrow?: Localized;
  title?: Localized;
  items: InterfaceOptimizationCase[];
};

export type HowItWorks = {
  eyebrow: Localized;
  title?: Localized;
  subtitle: Localized;
  query: Localized;
  steps: HowItWorksStep[];
  feedbackLoop: Localized;
};

export type ProjectChallengeItem = {
  title: Localized;
  challenge: Localized;
  /** Omit to merge the action into `result` — used when the two read as one
   *  continuous story rather than separate steps. */
  action?: Localized;
  result: Localized;
  resultStats?: { value: Localized; label: Localized }[];
  resultTrend?: { from: Localized; to: Localized; label: Localized };
};

export type AppIntroVisual = {
  eyebrow?: string;
  aboutParagraphs: string[];
  quickOverviewEyebrow?: string;
  quickOverviewSegments: { text: string; bold?: boolean }[];
  logo: { image: string; imageAlt?: string; name: string };
  mockup: { image?: string; imageAlt?: string };
};

export type ProjectOverview = {
  niche?: Localized;
  projectIntro: string;
  /** 2-4 headline stats shown as a scannable row near the hero, in place of
   *  (or alongside) the narrative challenge cards below. */
  highlights?: { value: Localized; label: Localized; caption?: Localized }[];
  challenges?: ProjectChallengeItem[];
  awards?: { name: string; result: Localized }[];
};

export type CompetitorTool = {
  name: string;
  logo: string;
};

export type CompetitorCriterion = {
  label: Localized;
  values: [Localized, Localized, Localized];
};

export type CompetitorPatternRef = {
  tag: string;
  title: Localized;
  intro: Localized;
  sourceLabel: string;
  sourceUrl: string;
  image: string;
  lead: Localized;
  principles: { title: Localized; description: Localized }[];
  conclusion: Localized;
};

export type CompetitorInterfaceShot = {
  tool: string;
  description: Localized;
  source: Localized;
  image: string;
  annotation?: string;
  extraImages?: string[];
};

export type CompetitorAnalysis = {
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  tools: [CompetitorTool, CompetitorTool, CompetitorTool];
  criteria: CompetitorCriterion[];
  patternRef: CompetitorPatternRef;
  interfaceIntro: Localized;
  interfaceShots: CompetitorInterfaceShot[];
  outcome: {
    title: Localized;
    description: Localized;
    items: { tag: Localized; refLabel: Localized; title: Localized; body: Localized; image: string }[];
  };
};

export type ResearchBackground = {
  eyebrow?: Localized;
  source?: Localized;
  growthStat?: { from: Localized; to: Localized; label: Localized };
  stats: { value: string; label: Localized }[];
  subtitle: Localized;
  body: Localized;
  image?: string;
  imageAlt?: Localized;
};

export type FunctionDiagram = {
  title: string;
  image?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
};

export type ProblemFraming = {
  eyebrow?: string;
  description: string;
  diagrams: FunctionDiagram[];
};

export type UsabilityTestPhase = {
  title: Localized;
  items: Localized[];
};

export type UsabilityFinding = {
  title: Localized;
  detail: Localized;
  image?: string;
  imageAlt?: Localized;
  imageWidth?: number;
  imageHeight?: number;
  markerPosition?: { top: number; left: number };
  calloutLabel?: Localized;
  calloutPosition?: { top: number; left: number };
};

export type TaskScenarioFeature = {
  icon: "calendar" | "activity";
  label: Localized;
};

export type TaskScenarioRow = {
  feature: "calendar" | "activity";
  scenario: Localized;
  goal: Localized;
  response: Localized;
  time: string;
  hasError: boolean | null;
  efficiency: 1 | 2 | 3 | null;
  note: Localized;
};

export type TaskScenarioTable = {
  title?: Localized;
  intro: Localized;
  features: TaskScenarioFeature[];
  rows: TaskScenarioRow[];
  legend: { efficiency: 1 | 2 | 3; label: Localized }[];
};

export type InterviewOptimizationCategory = "feature" | "interface" | "tech";

export type SemiStructuredInterview = {
  title: Localized;
  intro: Localized;
  legend: { category: InterviewOptimizationCategory; label: Localized }[];
  groups: {
    topic: Localized;
    items: {
      id: string;
      label: Localized;
      summary: Localized;
      direction: Localized;
      priorityCategory?: InterviewOptimizationCategory;
    }[];
  }[];
};

export type UsabilityTesting = {
  eyebrow?: Localized;
  goalTitle?: Localized;
  goal: Localized;
  phases: UsabilityTestPhase[];
  flowSummary?: Localized;
  taskScenarios?: TaskScenarioTable;
  findingsIntro?: Localized;
  findings: UsabilityFinding[];
  semiStructuredInterview?: SemiStructuredInterview;
};

export type SurveyStructureColumn = {
  label: Localized;
  items: Localized[];
};

export type SurveyMotivationGroup = {
  label: Localized;
  icon?: "profile" | "needs" | "positioning";
  children?: Localized[];
};

export type SurveyMotivation = {
  problemLabel: string;
  problemText: Localized;
  goalLabel?: string;
  goalText?: Localized;
  groupsTitle?: Localized;
  groups: SurveyMotivationGroup[];
};

export type SurveyFinding = {
  title: Localized;
  description: Localized;
  stat?: { value: string; label: Localized };
};

export type SurveyStat = {
  value: string;
  unit?: Localized;
  label: Localized;
};

export type SurveyRankedStat = {
  value: string;
  label: Localized;
};

export type SurveyAgeBar = {
  age: string;
  withHabit: number;
  withoutHabit: number;
  highlightPercent?: { withHabit: string; withoutHabit: string };
};

export type SurveyDonutSlice = {
  label: Localized;
  value: number;
};

export type SurveyPriorityItem = { label: Localized; withHabit: number; withoutHabit: number };

export type SurveyFunnelSplitItem = { label: Localized; value: number; percent: string };

export type SurveyResultsHabitTab = {
  funnel: {
    title: Localized;
    total: number;
    split: SurveyFunnelSplitItem[];
    result: { label: Localized; value: number; percent: string };
  };
  crossAnalysis: {
    title: Localized;
    subtitle: Localized;
    legendLabel: Localized;
    bars: SurveyAgeBar[];
  };
  sampleInsight: Localized;
  motivation: {
    withHabitLabel: Localized;
    withHabitItems: SurveyRankedStat[];
    withoutHabitLabel: Localized;
    withoutHabitItems: SurveyRankedStat[];
  };
  insight: Localized | Localized[];
};

export type SurveyPriorityInsight = {
  commonNeeds: { title: Localized; points: Localized[] };
  groupDifferences: {
    title: Localized;
    withHabitLabel: Localized;
    withHabitItems: Localized[];
    withoutHabitLabel: Localized;
    withoutHabitItems: Localized[];
  };
  summary: Localized;
};

export type SurveyResultsFeatureTab = {
  introTitle?: Localized;
  introText?: Localized;
  priorityChart: {
    title: Localized;
    subtitle?: Localized;
    withHabitLabel: Localized;
    withoutHabitLabel: Localized;
    items: SurveyPriorityItem[];
    insight: SurveyPriorityInsight;
  };
  goodAppConditions: {
    title: Localized;
    subtitle?: Localized;
    items: { label: Localized; value: number }[];
  };
  trackedMetrics: {
    title: Localized;
    subtitle?: Localized;
    highlightCount: number;
    items: { label: Localized; value: number }[];
  };
  insight: Localized | Localized[];
};

export type SurveyResultsSection = {
  title: Localized;
  tabs: { key: string; label: Localized }[];
  habit: SurveyResultsHabitTab;
  feature: SurveyResultsFeatureTab;
};

export type ExpertInterview = {
  eyebrow?: Localized;
  intro: Localized;
  avatars: string[];
  photo?: string;
  quotes: Localized[];
};

export type SurveyResearch = {
  eyebrow?: Localized;
  goalTitle?: Localized;
  goal: Localized;
  stats: SurveyStat[];
  motivation?: SurveyMotivation;
  structure: SurveyStructureColumn[];
  results?: SurveyResultsSection;
  findings: SurveyFinding[];
};

export type ProblemSolutionPoint = { title: Localized; description: Localized };

export type ProblemSolution = {
  eyebrow?: Localized;
  heading?: {
    line1: Localized;
    line2Prefix?: Localized;
    line2Highlight: Localized;
  };
  problemPoints: ProblemSolutionPoint[];
  solutionIntro?: Localized;
  solutionPoints: ProblemSolutionPoint[];
};

export type ProductFeatureItem = {
  icon: "waveform" | "emotion" | "app";
  title: Localized;
  description: Localized;
  position: { top: string; left: string };
};

export type DesignPrinciple = {
  icon: "structure" | "ergonomics" | "interaction";
  title: Localized;
  items: { label: Localized; description: Localized }[];
};

export type DesignSketches = {
  eyebrow?: Localized;
  images: { src: string; alt?: Localized }[];
  principlesIntro?: Localized;
  principles?: DesignPrinciple[];
};

export type Prototyping = {
  eyebrow?: Localized;
  items: { src: string; alt?: Localized; label: Localized }[];
  description?: Localized;
  wearingFlow?: {
    title?: Localized;
    description?: Localized;
    steps: { image: string; imageAlt?: Localized; number: string; label: Localized }[];
  };
};

export type FeatureWidget = {
  image: string;
  imageAlt?: Localized;
  width: number;
  height: number;
  loosePosition?: string;
};

export type FeatureScreen = {
  image: string;
  imageAlt?: Localized;
  icon: "home" | "activity" | "journal" | "personalization";
  title: Localized;
  description: Localized;
  bare?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  mediaWidth?: number;
  mediaMdWidth?: number;
  widgets?: FeatureWidget[];
  looseWidgets?: boolean;
  textOnLeft?: boolean;
};

export type Reflection = {
  eyebrow?: Localized;
  blocks: {
    icon: "insight" | "limitation";
    title: Localized;
    subtitle?: string;
    paragraphs: Localized[];
  }[];
};

export type ProjectWrapUp = {
  eyebrow?: Localized;
  heading: Localized;
  workedLabel: Localized;
  worked: { title: Localized; body: Localized }[];
  nextLabel: Localized;
  next: { title: Localized; body: Localized }[];
};

export type ScreenGallery = {
  images: { src: string; alt: Localized; width: number; height: number }[];
};

export type DarkModeShowcase = {
  heading: Localized;
  description: Localized;
  gallery: ScreenGallery;
};

export type DesignSystemShowcase = {
  heading: Localized;
  description: Localized;
  typography: { src: string; width: number; height: number };
  color: { src: string; width: number; height: number };
  component: { src: string; width: number; height: number };
};

export type SceneShowcase = {
  appInHand: { image: string; imageAlt?: Localized };
  concertPhoto: { image: string; imageAlt?: Localized };
  caption?: Localized;
  hero: {
    image: string;
    imageAlt?: Localized;
    slogan: string;
  };
};

export type DeviceConnection = {
  title?: Localized;
  render: { image: string; imageAlt?: Localized };
};

export type InterfaceDesign = {
  eyebrow?: Localized;
  screens?: FeatureScreen[];
  sceneShowcase?: SceneShowcase;
  deviceConnection?: DeviceConnection;
  screenGallery?: ScreenGallery;
};

export type ProductFeatures = {
  eyebrow?: Localized;
  image: string;
  imageAlt?: Localized;
  items: ProductFeatureItem[];
  appShowcase?: {
    image: string;
    imageAlt?: Localized;
    title: Localized;
    description: Localized;
  };
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  client: string;
  type: string;
  image: string;
  deviceMockup: boolean;
  heroAspect?: string;
  description: Localized;
  descriptionLink?: { text: string; url: string };
  duration: string;
  team: string[];
  role: (string | Localized)[];
  background?: ProjectBackgroundItem[];
  overview?: ProjectOverview;
  appIntroVisual?: AppIntroVisual;
  researchBackground?: ResearchBackground;
  problemFraming?: ProblemFraming;
  usabilityTesting?: UsabilityTesting;
  surveyResearch?: SurveyResearch;
  expertInterview?: ExpertInterview;
  interfaceOptimization?: InterfaceOptimization;
  darkModeShowcase?: DarkModeShowcase;
  designSystemShowcase?: DesignSystemShowcase;
  problemSolution?: ProblemSolution;
  productFeatures?: ProductFeatures;
  designSketches?: DesignSketches;
  prototyping?: Prototyping;
  interfaceDesign?: InterfaceDesign;
  reflection?: Reflection;
  wrapUp?: ProjectWrapUp;
  theme?: "dark";
  summary?: { eyebrow?: Localized; title: Localized; description: Localized };
  priorityMatrix?: PriorityMatrix;
  processFlow?: ProcessFlow;
  howItWorks?: HowItWorks;
  designHighlight?: DesignHighlight;
  designIteration?: DesignIteration;
  competitorAnalysis?: CompetitorAnalysis;
  personaAvatar?: string;
  cardTags?: string[];
  cardHeadline?: Localized;
  cardDescription?: Localized;
  color?: string;
  /** Transparent mockup shown on the homepage poster card, if it should differ
   *  from the case-study hero `image`. Rendered uncropped, without a frame.
   *  Intrinsic size drives the layout: wide mockups get a broader column that
   *  bleeds off the card edge, tall ones stay inside it. */
  cardImage?: string;
  cardImageWidth?: number;
  cardImageHeight?: number;
  /** "bottom" drops the mockup flush against the card's bottom edge, so a
   *  cropped subject (e.g. an arm) reads as continuing off-card rather than
   *  floating in the middle. */
  cardImageAnchor?: "bottom";
  /** Set to bleed the poster edge-to-edge across the whole panel, past its
   *  usual padding — for a photo that carries its own background rather
   *  than a transparent mockup. "cover" crops to fill every edge; "contain"
   *  shows the whole photo with a small margin, backed by `cardImageBackdrop`.
   *  Leave unset for the default transparent-mockup-on-a-coloured-panel
   *  treatment. */
  cardImageFit?: "contain" | "cover";
  /** Backdrop colour shown around a `cardImageFit: "contain"` poster, so its
   *  margin reads as continuous with the photo instead of an empty gap. */
  cardImageBackdrop?: string;
  /** Extra zoom applied to a `cardImageFit: "contain"` poster, on top of the
   *  default 1.25x. Use when the subject reads too small inside its margin. */
  cardImageScale?: number;
  /** Mirrors a `cardImageFit: "contain"` poster horizontally — e.g. to turn a
   *  device mockup around so it faces the other way. */
  cardImageFlip?: boolean;
  /** Transparent mockup cross-faded in on hover, over its own coloured
   *  backdrop (desktop only — no autoplay/touch fallback, unlike `cardVideo`,
   *  since there's no motion to reveal). Pairs a full-bleed `cardImageFit:
   *  "cover"` poster with a floating-mockup reveal, so the poster can be a
   *  branded photo while the interface itself still shows on interaction. */
  cardHoverImage?: string;
  cardHoverImageWidth?: number;
  cardHoverImageHeight?: number;
  /** Switches the card to the deep "nebula" surface, with this colour glowing
   *  in from the lower left. Dark cards only. */
  cardAccent?: string;
  /** Muted looping demo clip shown in place of `cardImage` on hover (desktop)
   *  or automatically once in view (touch). Optional — omitting it keeps the
   *  static mockup as the only state. */
  cardVideo?: string;
  /** Panel backdrop shown behind `cardVideo` while it plays, so a video that
   *  doesn't fill the panel edge-to-edge reads as continuous with its own
   *  background instead of cutting against the card's usual colour. Defaults
   *  to black. */
  cardVideoBackdrop?: string;
  /** "cover" scales the clip up until it touches every edge (cropping
   *  whichever axis overshoots), for a subject centred with margin to spare
   *  (e.g. a phone screen recording). Defaults to "contain", which always
   *  shows the whole frame. */
  cardVideoFit?: "contain" | "cover";
  /** Public Canva "view?embed" URL, shown as an embedded presentation on the
   *  case-study page as interim content before a full case study is built. */
  presentationEmbedUrl?: string;
  /** Public GitHub repo URL, shown as a "View Code" link next to the hero title. */
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "5",
    slug: "vision-detect",
    name: "VisionDetect AI B2B SaaS Platform",
    client: "VisionDetect",
    type: "AI B2B SaaS Platform",
    image: "/images/projects/vision-detect/hero.png",
    deviceMockup: false,
    description: {
      zh: "一套 AI 智慧監控平台，透過電腦視覺與生成式 AI 技術，補足職安巡檢間的監控盲區，提升工廠安全管理效率。\n針對研華智慧製造場域需求，設計跨產業 AI 影像分析系統，結合 VLM 視覺偵測與 LLM 對話技術，並透過結構化 Prompt 設計降低 AI 使用門檻，打造直覺化、易操作的監控介面。協助職安人員快速建立偵測條件，即時辨識現場安全風險、追蹤事件脈絡，並自動生成符合 ISO 45001 規範的稽核報告，將傳統被動式監控轉化為主動式智慧安全管理。",
      en: "An AI monitoring platform that uses computer vision and generative AI to close the surveillance gap between manual safety patrols, raising factory safety-management efficiency.\nBuilt for Advantech's smart-manufacturing use case: a cross-industry AI image-analysis system combining VLM visual detection with LLM conversation, using structured prompt design to lower the barrier to using AI and produce an intuitive, easy-to-operate monitoring interface. It helps EHS staff quickly set up detection conditions, spot on-site safety risks in real time, trace incident context, and auto-generate ISO 45001-compliant audit reports, turning reactive monitoring into proactive, intelligent safety management.",
    },
    cardTags: ["0→1 Product", "B2B AI SaaS"],
    cardHeadline: {
      zh: "建立 AI 監控平台操作流程，設計模組化 Prompt 互動機制",
      en: "Built the AI monitoring platform's operating flow with a modular prompt interaction",
    },
    cardDescription: {
      zh: "傳統工廠仰賴人工巡檢，難以及時掌握巡檢間的安全風險。透過訪談職安人員，釐清工作流程痛點與需求，設計模組化 Prompt 機制，以固定句型與變數替換降低自然語言輸入變異性，達到一次設定、全部套用，提升 AI 監控部署效率。",
      en: "Traditional factories rely on manual patrols and can't catch risks between rounds. Through interviews with EHS staff, I clarified workflow pain points and needs, then designed a modular prompt mechanism that uses fixed sentence patterns with swappable variables to reduce natural-language input variability, so a single setup applies everywhere and AI monitoring deploys faster.",
    },
    color: "#1D4ED8",
    cardAccent: "#1FD9A6",
    cardImage: "/images/projects/vision-detect/card-laptop-photo.png",
    cardImageWidth: 2000,
    cardImageHeight: 1500,
    cardImageFit: "contain",
    cardImageBackdrop: "#DFDFDF",
    cardVideo: "/images/projects/vision-detect/card-demo.mp4",
    cardVideoBackdrop: "#DFDFDF",
    duration: "9 weeks",
    team: ["Project Manager ×2", "Software Engineer ×2", "UI/UX Designer ×1 - Me"],
    role: [
      "User interviews & analysis",
      "Competitive analysis",
      "User flows & UI design",
      "Cross-team stakeholder workshops",
    ],
    overview: {
      niche: { zh: "B2B SaaS・電腦視覺(VLM)・工業安全(EHS)", en: "B2B SaaS · Computer Vision (VLM) · Industrial Safety (EHS)" },
      projectIntro:
        "為研華打造的跨場域 AI 監控系統，結合 VLM 視覺偵測與 LLM 對話技術，補足醫療、零售、製造業在非巡檢時段的監控盲區。系統即時偵測現場隱形風險，並透過 Chatbot 快速釐清事件脈絡，自動生成符合 ISO 標準的稽核報告，實現全時段智慧化管理。",
      highlights: [
        {
          value: { zh: "-97%", en: "-97%" },
          label: { zh: "部署週期縮短", en: "Deployment cycle reduced" },
          caption: { zh: "30 天 → 1 天", en: "30 days → 1 day" },
        },
        {
          value: { zh: "3–5 位 → 1–2 位", en: "3–5 → 1–2" },
          label: { zh: "工程人力需求", en: "Engineering headcount" },
          caption: { zh: "工程師 → 非工程人員", en: "Engineers → non-engineers" },
        },
        {
          value: { zh: "1 → N", en: "1 → N" },
          label: { zh: "場域部署模式", en: "Site deployment model" },
          caption: { zh: "一次設定 → 多場域套用", en: "Set once → apply everywhere" },
        },
        {
          value: { zh: "2–3 次／天\n→ 24/7", en: "2–3×/day\n→ 24/7" },
          label: { zh: "巡檢頻率", en: "Patrol frequency" },
          caption: { zh: "人工巡檢 → 全天候監控", en: "Manual patrols → round-the-clock monitoring" },
        },
      ],
    },
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
      eyebrow: { zh: "使用者研究", en: "User Research" },
      title: { zh: "找出本次專案可驗證的 PoC 場域", en: "Finding a Testable PoC Setting for This Project" },
      description: {
        zh: "透過盤點系統整合商與職環安人員的實際需求，依優先度與技術可行性\n建立評估矩陣，收斂出兩個場域，作為本次優先導入的 PoC",
        en: "By mapping the real needs of the systems integrator and EHS staff,\nI built a priority/feasibility evaluation matrix\nand converged on two settings to prioritize as the first PoC.",
      },
    },
    priorityMatrix: {
      legend: [
        { tier: 1, label: { zh: "最終採用．優先 PoC 場域", en: "Selected, priority PoC setting" } },
        { tier: 2, label: { zh: "候選場域．本輪未列入優先", en: "Candidate, not prioritized this round" } },
        { tier: 3, label: { zh: "已排除（硬體／技術限制）", en: "Excluded (hardware / technical limits)" } },
      ],
      bubbles: [
        {
          label: { zh: "危險性機械\n行動警戒", en: "Hazardous machinery\nmotion alerts" },
          top: 18,
          left: 69,
          size: 116,
          tier: 1,
        },
        {
          label: { zh: "配戴用具的確實度", en: "PPE compliance" },
          top: 36,
          left: 87,
          size: 110,
          tier: 1,
        },
        {
          label: { zh: "管制區域進出偵測", en: "Restricted-area access detection" },
          top: 70,
          left: 64,
          size: 112,
          tier: 2,
        },
      ],
      dots: [
        { label: { zh: "無塵室服裝規範", en: "Cleanroom attire compliance" }, top: 48, left: 47, tier: 2 },
        { label: { zh: "承包商安全監控", en: "Contractor safety monitoring" }, top: 55, left: 47, tier: 2 },
        { label: { zh: "管制區域控管", en: "Restricted-area control" }, top: 61, left: 33, tier: 2 },
        { label: { zh: "人員作業區域", en: "Personnel work-zone tracking" }, top: 67, left: 33, tier: 2 },
        { label: { zh: "無塵室門禁控管", en: "Cleanroom access control" }, top: 73, left: 33, tier: 2 },
      ],
      excluded: [
        { label: { zh: "設備周界警示", en: "Equipment perimeter alerts" }, top: 63, left: 15, size: 108 },
        { label: { zh: "氣體洩漏偵測", en: "Gas-leak detection" }, top: 82, left: 10, size: 92 },
      ],
      axis: {
        top: { zh: "優先度高", en: "High priority" },
        bottom: { zh: "優先度低", en: "Low priority" },
        right: { zh: "可行性高", en: "High feasibility" },
        yLabel: { zh: "客戶期望優先度", en: "Client-expected priority" },
        xLabel: { zh: "技術可行性", en: "Technical feasibility" },
      },
      sideCards: [
        {
          title: { zh: "危險性機械行動警戒", en: "Hazardous Machinery Motion Alerts" },
          image: "/images/projects/vision-detect/scenario-forklift.png",
          description: { zh: "偵測堆高機是否有超速行駛的情況。", en: "Detects whether a forklift is moving above the speed limit." },
        },
        {
          title: { zh: "配戴用具的確實度", en: "PPE Compliance" },
          image: "/images/projects/vision-detect/scenario-ppe.png",
          description: { zh: "偵測承攬商是否確實配戴，個人防護用具或相關設備。", en: "Detects whether contractors are properly wearing personal protective equipment." },
          imagePosition: "center 15%",
        },
      ],
    },
    processFlow: {
      steps: [
        { label: [{ zh: "巡檢準備", en: "Patrol" }, { zh: "與路線規劃", en: "prep & routing" }], emphasis: false },
        { label: [{ zh: "承包商聯繫", en: "Contractor" }, { zh: "與說明", en: "contact & briefing" }], emphasis: false },
        { label: [{ zh: "現場", en: "On-site" }, { zh: "巡檢", en: "patrol" }], emphasis: true },
        { label: [{ zh: "事件發生", en: "Incident" }, { zh: "與處理", en: "occurs & is handled" }], emphasis: true },
        { label: [{ zh: "重大事故", en: "Major incident" }, { zh: "通報與調查", en: "reporting & investigation" }], emphasis: true },
        { label: [{ zh: "定期報告", en: "Periodic" }, { zh: "與稽核", en: "reporting & audit" }], emphasis: false },
      ],
      painPoints: [
        {
          step: 3,
          title: { zh: "現場巡檢", en: "On-Site Patrol" },
          description: {
            zh: "人工巡檢一天僅 2–3 次，留下大量監控空窗。",
            en: "Manual patrols run only 2–3 times a day, leaving large monitoring gaps.",
          },
          solution: {
            icon: "scan-eye",
            title: { zh: "24 小時主動式 VLM 影像監控", en: "24-Hour Proactive VLM Video Monitoring" },
            description: { zh: "補足人工巡檢時段之間的空窗。", en: "Closes the gaps between manual patrol rounds." },
          },
        },
        {
          step: 4,
          title: { zh: "事件發生與處理", en: "Incident Occurrence & Handling" },
          description: {
            zh: "傳統 CCTV 只被動錄影，缺乏即時異常偵測，安全空窗未能改善。",
            en: "Traditional CCTV only records passively, with no real-time anomaly detection, so the safety gap goes unaddressed.",
          },
          solution: {
            icon: "scan-eye",
            title: { zh: "透過 VLM 主動偵測違規與異常", en: "Proactive VLM Detection of Violations & Anomalies" },
            description: {
              zh: "從「被動錄影」轉為「主動分析」，即時保存影像證據。",
              en: "Shifts from \"passive recording\" to \"proactive analysis,\" preserving video evidence in real time.",
            },
          },
        },
        {
          step: 5,
          title: { zh: "重大事故通報與調查", en: "Major Incident Reporting & Investigation" },
          description: {
            zh: "重大事故發生時，關鍵資訊（如事件時間軸、成因）無法即時取得。",
            en: "When a major incident occurs, key information such as the timeline and the root cause isn't available in real time.",
          },
          solution: {
            icon: "bot-message-square",
            title: { zh: "LLM 驅動的事件重建與自動報告生成", en: "LLM-Driven Incident Reconstruction & Auto Report Generation" },
            description: {
              zh: "整合事件時間軸、偵測結果與影像證據，可用自然語言快速查詢，8 小時內生成符合 ISO 45001 標準的稽核報告。",
              en: "Consolidates the incident timeline, detection results, and video evidence into a natural-language-searchable record, generating an ISO 45001-compliant audit report within 8 hours.",
            },
          },
        },
      ],
    },
    howItWorks: {
      eyebrow: { zh: "定義", en: "Definition" },
      subtitle: {
        zh: "以承攬商是否佩戴安全帽？情境為作為本產品流程示意：",
        en: "Illustrated with a \"is the contractor wearing a hard hat?\" scenario:",
      },
      query: {
        zh: "我需要確認承包商是否遵循 ISO 45001 規範（配戴安全帽）。若有違規，我需要知道人數並看到對應的影像證據，作為稽核報告文件。",
        en: "I need to confirm the contractor is following ISO 45001 (wearing a hard hat). If there's a violation, I need the headcount and the corresponding video evidence for the audit report.",
      },
      steps: [
        {
          title: { zh: "綁定串流或上傳影片", en: "Bind a Stream or Upload Video" },
          description: { zh: "連接即時攝影機串流或既有影片。", en: "Connect a live camera stream or an existing video." },
          image: "/images/projects/vision-detect/step1.gif",
        },
        {
          title: { zh: "VLM 主動分析", en: "Proactive VLM Analysis" },
          description: {
            zh: "設定如「是否有配戴安全帽？」的範本，進行全天候持續偵測。",
            en: "Set a template like \"is a hard hat being worn?\" and get round-the-clock detection.",
          },
          image: "/images/projects/vision-detect/step2.mp4",
        },
        {
          title: { zh: "LLM 資訊查詢", en: "LLM Information Lookup" },
          description: {
            zh: "以自然語言詢問違規次數、時間戳記與對應影片。",
            en: "Ask in natural language for violation counts, timestamps, and the matching video.",
          },
          image: "/images/projects/vision-detect/step3.mp4",
          fit: "cover",
        },
        {
          title: { zh: "取得報告與關鍵畫面", en: "Get the Report & Key Frames" },
          description: {
            zh: "生成附帶影像佐證的 ISO 45001 稽核報告。",
            en: "Generate an ISO 45001 audit report backed by the video evidence.",
          },
          image: "/images/projects/vision-detect/step4.gif",
          fit: "cover",
        },
      ],
      feedbackLoop: {
        zh: "LLM 將設定建議回饋給 VLM，形成持續優化偵測準確度的回饋迴路。",
        en: "The LLM feeds configuration suggestions back to the VLM, forming a loop that keeps improving detection accuracy.",
      },
    },
    designHighlight: {
      eyebrow: { zh: "設計迭代", en: "Design Iteration" },
      stepLabel: { zh: "2 步驟", en: "Step 2" },
      stepTitle: { zh: "VLM 主動分析", en: "Proactive VLM Analysis" },
      stepDescription: {
        zh: "設定如「是否有配戴安全帽？」的範本，進行全天候持續偵測。",
        en: "Set a template like \"is a hard hat being worn?\" and get round-the-clock detection.",
      },
      branches: [
        {
          title: { zh: "優化影像設定流程", en: "Streamlined the Setup Flow" },
          description: { zh: "統一設定流程，一次驗證、全域套用。", en: "Unified the setup flow. Verify once, apply everywhere." },
        },
        {
          title: { zh: "優化 Prompt 輸入介面", en: "Refined the Prompt Interface" },
          description: {
            zh: "固定句型結構，讓 VLM 判讀更精準。",
            en: "A fixed sentence structure that makes the VLM's readings more precise.",
          },
        },
      ],
    },
    designIteration: {
      eyebrow: { zh: "設計迭代", en: "Design Iteration" },
      items: [
        {
          tag: { zh: "優化一", en: "Fix 1" },
          title: { zh: "設計影像設定流程，解決擴展性瓶頸", en: "Designed the Setup Flow to Fix the Scalability Bottleneck" },
          painPoint: {
            zh: "每支攝影機都需手動設定，部署時間隨規模線性增加。",
            en: "Every camera needed manual setup, so deployment time scaled linearly with the number of cameras.",
          },
          solution: {
            zh: "在 Test Zone 微調 1 支影像來源，一鍵套用到 10 個 Operational Zone，減少 80% 人工作業。",
            en: "Tune one video source in a Test Zone, then apply it to 10 Operational Zones with one click, cutting manual work by 80%.",
          },
          beforeImage: "/images/projects/vision-detect/ui-before.png",
          afterImage: "/images/projects/vision-detect/ui-after.png",
          stackedBeforeAfter: true,
          impact: [
            {
              icon: "layers",
              label: { zh: "擴展性", en: "Scalability" },
              valueHighlight: "1-to-N",
              valueRest: { zh: "部署模式", en: "deployment model" },
            },
            {
              icon: "zap",
              label: { zh: "效率", en: "Efficiency" },
              valueHighlight: "80%",
              valueRest: { zh: "設定時間減少", en: "less setup time" },
            },
          ],
          workflowBefore: {
            zh: "每增加一支攝影機就需重複測試一次，設定時間隨鏡頭數倍增。",
            en: "Every added camera meant repeating the test. Setup time multiplied with camera count.",
          },
          workflowAfter: {
            zh: "完成單一驗證後一鍵套用全場，節省 80% 重複操作時間。",
            en: "Verify once, then apply site-wide with one click, saving 80% of the repeated work.",
          },
        },
        {
          tag: { zh: "優化二", en: "Fix 2" },
          title: { zh: "設計 Prompt Template，提升模型判讀精準度", en: "Designed a Prompt Template to Improve Model Accuracy" },
          painPoint: {
            zh: "自然語言 Prompt，語意邊界模糊、任務意圖不明確，導致 VLM 輸出結果不穩定，這在工業安全場域中是不可接受的風險。",
            en: "Free-form natural-language prompts had ambiguous boundaries and unclear intent, making the VLM's output unstable, an unacceptable risk in an industrial safety setting.",
          },
          solution: {
            zh: "Prompt Template，採用固定句型結構，僅替換人員、物件、地點等變數，有效提升 VLM 判讀的準確度與穩定性。",
            en: "A Prompt Template with a fixed sentence structure where only variables (person, object, location) change, meaningfully improving the VLM's accuracy and stability.",
          },
          promptOptimization: true,
        },
      ],
    },
    personaAvatar: "/images/projects/vision-detect/persona-avatar.png",
    competitorAnalysis: {
      eyebrow: { zh: "競品分析", en: "Competitor Analysis" },
      title: { zh: "分析現有產品如何設定 Prompt 變數", en: "How Existing Products Handle Prompt Variables" },
      description: {
        zh: "在設計 Prompt 輸入介面時，鑑於工廠職安領域缺乏可直接參考的 UI 案例，我轉而分析間接競品的元件架構與互動邏輯，並評估其在職安情境下的適用性與可行性，作為介面開發的設計依據。",
        en: "With no directly comparable UI in the factory-EHS space, I analyzed indirect competitors' component architecture and interaction logic, evaluating their fit and feasibility for an EHS context to ground the interface design.",
      },
      tools: [
        { name: "Microsoft AI Builder", logo: "/images/projects/vision-detect/competitor-analysis/logo-microsoft.png" },
        { name: "Salesforce Prompt Builder", logo: "/images/projects/vision-detect/competitor-analysis/logo-salesforce.svg" },
        { name: "PromptLayer", logo: "/images/projects/vision-detect/competitor-analysis/logo-promptlayer.png" },
      ],
      criteria: [
        {
          label: { zh: "元件設計", en: "Component Design" },
          values: [
            { zh: "Input Chip：以元件邊界顏色標示", en: "Input Chip: marked by the component's border color" },
            { zh: "Underlined Text Link：以顏色標示", en: "Underlined Text Link: marked by color" },
            {
              zh: "Inline Variable Tokens：採用純文字語法 {{var}}，並以顏色標示",
              en: "Inline Variable Tokens: plain-text {{var}} syntax, marked by color",
            },
          ],
        },
        {
          label: { zh: "目標使用者", en: "Target User" },
          values: [
            { zh: "一般業務人員", en: "General business users" },
            { zh: "CRM 系統管理員", en: "CRM system admins" },
            { zh: "工程師", en: "Engineers" },
          ],
        },
        {
          label: { zh: "填寫順序", en: "Fill-in Order" },
          values: [
            { zh: "插入變數 → 選型別 → 填值", en: "Insert variable → choose type → fill value" },
            { zh: "先選資料來源 → 挑欄位", en: "Choose data source first → pick field" },
            { zh: "寫語法 → 表單填值", en: "Write syntax → fill in a form" },
          ],
        },
        {
          label: { zh: "驗證機制", en: "Validation" },
          values: [
            { zh: "測試後看結果", en: "Run a test, see the result" },
            { zh: "變數值與輸出並排比對", en: "Variable values and output shown side by side" },
            { zh: "即時防呆＋批次測試", en: "Real-time guardrails + batch testing" },
          ],
        },
        {
          label: { zh: "點擊互動（Popup）", en: "Click Interaction (Popup)" },
          values: [
            {
              zh: "有：點擊 chip 彈出設定表單（Name／Formula／Sample data）",
              en: "Yes: clicking the chip opens a setup form (Name / Formula / Sample data)",
            },
            {
              zh: "無：以搜尋選單「插入」欄位，非點擊既有標籤編輯",
              en: "No: fields are \"inserted\" via a search menu, not edited by clicking an existing tag",
            },
            {
              zh: "無：填值於獨立表單區，與句中文字分離",
              en: "No: values are filled in a separate form area, detached from the sentence text",
            },
          ],
        },
      ],
      patternRef: {
        tag: "S/AI",
        title: {
          zh: "設計原則參考｜Shape of AI，Madlibs Pattern",
          en: "Design Principle Reference | Shape of AI, Madlibs Pattern",
        },
        intro: { zh: "競品之外，同時參考 AI Patterns 資料庫：", en: "Beyond competitors, I also referenced the AI Patterns database:" },
        sourceLabel: "shapeof.ai/patterns/madlibs",
        sourceUrl: "https://shapeof.ai/patterns/madlibs",
        image: "/images/projects/vision-detect/competitor-analysis/madlibs-reference.png",
        lead: {
          zh: "此原則須注意的設計考量，將作為後續介面的決策依據",
          en: "The design considerations this pattern calls out, used as the basis for later interface decisions",
        },
        principles: [
          {
            title: { zh: "彈性由情境決定", en: "Flexibility Depends on Context" },
            description: {
              zh: "硬性欄位確保輸出一致但缺乏彈性；靈活欄位激發創意但難預測。重複性工作流追求精準，創意發想給予彈性。",
              en: "Rigid fields keep output consistent but inflexible; open fields invite creativity but are unpredictable. Repetitive workflows want precision; creative work wants flexibility.",
            },
          },
          {
            title: { zh: "區分必填與選填", en: "Distinguish Required from Optional" },
            description: {
              zh: "突顯關鍵變數、標示可略過欄位，降低認知負荷。",
              en: "Highlight key variables and mark skippable fields to reduce cognitive load.",
            },
          },
          {
            title: { zh: "讓句構可見", en: "Make the Sentence Structure Visible" },
            description: {
              zh: "不隱藏模板結構，使用者能理解 Prompt 如何組成、也更信任輸出。",
              en: "Don't hide the template structure. Users understand how the prompt is built and trust the output more.",
            },
          },
          {
            title: { zh: "規劃多步驟串接", en: "Plan for Multi-Step Chaining" },
            description: {
              zh: "填空結果可帶入下一步，設計時決定哪些該鎖定、哪些可修改延伸。",
              en: "A filled-in result can carry into the next step. Decide up front what should be locked and what stays editable.",
            },
          },
          {
            title: { zh: "填空即教學", en: "Filling It In Is the Tutorial" },
            description: {
              zh: "結構良好的 Madlibs 同時示範「有效的 Prompt 長什麼樣」。",
              en: "A well-structured Madlibs pattern doubles as a demonstration of what an effective prompt looks like.",
            },
          },
        ],
        conclusion: {
          zh: "最適合任務明確、輸入可預測、流程重複的場景。工安偵測正屬此類：偵測句型固定，變動的只有人、物、場域。",
          en: "Best suited to clear tasks, predictable input, and repeated workflows. EHS detection fits exactly this: the detection sentence stays fixed. Only the person, object, and setting change.",
        },
      },
      interfaceIntro: {
        zh: "實際畫面佐證三家在「變數呈現方式」上的差異。",
        en: "Real screens showing how the three products differ in how they present variables.",
      },
      interfaceShots: [
        {
          tool: "Microsoft AI Builder",
          description: { zh: "藥丸標籤（chip）嵌入句中，邊界最明確。", en: "A pill-shaped chip embedded in the sentence, with the clearest boundary." },
          source: { zh: "來源：Microsoft Learn 官方文件", en: "Source: Microsoft Learn official docs" },
          image: "/images/projects/vision-detect/competitor-analysis/screenshot-microsoft.png",
        },
        {
          tool: "Salesforce Prompt Builder",
          description: {
            zh: "合併欄位以底線＋顏色標示，融入純文字句子。",
            en: "Merge fields are marked with an underline and color, blended into a plain-text sentence.",
          },
          source: { zh: "來源：Salesforce Admins Blog", en: "Source: Salesforce Admins Blog" },
          image: "/images/projects/vision-detect/competitor-analysis/screenshot-salesforce.png",
          annotation: "{topic}　{{audience}}",
          extraImages: [
            "/images/projects/vision-detect/competitor-analysis/screenshot-salesforce-detail.png",
            "/images/projects/vision-detect/competitor-analysis/screenshot-salesforce-extra-1.png",
            "/images/projects/vision-detect/competitor-analysis/screenshot-salesforce-extra-2.png",
          ],
        },
        {
          tool: "PromptLayer",
          description: { zh: "純文字語法 {var} ／ {{var}}，無視覺標示。", en: "Plain-text {var} / {{var}} syntax, with no visual marking." },
          source: { zh: "來源：PromptLayer 官方文件", en: "Source: PromptLayer official docs" },
          image: "/images/projects/vision-detect/competitor-analysis/screenshot-promptlayer.png",
        },
      ],
      outcome: {
        title: {
          zh: "基於上述的競品分析，收斂出三個設計原則，並設計出 Prompt Template 操作機制",
          en: "From this competitor analysis, three design principles converged into the Prompt Template mechanism",
        },
        description: {
          zh: "以 Gear Detection，Whether wearing specific gear 情境示意 Prompt 輸入介面",
          en: "Illustrated with the Gear Detection, Whether Wearing Specific Gear scenario's prompt interface",
        },
        items: [
          {
            tag: { zh: "原則一", en: "Principle 1" },
            refLabel: { zh: "參考 Salesforce Prompt Builder", en: "Reference: Salesforce Prompt Builder" },
            title: { zh: "先選類型：Dropdown 選擇偵測類型", en: "Choose Type First: a Dropdown for the Detection Type" },
            body: {
              zh: "先從 9 種 Prompt Template 中選擇偵測類型，底下變數會自適應更換。",
              en: "Choose the detection type from 9 prompt templates first. The variables below adapt automatically.",
            },
            image: "/images/projects/vision-detect/competitor-analysis/outcome-principle-1.gif",
          },
          {
            tag: { zh: "原則二", en: "Principle 2" },
            refLabel: { zh: "參考 Shape of AI · Madlibs", en: "Reference: Shape of AI · Madlibs" },
            title: { zh: "句構唯讀：固定語句，結構完整可見", en: "Read-Only Structure: a Fixed Sentence, Fully Visible" },
            body: {
              zh: "從結構上消除自然語言輸入的變異性；同時讓使用者理解 Prompt 如何組成。",
              en: "Structurally eliminates the variability of free-form input, while helping users understand how the prompt is built.",
            },
            image: "/images/projects/vision-detect/competitor-analysis/outcome-principle-2.gif",
          },
          {
            tag: { zh: "原則三", en: "Principle 3" },
            refLabel: { zh: "綜合 AI Builder ＋ Madlibs", en: "Combines AI Builder + Madlibs" },
            title: { zh: "變數填空：以 Input Chip 嵌在句中，Popup 選變數", en: "Fill-in Variables: Input Chips in the Sentence, a Popup to Choose" },
            body: {
              zh: "句中以 Input Chip 明確標示點擊範圍，點擊可觸發 Popup 快速選擇變數。",
              en: "Input chips clearly mark the clickable area in the sentence; clicking one opens a popup to quickly choose the variable.",
            },
            image: "/images/projects/vision-detect/competitor-analysis/outcome-principle-3.gif",
          },
        ],
      },
    },
    wrapUp: {
      eyebrow: { zh: "收尾", en: "Wrapping Up" },
      heading: { zh: "反思與下一步", en: "Reflection & Next Steps" },
      workedLabel: { zh: "What worked", en: "What worked" },
      worked: [
        {
          title: { zh: "3 場訪談，深入使用者痛點與情境需求", en: "3 interviews to surface pain points and context" },
          body: {
            zh: "從系統整合商到職安人員，釐清實際工作流程與 AI 導入節點，找出人工巡檢的監控盲區，讓產品需求更貼近工廠現場。",
            en: "From systems integrators to EHS staff, I clarified the real workflow and where AI needed to fit in, surfacing the blind spots in manual patrols and grounding the product in what the factory floor actually needed.",
          },
        },
        {
          title: { zh: "模組化 Prompt Template 機制", en: "A modular Prompt Template mechanism" },
          body: {
            zh: "透過產品迭代，將原本模糊且不一致的自然語言輸入，收斂為固定句型與可替換變數的操作介面，降低 Prompt 輸入差異，提升 VLM 判讀穩定性。",
            en: "Through product iteration, I converged vague, inconsistent natural-language input into a fixed-sentence, swappable-variable interface, cutting prompt variance and improving the VLM's reading stability.",
          },
        },
      ],
      nextLabel: { zh: "What I'd do differently & next", en: "What I'd do differently & next" },
      next: [
        {
          title: { zh: "跨場域規模化驗證", en: "Cross-site scale validation" },
          body: {
            zh: "目前驗證主要來自單一場域試點。若有更多時間，我會延伸至不同產業與廠房環境，驗證模組化 Prompt 的複用性，確保固定句型能適應不同場域需求。",
            en: "Validation so far comes mostly from a single pilot site. Given more time, I'd extend testing across different industries and factory environments to confirm the modular prompts generalize rather than just fit one setting.",
          },
        },
        {
          title: { zh: "建立 AI 異常判讀的人機協作機制", en: "A human-in-the-loop check for AI misreads" },
          body: {
            zh: "現階段聚焦於降低 AI 設定門檻，尚未涵蓋誤判與邊界案例的處理。下一步將設計快速覆核與修正機制，讓人能介入 AI 判讀，提升系統的可控性與現場信任。",
            en: "The current focus is lowering the setup barrier; it doesn't yet cover misreads or edge cases. The next step is a quick review-and-correct flow so people can step in on AI judgments, building the system's controllability and on-site trust.",
          },
        },
      ],
    },
  },
  {
    id: "7",
    slug: "h2u-sports-note-app",
    name: "H2U Sports Note App",
    client: "我的運動筆記",
    type: "個人實習專案",
    image: "/images/projects/h2u/hero.png",
    heroAspect: "2000/1310",
    deviceMockup: false,
    description: {
      zh: "Sports Note 是台灣跑步領域的媒體與社群平台，整合賽事資訊、跑步紀錄、線上報名與運動內容等服務。針對 Alpha 版本缺乏實際使用者驗證的問題，我執行 13 位跑者的易用性測試與訪談，將研究洞察轉化為實際介面優化產出結果。",
      en: "Sports Note is a Taiwanese running media and community platform bringing together race info, run tracking, online registration, and running content. To address the Alpha version's lack of real user validation, I ran usability tests and interviews with 13 runners, turning research insight into concrete interface optimizations.",
    },
    cardTags: ["UX Research", "Design System"],
    cardHeadline: {
      zh: "以使用者研究驅動跑步 App 的產品優化",
      en: "Drove a running app's product optimization with user research",
    },
    cardDescription: {
      zh: "本專案於產品 Alpha 階段，針對缺乏真實使用者操作驗證的問題，透過 13 位易用性測試與跑者訪談，辨識操作流程中的痛點，並結合操作時間、錯誤頻率等數據進行分析，將研究洞察轉化為具體的介面優化方案。",
      en: "During the product's Alpha stage, to address the lack of real user validation, I ran usability testing and interviews with 13 runners to identify pain points in the flow, analyzing task time and error rates to turn research insight into concrete interface optimizations.",
    },
    color: "#045CC4",
    cardImage: "/images/projects/h2u/card-cover.png",
    cardImageFit: "contain",
    cardImageBackdrop: "#005BC2",
    cardImageWidth: 2000,
    cardImageHeight: 1310,
    cardVideo: "/images/projects/h2u/card-demo.mp4",
    cardVideoFit: "cover",
    duration: "July 2022 (2 month)",
    team: ["Product Manager ×1", "UI/UX Designer ×2 - Me", "Software Engineer ×1"],
    role: [
      { zh: "易用性測試", en: "Usability Testing" },
      { zh: "專家訪談", en: "Expert Interviews" },
      { zh: "Design System 更新與維護", en: "Design System Updates & Maintenance" },
    ],
    overview: {
      niche: {
        zh: "B2C 運動科技（SportTech）・跑步社群平台・健康管理",
        en: "B2C SportTech · Running Community Platform · Health Management",
      },
      projectIntro:
        "Sports Note 是台灣最大的跑步社群平台，提供馬拉松賽事資訊、跑步紀錄、線上報名與運動內容等服務。本次專案正值 App Alpha 階段，團隊希望透過使用者研究重新檢視產品定位，了解不同跑者的需求，並找出最優先改善的體驗問題。在這個專案中，我主要負責規劃研究流程、執行易用性測試、訪談與問卷調查，將研究結果轉化為產品策略與介面優化方向，以建立後續產品迭代的重要依據。",
      highlights: [
        {
          value: { zh: "13 位跑者", en: "13 runners" },
          label: { zh: "易用性測試", en: "Usability testing" },
        },
        {
          value: { zh: "4 項問題", en: "4 issues" },
          label: { zh: "從 2 項功能收斂出高優先度問題", en: "Narrowed from 2 features to top issues" },
        },
        {
          value: { zh: "2 項介面優化", en: "2 interface optimizations" },
          label: { zh: "已落地驗證", en: "Shipped & validated" },
        },
      ],
    },
    usabilityTesting: {
      eyebrow: { zh: "易用性測試", en: "Usability Testing" },
      goalTitle: {
        zh: "透過易用性測試驗證 App 使用體驗",
        en: "Validating the App Experience Through Usability Testing",
      },
      goal: {
        zh: "快速驗證現有 Alpha 版本 App，測試「賽事列表」與「執行跑步」兩項核心功能，找出操作過程中容易感到困惑的地方。",
        en: "Quickly validate the existing Alpha build by testing the two core features, Race List and Run Tracking, to surface points where users got confused.",
      },
      phases: [
        {
          title: { zh: "定義與設定", en: "Define & Set Up" },
          items: [
            { zh: "形構型測試（開發前）", en: "Formative testing (pre-development)" },
            { zh: "針對「賽事列表」「執行跑步」兩項主功能進行測試", en: "Testing the two core features: Race List and Run Tracking" },
            { zh: "設定 1-3 個任務目標", en: "Setting 1–3 task goals" },
          ],
        },
        {
          title: { zh: "受測者招募", en: "Participant Recruitment" },
          items: [
            { zh: "受測者族群（13 人）", en: "13 total participants" },
            { zh: "一般跑者（9 人）", en: "9 casual runners" },
            { zh: "專業跑者（3 人）", en: "3 experienced runners" },
          ],
        },
        {
          title: { zh: "測試與觀察", en: "Test & Observe" },
          items: [
            { zh: "受測者反應", en: "Participant reactions" },
            { zh: "任務時間", en: "Time on task" },
            { zh: "任務錯誤", en: "Task errors" },
            { zh: "任務效率", en: "Task efficiency" },
          ],
        },
        {
          title: { zh: "訪談與結果分析", en: "Interview & Analysis" },
          items: [
            { zh: "操作時間", en: "Time on task" },
            { zh: "錯誤頻率", en: "Error frequency" },
            { zh: "半結構式訪談", en: "Semi-structured interviews" },
          ],
        },
      ],
      flowSummary: {
        zh: "流程：說明測試目的與過程 → 任務腳本操作 → 測試後訪問 → 結束訪談 → 研究收斂與分析",
        en: "Flow: Explain the test's purpose and process → run through task scripts → post-task questions → closing interview → synthesize and analyze",
      },
      taskScenarios: {
        title: { zh: "設計任務情境腳本，模擬真實使用情境", en: "Designing Task Scenarios to Mirror Real Usage" },
        intro: {
          zh: "在正式測試前，我先操作兩項核心功能，並設計 14 組情境任務，將欲驗證的功能自然融入其中。\n例如，以「#5 請搜尋一場特定的賽事」作為任務，引導受測者自然進入賽事列表，而非直接要求操作特定功能。\n這樣的設計更貼近真實使用情境，也能避免過度引導，讓測試結果更真實。",
          en: "Before the formal test, I walked through both core features myself and designed 14 scenario-based tasks that naturally worked the features I wanted to validate into each one.\nFor example, task #5, \"search for a specific race,\" leads participants into the race list naturally, instead of asking them to operate a specific feature directly.\nThis kept things closer to real usage and avoided over-guiding participants, making the results more trustworthy.",
        },
        features: [
          { icon: "calendar", label: { zh: "賽事列表", en: "Race List" } },
          { icon: "activity", label: { zh: "執行跑步", en: "Run Tracking" } },
        ],
        legend: [
          { efficiency: 1, label: { zh: "很容易就辦到", en: "Completed with ease" } },
          { efficiency: 2, label: { zh: "覺得有些問題，但最終仍可以達成", en: "Ran into issues but completed it" } },
          { efficiency: 3, label: { zh: "無法做到", en: "Could not complete" } },
        ],
        rows: [
          {
            feature: "calendar",
            scenario: { zh: "請打開 App 後看到了登入的畫面", en: "Open the app and land on the login screen" },
            goal: { zh: "登入會員", en: "Log in" },
            response: { zh: "-", en: "-" },
            time: "2s",
            hasError: false,
            efficiency: 1,
            note: { zh: "", en: "" },
          },
          {
            feature: "calendar",
            scenario: { zh: "登入會員後接續步驟", en: "Continue after logging in" },
            goal: { zh: "手機驗證", en: "Phone verification" },
            response: { zh: "登入時沒有注意到底下的「同意服務條款及隱私權聲明」", en: "Didn't notice the \"agree to terms of service and privacy policy\" line at the bottom during login" },
            time: "8s",
            hasError: true,
            efficiency: 2,
            note: { zh: "流程建議改為先「同意服務條款及隱私權聲明」再輸入手機號碼及驗證碼", en: "Suggest reordering the flow: agree to terms first, then enter phone number and verification code" },
          },
          {
            feature: "calendar",
            scenario: { zh: "你聽過「雲端跑」或「線上跑」的活動嗎？", en: "Have you heard of \"cloud run\" or \"online run\" events?" },
            goal: { zh: "理解測試者想法", en: "Understand participant's mental model" },
            response: { zh: "沒有聽過", en: "Never heard of it" },
            time: "-",
            hasError: null,
            efficiency: 1,
            note: { zh: "", en: "" },
          },
          {
            feature: "calendar",
            scenario: { zh: "你想看最近有哪些賽事", en: "You want to see upcoming races" },
            goal: { zh: "賽事列表", en: "Race list" },
            response: { zh: "-", en: "-" },
            time: "3s",
            hasError: true,
            efficiency: 1,
            note: { zh: "賽事列表可用動畫 icon loading；本頁面瀏覽速度建議優化、賽事底下的公里數描述有誤、日期應標示是活動還是報名時間、增加截止狀態", en: "Race list could use an animated loading icon; page load speed should be optimized, the distance label under each race is incorrect, dates should clarify whether they're the event date or registration deadline, and a \"closed\" status should be added" },
          },
          {
            feature: "calendar",
            scenario: { zh: "你想搜尋特定賽事", en: "You want to search for a specific race" },
            goal: { zh: "搜尋賽事關鍵字", en: "Search by keyword" },
            response: { zh: "無法只輸入局部的關鍵字", en: "Couldn't search with a partial keyword" },
            time: "3s",
            hasError: true,
            efficiency: 1,
            note: { zh: "建議顯示最近的關鍵字", en: "Suggest showing recent search keywords" },
          },
          {
            feature: "calendar",
            scenario: { zh: "你想報名「臺灣七七七跳島馬拉松」這場賽事", en: "You want to register for the \"Taiwan 777 Island-Hopping Marathon\"" },
            goal: { zh: "進入賽事報名網頁", en: "Reach the race registration page" },
            response: { zh: "-", en: "-" },
            time: "2s",
            hasError: false,
            efficiency: 1,
            note: { zh: "建議要有 RWD 設計", en: "Suggest a responsive (RWD) layout" },
          },
          {
            feature: "activity",
            scenario: { zh: "你想開始跑步並紀錄自己的軌跡與步數", en: "You want to start running and track your route and steps" },
            goal: { zh: "理解測試者想法", en: "Understand participant's mental model" },
            response: { zh: "-", en: "-" },
            time: "-",
            hasError: null,
            efficiency: 1,
            note: { zh: "", en: "" },
          },
          {
            feature: "activity",
            scenario: { zh: "你想要設定本次跑步的目標公里數", en: "You want to set a distance goal for this run" },
            goal: { zh: "成功設定目標", en: "Successfully set a goal" },
            response: { zh: "輸入數字時有些 bug", en: "Ran into a bug while entering the number" },
            time: "5s",
            hasError: true,
            efficiency: 2,
            note: { zh: "輸入公里數時應該要從前面開始輸入、建議「目標設定」增加公尺的選項、右邊增加累積的標題文字、數字鍵盤收不回去", en: "Distance input should fill from the front, \"goal setting\" should offer a meters option, a running-total label should be added on the right, and the number keyboard doesn't dismiss" },
          },
          {
            feature: "activity",
            scenario: { zh: "你不想設定任何的目標，想直接開始執行跑步", en: "You don't want to set a goal and want to start running directly" },
            goal: { zh: "回執行跑步畫面→開始", en: "Return to run screen → start" },
            response: { zh: "定位時間過久", en: "GPS lock took too long" },
            time: "30s+",
            hasError: true,
            efficiency: 2,
            note: { zh: "建議考量網路定位狀況，可增設離線地圖", en: "Suggest accounting for weak GPS/network conditions, e.g. adding an offline map" },
          },
          {
            feature: "activity",
            scenario: { zh: "請開始執行跑步並結束跑步", en: "Start a run and then end it" },
            goal: { zh: "開始→繼續→停止紀錄", en: "Start → continue → stop recording" },
            response: { zh: "無法點擊停止紀錄", en: "Couldn't tap to stop recording" },
            time: "4s",
            hasError: true,
            efficiency: 2,
            note: { zh: "建議換個「停止紀錄」的手勢操作方式", en: "Suggest replacing the \"stop recording\" gesture with a different interaction" },
          },
          {
            feature: "activity",
            scenario: { zh: "跑步結束，你想要編輯本次的跑步紀錄標題", en: "After finishing, you want to edit the run's title" },
            goal: { zh: "編輯標題", en: "Edit the title" },
            response: { zh: "-", en: "-" },
            time: "-",
            hasError: null,
            efficiency: null,
            note: { zh: "", en: "" },
          },
          {
            feature: "activity",
            scenario: { zh: "結束跑步，把紀錄上傳到運動筆記", en: "After finishing, upload the run to Sports Note" },
            goal: { zh: "上傳運動筆記", en: "Upload to Sports Note" },
            response: { zh: "-", en: "-" },
            time: "-",
            hasError: null,
            efficiency: null,
            note: { zh: "", en: "" },
          },
          {
            feature: "activity",
            scenario: { zh: "結束跑步，想把跑步紀錄登陸到已報名的雲端跑賽事中", en: "After finishing, log the run against a registered cloud-run race" },
            goal: { zh: "上傳並登陸賽事", en: "Upload and log to a race" },
            response: { zh: "-", en: "-" },
            time: "-",
            hasError: null,
            efficiency: null,
            note: { zh: "", en: "" },
          },
          {
            feature: "activity",
            scenario: { zh: "回首頁／逛商城", en: "Return to home / browse the shop" },
            goal: { zh: "-", en: "-" },
            response: { zh: "進入其他功能後無法點擊底下首頁的按鈕回去", en: "After entering another feature, couldn't tap the bottom home button to go back" },
            time: "2s",
            hasError: true,
            efficiency: 1,
            note: { zh: "建議在商城裡增加篩選條件功能", en: "Suggest adding filter options in the shop" },
          },
        ],
      },
      findingsIntro: {
        zh: "透過易用性測試，分析操作時間與錯誤頻率，收斂出 4 項高優先度的介面問題：",
        en: "Analyzing time on task and error frequency from the usability tests surfaced 4 high-priority interface issues:",
      },
      findings: [
        {
          title: { zh: "「雲端跑」用詞不熟悉", en: "Unfamiliar with the term \"Cloud Run\"" },
          detail: {
            zh: "13 位受測者中有 8 位表示不熟悉「雲端跑」一詞\n認為「線上跑」聽起來更直覺，反映出UX Writing 需要進一步優化。",
            en: "8 of the 13 participants said they weren't familiar with the term \"Cloud Run,\"\nand felt \"Online Run\" would read more intuitively, a sign the UX writing needed further work.",
          },
          image: "/images/projects/h2u/finding-cloud-run-white.png",
          imageAlt: { zh: "雲端跑分頁截圖", en: "Screenshot of the Cloud Run tab" },
          imageWidth: 560,
          imageHeight: 980,
          markerPosition: { top: 24, left: 80 },
          calloutLabel: { zh: "不熟悉的用詞", en: "Unfamiliar term" },
          calloutPosition: { top: 24, left: 94 },
        },
        {
          title: { zh: "搜尋功能缺乏回饋機制", en: "Search lacks feedback mechanisms" },
          detail: {
            zh: "使用者無法輸入局部關鍵字進行搜尋，介面上也沒有\n明確的取消或確認按鈕，容易造成操作上的不確定性。",
            en: "Users couldn't search with a partial keyword, and the interface had\nno clear cancel or confirm button, leaving users unsure whether the action had registered.",
          },
          image: "/images/projects/h2u/finding-search-white-v2.png",
          imageAlt: { zh: "賽事搜尋截圖", en: "Screenshot of race search" },
          imageWidth: 560,
          imageHeight: 980,
          markerPosition: { top: 17, left: 88 },
          calloutLabel: { zh: "無法輸入局部關鍵字", en: "Can't search partial keywords" },
          calloutPosition: { top: 17, left: 100 },
        },
        {
          title: { zh: "滑動手勢停止紀錄不直覺", en: "Swipe-to-stop gesture isn't intuitive" },
          detail: {
            zh: "13 位受測者中有 9 位表示，在跑步過程中以滑動手勢\n停止紀錄的設計不夠直覺，容易造成操作錯誤與任務中斷。",
            en: "9 of the 13 participants said the swipe gesture for stopping\na recording mid-run wasn't intuitive, leading to mis-taps and interrupted tasks.",
          },
          image: "/images/projects/h2u/finding-stop-gesture-white-v2.png",
          imageAlt: { zh: "執行跑步停止紀錄截圖", en: "Screenshot of stopping a run recording" },
          imageWidth: 560,
          imageHeight: 980,
          markerPosition: { top: 85, left: 65 },
          calloutLabel: { zh: "滑動停止不直覺", en: "Swipe-to-stop isn't intuitive" },
          calloutPosition: { top: 85, left: 85 },
        },
        {
          title: { zh: "數字鍵盤不會自動收起", en: "Number keyboard doesn't auto-dismiss" },
          detail: {
            zh: "自訂公里數時，輸入完成後底部的數字鍵盤不會自動收起，\n影響操作的流暢度。",
            en: "When setting a custom distance goal, the number keyboard at the bottom\ndoesn't dismiss automatically after input, disrupting the flow.",
          },
          image: "/images/projects/h2u/finding-keyboard-white-v2.png",
          imageAlt: { zh: "設定目標公里數截圖", en: "Screenshot of setting a distance goal" },
          imageWidth: 560,
          imageHeight: 980,
          markerPosition: { top: 69, left: 81 },
          calloutLabel: { zh: "鍵盤不會自動收起", en: "Keyboard doesn't auto-dismiss" },
          calloutPosition: { top: 69, left: 99 },
        },
      ],
      semiStructuredInterview: {
        title: { zh: "半結構式訪談結果", en: "Semi-Structured Interview Results" },
        intro: {
          zh: "從功能、介面呈現與技術三個面向分析產品優化項目，協助團隊快速辨識現有問題並判斷改善優先級；其中標示項目為經產品團隊討論後，確認可優先投入改善的業務範圍。",
          en: "Product-improvement items were analyzed across three dimensions, feature, interface, and technical, to help the team quickly identify existing issues and prioritize fixes; the tagged items are the ones the product team confirmed as priority areas after discussion.",
        },
        legend: [
          { category: "feature", label: { zh: "功能優化", en: "Feature optimization" } },
          { category: "interface", label: { zh: "介面呈現優化", en: "Interface optimization" } },
          { category: "tech", label: { zh: "技術優化", en: "Technical optimization" } },
        ],
        groups: [
          {
            topic: { zh: "賽事列表功能", en: "Race List" },
            items: [
              {
                id: "1.1",
                label: { zh: "篩選條件不足", en: "Insufficient filter options" },
                summary: {
                  zh: "使用者希望在賽事列表中可依地區與公里數進行篩選，提高搜尋效率與精準度。",
                  en: "Users wanted to filter the race list by region and distance to search faster and more precisely.",
                },
                direction: { zh: "加入地區與公里數篩選條件", en: "Add region and distance filters" },
              },
            ],
          },
          {
            topic: { zh: "跑步目標設定與紀錄", en: "Goal Setting & Run Recording" },
            items: [
              {
                id: "2.1",
                label: { zh: "目標重設需求", en: "Need to reset the goal" },
                summary: {
                  zh: "因定位誤差，使用者希望有「重新歸零」按鈕以重設目標公里數。",
                  en: "Due to GPS drift, users wanted a \"reset to zero\" button to reset the distance goal.",
                },
                direction: { zh: "加入「重新歸零」按鈕", en: "Add a \"reset to zero\" button" },
              },
              {
                id: "2.2",
                label: { zh: "無達標通知", en: "No goal-reached notification" },
                summary: {
                  zh: "即使已達成目標公里數，App 未跳出通知，無法即時掌握成果。",
                  en: "Even after hitting the distance goal, the app never surfaced a notification, so users couldn't tell in the moment.",
                },
                direction: { zh: "加入 Modal Panel 通知回應面板", en: "Add a modal panel to notify and respond" },
                priorityCategory: "feature",
              },
              {
                id: "2.3",
                label: { zh: "時間紀錄缺失", en: "Missing time records" },
                summary: {
                  zh: "專業跑者反映跑步時間無法完整紀錄，影響整體紀錄的完整性。",
                  en: "Experienced runners reported that run duration wasn't being recorded completely, undermining the overall record.",
                },
                direction: { zh: "修正時間紀錄 API 或運作邏輯", en: "Fix the time-tracking API or its logic" },
                priorityCategory: "interface",
              },
            ],
          },
          {
            topic: { zh: "執行跑步介面", en: "Run Tracking Interface" },
            items: [
              {
                id: "3.1",
                label: { zh: "停止記錄不直觀", en: "Stop-recording isn't intuitive" },
                summary: {
                  zh: "「滑動停止鍵」不易理解，希望加入輔助文字或語音提示。",
                  en: "The swipe-to-stop control was hard to grasp; users wanted helper text or a voice prompt.",
                },
                direction: { zh: "改善 UI 互動元件", en: "Improve the UI interaction component" },
                priorityCategory: "feature",
              },
              {
                id: "3.2",
                label: { zh: "即時反饋不足", en: "Lacking real-time feedback" },
                summary: {
                  zh: "建議在達成目標或每公里時給予震動／語音提示，以增強運動當下的感知。",
                  en: "Suggested adding a vibration or voice cue when hitting a goal or completing each kilometer, to reinforce awareness while running.",
                },
                direction: { zh: "增加事件回饋觸發", en: "Add event-triggered feedback" },
                priorityCategory: "interface",
              },
              {
                id: "3.3",
                label: { zh: "文字資訊可讀性差", en: "Poor text readability" },
                summary: {
                  zh: "跑步中資訊如「配速、總時長」字體太小，導致跑步中難以辨識。",
                  en: "In-run stats like pace and total time were set too small to read while running.",
                },
                direction: { zh: "放大字體重新排版", en: "Enlarge the type and rework the layout" },
                priorityCategory: "interface",
              },
            ],
          },
          {
            topic: { zh: "雲端跑功能", en: "Cloud Run Feature" },
            items: [
              {
                id: "4.1",
                label: { zh: "功能缺乏引導", en: "Feature lacks onboarding" },
                summary: {
                  zh: "使用者表示不清楚「雲端跑是什麼」，建議首次登入時提供說明。",
                  en: "Users said they didn't understand what \"Cloud Run\" was, and suggested an explainer on first login.",
                },
                direction: { zh: "新增新手引導 onboarding", en: "Add a first-time onboarding flow" },
                priorityCategory: "feature",
              },
            ],
          },
          {
            topic: { zh: "配速與步數精準度", en: "Pace & Step-Count Accuracy" },
            items: [
              {
                id: "5.1",
                label: { zh: "平均配速誤差大", en: "Large error in average pace" },
                summary: {
                  zh: "使用者表示已經跑每公里 4 分鐘，App 顯示仍為 7 分鐘，建議顯示「即時配速」較貼近實際情況。",
                  en: "A user said they were running a 4-minute kilometer pace but the app still showed 7 minutes; suggested showing \"real-time pace\" to better match reality.",
                },
                direction: { zh: "更改即時配速演算法顯示", en: "Revise the real-time pace algorithm and display" },
                priorityCategory: "feature",
              },
              {
                id: "5.2",
                label: { zh: "步數感測延遲", en: "Step-sensing lag" },
                summary: {
                  zh: "使用者已開始動作，但 App 顯示延遲，甚至突然「爆量加總」，反映不靈敏。",
                  en: "Users had already started moving but the app's display lagged, then suddenly jumped in a burst, indicating an unresponsive sensor.",
                },
                direction: { zh: "優化感測資料即時性", en: "Improve the real-time responsiveness of sensor data" },
                priorityCategory: "tech",
              },
              {
                id: "5.3",
                label: { zh: "地圖資訊優先性", en: "Map's information priority" },
                summary: {
                  zh: "跑者認為「地圖」在跑步中作用有限，建議降低地圖優先層級。",
                  en: "Runners felt the map had limited use mid-run, and suggested lowering its priority.",
                },
                direction: { zh: "降低地圖顯示權重", en: "Lower the map's visual weight" },
                priorityCategory: "tech",
              },
            ],
          },
          {
            topic: { zh: "社群與差異化設計", en: "Community & Differentiation" },
            items: [
              {
                id: "6.1",
                label: { zh: "分享與社群需求", en: "Need for sharing & community" },
                summary: {
                  zh: "使用者希望能「分享跑步軌跡」，參考 Nike App。",
                  en: "Users wanted to \"share their running route,\" citing the Nike App as a reference.",
                },
                direction: { zh: "新增跑步路線分享功能", en: "Add a route-sharing feature" },
              },
              {
                id: "6.2",
                label: { zh: "缺乏市場差異性", en: "Lacking market differentiation" },
                summary: {
                  zh: "專業跑者認為目前 App 與其他跑步 App 差異不大，需增加誘因吸引用戶。",
                  en: "Experienced runners felt the app wasn't distinct from other running apps, and that it needed stronger hooks to attract users.",
                },
                direction: { zh: "強化差異化功能，如社群互動或遊戲化機制", en: "Strengthen differentiating features, such as community interaction or gamification" },
              },
            ],
          },
        ],
      },
    },
    expertInterview: {
      eyebrow: { zh: "專家訪談", en: "Expert Interviews" },
      intro: {
        zh: "為深入了解跑者在實際情境下的使用需求，訪談 3 位具豐富跑步經驗（3-5年）的跑者，進行介面測試與半結構化訪談。透過實際操作與情境回饋，辨識產品在功能與介面上的問題，作為後續功能優化與產品迭代的依據。",
        en: "To understand runner needs in real conditions, I interviewed 3 experienced runners (3–5 years of running) through interface testing and semi-structured interviews. Their hands-on feedback surfaced feature and interface problems that guided the next round of optimization and iteration.",
      },
      avatars: [
        "/images/projects/h2u/interview-avatar-1.jpg",
        "/images/projects/h2u/interview-avatar-2.jpg",
        "/images/projects/h2u/interview-avatar-3.jpg",
      ],
      photo: "/images/projects/h2u/interview-photo-v2.jpg",
      quotes: [
        { zh: "我希望每達到一公里的里程碑時，提供視覺或觸覺回饋。", en: "I'd like visual or haptic feedback every time I hit a one-kilometer milestone." },
        { zh: "在跑步過程中，可以強調「距離」與「總時間」指標，「步數」在視覺上可以降低比重，也許可以改成「爬升」。", en: "While running, distance and total time should be emphasized more; step count could carry less visual weight. Maybe swap it for elevation gain." },
        { zh: "希望能有社群功能，可以跟其他人分享跑步路線和軌跡。", en: "I'd like a community feature so I can share my running routes and tracks with others." },
        { zh: "App 內的商店對跑者來說缺乏實用價值。", en: "The in-app shop doesn't offer much practical value for runners." },
        { zh: "地圖功能在實際跑步過程中的重要性比較低。", en: "The map feature matters less during an actual run." },
        { zh: "平均配速（距離 / 時間）通常是在跑完後才查看，建議在跑步進行中顯示「即時配速」，提供比較精準的回饋。", en: "I usually only check average pace (distance / time) after finishing. I'd suggest showing real-time pace during the run for more accurate feedback." },
        { zh: "在跑步過程中，總時間、平均配速與步數的字體太小，不容易閱讀。", en: "While running, the type for total time, average pace, and step count is too small to read easily." },
      ],
    },
    interfaceOptimization: {
      eyebrow: { zh: "介面優化", en: "Interface Optimization" },
      items: [
        {
          number: "1",
          title: { zh: "優化跑步中的資訊層級與閱讀動線", en: "Optimizing In-Run Information Hierarchy & Reading Flow" },
          painPoints: [
            { zh: "根據專業跑者的訪談回饋，現有地圖模式視覺權重過高，干擾使用者在跑步過程中對訓練數據的專注。", en: "Per experienced-runner interviews, the existing map mode carries too much visual weight, distracting users from training data mid-run." },
            { zh: "配速、總時長等關鍵資訊字體過小，使用者在跑步過程中難以快速辨識，並建議顯示「即時配速」較貼近實際情況。", en: "Key info like pace and total time is set too small to read quickly while running, and users suggested showing real-time pace to better match reality." },
          ],
          hmw: [
            { zh: "如何**降低地圖在介面中的資訊層級**？", en: "How might we **lower the map's information hierarchy** in the interface?" },
            { zh: "如何**放大跑步過程中最核心的數據**，減少使用者的閱讀與注意力負擔？", en: "How might we **enlarge the most critical in-run data** to reduce the reading and attention burden?" },
          ],
          solutions: [
            { zh: "新增頂部 Tab 切換設計，以「數據／地圖」兩個模式區分，將地圖轉為按需查看的次要功能，降低視覺權重。", en: "Added a top tab switcher separating \"Data\" and \"Map\" modes, turning the map into an on-demand secondary feature and lowering its visual weight." },
            { zh: "放大跑步中的「即時配速」，提升訓練數據的辨識度，讓使用者在移動過程中也能快速掌握跑步狀態。", en: "Enlarged \"real-time pace\" during runs to improve legibility, so users can gauge their status quickly even while moving." },
          ],
          beforeImage: "/images/projects/h2u/optimization-1-before.png",
          beforeImageAlt: { zh: "優化前：地圖與數據資訊擠在同一畫面，地圖視覺權重過高", en: "Before: map and data crammed into one screen, with the map carrying too much visual weight" },
          beforeImageWidth: 680,
          beforeImageHeight: 1190,
          afterImage: "/images/projects/h2u/optimization-1-after.png",
          afterImageAlt: { zh: "優化後：新增數據／地圖 Tab 切換，核心數據放大呈現", en: "After: added a Data/Map tab switcher with core data shown at a larger size" },
          afterImageWidth: 1240,
          afterImageHeight: 1152,
        },
        {
          number: "2",
          title: { zh: "重新設計停止跑步操作，減少過程中的干擾", en: "Redesigning the Stop-Run Action to Reduce Mid-Run Friction" },
          sideBySide: true,
          painPoints: [
            { zh: "根據易用性測試結果，發現「滑動手勢」操作不直覺，增加使用者的操作負擔，進而影響跑步時的節奏與操作效率。", en: "Usability testing found the swipe gesture wasn't intuitive, adding to users' operational burden and disrupting their pace and efficiency while running." },
          ],
          solutions: [
            { zh: "改以「點擊」方式停止跑步，降低操作負擔，讓跑者能更快速完成操作。", en: "Switched to tapping to stop the run, lowering the operational burden so runners can complete the action faster." },
          ],
          beforeImage: "/images/projects/h2u/swipe-hint/before-frame-v1.jpg",
          beforeImageAlt: { zh: "優化前：以滑動手勢停止跑步紀錄", en: "Before: stopping a run recording with a swipe gesture" },
          beforeImageWidth: 680,
          beforeImageHeight: 1358,
          beforeSwipeHint: {
            hand: "/images/projects/h2u/swipe-hint/hand.png",
            arrow: "/images/projects/h2u/swipe-hint/arrow.png",
          },
          afterImage: "/images/projects/h2u/swipe-hint/after-frame-v1.jpg",
          afterImageAlt: { zh: "優化後：改以點擊按鈕停止跑步紀錄", en: "After: stopping a run recording by tapping a button" },
          afterImageWidth: 680,
          afterImageHeight: 1358,
          afterTapHint: {
            hand: "/images/projects/h2u/swipe-hint/hand.png",
            left: "74.3%",
            top: "85%",
          },
        },
      ],
    },
    darkModeShowcase: {
      heading: { zh: "深色模式", en: "Dark Mode" },
      description: {
        zh: "為配合低光源環境（例如：夜跑），同時設計出深色模式介面。",
        en: "Also designed a dark mode interface for low-light settings, like running at night.",
      },
      gallery: {
        images: [
          { src: "/images/projects/h2u/dark-mode/race-list-onboarding.png", alt: { zh: "賽事列表與雲端跑新手指南", en: "Race list with Cloud Run onboarding" }, width: 1560, height: 3376 },
          { src: "/images/projects/h2u/dark-mode/run-standard-mode.png", alt: { zh: "深色模式：執行跑步一般模式", en: "Dark mode: standard run mode" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-set-goal.png", alt: { zh: "深色模式：設定跑步目標", en: "Dark mode: setting a run goal" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-set-goal-custom.png", alt: { zh: "設定跑步目標（自訂）", en: "Setting a custom run goal" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-in-progress.png", alt: { zh: "執行跑步中（顯示公里數）", en: "Run in progress, showing distance" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-goal-exceeded.png", alt: { zh: "執行跑步已超過目標數", en: "Run in progress, goal exceeded" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-summary.png", alt: { zh: "跑步結束畫面", en: "Run summary screen" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-summary-edit-title.png", alt: { zh: "編輯跑步紀錄標題", en: "Editing the run record title" }, width: 1560, height: 3384 },
          { src: "/images/projects/h2u/dark-mode/run-record-uploaded.png", alt: { zh: "深色模式：跑步紀錄已上傳並登錄賽事", en: "Dark mode: run record uploaded and registered to a race" }, width: 1560, height: 3384 },
        ],
      },
    },
    designSystemShowcase: {
      heading: { zh: "設計系統", en: "Design System" },
      description: {
        zh: "我參與維護與更新 Sports Notes App 的設計系統，以確保產品開發的一致性與擴充性，同時提升使用者體驗與團隊協作效率。",
        en: "I contributed to maintaining and updating the design system of the Sports Notes app to ensure consistency and scalability in product development, while enhancing user experience and team collaboration efficiency.",
      },
      typography: { src: "/images/projects/h2u/design-system/typography.svg", width: 905, height: 1008 },
      color: { src: "/images/projects/h2u/design-system/color.svg", width: 905, height: 723 },
      component: { src: "/images/projects/h2u/design-system/component.svg", width: 972, height: 1526 },
    },
  },
  {
    id: "8",
    slug: "museum-ai-guide",
    name: "Museum AI Guide",
    client: "Museum AI Guide",
    type: "個人研究．碩士論文",
    image: "/images/projects/museum-ai-guide/hero.png",
    deviceMockup: false,
    cardTags: ["Generative AI", "RAG System"],
    cardHeadline: {
      zh: "建構 RAG 導覽系統\n讓文物問答更精準",
      en: "Built a RAG guide system for more precise artifact Q&A",
    },
    cardDescription: {
      zh: "以國立故宮博物院特展知識庫建構 RAG 對話系統，串聯權威資料庫使回答可追溯，解決通用型 LLM 在領域知識幻覺問題，並生成情境圖像補足缺佚文物脈絡。經 30 人對照實驗驗證，顯著提升使用者的知識建構與參與度。",
      en: "Built a RAG conversation system on the National Palace Museum's special-exhibition knowledge base, connecting authoritative databases so every answer stays traceable and addressing general-purpose LLMs' domain-knowledge hallucination problem, while generating context images to fill in missing artifacts. A 30-person controlled study confirmed significant gains in users' knowledge-building and engagement.",
    },
    color: "#2A1D12",
    cardAccent: "#C4956A",
    cardImage: "/images/projects/museum-ai-guide/card-hand-photo.jpg",
    cardImageWidth: 2000,
    cardImageHeight: 1500,
    cardImageFit: "contain",
    cardImageBackdrop: "#7A7871",
    cardImageScale: 1.55,
    presentationEmbedUrl: "https://www.canva.com/design/DAHSO25n1g8/bZPhBm9jh1Zh5-f8iVNKnA/view?embed",
    repoUrl: "https://github.com/Rueilling2085/rag-museum-chatbot",
    description: {
      zh: "以國立故宮博物院特展知識庫建構 AI-native RAG 對話系統。針對展覽資訊標籤字數有限，以及通用型 LLM 在特定領域知識中容易產生幻覺的問題，串聯權威資料庫進行知識檢索，確保回答具備可追溯的資料依據；同時補足缺佚文物脈絡，生成情境圖像以還原歷史脈絡。經 30 人對照實驗驗證，顯著提升使用者的知識建構與參與度。\n研究成果已獲 IEEE ICASI 2026 口頭發表。",
      en: "Built an AI-native RAG conversation system on the National Palace Museum's special-exhibition knowledge base. To address the limited character count of exhibition labels and general-purpose LLMs' tendency to hallucinate in specialized domains, I connected authoritative databases for knowledge retrieval so every answer stays traceable, while generating context images to fill in missing artifacts and restore their historical context. A 30-person controlled study confirmed significant gains in users' knowledge-building and engagement.\nThe research was presented orally at IEEE ICASI 2026.",
    },
    descriptionLink: { text: "IEEE ICASI 2026", url: "https://2026.icasi-conf.net/" },
    duration: "2025 – 2026 (Master's Thesis Research)",
    team: ["Researcher, Designer & Developer ×1 - Me", "Advisor ×1"],
    role: [
      "Field Research",
      "Curator Interview",
      "Experiment Design",
      "RAG System Development",
      "UI Design",
      "Quantitative Analysis",
    ],
    overview: {
      niche: { zh: "個人研究．碩士論文・多模態 RAG・生成式 AI", en: "Master's Research · Multimodal RAG · Generative AI" },
      projectIntro:
        "以多模態 RAG 技術打造的博物館 AI 導覽系統，結合知識檢索與生成式影像，將靜態的文物說明牌轉化為可對話、可視覺化的知識探索體驗。",
      highlights: [
        { value: { zh: "35 件文物", en: "35 artifacts" }, label: { zh: "知識庫規模", en: "Knowledge base scale" } },
        { value: { zh: "212 則對話", en: "212 dialogues" }, label: { zh: "30 位受測者實測後產生", en: "Generated from 30 participants" } },
        { value: { zh: "13.21%", en: "13.21%" }, label: { zh: "辨識出的知識缺口", en: "Knowledge gaps identified" } },
      ],
    },
  },
  {
    id: "6",
    slug: "touchtune",
    name: "TouchTune",
    client: "TouchTune",
    type: "團隊協作．碩士設計專題",
    image: "/images/projects/touchtune/touchtune-hero-v7.jpg",
    deviceMockup: false,
    cardTags: ["Product Design", "Wearable Device"],
    cardHeadline: {
      zh: "打造讓聽障者感受音樂的穿戴式裝置",
      en: "Built a wearable that lets people who are deaf or hard of hearing feel music",
    },
    cardDescription: {
      zh: "透過使用者研究、軟硬體整合與產品設計，將音樂轉化為觸覺回饋，打破傳統輔具冰冷的既有印象。歷經 5 次原型迭代，同步優化外觀造型與震動機構配置，並結合 App 延伸情感分享與音樂互動體驗。",
      en: "Through user research, hardware/software integration, and product design, I turned music into haptic feedback, breaking away from the cold, clinical feel of typical assistive devices. Five prototype iterations refined the form and vibration-module layout in parallel, paired with an app that extends the experience into emotional sharing and music-driven interaction.",
    },
    color: "#5532FA",
    cardImage: "/images/projects/touchtune/card-cover.jpg",
    cardImageWidth: 2000,
    cardImageHeight: 1125,
    cardImageFit: "contain",
    cardImageBackdrop: "#0C0818",
    cardHoverImage: "/images/projects/touchtune/card-collage-v3.png",
    cardHoverImageWidth: 1351,
    cardHoverImageHeight: 1260,
    theme: "dark",
    description: {
      zh: "TouchTune 是一款專為聽障人士設計的穿戴式裝置。它透過將聲音轉化為多頻率的振動，提供多感官的音樂體驗。",
      en: "TouchTune is a wearable device designed for people who are deaf or hard of hearing. It translates sound into multi-frequency vibration, delivering a multisensory music experience.",
    },
    duration: "September 2025 (5 months)",
    team: ["Industrial Designer ×2", "PM, UI/UX Designer ×1 - Me"],
    role: [
      "User Research",
      "Competitive Analysis",
      "Product Positioning",
      "UI Design",
      "3D rendering",
    ],
    overview: {
      projectIntro:
        "TouchTune 是一款專為聽障人士設計的穿戴式裝置。它透過將聲音轉化為多頻率的振動，提供多感官的音樂體驗。這不僅能幫助使用者感受音樂的節奏與音高，還能提升他們在社交活動中的參與度，帶來更豐富的感官體驗與更深層的情感連結。",
      highlights: [
        { value: { zh: "5 次", en: "5 iterations" }, label: { zh: "原型迭代", en: "Prototype iterations" } },
        { value: { zh: "2 項", en: "2 awards" }, label: { zh: "國際設計獎", en: "International design awards" } },
      ],
      awards: [
        { name: "IDA Design Awards", result: { zh: "Honorable Mention", en: "Honorable Mention" } },
        { name: "unDesign Award", result: { zh: "Gold", en: "Gold" } },
      ],
    },
    researchBackground: {
      eyebrow: { zh: "研究背景", en: "Research Background" },
      source: {
        zh: "根據世界衛生組織（WHO）《2021 年世界聽力報告》，全球聽力損失人口持續攀升，觸覺正逐漸成為聲音感知的重要替代途徑。",
        en: "Per the WHO's 2021 World Report on Hearing, the global population with hearing loss keeps rising, and touch is becoming an important substitute channel for perceiving sound.",
      },
      growthStat: { from: { zh: "15億", en: "1.5B" }, to: { zh: "25億", en: "2.5B" }, label: { zh: "全球聽力損失人口（預估 2050 年）", en: "People with hearing loss worldwide (projected, 2050)" } },
      stats: [
        { value: "20%", label: { zh: "約佔全球總人口", en: "Of the global population" } },
        { value: "+67%", label: { zh: "較現今成長", en: "Growth from today" } },
      ],
      subtitle: { zh: "聽障人士如何「聽」見聲音？", en: "How Do Deaf or Hard-of-Hearing People \"Hear\" Sound?" },
      body: {
        zh: "得益於大腦的可塑性，當某種感官功能喪失時，大腦會透過利用其他感官來進行代償。聽障人士便是透過偵測「振動」，利用觸覺來感受聲音。因此，對他們而言，音樂是一種全身性的體驗，許多人會將手放在樂器或音響喇叭上，以感知音樂的節奏、低音與拍子。",
        en: "Thanks to the brain's plasticity, when one sense is lost, the brain compensates by leaning on the others. People who are deaf or hard of hearing sense sound by detecting vibration through touch. For them, music becomes a full-body experience. Many rest a hand on an instrument or speaker to feel its rhythm, bass, and beat.",
      },
      image: "/images/projects/touchtune/music-seniro.jpg",
      imageAlt: { zh: "群眾在演唱會中隨音樂舉手歡呼", en: "A crowd raising their hands to the music at a concert" },
    },
    problemSolution: {
      eyebrow: { zh: "問題與解決方案", en: "Problem & Solution" },
      heading: {
        line1: { zh: "跨越聽覺的邊界，", en: "Crossing the boundary of hearing," },
        line2Prefix: { zh: "透過", en: "through" },
        line2Highlight: { zh: "多感官振動觸覺設計", en: "multisensory vibrotactile design" },
      },
      problemPoints: [
        {
          title: { zh: "感知聲音的局限性", en: "Limited access to sound" },
          description: { zh: "無法透過聽覺感知音樂節奏、頻率與聲音的情感層次。", en: "Can't perceive a song's rhythm, frequency, or emotional layers through hearing." },
        },
        {
          title: { zh: "社交參與困難", en: "Difficulty participating socially" },
          description: { zh: "在音樂活動上容易孤立，缺乏參與感和互動機會。", en: "Easily isolated at music events, with little sense of participation or chance to interact." },
        },
        {
          title: { zh: "情感連結不足", en: "Lacking emotional connection" },
          description: { zh: "難以感知當下音樂氛圍，情感共鳴受阻。", en: "Hard to sense the mood of the moment, blocking emotional resonance." },
        },
      ],
      solutionIntro: {
        zh: "我們將聲音轉化為多頻率振動，不僅能幫助聽障者感受音樂的節奏與頻率，更能提升他們在社交活動中的參與度，帶來更豐富的感官體驗與情感連結。",
        en: "We turn sound into multi-frequency vibration, not only helping users who are deaf or hard of hearing feel a song's rhythm and frequency, but also raising their participation in social settings, with a richer sensory experience and emotional connection.",
      },
      solutionPoints: [
        {
          title: { zh: "音樂轉譯振動模組", en: "Music-to-vibration modules" },
          description: { zh: "三個獨立振動模組，模擬多樣化音樂類型。", en: "Three independent vibration modules simulate a range of music types." },
        },
        {
          title: { zh: "情感互動分享", en: "Emotional interaction & sharing" },
          description: { zh: "透過燈光與震動模組，將音樂感受傳遞給他人，促進交流與參與。", en: "Light and vibration modules pass the feeling of the music to others, encouraging exchange and participation." },
        },
        {
          title: { zh: "創造專屬音樂體驗", en: "Creating a personal music experience" },
          description: {
            zh: "記錄情緒反應，結合 App 回放當下的氛圍，打造個人化且獨特的音樂體驗。",
            en: "Records emotional responses and replays the moment's mood through the app, creating a personalized, distinctive music experience.",
          },
        },
      ],
    },
    productFeatures: {
      eyebrow: { zh: "產品功能", en: "Product Features" },
      image: "/images/projects/touchtune/product-features.png",
      imageAlt: { zh: "TouchTune 穿戴式裝置配戴於手腕的功能示意圖", en: "Feature diagram of the TouchTune wearable worn on the wrist" },
      items: [
        {
          icon: "waveform",
          title: { zh: "音樂轉震動模組", en: "Music-to-Vibration Modules" },
          description: { zh: "三個模組可模擬多樣化的音樂類型。", en: "Three modules simulate a range of music types." },
          position: { top: "6%", left: "42%" },
        },
        {
          icon: "emotion",
          title: { zh: "情感互動與分享", en: "Emotional Interaction & Sharing" },
          description: { zh: "透過燈光與震動分享音樂體驗，增進互動。", en: "Share the music experience through light and vibration to boost interaction." },
          position: { top: "60%", left: "42%" },
        },
      ],
      appShowcase: {
        image: "/images/projects/touchtune/app-demo.png",
        imageAlt: { zh: "TouchTune App 介面：裝置設定、情緒紀錄與音樂回放", en: "TouchTune app interface: device settings, emotion log, and music playback" },
        title: { zh: "個人化音樂體驗", en: "A Personalized Music Experience" },
        description: { zh: "記錄情感並可透過應用程式（App）回放。", en: "Records emotional responses and lets you replay them through the app." },
      },
    },
    designSketches: {
      eyebrow: { zh: "設計草圖", en: "Design Sketches" },
      images: [
        { src: "/images/projects/touchtune/sketch01-2.png", alt: { zh: "手部觸控與震動模組結構草圖", en: "Sketch of hand-touch and vibration-module structure" } },
        { src: "/images/projects/touchtune/sketch02-2.png", alt: { zh: "手腕裝置正面配置草圖", en: "Sketch of the wrist device's front layout" } },
        { src: "/images/projects/touchtune/sketch03-2.png", alt: { zh: "左右手裝置配戴草圖", en: "Sketch of the device worn on left and right hands" } },
      ],
      principlesIntro: {
        zh: "在發展產品設計草圖時，需要從外觀與結構設計、人體工學與硬體配置等多個維度進行綜合考量。以下是核心的設計考量要點：",
        en: "Developing the design sketches meant weighing form and structure, ergonomics, and hardware layout together. Here are the core considerations:",
      },
      principles: [
        {
          icon: "structure",
          title: { zh: "外觀與結構設計", en: "Form & Structural Design" },
          items: [
            {
              label: { zh: "造型與語意", en: "Form & visual language" },
              description: {
                zh: "確認產品的外型語彙，如流動感曲線、幾何簡約等，確保視覺風格符合設計定位。",
                en: "Settled the product's visual vocabulary, flowing curves and minimal geometry, to keep the look aligned with the design positioning.",
              },
            },
            {
              label: { zh: "分件與層次", en: "Parting lines & layering" },
              description: {
                zh: "思考產品的結構層次，內層與外層的分離，並規劃內部組件的走線與收納空間。",
                en: "Worked out the structural layers, separating inner and outer shells, and planned routing and storage space for internal components.",
              },
            },
            {
              label: { zh: "固定與配戴穩定性", en: "Fastening & wear stability" },
              description: {
                zh: "針對穿戴式裝置，需規劃前後端的固定機制（如綁帶、卡扣或彈性結構），確保使用者在活動時不易脫落或移位。",
                en: "For a wearable, planned the front-and-back fastening mechanism (straps, clips, or elastic structure) so it stays put during activity.",
              },
            },
          ],
        },
        {
          icon: "ergonomics",
          title: { zh: "人體工學與穿戴體驗", en: "Ergonomics & Wearing Experience" },
          items: [
            {
              label: { zh: "包覆範圍與尺寸", en: "Coverage & sizing" },
              description: { zh: "明確定義裝置在身體上的分佈區域，如手腕至手肘下方的區段，符合人體尺寸工學。", en: "Defined exactly where the device sits on the body, from the wrist down to below the elbow, matched to ergonomic sizing." },
            },
            {
              label: { zh: "材質與親膚性", en: "Material & skin comfort" },
              description: { zh: "挑選適合長時間接觸皮膚的舒適、透氣親膚材質。", en: "Chose comfortable, breathable, skin-friendly materials suited for prolonged skin contact." },
            },
            {
              label: { zh: "生理結構適應性", en: "Anatomical fit" },
              description: {
                zh: "硬體與感測元件的配置需避開或契合人體組織（例如選擇肌肉與軟組織厚度適中、骨骼相對靠近表皮的位置），以確保觸覺反饋清晰傳遞，同時避免長時間配戴造成壓迫、痠麻或不適。",
                en: "Positioned hardware and sensors to work with the body's tissue (e.g. spots with moderate muscle/soft-tissue thickness and bone closer to the surface), so haptic feedback comes through clearly without causing pressure, numbness, or discomfort during extended wear.",
              },
            },
          ],
        },
        {
          icon: "interaction",
          title: { zh: "功能與互動機制", en: "Function & Interaction Mechanics" },
          items: [
            {
              label: { zh: "硬體功能配置", en: "Hardware layout" },
              description: {
                zh: "明確標示互動元件，如震動模組、燈光、感測器的精確位置與作用範圍，如 GSR 膚電感測器分布於食指與中指。",
                en: "Marked the exact position and coverage of interactive components, vibration modules, lights, and sensors, such as placing the GSR skin-conductance sensors on the index and middle fingers.",
              },
            },
            {
              label: { zh: "回饋邏輯與情境對應", en: "Feedback logic & context mapping" },
              description: { zh: "思考功能如何對應使用者的行為或情緒，如震動的時序性如何呈現音樂的節奏快慢、強弱。", en: "Worked out how features map to user behavior or emotion, e.g. how vibration timing conveys a song's tempo and intensity." },
            },
            {
              label: { zh: "軟硬整合", en: "Hardware/software integration" },
              description: { zh: "將實體裝置的操作與介面的互動流程納入整體草圖的思考範疇。", en: "Folded the physical device's operation and the app's interaction flow into the same sketching process." },
            },
          ],
        },
      ],
    },
    prototyping: {
      eyebrow: { zh: "原型製作", en: "Prototyping" },
      items: [
        {
          src: "/images/projects/touchtune/prototype02.jpg",
          alt: { zh: "紙模型原型：手背包覆式設計，正面視角", en: "Paper prototype: back-of-hand wrap design, front view" },
          label: { zh: "正面", en: "Front" },
        },
        {
          src: "/images/projects/touchtune/prototype01.jpg",
          alt: { zh: "紙模型原型：手指分離式束帶設計，反面視角", en: "Paper prototype: finger-split strap design, back view" },
          label: { zh: "反面", en: "Back" },
        },
      ],
      description: {
        zh: "在進入 3D 建模前，透過原型製作來驗證產品的穿戴流程與內外分層結構；同時實驗正反面的固定機制設計，確保使用者在動態情境下能足夠穩固、不易脫落或移位。",
        en: "Before moving to 3D modeling, I built prototypes to validate the wearing process and the inner/outer layer structure, while testing front-and-back fastening designs to keep the device secure and in place during movement.",
      },
      wearingFlow: {
        title: { zh: "驗證後的最終穿戴流程", en: "The Validated Final Wearing Flow" },
        description: {
          zh: "經過原型反覆測試，收斂出三個穿戴步驟：戴上裝置、調整手腕束帶、固定手臂綁帶，確保裝置在動態情境下依然穩固貼合。",
          en: "After repeated prototype testing, the wearing process converged to three steps, put on the device, adjust the wrist strap, and secure the arm strap, keeping it snug even during movement.",
        },
        steps: [
          {
            image: "/images/projects/touchtune/wearing-step1.png",
            imageAlt: { zh: "穿戴 TouchTune 裝置於手部", en: "Putting the TouchTune device on the hand" },
            number: "01",
            label: { zh: "戴上裝置", en: "Put on the device" },
          },
          {
            image: "/images/projects/touchtune/wearing-step2.png",
            imageAlt: { zh: "調整手腕束帶", en: "Adjusting the wrist strap" },
            number: "02",
            label: { zh: "調整手腕束帶", en: "Adjust the wrist strap" },
          },
          {
            image: "/images/projects/touchtune/wearing-step3.png",
            imageAlt: { zh: "調整手臂上的綁帶", en: "Adjusting the arm strap" },
            number: "03",
            label: { zh: "調整手臂綁帶", en: "Secure the arm strap" },
          },
        ],
      },
    },
    interfaceDesign: {
      eyebrow: { zh: "介面設計", en: "Interface Design" },
      screens: [
        {
          image: "/images/projects/touchtune/screen-home-framed.png",
          imageAlt: { zh: "TouchTune App 首頁畫面", en: "TouchTune app home screen" },
          icon: "home",
          title: { zh: "首頁", en: "Home" },
          description: { zh: "呈現近期音樂活動歷程，提供情緒紀錄與裝置管理的快捷入口", en: "Shows recent music activity, with quick access to the emotion log and device management" },
          bare: true,
          imageWidth: 1052,
          imageHeight: 1972,
          mediaWidth: 260,
          mediaMdWidth: 300,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-journal-tile.png",
              imageAlt: { zh: "情緒與音樂日誌捷徑", en: "Emotion & music journal shortcut" },
              width: 376,
              height: 328,
            },
            {
              image: "/images/projects/touchtune/widget-personalization-tile.png",
              imageAlt: { zh: "個人化設定捷徑", en: "Personalization settings shortcut" },
              width: 376,
              height: 328,
            },
          ],
        },
        {
          image: "/images/projects/touchtune/screen-live-activity-dual.png",
          imageAlt: { zh: "TouchTune App 即時情緒回饋畫面", en: "TouchTune app real-time emotion feedback screen" },
          icon: "activity",
          title: { zh: "即時情緒回饋", en: "Real-Time Emotion Feedback" },
          description: {
            zh: "整合膚電反應（GSR）生理數據，即時反映使用者情緒狀態並記錄音樂節奏與頻率，支援跨裝置同步與多端分享",
            en: "Combines GSR skin-conductance data to reflect the user's emotional state in real time while logging the music's rhythm and frequency, with cross-device sync and multi-device sharing",
          },
          bare: true,
          imageWidth: 2255,
          imageHeight: 2238,
          textOnLeft: true,
          mediaWidth: 400,
          mediaMdWidth: 600,
        },
        {
          image: "/images/projects/touchtune/screen-journal-framed.png",
          imageAlt: { zh: "TouchTune App 情緒與音樂日誌畫面", en: "TouchTune app emotion & music journal screen" },
          icon: "journal",
          title: { zh: "情緒與音樂日誌", en: "Emotion & Music Journal" },
          description: { zh: "記錄每一次的情緒反應與音樂細節，並可回放當下的完整體驗。", en: "Logs every emotional response and music detail, and lets you replay the full moment." },
          bare: true,
          imageWidth: 1052,
          imageHeight: 1972,
          mediaWidth: 260,
          mediaMdWidth: 300,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-emotional-response.png",
              imageAlt: { zh: "情緒反應數據卡片", en: "Emotional response data card" },
              width: 738,
              height: 466,
            },
            {
              image: "/images/projects/touchtune/widget-music-frequency.png",
              imageAlt: { zh: "音樂節奏與頻率數據卡片", en: "Music rhythm & frequency data card" },
              width: 738,
              height: 416,
            },
          ],
        },
        {
          image: "/images/projects/touchtune/screen-personalization-angled.png",
          imageAlt: { zh: "TouchTune App 個人化震動設定畫面", en: "TouchTune app personalized vibration settings screen" },
          icon: "personalization",
          title: { zh: "個人化設定", en: "Personalization" },
          description: { zh: "依據個人偏好調整震動強度與分佈範圍，打造專屬的觸覺體驗。", en: "Adjusts vibration intensity and distribution to personal preference, creating a tailored haptic experience." },
          bare: true,
          imageWidth: 1734,
          imageHeight: 1176,
          looseWidgets: true,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-lighting-mode.png",
              imageAlt: { zh: "燈光模式設定卡片", en: "Lighting mode settings card" },
              width: 736,
              height: 434,
              loosePosition: "-right-4 -top-16 w-[230px] md:-right-10 md:-top-24 md:w-[290px]",
            },
            {
              image: "/images/projects/touchtune/widget-vibration.png",
              imageAlt: { zh: "震動分佈與強度設定卡片", en: "Vibration distribution & intensity settings card" },
              width: 736,
              height: 712,
              loosePosition: "-left-4 -bottom-16 w-[190px] md:-left-10 md:-bottom-24 md:w-[240px]",
            },
          ],
        },
      ],
      sceneShowcase: {
        appInHand: {
          image: "/images/projects/touchtune/scene-app-in-hand-v5.jpg",
          imageAlt: { zh: "手持裝置操作 TouchTune App", en: "Holding the device while using the TouchTune app" },
        },
        concertPhoto: {
          image: "/images/projects/touchtune/scene-concert-crowd-v2.jpg",
          imageAlt: { zh: "使用者在演唱會現場享受音樂", en: "A user enjoying music at a concert" },
        },
        caption: { zh: "透過 App 分享情緒與音樂，提升雙向互動與深刻連結", en: "Sharing emotion and music through the app deepens two-way interaction and connection" },
        hero: {
          image: "/images/projects/touchtune/scene-hero.jpg",
          imageAlt: { zh: "TouchTune 穿戴裝置於演唱會情境中特寫", en: "Close-up of the TouchTune wearable at a concert" },
          slogan: "Experience the tune through every touch.",
        },
      },
      deviceConnection: {
        title: { zh: "軟硬體串接流程", en: "Hardware/Software Connection Flow" },
        render: {
          image: "/images/projects/touchtune/hardware-render.png",
          imageAlt: { zh: "TouchTune 裝置配戴於手部正面渲染圖", en: "Front render of the TouchTune device worn on the hand" },
        },
      },
      screenGallery: {
        images: [
          {
            src: "/images/projects/touchtune/gallery/home.webp",
            alt: { zh: "首頁畫面", en: "Home screen" },
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/personalization.webp",
            alt: { zh: "個人化設定畫面", en: "Personalization settings screen" },
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/live-activity.webp",
            alt: { zh: "即時情緒回饋畫面", en: "Real-time emotion feedback screen" },
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/live-activity-alert.webp",
            alt: { zh: "即時情緒回饋・情緒高張狀態畫面", en: "Real-time emotion feedback, heightened-emotion state" },
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/journal.webp",
            alt: { zh: "情緒與音樂日誌畫面", en: "Emotion & music journal screen" },
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/choose-screen.webp",
            alt: { zh: "選擇分享畫面", en: "Choose-what-to-share screen" },
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/share-link-1.webp",
            alt: { zh: "分享連結設定畫面", en: "Share-link settings screen" },
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/share-link-2.webp",
            alt: { zh: "分享連結確認畫面", en: "Share-link confirmation screen" },
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/view-link.webp",
            alt: { zh: "檢視分享連結畫面", en: "View shared-link screen" },
            width: 533,
            height: 1000,
          },
        ],
      },
    },
    reflection: {
      eyebrow: { zh: "反思與展望", en: "Reflection & Outlook" },
      blocks: [
        {
          icon: "insight",
          title: { zh: "心得與收穫", en: "Insights & Takeaways" },
          subtitle: "Insights & Takeaways",
          paragraphs: [
            {
              zh: "本專案為碩士團隊合作項目。由於初期無法直接接觸聽障使用者，我獨立進行文獻研究整理聽障者的音樂感知方式與相關穿戴式產品案例，作為團隊設計方向的基礎，並進一步帶領團隊發想產品外觀與機構設計。",
              en: "This was a master's team project. Since we had no direct access to users who are deaf or hard of hearing early on, I independently ran a literature review covering how they perceive music and relevant wearable precedents, laying the groundwork for the team's direction, and went on to lead the team through ideating the product's form and mechanical design.",
            },
            {
              zh: "專案中最大的挑戰，是如何在有限的產品尺寸內整合震動模組，同時兼顧美感與佩戴舒適性，突破傳統輔具偏向醫療器材的既有印象。透過反覆討論與設計迭代，我深刻體會到，這不只是解決功能需求，更需要兼顧使用者的情感認同與日常配戴意願。",
              en: "The biggest challenge was fitting the vibration modules into a limited form factor while keeping it both good-looking and comfortable, breaking away from the clinical look typical of assistive devices. Through repeated discussion and iteration, I came to see that this wasn't just about meeting functional requirements; it also had to earn users' emotional buy-in and their willingness to wear it day to day.",
            },
          ],
        },
        {
          icon: "limitation",
          title: { zh: "限制與未來規劃", en: "Limitations & Future Plans" },
          subtitle: "Limitations",
          paragraphs: [
            {
              zh: "經過五個月的開發，目前成果仍以概念原型為主，實體驗證仍有進一步發展空間。未來希望完成可穿戴實體原型，驗證電子元件配置與震動回饋的設計合理性，並透過實際使用者測試，評估長時間佩戴的舒適性與互動體驗，持續優化產品設計。",
              en: "After five months, the current output is still mainly a concept prototype, with room to go further on physical validation. Going forward, I want to build a wearable physical prototype to validate the electronics layout and vibration-feedback design, then run real user testing to assess long-term wear comfort and interaction, continuing to refine the product.",
            },
          ],
        },
      ],
    },
  },
];

// Ordered as a working method — find the problem, solve it, ship it — rather
// than three interchangeable skills.
export const bringItems = [
  {
    icon: "search",
    title: { zh: "研究驅動的設計者", en: "Research-driven Designer" },
    description: {
      zh: "在設計之前，我習慣先釐清問題，透過使用者研究、數據分析與情境探索驗證假設，確保設計真正回應使用者需求。",
      en: "Before I design anything, I clarify the problem first, validating assumptions through user research, data analysis, and contextual inquiry so the design actually answers a real need.",
    },
  },
  {
    icon: "layout-dashboard",
    title: { zh: "複雜問題的轉譯者", en: "Complexity Translator" },
    description: {
      zh: "我擅長將複雜的科技與資訊，轉化為人容易理解、操作與感受的體驗。",
      en: "I turn complex technology and information into experiences people can understand, operate, and feel at ease with.",
    },
  },
  {
    icon: "bot",
    title: { zh: "能動手實作的設計夥伴", en: "Technical Collaborator" },
    description: {
      zh: "我持續探索 AI 技術在產品開發中的應用，並透過實際專案累積經驗，能從使用者需求與技術可行性雙向思考產品機會，將 AI 技術轉化為具體的產品價值。",
      en: "I keep exploring how AI fits into real product development, weighing user needs against technical feasibility to turn AI capability into concrete product value.",
    },
  },
];

export const aboutContent = {
  bio: [
    {
      zh: "具備 HCI 背景與 B2B AI、健康產品的跨領域設計經驗\n專長於複雜系統與 AI 產品的介面及使用者體驗設計",
      en: "HCI background with cross-disciplinary design experience in B2B AI and health products\nSpecializing in interface and UX design for complex systems and AI products",
    },
    {
      zh: "我擅長處理複雜且牽涉多方需求的問題。",
      en: "I'm good at untangling complex problems that involve multiple stakeholders' needs.",
    },
    {
      zh: "當需求尚未明確、牽涉多方角色，或技術與使用者需求彼此交織時，\n我習慣先停下來釐清真正要解決的問題。透過使用者研究，\n我能快速掌握人在特定情境下的真實行為與需求，並從使用情境與系統脈絡重新梳理，找出當下最需要解決的核心。",
      en: "When requirements are still unclear, span multiple roles, or technical and user needs are tangled together,\nI stop and clarify the real problem first. Through user research,\nI quickly grasp what people actually do and need in a given context, then re-map that against the usage scenario and system landscape to find the core problem worth solving right now.",
    },
    {
      zh: "我相信好的設計，不只是把介面做得簡單，而是在使用者需求、商業目標與技術限制之間找到合理的平衡。我擅長以系統思維拆解問題，結合 AI 與技術可行性，將複雜需求轉化為清晰、可用且具產品價值的體驗。",
      en: "I believe good design isn't just a simple interface. It's finding the right balance between user needs, business goals, and technical constraints. I use systems thinking to break down problems and combine that with AI and technical feasibility to turn complex requirements into experiences that are clear, usable, and genuinely valuable.",
    },
  ],
  education: [
    {
      dates: "SEP 2022 – JUL 2026",
      title: "M.Des in Innovation and Design",
      org: "National Taipei University of Technology (NTUT), Taipei · GPA 4.0/4.3",
    },
  ],
  photos: ["/images/hero/ida-award.jpg", "/images/hero/presentation.jpg", "/images/hero/vr-testing.jpg"],
};

export const beyondPixels = [
  { src: "/images/about/on-stage.jpg", alt: "Presenting at a project showcase", caption: "On Stage" },
  {
    src: "/images/about/team-project.jpg",
    alt: "Team standing with their wheelchair basketball VR project poster",
    caption: "Team Project",
  },
  { src: "/images/about/beach-portrait.jpg", alt: "By the sea at dusk", caption: "By the Sea" },
  {
    src: "/images/about/island-road-trip.jpg",
    alt: "Riding scooters in a line down an island road",
    caption: "Island Road Trip",
  },
  { src: "/images/about/wildflowers.jpg", alt: "A coastal hill and wildflowers", caption: "Wildflowers" },
  {
    src: "/images/about/mountain-hike.jpg",
    alt: "Hiking group at the Alishan visitor center",
    caption: "Mountain Hike",
  },
  { src: "/images/about/ancient-forest.jpg", alt: "Walking beneath a giant cedar", caption: "Ancient Forest" },
  { src: "/images/about/coffee-break.jpg", alt: "Coffee and dessert with design magazines", caption: "Coffee Break" },
  { src: "/images/about/golden-hour.jpg", alt: "Sunset over a fishing harbor", caption: "Golden Hour" },
  {
    src: "/images/about/trail-explorers.jpg",
    alt: "Backpacking through an old ruin on a trail",
    caption: "Trail Explorers",
  },
  { src: "/images/about/prototyping.jpg", alt: "An ALARM hardware prototype on a desk", caption: "Prototyping" },
  {
    src: "/images/about/award-night.jpg",
    alt: "Team accepting the OpenHCI Best Popularity award",
    caption: "Award Night",
  },
  {
    src: "/images/about/hackathon-win.png",
    alt: "Team receiving the Meta Taiwan AR Hackathon technical excellence award",
    caption: "Hackathon Win",
  },
  { src: "/images/about/team-photo.jpg", alt: "Large group photo at the OpenHCI closing ceremony", caption: "Team Photo" },
];

export const workExperience = [
  {
    dates: "JUN 2025 – AUG 2025",
    title: "UI/UX Intern, Early Design Campaign",
    company: "Advantech Co., Ltd.",
    initial: "A",
    color: "#045CC4",
    points: [
      {
        zh: "主導 3 場訪談（系統整合商與兩家 EHS 人員），釐清使用情境痛點與需求，協助 PM 定義專案範圍與使用者需求。",
        en: "Led 3 interviews (a systems integrator and two EHS teams) to clarify usage pain points and requirements, helping the PM define project scope and user needs.",
      },
      {
        zh: "主導跨部門工作坊（PM／RD／UIUX），運用 Storyboard 將抽象需求轉化為可驗證的使用情境，促進團隊需求共識，並推動 Prototype 製作與概念落地。",
        en: "Led cross-functional workshops (PM/RD/UIUX), using storyboards to turn abstract requirements into testable usage scenarios, building team alignment and driving prototyping through to a working concept.",
      },
      {
        zh: "設計直覺的 VLM（視覺語言模型）提示詞輸入方式，改善自然語言輸入造成的模型不穩定與輸出品質問題。",
        en: "Designed an intuitive prompt-input pattern for a VLM (vision-language model), fixing the instability and inconsistent output quality caused by free-form natural-language input.",
      },
    ],
  },
  {
    dates: "JUN 2024 – DEC 2024",
    title: "UI/UX Intern, Mobile Technology Department",
    company: "EZTRAVEL Co., Ltd.",
    initial: "E",
    color: "#21B30B",
    points: [
      {
        zh: "分析競品電商的會員點數系統資訊架構、營運模式與流程，找出高效益的設計模式並優化介面，協助產品成功上線。",
        en: "Analyzed competitors' e-commerce loyalty-points systems, information architecture, operating model, and flow, to identify high-impact design patterns, optimized the interface, and helped ship the product successfully.",
      },
      {
        zh: "使用 Python 清洗與篩選客服資料，資料量減少 74%、處理速度提升 3.8 倍，並設計自動回覆流程提升營運效率與準確度。",
        en: "Used Python to clean and filter customer-service data, cutting data volume by 74% and speeding up processing 3.8x, and designed an auto-reply flow that improved operational efficiency and accuracy.",
      },
    ],
  },
  {
    dates: "JUL 2022 – AUG 2022",
    title: "Software Development Intern, R&D Department",
    company: "H2U Corporation",
    initial: "H",
    color: "#8B5CF6",
    points: [
      {
        zh: "主導 13 場半結構式訪談與易用性測試，評估賽事列表與跑步功能，依任務完成時間與錯誤率排定介面優化優先序。",
        en: "Led 13 semi-structured interviews and usability tests evaluating the race-list and running features, prioritizing interface fixes by task completion time and error rate.",
      },
      {
        zh: "蒐集 118 份問卷，分析跑者運動行為與習慣，將 10 項功能需求收斂為 4 項核心功能，重新定義產品差異化方向。",
        en: "Collected 118 survey responses analyzing runners' behavior and habits, narrowing 10 candidate features down to 4 core ones and redefining the product's point of differentiation.",
      },
    ],
  },
];
