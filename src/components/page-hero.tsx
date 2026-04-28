import Image from "next/image";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  priority?: boolean;
  /** Service detail: taller band, copy at bottom. */
  variant?: "detail" | "page" | "compact";
  children: React.ReactNode;
};

const headerMin: Record<NonNullable<PageHeroProps["variant"]>, string> = {
  detail:
    "min-h-[min(58vh,520px)] sm:min-h-[min(52vh,560px)]",
  page: "min-h-[min(46vh,400px)] sm:min-h-[min(42vh,440px)]",
  compact:
    "min-h-[min(40vh,300px)] sm:min-h-[min(36vh,340px)]",
};

export function PageHero({
  image,
  imageAlt,
  priority = false,
  variant = "page",
  children,
}: PageHeroProps) {
  const v = variant;
  const inner =
    v === "compact"
      ? "relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-8"
      : "relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8";

  return (
    <header
      className={`relative isolate flex w-full flex-col overflow-hidden border-b border-slate-800/30 pt-[6.75rem] sm:pt-[7.25rem] ${headerMin[v]}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/72 to-blue-950/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950/42 via-transparent to-slate-900/25"
        aria-hidden
      />
      <div className={`relative z-10 flex flex-1 flex-col ${inner}`}>
        {children}
      </div>
    </header>
  );
}
