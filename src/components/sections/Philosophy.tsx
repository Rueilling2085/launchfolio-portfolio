import { Search, Users, Compass } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";

const traits = [
  {
    icon: Search,
    title: "使用者研究",
    description: "訪談與情境推演，理解真正的使用者需求。",
  },
  {
    icon: Users,
    title: "跨部門協作",
    description: "與工程師、PM 共同建立產品共識。",
  },
  {
    icon: Compass,
    title: "產品方向決策",
    description: "在資源與技術限制下，做出當下最合理的決策。",
  },
];

export function Philosophy() {
  return (
    <SectionContainer className="py-10 md:py-14">
      <RevealOnScroll>
        <div className="rounded-[2.5rem] border border-line bg-white px-6 py-14 text-ink md:px-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl leading-snug font-medium sm:text-3xl md:text-4xl">
              I turn{" "}
              <span className="font-bold text-[#FF6A00]">
                ambiguity into direction
              </span>
              .
            </h2>
            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-muted md:text-base">
              我是人機互動（HCI）背景的 UX/UI
              設計師，擅長透過使用者研究，快速掌握人在特定情境下的真實行為與需求，讓設計決策建立在對的理解基礎上。
              {"\n\n"}跨足物聯網、電商與健康等領域的產品專案，讓我具備快速理解陌生同產業、拆解複雜問題的敏銳度。雖然這個過程充滿不確定，但也正是設計最有價值的地方，從使用者行為、商業目標與產業限制之間反覆權衡，將抽象需求收斂為真正符合需求且可落地的產品方案。
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16">
            {traits.map((trait) => (
              <div
                key={trait.title}
                className="rounded-2xl border border-line bg-paper-alt p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00]">
                  <trait.icon size={16} />
                </span>
                <p className="mt-4 text-sm font-medium text-ink">{trait.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
}
