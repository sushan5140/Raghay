# Marathi Mate

A prototype Marathi learning app: lessons of romanized vocabulary plus a
flashcard practice loop. Structure and design tokens are carried over from
Hallim (blue `#3E63DD`, terracotta `#E8794F`, off-white `#F7F9FB`,
Inter/Outfit).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's here

- `data/lessons.ts` — three starter lessons (Greetings, Numbers 1-10,
  Family), romanized Marathi with English meanings. Add more lessons here.
- `app/page.tsx` — lesson list.
- `app/lessons/[slug]/page.tsx` — vocab list + practice for one lesson.
- `components/Practice.tsx` — flashcard loop (shuffled order, knew it /
  didn't know it, score at the end). Pronunciation currently uses the
  browser's built-in text-to-speech as a placeholder — it is not tuned for
  Marathi and will mispronounce most words.
- `lib/supabase.ts` — unconfigured client, ready for when you add user
  accounts and progress tracking.

## Roadmap (not built yet)

1. **Real pronunciation.** Replace the browser TTS placeholder with either
   licensed native-speaker audio clips per word (fastest to ship) or a
   Marathi-tuned voice model (bigger effort, phase two).
2. **Script.** Version one is romanized only. Devanagari script lessons can
   be added later as a separate track.
3. **Grammar lessons.** Sentence structure and verb conjugation, once
   vocabulary coverage is broader.
4. **Spaced repetition.** Track per-word performance (needs Supabase) and
   resurface words the user got wrong more often.
5. **Accounts + progress.** Wire up `lib/supabase.ts` with a real project,
   add a `progress` table keyed by user + word.
