export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px bg-primary/40 w-8"></div>
      <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
        {text}
      </span>
    </div>
  );
}
