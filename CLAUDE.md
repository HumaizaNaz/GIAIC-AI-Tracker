# GIAIC AI Study Tracker — Claude Instructions

## Project Overview
15-day GIAIC AI study tracker. Next.js 16 + Tailwind v4 + shadcn/ui. Dark green theme. Mobile responsive. Deployed on Vercel.

## Study Plan Structure
- **Day 0 (Today):** Quick Crash Course — overview using backbencher-style prompt
- **Days 1–6:** Section I (Thesis), II (Getting Started), III (AI Prompting) + Revision
- **Day 7:** EXAM 1 — P1-AFAP
- **Days 8–13:** Section IV (Claude Code), V (Problem Solving) + Revision  
- **Day 14:** Revision IV–V
- **Day 15:** EXAM 2 — P2-GAPS

## Key Files
| File | Purpose |
|------|---------|
| `data/schedule.ts` | 15-day content (topics, links) |
| `data/translations.ts` | EN/RU/UR UI strings |
| `app/page.tsx` | Main page — `questions` object is where quiz goes |
| `components/tabs/StudyTab.tsx` | Study content + AI notes |
| `components/tabs/NotesTab.tsx` | Free write + structured notes |
| `components/tabs/QuizTab.tsx` | 20 MCQ per day |

## Daily Agent Task (run each day before studying)
When user says "generate Day N" or "aaj ka content banao":

1. **Scrape** the day's study link from `schedule.ts`
2. **Generate notes** using the backbencher prompt (see below) — save to `data/days/day-N-notes.ts`
3. **Generate 20 scenario-based MCQ questions** — add to `questions` object in `app/page.tsx`
4. **Update** `day.notes[lang]` in `data/schedule.ts` for the crash course day

## Backbencher Prompt (for Quick Crash Course + Day notes)
```
You are an Agentic AI expert and my best teacher. Explain the content in:
- 3-line smart strategy summary first
- Chain of thought reasoning  
- Complex words explained in brackets
- Each section in two 5-liner paragraphs
- Fun, engaging tone — no boring text
```

## Quiz Question Format
Add to `questions` object in `app/page.tsx`:
```typescript
5: [ // day number
  {
    id: 'q5-1',
    day: 5,
    question: { en: '...', ru: '...', ur: '...' },
    options: [
      { en: 'Option A', ru: '...', ur: '...' },
      { en: 'Option B', ru: '...', ur: '...' },
      { en: 'Option C', ru: '...', ur: '...' },
      { en: 'Option D', ru: '...', ur: '...' },
    ],
    correct: 0, // index 0-3
    explanation: { en: '...', ru: '...', ur: '...' }
  }
]
```

## Colors (Tailwind v4 custom)
- `bg-gbg` — #0d3320 (main background)
- `bg-gsidebar` — #122d1e (sidebar)
- `bg-gcard` — #1a5c35 (cards)
- `bg-gactive` — #216b3f (active state)
- `text-gprimary` — #6ee7a0 (primary green text)
- `text-gsecond` — #a7f3c0 (secondary text)

## Vercel Deploy
```bash
cd giaic-study-tracker
vercel --prod
```

## Exam Links
- **EXAM 1 & 2:** https://docs.google.com/document/d/1CmWxh5DJ0zISPM8ovOdkZZQpKb0b_RRASoB6h5E0oSs/edit?usp=sharing
- **Orientation Slides:** https://docs.google.com/presentation/d/1SqfhQwbi7Waa2DKElS3KWoFwKLfJLzssxJ_6tSu2dy4/edit?usp=sharing
