# Marathi Mate — True Intermediate Milestone Plan

## Target
Move Marathi Mate beyond A1/A2-style foundations into a genuine intermediate-learning experience. The milestone should require learners to connect ideas, control time reference, understand postpositions/case-like patterns, read short passages, follow longer audio, and produce their own Marathi rather than only recognizing phrases.

## Scope

### 1. Grammar control
Add structured lessons for:
- simple past awareness and common completed-action forms
- future plans and intention
- postpositions / location and relationship patterns
- connectors: because, but, so, then
- opinions, preferences, reasons
- conversation repair and clarification

### 2. Connected comprehension
Intermediate lessons should include short passages and dialogues, not only isolated phrases.

### 3. Longer listening
Use the existing Marathi TTS route to play complete dialogue / reading passages.

### 4. Production
Add guided free-response prompts. The app should show useful target patterns and let the learner compare their own answer rather than pretending to perfectly grade unrestricted Marathi.

### 5. Scenario comprehension
Add context questions based on a short dialogue or passage.

### 6. Course architecture
Add Units 7–9 while preserving all earlier lessons, adaptive review, and local progress.

## Implementation order
1. Extend lesson data model for reading/dialogue/production material.
2. Add reusable IntermediateLab component.
3. Add Units 7–9 curriculum.
4. Integrate intermediate lab into lesson pages only when a lesson provides intermediate material.
5. Update course positioning.
6. Verify production build and live routes.

## Completion criteria
- Units 7–9 are present.
- At least six true-intermediate lessons exist.
- Intermediate lessons include connected reading/listening.
- Learners receive context comprehension questions.
- Learners receive guided free-production prompts.
- Existing adaptive review still builds.
- Production reaches READY.


## Milestone status — completed

Implemented:
- Units 7–9 with six true-intermediate lessons
- past-event awareness and narration
- future forms and intentions
- postpositions / relationship patterns
- connectors and reasons
- opinions and preferences
- conversation clarification / repair
- connected reading passages in every intermediate lesson
- full-passage Marathi listening through the existing TTS route
- context-comprehension questions attached to passages
- guided free-response production with support patterns
- intermediate lab integrated into lesson pages
- course positioning updated toward true intermediate progression
- stable production route verified serving Units 7–9
- live intermediate lesson verified rendering connected input, listening, comprehension, and production sections

The milestone deliberately stops before advanced-intermediate work such as:
- full tense/person paradigms
- richer case/postposition system
- relative clauses and embedded clauses
- longer authentic reading texts
- open-ended speech recognition / pronunciation scoring
- cross-device account sync
