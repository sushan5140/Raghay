# Marathi Mate — Intermediate-Ready Audit Plan

## Target
Bring Marathi Mate from a beginner vocabulary prototype to a coherent beginner-to-intermediate learning path. The target is not full fluency; it is an app that can take a zero-beginner through practical A1/A2-style Marathi foundations with enough grammar, listening, recall, sentence building, and review to support entry into intermediate material.

## Current strengths
- Guided lesson path
- Romanized Marathi + Devanagari
- Marathi TTS route with browser fallback
- Teaching-point explanations
- Quick checks
- Mixed translation / sentence-building / listening practice
- Flashcard review
- Local lesson completion

## Gaps blocking intermediate readiness

### 1. Curriculum depth
Current content stops after six beginner lessons. Add enough structured material to cover:
- pronouns and respectful address
- possession / “my, your”
- locations and postpositions
- daily routine and common verbs
- food, shopping, quantities, prices
- directions and travel
- present progressive patterns
- simple past/future awareness
- time expressions
- common connectors and useful conversational repair

### 2. Devanagari literacy
Romanization can remain primary, but learners need a lightweight script bridge:
- vowels and common consonants
- reading familiar words
- matching Romanized / Devanagari forms

### 3. Adaptive review
Lesson completion alone is too coarse. Track phrase-level performance locally:
- correct / incorrect counts
- identify weak phrases
- dedicated Review page
- resurface weak phrases

### 4. Exercise coverage
Keep the current four-mode practice lab and ensure later lessons include:
- translation both directions
- listening
- sentence ordering
- context-based comprehension

### 5. Progress architecture
Before accounts/Supabase, use stable local persistence:
- completed lessons
- phrase performance
- weak-word review
- curriculum progress

### 6. UX for a longer course
As lesson count grows:
- clear units
- navigation to Review
- visible “continue learning” direction
- keep the current clean visual system

## Implementation order

### Phase A — Curriculum foundation
Add Units 4–6 with practical lessons:
- Pronouns & Respect
- Possession
- Places & Location
- Daily Routine
- Food & Ordering
- Shopping & Prices
- Directions
- Time & Plans

### Phase B — Script bridge
Add a Devanagari Basics lesson that teaches recognition through familiar words rather than a full alphabet dump.

### Phase C — Phrase-level memory
Add a local progress utility and record results from:
- flashcards
- mixed practice

### Phase D — Personalized Review
Add /review:
- weak phrases
- due-for-review phrases
- focused practice
- empty-state guidance

### Phase E — Course UX
Update homepage/header:
- Review link
- expanded units
- progress wording appropriate for a longer path

### Phase F — Verification
- verify latest GitHub main
- verify Vercel production build reaches READY
- inspect build/runtime errors if deployment fails

## Milestone completion criteria
Intermediate-ready milestone is complete when:
1. Beginner path extends through the new Units 4–6.
2. Script bridge exists.
3. Phrase-level performance is persisted.
4. Personalized Review page works.
5. Existing TTS and exercises remain intact.
6. Production deployment is READY.
