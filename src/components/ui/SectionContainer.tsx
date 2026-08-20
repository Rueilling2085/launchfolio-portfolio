import { ReactNode } from "react";

export function SectionContainer({
  id,
  className = "",
  maxWidth = 1160,
  children,
}: {
  id?: string;
  className?: string;
  /** Content column width in px. Defaults to 1080, matching every other
   *  section — only override when a section deliberately needs to run wider. */
  maxWidth?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full px-5 md:px-14" style={{ maxWidth: `${maxWidth}px` }}>
        {children}
      </div>
    </section>
  );
}
