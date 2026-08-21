// Archived: H2U Sports Note App's `surveyResearch` content.
//
// Removed from the live case study because the survey didn't tie cleanly
// back to a shipped outcome (see conversation history). Kept here in case
// it's worth reviving later — paste the object below back into the H2U
// project entry's `surveyResearch` field in `src/lib/data.ts` to restore it.
// The `SurveyResearch` component and its rendering in
// `src/app/work/[slug]/page.tsx` were left in place, unused, for this reason.

import type { SurveyResearch } from "@/lib/data";

export const h2uSurveyResearch: SurveyResearch = {
  eyebrow: { zh: "問卷調查", en: "Survey Research" },
  goalTitle: { zh: "透過問卷調查釐清跑者需求與下載意願", en: "Using a Survey to Clarify Runner Needs and Download Intent" },
  goal: {
    zh: "為了解跑者的需求與使用情境，我規劃並發放問卷，共蒐集 118 份有效樣本\n從使用者輪廓、跑步習慣、功能需求與期待，作為後續產品定位與功能優化的參考。",
    en: "To understand runner needs and usage context, I designed and distributed a survey, collecting 118 valid responses\ncovering user profile, running habits, feature needs, and expectations, used to inform product positioning and feature priorities going forward.",
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
          en: "Runners with a habit are mainly driven by health (81.9%); non-runners, by contrast, mostly never start due to a lack of motivation, and 48.9% say they struggle to keep it up. The app should therefore focus on lowering the barrier to entry, helping users take the first step and build the habit.",
        },
      ],
    },
    feature: {
      introTitle: { zh: "以使用者需求收斂產品核心功能", en: "Converging on Core Features from User Needs" },
      introText: {
        zh: "透過跑者功能重要性評估，將 11 項候選功能收斂為 4 項核心需求\n包含訓練數據分析、配速工具、公里／英哩分段與生理數據分析，作為後續功能優先級與產品規劃的依據。",
        en: "By having runners rate feature importance, we narrowed 11 candidate features down to 4 core needs,\ntraining data analysis, pace tools, km/mile splits, and physiological data analysis, to guide feature priority and product planning going forward.",
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
          en: "Respondents ranked clear, complete feature positioning (76) and a clean, simple interface (51) as the most important qualities in a running app, showing users prioritize practicality and operational efficiency over branding or extra features.",
        },
        {
          zh: "在跑步過程中，受試者最關注平均速度／即時配速、總距離及時長，反映使用者更重視能直接掌握跑步狀態的核心資訊，其餘心率、卡路里及環境資訊的重要性相對較低。",
          en: "While running, respondents cared most about average speed/real-time pace, total distance, and duration, reflecting a priority on core information about their current run over heart rate, calories, or environmental data.",
        },
      ],
    },
  },
  findings: [],
};
