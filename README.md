# Marathi Mate

Marathi Mate is a zero-to-conversational-independence Marathi learning app built with Next.js.

Live app: https://raghay.vercel.app/

## Current course

The guided course now contains **20 units and 55 lessons**, moving from absolute beginner Marathi through functional intermediate and into upper-intermediate conversational independence.

The app combines:

- Romanized Marathi + Devanagari
- staged transition to Devanagari-first reading
- grammar and sentence-pattern teaching
- Marathi TTS pronunciation
- mixed recall exercises
- reading comprehension
- passage and dialogue listening
- long-form natural listening
- multi-turn practical scenarios
- free-response guided conversation
- microphone speech recognition where the browser supports Marathi
- shadowing / speaking practice
- guided and independent writing
- adaptive review
- six-domain mastery tracking
- course checkpoints and assessments

## Conversational Independence systems

### Speaking Lab — /speaking

12 progressive shadowing drills provide:

- Marathi model audio
- Devanagari-first target text
- optional romanization and English
- browser microphone speech recognition when available
- typed fallback
- recognition-match scoring
- pattern-transfer prompts for creating a new sentence instead of copying the model

The score is explicitly a speech-recognition match, not a phonetic pronunciation certification.

### Natural Listening — /listening

Four longer learner-oriented tracks target roughly 2–4 minutes of connected input.

The flow is:

1. listen without transcript
2. answer the main-idea question
3. optionally reveal transcript
4. answer detail / sequence / inference questions
5. review the English summary only if needed

Tracks can use segmented alternating Marathi voices.

### Conversation Mode — /conversation

Eight longer guided conversation scenarios include:

- college / study
- weekend planning
- travel problems
- café interactions
- shopping / exchanges
- meeting someone new
- explaining a delay
- opinion / recommendation

Learners can respond by voice or text. The session keeps the conversation history and adapts support based on response length, target-language coverage, and use of repair strategies.

### Mastery — /mastery

Mastery combines evidence from six domains:

- Vocabulary
- Grammar
- Reading
- Listening
- Speaking
- Conversation

It also generates a **Today’s 10-minute Marathi session** with listening, shadowing, conversation, and review.

## Upper-intermediate course layer

Units 17–20 add practical language for:

- reported speech
- habitual past
- certainty, doubt, and possibility
- advice and recommendation
- polite disagreement
- linked-action / participial patterns
- paragraph organisation
- informal vs respectful register
- independent 80–150 word production
- conversation repair and paraphrasing

## Lesson flow

Structured lessons use:

1. Learn
2. Understand
3. Read & Listen
4. Practice
5. Produce
6. Review

Not every beginner lesson needs every step. Later lessons use the full sequence.

## Adaptive review

Learning state is local-first.

The app tracks:

- completed lessons
- phrase correct / incorrect history
- grammar skill performance
- reading mistakes
- listening mistakes
- scenario performance
- speaking attempts
- conversation quality
- spaced-review due times
- assessment attempts
- last active lesson
- writing drafts

## Assessments

Checkpoint routes live under /checkpoints/[slug].

The curriculum includes the completed intermediate checkpoints plus a **Conversational Independence Checkpoint** after Unit 20.

Open writing remains self-checked using requirements and model comparison rather than pretending simple string matching can reliably grade unrestricted Marathi.

## Pronunciation and speech

app/api/tts/route.ts uses Azure AI Speech Marathi neural voices when configured:

- mr-IN-AarohiNeural
- mr-IN-ManoharNeural

Environment variables:

AZURE_SPEECH_KEY=your_key
AZURE_SPEECH_REGION=your_region

When Azure is unavailable, the client falls back to browser Marathi speech using Devanagari with the mr-IN language tag.

Microphone transcription uses the browser SpeechRecognition / webkitSpeechRecognition API when available. Browser support varies, so all speaking and conversation systems retain typed fallback.

## Run locally

npm install
npm run dev

Then open http://localhost:3000.

## Important files

- data/lessons.ts — lesson model + core course
- data/intermediate-completion.ts — Units 10–16
- data/upper-intermediate.ts — Units 17–20
- data/speaking.ts — shadowing drills
- data/conversation.ts — longer conversation scenarios
- data/natural-listening.ts — long-form listening tracks
- data/assessments.ts — checkpoints
- components/SpeakingLab.tsx
- components/ConversationCoach.tsx
- components/NaturalListeningLab.tsx
- components/MasteryDashboard.tsx
- lib/speech.ts — browser speech recognition + Marathi playback helpers
- lib/progress.ts — local mastery / spacing / speaking / conversation progress
- docs/FULL_INTERMEDIATE_AUDIT_PLAN.md
- docs/CONVERSATIONAL_INDEPENDENCE_PLAN.md
- docs/LANGUAGE_QA.md

## Intentionally later

The next phase can focus on true upper-intermediate / natural-media immersion:

- substantially more authentic native audio/video
- speech recording playback and acoustic pronunciation analysis
- richer unscripted AI conversation
- advanced grammar and idiomatic language
- Supabase accounts and cross-device sync
- native-speaker editorial polish
