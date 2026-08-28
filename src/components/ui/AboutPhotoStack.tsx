import Image from "next/image";

/** Single portrait card, slightly tilted to match the site's handwritten,
 *  pinned-photo feel elsewhere (e.g. the case-study prototype photos). */
export function AboutPhotoStack({ photos }: { photos: string[] }) {
  const photo = photos[0];
  if (!photo) return null;

  return (
    <div className="md:sticky md:top-28">
      <div className="group relative mx-auto aspect-[4/5] w-full max-w-[280px] -rotate-2 overflow-hidden rounded-2xl border border-line bg-paper-alt shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0 hover:scale-[1.04]">
        <Image
          src={photo}
          alt="Jui Ling"
          fill
          sizes="(min-width: 768px) 400px, 80vw"
          quality={90}
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Jui Ling
        </span>
      </div>
    </div>
  );
}
