"use client";

type FlowNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  shape?: "pill" | "diamond";
  keyFlow?: boolean;
};

type FlowEdge = {
  from: string;
  to: string;
  fromSide?: "left" | "right" | "top" | "bottom";
  toSide?: "left" | "right" | "top" | "bottom";
  label?: string;
  keyFlow?: boolean;
  detour?: boolean;
};

const NODES: FlowNode[] = [
  { id: "power", label: "按下「開機」鍵", x: 60, y: 50, w: 260, h: 52, keyFlow: true },
  { id: "bluetooth", label: "按下「藍芽」鍵", x: 60, y: 130, w: 260, h: 52, keyFlow: true },
  {
    id: "decision",
    label: "確認 App 是否\n連結成功",
    x: 110,
    y: 260,
    w: 160,
    h: 130,
    shape: "diamond",
    keyFlow: true,
  },
  {
    id: "successRedirect",
    label: "跳轉至裝置設定畫面",
    x: 60,
    y: 440,
    w: 260,
    h: 52,
    keyFlow: true,
  },
  { id: "personalization", label: "前往「個人化設定」", x: 60, y: 520, w: 260, h: 52, keyFlow: true },
  { id: "save", label: "儲存", x: 130, y: 600, w: 120, h: 52, shape: "pill", keyFlow: true },
];

const EDGES: FlowEdge[] = [
  { from: "power", to: "bluetooth", fromSide: "bottom", toSide: "top", keyFlow: true },
  { from: "bluetooth", to: "decision", fromSide: "bottom", toSide: "top", keyFlow: true },
  {
    from: "decision",
    to: "successRedirect",
    fromSide: "bottom",
    toSide: "top",
    label: "YES",
    keyFlow: true,
  },
  { from: "decision", to: "power", fromSide: "right", toSide: "right", label: "NO", detour: true },
  {
    from: "successRedirect",
    to: "personalization",
    fromSide: "bottom",
    toSide: "top",
    keyFlow: true,
  },
  { from: "personalization", to: "save", fromSide: "bottom", toSide: "top", keyFlow: true },
];

const CANVAS_W = 380;
const CANVAS_H = 680;

function anchor(n: FlowNode, side: "left" | "right" | "top" | "bottom") {
  const cx = n.x + n.w / 2;
  const cy = n.y + n.h / 2;
  if (side === "left") return { x: n.x, y: cy };
  if (side === "right") return { x: n.x + n.w, y: cy };
  if (side === "top") return { x: cx, y: n.y };
  return { x: cx, y: n.y + n.h };
}

function edgePath(start: { x: number; y: number }, end: { x: number; y: number }) {
  const midY = (start.y + end.y) / 2;
  return `M ${start.x},${start.y} C ${start.x},${midY} ${end.x},${midY} ${end.x},${end.y}`;
}

function detourPath(start: { x: number; y: number }, end: { x: number; y: number }, railX: number) {
  const goingUp = end.y < start.y;
  const railNearStart = start.y + (goingUp ? -60 : 60);
  const railNearEnd = end.y + (goingUp ? 60 : -60);
  return `M ${start.x},${start.y} C ${railX},${start.y} ${railX},${railNearStart} ${railX},${railNearStart} L ${railX},${railNearEnd} C ${railX},${end.y} ${railX},${end.y} ${end.x},${end.y}`;
}

export function DeviceConnectionFlow() {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <div className="relative mx-auto flex h-full w-full max-w-[368px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
      <svg viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} className="mx-auto w-full max-w-[320px]">
        {EDGES.map((e) => {
          const from = byId[e.from];
          const to = byId[e.to];
          const start = anchor(from, e.fromSide ?? "bottom");
          const end = anchor(to, e.toSide ?? "top");
          const railX = CANVAS_W - 30;
          const d = e.detour ? detourPath(start, end, railX) : edgePath(start, end);
          const labelX = e.detour ? railX : e.fromSide === "right" ? start.x + 34 : start.x + 18;
          const labelY = e.detour ? start.y + 40 : (start.y + end.y) / 2;
          return (
            <g key={`${e.from}-${e.to}`}>
              <path
                d={d}
                fill="none"
                stroke={e.keyFlow ? "#8B7BFF" : "rgba(255,255,255,0.25)"}
                strokeWidth={e.keyFlow ? 2 : 1.5}
              />
              {e.label && (
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={600}
                  fill={e.keyFlow ? "#B9A6FF" : "rgba(255,255,255,0.45)"}
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}

        {NODES.map((n) => {
          const fill = n.keyFlow ? "rgba(85,50,250,0.18)" : "rgba(255,255,255,0.04)";
          const stroke = n.keyFlow ? "#8B7BFF" : "rgba(255,255,255,0.18)";
          const textFill = n.keyFlow ? "#FFFFFF" : "rgba(255,255,255,0.55)";

          if (n.shape === "diamond") {
            const cx = n.x + n.w / 2;
            const cy = n.y + n.h / 2;
            const points = `${cx},${n.y} ${n.x + n.w},${cy} ${cx},${n.y + n.h} ${n.x},${cy}`;
            const lines = n.label.split("\n");
            return (
              <g key={n.id}>
                <polygon points={points} fill={fill} stroke={stroke} strokeWidth={1.5} />
                {lines.map((line, i) => (
                  <text
                    key={line}
                    x={cx}
                    y={cy + (i - (lines.length - 1) / 2) * 16}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    fontWeight={600}
                    fill={textFill}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          }

          return (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                rx={n.shape === "pill" ? n.h / 2 : 14}
                fill={fill}
                stroke={stroke}
                strokeWidth={n.keyFlow ? 1.5 : 1}
              />
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={13}
                fontWeight={n.keyFlow ? 600 : 400}
                fill={textFill}
              >
                {n.label}
              </text>
            </g>
          );
        })}

        <rect x={20} y={0} width={CANVAS_W - 40} height={30} rx={8} fill="#2A1B6B" stroke="#8B7BFF" />
        <text
          x={CANVAS_W / 2}
          y={15}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          fontWeight={600}
          fill="#C7BBFF"
        >
          硬體
        </text>

        <rect
          x={20}
          y={206}
          width={CANVAS_W - 40}
          height={30}
          rx={8}
          fill="#1A1330"
          stroke="rgba(255,255,255,0.2)"
        />
        <text
          x={CANVAS_W / 2}
          y={221}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          fontWeight={600}
          fill="rgba(255,255,255,0.75)"
        >
          軟體
        </text>
      </svg>
    </div>
  );
}
