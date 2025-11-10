export function TimelineSection({
  timeRange,
  mood,
  music,
  visuals,
  voiceover,
  index
}) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-frame backdrop-blur transition duration-700 ease-out hover:-translate-y-1 hover:border-accent-200/40 hover:bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50 mix-blend-overlay" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <div className="w-full max-w-xs shrink-0 space-y-4 text-accent-200">
          <div className="font-display text-3xl font-semibold text-accent-400">
            {timeRange}
          </div>
          <div className="text-sm uppercase tracking-widest text-accent-200/80">
            Mood
          </div>
          <p className="text-lg text-accent-100/80">{mood}</p>
          <div className="text-sm uppercase tracking-widest text-accent-200/80">
            Music
          </div>
          <p className="text-accent-100/80">{music}</p>
        </div>

        <div className="flex-1 space-y-6 text-accent-100">
          <div>
            <div className="text-sm uppercase tracking-widest text-accent-200/80">
              Visuals
            </div>
            <ul className="mt-2 list-disc space-y-2 px-4 text-lg leading-relaxed text-accent-100/90">
              {visuals.map((visual, visualIndex) => (
                <li key={visualIndex}>{visual}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="text-sm uppercase tracking-widest text-accent-200/80">
              Voiceover
            </div>
            <div className="mt-2 space-y-2 text-lg leading-relaxed">
              {voiceover}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
