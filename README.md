# Marathi Mate

A prototype Marathi learning app: lessons of vocabulary (romanized + native
Devanagari script) plus a flashcard practice loop with real Marathi
pronunciation. Structure and design tokens are carried over from Hallim
(blue `#3E63DD`, terracotta `#E8794F`, off-white `#F7F9FB`, Inter/Outfit).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pronunciation setup (Azure Marathi neural voice)

The "Hear it" button uses **Azure AI Speech's dedicated Marathi voices**
(`mr-IN-AarohiNeural`, female / `mr-IN-ManoharNeural`, male) — trained
specifically on Marathi speech, not a generic voice sounding out letters.

To enable it:

1. Create a free Azure account and a **Speech** resource in the
   [Azure Portal](https://portal.azure.com) (Cognitive Services → Speech).
   The free (F0) tier includes a substantial monthly character allowance.
2. Copy the resource's **Key** and **Region** (e.g. `centralindia`,
   `eastus`).
3. Create a `.env.local` file in the project root:

   ```
   AZURE_SPEECH_KEY=your_key_here
   AZURE_SPEECH_REGION=your_region_here
   ```

4. Restart `npm run dev`. Click "Hear it" on any flashcard.

**On Vercel:** add the same two variables under Project Settings →
Environment Variables, then redeploy.

**Without a key configured:** the app still works — it falls back to your
browser's built-in voice (the old placeholder behavior) and shows a small
note under the flashcard saying so, rather than failing.

## What's here

- `data/lessons.ts` — three starter lessons (Greetings, Numbers 1-10,
  Family), each word with romanized text, native Devanagari script, and
  English meaning. Add more lessons here.
- `app/api/tts/route.ts` — server-side route that calls Azure Speech with
  the Devanagari text and returns MP3 audio. Keeps the API key off the
  client.
- `app/page.tsx` — lesson list.
- `app/lessons/[slug]/page.tsx` — vocab list (romanized + Devanagari) +
  practice for one lesson.
- `components/Practice.tsx` — flashcard loop (shuffled order, knew-it/
  didn't-know-it, score at the end), now calling the Marathi voice via
  `/api/tts` with a client-side cache so repeat plays don't refetch.
- `lib/supabase.ts` — unconfigured client, ready for when you add user
  accounts and progress tracking.

## Roadmap (not built yet)

1. **Script track.** Version one teaches romanized text primarily, with
   Devanagari shown alongside. A dedicated script-reading lesson track can
   build on this.
2. **Grammar lessons.** Sentence structure and verb conjugation, once
   vocabulary coverage is broader.
3. **Spaced repetition.** Track per-word performance (needs Supabase) and
   resurface words the user got wrong more often.
4. **Accounts + progress.** Wire up `lib/supabase.ts` with a real project,
   add a `progress` table keyed by user + word.
5. **Pre-cache audio.** Currently each word is synthesized on first play
   per session (then cached client-side). For a bigger vocab set, consider
   pre-generating and storing MP3s (e.g. in Supabase Storage) at build/seed
   time instead of calling Azure live for every new visitor.
