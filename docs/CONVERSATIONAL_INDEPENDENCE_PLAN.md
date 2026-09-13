# Marathi Mate — Conversational Independence Milestone

## Goal

Move the learner from functional intermediate Marathi to upper-intermediate conversational independence.

This milestone is not mainly about adding more lesson cards. It is about making the learner use Marathi for longer stretches with less English and less romanization.

A learner completing this milestone should be able to:

- sustain a guided 5–10 minute Marathi conversation on familiar topics
- understand 2–4 minute learner-oriented Marathi listening
- read practical Devanagari-first messages, stories, posts, and notices
- write roughly 80–150 words on familiar topics
- explain experiences, plans, reasons, preferences, problems, and opinions
- repair misunderstandings without switching immediately to English
- respond by voice or text in practical conversations
- see a cross-skill mastery profile rather than only lesson completion

## Systems to build

### 1. Speaking Lab
- browser microphone speech recognition where supported
- typed fallback everywhere
- shadowing drills
- Marathi TTS model playback
- transcript comparison
- recognition-match score
- speaking attempts saved locally
- clearly label score as speech-recognition match, not phonetic pronunciation certification

### 2. Guided Conversation Mode
- longer multi-turn conversations
- free text or speech replies
- conversation history remembered during the session
- response coaching based on intent/keywords, length, and repair strategies
- adaptive support: stronger learners see less scaffolding
- practical scenarios rather than romance or roleplay

Required conversation themes:
- college / study
- weekend planning
- travel problem
- café / service
- shopping / exchange
- meeting someone new
- explaining a delay/problem
- opinions and recommendations

### 3. Natural Listening Track
- 2–4 minute learner-oriented tracks
- multiple segments and speakers where appropriate
- first-pass gist before transcript
- detail / sequence / inference questions
- transcript only after an attempt
- Devanagari first
- replay limits
- listening results stored in mastery

### 4. Upper-Intermediate Language Layer
Add controlled teaching for:
- reported speech
- habitual past
- certainty / doubt / possibility
- advice and recommendation
- polite disagreement
- richer register control
- participial / linked-action patterns
- richer connectors and paragraph organisation

These remain practical, context-first lessons rather than grammar tables.

### 5. Mastery System
Track and display:
- Vocabulary
- Grammar
- Reading
- Listening
- Speaking
- Conversation

Provide:
- domain percentages where enough evidence exists
- attempt counts
- weak-domain recommendations
- a Today’s 10-minute Marathi session

## Course architecture

Extend the lesson path through Units 17–20 while also adding standalone practice systems:
- Unit 17 — Report & retell
- Unit 18 — Nuance & stance
- Unit 19 — Connected expression
- Unit 20 — Conversational independence

The standalone systems are:
- /speaking
- /listening
- /conversation
- /mastery

## Completion criteria

Do not report this milestone complete until:

1. Speaking Lab works with microphone recognition where browser support exists.
2. Speaking Lab has typed fallback and model audio.
3. Recognition-match results persist locally.
4. At least 12 shadowing/speaking drills exist.
5. Conversation mode includes at least 8 multi-turn scenarios.
6. Conversation sessions accept voice or typed free responses.
7. Conversation support adapts based on learner response quality.
8. Conversation history is retained during the session.
9. At least 4 long-form listening tracks exist.
10. Listening tracks use gist-before-transcript flow.
11. Listening tracks include detail/inference questions.
12. Units 17–20 add upper-intermediate language coverage.
13. Learners produce longer connected responses.
14. Mastery dashboard covers six domains.
15. Today’s 10-minute session exists.
16. Navigation exposes the new systems without breaking mobile layout.
17. Existing beginner/intermediate lessons and review continue to build.
18. Production build passes.
19. Stable Vercel deployment is READY.
20. Key live routes are verified.

## Reporting rule

Continue through the full milestone without phase-by-phase reports. Report only when the milestone is complete and verified, or if genuine user action is required.


---

# Milestone Status — COMPLETE

The Conversational Independence milestone has been implemented and verified.

## Delivered

### Speaking Lab
- 12 progressive Marathi shadowing drills
- model Marathi audio
- Devanagari-first presentation
- optional romanization / English
- browser Marathi speech recognition where supported
- typed fallback
- recognition-match scoring
- local speaking-attempt persistence
- transfer prompts that require changing the model instead of only copying it

The speaking score is intentionally described as a speech-recognition match rather than a phonetic pronunciation grade.

### Guided Conversation
- 8 longer practical scenarios
- each targets roughly 5–9 minutes when the learner answers in connected speech
- free text or microphone input
- conversation history retained throughout the session
- functional response scoring
- support automatically expands after weak responses and stays reduced after stronger responses
- repair phrases such as asking for repetition / slower speech are recognised as useful conversational behaviour
- scenario session / turn quality persisted locally

Scenarios cover:
- college
- weekend plans
- travel problems
- café service
- shopping / exchange
- meeting someone new
- explaining a delay
- opinions / recommendations

### Natural Listening
- 4 long-form learner-oriented listening tracks
- roughly 2–4 minute target duration depending on voice / browser playback
- segmented playback
- multiple speakers where appropriate
- maximum two full plays
- gist question before transcript
- transcript reveal only after the first attempt
- detail / sequence / inference questions
- results feed the listening mastery domain

### Upper-intermediate language
Units 17–20 add 8 lessons covering:
- reported speech
- habitual past
- certainty / doubt / possibility
- advice
- polite disagreement
- linked-action / participial patterns
- paragraph organisation
- informal / respectful register
- conversation repair
- independent 80–150 word production

The guided course now contains 20 units and 55 lessons.

### Mastery
A new six-domain dashboard tracks:
- Vocabulary
- Grammar
- Reading
- Listening
- Speaking
- Conversation

It calculates domain scores only from actual learner evidence and includes a daily 10-minute session:
- 2 min listening
- 2 min speaking
- 3 min conversation
- 3 min adaptive review

### Assessment
- existing intermediate checkpoints preserved
- Conversational Independence Checkpoint added after Unit 20
- total assessment/checkpoint routes: 9

## Technical verification

Final implementation build verified:
- Next.js 14.2.35 production build compiled successfully
- lint / type validity checks passed
- 74 static pages generated
- 55 lesson paths generated
- 9 checkpoint paths generated
- /speaking generated
- /listening generated
- /conversation generated
- /mastery generated
- /review preserved
- stable production URL remains https://raghay.vercel.app/
- production deployment reached READY
- no alias error
- live HTTP 200 verified for:
  - homepage
  - Speaking Lab
  - Natural Listening
  - Conversation Mode
  - Mastery
  - Review
  - representative Unit 17 lesson
  - representative Unit 20 lesson
  - Conversational Independence Checkpoint
- no production runtime errors reported during the final verification window

## Speech support note

Microphone transcription uses the browser SpeechRecognition / webkitSpeechRecognition API with mr-IN when available. Browser support varies, therefore typed fallback is permanent and intentional.

Azure Marathi neural speech remains supported by the existing TTS route. If production Azure credentials are absent, browser Marathi speech using Devanagari + mr-IN remains the fallback.

## Intentionally outside this milestone

The following belong to the next milestone rather than being blockers:
- truly unscripted LLM conversation
- acoustic pronunciation / phoneme scoring
- learner voice recording playback
- authentic native media at substantially higher speed
- advanced idioms / colloquial registers
- Supabase cross-device accounts and sync
- native-speaker editorial polish

All completion criteria in this document are now satisfied.
