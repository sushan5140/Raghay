"use client";

import { useMemo, useState } from "react";
import { partnerCategories, partnerDialogues } from "@/data/partner-marathi";
import { playMarathi } from "@/lib/speech";

export default function PartnerMarathi() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [showRomanization, setShowRomanization] = useState(true);
  const [playing, setPlaying] = useState<string | null>(null);

  const category = partnerCategories.find((item) => item.id === activeCategory) || null;

  const filtered = useMemo(() => {
    const source = activeCategory === "all"
      ? partnerCategories.flatMap((group) =>
          group.phrases.map((item) => ({ ...item, categoryTitle: group.title }))
        )
      : (category?.phrases || []).map((item) => ({ ...item, categoryTitle: category?.title || "" }));

    const q = query.trim().toLowerCase();
    if (!q) return source;

    return source.filter((item) =>
      [item.marathi, item.devanagari, item.english, item.note || "", item.categoryTitle]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [activeCategory, category, query]);

  async function play(text: string, key: string) {
    if (playing) return;
    setPlaying(key);
    try {
      await playMarathi(text);
    } finally {
      setPlaying(null);
    }
  }

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Partner Marathi</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Everyday Marathi for someone close to you</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          A separate phrase bank for daily check-ins, affection, care, small disagreements, apologies, plans, and short relationship conversations. Gender-specific forms are shown where they matter.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="#phrases"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            Browse phrases
          </a>
          <a
            href="#dialogues"
            className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-ink"
          >
            Mini conversations
          </a>
        </div>
      </section>

      <section id="phrases" className="mt-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Phrase bank</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">Find the line you want fast</h2>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search: miss you, lunch, sorry..."
              className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-primary/40"
            />
            <button
              onClick={() => setShowRomanization((value) => !value)}
              className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-ink"
            >
              {showRomanization ? "Hide romanization" : "Show romanization"}
            </button>
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => {
              setActiveCategory("all");
              setQuery("");
            }}
            className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "border border-black/10 bg-white text-ink"
            }`}
          >
            All
          </button>
          {partnerCategories.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCategory(item.id);
                setQuery("");
              }}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition ${
                activeCategory === item.id
                  ? "bg-primary text-white"
                  : "border border-black/10 bg-white text-ink"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-black/5 bg-offwhite p-4">
          <p className="font-display text-lg font-semibold text-ink">
            {activeCategory === "all" ? "All phrases" : category?.title}
          </p>
          <p className="mt-1 text-sm text-muted">
            {activeCategory === "all"
              ? "Search or browse every Partner Marathi phrase from every category in one place."
              : category?.description}
          </p>
        </div>

        <div className="mt-4 grid gap-3">
          {filtered.map((item, index) => (
            <div key={`${item.devanagari}-${index}`} className="rounded-xl border border-black/5 bg-white p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold leading-8 text-ink">{item.devanagari}</p>
                  {showRomanization && (
                    <p className="mt-1 text-sm leading-6 text-primary">{item.marathi}</p>
                  )}
                  <p className="mt-2 text-sm leading-6 text-muted">{item.english}</p>
                  {activeCategory === "all" && (
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-terracotta">
                      {item.categoryTitle}
                    </p>
                  )}
                  {item.note && (
                    <p className="mt-2 rounded-lg bg-offwhite px-3 py-2 text-xs leading-5 text-muted">{item.note}</p>
                  )}
                </div>
                <button
                  onClick={() => play(item.devanagari, `${activeCategory}-${index}`)}
                  disabled={Boolean(playing)}
                  className="shrink-0 rounded-lg border border-primary/15 px-3 py-2 text-xs font-semibold text-primary disabled:opacity-40"
                >
                  {playing === `${activeCategory}-${index}` ? "Playing…" : "▶ Hear"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {!filtered.length && (
          <div className="mt-4 rounded-xl bg-offwhite p-5 text-sm text-muted">
            No phrase in this category matched that search. Try another category or a shorter word.
          </div>
        )}
      </section>

      <section id="dialogues" className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Mini conversations</p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-ink">See how the phrases fit together</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          These are short learning examples, not scripted roleplay. Read both sides, then reuse the sentence patterns in your own messages.
        </p>

        <div className="mt-5 space-y-5">
          {partnerDialogues.map((dialogue, dialogueIndex) => (
            <article key={dialogue.title} className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{dialogue.title}</h3>
                  <p className="mt-1 text-sm text-muted">{dialogue.situation}</p>
                </div>
                <button
                  onClick={async () => {
                    const key = `dialogue-${dialogueIndex}`;
                    if (playing) return;
                    setPlaying(key);
                    try {
                      for (let i = 0; i < dialogue.lines.length; i += 1) {
                        const line = dialogue.lines[i];
                        await playMarathi(line.devanagari, i % 2 === 0 ? "female" : "male");
                      }
                    } finally {
                      setPlaying(null);
                    }
                  }}
                  disabled={Boolean(playing)}
                  className="rounded-lg border border-primary/15 px-3 py-2 text-xs font-semibold text-primary disabled:opacity-40"
                >
                  {playing === `dialogue-${dialogueIndex}` ? "Playing…" : "▶ Play dialogue"}
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {dialogue.lines.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className={`max-w-[92%] rounded-xl p-4 ${
                      line.speaker === "A" ? "mr-auto bg-offwhite" : "ml-auto bg-primary/5"
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Speaker {line.speaker}</p>
                    <p className="mt-1 text-base leading-7 text-ink">{line.devanagari}</p>
                    {showRomanization && (
                      <p className="mt-1 text-sm leading-6 text-primary">{line.romanized}</p>
                    )}
                    <p className="mt-1 text-sm leading-6 text-muted">{line.english}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl bg-offwhite p-5">
        <p className="text-sm leading-6 text-muted">
          Quick tip: Marathi changes some forms based on the speaker or the person you are talking to. Where that changes the meaning, the page gives both male/female versions instead of pretending one form works for everyone.
        </p>
      </section>
    </div>
  );
}
