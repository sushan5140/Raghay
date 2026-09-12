# Marathi Mate

Marathi Mate is a zero-to-functional-intermediate Marathi learning app built with Next.js.

Live app: https://raghay.vercel.app/

## Course

The current course contains **16 units and 47 lessons**. It moves from first phrases into connected intermediate Marathi rather than stopping at vocabulary drills.

The path includes:

- Romanized Marathi + Devanagari
- staged transition to Devanagari-first reading
- grammar and sentence-pattern teaching
- Marathi neural pronunciation
- mixed recall exercises
- reading comprehension
- passage and dialogue listening
- multi-turn practical scenarios
- guided and independent writing
- adaptive phrase / grammar / reading / listening review
- course checkpoints
- final intermediate assessment

Later lessons cover practical intermediate areas including:

- completed past and past negation
- future, negative future, plans, wants, needs, and obligation
- ability and permission
- postpositions, recipient patterns, and possession
- comparison, quantity, and degree
- cause/result, contrast, concession, and conditions
- relative/correlative patterns
- longer listening and Devanagari-first practical reading
- study/work, travel, café, shopping, directions, invitations, and everyday appointment language

## Lesson flow

Lessons use a step-based experience instead of one long page:

1. Learn
2. Understand
3. Read & Listen
4. Practice
5. Produce
6. Review

Not every early lesson needs every step; later intermediate lessons use the full flow.

## Adaptive review

Learning state is currently local-first.

The app tracks completed lessons, phrase history, grammar skills, reading/listening mistakes, scenario performance, spaced-review due times, assessment attempts, the last active lesson, and production drafts.

The /review page surfaces what is actually weak or due.

## Assessments

Checkpoint routes live under /checkpoints/[slug].

The course includes foundation, connected-speech, time-control, relationship/comparison, linking-ideas, independent-comprehension, functional-independence, and final-intermediate assessments.

The final assessment combines grammar/usage, Devanagari reading, listening, and connected writing.

Open writing is self-checked using requirements and model comparison. Marathi Mate does not pretend simple string matching can reliably grade unrestricted Marathi.

## Pronunciation

app/api/tts/route.ts uses Azure AI Speech Marathi neural voices:

- mr-IN-AarohiNeural
- mr-IN-ManoharNeural

Environment variables:

AZURE_SPEECH_KEY=your_key
AZURE_SPEECH_REGION=your_region

The browser voice remains a fallback when Azure is unavailable.

Listening practice also supports replay limits, hidden transcripts, client audio caching, segmented dialogue playback, and alternating Marathi neural voices for supported dialogues.

## Run locally

npm install
npm run dev

Then open http://localhost:3000.

## Important files

- data/lessons.ts — core course model + Units 1–9
- data/intermediate-completion.ts — full intermediate curriculum extension
- data/assessments.ts — checkpoints and final assessment
- components/LessonFlow.tsx — step-based lesson experience
- components/ReadingLab.tsx — staged reading comprehension
- components/ListeningLab.tsx — cached passage/dialogue listening
- components/ScenarioPractice.tsx — branched multi-turn conversation practice
- components/ProductionTask.tsx — connected learner writing
- components/ReviewDashboard.tsx — adaptive cross-skill review
- lib/progress.ts — local progress and spacing logic
- docs/FULL_INTERMEDIATE_AUDIT_PLAN.md — authoritative milestone plan
- docs/LANGUAGE_QA.md — language consistency audit

## After the intermediate milestone

Intentionally post-intermediate work:

- Supabase accounts and cross-device sync
- advanced grammar beyond the functional-intermediate scope
- speech recognition / pronunciation scoring
- richer authentic-media listening
- native-speaker editorial polish
