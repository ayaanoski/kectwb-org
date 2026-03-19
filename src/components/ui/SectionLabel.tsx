export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-6">
      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
      {text}
    </div>
  );
}
