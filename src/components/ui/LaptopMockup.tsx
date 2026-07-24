import Image from "next/image";

export function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-t-xl border border-b-0 border-line bg-[#e7e7e7] p-[10px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] sm:p-[14px]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white">
          <Image src={src} alt={alt} fill sizes="768px" className="object-cover object-top" />
        </div>
      </div>
      <div className="relative h-[14px] rounded-b-xl bg-gradient-to-b from-[#dcdcdc] to-[#c9c9c9] sm:h-[18px]">
        <div className="absolute left-1/2 top-0 h-[5px] w-16 -translate-x-1/2 rounded-b-md bg-[#b9b9b9] sm:w-20" />
      </div>
    </div>
  );
}
