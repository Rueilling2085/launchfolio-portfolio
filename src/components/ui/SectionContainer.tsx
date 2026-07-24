import { ReactNode } from "react";

export function SectionContainer({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-[1080px] px-5 md:px-14">{children}</div>
    </section>
  );
}
