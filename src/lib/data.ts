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
  title: string;
  sideBySide?: boolean;
  painPoints?: string[];
  hmw?: string[];
  solutions?: string[];
  beforeImage?: string;
  beforeImageAlt?: string;
  beforeImageWidth?: number;
  beforeImageHeight?: number;
  beforeVideo?: string;
  afterImage?: string;
  afterImageAlt?: string;
  afterImageWidth?: number;
  afterImageHeight?: number;
};

export type InterfaceOptimization = {
  eyebrow?: string;
  title?: string;
  items: InterfaceOptimizationCase[];
};

export type OptimizationResultImage = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

export type OptimizationResultPoint = {
  label: string;
  description: string;
};

export type OptimizationResultItem = {
  title: string;
  images: OptimizationResultImage[];
  points: OptimizationResultPoint[];
};

export type OptimizationResults = {
  eyebrow?: string;
  title?: string;
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
  label: string;
  values: [string, string, string];
};

export type CompetitorPatternRef = {
  tag: string;
  title: string;
  intro: string;
  sourceLabel: string;
  sourceUrl: string;
  image: string;
  lead: string;
  principles: { title: string; description: string }[];
  conclusion: string;
};

export type CompetitorInterfaceShot = {
  tool: string;
  description: string;
  source: string;
  image: string;
  annotation?: string;
  extraImages?: string[];
};

export type CompetitorAnalysis = {
  eyebrow: string;
  title: string;
  description: string;
  tools: [CompetitorTool, CompetitorTool, CompetitorTool];
  criteria: CompetitorCriterion[];
  patternRef: CompetitorPatternRef;
  interfaceIntro: string;
  interfaceShots: CompetitorInterfaceShot[];
  outcome: {
    title: string;
    description: string;
    items: { tag: string; refLabel: string; title: string; body: string; image: string }[];
  };
};

export type ResearchBackground = {
  eyebrow?: string;
  source?: string;
  growthStat?: { from: string; to: string; label: string };
  stats: { value: string; label: string }[];
  subtitle: string;
  body: string;
  image?: string;
  imageAlt?: string;
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
  title: string;
  items: string[];
};

export type UsabilityFinding = {
  title: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  markerPosition?: { top: number; left: number };
  calloutLabel?: string;
  calloutPosition?: { top: number; left: number };
};

export type TaskScenarioFeature = {
  icon: "calendar" | "activity";
  label: string;
};

export type TaskScenarioRow = {
  feature: "calendar" | "activity";
  scenario: string;
  goal: string;
  response: string;
  time: string;
  hasError: boolean | null;
  efficiency: 1 | 2 | 3 | null;
  note: string;
};

export type TaskScenarioTable = {
  title?: string;
  intro: string;
  features: TaskScenarioFeature[];
  rows: TaskScenarioRow[];
  legend: { efficiency: 1 | 2 | 3; label: string }[];
};

export type InterviewOptimizationCategory = "feature" | "interface" | "tech";

export type SemiStructuredInterview = {
  title: string;
  intro: string;
  legend: { category: InterviewOptimizationCategory; label: string }[];
  groups: {
    topic: string;
    items: {
      id: string;
      label: string;
      summary: string;
      direction: string;
      priorityCategory?: InterviewOptimizationCategory;
    }[];
  }[];
};

export type UsabilityTesting = {
  eyebrow?: string;
  goalTitle?: string;
  goal: string;
  phases: UsabilityTestPhase[];
  flowSummary?: string;
  taskScenarios?: TaskScenarioTable;
  findingsIntro?: string;
  findings: UsabilityFinding[];
  semiStructuredInterview?: SemiStructuredInterview;
};

export type SurveyStructureColumn = {
  label: string;
  items: string[];
};

export type SurveyMotivationGroup = {
  label: string;
  icon?: "profile" | "needs" | "positioning";
  children?: string[];
};

export type SurveyMotivation = {
  problemLabel: string;
  problemText: string;
  goalLabel?: string;
  goalText?: string;
  groupsTitle?: string;
  groups: SurveyMotivationGroup[];
};

export type SurveyFinding = {
  title: string;
  description: string;
  stat?: { value: string; label: string };
};

export type SurveyStat = {
  value: string;
  unit?: string;
  label: string;
};

export type SurveyRankedStat = {
  value: string;
  label: string;
};

export type SurveyAgeBar = {
  age: string;
  withHabit: number;
  withoutHabit: number;
  highlightPercent?: { withHabit: string; withoutHabit: string };
};

export type SurveyDonutSlice = {
  label: string;
  value: number;
};

export type SurveyPriorityItem = { label: string; withHabit: number; withoutHabit: number };

export type SurveyFunnelSplitItem = { label: string; value: number; percent: string };

export type SurveyResultsHabitTab = {
  funnel: {
    title: string;
    total: number;
    split: SurveyFunnelSplitItem[];
    result: { label: string; value: number; percent: string };
  };
  crossAnalysis: {
    title: string;
    subtitle: string;
    legendLabel: string;
    bars: SurveyAgeBar[];
  };
  sampleInsight: string;
  motivation: {
    withHabitLabel: string;
    withHabitItems: SurveyRankedStat[];
    withoutHabitLabel: string;
    withoutHabitItems: SurveyRankedStat[];
  };
  insight: string | string[];
};

export type SurveyPriorityInsight = {
  commonNeeds: { title: string; points: string[] };
  groupDifferences: {
    title: string;
    withHabitLabel: string;
    withHabitItems: string[];
    withoutHabitLabel: string;
    withoutHabitItems: string[];
  };
  summary: string;
};

export type SurveyResultsFeatureTab = {
  introTitle?: string;
  introText?: string;
  priorityChart: {
    title: string;
    subtitle?: string;
    withHabitLabel: string;
    withoutHabitLabel: string;
    items: SurveyPriorityItem[];
    insight: SurveyPriorityInsight;
  };
  goodAppConditions: {
    title: string;
    subtitle?: string;
    items: { label: string; value: number }[];
  };
  trackedMetrics: {
    title: string;
    subtitle?: string;
    highlightCount: number;
    items: { label: string; value: number }[];
  };
  insight: string | string[];
};

export type SurveyResultsSection = {
  title: string;
  tabs: { key: string; label: string }[];
  habit: SurveyResultsHabitTab;
  feature: SurveyResultsFeatureTab;
};

export type ExpertInterview = {
  eyebrow?: string;
  intro: string;
  avatars: string[];
  photo?: string;
  quotes: string[];
};

export type SurveyResearch = {
  eyebrow?: string;
  goalTitle?: string;
  goal: string;
  stats: SurveyStat[];
  motivation?: SurveyMotivation;
  structure: SurveyStructureColumn[];
  results?: SurveyResultsSection;
  findings: SurveyFinding[];
};

export type ProblemSolutionPoint = { title: string; description: string };

export type ProblemSolution = {
  eyebrow?: string;
  heading?: {
    line1: string;
    line2Prefix?: string;
    line2Highlight: string;
  };
  problemPoints: ProblemSolutionPoint[];
  solutionIntro?: string;
  solutionPoints: ProblemSolutionPoint[];
};

export type ProductFeatureItem = {
  icon: "waveform" | "emotion" | "app";
  title: string;
  description: string;
  position: { top: string; left: string };
};

export type DesignPrinciple = {
  icon: "structure" | "ergonomics" | "interaction";
  title: string;
  items: { label: string; description: string }[];
};

export type DesignSketches = {
  eyebrow?: string;
  images: { src: string; alt?: string }[];
  principlesIntro?: string;
  principles?: DesignPrinciple[];
};

export type Prototyping = {
  eyebrow?: string;
  items: { src: string; alt?: string; label: string }[];
  description?: string;
  wearingFlow?: {
    title?: string;
    description?: string;
    steps: { image: string; imageAlt?: string; number: string; label: string }[];
  };
};

export type FeatureWidget = {
  image: string;
  imageAlt?: string;
  width: number;
  height: number;
  loosePosition?: string;
};

export type FeatureScreen = {
  image: string;
  imageAlt?: string;
  icon: "home" | "activity" | "journal" | "personalization";
  title: string;
  description: string;
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
  eyebrow?: string;
  blocks: {
    icon: "insight" | "limitation";
    title: string;
    subtitle?: string;
    paragraphs: string[];
  }[];
};

export type ScreenGallery = {
  images: { src: string; alt: string; width: number; height: number }[];
};

export type SceneShowcase = {
  appInHand: { image: string; imageAlt?: string };
  concertPhoto: { image: string; imageAlt?: string };
  caption?: string;
  hero: {
    image: string;
    imageAlt?: string;
    slogan: string;
  };
};

export type DeviceConnection = {
  title?: string;
  render: { image: string; imageAlt?: string };
};

export type InterfaceDesign = {
  eyebrow?: string;
  screens?: FeatureScreen[];
  sceneShowcase?: SceneShowcase;
  deviceConnection?: DeviceConnection;
  screenGallery?: ScreenGallery;
};

export type ProductFeatures = {
  eyebrow?: string;
  image: string;
  imageAlt?: string;
  items: ProductFeatureItem[];
  appShowcase?: {
    image: string;
    imageAlt?: string;
    title: string;
    description: string;
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
  role: string[];
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
      eyebrow: "競品分析",
      title: "分析現有產品如何設定 Prompt 變數",
      description:
        "在設計 Prompt 輸入介面時，鑑於工廠職安領域缺乏可直接參考的 UI 案例，我轉而分析間接競品的元件架構與互動邏輯，並評估其在職安情境下的適用性與可行性，作為介面開發的設計依據。",
      tools: [
        { name: "Microsoft AI Builder", logo: "/images/projects/vision-detect/competitor-analysis/logo-microsoft.png" },
        { name: "Salesforce Prompt Builder", logo: "/images/projects/vision-detect/competitor-analysis/logo-salesforce.svg" },
        { name: "PromptLayer", logo: "/images/projects/vision-detect/competitor-analysis/logo-promptlayer.png" },
      ],
      criteria: [
        {
          label: "元件設計",
          values: [
            "Input Chip：以元件邊界顏色標示",
            "Underlined Text Link：以顏色標示",
            "Inline Variable Tokens：採用純文字語法 {{var}}，並以顏色標示",
          ],
        },
        {
          label: "目標使用者",
          values: ["一般業務人員", "CRM 系統管理員", "工程師"],
        },
        {
          label: "填寫順序",
          values: ["插入變數 → 選型別 → 填值", "先選資料來源 → 挑欄位", "寫語法 → 表單填值"],
        },
        {
          label: "驗證機制",
          values: ["測試後看結果", "變數值與輸出並排比對", "即時防呆＋批次測試"],
        },
        {
          label: "點擊互動（Popup）",
          values: [
            "有：點擊 chip 彈出設定表單（Name／Formula／Sample data）",
            "無：以搜尋選單「插入」欄位，非點擊既有標籤編輯",
            "無：填值於獨立表單區，與句中文字分離",
          ],
        },
      ],
      patternRef: {
        tag: "S/AI",
        title: "設計原則參考｜Shape of AI — Madlibs Pattern",
        intro: "競品之外，同時參考 AI Patterns 資料庫：",
        sourceLabel: "shapeof.ai/patterns/madlibs",
        sourceUrl: "https://shapeof.ai/patterns/madlibs",
        image: "/images/projects/vision-detect/competitor-analysis/madlibs-reference.png",
        lead: "此原則須注意的設計考量，將作為後續介面的決策依據",
        principles: [
          {
            title: "彈性由情境決定",
            description:
              "硬性欄位確保輸出一致但缺乏彈性；靈活欄位激發創意但難預測。重複性工作流追求精準，創意發想給予彈性。",
          },
          {
            title: "區分必填與選填",
            description: "突顯關鍵變數、標示可略過欄位，降低認知負荷。",
          },
          {
            title: "讓句構可見",
            description: "不隱藏模板結構，使用者能理解 Prompt 如何組成、也更信任輸出。",
          },
          {
            title: "規劃多步驟串接",
            description: "填空結果可帶入下一步，設計時決定哪些該鎖定、哪些可修改延伸。",
          },
          {
            title: "填空即教學",
            description: "結構良好的 Madlibs 同時示範「有效的 Prompt 長什麼樣」。",
          },
        ],
        conclusion:
          "最適合任務明確、輸入可預測、流程重複的場景。工安偵測正屬此類：偵測句型固定，變動的只有人、物、場域。",
      },
      interfaceIntro: "實際畫面佐證三家在「變數呈現方式」上的差異。",
      interfaceShots: [
        {
          tool: "Microsoft AI Builder",
          description: "藥丸標籤（chip）嵌入句中，邊界最明確。",
          source: "來源：Microsoft Learn 官方文件",
          image: "/images/projects/vision-detect/competitor-analysis/screenshot-microsoft.png",
        },
        {
          tool: "Salesforce Prompt Builder",
          description: "合併欄位以底線＋顏色標示，融入純文字句子。",
          source: "來源：Salesforce Admins Blog",
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
          description: "純文字語法 {var} ／ {{var}}，無視覺標示。",
          source: "來源：PromptLayer 官方文件",
          image: "/images/projects/vision-detect/competitor-analysis/screenshot-promptlayer.png",
        },
      ],
      outcome: {
        title: "基於上述的競品分析，收斂出三個設計原則，並設計出 Prompt Template 操作機制",
        description: "以 Gear Detection—Whether wearing specific gear 情境示意 Prompt 輸入介面",
        items: [
          {
            tag: "原則一",
            refLabel: "參考 Salesforce Prompt Builder",
            title: "先選類型：Dropdown 選擇偵測類型",
            body: "先從 9 種 Prompt Template 中選擇偵測類型，底下變數會自適應更換。",
            image: "/images/projects/vision-detect/competitor-analysis/outcome-principle-1.gif",
          },
          {
            tag: "原則二",
            refLabel: "參考 Shape of AI · Madlibs",
            title: "句構唯讀：固定語句，結構完整可見",
            body: "從結構上消除自然語言輸入的變異性；同時讓使用者理解 Prompt 如何組成。",
            image: "/images/projects/vision-detect/competitor-analysis/outcome-principle-2.gif",
          },
          {
            tag: "原則三",
            refLabel: "綜合 AI Builder ＋ Madlibs",
            title: "變數填空：以 Input Chip 嵌在句中，Popup 選變數",
            body: "句中以 Input Chip 明確標示點擊範圍，點擊可觸發 Popup 快速選擇變數。",
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
      "易用性測試",
      "專家訪談",
      "問卷設計與分析結果",
      "Design System 維護",
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
      eyebrow: "易用性測試",
      goalTitle: "透過易用性測試驗證 App 使用體驗",
      goal:
        "快速驗證現有 Alpha 版本 App，測試「賽事列表」與「執行跑步」兩項核心功能，找出操作過程中容易感到困惑的地方。",
      phases: [
        {
          title: "定義與設定",
          items: [
            "形構型測試（開發前）",
            "針對「賽事列表」「執行跑步」兩項主功能進行測試",
            "設定 1-3 個任務目標",
          ],
        },
        {
          title: "受測者招募",
          items: ["受測者族群（13 人）", "一般跑者（9 人）", "專業跑者（3 人）"],
        },
        {
          title: "測試與觀察",
          items: ["受測者反應", "任務時間", "任務錯誤", "任務效率"],
        },
        {
          title: "訪談與結果分析",
          items: ["操作時間", "錯誤頻率", "半結構式訪談"],
        },
      ],
      flowSummary:
        "流程：說明測試目的與過程 → 任務腳本操作 → 測試後訪問 → 結束訪談 → 研究收斂與分析",
      taskScenarios: {
        title: "設計任務情境腳本，模擬真實使用情境",
        intro:
          "在正式測試前，我先操作兩項核心功能，並設計 14 組情境任務，將欲驗證的功能自然融入其中。\n例如，以「#5 請搜尋一場特定的賽事」作為任務，引導受測者自然進入賽事列表，而非直接要求操作特定功能。\n這樣的設計更貼近真實使用情境，也能避免過度引導，讓測試結果更真實。",
        features: [
          { icon: "calendar", label: "賽事列表" },
          { icon: "activity", label: "執行跑步" },
        ],
        legend: [
          { efficiency: 1, label: "很容易就辦到" },
          { efficiency: 2, label: "覺得有些問題，但最終仍可以達成" },
          { efficiency: 3, label: "無法做到" },
        ],
        rows: [
          {
            feature: "calendar",
            scenario: "請打開 App 後看到了登入的畫面",
            goal: "登入會員",
            response: "-",
            time: "2s",
            hasError: false,
            efficiency: 1,
            note: "",
          },
          {
            feature: "calendar",
            scenario: "登入會員後接續步驟",
            goal: "手機驗證",
            response: "登入時沒有注意到底下的「同意服務條款及隱私權聲明」",
            time: "8s",
            hasError: true,
            efficiency: 2,
            note: "流程建議改為先「同意服務條款及隱私權聲明」再輸入手機號碼及驗證碼",
          },
          {
            feature: "calendar",
            scenario: "你聽過「雲端跑」或「線上跑」的活動嗎？",
            goal: "理解測試者想法",
            response: "沒有聽過",
            time: "-",
            hasError: null,
            efficiency: 1,
            note: "",
          },
          {
            feature: "calendar",
            scenario: "你想看最近有哪些賽事",
            goal: "賽事列表",
            response: "-",
            time: "3s",
            hasError: true,
            efficiency: 1,
            note: "賽事列表可用動畫 icon loading；本頁面瀏覽速度建議優化、賽事底下的公里數描述有誤、日期應標示是活動還是報名時間、增加截止狀態",
          },
          {
            feature: "calendar",
            scenario: "你想搜尋特定賽事",
            goal: "搜尋賽事關鍵字",
            response: "無法只輸入局部的關鍵字",
            time: "3s",
            hasError: true,
            efficiency: 1,
            note: "建議顯示最近的關鍵字",
          },
          {
            feature: "calendar",
            scenario: "你想報名「臺灣七七七跳島馬拉松」這場賽事",
            goal: "進入賽事報名網頁",
            response: "-",
            time: "2s",
            hasError: false,
            efficiency: 1,
            note: "建議要有 RWD 設計",
          },
          {
            feature: "activity",
            scenario: "你想開始跑步並紀錄自己的軌跡與步數",
            goal: "理解測試者想法",
            response: "-",
            time: "-",
            hasError: null,
            efficiency: 1,
            note: "",
          },
          {
            feature: "activity",
            scenario: "你想要設定本次跑步的目標公里數",
            goal: "成功設定目標",
            response: "輸入數字時有些 bug",
            time: "5s",
            hasError: true,
            efficiency: 2,
            note: "輸入公里數時應該要從前面開始輸入、建議「目標設定」增加公尺的選項、右邊增加累積的標題文字、數字鍵盤收不回去",
          },
          {
            feature: "activity",
            scenario: "你不想設定任何的目標，想直接開始執行跑步",
            goal: "回執行跑步畫面→開始",
            response: "定位時間過久",
            time: "30s 以上",
            hasError: true,
            efficiency: 2,
            note: "建議考量網路定位狀況，可增設離線地圖",
          },
          {
            feature: "activity",
            scenario: "請開始執行跑步並結束跑步",
            goal: "開始→繼續→停止紀錄",
            response: "無法點擊停止紀錄",
            time: "4s",
            hasError: true,
            efficiency: 2,
            note: "建議換個「停止紀錄」的手勢操作方式",
          },
          {
            feature: "activity",
            scenario: "跑步結束，你想要編輯本次的跑步紀錄標題",
            goal: "編輯標題",
            response: "-",
            time: "-",
            hasError: null,
            efficiency: null,
            note: "",
          },
          {
            feature: "activity",
            scenario: "結束跑步，把紀錄上傳到運動筆記",
            goal: "上傳運動筆記",
            response: "-",
            time: "-",
            hasError: null,
            efficiency: null,
            note: "",
          },
          {
            feature: "activity",
            scenario: "結束跑步，想把跑步紀錄登陸到已報名的雲端跑賽事中",
            goal: "上傳並登陸賽事",
            response: "-",
            time: "-",
            hasError: null,
            efficiency: null,
            note: "",
          },
          {
            feature: "activity",
            scenario: "回首頁／逛商城",
            goal: "-",
            response: "進入其他功能後無法點擊底下首頁的按鈕回去",
            time: "2s",
            hasError: true,
            efficiency: 1,
            note: "建議在商城裡增加篩選條件功能",
          },
        ],
      },
      findingsIntro: "透過易用性測試，分析操作時間與錯誤頻率，收斂出 4 項高優先度的介面問題：",
      findings: [
        {
          title: "「雲端跑」用詞不熟悉",
          detail:
            "13 位受測者中有 8 位表示不熟悉「雲端跑」一詞\n認為「線上跑」聽起來更直覺，反映出UX Writing 需要進一步優化。",
          image: "/images/projects/h2u/finding-cloud-run-white.png",
          imageAlt: "雲端跑分頁截圖",
          imageWidth: 1200,
          imageHeight: 2100,
          markerPosition: { top: 24, left: 80 },
          calloutLabel: "不熟悉的用詞",
          calloutPosition: { top: 24, left: 94 },
        },
        {
          title: "搜尋功能缺乏回饋機制",
          detail:
            "使用者無法輸入局部關鍵字進行搜尋，介面上也沒有\n明確的取消或確認按鈕，容易造成操作上的不確定性。",
          image: "/images/projects/h2u/finding-search-white-v2.png",
          imageAlt: "賽事搜尋截圖",
          imageWidth: 1200,
          imageHeight: 2100,
          markerPosition: { top: 17, left: 88 },
          calloutLabel: "無法輸入局部關鍵字",
          calloutPosition: { top: 17, left: 100 },
        },
        {
          title: "滑動手勢停止紀錄不直覺",
          detail:
            "13 位受測者中有 9 位表示，在跑步過程中以滑動手勢\n停止紀錄的設計不夠直覺，容易造成操作錯誤與任務中斷。",
          image: "/images/projects/h2u/finding-stop-gesture-white-v2.png",
          imageAlt: "執行跑步停止紀錄截圖",
          imageWidth: 1200,
          imageHeight: 2100,
          markerPosition: { top: 85, left: 65 },
          calloutLabel: "滑動停止不直覺",
          calloutPosition: { top: 85, left: 85 },
        },
        {
          title: "數字鍵盤不會自動收起",
          detail: "自訂公里數時，輸入完成後底部的數字鍵盤不會自動收起，\n影響操作的流暢度。",
          image: "/images/projects/h2u/finding-keyboard-white-v2.png",
          imageAlt: "設定目標公里數截圖",
          imageWidth: 1200,
          imageHeight: 2100,
          markerPosition: { top: 69, left: 81 },
          calloutLabel: "鍵盤不會自動收起",
          calloutPosition: { top: 69, left: 99 },
        },
      ],
      semiStructuredInterview: {
        title: "半結構式訪談結果",
        intro:
          "從功能、介面呈現與技術三個面向分析產品優化項目，協助團隊快速辨識現有問題並判斷改善優先級；其中標示項目為經產品團隊討論後，確認可優先投入改善的業務範圍。",
        legend: [
          { category: "feature", label: "功能優化" },
          { category: "interface", label: "介面呈現優化" },
          { category: "tech", label: "技術優化" },
        ],
        groups: [
          {
            topic: "賽事列表功能",
            items: [
              {
                id: "1.1",
                label: "篩選條件不足",
                summary: "使用者希望在賽事列表中可依地區與公里數進行篩選，提高搜尋效率與精準度。",
                direction: "加入地區與公里數篩選條件",
              },
            ],
          },
          {
            topic: "跑步目標設定與紀錄",
            items: [
              {
                id: "2.1",
                label: "目標重設需求",
                summary: "因定位誤差，使用者希望有「重新歸零」按鈕以重設目標公里數。",
                direction: "加入「重新歸零」按鈕",
              },
              {
                id: "2.2",
                label: "無達標通知",
                summary: "即使已達成目標公里數，App 未跳出通知，無法即時掌握成果。",
                direction: "加入 Modal Panel 通知回應面板",
                priorityCategory: "feature",
              },
              {
                id: "2.3",
                label: "時間紀錄缺失",
                summary: "專業跑者反映跑步時間無法完整紀錄，影響整體紀錄的完整性。",
                direction: "修正時間紀錄 API 或運作邏輯",
                priorityCategory: "interface",
              },
            ],
          },
          {
            topic: "執行跑步介面",
            items: [
              {
                id: "3.1",
                label: "停止記錄不直觀",
                summary: "「滑動停止鍵」不易理解，希望加入輔助文字或語音提示。",
                direction: "改善 UI 互動元件",
                priorityCategory: "feature",
              },
              {
                id: "3.2",
                label: "即時反饋不足",
                summary: "建議在達成目標或每公里時給予震動／語音提示，以增強運動當下的感知。",
                direction: "增加事件回饋觸發",
                priorityCategory: "interface",
              },
              {
                id: "3.3",
                label: "文字資訊可讀性差",
                summary: "跑步中資訊如「配速、總時長」字體太小，導致跑步中難以辨識。",
                direction: "放大字體重新排版",
                priorityCategory: "interface",
              },
            ],
          },
          {
            topic: "雲端跑功能",
            items: [
              {
                id: "4.1",
                label: "功能缺乏引導",
                summary: "使用者表示不清楚「雲端跑是什麼」，建議首次登入時提供說明。",
                direction: "新增新手引導 onboarding",
                priorityCategory: "feature",
              },
            ],
          },
          {
            topic: "配速與步數精準度",
            items: [
              {
                id: "5.1",
                label: "平均配速誤差大",
                summary:
                  "使用者表示已經跑每公里 4 分鐘，App 顯示仍為 7 分鐘，建議顯示「即時配速」較貼近實際情況。",
                direction: "更改即時配速演算法顯示",
                priorityCategory: "feature",
              },
              {
                id: "5.2",
                label: "步數感測延遲",
                summary: "使用者已開始動作，但 App 顯示延遲，甚至突然「爆量加總」，反映不靈敏。",
                direction: "優化感測資料即時性",
                priorityCategory: "tech",
              },
              {
                id: "5.3",
                label: "地圖資訊優先性",
                summary: "跑者認為「地圖」在跑步中作用有限，建議降低地圖優先層級。",
                direction: "降低地圖顯示權重",
                priorityCategory: "tech",
              },
            ],
          },
          {
            topic: "社群與差異化設計",
            items: [
              {
                id: "6.1",
                label: "分享與社群需求",
                summary: "使用者希望能「分享跑步軌跡」，參考 Nike App。",
                direction: "新增跑步路線分享功能",
              },
              {
                id: "6.2",
                label: "缺乏市場差異性",
                summary: "專業跑者認為目前 App 與其他跑步 App 差異不大，需增加誘因吸引用戶。",
                direction: "強化差異化功能，如社群互動或遊戲化機制",
              },
            ],
          },
        ],
      },
    },
    surveyResearch: {
      eyebrow: "問卷調查",
      goalTitle: "透過問卷調查釐清跑者需求與下載意願",
      goal:
        "為了解跑者的需求與使用情境，我規劃並發放問卷，共蒐集 118 份有效樣本\n從使用者輪廓、跑步習慣、功能需求與期待，作為後續產品定位與功能優化的參考。",
      stats: [
        { value: "118", unit: "份", label: "有效問卷" },
        { value: "1", unit: "週", label: "發放時長" },
      ],
      motivation: {
        problemLabel: "Problem",
        problemText:
          "產品上線後下載量不如預期，團隊缺乏對使用者需求與下載考量的了解。",
        goalLabel: "Research Goal",
        goalText:
          "釐清跑者需求與使用情境，找出影響下載與使用意願的關鍵因素。",
        groupsTitle: "問卷構面",
        groups: [
          {
            label: "使用者輪廓",
            icon: "profile",
            children: ["基本資料", "跑步行為與習慣調查"],
          },
          {
            label: "功能需求",
            icon: "needs",
            children: ["產品功能喜好", "附加功能需求"],
          },
        ],
      },
      structure: [
        {
          label: "問卷目標",
          items: ["使用者跑步行為與習慣", "跑步工具使用偏好與功能需求", "競品分析與使用經驗評估"],
        },
        { label: "問卷架構", items: ["跑者", "產品", "競品"] },
        {
          label: "問卷分析",
          items: [
            "基本資料／跑步行為與習慣調查",
            "產品功能喜好／附加功能需求",
            "是否聽過或使用過相關競品／競品使用體驗",
          ],
        },
      ],
      results: {
        title: "問卷結果",
        tabs: [
          { key: "habit", label: "跑步習慣" },
          { key: "feature", label: "功能偏好" },
        ],
        habit: {
          funnel: {
            title: "樣本輪廓：跑步習慣與 App 使用漏斗",
            total: 118,
            split: [
              { label: "有跑步習慣", value: 52, percent: "44%" },
              { label: "無跑步習慣", value: 66, percent: "56%" },
            ],
            result: { label: "有跑步習慣且使用App", value: 34, percent: "65%" },
          },
          crossAnalysis: {
            title: "年齡與跑步習慣的關聯",
            subtitle: "交叉分析：年齡層 × 有/無跑步習慣者",
            legendLabel: "是否有跑步的習慣",
            bars: [
              { age: "18~29", withHabit: 79, withoutHabit: 46 },
              { age: "30~39", withHabit: 14, withoutHabit: 34 },
              { age: "40~49", withHabit: 2, withoutHabit: 21 },
              { age: "50+", withHabit: 0, withoutHabit: 4 },
            ],
          },
          sampleInsight:
            "在 118 位受訪者中，52 人（44%）有跑步習慣，其中 34 人（65%）同時使用 App 追蹤跑步。跑步習慣主要集中在 18~29 歲族群，並隨年齡增長明顯下降。",
          motivation: {
            withHabitLabel: "「有跑步習慣者」的跑步目的",
            withHabitItems: [
              { value: "81.9%", label: "保持身體健康" },
              { value: "52.4%", label: "自主訓練" },
              { value: "48.0%", label: "提升運動表現、減重" },
            ],
            withoutHabitLabel: "「無跑步習慣者」不跑步的原因",
            withoutHabitItems: [
              { value: "54.3%", label: "本身沒有跑步習慣" },
              { value: "48.9%", label: "沒有意志力堅持下去" },
              { value: "31.9%", label: "沒有跑步同伴、時間" },
            ],
          },
          insight: [
            "有跑步習慣者主要受健康動機驅動（81.9%）；相較之下，非跑步習慣者多因缺乏啟動動機而未開始，其中 48.9% 更表示難以持續。因此，App 應聚焦於降低開始門檻，協助使用者跨出第一步並建立運動習慣。",
          ],
        },
        feature: {
          introTitle: "以使用者需求收斂產品核心功能",
          introText:
            "透過跑者功能重要性評估，將 11 項候選功能收斂為 4 項核心需求\n包含訓練數據分析、配速工具、公里／英哩分段與生理數據分析，作為後續功能優先級與產品規劃的依據。",
          priorityChart: {
            title: "跑者 vs 非跑者：功能重要性分組對照",
            subtitle: "平均重要性評分（0–5分）",
            withHabitLabel: "有跑步習慣（N=50）",
            withoutHabitLabel: "沒有跑步習慣（N=163）",
            items: [
              { label: "訓練數據分析", withHabit: 4.16, withoutHabit: 4.14 },
              { label: "生理數據分析", withHabit: 3.72, withoutHabit: 4.01 },
              { label: "成就牆", withHabit: 3.72, withoutHabit: 3.75 },
              { label: "卡路里計算", withHabit: 3.58, withoutHabit: 3.74 },
              { label: "配速工具", withHabit: 3.78, withoutHabit: 3.79 },
              { label: "公里/英哩分段", withHabit: 3.74, withoutHabit: 3.75 },
              { label: "語音回饋", withHabit: 3.54, withoutHabit: 3.33 },
              { label: "里程排行", withHabit: 3.22, withoutHabit: 3.34 },
              { label: "天氣預測", withHabit: 2.42, withoutHabit: 2.75 },
              { label: "社群平台", withHabit: 1.64, withoutHabit: 2.29 },
              { label: "動態文章", withHabit: 1.50, withoutHabit: 2.04 },
            ],
            insight: {
              commonNeeds: {
                title: "共同需求",
                points: [
                  "不論是否具有跑步習慣，「訓練數據分析」與「配速工具」皆為最重要的功能。",
                  "顯示使用者普遍重視能協助掌握跑步表現、提升訓練效率的核心功能。",
                ],
              },
              groupDifferences: {
                title: "族群差異",
                withHabitLabel: "有跑步習慣",
                withHabitItems: ["重視即時語音回饋", "希望提升訓練效率", "著重跑步過程中的輔助"],
                withoutHabitLabel: "無跑步習慣",
                withoutHabitItems: ["重視生理數據分析", "重視天氣預測", "重視社群互動與外部激勵"],
              },
              summary:
                "無跑步習慣者需要的是建立跑步習慣與持續動機；有跑步習慣者則更重視提升訓練品質與效率。",
            },
          },
          goodAppConditions: {
            title: "好的跑步 App 應具備哪些條件？",
            subtitle: "N=98，可複選",
            items: [
              { label: "功能定位\n清楚", value: 76 },
              { label: "畫面簡約\n乾淨", value: 51 },
              { label: "輔助工具\n多元", value: 19 },
              { label: "地圖模式", value: 16 },
              { label: "品牌精神", value: 2 },
            ],
          },
          trackedMetrics: {
            title: "跑步時主要關注哪些運動數據？",
            subtitle: "N=249",
            highlightCount: 4,
            items: [
              { label: "平均速度/即時配速", value: 67 },
              { label: "總距離", value: 59 },
              { label: "時長", value: 57 },
              { label: "心率", value: 31 },
              { label: "卡路里", value: 18 },
              { label: "溫度", value: 11 },
              { label: "坡度", value: 2 },
              { label: "濕度", value: 2 },
              { label: "步頻", value: 1 },
              { label: "訓練效果", value: 1 },
            ],
          },
          insight: [
            "結果顯示，受試者認為跑步 App 最重要的條件為功能定位清楚完整（76 人）及畫面簡潔乾淨（51 人），顯示使用者優先重視功能的實用性與操作效率，而非品牌形象或附加功能。",
            "在跑步過程中，受試者最關注平均速度／即時配速、總距離及時長，反映使用者更重視能直接掌握跑步狀態的核心資訊，其餘心率、卡路里及環境資訊的重要性相對較低。",
          ],
        },
      },
      findings: [],
    },
    expertInterview: {
      eyebrow: "專家訪談",
      intro:
        "為深入了解跑者在實際情境下的使用需求，訪談 3 位具豐富跑步經驗（3-5年）的跑者，進行介面測試與半結構化訪談。透過實際操作與情境回饋，辨識產品在功能與介面上的問題，作為後續功能優化與產品迭代的依據。",
      avatars: [
        "/images/projects/h2u/interview-avatar-1.jpg",
        "/images/projects/h2u/interview-avatar-2.jpg",
        "/images/projects/h2u/interview-avatar-3.jpg",
      ],
      photo: "/images/projects/h2u/interview-photo.jpg",
      quotes: [
        "我希望每達到一公里的里程碑時，提供視覺或觸覺回饋。",
        "在跑步過程中，可以強調「距離」與「總時間」指標，「步數」在視覺上可以降低比重，也許可以改成「爬升」。",
        "希望能有社群功能，可以跟其他人分享跑步路線和軌跡。",
        "App 內的商店對跑者來說缺乏實用價值。",
        "地圖功能在實際跑步過程中的重要性比較低。",
        "平均配速（距離 / 時間）通常是在跑完後才查看，建議在跑步進行中顯示「即時配速」，提供比較精準的回饋。",
        "在跑步過程中，總時間、平均配速與步數的字體太小，不容易閱讀。",
      ],
    },
    interfaceOptimization: {
      eyebrow: "介面優化",
      items: [
        {
          number: "1",
          title: "優化跑步中的資訊層級與閱讀動線",
          painPoints: [
            "根據專業跑者的訪談回饋，現有地圖模式視覺權重過高，干擾使用者在跑步過程中對訓練數據的專注。",
            "配速、總時長等關鍵資訊字體過小，使用者在跑步過程中難以快速辨識，並建議顯示「即時配速」較貼近實際情況。",
          ],
          hmw: [
            "如何**降低地圖在介面中的資訊層級**？",
            "如何**放大跑步過程中最核心的數據**，減少使用者的閱讀與注意力負擔？",
          ],
          solutions: [
            "新增頂部 Tab 切換設計，以「數據／地圖」兩個模式區分，將地圖轉為按需查看的次要功能，降低視覺權重。",
            "放大跑步中的「即時配速」，提升訓練數據的辨識度，讓使用者在移動過程中也能快速掌握跑步狀態。",
          ],
          beforeImage: "/images/projects/h2u/optimization-1-before.png",
          beforeImageAlt: "優化前：地圖與數據資訊擠在同一畫面，地圖視覺權重過高",
          beforeImageWidth: 1400,
          beforeImageHeight: 2450,
          afterImage: "/images/projects/h2u/optimization-1-after.png",
          afterImageAlt: "優化後：新增數據／地圖 Tab 切換，核心數據放大呈現",
          afterImageWidth: 1400,
          afterImageHeight: 1301,
        },
        {
          number: "2",
          title: "重新設計停止跑步操作，減少過程中的干擾",
          sideBySide: true,
          painPoints: [
            "根據專業跑者的訪談回饋，使用「滑動手勢」停止跑步會增加操作負擔，需分心操作手機，影響跑步節奏與效率。",
          ],
          solutions: [
            "改以「點擊」停止跑步，降低操作負擔，讓跑者能更快速完成操作。",
          ],
          beforeImage: "/images/projects/h2u/optimization-2-before.png",
          beforeImageAlt: "優化前：以滑動手勢停止跑步紀錄",
          beforeImageWidth: 1400,
          beforeImageHeight: 2450,
          afterImage: "/images/projects/h2u/optimization-2-after.png",
          afterImageAlt: "優化後：改以點擊按鈕停止跑步紀錄",
          afterImageWidth: 1400,
          afterImageHeight: 2450,
        },
      ],
    },
    optimizationResults: {
      eyebrow: "介面優化結果",
      items: [
        {
          title: "跑步模式（Run Mode）",
          images: [
            {
              src: "/images/projects/h2u/result-run-mode-standard.png",
              alt: "標準模式，顯示跑步距離、時長與配速",
              width: 1200,
              height: 2100,
            },
            {
              src: "/images/projects/h2u/result-run-mode-map.png",
              alt: "地圖模式，顯示跑步路線與即時位置",
              width: 1200,
              height: 2100,
            },
            {
              src: "/images/projects/h2u/result-run-mode-alert.png",
              alt: "達成目標時彈出提醒視窗",
              width: 1200,
              height: 2100,
            },
          ],
          points: [
            {
              label: "標準模式／地圖模式切換",
              description:
                "提供標準模式與地圖模式快速切換，讓跑者可依據不同跑步情境與需求，彈性選擇適合的資訊視圖。",
            },
            {
              label: "距離提醒",
              description:
                "透過震動與語音提醒即時回饋跑步里程，協助跑者掌握目前進度，並確認是否達成預期的訓練目標。",
            },
            {
              label: "資訊層級優化",
              description:
                "重新梳理資訊架構與視覺層級，突顯關鍵數據與核心功能，降低資訊干擾，讓跑者在運動過程中能快速掌握重要資訊並完成操作。",
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
      eyebrow: "研究背景",
      source:
        "根據世界衛生組織（WHO）《2021 年世界聽力報告》，全球聽力損失人口持續攀升，觸覺正逐漸成為聲音感知的重要替代途徑。",
      growthStat: { from: "15億", to: "25億", label: "全球聽力損失人口（預估 2050 年）" },
      stats: [
        { value: "20%", label: "約佔全球總人口" },
        { value: "+67%", label: "較現今成長" },
      ],
      subtitle: "聽障人士如何「聽」見聲音？",
      body: "得益於大腦的可塑性，當某種感官功能喪失時，大腦會透過利用其他感官來進行代償。聽障人士便是透過偵測「振動」，利用觸覺來感受聲音。因此，對他們而言，音樂是一種全身性的體驗，許多人會將手放在樂器或音響喇叭上，以感知音樂的節奏、低音與拍子。",
      image: "/images/projects/touchtune/music-seniro.jpg",
      imageAlt: "群眾在演唱會中隨音樂舉手歡呼",
    },
    problemSolution: {
      eyebrow: "問題與解決方案",
      heading: {
        line1: "跨越聽覺的邊界，",
        line2Prefix: "透過",
        line2Highlight: "多感官振動觸覺設計",
      },
      problemPoints: [
        {
          title: "感知聲音的局限性",
          description: "無法透過聽覺感知音樂節奏、頻率與聲音的情感層次。",
        },
        {
          title: "社交參與困難",
          description: "在音樂活動上容易孤立，缺乏參與感和互動機會。",
        },
        {
          title: "情感連結不足",
          description: "難以感知當下音樂氛圍，情感共鳴受阻。",
        },
      ],
      solutionIntro:
        "我們將聲音轉化為多頻率振動，不僅能幫助聽障者感受音樂的節奏與頻率，更能提升他們在社交活動中的參與度，帶來更豐富的感官體驗與情感連結。",
      solutionPoints: [
        {
          title: "音樂轉譯振動模組",
          description: "三個獨立振動模組，模擬多樣化音樂類型。",
        },
        {
          title: "情感互動分享",
          description: "透過燈光與震動模組，將音樂感受傳遞給他人，促進交流與參與。",
        },
        {
          title: "創造專屬音樂體驗",
          description:
            "記錄情緒反應，結合 App 回放當下的氛圍，打造個人化且獨特的音樂體驗。",
        },
      ],
    },
    productFeatures: {
      eyebrow: "產品功能",
      image: "/images/projects/touchtune/product-features.png",
      imageAlt: "TouchTune 穿戴式裝置配戴於手腕的功能示意圖",
      items: [
        {
          icon: "waveform",
          title: "音樂轉震動模組",
          description: "三個模組可模擬多樣化的音樂類型。",
          position: { top: "6%", left: "42%" },
        },
        {
          icon: "emotion",
          title: "情感互動與分享",
          description: "透過燈光與震動分享音樂體驗，增進互動。",
          position: { top: "60%", left: "42%" },
        },
      ],
      appShowcase: {
        image: "/images/projects/touchtune/app-demo.png",
        imageAlt: "TouchTune App 介面：裝置設定、情緒紀錄與音樂回放",
        title: "個人化音樂體驗",
        description: "記錄情感並可透過應用程式（App）回放。",
      },
    },
    designSketches: {
      eyebrow: "設計草圖",
      images: [
        { src: "/images/projects/touchtune/sketch01-2.png", alt: "手部觸控與震動模組結構草圖" },
        { src: "/images/projects/touchtune/sketch02-2.png", alt: "手腕裝置正面配置草圖" },
        { src: "/images/projects/touchtune/sketch03-2.png", alt: "左右手裝置配戴草圖" },
      ],
      principlesIntro:
        "在發展產品設計草圖時，需要從外觀與結構設計、人體工學與硬體配置等多個維度進行綜合考量。以下是核心的設計考量要點：",
      principles: [
        {
          icon: "structure",
          title: "外觀與結構設計",
          items: [
            {
              label: "造型與語意",
              description:
                "確認產品的外型語彙，如流動感曲線、幾何簡約等，確保視覺風格符合設計定位。",
            },
            {
              label: "分件與層次",
              description:
                "思考產品的結構層次，內層與外層的分離，並規劃內部組件的走線與收納空間。",
            },
            {
              label: "固定與配戴穩定性",
              description:
                "針對穿戴式裝置，需規劃前後端的固定機制（如綁帶、卡扣或彈性結構），確保使用者在活動時不易脫落或移位。",
            },
          ],
        },
        {
          icon: "ergonomics",
          title: "人體工學與穿戴體驗",
          items: [
            {
              label: "包覆範圍與尺寸",
              description: "明確定義裝置在身體上的分佈區域，如手腕至手肘下方的區段，符合人體尺寸工學。",
            },
            {
              label: "材質與親膚性",
              description: "挑選適合長時間接觸皮膚的舒適、透氣親膚材質。",
            },
            {
              label: "生理結構適應性",
              description:
                "硬體與感測元件的配置需避開或契合人體組織（例如選擇肌肉與軟組織厚度適中、骨骼相對靠近表皮的位置），以確保觸覺反饋清晰傳遞，同時避免長時間配戴造成壓迫、痠麻或不適。",
            },
          ],
        },
        {
          icon: "interaction",
          title: "功能與互動機制",
          items: [
            {
              label: "硬體功能配置",
              description:
                "明確標示互動元件，如震動模組、燈光、感測器的精確位置與作用範圍，如 GSR 膚電感測器分布於食指與中指。",
            },
            {
              label: "回饋邏輯與情境對應",
              description: "思考功能如何對應使用者的行為或情緒，如震動的時序性如何呈現音樂的節奏快慢、強弱。",
            },
            {
              label: "軟硬整合",
              description: "將實體裝置的操作與介面的互動流程納入整體草圖的思考範疇。",
            },
          ],
        },
      ],
    },
    prototyping: {
      eyebrow: "原型製作",
      items: [
        {
          src: "/images/projects/touchtune/prototype02.jpg",
          alt: "紙模型原型：手背包覆式設計，正面視角",
          label: "正面",
        },
        {
          src: "/images/projects/touchtune/prototype01.jpg",
          alt: "紙模型原型：手指分離式束帶設計，反面視角",
          label: "反面",
        },
      ],
      description:
        "在進入 3D 建模前，透過原型製作來驗證產品的穿戴流程與內外分層結構；同時實驗正反面的固定機制設計，確保使用者在動態情境下能足夠穩固、不易脫落或移位。",
      wearingFlow: {
        title: "驗證後的最終穿戴流程",
        description:
          "經過原型反覆測試，收斂出三個穿戴步驟：戴上裝置、調整手腕束帶、固定手臂綁帶，確保裝置在動態情境下依然穩固貼合。",
        steps: [
          {
            image: "/images/projects/touchtune/wearing-step1.png",
            imageAlt: "穿戴 TouchTune 裝置於手部",
            number: "01",
            label: "戴上裝置",
          },
          {
            image: "/images/projects/touchtune/wearing-step2.png",
            imageAlt: "調整手腕束帶",
            number: "02",
            label: "調整手腕束帶",
          },
          {
            image: "/images/projects/touchtune/wearing-step3.png",
            imageAlt: "調整手臂上的綁帶",
            number: "03",
            label: "調整手臂綁帶",
          },
        ],
      },
    },
    interfaceDesign: {
      eyebrow: "介面設計",
      screens: [
        {
          image: "/images/projects/touchtune/screen-home-framed.png",
          imageAlt: "TouchTune App 首頁畫面",
          icon: "home",
          title: "首頁",
          description: "呈現近期音樂活動歷程，提供情緒紀錄與裝置管理的快捷入口",
          bare: true,
          imageWidth: 1052,
          imageHeight: 1972,
          mediaWidth: 260,
          mediaMdWidth: 300,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-journal-tile.png",
              imageAlt: "情緒與音樂日誌捷徑",
              width: 376,
              height: 328,
            },
            {
              image: "/images/projects/touchtune/widget-personalization-tile.png",
              imageAlt: "個人化設定捷徑",
              width: 376,
              height: 328,
            },
          ],
        },
        {
          image: "/images/projects/touchtune/screen-live-activity-dual.png",
          imageAlt: "TouchTune App 即時情緒回饋畫面",
          icon: "activity",
          title: "即時情緒回饋",
          description:
            "整合膚電反應（GSR）生理數據，即時反映使用者情緒狀態並記錄音樂節奏與頻率，支援跨裝置同步與多端分享",
          bare: true,
          imageWidth: 2255,
          imageHeight: 2238,
          textOnLeft: true,
          mediaWidth: 400,
          mediaMdWidth: 600,
        },
        {
          image: "/images/projects/touchtune/screen-journal-framed.png",
          imageAlt: "TouchTune App 情緒與音樂日誌畫面",
          icon: "journal",
          title: "情緒與音樂日誌",
          description: "記錄每一次的情緒反應與音樂細節，並可回放當下的完整體驗。",
          bare: true,
          imageWidth: 1052,
          imageHeight: 1972,
          mediaWidth: 260,
          mediaMdWidth: 300,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-emotional-response.png",
              imageAlt: "情緒反應數據卡片",
              width: 738,
              height: 466,
            },
            {
              image: "/images/projects/touchtune/widget-music-frequency.png",
              imageAlt: "音樂節奏與頻率數據卡片",
              width: 738,
              height: 416,
            },
          ],
        },
        {
          image: "/images/projects/touchtune/screen-personalization-angled.png",
          imageAlt: "TouchTune App 個人化震動設定畫面",
          icon: "personalization",
          title: "個人化設定",
          description: "依據個人偏好調整震動強度與分佈範圍，打造專屬的觸覺體驗。",
          bare: true,
          imageWidth: 1734,
          imageHeight: 1176,
          looseWidgets: true,
          widgets: [
            {
              image: "/images/projects/touchtune/widget-lighting-mode.png",
              imageAlt: "燈光模式設定卡片",
              width: 736,
              height: 434,
              loosePosition: "-right-4 -top-16 w-[230px] md:-right-10 md:-top-24 md:w-[290px]",
            },
            {
              image: "/images/projects/touchtune/widget-vibration.png",
              imageAlt: "震動分佈與強度設定卡片",
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
          imageAlt: "手持裝置操作 TouchTune App",
        },
        concertPhoto: {
          image: "/images/projects/touchtune/scene-concert-crowd-v2.jpg",
          imageAlt: "使用者在演唱會現場享受音樂",
        },
        caption: "透過 App 分享情緒與音樂，提升雙向互動與深刻連結",
        hero: {
          image: "/images/projects/touchtune/scene-hero.jpg",
          imageAlt: "TouchTune 穿戴裝置於演唱會情境中特寫",
          slogan: "Experience the tune through every touch.",
        },
      },
      deviceConnection: {
        title: "軟硬體串接流程",
        render: {
          image: "/images/projects/touchtune/hardware-render.png",
          imageAlt: "TouchTune 裝置配戴於手部正面渲染圖",
        },
      },
      screenGallery: {
        images: [
          {
            src: "/images/projects/touchtune/gallery/home.webp",
            alt: "首頁畫面",
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/personalization.webp",
            alt: "個人化設定畫面",
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/live-activity.webp",
            alt: "即時情緒回饋畫面",
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/live-activity-alert.webp",
            alt: "即時情緒回饋・情緒高張狀態畫面",
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/journal.webp",
            alt: "情緒與音樂日誌畫面",
            width: 533,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/choose-screen.webp",
            alt: "選擇分享畫面",
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/share-link-1.webp",
            alt: "分享連結設定畫面",
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/share-link-2.webp",
            alt: "分享連結確認畫面",
            width: 492,
            height: 1000,
          },
          {
            src: "/images/projects/touchtune/gallery/view-link.webp",
            alt: "檢視分享連結畫面",
            width: 533,
            height: 1000,
          },
        ],
      },
    },
    reflection: {
      eyebrow: "反思與展望",
      blocks: [
        {
          icon: "insight",
          title: "心得與收穫",
          subtitle: "Insights & Takeaways",
          paragraphs: [
            "本專案為碩士團隊合作項目。由於初期無法直接接觸聽障使用者，我獨立進行文獻研究整理聽障者的音樂感知方式與相關穿戴式產品案例，作為團隊設計方向的基礎，並進一步帶領團隊發想產品外觀與機構設計。",
            "專案中最大的挑戰，是如何在有限的產品尺寸內整合震動模組，同時兼顧美感與佩戴舒適性，突破傳統輔具偏向醫療器材的既有印象。透過反覆討論與設計迭代，我深刻體會到，這不只是解決功能需求，更需要兼顧使用者的情感認同與日常配戴意願。",
          ],
        },
        {
          icon: "limitation",
          title: "限制與未來規劃",
          subtitle: "Limitations",
          paragraphs: [
            "經過五個月的開發，目前成果仍以概念原型為主，實體驗證仍有進一步發展空間。未來希望完成可穿戴實體原型，驗證電子元件配置與震動回饋的設計合理性，並透過實際使用者測試，評估長時間佩戴的舒適性與互動體驗，持續優化產品設計。",
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
