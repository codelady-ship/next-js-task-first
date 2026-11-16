type Props = {
  mode: "SSR" | "CSR";
  children: React.ReactNode;
  stamp?: React.ReactNode;
};

/** Short explanation box shown at the top of the SSR and CSR pages. */
const RenderNote = ({ mode, children, stamp }: Props) => {
  const ssr = mode === "SSR";
  return (
    <aside
      className={`mb-8 rounded-xl border p-4 sm:p-5 ${ssr ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}
    >
      <p className="mb-2 flex flex-wrap items-center gap-2 text-sm font-semibold">
        <span className={`rounded-full px-2 py-0.5 text-xs text-white ${ssr ? "bg-emerald-600" : "bg-amber-600"}`}>{mode}</span>
        {ssr ? "Server-side rendering" : "Client-side rendering"}
      </p>
      <div className="space-y-2 text-sm leading-relaxed text-slate-700">{children}</div>
      {stamp && <p className="mt-3 text-xs text-slate-500">{stamp}</p>}
    </aside>
  );
};

export default RenderNote;
