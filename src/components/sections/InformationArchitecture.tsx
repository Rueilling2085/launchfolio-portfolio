"use client";

import { Home, User, Settings, type LucideIcon } from "lucide-react";

type Node = {
  id: string;
  label: string;
  col: 0 | 1 | 2 | 3 | 4 | 5;
  y: number;
  keyFlow?: boolean;
  icon?: "home" | "personal" | "settings";
};

const ICONS: Record<NonNullable<Node["icon"]>, LucideIcon> = {
  home: Home,
  personal: User,
  settings: Settings,
};

type Edge = {
  from: string;
  to: string;
  keyFlow?: boolean;
};

const COL_X = [20, 220, 450, 660, 900, 1180];
const COL_W = [130, 160, 140, 170, 210, 140];
const BOX_H = 40;

const NODES: Node[] = [
  { id: "root", label: "聽障者APP", col: 0, y: 580, keyFlow: true },

  { id: "home", label: "首頁", col: 1, y: 250, keyFlow: true, icon: "home" },
  { id: "personal", label: "個人化設定", col: 1, y: 610, keyFlow: true, icon: "personal" },
  { id: "settings", label: "設定", col: 1, y: 880, icon: "settings" },

  { id: "latest", label: "最新", col: 2, y: 70, keyFlow: true },
  { id: "records", label: "紀錄", col: 2, y: 250 },
  { id: "create", label: "建立", col: 2, y: 430, keyFlow: true },
  { id: "deviceSettings", label: "裝置設定", col: 2, y: 610, keyFlow: true },
  { id: "login", label: "登入/登出", col: 2, y: 760 },
  { id: "privacy", label: "隱私權設定", col: 2, y: 820 },
  { id: "support", label: "客服中心", col: 2, y: 880 },
  { id: "faq", label: "疑問查詢", col: 2, y: 940 },
  { id: "tutorial", label: "教學步驟", col: 2, y: 1000 },

  { id: "startRecord", label: "開始記錄", col: 3, y: 70, keyFlow: true },
  { id: "history", label: "歷史紀錄", col: 3, y: 250 },
  { id: "editNameDate", label: "編輯名稱和日期", col: 3, y: 400, keyFlow: true },
  { id: "emotionMusicRecord", label: "情緒與音樂日誌", col: 3, y: 460, keyFlow: true },
  { id: "tutorialScreen", label: "教學步驟畫面", col: 3, y: 520 },
  { id: "lightMode", label: "燈光模式設定", col: 3, y: 580, keyFlow: true },
  { id: "vibrationSetting", label: "振動裝置設定", col: 3, y: 640, keyFlow: true },
  { id: "batteryCheck", label: "查看裝置電量", col: 3, y: 700 },

  { id: "deviceConnect", label: "裝置連結", col: 4, y: 40, keyFlow: true },
  { id: "liveScreen", label: "即時情緒回饋", col: 5, y: 40, keyFlow: true },
  { id: "titleDate", label: "標題＆日期", col: 4, y: 160 },
  { id: "emotionData", label: "情緒反應數據和示意圖", col: 4, y: 220 },
  { id: "musicData", label: "音樂數據和示意圖", col: 4, y: 280 },
  { id: "musicPlayer", label: "音樂播放器", col: 4, y: 340 },
];

const EDGES: Edge[] = [
  { from: "root", to: "home", keyFlow: true },
  { from: "root", to: "personal", keyFlow: true },
  { from: "root", to: "settings" },

  { from: "home", to: "latest", keyFlow: true },
  { from: "home", to: "records" },
  { from: "home", to: "create", keyFlow: true },

  { from: "personal", to: "deviceSettings", keyFlow: true },

  { from: "settings", to: "login" },
  { from: "settings", to: "privacy" },
  { from: "settings", to: "support" },
  { from: "settings", to: "faq" },
  { from: "settings", to: "tutorial" },

  { from: "latest", to: "startRecord", keyFlow: true },
  { from: "records", to: "history" },
  { from: "create", to: "editNameDate", keyFlow: true },
  { from: "create", to: "emotionMusicRecord", keyFlow: true },

  { from: "deviceSettings", to: "tutorialScreen" },
  { from: "deviceSettings", to: "lightMode", keyFlow: true },
  { from: "deviceSettings", to: "vibrationSetting", keyFlow: true },
  { from: "deviceSettings", to: "batteryCheck" },

  { from: "startRecord", to: "deviceConnect", keyFlow: true },
  { from: "deviceConnect", to: "liveScreen", keyFlow: true },

  { from: "history", to: "titleDate" },
  { from: "history", to: "emotionData" },
  { from: "history", to: "musicData" },
  { from: "history", to: "musicPlayer" },
];

const CANVAS_W = 1340;
const CANVAS_H = 1060;

function nodeBox(n: Node) {
  const x = COL_X[n.col];
  const w = COL_W[n.col];
  return { x, w, top: n.y - BOX_H / 2, bottom: n.y + BOX_H / 2, right: x + w };
}

export function InformationArchitecture({ legend }: { legend?: string }) {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-8">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          className="mx-auto w-full"
          style={{ minWidth: 900 }}
        >
        {EDGES.map((e) => {
          const from = byId[e.from];
          const to = byId[e.to];
          const fromBox = nodeBox(from);
          const toBox = nodeBox(to);
          const midX = (fromBox.right + toBox.x) / 2;
          const d = `M ${fromBox.right},${from.y} C ${midX},${from.y} ${midX},${to.y} ${toBox.x},${to.y}`;
          return (
            <path
              key={`${e.from}-${e.to}`}
              d={d}
              fill="none"
              stroke={e.keyFlow ? "#8B7BFF" : "rgba(255,255,255,0.15)"}
              strokeWidth={e.keyFlow ? 2 : 1}
            />
          );
        })}

        {NODES.map((n) => {
          const box = nodeBox(n);
          const Icon = n.icon ? ICONS[n.icon] : null;
          return (
            <g key={n.id}>
              <rect
                x={box.x}
                y={box.top}
                width={box.w}
                height={BOX_H}
                rx={BOX_H / 2}
                fill={n.keyFlow ? "rgba(85,50,250,0.22)" : "rgba(255,255,255,0.04)"}
                stroke={n.keyFlow ? "#8B7BFF" : "rgba(255,255,255,0.18)"}
                strokeWidth={n.keyFlow ? 1.5 : 1}
              />
              {Icon ? (
                <foreignObject x={box.x} y={box.top} width={box.w} height={BOX_H}>
                  <div className="flex h-full items-center justify-center gap-2 px-3">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        n.keyFlow ? "border-[#8B7BFF] text-[#B9A6FF]" : "border-white/30 text-white/50"
                      }`}
                    >
                      <Icon size={12} />
                    </span>
                    <span
                      className={`whitespace-nowrap text-xs ${
                        n.keyFlow ? "font-semibold text-white" : "text-white/55"
                      }`}
                    >
                      {n.label}
                    </span>
                  </div>
                </foreignObject>
              ) : (
                <text
                  x={box.x + box.w / 2}
                  y={n.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={12}
                  fill={n.keyFlow ? "#FFFFFF" : "rgba(255,255,255,0.55)"}
                  fontWeight={n.keyFlow ? 600 : 400}
                >
                  {n.label}
                </text>
              )}
            </g>
          );
        })}
        </svg>
      </div>

      {legend && (
        <p className="mt-4 flex items-center justify-end gap-2 text-xs text-white/45 md:absolute md:bottom-10 md:right-10 md:mt-0">
          <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-[#8B7BFF] bg-[#5532FA]/40" />
          {legend}
        </p>
      )}
    </div>
  );
}
