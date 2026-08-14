export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/files/resume.pdf" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juiling?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
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

export type DesignHighlightBranch = { title: string; description: string };

export type DesignHighlight = {
  eyebrow: string;
  stepLabel: string;
  stepTitle: string;
  stepDescription: string;
  branches: [DesignHighlightBranch, DesignHighlightBranch];
};

export type DesignIterationImpact = {
  icon: string;
  label: string;
  valueHighlight: string;
  valueRest: string;
};

export type DesignIterationItem = {
  tag?: string;
  title: string;
  painPoint: string;
  solution: string;
  beforeImage?: string;
  afterImage?: string;
  workflowBefore?: string;
  workflowAfter?: string;
  secondaryImage?: string;
  secondaryImageCaption?: string;
  stackedBeforeAfter?: boolean;
  promptOptimization?: boolean;
  impact?: DesignIterationImpact[];
};

export type DesignIteration = {
  eyebrow: string;
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
  eyebrow: string;
  title?: string;
  subtitle: string;
  query: string;
  steps: HowItWorksStep[];
  feedbackLoop: string;
};

export type ProjectChallengeItem = {
  title: string;
  challenge: string;
  action: string;
  result: string;
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
  niche?: string;
  projectIntro: string;
  challenges: ProjectChallengeItem[];
  awards?: { name: string; result: string }[];
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
  description: string;
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
  summary?: { eyebrow?: string; title: string; description: string };
  priorityMatrix?: PriorityMatrix;
  processFlow?: ProcessFlow;
  howItWorks?: HowItWorks;
  designHighlight?: DesignHighlight;
  designIteration?: DesignIteration;
  competitorAnalysis?: CompetitorAnalysis;
  personaAvatar?: string;
  cardTags?: string[];
  cardHeadline?: string;
  cardDescription?: string;
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
  /** Switches the card to the deep "nebula" surface, with this colour glowing
   *  in from the lower left. Dark cards only. */
  cardAccent?: string;
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
    description:
      "一套 AI 智慧監控平台，透過電腦視覺與生成式 AI 技術，補足職安巡檢間的監控盲區，提升工廠安全管理效率。\n針對研華智慧製造場域需求，設計跨產業 AI 影像分析系統，結合 VLM 視覺偵測與 LLM 對話技術，並透過結構化 Prompt 設計降低 AI 使用門檻，打造直覺化、易操作的監控介面。協助職安人員快速建立偵測條件，即時辨識現場安全風險、追蹤事件脈絡，並自動生成符合 ISO 45001 規範的稽核報告，將傳統被動式監控轉化為主動式智慧安全管理。",
    cardTags: ["B2B AI SaaS", "0→1 Product", "Product Strategy", "UX Research"],
    cardHeadline: "建立 AI 工安監控平台，補足人工巡檢的監控空窗",
    cardDescription:
      "傳統工廠仰賴人工巡檢，難以及時掌握巡檢間的安全風險。我透過訪談職環安人員與系統整合商，設計整合 VLM 與 LLM 的 AI 監控平台，協助企業從被動巡檢轉向主動風險管理。",
    color: "#0E2A55",
    cardAccent: "#1FD9A6",
    cardImage: "/images/projects/vision-detect/card-mockup.png",
    cardImageWidth: 1800,
    cardImageHeight: 1105,
    duration: "9 weeks",
    team: ["Project Manager ×2", "Software Engineer ×2", "UI/UX Designer ×1 - Me"],
    role: [
      "User interviews & analysis",
      "Competitive analysis",
      "User flows & UI design",
      "Cross-team stakeholder workshops",
    ],
    overview: {
      niche: "B2B SaaS・電腦視覺(VLM)・工業安全(EHS)",
      projectIntro:
        "為研華打造的跨場域 AI 監控系統，結合 VLM 視覺偵測與 LLM 對話技術，補足醫療、零售、製造業在非巡檢時段的監控盲區。系統即時偵測現場隱形風險，並透過 Chatbot 快速釐清事件脈絡，自動生成符合 ISO 標準的稽核報告，實現全時段智慧化管理。",
      challenges: [
        {
          title: "1. 從 0 到 1 的硬體驅動產品規劃 (0 to 1 Product Definition)",
          challenge: "需在專案前期快速釐清市場需求與 AI 導入切入點。",
          action:
            "主導訪談系統整合商（SI）與中小企業職環安人員（EHS），成功盤點實際業務痛點，確立 AI 輔助功能與關鍵導入節點。",
          result:
            "訪談 1 位 SI、2 位 EHS 人員，成功收斂出完整的產品流程與功能規劃，作為後續設計的基礎依據。",
        },
        {
          title: "2. 跨場域的可行性驗證 (PoC Selection)",
          challenge:
            "產品可應用場域廣泛，需在「技術可行性」與「商業需求」間取得平衡。",
          action:
            "透過訪談結果分析可行性/需求矩陣，收斂並提取出首次的 PoC 驗證場域。",
          result:
            "從 10 個候選場域中收斂至 2 個，最終聚焦於工廠安全（工安）場域，作為首期 PoC 驗證重點。",
        },
        {
          title: "3. 多領域知識的「模組化 UX 設計」(Modular UX Design)",
          challenge:
            "需突破傳統 AI 限於單一場域訓練的瓶頸，並降低非工程背景使用者的操作門檻。",
          action:
            "設計核心功能「情境式 VLM Template」，將醫療、零售與工安等跨領域知識轉化為結構化模組，打造易上手、直覺化的操作介面。",
          result:
            "Template 機制上線後，透過產品操作影片向 SI 展示，獲得正面認可，驗證了模組化設計降低操作門檻的方向可行。",
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
      eyebrow: "使用者研究",
      title: "找出本次專案可驗證的 PoC 場域",
      description:
        "透過盤點系統整合商與職環安人員的實際需求，依優先度與技術可行性\n建立評估矩陣，收斂出兩個場域，作為本次優先導入的 PoC",
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
      eyebrow: "定義",
      subtitle:
        "以承攬商是否佩戴安全帽？情境為作為本產品流程示意：",
      query:
        "我需要確認承包商是否遵循 ISO 45001 規範（配戴安全帽）。若有違規，我需要知道人數並看到對應的影像證據，作為稽核報告文件。",
      steps: [
        {
          title: "綁定串流或上傳影片",
          description: "連接即時攝影機串流或既有影片。",
          image: "/images/projects/vision-detect/step1.gif",
        },
        {
          title: "VLM 主動分析",
          description:
            "設定如「是否有配戴安全帽？」的範本，進行全天候持續偵測。",
          image: "/images/projects/vision-detect/step2.mp4",
        },
        {
          title: "LLM 資訊查詢",
          description:
            "以自然語言詢問違規次數、時間戳記與對應影片。",
          image: "/images/projects/vision-detect/step3.mp4",
          fit: "cover",
        },
        {
          title: "取得報告與關鍵畫面",
          description:
            "生成附帶影像佐證的 ISO 45001 稽核報告。",
          image: "/images/projects/vision-detect/step4.gif",
          fit: "cover",
        },
      ],
      feedbackLoop:
        "LLM 將設定建議回饋給 VLM，形成持續優化偵測準確度的回饋迴路。",
    },
    designHighlight: {
      eyebrow: "設計迭代",
      stepLabel: "2 步驟",
      stepTitle: "VLM 主動分析",
      stepDescription:
        "設定如「是否有配戴安全帽？」的範本，進行全天候持續偵測。",
      branches: [
        {
          title: "優化影像設定流程",
          description: "統一設定流程，一次驗證、全域套用。",
        },
        {
          title: "優化 Prompt 輸入介面",
          description: "固定句型結構，讓 VLM 判讀更精準。",
        },
      ],
    },
    designIteration: {
      eyebrow: "設計迭代",
      items: [
        {
          tag: "優化一",
          title: "設計影像設定流程，解決擴展性瓶頸",
          painPoint: "每支攝影機都需手動設定，部署時間隨規模線性增加。",
          solution:
            "在 Test Zone 微調 1 支影像來源，一鍵套用到 10 個 Operational Zone，減少 80% 人工作業。",
          beforeImage: "/images/projects/vision-detect/ui-before.png",
          afterImage: "/images/projects/vision-detect/ui-after.png",
          stackedBeforeAfter: true,
          impact: [
            { icon: "layers", label: "擴展性", valueHighlight: "1-to-N", valueRest: "部署模式" },
            { icon: "zap", label: "效率", valueHighlight: "80%", valueRest: "設定時間減少" },
          ],
          workflowBefore:
            "每增加一支攝影機就需重複測試一次，設定時間隨鏡頭數倍增。",
          workflowAfter:
            "完成單一驗證後一鍵套用全場，節省 80% 重複操作時間。",
        },
        {
          tag: "優化二",
          title: "設計 Prompt Template，提升模型判讀精準度",
          painPoint:
            "自然語言 Prompt，語意邊界模糊、任務意圖不明確，導致 VLM 輸出結果不穩定，這在工業安全場域中是不可接受的風險。",
          solution:
            "Prompt Template，採用固定句型結構，僅替換人員、物件、地點等變數，有效提升 VLM 判讀的準確度與穩定性。",
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
    description:
      "Sports Note 是台灣跑步領域的媒體與社群平台，整合賽事資訊、跑步紀錄、線上報名與運動內容等服務。針對 Alpha 版本缺乏實際使用者驗證的問題，我執行 13 位跑者的易用性測試與訪談，並蒐集 199 份問卷，分析不同跑者的需求與使用行為，重新收斂產品功能優先順序，將研究洞察轉化為介面優化與產品迭代方向。",
    cardTags: ["UX Research", "UsabilityTesting", "Design System"],
    cardHeadline: "以使用者研究驅動跑步 App 的產品優化",
    cardDescription:
      "Sports Note 是台灣最大的跑步社群平台。本專案於產品 Alpha 階段，透過易用性測試、跑者訪談與 199 份問卷調查，深入分析不同使用者的需求與行為，收斂產品功能優先順序，並將研究洞察轉化為介面優化與功能規劃，協助團隊制定後續產品迭代方向。",
    color: "#045CC4",
    cardImage: "/images/projects/h2u/card-mockup-hand.png",
    cardImageWidth: 1300,
    cardImageHeight: 1218,
    cardImageAnchor: "bottom",
    duration: "July 2022 (2 month)",
    team: ["Product Manager ×1", "UI/UX Designer ×2 - Me", "Software Engineer ×1"],
    role: [
      "易用性測試",
      "專家訪談",
      "問卷設計與分析結果",
      "Design System 維護",
    ],
    overview: {
      niche: "B2C 運動科技（SportTech）・跑步社群平台・健康管理",
      projectIntro:
        "Sports Note 是台灣最大的跑步社群平台，提供馬拉松賽事資訊、跑步紀錄、線上報名與運動內容等服務。本次專案正值 App Alpha 階段，團隊希望透過使用者研究重新檢視產品定位，了解不同跑者的需求，並找出最優先改善的體驗問題。在這個專案中，我主要負責規劃研究流程、執行易用性測試、訪談與問卷調查，將研究結果轉化為產品策略與介面優化方向，以建立後續產品迭代的重要依據。",
      challenges: [
        {
          title: "1. 透過易用性測試，找出產品優化方向",
          challenge:
            "Alpha 版本已完成主要功能，但缺乏使用者驗證，無法確認資訊架構與操作流程是否符合跑者需求。",
          action:
            "建立 Function Map 與 User Flow，規劃易用性測試，邀請 13 位不同程度跑者完成情境任務並進行訪談，分析任務完成率、操作時間與錯誤率。",
          result:
            "完成 13 場易用性測試與訪談；找出 4 項高優先度介面問題，作為後續優化依據。",
        },
        {
          title: "2. 透過使用者研究，探索具商業價值的功能",
          challenge:
            "開發團隊希望重新盤點產品定位，了解不同跑者真正需要的功能並找出潛在功能開發需求。",
          action:
            "設計並發放問卷，一週內收集 199 份有效樣本，結合 3 位專業跑者訪談，整合量化與質化研究結果。",
          result:
            "收集 199 份有效問卷；完成 3 位專家訪談；將 10+ 項需求收斂為 4 個核心功能方向；建立產品 Roadmap 的優先順序。",
        },
        {
          title: "3. 將研究洞察轉化為產品設計",
          challenge: "如何將上述研究結果，轉化為真正的產品決策。",
          action: "根據研究洞察提出 7 項介面優化方案，完成 UI 設計、Design System 更新與工程交付。",
          result:
            "提出 7 項產品優化方案；維護並更新 Design System；設計方案獲團隊採納，作為後續版本開發依據。",
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
          beforeImageWidth: 1600,
          beforeImageHeight: 2800,
          afterImage: "/images/projects/h2u/optimization-1-after.png",
          afterImageAlt: "優化後：新增數據／地圖 Tab 切換，核心數據放大呈現",
          afterImageWidth: 3012,
          afterImageHeight: 2800,
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
          beforeImageWidth: 1600,
          beforeImageHeight: 2800,
          afterImage: "/images/projects/h2u/optimization-2-after.png",
          afterImageAlt: "優化後：改以點擊按鈕停止跑步紀錄",
          afterImageWidth: 1600,
          afterImageHeight: 2800,
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
    id: "6",
    slug: "touchtune",
    name: "TouchTune",
    client: "TouchTune",
    type: "團隊協作．碩士設計專題",
    image: "/images/projects/touchtune/touchtune-hero-v7.jpg",
    deviceMockup: false,
    cardTags: ["Product Design", "Wearable Device", "Inclusive Design", "Interaction Design"],
    cardHeadline: "打造讓聽障者感受音樂的穿戴式裝置",
    cardDescription:
      "透過使用者研究、軟硬體整合與產品設計，將音樂轉化為觸覺回饋，打破傳統輔具冰冷的既有印象，並結合 App 延伸情感分享與音樂互動體驗。",
    color: "#5532FA",
    cardImage: "/images/projects/touchtune/card-collage-v2.png",
    cardImageWidth: 1664,
    cardImageHeight: 1150,
    theme: "dark",
    description:
      "TouchTune 是一款專為聽障人士設計的穿戴式裝置。它透過將聲音轉化為多頻率的振動，提供多感官的音樂體驗。",
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
          title: "1. 用戶研究與需求洞察",
          challenge:
            "專案初期缺乏與目標使用者（聽障人士）直接接觸的管道，難以確立真實需求。",
          action:
            "負責文獻研究，整理大量二手資料，深入分析聽障者的「感官代償」機制與體驗缺口。",
          result:
            "收斂出以「振動感官」為核心的產品定位，為後續設計方向提供明確依據。",
        },
        {
          title: "2. 軟硬體整合與共融設計",
          challenge:
            "需在軟硬體整合的限制下佈局震動元件，確保用戶能清楚感知音樂；同時外觀須打破傳統醫療輔具的冰冷刻板印象，實現共融設計，讓非聽障者也樂於配戴。",
          action:
            "與團隊歷經 5 次原型迭代，同步優化外觀造型與震動元件的機構配置，兼顧功能與美感。",
          result:
            "最終設計成功兼顧功能性與親和力，榮獲 IDA Design Awards、unDesign Award 兩項國際設計獎肯定。",
        },
      ],
      awards: [
        { name: "IDA Design Awards", result: "Honorable Mention" },
        { name: "unDesign Award", result: "Gold" },
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
