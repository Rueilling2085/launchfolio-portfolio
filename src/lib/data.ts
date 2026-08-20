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
  afterImage?: string;
  afterImageAlt?: Localized;
  afterImageWidth?: number;
  afterImageHeight?: number;
};

export type InterfaceOptimization = {
  eyebrow?: Localized;
  title?: Localized;
  items: InterfaceOptimizationCase[];
};

export type OptimizationResultImage = {
  src: string;
  alt?: Localized;
  width: number;
  height: number;
};

export type OptimizationResultPoint = {
  label: Localized;
  description: Localized;
};

export type OptimizationResultItem = {
  title: Localized;
  images: OptimizationResultImage[];
  points: OptimizationResultPoint[];
};

export type OptimizationResults = {
  eyebrow?: Localized;
  title?: Localized;
  items: OptimizationResultItem[];
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
  action: Localized;
  result: Localized;
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
  challenges: ProjectChallengeItem[];
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
  title: string;
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
  growthStat?: { from: string; to: string; label: Localized };
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

export type ScreenGallery = {
  images: { src: string; alt: Localized; width: number; height: number }[];
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
  optimizationResults?: OptimizationResults;
  problemSolution?: ProblemSolution;
  productFeatures?: ProductFeatures;
  designSketches?: DesignSketches;
  prototyping?: Prototyping;
  interfaceDesign?: InterfaceDesign;
  reflection?: Reflection;
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
      en: "An AI monitoring platform that uses computer vision and generative AI to close the surveillance gap between manual safety patrols, raising factory safety-management efficiency.\nBuilt for Advantech's smart-manufacturing use case: a cross-industry AI image-analysis system combining VLM visual detection with LLM conversation, using structured prompt design to lower the barrier to using AI and produce an intuitive, easy-to-operate monitoring interface. It helps EHS staff quickly set up detection conditions, spot on-site safety risks in real time, trace incident context, and auto-generate ISO 45001-compliant audit reports — turning reactive monitoring into proactive, intelligent safety management.",
    },
    cardTags: ["0→1 Product", "B2B AI SaaS"],
    cardHeadline: {
      zh: "建立 AI 工安監控平台，補足人工巡檢的監控空窗",
      en: "Built an AI safety-monitoring platform to close the gap between manual inspections",
    },
    cardDescription: {
      zh: "傳統工廠仰賴人工巡檢，難以及時掌握巡檢間的安全風險。我訪談職環安人員與系統整合商定義範圍，並設計「Prompt Template」互動機制——把模糊的自然語言輸入收斂成固定句型、可替換變數的操作介面，解決 VLM 判讀不穩定的問題，協助企業從被動巡檢轉向主動風險管理。",
      en: "Traditional factories rely on manual patrols and can't catch risks between rounds. I interviewed EHS staff and a systems integrator to define scope, then designed a \"Prompt Template\" interaction — turning ambiguous natural-language input into a fixed-sentence, swappable-variable interface that fixed the VLM's unstable readings, helping the business move from reactive patrols to proactive risk management.",
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
      challenges: [
        {
          title: {
            zh: "1. 從 0 到 1 的硬體驅動產品規劃 (0 to 1 Product Definition)",
            en: "1. 0-to-1 Product Definition, Driven by the Hardware",
          },
          challenge: {
            zh: "需在專案前期快速釐清市場需求與 AI 導入切入點。",
            en: "Early on, we needed to quickly pin down market demand and where AI could realistically enter the workflow.",
          },
          action: {
            zh: "主導訪談系統整合商（SI）與中小企業職環安人員（EHS），成功盤點實際業務痛點，確立 AI 輔助功能與關鍵導入節點。",
            en: "Led interviews with a systems integrator (SI) and SME EHS staff, mapping real operational pain points and pinning down which AI-assisted features and entry points actually mattered.",
          },
          result: {
            zh: "訪談 1 位 SI、2 位 EHS 人員，成功收斂出完整的產品流程與功能規劃，作為後續設計的基礎依據。",
            en: "Interviewed 1 SI and 2 EHS staff, converging on a complete product flow and feature plan that became the foundation for everything designed afterward.",
          },
        },
        {
          title: { zh: "2. 跨場域的可行性驗證 (PoC Selection)", en: "2. Cross-Domain Feasibility Validation (PoC Selection)" },
          challenge: {
            zh: "產品可應用場域廣泛，需在「技術可行性」與「商業需求」間取得平衡。",
            en: "The product could apply to a wide range of settings — we needed to balance technical feasibility against actual business demand.",
          },
          action: {
            zh: "透過訪談結果分析可行性/需求矩陣，收斂並提取出首次的 PoC 驗證場域。",
            en: "Analyzed interview findings through a feasibility/demand matrix to converge on the first setting to validate as a proof of concept.",
          },
          result: {
            zh: "從 10 個候選場域中收斂至 2 個，最終聚焦於工廠安全（工安）場域，作為首期 PoC 驗證重點。",
            en: "Narrowed 10 candidate settings down to 2, ultimately focusing the first PoC on factory safety (EHS).",
          },
        },
        {
          title: { zh: "3. 多領域知識的「模組化 UX 設計」(Modular UX Design)", en: "3. Modular UX Design for Cross-Domain Knowledge" },
          challenge: {
            zh: "需突破傳統 AI 限於單一場域訓練的瓶頸，並降低非工程背景使用者的操作門檻。",
            en: "Needed to break past AI's usual single-domain training limitation, and lower the barrier for non-technical users.",
          },
          action: {
            zh: "設計核心功能「情境式 VLM Template」，將醫療、零售與工安等跨領域知識轉化為結構化模組，打造易上手、直覺化的操作介面。",
            en: "Designed the core \"contextual VLM Template\" feature, turning cross-domain knowledge (healthcare, retail, EHS) into structured modules for an interface that's intuitive and easy to pick up.",
          },
          result: {
            zh: "Template 機制上線後，透過產品操作影片向 SI 展示，獲得正面認可，驗證了模組化設計降低操作門檻的方向可行。",
            en: "After launch, a product demo video shown to the SI got a positive response, validating that the modular approach did lower the barrier to use.",
          },
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
        en: "By mapping the real needs of the systems integrator and EHS staff, I built a priority/feasibility evaluation matrix\nand converged on two settings to prioritize as the first PoC.",
      },
    },
    priorityMatrix: {
      legend: [
        { tier: 1, label: "最終採用．優先 PoC 場域" },
        { tier: 2, label: "候選場域．本輪未列入優先" },
        { tier: 3, label: "已排除（硬體／技術限制）" },
      ],
      bubbles: [
        {
          label: "危險性機械\n行動警戒",
          top: 18,
          left: 69,
          size: 116,
          tier: 1,
        },
        {
          label: "配戴用具的確實度",
          top: 36,
          left: 87,
          size: 110,
          tier: 1,
        },
        {
          label: "管制區域進出偵測",
          top: 70,
          left: 64,
          size: 112,
          tier: 2,
        },
      ],
      dots: [
        { label: "無塵室服裝規範", top: 48, left: 47, tier: 2 },
        { label: "承包商安全監控", top: 55, left: 47, tier: 2 },
        { label: "管制區域控管", top: 61, left: 33, tier: 2 },
        { label: "人員作業區域", top: 67, left: 33, tier: 2 },
        { label: "無塵室門禁控管", top: 73, left: 33, tier: 2 },
      ],
      excluded: [
        { label: "設備周界警示", top: 63, left: 15, size: 108 },
        { label: "氣體洩漏偵測", top: 82, left: 10, size: 92 },
      ],
      axis: {
        top: "優先度高",
        bottom: "優先度低",
        right: "可行性高",
        yLabel: "客戶期望優先度",
        xLabel: "技術可行性",
      },
      sideCards: [
        {
          title: "危險性機械行動警戒",
          image: "/images/projects/vision-detect/scenario-forklift.png",
          description: "偵測堆高機是否有超速行駛的情況。",
        },
        {
          title: "配戴用具的確實度",
          image: "/images/projects/vision-detect/scenario-ppe.png",
          description: "偵測承攬商是否確實配戴，個人防護用具或相關設備。",
          imagePosition: "center 15%",
        },
      ],
    },
    processFlow: {
      steps: [
        { label: ["巡檢準備", "與路線規劃"], emphasis: false },
        { label: ["承包商聯繫", "與說明"], emphasis: false },
        { label: ["現場", "巡檢"], emphasis: true },
        { label: ["事件發生", "與處理"], emphasis: true },
        { label: ["重大事故", "通報與調查"], emphasis: true },
        { label: ["定期報告", "與稽核"], emphasis: false },
      ],
      painPoints: [
        {
          step: 3,
          title: "現場巡檢",
          description:
            "人工巡檢一天僅 2–3 次，留下大量監控空窗。",
          solution: {
            icon: "scan-eye",
            title: "24 小時主動式 VLM 影像監控",
            description: "補足人工巡檢時段之間的空窗。",
          },
        },
        {
          step: 4,
          title: "事件發生與處理",
          description:
            "傳統 CCTV 只被動錄影，缺乏即時異常偵測，安全空窗未能改善。",
          solution: {
            icon: "scan-eye",
            title: "透過 VLM 主動偵測違規與異常",
            description:
              "從「被動錄影」轉為「主動分析」，即時保存影像證據。",
          },
        },
        {
          step: 5,
          title: "重大事故通報與調查",
          description:
            "重大事故發生時，關鍵資訊（如事件時間軸、成因）無法即時取得。",
          solution: {
            icon: "bot-message-square",
            title: "LLM 驅動的事件重建與自動報告生成",
            description:
              "整合事件時間軸、偵測結果與影像證據，可用自然語言快速查詢，8 小時內生成符合 ISO 45001 標準的稽核報告。",
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
          description: { zh: "統一設定流程，一次驗證、全域套用。", en: "Unified the setup flow — verify once, apply everywhere." },
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
            en: "Tune one video source in a Test Zone, then apply it to 10 Operational Zones with one click — cutting manual work by 80%.",
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
            en: "Every added camera meant repeating the test — setup time multiplied with camera count.",
          },
          workflowAfter: {
            zh: "完成單一驗證後一鍵套用全場，節省 80% 重複操作時間。",
            en: "Verify once, then apply site-wide with one click — saving 80% of the repeated work.",
          },
        },
        {
          tag: { zh: "優化二", en: "Fix 2" },
          title: { zh: "設計 Prompt Template，提升模型判讀精準度", en: "Designed a Prompt Template to Improve Model Accuracy" },
          painPoint: {
            zh: "自然語言 Prompt，語意邊界模糊、任務意圖不明確，導致 VLM 輸出結果不穩定，這在工業安全場域中是不可接受的風險。",
            en: "Free-form natural-language prompts had ambiguous boundaries and unclear intent, making the VLM's output unstable — an unacceptable risk in an industrial safety setting.",
          },
          solution: {
            zh: "Prompt Template，採用固定句型結構，僅替換人員、物件、地點等變數，有效提升 VLM 判讀的準確度與穩定性。",
            en: "A Prompt Template with a fixed sentence structure where only variables (person, object, location) change — meaningfully improving the VLM's accuracy and stability.",
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
        title: "設計原則參考｜Shape of AI — Madlibs Pattern",
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
              en: "Don't hide the template structure — users understand how the prompt is built and trust the output more.",
            },
          },
          {
            title: { zh: "規劃多步驟串接", en: "Plan for Multi-Step Chaining" },
            description: {
              zh: "填空結果可帶入下一步，設計時決定哪些該鎖定、哪些可修改延伸。",
              en: "A filled-in result can carry into the next step — decide up front what should be locked and what stays editable.",
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
          en: "Best suited to clear tasks, predictable input, and repeated workflows. EHS detection fits exactly this: the detection sentence stays fixed — only the person, object, and setting change.",
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
          zh: "以 Gear Detection—Whether wearing specific gear 情境示意 Prompt 輸入介面",
          en: "Illustrated with the Gear Detection — Whether Wearing Specific Gear scenario's prompt interface",
        },
        items: [
          {
            tag: { zh: "原則一", en: "Principle 1" },
            refLabel: { zh: "參考 Salesforce Prompt Builder", en: "Reference: Salesforce Prompt Builder" },
            title: { zh: "先選類型：Dropdown 選擇偵測類型", en: "Choose Type First: a Dropdown for the Detection Type" },
            body: {
              zh: "先從 9 種 Prompt Template 中選擇偵測類型，底下變數會自適應更換。",
              en: "Choose the detection type from 9 prompt templates first — the variables below adapt automatically.",
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
      zh: "Sports Note 是台灣跑步領域的媒體與社群平台，整合賽事資訊、跑步紀錄、線上報名與運動內容等服務。針對 Alpha 版本缺乏實際使用者驗證的問題，我執行 13 位跑者的易用性測試與訪談，並蒐集 118 份問卷，分析不同跑者的需求與使用行為，重新收斂產品功能優先順序，將研究洞察轉化為介面優化與產品迭代方向。",
      en: "Sports Note is a Taiwanese running media and community platform bringing together race info, run tracking, online registration, and running content. To address the Alpha version's lack of real user validation, I ran usability tests and interviews with 13 runners and collected 118 survey responses, analyzing different runners' needs and behavior to re-prioritize the feature set and turn research insight into interface fixes and a product-iteration roadmap.",
    },
    cardTags: ["UX Research", "Design System"],
    cardHeadline: {
      zh: "以使用者研究驅動跑步 App 的產品優化",
      en: "Drove a running app's product optimization with user research",
    },
    cardDescription: {
      zh: "Sports Note 是台灣最大的跑步社群平台。本專案於產品 Alpha 階段，透過易用性測試、跑者訪談與 118 份問卷調查，找出資訊架構與操作流程的核心痛點，重新梳理畫面配置（例如將地圖與數據分頁顯示、把滑動停止改成點擊按鈕），協助團隊制定後續產品迭代方向。",
      en: "Sports Note is Taiwan's largest running community platform. During the product's Alpha stage, I used usability testing, runner interviews, and a 118-response survey to find the core pain points in information architecture and flow, then reworked the screen layout (e.g. splitting map and data into separate tabs, replacing swipe-to-stop with a tap button) to guide the team's next iteration.",
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
      { zh: "問卷設計與分析結果", en: "Survey Design & Analysis" },
      { zh: "Design System 維護", en: "Design System Maintenance" },
    ],
    overview: {
      niche: {
        zh: "B2C 運動科技（SportTech）・跑步社群平台・健康管理",
        en: "B2C SportTech · Running Community Platform · Health Management",
      },
      projectIntro:
        "Sports Note 是台灣最大的跑步社群平台，提供馬拉松賽事資訊、跑步紀錄、線上報名與運動內容等服務。本次專案正值 App Alpha 階段，團隊希望透過使用者研究重新檢視產品定位，了解不同跑者的需求，並找出最優先改善的體驗問題。在這個專案中，我主要負責規劃研究流程、執行易用性測試、訪談與問卷調查，將研究結果轉化為產品策略與介面優化方向，以建立後續產品迭代的重要依據。",
      challenges: [
        {
          title: {
            zh: "1. 透過易用性測試，找出產品優化方向",
            en: "1. Usability Testing to Find the Optimization Direction",
          },
          challenge: {
            zh: "Alpha 版本已完成主要功能，但缺乏使用者驗證，無法確認資訊架構與操作流程是否符合跑者需求。",
            en: "The Alpha build had its core features done but no user validation — we couldn't confirm the information architecture and flow actually matched what runners needed.",
          },
          action: {
            zh: "建立 Function Map 與 User Flow，規劃易用性測試，邀請 13 位不同程度跑者完成情境任務並進行訪談，分析任務完成率、操作時間與錯誤率。",
            en: "Built a function map and user flow, designed usability tests, and invited 13 runners of varying experience levels to complete scenario tasks and interviews, analyzing task completion rate, time on task, and error rate.",
          },
          result: {
            zh: "完成 13 場易用性測試與訪談；找出 4 項高優先度介面問題，作為後續優化依據。",
            en: "Completed 13 usability tests and interviews, surfacing 4 high-priority interface issues that guided the next round of fixes.",
          },
        },
        {
          title: {
            zh: "2. 透過使用者研究，探索具商業價值的功能",
            en: "2. User Research to Explore Commercially Valuable Features",
          },
          challenge: {
            zh: "開發團隊希望重新盤點產品定位，了解不同跑者真正需要的功能並找出潛在功能開發需求。",
            en: "The dev team wanted to re-examine the product's positioning, understand what different runners actually needed, and identify candidate features worth building.",
          },
          action: {
            zh: "設計並發放問卷，一週內收集 118 份有效樣本，結合 3 位專業跑者訪談，整合量化與質化研究結果。",
            en: "Designed and distributed a survey, collecting 118 valid responses within a week, combined with interviews with 3 experienced runners to merge quantitative and qualitative findings.",
          },
          result: {
            zh: "收集 118 份有效問卷；完成 3 位專家訪談；將 10+ 項需求收斂為 4 個核心功能方向；建立產品 Roadmap 的優先順序。",
            en: "Collected 118 valid survey responses, completed 3 expert interviews, narrowed 10+ requirements down to 4 core feature directions, and set the priority order for the product roadmap.",
          },
        },
        {
          title: { zh: "3. 將研究洞察轉化為產品設計", en: "3. Turning Research Insight into Product Design" },
          challenge: {
            zh: "如何將上述研究結果，轉化為真正的產品決策。",
            en: "The challenge was turning all of the above research into real product decisions.",
          },
          action: {
            zh: "根據研究洞察提出 7 項介面優化方案，完成 UI 設計、Design System 更新與工程交付。",
            en: "Proposed 7 interface improvements based on the research insight, delivering the UI design, a Design System update, and engineering handoff.",
          },
          result: {
            zh: "提出 7 項產品優化方案；維護並更新 Design System；設計方案獲團隊採納，作為後續版本開發依據。",
            en: "Delivered 7 product optimization proposals; maintained and updated the Design System; the team adopted the designs as the basis for the next release.",
          },
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
        en: "Quickly validate the existing Alpha build by testing the two core features — Race List and Run Tracking — to surface points where users got confused.",
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
          en: "Before the formal test, I walked through both core features myself and designed 14 scenario-based tasks that naturally worked the features I wanted to validate into each one.\nFor example, task #5 — \"search for a specific race\" — leads participants into the race list naturally, instead of asking them to operate a specific feature directly.\nThis kept things closer to real usage and avoided over-guiding participants, making the results more trustworthy.",
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
            time: "30s 以上",
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
            en: "8 of the 13 participants said they weren't familiar with the term \"Cloud Run,\"\nand felt \"Online Run\" would read more intuitively — a sign the UX writing needed further work.",
          },
          image: "/images/projects/h2u/finding-cloud-run-white.png",
          imageAlt: { zh: "雲端跑分頁截圖", en: "Screenshot of the Cloud Run tab" },
          imageWidth: 1200,
          imageHeight: 2100,
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
          imageWidth: 1200,
          imageHeight: 2100,
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
          imageWidth: 1200,
          imageHeight: 2100,
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
          imageWidth: 1200,
          imageHeight: 2100,
          markerPosition: { top: 69, left: 81 },
          calloutLabel: { zh: "鍵盤不會自動收起", en: "Keyboard doesn't auto-dismiss" },
          calloutPosition: { top: 69, left: 99 },
        },
      ],
      semiStructuredInterview: {
        title: { zh: "半結構式訪談結果", en: "Semi-Structured Interview Results" },
        intro: {
          zh: "從功能、介面呈現與技術三個面向分析產品優化項目，協助團隊快速辨識現有問題並判斷改善優先級；其中標示項目為經產品團隊討論後，確認可優先投入改善的業務範圍。",
          en: "Product-improvement items were analyzed across three dimensions — feature, interface, and technical — to help the team quickly identify existing issues and prioritize fixes; the tagged items are the ones the product team confirmed as priority areas after discussion.",
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
                  en: "Users had already started moving but the app's display lagged, then suddenly jumped in a burst — indicating an unresponsive sensor.",
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
    surveyResearch: {
      eyebrow: { zh: "問卷調查", en: "Survey Research" },
      goalTitle: { zh: "透過問卷調查釐清跑者需求與下載意願", en: "Using a Survey to Clarify Runner Needs and Download Intent" },
      goal: {
        zh: "為了解跑者的需求與使用情境，我規劃並發放問卷，共蒐集 118 份有效樣本\n從使用者輪廓、跑步習慣、功能需求與期待，作為後續產品定位與功能優化的參考。",
        en: "To understand runner needs and usage context, I designed and distributed a survey, collecting 118 valid responses\ncovering user profile, running habits, feature needs, and expectations — used to inform product positioning and feature priorities going forward.",
      },
      stats: [
        { value: "118", unit: { zh: "份", en: "responses" }, label: { zh: "有效問卷", en: "Valid responses" } },
        { value: "1", unit: { zh: "週", en: "week" }, label: { zh: "發放時長", en: "Distribution window" } },
      ],
      motivation: {
        problemLabel: "Problem",
        problemText: {
          zh: "產品上線後下載量不如預期，團隊缺乏對使用者需求與下載考量的了解。",
          en: "After launch, downloads fell short of expectations, and the team lacked insight into user needs and what drove the download decision.",
        },
        goalLabel: "Research Goal",
        goalText: {
          zh: "釐清跑者需求與使用情境，找出影響下載與使用意願的關鍵因素。",
          en: "Clarify runner needs and usage context, and identify the key factors driving download and usage intent.",
        },
        groupsTitle: { zh: "問卷構面", en: "Survey Dimensions" },
        groups: [
          {
            label: { zh: "使用者輪廓", en: "User Profile" },
            icon: "profile",
            children: [
              { zh: "基本資料", en: "Basic information" },
              { zh: "跑步行為與習慣調查", en: "Running behavior and habits" },
            ],
          },
          {
            label: { zh: "功能需求", en: "Feature Needs" },
            icon: "needs",
            children: [
              { zh: "產品功能喜好", en: "Feature preferences" },
              { zh: "附加功能需求", en: "Additional feature requests" },
            ],
          },
        ],
      },
      structure: [
        {
          label: { zh: "問卷目標", en: "Survey Goals" },
          items: [
            { zh: "使用者跑步行為與習慣", en: "User running behavior and habits" },
            { zh: "跑步工具使用偏好與功能需求", en: "Running tool preferences and feature needs" },
            { zh: "競品分析與使用經驗評估", en: "Competitor analysis and experience evaluation" },
          ],
        },
        {
          label: { zh: "問卷架構", en: "Survey Structure" },
          items: [
            { zh: "跑者", en: "Runner" },
            { zh: "產品", en: "Product" },
            { zh: "競品", en: "Competitors" },
          ],
        },
        {
          label: { zh: "問卷分析", en: "Survey Analysis" },
          items: [
            { zh: "基本資料／跑步行為與習慣調查", en: "Basic info / running behavior and habits" },
            { zh: "產品功能喜好／附加功能需求", en: "Product feature preferences / additional feature needs" },
            { zh: "是否聽過或使用過相關競品／競品使用體驗", en: "Awareness/usage of competitors / competitor experience" },
          ],
        },
      ],
      results: {
        title: { zh: "問卷結果", en: "Survey Results" },
        tabs: [
          { key: "habit", label: { zh: "跑步習慣", en: "Running Habits" } },
          { key: "feature", label: { zh: "功能偏好", en: "Feature Preferences" } },
        ],
        habit: {
          funnel: {
            title: { zh: "樣本輪廓：跑步習慣與 App 使用漏斗", en: "Sample Profile: Running Habit & App Usage Funnel" },
            total: 118,
            split: [
              { label: { zh: "有跑步習慣", en: "Has a running habit" }, value: 52, percent: "44%" },
              { label: { zh: "無跑步習慣", en: "No running habit" }, value: 66, percent: "56%" },
            ],
            result: { label: { zh: "有跑步習慣且使用App", en: "Has a running habit and uses the app" }, value: 34, percent: "65%" },
          },
          crossAnalysis: {
            title: { zh: "年齡與跑步習慣的關聯", en: "Age vs. Running Habit" },
            subtitle: { zh: "交叉分析：年齡層 × 有/無跑步習慣者", en: "Cross-analysis: age group × running habit" },
            legendLabel: { zh: "是否有跑步的習慣", en: "Has a running habit" },
            bars: [
              { age: "18~29", withHabit: 79, withoutHabit: 46 },
              { age: "30~39", withHabit: 14, withoutHabit: 34 },
              { age: "40~49", withHabit: 2, withoutHabit: 21 },
              { age: "50+", withHabit: 0, withoutHabit: 4 },
            ],
          },
          sampleInsight: {
            zh: "在 118 位受訪者中，52 人（44%）有跑步習慣，其中 34 人（65%）同時使用 App 追蹤跑步。跑步習慣主要集中在 18~29 歲族群，並隨年齡增長明顯下降。",
            en: "Of the 118 respondents, 52 (44%) had a running habit, and 34 of those (65%) also used an app to track their runs. The habit was concentrated in the 18–29 age group and dropped off noticeably with age.",
          },
          motivation: {
            withHabitLabel: { zh: "「有跑步習慣者」的跑步目的", en: "Why runners with a habit run" },
            withHabitItems: [
              { value: "81.9%", label: { zh: "保持身體健康", en: "Staying healthy" } },
              { value: "52.4%", label: { zh: "自主訓練", en: "Self-directed training" } },
              { value: "48.0%", label: { zh: "提升運動表現、減重", en: "Improving performance, losing weight" } },
            ],
            withoutHabitLabel: { zh: "「無跑步習慣者」不跑步的原因", en: "Why non-runners don't run" },
            withoutHabitItems: [
              { value: "54.3%", label: { zh: "本身沒有跑步習慣", en: "Never had the habit to begin with" } },
              { value: "48.9%", label: { zh: "沒有意志力堅持下去", en: "Can't stick with it" } },
              { value: "31.9%", label: { zh: "沒有跑步同伴、時間", en: "No running partner or time" } },
            ],
          },
          insight: [
            {
              zh: "有跑步習慣者主要受健康動機驅動（81.9%）；相較之下，非跑步習慣者多因缺乏啟動動機而未開始，其中 48.9% 更表示難以持續。因此，App 應聚焦於降低開始門檻，協助使用者跨出第一步並建立運動習慣。",
              en: "Runners with a habit are mainly driven by health (81.9%); non-runners, by contrast, mostly never start due to a lack of motivation, and 48.9% say they struggle to keep it up. The app should therefore focus on lowering the barrier to entry — helping users take the first step and build the habit.",
            },
          ],
        },
        feature: {
          introTitle: { zh: "以使用者需求收斂產品核心功能", en: "Converging on Core Features from User Needs" },
          introText: {
            zh: "透過跑者功能重要性評估，將 11 項候選功能收斂為 4 項核心需求\n包含訓練數據分析、配速工具、公里／英哩分段與生理數據分析，作為後續功能優先級與產品規劃的依據。",
            en: "By having runners rate feature importance, we narrowed 11 candidate features down to 4 core needs —\ntraining data analysis, pace tools, km/mile splits, and physiological data analysis — to guide feature priority and product planning going forward.",
          },
          priorityChart: {
            title: { zh: "跑者 vs 非跑者：功能重要性分組對照", en: "Runners vs. Non-Runners: Feature Importance Comparison" },
            subtitle: { zh: "平均重要性評分（0–5分）", en: "Average importance rating (0–5)" },
            withHabitLabel: { zh: "有跑步習慣（N=50）", en: "Has a running habit (N=50)" },
            withoutHabitLabel: { zh: "沒有跑步習慣（N=163）", en: "No running habit (N=163)" },
            items: [
              { label: { zh: "訓練數據分析", en: "Training data analysis" }, withHabit: 4.16, withoutHabit: 4.14 },
              { label: { zh: "生理數據分析", en: "Physiological data analysis" }, withHabit: 3.72, withoutHabit: 4.01 },
              { label: { zh: "成就牆", en: "Achievement wall" }, withHabit: 3.72, withoutHabit: 3.75 },
              { label: { zh: "卡路里計算", en: "Calorie tracking" }, withHabit: 3.58, withoutHabit: 3.74 },
              { label: { zh: "配速工具", en: "Pace tools" }, withHabit: 3.78, withoutHabit: 3.79 },
              { label: { zh: "公里/英哩分段", en: "Km/mile splits" }, withHabit: 3.74, withoutHabit: 3.75 },
              { label: { zh: "語音回饋", en: "Voice feedback" }, withHabit: 3.54, withoutHabit: 3.33 },
              { label: { zh: "里程排行", en: "Mileage leaderboard" }, withHabit: 3.22, withoutHabit: 3.34 },
              { label: { zh: "天氣預測", en: "Weather forecast" }, withHabit: 2.42, withoutHabit: 2.75 },
              { label: { zh: "社群平台", en: "Community platform" }, withHabit: 1.64, withoutHabit: 2.29 },
              { label: { zh: "動態文章", en: "Feed / articles" }, withHabit: 1.50, withoutHabit: 2.04 },
            ],
            insight: {
              commonNeeds: {
                title: { zh: "共同需求", en: "Common Needs" },
                points: [
                  { zh: "不論是否具有跑步習慣，「訓練數據分析」與「配速工具」皆為最重要的功能。", en: "Regardless of running habit, \"training data analysis\" and \"pace tools\" were rated the most important features." },
                  { zh: "顯示使用者普遍重視能協助掌握跑步表現、提升訓練效率的核心功能。", en: "This shows users broadly value core features that help them track performance and train more efficiently." },
                ],
              },
              groupDifferences: {
                title: { zh: "族群差異", en: "Group Differences" },
                withHabitLabel: { zh: "有跑步習慣", en: "Has a running habit" },
                withHabitItems: [
                  { zh: "重視即時語音回饋", en: "Values real-time voice feedback" },
                  { zh: "希望提升訓練效率", en: "Wants to improve training efficiency" },
                  { zh: "著重跑步過程中的輔助", en: "Prioritizes in-run assistance" },
                ],
                withoutHabitLabel: { zh: "無跑步習慣", en: "No running habit" },
                withoutHabitItems: [
                  { zh: "重視生理數據分析", en: "Values physiological data analysis" },
                  { zh: "重視天氣預測", en: "Values weather forecasts" },
                  { zh: "重視社群互動與外部激勵", en: "Values social interaction and outside motivation" },
                ],
              },
              summary: {
                zh: "無跑步習慣者需要的是建立跑步習慣與持續動機；有跑步習慣者則更重視提升訓練品質與效率。",
                en: "Non-runners need help building the habit and staying motivated; runners with the habit care more about improving training quality and efficiency.",
              },
            },
          },
          goodAppConditions: {
            title: { zh: "好的跑步 App 應具備哪些條件？", en: "What Makes a Good Running App?" },
            subtitle: { zh: "N=98，可複選", en: "N=98, multiple choice" },
            items: [
              { label: { zh: "功能定位\n清楚", en: "Clear feature\npositioning" }, value: 76 },
              { label: { zh: "畫面簡約\n乾淨", en: "Clean, simple\ninterface" }, value: 51 },
              { label: { zh: "輔助工具\n多元", en: "Diverse\nassist tools" }, value: 19 },
              { label: { zh: "地圖模式", en: "Map mode" }, value: 16 },
              { label: { zh: "品牌精神", en: "Brand identity" }, value: 2 },
            ],
          },
          trackedMetrics: {
            title: { zh: "跑步時主要關注哪些運動數據？", en: "Which Metrics Matter Most While Running?" },
            subtitle: { zh: "N=249", en: "N=249" },
            highlightCount: 4,
            items: [
              { label: { zh: "平均速度/即時配速", en: "Average speed / real-time pace" }, value: 67 },
              { label: { zh: "總距離", en: "Total distance" }, value: 59 },
              { label: { zh: "時長", en: "Duration" }, value: 57 },
              { label: { zh: "心率", en: "Heart rate" }, value: 31 },
              { label: { zh: "卡路里", en: "Calories" }, value: 18 },
              { label: { zh: "溫度", en: "Temperature" }, value: 11 },
              { label: { zh: "坡度", en: "Elevation" }, value: 2 },
              { label: { zh: "濕度", en: "Humidity" }, value: 2 },
              { label: { zh: "步頻", en: "Cadence" }, value: 1 },
              { label: { zh: "訓練效果", en: "Training effect" }, value: 1 },
            ],
          },
          insight: [
            {
              zh: "結果顯示，受試者認為跑步 App 最重要的條件為功能定位清楚完整（76 人）及畫面簡潔乾淨（51 人），顯示使用者優先重視功能的實用性與操作效率，而非品牌形象或附加功能。",
              en: "Respondents ranked clear, complete feature positioning (76) and a clean, simple interface (51) as the most important qualities in a running app — showing users prioritize practicality and operational efficiency over branding or extra features.",
            },
            {
              zh: "在跑步過程中，受試者最關注平均速度／即時配速、總距離及時長，反映使用者更重視能直接掌握跑步狀態的核心資訊，其餘心率、卡路里及環境資訊的重要性相對較低。",
              en: "While running, respondents cared most about average speed/real-time pace, total distance, and duration — reflecting a priority on core information about their current run over heart rate, calories, or environmental data.",
            },
          ],
        },
      },
      findings: [],
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
      photo: "/images/projects/h2u/interview-photo.jpg",
      quotes: [
        { zh: "我希望每達到一公里的里程碑時，提供視覺或觸覺回饋。", en: "I'd like visual or haptic feedback every time I hit a one-kilometer milestone." },
        { zh: "在跑步過程中，可以強調「距離」與「總時間」指標，「步數」在視覺上可以降低比重，也許可以改成「爬升」。", en: "While running, distance and total time should be emphasized more; step count could carry less visual weight — maybe swap it for elevation gain." },
        { zh: "希望能有社群功能，可以跟其他人分享跑步路線和軌跡。", en: "I'd like a community feature so I can share my running routes and tracks with others." },
        { zh: "App 內的商店對跑者來說缺乏實用價值。", en: "The in-app shop doesn't offer much practical value for runners." },
        { zh: "地圖功能在實際跑步過程中的重要性比較低。", en: "The map feature matters less during an actual run." },
        { zh: "平均配速（距離 / 時間）通常是在跑完後才查看，建議在跑步進行中顯示「即時配速」，提供比較精準的回饋。", en: "I usually only check average pace (distance / time) after finishing — I'd suggest showing real-time pace during the run for more accurate feedback." },
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
          beforeImageWidth: 1400,
          beforeImageHeight: 2450,
          afterImage: "/images/projects/h2u/optimization-1-after.png",
          afterImageAlt: { zh: "優化後：新增數據／地圖 Tab 切換，核心數據放大呈現", en: "After: added a Data/Map tab switcher with core data shown at a larger size" },
          afterImageWidth: 1400,
          afterImageHeight: 1301,
        },
        {
          number: "2",
          title: { zh: "重新設計停止跑步操作，減少過程中的干擾", en: "Redesigning the Stop-Run Action to Reduce Mid-Run Friction" },
          sideBySide: true,
          painPoints: [
            { zh: "根據專業跑者的訪談回饋，使用「滑動手勢」停止跑步會增加操作負擔，需分心操作手機，影響跑步節奏與效率。", en: "Per experienced-runner interviews, the swipe gesture for stopping a run adds operational burden, forcing users to divert attention to the phone and disrupting their pace and efficiency." },
          ],
          solutions: [
            { zh: "改以「點擊」停止跑步，降低操作負擔，讓跑者能更快速完成操作。", en: "Switched to a tap to stop the run, lowering the operational burden so runners can complete the action faster." },
          ],
          beforeImage: "/images/projects/h2u/optimization-2-before.png",
          beforeImageAlt: { zh: "優化前：以滑動手勢停止跑步紀錄", en: "Before: stopping a run recording with a swipe gesture" },
          beforeImageWidth: 1400,
          beforeImageHeight: 2450,
          afterImage: "/images/projects/h2u/optimization-2-after.png",
          afterImageAlt: { zh: "優化後：改以點擊按鈕停止跑步紀錄", en: "After: stopping a run recording by tapping a button" },
          afterImageWidth: 1400,
          afterImageHeight: 2450,
        },
      ],
    },
    optimizationResults: {
      eyebrow: { zh: "介面優化結果", en: "Optimization Results" },
      items: [
        {
          title: { zh: "跑步模式（Run Mode）", en: "Run Mode" },
          images: [
            {
              src: "/images/projects/h2u/result-run-mode-standard.png",
              alt: { zh: "標準模式，顯示跑步距離、時長與配速", en: "Standard mode showing distance, duration, and pace" },
              width: 1200,
              height: 2100,
            },
            {
              src: "/images/projects/h2u/result-run-mode-map.png",
              alt: { zh: "地圖模式，顯示跑步路線與即時位置", en: "Map mode showing the running route and live position" },
              width: 1200,
              height: 2100,
            },
            {
              src: "/images/projects/h2u/result-run-mode-alert.png",
              alt: { zh: "達成目標時彈出提醒視窗", en: "An alert dialog when the goal is reached" },
              width: 1200,
              height: 2100,
            },
          ],
          points: [
            {
              label: { zh: "標準模式／地圖模式切換", en: "Standard / Map mode switch" },
              description: {
                zh: "提供標準模式與地圖模式快速切換，讓跑者可依據不同跑步情境與需求，彈性選擇適合的資訊視圖。",
                en: "Lets runners switch quickly between standard and map modes, choosing the view that fits their situation and needs.",
              },
            },
            {
              label: { zh: "距離提醒", en: "Distance alerts" },
              description: {
                zh: "透過震動與語音提醒即時回饋跑步里程，協助跑者掌握目前進度，並確認是否達成預期的訓練目標。",
                en: "Vibration and voice cues give real-time feedback on distance covered, helping runners track progress and confirm whether they've hit their training goal.",
              },
            },
            {
              label: { zh: "資訊層級優化", en: "Information hierarchy" },
              description: {
                zh: "重新梳理資訊架構與視覺層級，突顯關鍵數據與核心功能，降低資訊干擾，讓跑者在運動過程中能快速掌握重要資訊並完成操作。",
                en: "Reworked the information architecture and visual hierarchy to surface key data and core functions, cutting noise so runners can grasp what matters and act on it quickly mid-run.",
              },
            },
          ],
        },
      ],
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
      zh: "讓觀眾看見文物「當年被使用」的樣子",
      en: "Letting visitors see an artifact the way it was actually used",
    },
    cardDescription: {
      zh: "我設計並開發多模態 RAG 導覽系統，結合知識檢索與生成式影像，讓觀眾提問後同時獲得可信的解說與文物情境重現圖，經 30 人對照實驗證實知識建構與參與度皆顯著提升。",
      en: "I designed and built a multimodal RAG guide system that pairs knowledge retrieval with generative imagery, so a visitor's question returns both a trustworthy explanation and a generated scene showing the artifact in use — validated in a 30-person controlled study to significantly improve knowledge-building and engagement.",
    },
    color: "#2A1D12",
    cardAccent: "#C4956A",
    cardImage: "/images/projects/museum-ai-guide/card-hand-photo.jpg",
    cardImageWidth: 2000,
    cardImageHeight: 1500,
    cardImageFit: "contain",
    cardImageBackdrop: "#7A7871",
    cardImageScale: 1.55,
    presentationEmbedUrl: "https://www.canva.com/design/DAHSO25n1g8/xUAAeCPKUccPVuHoQqeRbg/view?embed",
    description: {
      zh: "以多模態 RAG 技術打造的博物館 AI 導覽系統，結合知識檢索與生成式影像，將靜態的文物說明牌轉化為可對話、可視覺化的知識探索體驗。研究成果獲 IEEE ICASI 2026 口頭發表。",
      en: "A museum AI guide system built on multimodal RAG technology, pairing knowledge retrieval with generative imagery to turn a static artifact placard into a conversational, visual knowledge-exploration experience. The research was presented orally at IEEE ICASI 2026.",
    },
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
      en: "Built a wearable that lets d/Deaf and hard-of-hearing people feel music",
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
      en: "TouchTune is a wearable device designed for the d/Deaf and hard-of-hearing community. It translates sound into multi-frequency vibration, delivering a multisensory music experience.",
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
      challenges: [
        {
          title: { zh: "1. 用戶研究與需求洞察", en: "1. User Research & Needs Discovery" },
          challenge: {
            zh: "專案初期缺乏與目標使用者（聽障人士）直接接觸的管道，難以確立真實需求。",
            en: "Early on there was no direct channel to the target users (the d/Deaf and hard-of-hearing community), making it hard to pin down real needs.",
          },
          action: {
            zh: "負責文獻研究，整理大量二手資料，深入分析聽障者的「感官代償」機制與體驗缺口。",
            en: "Ran a literature review across a large body of secondary sources, digging into the \"sensory substitution\" mechanism and where the experience gaps were.",
          },
          result: {
            zh: "收斂出以「振動感官」為核心的產品定位，為後續設計方向提供明確依據。",
            en: "Converged on a product position centered on vibration-based sensing, giving every design decision afterward a clear anchor.",
          },
        },
        {
          title: { zh: "2. 軟硬體整合與共融設計", en: "2. Hardware/Software Integration & Inclusive Design" },
          challenge: {
            zh: "需在軟硬體整合的限制下佈局震動元件，確保用戶能清楚感知音樂；同時外觀須打破傳統醫療輔具的冰冷刻板印象，實現共融設計，讓非聽障者也樂於配戴。",
            en: "Had to lay out the vibration modules within hardware/software constraints while keeping the music clearly perceptible — and the form had to break away from the cold, clinical look of typical assistive devices, so even non-Deaf people would want to wear it.",
          },
          action: {
            zh: "與團隊歷經 5 次原型迭代，同步優化外觀造型與震動元件的機構配置，兼顧功能與美感。",
            en: "Went through 5 prototype iterations with the team, refining the form and the vibration-module layout together, balancing function and aesthetics.",
          },
          result: {
            zh: "最終設計成功兼顧功能性與親和力，榮獲 IDA Design Awards、unDesign Award 兩項國際設計獎肯定。",
            en: "The final design landed both functionality and approachability, earning recognition from the IDA Design Awards and the unDesign Award.",
          },
        },
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
      growthStat: { from: "15億", to: "25億", label: { zh: "全球聽力損失人口（預估 2050 年）", en: "People with hearing loss worldwide (projected, 2050)" } },
      stats: [
        { value: "20%", label: { zh: "約佔全球總人口", en: "Of the global population" } },
        { value: "+67%", label: { zh: "較現今成長", en: "Growth from today" } },
      ],
      subtitle: { zh: "聽障人士如何「聽」見聲音？", en: "How Do d/Deaf People \"Hear\" Sound?" },
      body: {
        zh: "得益於大腦的可塑性，當某種感官功能喪失時，大腦會透過利用其他感官來進行代償。聽障人士便是透過偵測「振動」，利用觸覺來感受聲音。因此，對他們而言，音樂是一種全身性的體驗，許多人會將手放在樂器或音響喇叭上，以感知音樂的節奏、低音與拍子。",
        en: "Thanks to the brain's plasticity, when one sense is lost, the brain compensates by leaning on the others. d/Deaf people sense sound by detecting vibration through touch. For them, music becomes a full-body experience — many rest a hand on an instrument or speaker to feel its rhythm, bass, and beat.",
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
        en: "We turn sound into multi-frequency vibration — not only helping d/Deaf users feel a song's rhythm and frequency, but also raising their participation in social settings, with a richer sensory experience and emotional connection.",
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
                en: "Settled the product's visual vocabulary — flowing curves, minimal geometry — to keep the look aligned with the design positioning.",
              },
            },
            {
              label: { zh: "分件與層次", en: "Parting lines & layering" },
              description: {
                zh: "思考產品的結構層次，內層與外層的分離，並規劃內部組件的走線與收納空間。",
                en: "Worked out the structural layers — separating inner and outer shells — and planned routing and storage space for internal components.",
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
              description: { zh: "明確定義裝置在身體上的分佈區域，如手腕至手肘下方的區段，符合人體尺寸工學。", en: "Defined exactly where the device sits on the body — from the wrist down to below the elbow — matched to ergonomic sizing." },
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
                en: "Marked the exact position and coverage of interactive components — vibration modules, lights, sensors — such as placing the GSR skin-conductance sensors on the index and middle fingers.",
              },
            },
            {
              label: { zh: "回饋邏輯與情境對應", en: "Feedback logic & context mapping" },
              description: { zh: "思考功能如何對應使用者的行為或情緒，如震動的時序性如何呈現音樂的節奏快慢、強弱。", en: "Worked out how features map to user behavior or emotion — e.g. how vibration timing conveys a song's tempo and intensity." },
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
          en: "After repeated prototype testing, the wearing process converged to three steps — put on the device, adjust the wrist strap, secure the arm strap — keeping it snug even during movement.",
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
            alt: { zh: "即時情緒回饋・情緒高張狀態畫面", en: "Real-time emotion feedback — heightened-emotion state" },
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
              en: "This was a master's team project. Since we had no direct access to d/Deaf users early on, I independently ran a literature review covering how they perceive music and relevant wearable precedents, laying the groundwork for the team's direction, and went on to lead the team through ideating the product's form and mechanical design.",
            },
            {
              zh: "專案中最大的挑戰，是如何在有限的產品尺寸內整合震動模組，同時兼顧美感與佩戴舒適性，突破傳統輔具偏向醫療器材的既有印象。透過反覆討論與設計迭代，我深刻體會到，這不只是解決功能需求，更需要兼顧使用者的情感認同與日常配戴意願。",
              en: "The biggest challenge was fitting the vibration modules into a limited form factor while keeping it both good-looking and comfortable — breaking away from the clinical look typical of assistive devices. Through repeated discussion and iteration, I came to see that this wasn't just about meeting functional requirements; it also had to earn users' emotional buy-in and their willingness to wear it day to day.",
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
    title: "Research-driven Designer",
    titleZh: "研究驅動的設計者",
    description: {
      zh: "在設計之前，我習慣先釐清問題，透過使用者研究、數據分析與情境探索驗證假設，確保設計真正回應使用者需求。",
      en: "Before I design anything, I clarify the problem first — validating assumptions through user research, data analysis, and contextual inquiry so the design actually answers a real need.",
    },
  },
  {
    icon: "layout-dashboard",
    title: "Complexity Translator",
    titleZh: "複雜問題的轉譯者",
    description: {
      zh: "我擅長將複雜的科技與資訊，轉化為人容易理解、操作與感受的體驗。",
      en: "I turn complex technology and information into experiences people can understand, operate, and feel at ease with.",
    },
  },
  {
    icon: "bot",
    title: "Technical Collaborator",
    titleZh: "能動手實作的設計夥伴",
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
      en: "I believe good design isn't just a simple interface — it's finding the right balance between user needs, business goals, and technical constraints. I use systems thinking to break down problems and combine that with AI and technical feasibility to turn complex requirements into experiences that are clear, usable, and genuinely valuable.",
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
        en: "Analyzed competitors' e-commerce loyalty-points systems — information architecture, operating model, and flow — to identify high-impact design patterns, optimized the interface, and helped ship the product successfully.",
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
