# H2U Sports Note App — 案例研究頁規格書

來源：`我的運動筆記_作品資料.pptx`（內部簡報，含優化前後截圖、流程圖）＋ 舊版 Webflow 頁面 `juiling.webflow.io/work/h2u-sports-note-app`（文案較完整，多出 Expert Interviews／Empathy Mapping／Accessibility／Dark Mode／首頁社群功能）。兩邊內容以此規格為準合併。

## 1. 專案基本資訊

| 欄位 | 內容 |
|---|---|
| 標題 | H2U Sports Note App（我的運動筆記） |
| 一句話介紹 | 馬拉松領域知名媒體與社群平台，整合跑步紀錄、賽事瀏覽與報名功能；專案時已完成 Alpha 版但缺乏實際使用者驗證 |
| 角色 | Software Development Intern — User Research、Usability Testing、Expert Interviews、Survey、Design System Maintenance、Engineering Handoff |
| 類型 | Individual Internship Project |
| 時程 | 2022 年 7 月，2 個月 |
| 工具 | Figma、Miro、Xmind、Excel |
| 介面素材版本 | 採用 PPTX 的 Alpha 版藍色系截圖 |

## 2. 資訊架構（6 大區塊）

1. Hero
2. 問題框架 — Research Background + Function Map / User Flow
3. 易用性測試（獨立區塊）
4. 問卷調查（獨立區塊）
5. 質化研究補充 — Expert Interviews + Empathy Mapping
6. Final Design 成果展示 — 含 Accessibility、Dark Mode
7. Design System + Takeaways

（編號 6、7 為方便對照維持原提案順序，實際渲染時 Design System + Takeaways 為收尾區塊）

---

## 3. 各區塊內容與互動規格

### 3.1 Hero
- 標題、一句話介紹
- Meta chips：角色 / 類型 / 時程 / 工具
- 封面圖：PPTX 藍色系 App 截圖（手持裝置照）

### 3.2 問題框架
- Research Background 文字說明（運動筆記為台灣最大運動社群平台，跑步/馬拉松/越野跑，網站＋App 雙形式）
- Function Map & User Flow：左側文字，右側 diagram viewer（兩張圖可切換或並排），沿用 `DeviceConnectionFlow.tsx` 的並排卡片手法

### 3.3 易用性測試（獨立區塊，視覺優化）
- **研究目標**：快速驗證現有 Alpha 版本 App，測試「賽事列表」「執行跑步」兩項核心功能，找出操作過程中容易感到困惑的地方
- 四階段流程（橫向 stepper 視覺化）：
  1. 定義與設定 — 針對兩項核心功能，設計 14 組情境任務
  2. 受測者招募 — 13 人（9 一般跑者＋3 專業跑者＋1 pilot，或視最終校對統一為 13 人）
  3. 測試與觀察 — 任務完成度／時間／錯誤／效率
  4. 半結構式訪談與結果分析 — 依錯誤頻率與嚴重程度排優先序
- **4 大問題**（可展開卡片，展開後顯示對應截圖佐證）：
  1. 「雲端跑」用詞不熟悉，「線上跑」更直覺（8/13 人）
  2. 搜尋無法輸入局部關鍵字、無取消/確認鈕
  3. 滑動手勢停止紀錄不直覺，易誤觸中斷任務（9/13 人）
  4. 自訂公里數時數字鍵盤不會自動收起
- 補充：主題／子主題／訪談摘要／優化方向 四欄表格，依優化類型（功能優化／介面呈現／技術操作）色塊標記

### 3.4 問卷調查（獨立區塊，視覺優化）
- **研究目標**：了解現有使用者樣貌（跑步行為與習慣）、疫情是否改變運動行為、使用者對 App 的需求與期待，並與競品比較分析，藉此確認產品定位、思考差異化方向、找出潛在功能需求
- 結構圖：問卷目標 → 問卷架構（跑者／產品／競品）→ 問卷分析
- 樣本數：199 份有效問卷，發放 1 週
- 4 項發現（數字盡量圖表化，非純文字）：
  1. 跑者行為與年齡交叉分析 — 有無跑步習慣的動機差異；18.03% 因疫情開始跑步（可做簡單長條圖）
  2. 疫情對運動行為的影響 → 建議強化「線上跑」
  3. 使用者選 App 的關鍵因素 — 功能結構清晰 > 介面簡潔
  4. 不同族群的功能需求差異 — 有習慣者重訓練數據；無習慣者重生理數據（血氧/睡眠/心率）

### 3.5 質化研究補充
- **Expert Interviews**：3 位資深跑者的介面測試＋半結構訪談，摘要卡呈現，不需獨立長篇幅
- **Empathy Mapping**：與 PM／工程師／設計師共同工作坊，六象限視覺化網格元件（Think&Feel／Hear／See／Say&Do／Pain／Gain）

### 3.6 Final Design 成果展示
綜合兩項研究後的介面優化項目：

**互動滑塊（Before/After drag slider）— 3 項**：
1. 執行跑步 — 新增「一般模式／地圖模式」切換
2. 賽事列表 — 列表式 → 卡片式設計＋整合行事曆＋收藏/報名功能
3. 資訊層級優化 — 放大關鍵數據、平均配速→即時配速、滑動操作→按鈕點擊

**靜態對比／新增功能卡（維持原樣式）**：
4. 雲端跑首次引導 Panel — 降低認知門檻的說明彈層
5. 首頁社群功能（未上線）— 排行榜、動態分享（新增功能，無 before 畫面）
6. Dark Mode — 一鍵切換淺色/深色 toggle（非優化對比，屬模式切換）

**Accessibility**：WCAG 2.0 AA 對比度標準 + 色盲友善介面設計，作為本區塊內一張額外卡片

### 3.7 Design System + Takeaways
- Design System：一張 token/元件總覽圖帶過
- Takeaways：引言 + 反思段落收尾（呼應首頁 Philosophy 區塊風格）
  - 主要貢獻：規劃執行兩項研究方法，10 項需求收斂為 4-5 項核心功能，提出具體 UI 優化建議
  - 反思：2 個月時程限制、與 mentor 密切討論、體認工程與營運限制的重要性、跨部門簡報獲得正面回饋

---

## 4. 資料模型（`src/lib/data.ts` 待新增）

比照 `InterfaceDesign` / `DeviceConnection` 的資料驅動模式，預計新增：

```ts
type ResearchGoal = { goal: string };

type UsabilityTestPhase = { title: string; description: string };

type UsabilityFinding = {
  title: string;
  summary: string;
  detail: string;
  beforeImage?: string;
  afterImage?: string;
};

type SurveyFinding = {
  title: string;
  description: string;
  chartData?: { label: string; value: number }[];
};

type EmpathyMapQuadrant = {
  label: "thinkFeel" | "hear" | "see" | "sayDo" | "pain" | "gain";
  content: string;
};

type BeforeAfterSlider = {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
};

type OptimizationCard = {
  title: string;
  description: string;
  image: string;
  tag?: "new" | "toggle";
};
```

（欄位為草案，實作時依實際圖片素材調整）

## 5. 視覺素材待辦
- [ ] 確認 PPTX 25 張截圖中，哪些對應到「執行跑步」「賽事列表」「資訊層級優化」的優化前/優化後配對，需成對裁切
- [ ] Function Map / User Flow 原圖解析度較低（簡報截圖），可能需要跟原 Figma 檔要高解析度版本
- [ ] Empathy Map、Accessibility（WCAG 對比度 / 色盲友善）目前只有 Webflow 版的示意圖，需另外確認來源檔案
- [ ] Design System 總覽圖從 Webflow 版取用

## 6. 待確認事項
- 易用性測試最終樣本數統一為 13 人（已確認）
- Before/After 滑塊 3 項已定案：執行跑步、賽事列表、資訊層級優化
- 其餘 3 項（雲端跑引導、首頁社群、Dark Mode）維持靜態呈現
