/** Shared “service tile”: glass surface + royal blue on hover + sweep. */
export const serviceCardClass =
  "card-glass-hover group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/45 p-6 text-left text-inherit no-underline shadow-[0_8px_32px_-8px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-900/15 supports-[backdrop-filter]:bg-white sm:p-8 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600";

/** Horizontal body for timeline / process steps on larger screens. */
export const serviceCardProcessLayoutClass =
  "sm:flex-row sm:items-start sm:gap-8";

export const serviceCardIconClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-700 ring-1 ring-blue-100/80 transition duration-300 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/25";

export const serviceCardTitleClass =
  "text-slate-900 transition duration-300 group-hover:text-white";

export const serviceCardBodyClass =
  "text-sm leading-relaxed text-slate-600 transition duration-300 group-hover:text-blue-50/95";

/** Compact horizontal tile (e.g. tools). */
export const serviceCardRowClass =
  "card-glass-hover group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border border-white/50 bg-white/45 px-4 py-3.5 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/15 supports-[backdrop-filter]:bg-white/35";

export const serviceCardRowLabelClass =
  "text-sm font-medium text-slate-700 transition duration-300 group-hover:text-white";

/** Tools grid: same glass surface as rows, no hover lift / blue / sweep */
export const toolCardRowClass =
  "relative flex w-full items-center gap-3 overflow-hidden rounded-xl border border-white/50 bg-white/45 px-4 py-3.5 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-white/35";

export const toolCardRowLabelClass = "text-sm font-medium text-slate-700";
