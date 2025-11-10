import { TimelineSection } from "@/components/TimelineSection";

const sections = [
  {
    timeRange: "0:00 – 0:08",
    mood: "Nostalgic warmth carries the first light over Allahabad.",
    music: "Soft sitar phrases with a lingering tanpura drone.",
    visuals: [
      "Sunrise slow-pan across Allahabad University’s arches kissed by golden light.",
      "Dust motes dancing as they catch the morning sun in a deserted corridor.",
      "Close-up of an old Hindi novel — pages fluttering in a gentle breeze."
    ],
    voiceover: (
      <>
        <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
        <p className="italic">
          “In the lanes of Allahabad, where love met sacrifice, lived a man —
          Chander.”
        </p>
      </>
    )
  },
  {
    timeRange: "0:09 – 0:18",
    mood: "Tender, hushed anticipation of love blossoming.",
    music: "Light flute with soft tabla heartbeat.",
    visuals: [
      "Chander kneels to gather scattered books as Sudha’s bangles chime softly.",
      "Their fingers brush; lingering eye contact framed by the corridor’s shadows.",
      "A stolen moment under flowering amaltas trees swaying in slow motion."
    ],
    voiceover: (
      <>
        <div>
          <p className="font-display text-2xl text-accent-200">Sudha:</p>
          <p className="italic">“Chander… tum itne chup kyu rehte ho?”</p>
        </div>
        <div>
          <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
          <p className="italic">
            “He loved her — deeply, silently, purely… a devotion etched between
            breaths.”
          </p>
        </div>
      </>
    )
  },
  {
    timeRange: "0:19 – 0:32",
    mood: "Gathering storm; ache of unspoken truth.",
    music: "Piano chords with distant thunder and rain textures.",
    visuals: [
      "Ink blots spreading across parchment as Chander writes a letter he will never post.",
      "Windowpane streaked with rain, reflecting Sudha’s silhouette walking away.",
      "Chander watching from beneath an umbrella, swallowed by the monsoon crowd."
    ],
    voiceover: (
      <>
        <div>
          <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
          <p className="italic">
            “Duty chained his voice, while expectations braided her future with
            another name.”
          </p>
        </div>
        <div>
          <p className="font-display text-2xl text-accent-200">Chander:</p>
          <p className="italic">
            “Kuch alfaaz bas dil ke andheron mein hi jalte rehte hain…”
          </p>
        </div>
      </>
    )
  },
  {
    timeRange: "0:33 – 0:46",
    mood: "Sacrifice, resolute yet fragile.",
    music: "Cello swell with tanpura; heartbeats echo softly.",
    visuals: [
      "Ceremonial fire flickering as Chander steps back into shadow while Sudha’s wedding rituals glow.",
      "A solitary diya extinguishing in slow motion, smoke curling toward darkness.",
      "Close-up of Chander’s trembling hands releasing the unsent letter into the river."
    ],
    voiceover: (
      <>
        <div>
          <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
          <p className="italic">
            “He offered his own heart at the altar of her happiness, becoming the
            silent god of his own sins.”
          </p>
        </div>
        <div>
          <p className="font-display text-2xl text-accent-200">Sudha (VO):</p>
          <p className="italic">
            “Aapki khamoshi hi meri sabse badi dua thi, Chander…”
          </p>
        </div>
      </>
    )
  },
  {
    timeRange: "0:47 – 0:56",
    mood: "Bittersweet reflection; longing wrapped in memory.",
    music: "Reverberant sarangi melody over gentle rainstick.",
    visuals: [
      "Years later — Chander teaching under a banyan tree, Sudha’s name scribbled in the corner of his notebook.",
      "Sudha touching the same book spine in her marital home, eyes misted.",
      "Parallel shots: both look toward the same twilight sky, miles apart."
    ],
    voiceover: (
      <>
        <div>
          <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
          <p className="italic">
            “Time moved on, yet every breeze carried whispers of what they chose
            to protect by letting go.”
          </p>
        </div>
      </>
    )
  },
  {
    timeRange: "0:57 – 1:00",
    mood: "Quiet catharsis; hopeful ember.",
    music: "Single sitar string resolving into silence.",
    visuals: [
      "Close-up of the original novel resting on a stone bench, petals falling onto its cover.",
      "Fade to the glow of Allahabad’s night lamps, dissolving into darkness."
    ],
    voiceover: (
      <>
        <div>
          <p className="font-display text-2xl text-accent-200">Narrator (VO):</p>
          <p className="italic">
            “Gunahon Ka Devta — jahan pyaar apne aap ko mita kar bhi, ujala ban
            jaata hai.”
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-accent-200/70">
          Fade Out · Title Card · Whisper of Rain
        </p>
      </>
    )
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden pb-20 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,229,200,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(109,76,142,0.2),transparent_50%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <header className="space-y-8 text-center transition duration-700 ease-out">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent-200/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.4em] text-accent-200/80">
            Cinematic Reel Blueprint
          </div>
          <h1 className="font-display text-4xl font-semibold text-accent-100 sm:text-5xl md:text-6xl">
            “Gunahon Ka Devta – The God of Sins”
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-accent-100/80">
            A slow-paced, emotionally resonant 60-second storyboard crafted for
            YouTube Shorts and Instagram Reels — tracing the luminous love and
            heartbreaking restraint of Chander and Sudha set against the timeless
            soul of Allahabad.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur transition duration-700 ease-out hover:border-accent-200/40 hover:bg-black/50">
          <div className="grid gap-6 text-left sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-200/70">
                Format
              </p>
              <p className="text-lg text-accent-100">YouTube Shorts / IG Reels</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-200/70">
                Duration
              </p>
              <p className="text-lg text-accent-100">60 seconds</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-accent-200/70">
                Style Notes
              </p>
              <p className="text-lg text-accent-100/90">
                Cinematic · Emotional · Slow storytelling
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-12">
          {sections.map((section, index) => (
            <TimelineSection key={section.timeRange} index={index} {...section} />
          ))}
        </div>
      </div>
    </main>
  );
}
