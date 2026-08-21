export function StatValue({ value, color }: { value: string; color: string }) {
  const match = value.match(/^([+\-]?[\d.,]+)(.*)$/);
  const number = match ? match[1] : value;
  const unit = match ? match[2] : "";
  return (
    <span className="text-[40px] font-bold leading-none md:text-[48px]" style={{ color }}>
      {number}
      {unit && <span className="text-[22px] font-semibold md:text-[26px]">{unit}</span>}
    </span>
  );
}
