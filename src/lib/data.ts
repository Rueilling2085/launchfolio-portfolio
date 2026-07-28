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

export type DesignHighlightBranch = { title: string; description: string };

export type DesignHighlight = {
  eyebrow: string;
  stepLabel: string;
  stepTitle: string;
  stepDescription: string;
  branches: [DesignHighlightBranch, DesignHighlightBranch];
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
};

export type DesignIteration = {
  eyebrow: string;
  items?: DesignIterationItem[];
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

export type ProjectOverview = {
  niche: string;
  projectIntro: string;
  challenges: ProjectChallengeItem[];
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
  overview?: ProjectOverview;
  summary?: { eyebrow?: string; title: string; description: string };
  priorityMatrix?: PriorityMatrix;
  processFlow?: ProcessFlow;
  howItWorks?: HowItWorks;
  designHighlight?: DesignHighlight;
  designIteration?: DesignIteration;
  competitorAnalysis?: CompetitorAnalysis;
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
      "一套電腦視覺平台，補足職安巡檢之間的監控空窗，降低工廠安全事故發生率。",
    duration: "9 weeks",
    team: ["Project Manager ×2", "Software Engineer ×2", "UI/UX Designer ×1"],
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
      title: "找出本次可驗證的 PoC 場域",
      description:
        "透過盤點系統整合商與職環安人員的實際需求，依優先度與技術可行性建立評估矩陣，收斂出兩個場域，作為本次優先導入的 PoC。",
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
        { label: ["重大事故", "通報與", "調查"], emphasis: true },
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
          description: "固定句型結構，讓 VLM 判讀更穩定精準。",
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
          workflowBefore:
            "每增加一支攝影機就需重複測試一次，設定時間隨鏡頭數倍增。",
          workflowAfter:
            "完成單一驗證後一鍵套用全場，節省 80% 重複操作時間。",
        },
        {
          tag: "優化二",
          title: "設計 Prompt 輸入介面，提升模型判讀精準度",
          painPoint:
            "邊界模糊、意圖不清，導致 VLM 輸出結果不穩定——在工業安全場域中是不可接受的風險。",
          solution:
            "採用固定句型結構，僅替換人員、物件、地點等變數，有效提升 VLM 判讀的準確度與穩定性。",
          promptOptimization: true,
        },
      ],
    },
    personaAvatar: "/images/projects/vision-detect/persona-avatar.png",
    competitorAnalysis: {
      eyebrow: "競品分析",
      title: "分析現有產品如何設定 Prompt 變數",
      description: "分析各家的元件設計與交互機制來確認後續介面的設計方向",
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
        title: "基於上述的競品分析，收斂出三個設計原則",
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
