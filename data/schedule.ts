import type { DayContent } from '@/types'

// Day 0 = Quick Crash Course (Today - before Day 1)
// Days 1-15 = Full study plan starting tomorrow

export const schedule: DayContent[] = [
  {
    id: 0,
    title: {
      en: 'Quick Start Crash Course',
      ru: 'Quick Start Crash Course',
      ur: 'فوری اسٹارٹ کریش کورس',
    },
    section: 'Crash Course',
    type: 'crash-course',
    estimatedTime: '3-4 hrs',
    topics: [
      { en: 'AI Prompting in 2026 (45 min)', ru: 'AI Prompting in 2026 (45 min)', ur: 'AI پرامپٹنگ 2026 (45 منٹ)' },
      { en: 'Agentic Coding Crash Course — Claude Code (90 min)', ru: 'Agentic Coding — Claude Code (90 min)', ur: 'ایجنٹک کوڈنگ — کلاڈ کوڈ (90 منٹ)' },
      { en: 'Problem Solving with General Agents (90 min)', ru: 'Problem Solving with Agents (90 min)', ur: 'جنرل ایجنٹس سے مسئلہ حل (90 منٹ)' },
    ],
    studyLinks: [
      { label: 'Getting Started', url: 'https://agentfactory.panaversity.org/docs/getting-started' },
      { label: 'Thesis — Plain English', url: 'https://agentfactory.panaversity.org/docs/thesis/plain-english' },
      { label: 'Orientation Slides (Wania)', url: 'https://docs.google.com/presentation/d/1SqfhQwbi7Waa2DKElS3KWoFwKLfJLzssxJ_6tSu2dy4/edit?usp=sharing' },
      { label: '📝 Exam Sheet', url: 'https://docs.google.com/document/d/1CmWxh5DJ0zISPM8ovOdkZZQpKb0b_RRASoB6h5E0oSs/edit?usp=sharing' },
    ],
    notes: {
      en: '', // AI generated notes go here (backbencher style)
      ru: '',
      ur: '',
    },
  },
  // ── Days 1–15 (start tomorrow) ──────────────────────────────────────
  {
    id: 1,
    title: { en: 'Thesis — Plain English (Easy)', ru: 'Thesis — Aasaan Urdu mein', ur: 'تھیسس — آسان زبان میں' },
    section: 'I',
    type: 'study',
    estimatedTime: '45 min',
    topics: [
      { en: 'Big Shift: SaaS Tools → AI Workers (Labor-as-a-Service)', ru: 'Badi Tabdeeli: SaaS se AI Workers', ur: 'بڑی تبدیلی: SaaS سے AI ورکرز' },
      { en: '3 Key Terms: AI Worker (Digital FTE), AI-Native Company, Agent Factory', ru: '3 Zaroori Terms: AI Worker, AI-Native Company, Agent Factory', ur: '3 اہم اصطلاحات' },
      { en: '10-80-10 Working Rhythm (Steve Jobs philosophy applied to AI)', ru: '10-80-10 Rule — Steve Jobs philosophy', ur: '10-80-10 اصول' },
      { en: 'Two Layers: Personal Delegate (Layer 1) + AI Workforce (Layer 2)', ru: 'Do Layers: Delegate + Workforce', ur: 'دو تہیں: ڈیلیگیٹ + ورک فورس' },
      { en: 'Two Engagement Modes Overview: Problem-Solving (7 Principles) vs Manufacturing (7 Invariants)', ru: 'Do Modes: Problem-Solving vs Manufacturing', ur: 'دو موڈز کا تعارف' },
    ],
    studyLinks: [
      { label: 'Thesis — Plain English (EN)', url: 'https://agentfactory.panaversity.org/docs/thesis/plain-english' },
      { label: 'Thesis — Plain English (Roman Urdu)', url: 'https://agentfactory.panaversity.org/roman/docs/thesis/plain-english' },
      { label: 'Thesis — Plain English (Urdu)', url: 'https://agentfactory.panaversity.org/ur/docs/thesis/plain-english' },
    ],
    notes: {
      en: `GIAIC L1 Exam Prep — Thesis Plain English (Chunks 1–2)
Exam: P1-AFAP | 7 June 2026 | Source: agentfactory.panaversity.org
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THE BIG SHIFT
Old World (SaaS): Rent software tools | You execute the work | Pay per seat | Human = operator
New World (Agent Factory): Hire AI workers | AI executes | Pay per result | Human = supervisor

─────────────────────────────────────
3 KEY TERMS (memorize these first!)
─────────────────────────────────────
AI Worker / Digital FTE
  → AI system built for one specific job role (customer support, finance, legal)
  → Works 24/7 continuously, no breaks

AI-Native Company (also: Agentic Enterprise)
  → Company where most of the workforce is AI, not human
  → Humans set direction + verify; AI does the execution

Agent Factory
  → The METHOD used to build AI-Native Companies
  → NOT a product — it is a design philosophy / blueprint
  → Like kitchen management approach — you learn and apply it

─────────────────────────────────────
10-80-10 WORKING RHYTHM
─────────────────────────────────────
First 10%  → Human sets direction: goal, limits, budget, spec
Middle 80% → AI Workers execute: use tools, run autonomously
Final 10%  → Human verifies: check, approve or reject

Key: Humans do 20% (10+10). AI does 80%.
Origin: Steve Jobs's management philosophy at Apple.

─────────────────────────────────────
TWO LAYERS OF THE FUTURE COMPANY
─────────────────────────────────────
Layer 1 — Edge Layer (Personal)
  → Your personal AI agent = Delegate
  → Carries your identity, context, preferences
  → Translates your intent → instructions for workforce

Layer 2 — AI Workforce Layer
  → Specialist AI workers doing actual tasks
  → Role-based: each worker has ONE specific job
  → Operates at enterprise scale

BOTH layers needed: "Personal agents without an industrialized workforce are just chatbots with no one to command."

─────────────────────────────────────
TWO ENGAGEMENT MODES
─────────────────────────────────────
Problem-Solving Engagement
  → Solve immediate problem → session ends
  → Examples: fix a bug, analyze a report
  → Tools: Claude Code / OpenCode (engineers), Claude Cowork / OpenWork (domain experts)
  → Governed by: SEVEN PRINCIPLES
  → "Catch today's fish"

Manufacturing Engagement
  → Build a PERMANENT AI worker that keeps running after session ends
  → Output: new AI worker joining the workforce
  → Tools: ALWAYS Claude Code or OpenCode (regardless of background)
  → Governed by: SEVEN INVARIANTS
  → "Build a fishing machine — runs forever"

─────────────────────────────────────
5 CORE PARTS (come back here when confused)
─────────────────────────────────────
1. Human Decision-Maker — sets direction, owns results
2. Personal Delegate (OpenClaw) — your AI representative
3. Management Layer (Paperclip) — workforce operating system
4. AI Workers — Digital FTEs doing actual tasks
5. System of Record — company's official permanent memory

─────────────────────────────────────
KEY GLOSSARY (exam vocab)
─────────────────────────────────────
MCP = "USB for AI" — universal connector for any AI to any tool
Spec = Clear written instruction (goal + limits + budget + metrics)
Skill = Portable ability package (agentskills.io format)
Invariant = Rule that NEVER changes
Reference Implementation = Today's product (replaceable)
Engagement = A single session where human works with general AI agent
Digital FTE = AI built for one specific full-time role

─────────────────────────────────────
2026 EVIDENCE (It's real — not a forecast!)
─────────────────────────────────────
• 4 payment standards already operational (ACP, AP2, x402, MPP)
• Single-digit teams earning $1B+ revenue
• US data centers = $42B/year (first time > offices at $44B)
• Cursor: 35% of product changes made by AI agents

─────────────────────────────────────
CHUNK 1 QUICK REVISION CARDS
─────────────────────────────────────
Card 1: Tools → Workers | SaaS → Labor-as-a-Service | You operate → AI operates, you verify
Card 2: AI Worker=Digital FTE | AI-Native Company=AI majority | Agent Factory=the method
Card 3: 10% Human → 80% AI → 10% Human (Steve Jobs adaptation)
Card 4: Layer 1=Delegate | Layer 2=Workforce | Both needed, neither alone

─────────────────────────────────────
CHUNK 2 QUICK REVISION CARDS
─────────────────────────────────────
Card 5: Problem-Solving=session ends | Manufacturing=permanent worker
Card 6: 5 Parts: Human→Delegate→Management→Workers→System of Record
Card 7: 4 Evidence: Payment systems + $1B teams + Data centers > offices + Cursor 35%
Card 8: MCP="USB for AI" | Spec=careful plan | Invariant=never changes | RefImpl=replaceable`,
      ru: `GIAIC L1 Exam — Thesis Plain English Roman Urdu Notes
Exam: P1-AFAP | 7 June 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BADI TABDEELI
Pehle (SaaS): Tool kharido | Aap khud karo | Per seat fee | Insaan = operator
Ab (Agent Factory): Worker hire karo | AI karta hai | Per result fee | Insaan = supervisor

─────────────────────────────────────
3 ZAROORI WORDS (pehle yeh seekho!)
─────────────────────────────────────
AI Worker / Digital FTE
  → AI jo ek specific job karta hai (customer support, finance, legal)
  → 24/7, bina thake, bina break ke

AI-Native Company (Agentic Enterprise bhi kehte hain)
  → Company jahan zyada tar workers AI hain, insaan nahi
  → Insaan sirf direction dete hain aur check karte hain

Agent Factory
  → Woh METHOD jisse yeh companies banti hain
  → Product NAHI — ek tarika hai, ek philosophy
  → Jaise kitchen management approach — seekhte aur apply karte hain

─────────────────────────────────────
10-80-10 RULE (yeh sabse important hai!)
─────────────────────────────────────
Pehle 10%  → Insaan plan banata hai: goal, limit, budget, spec
Beech 80%  → AI kaam karta hai: tools use karta, khud chalta
Aakhri 10% → Insaan check karta hai: approve ya reject

Key: Insaan sirf 20% karta hai. AI 80% karta hai.
Source: Steve Jobs ki management philosophy se liya gaya.

─────────────────────────────────────
DO LAYERS
─────────────────────────────────────
Layer 1 — Edge Layer (Personal)
  → Aapka personal AI agent = Delegate
  → Aapki identity, context, preferences carry karta hai

Layer 2 — AI Workforce Layer
  → Specialist AI workers — har ek ka ek kaam
  → Enterprise scale pe kaam karte hain

Dono zaroori hain: "Personal agents bina workforce ke chatbot hain jis ko command karne wala koi nahi."

─────────────────────────────────────
DO MODES
─────────────────────────────────────
Problem-Solving:
  Aaj ka masla → AI se hal karwao → Session khatam
  Tools: Claude Code / OpenCode (engineers), Cowork/OpenWork (experts)
  Rules: 7 PRINCIPLES
  "Aaj ki machhli pakad do"

Manufacturing:
  Permanent AI worker banao → Session ke baad bhi chalta rahega
  Tools: HAMESHA Claude Code ya OpenCode (chahe developer ho ya nahi)
  Rules: 7 INVARIANTS
  "Machhli pakadna sikhao — hamesha ke liye"

─────────────────────────────────────
5 CORE PARTS
─────────────────────────────────────
1. Human Decision-Maker → Kya hona chahiye decide karta hai
2. Personal Delegate (OpenClaw) → Aapka AI representative
3. Management Layer (Paperclip) → Workforce ka OS
4. AI Workers → Actual kaam karne wale (Digital FTEs)
5. System of Record → Company ki official memory

─────────────────────────────────────
GLOSSARY
─────────────────────────────────────
MCP = "USB for AI" — universal connector
Spec = Likha hua plan (goal + limits + budget + metrics)
Skill = Portable ability package (agentskills.io)
Invariant = Rule jo KABHI nahi badalta
Reference Implementation = Aaj ka product (kal replace ho sakta hai)
Engagement = Ek session jahan insaan AI ke saath kaam kare

─────────────────────────────────────
2026 SABOOT (Yeh haqeeqat hai — andaza nahi!)
─────────────────────────────────────
• 4 payment systems already kaam kar rahe hain (ACP, AP2, x402, MPP)
• Sirf kuch humans wali companies $1B revenue report kar rahi hain
• US data centers = $42B/year (offices se zyada — pehli baar history mein)
• Cursor: 35% product changes = AI agents ne kiye

─────────────────────────────────────
QUICK REVISION CARDS
─────────────────────────────────────
Card 1: Tools→Workers | SaaS→Labor-as-a-Service | Aap operate→AI operate, aap verify
Card 2: AI Worker=Digital FTE | AI-Native Company=AI majority | Agent Factory=method
Card 3: 10% Insaan → 80% AI → 10% Insaan (Steve Jobs adaptation)
Card 4: Layer 1=Delegate | Layer 2=Workforce | Dono zaroori

Card 5: Problem-Solving=session khatam | Manufacturing=permanent worker
Card 6: 5 Parts: Human→Delegate→Management→Workers→System of Record
Card 7: 4 Saboot: Payment systems + $1B teams + Data centers > offices + Cursor 35%
Card 8: MCP="USB for AI" | Spec=careful plan | Invariant=kabhi nahi badlta`,
      ur: '',
    },
  },
  {
    id: 2,
    title: { en: 'Thesis — Full Version + 7 Invariants Deep Dive', ru: 'Thesis Full + 7 Invariants Detail', ur: 'تھیسس مکمل + 7 ناقابل تبدیل اصول' },
    section: 'I',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: '7 Invariants — Full Deep Dive (Bahasa Indonesia example + Durability Math)', ru: '7 Invariants — Poori detail (Bahasa Indonesia + Math)', ur: '7 ناقابل تبدیل اصول — مکمل تفصیل' },
      { en: 'Production Engine: Specs, Skills, Feedback Loops, MCP', ru: 'Production Engine ke 4 power sources', ur: 'پروڈکشن انجن کے 4 طاقت کے ذرائع' },
      { en: '7 Principles for Problem-Solving Mode (detailed)', ru: '7 Principles ka poora detail', ur: '7 اصول کی مکمل تفصیل' },
      { en: 'Mehndi Mart Worked Example — 5-Step Worker Build', ru: 'Mehndi Mart example — 5 steps', ur: 'مہندی مارٹ مثال — 5 مراحل' },
      { en: 'First-Worker Checklist (all 10 items — all mandatory)', ru: 'First-Worker Checklist — 10 items', ur: 'پہلے ورکر کی چیک لسٹ — 10 آئٹمز' },
    ],
    studyLinks: [
      { label: 'Full Thesis (English)', url: 'https://agentfactory.panaversity.org/docs/thesis' },
      { label: 'Full Thesis (Roman Urdu)', url: 'https://agentfactory.panaversity.org/roman/docs/thesis' },
      { label: 'Full Thesis (Urdu)', url: 'https://agentfactory.panaversity.org/ur/docs/thesis' },
    ],
    notes: {
      en: `GIAIC L1 Exam Prep — Thesis Full: 7 Invariants Deep Dive (Chunks 3–5)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7 PRINCIPLES (Problem-Solving Mode — session-based work)
─────────────────────────────────────
1. Bash is Key — Let AI actually do things (run commands, not just describe)
2. Code as Interface — When precision matters, ask for structured output (tables, lists, code)
3. Verification as Core — ALWAYS check the work. "Looks right" is NOT enough
4. Small Reversible Steps — Break into pieces; save after each step
5. Files = Memory — Chat history disappears. Write anything worth keeping to a file
6. Constraints & Safety — Give limited access first; expand only after seeing correct behavior
7. Observability — Every AI action must be visible (logs, previews, step views)

Formula: Principles 1–5 = daily discipline. Principles 6–7 = safety guardrails.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7 INVARIANTS (Manufacturing Mode — building permanent workers)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rule 1: Human is Principal
  3 things ONLY humans can do:
  1. Judgment & values ("what counts as good enough")
  2. Authority to spend money (resource allocation)
  3. Responsibility for results (accountability)
  Without it: "Unowned system" — nobody accountable, no values, no judge

Rule 2: Every Human Needs a Delegate
  Without delegate → human = BOTTLENECK (system slows to human typing speed)
  Delegate = your "second self running in parallel"
  Other names: Personal Agent, Identic AI (Don Tapscott)
  2026 Ref: OpenClaw

Rule 3: Workforce Needs Management Layer
  7 functions: HIRE / ASSIGN / BUDGET / APPROVE / PERMISSIONS / RECORDS / RETIRE
  Without it: workers repeat work, budgets leak, no audit trail
  Callable: hire_worker(spec) | assign_work(id, task) | retire_worker(id)
  2026 Ref: Paperclip

Rule 4: Each Worker Picks Its Own Engine
  Critical work (legal, money) → expensive, reliable engine
  Routine work (sorting, simple replies) → cheap engine
  Monoculture problem: one engine for all = one bug takes everyone down
  2026 Refs: Dapr Agents | Claude Managed | OpenAI SDK | Cursor SDK

Rule 5: Every Worker Runs Against System of Record
  Context window = TEMPORARY (disappears when session ends)
  System of Record = PERMANENT (customers, orders, money, contracts)
  Without it: AI hallucinate, give contradictory answers, duplicate work
  MCP = "USB for AI" — universal connector (one standard, any tool)
  "Where does this fact live permanently?" — answers this shapes entire design

Rule 6: Workforce Can Grow On Its Own, Under Rules  ← EXAM IMPORTANT!
  BAHASA INDONESIA EXAMPLE:
    Customer writes in Bahasa Indonesian
    → nervous system delivers message
    → management layer detects gap
    → Bahasa-speaking worker auto-created (within rules)
    → reads customer history from System of Record
    → writes + saves reply → customer gets answer
    → new worker stays on team permanently
    → NO HUMAN WAS WOKEN UP
  Guardrails: budget caps | domain restrictions | skill requirements | approval gates
  2026 Ref: Claude Managed Agents

Rule 7: Workforce Runs on a Nervous System  ← EXAM IMPORTANT (MATH!)
  4 Functions:
    1. External Triggers — system wakes workers automatically
       (scheduled time, webhook, customer form, other worker done)
       Without: manual prompting only = chatbot economics
    2. Internal Handoffs — workers pass work to each other without human routing
       Without: human routes every step = bottleneck returns
    3. Durability — THE MATH:
       Without: 6-step × 95% per step = 0.95^6 = 74% success = 1 in 4 FAILS SILENTLY!
       With memoization: ~99.7% success (only failed step retries)
    4. Flow Control — one customer flood doesn't block all others
  2026 Refs: Inngest (main) | Claude Code Routines (coding specialist)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION ENGINE — 4 POWER SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Specs — Carefully written plan: goal + limits + budget + success metrics
   (NOT a casual message — a structured document. Called "spec-driven development")
2. Skills — Portable ability packages (agentskills.io format, like USB for abilities)
   Work across different AI systems without rewriting
3. Feedback Loops — After each result: review → fix mistakes → retain good patterns
4. MCP — Universal AI connector (before: custom per tool; after: one standard for all)

Foundation: System of Record — company's official memory (CRM, ERP, tickets, ledger)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEHNDI MART WORKED EXAMPLE (5 Steps)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Step 1: Write the Spec (Rule 1)
  GOAL: classify tickets → draft reply → hand off complex/hostile cases to humans
  LIMITS: no refund >$100 without human | no delivery date commits | no untrained languages
  BUDGET: $200/month max | 30 sec max per ticket
  METRICS: 80% tickets get useful reply in 5 min | <5% replies need correction

Step 2: Choose System of Record (Rule 5)
  Customer records (CRM) = Read-only
  Order records (Shopify) = Read-only
  Support history (Zendesk) = Read + Write
  Connect all via MCP. Give minimum necessary permissions only.

Step 3: Attach Skills
  Skill 1: Professional support reply (tone, structure, signoff)
  Skill 2: Ticket classification (category rules)
  Skill 3: Reading order records (field meanings)
  Skill 4: When to escalate (anger detection, legal language, complex refunds)

Step 4: Pick Engine + Set Guardrails (Rules 3, 4, 6)
  Engine: Mid-tier (balance reliability and cost for support work)
  Guardrails via Paperclip:
    Budget cap: $200/month — hard stop
    Approval gate: refunds >$100 = human YES required
    Audit trail: every ticket logged (worker actions + cost + timestamp)
    Rate limit: max 50 tickets/minute (prevents budget floods)

Step 5: Verify + Deploy (Rule 7 + Principles)
  Run against 100 historical tickets first
  Check: correct classification? professional replies? appropriate escalations?
  Monitor: every file, every step, every decision (Observability principle)
  Iterate on spec → satisfied → deploy to production
  Inngest feeds real tickets as they arrive

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIRST-WORKER CHECKLIST (all 10 = MANDATORY before launch)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Spec written (goal + limits + budget + metrics)
☐ Principal named (one specific human is accountable)
☐ System of record chosen
☐ MCP connections set (correct permissions only)
☐ Skills attached (portable skill modules loaded)
☐ Engine picked (matches job reliability + cost profile)
☐ Budget cap set (hard monthly limit, management layer enforces)
☐ Audit trail enabled (every action logged, inspectable, replayable)
☐ Approval gates set (risky actions need human YES)
☐ Verification plan ready (process for checking first 100 outputs)

"If every box is ticked → Digital FTE, not a clever toy."`,
      ru: `GIAIC L1 Exam — Thesis Full: 7 Invariants Detail (Chunks 3–5) Roman Urdu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7 PRINCIPLES (Problem-Solving Mode)
─────────────────────────────────────
1. BASH IS KEY → AI ko actually kaam karne do, sirf baat nahi
2. CODE INTERFACE → Structured output maango (tables, lists, code)
3. VERIFICATION → Hamesha check karo — "theek lagta hai" kaafi nahi
4. SMALL STEPS → Chote pieces, har step ke baad save karo
5. FILES = MEMORY → Chat gaayab, files permanent
6. CONSTRAINTS → Pehle limited access, phir dheeray dheeray badhao
7. OBSERVABILITY → Har kaam dikhe — logs, previews, videos

5+2 formula: 1-5 = daily discipline | 6-7 = safety guardrails

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7 INVARIANTS (Manufacturing Mode)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rule 1: Insaan Hi Boss Hai
  3 cheezein jo AI KABHI nahi kar sakta:
  1. Judgment & values ("yeh kaafi acha hai" decide karna)
  2. Paise kharach karna (resources allocate karna)
  3. Results ki zimmedari lena
  Bina: "Unowned system" — koi zimmedaar nahi

Rule 2: Har Insaan Ka Delegate Chahiye
  Bina delegate → Insaan = BOTTLENECK (system human typing speed pe slow)
  Delegate = aapka "parallel self"
  Doosre naam: Personal Agent, Identic AI
  2026 Ref: OpenClaw

Rule 3: Workforce Ka Management Layer Chahiye
  7 kaam: HIRE / ASSIGN / BUDGET / APPROVE / PERMISSIONS / RECORDS / RETIRE
  Bina: workers same kaam do baar, budgets leak, audit trail nahi
  2026 Ref: Paperclip

Rule 4: Har Worker Apna Engine Choose Karta Hai
  Critical kaam → strong engine | Routine → cheap engine
  Monoculture problem: sab ek engine = ek problem sab ko le jaata hai
  2026 Refs: Dapr | Claude Managed | OpenAI SDK | Cursor SDK

Rule 5: Har Worker System of Record Se Kaam Karta Hai
  Context window = TEMPORARY (session khatam, gaayab)
  System of Record = PERMANENT (customers, orders, paise, contracts)
  Bina: hallucinations, contradictions, kaam gum
  MCP = "USB for AI" — universal connector

Rule 6: Workforce Khud Barh Sakti Hai (Rules Ke Andar) ← EXAM MEIN ZAROOR!
  BAHASA INDONESIA EXAMPLE:
    Customer Bahasa Indonesian mein likhta hai
    → nervous system message deta hai
    → management layer gap dekhti hai
    → Bahasa worker auto-create hota hai (rules ke andar)
    → System of Record se customer history parhta hai
    → Reply likhta + save karta hai → Customer ko jawab milta hai
    → KISI INSAAN KO JAGAYA NAHI!
  Guardrails: budget caps | domain restrictions | skill requirements | approval gates
  2026 Ref: Claude Managed Agents

Rule 7: Workforce Ka Nervous System ← EXAM MEIN ZAROOR (MATH!)
  4 kaam karta hai:
  1. External Triggers — system khud uth ke kaam kare
     Bina: manual prompting = chatbot
  2. Internal Handoffs — workers ek doosre ko kaam dein
     Bina: insaan manually route kare = bottleneck
  3. Durability — THE MATH:
     Bina: 6 steps × 95% = 0.95^6 = 74% success = 4 mein se 1 SILENTLY FAIL!
     Ke saath: ~99.7% success (sirf failed step retry karta hai)
  4. Flow Control — ek customer burst baaki ko block na kare
  2026 Refs: Inngest | Claude Code Routines

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION ENGINE — 4 POWER SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. SPECS — Carefully likha hua plan: goal + limits + budget + metrics
2. SKILLS — Portable ability packages (agentskills.io) — USB stick ki tarah
3. FEEDBACK LOOPS — Har result ke baad: review → galtiyan fix → acha retain
4. MCP — Universal connector (pehle: har tool alag; ab: ek standard sab ke liye)

Foundation: System of Record — company ki official memory

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIRST-WORKER CHECKLIST (sab 10 = ZAROORI — launch se pehle)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Spec likhi hai (goal + limits + budget + metrics)
☐ Principal named (ek specific insaan zimmedaar)
☐ System of record chuna hai
☐ MCP connections set hain (sirf zaroorat ki permissions)
☐ Skills attached hain
☐ Engine chuna hai (job ke liye sahi)
☐ Budget cap set hai (hard monthly limit)
☐ Audit trail enabled hai
☐ Approval gates set hain
☐ Verification plan ready hai

"Agar har box tick ho → Digital FTE, clever toy nahi."`,
      ur: '',
    },
  },
  {
    id: 3,
    title: { en: 'Getting Started Overview', ru: 'Shuruaat ka Jaiza', ur: 'شروعات کا جائزہ' },
    section: 'II',
    type: 'study',
    estimatedTime: '45 min',
    topics: [
      { en: 'AI overview — what and why', ru: 'AI ka khulasa', ur: 'AI کا خلاصہ' },
      { en: 'Introduction to Agentic AI', ru: 'Agentic AI ka taruf', ur: 'Agentic AI کا تعارف' },
      { en: 'Understanding the GIAIC roadmap', ru: 'GIAIC roadmap', ur: 'GIAIC روڈ میپ' },
      { en: 'Using the Panaversity platform', ru: 'Panaversity platform', ur: 'Panaversity پلیٹ فارم' },
    ],
    studyLinks: [
      { label: 'Getting Started', url: 'https://agentfactory.panaversity.org/docs/getting-started' },
    ],
  },
  {
    id: 4,
    title: { en: 'AI Prompting 2026 — Part 1', ru: 'AI Prompting 2026 — Hissa 1', ur: 'AI پرامپٹنگ 2026 — حصہ 1' },
    section: 'III',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'What changed in prompting in 2026', ru: '2026 mein prompting kaise badli', ur: '2026 میں پرامپٹنگ کیسے بدلی' },
      { en: 'Zero-shot vs few-shot prompting', ru: 'Zero-shot aur few-shot', ur: 'زیرو شاٹ اور فیو شاٹ' },
      { en: 'System prompts and their role', ru: 'System prompts ka kirdaar', ur: 'سسٹم پرامپٹس کا کردار' },
      { en: 'Chain-of-thought prompting', ru: 'Soch ki zanjeer wali prompting', ur: 'سوچ کی زنجیر والی پرامپٹنگ' },
    ],
    studyLinks: [
      { label: 'AI Prompting 2026', url: 'https://agentfactory.panaversity.org/docs/ai-prompting-2026' },
    ],
  },
  {
    id: 5,
    title: { en: 'AI Prompting 2026 — Part 2', ru: 'AI Prompting 2026 — Hissa 2', ur: 'AI پرامپٹنگ 2026 — حصہ 2' },
    section: 'III',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'Role prompting and persona assignment', ru: 'Role prompting', ur: 'رول پرامپٹنگ' },
      { en: 'Structured output prompting', ru: 'Structured output', ur: 'ساختہ آؤٹ پٹ' },
      { en: 'Prompt chaining for complex tasks', ru: 'Prompt chaining', ur: 'پرامپٹ چیننگ' },
      { en: 'Common prompting mistakes', ru: 'Common ghaltiyan', ur: 'عام غلطیاں' },
    ],
    studyLinks: [
      { label: 'AI Prompting 2026', url: 'https://agentfactory.panaversity.org/docs/ai-prompting-2026' },
    ],
  },
  {
    id: 6,
    title: { en: 'Revision: Sections I–III (Exam Prep)', ru: 'Revision: Section I-III + Exam Prep', ur: 'مراجعت: حصہ I تا III + امتحان کی تیاری' },
    section: 'Review',
    type: 'review',
    estimatedTime: '90 min',
    topics: [
      { en: 'Full Master Revision: All 7 Invariants + All 7 Principles', ru: 'Pura revision: 7 Invariants + 7 Principles', ur: 'مکمل مراجعت: 7 ناقابل تبدیل اصول + 7 اصول' },
      { en: 'Mehndi Mart Worked Example (all 5 steps from memory)', ru: 'Mehndi Mart example — sab 5 steps yaad karo', ur: 'مہندی مارٹ مثال — 5 مراحل' },
      { en: '4 Payment Systems + 2026 Reference Implementations (all names + jobs)', ru: '4 Payment Systems + Reference Implementations', ur: '4 ادائیگی سسٹمز + حوالہ نافذات' },
      { en: 'First-Worker Checklist: all 10 items from memory', ru: 'First-Worker Checklist — 10 items yaad karo', ur: 'پہلے ورکر کی چیک لسٹ' },
      { en: 'Review Getting Started + AI Prompting 2026 key techniques', ru: 'Getting Started + Prompting review', ur: 'شروعات + پرامپٹنگ مراجعت' },
    ],
    studyLinks: [],
    notes: {
      en: `GIAIC L1 — MASTER REVISION (All Chunks)
Exam: P1-AFAP | 7 June 2026 — Tomorrow!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3 KEY TERMS
AI Worker / Digital FTE = AI for one specific role (24/7, no breaks)
AI-Native Company       = AI majority workforce (also: Agentic Enterprise)
Agent Factory           = the METHOD to build it (NOT a product)

10-80-10 RULE
10% Human plans → 80% AI works → 10% Human verifies
(Steve Jobs management philosophy — adapted for AI)

5 CORE PARTS
1. Human Decision-Maker → sets direction, owns results
2. Personal Delegate (OpenClaw) → your AI representative, "parallel self"
3. Management Layer (Paperclip) → hire/assign/budget/approve/permissions/records/retire
4. AI Workers → Digital FTEs doing actual tasks
5. System of Record → company's permanent truth (customers, orders, money, contracts)

TWO MODES
Problem-Solving → 7 Principles → one-time result (session ends)
Manufacturing   → 7 Invariants → permanent AI worker (runs forever)

7 PRINCIPLES (Problem-Solving Mode)
1. Bash is Key         → AI acts, doesn't just talk
2. Code as Interface   → structured output (tables, lists, code)
3. Verification        → ALWAYS check — "looks right" ≠ correct
4. Small Steps         → reversible pieces + save after each step
5. Files = Memory      → chat disappears; files persist
6. Constraints+Safety  → limit access first; earn more later
7. Observability       → everything visible: logs, previews, videos

7 INVARIANTS (Manufacturing Mode)
1. Human is Principal     → judgment + spending authority + accountability (3 things only humans do)
2. Every Human→Delegate   → OpenClaw | without: human = bottleneck
3. Workforce→Management   → Paperclip | without: workers repeat, budgets leak, no audit
4. Per-Worker Engine      → Dapr/Claude Managed/OpenAI SDK/Cursor | monoculture = dangerous
5. System of Record       → MCP="USB for AI" | without: hallucinations + contradictions
6. Workforce Grows→Rules  → Claude Managed Agents | Bahasa Indonesia example!
7. Nervous System         → Inngest | MATH: 74%→99.7% with memoization!

4 PAYMENT SYSTEMS (all live in 2026!)
ACP = OpenAI + Stripe (ChatGPT checkout)
AP2 = Google + 60+ companies (digital permission slip with spending limit)
x402 = Coinbase → Stripe (crypto bridge to conventional payments)
MPP = Micro-Payment Protocol (fractions of cents per second)

2026 REFERENCE IMPLEMENTATIONS
Delegate     → OpenClaw
Management   → Paperclip
Nervous Sys  → Inngest + Claude Code Routines
Growth       → Claude Managed Agents
Skills       → Agent Skills format (agentskills.io)

INVARIANTS VS REFERENCE IMPLEMENTATIONS
Invariants = structural rules that NEVER change
  "Every human needs a delegate" → this rule never changes
Reference Implementations = today's product (REPLACEABLE)
  "OpenClaw" → can be replaced tomorrow, rule remains
KEY: Memorize the JOB each product performs, not the product name!

FIRST-WORKER CHECKLIST (10 items — ALL mandatory)
1. Spec written (goal + limits + budget + metrics)
2. Principal named (accountable human)
3. System of record chosen
4. MCP connections set (minimum permissions)
5. Skills attached
6. Engine picked (matches job requirements)
7. Budget cap set (HARD stop)
8. Audit trail enabled
9. Approval gates set
10. Verification plan ready (100 outputs before launch)

"If every box is ticked → Digital FTE, not a clever toy."

3 THINGS ONLY HUMANS DO
1. Intent (what is wanted)
2. Verification (was it done right?)
3. Outcome ownership (accountability — cannot transfer to AI)

2026 EVIDENCE
• Cursor: 35% product changes by AI agents
• Single-digit teams → $1B+ revenue (already happening)
• US data centers = $42B/year (first time > office construction)
• Big Tech: $600B+ AI infrastructure spend in 2026
• 4 payment standards fully operational

3 FUTURE DIRECTIONS
1. Physical AI Workers → same design, computer gets a body (robots, vehicles)
2. Fully Independent Economic Agents → buy/sell/contract autonomously
3. Portable Workers → move between companies, real AI labor market

THE FINAL LINE
"The rules hold. The tools change. The thesis stands."
Method=Agent Factory | Output=AI-Native Company | Labor=Digital FTEs
Foundation=System of Record | Rules=Seven Invariants`,
      ru: `GIAIC L1 — MASTER REVISION (Sab Chunks) Roman Urdu
Exam: P1-AFAP | 7 June 2026 — KAL HAI!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3 KEY TERMS
AI Worker / Digital FTE = AI jo ek specific role karta hai
AI-Native Company       = AI majority workforce (Agentic Enterprise)
Agent Factory           = METHOD — product nahi, tarika

10-80-10
10% Insaan plan → 80% AI kaam → 10% Insaan verify

5 CORE PARTS
1. Human Decision-Maker
2. Personal Delegate (OpenClaw)
3. Management Layer (Paperclip)
4. AI Workers (Digital FTEs)
5. System of Record

DO MODES
Problem-Solving → 7 Principles → Ek baar ka result
Manufacturing   → 7 Invariants → Permanent AI worker

7 PRINCIPLES
1. Bash is Key (AI actually kaam karo)
2. Code as Interface (structured output)
3. Verification (hamesha check karo)
4. Small Reversible Steps
5. Files = Memory
6. Constraints and Safety
7. Observability

7 INVARIANTS
1. Human is Principal (3 cheezein sirf insaan: judgment + paise + zimmedari)
2. Har Insaan → Delegate (OpenClaw | bina: bottleneck)
3. Workforce → Management (Paperclip | bina: repeat + leak + no audit)
4. Per-Worker Engine (Dapr/Claude/OpenAI/Cursor | monoculture = dangerous)
5. System of Record (MCP="USB for AI" | bina: hallucinations)
6. Workforce Grows → Rules (Claude Managed | Bahasa Indonesia example!)
7. Nervous System (Inngest | MATH: 74% → 99.7%!)

4 PAYMENT SYSTEMS (2026 mein already kaam kar rahe hain!)
ACP = OpenAI + Stripe
AP2 = Google (60+ companies)
x402 = Coinbase/Stripe (crypto se normal)
MPP = Micro-payments (fractions of cents)

2026 REFERENCE IMPLEMENTATIONS
Delegate    → OpenClaw
Management  → Paperclip
Nervous     → Inngest + Claude Code Routines
Growth      → Claude Managed Agents
Skills      → Agent Skills (agentskills.io)

INVARIANTS VS PRODUCTS RULE
Invariant = Kabhi nahi badlega
Product = Kal replace ho sakta hai
Exam tip: Product ka KAAM yaad karo — naam nahi!

FIRST-WORKER CHECKLIST (sab 10 ZAROORI hain)
1. Spec likhi
2. Principal named
3. System of record chuna
4. MCP connections set
5. Skills attached
6. Engine chuna
7. Budget cap set (HARD stop)
8. Audit trail enabled
9. Approval gates set
10. Verification plan ready

FINAL LINE
"The rules hold. The tools change. The thesis stands."`,
      ur: '',
    },
  },
  {
    id: 7,
    title: { en: 'EXAM 1 — P1-AFAP', ru: 'IMTIHAN 1 — P1-AFAP', ur: 'امتحان 1 — P1-AFAP' },
    section: 'Exam',
    type: 'exam',
    estimatedTime: '60 min',
    topics: [
      { en: 'Covers Sections I, II, III', ru: 'Section I, II, III ka imtihan', ur: 'سیکشن I، II، III کا امتحان' },
      { en: '40 scenario-based questions', ru: '40 scenario sawal', ur: '40 منظر نامے والے سوال' },
    ],
    studyLinks: [
      { label: '📝 Exam Link', url: 'https://docs.google.com/document/d/1CmWxh5DJ0zISPM8ovOdkZZQpKb0b_RRASoB6h5E0oSs/edit?usp=sharing' },
    ],
  },
  {
    id: 8,
    title: { en: 'Claude Code & OpenCode — Part 1', ru: 'Claude Code — Hissa 1', ur: 'کلاڈ کوڈ — حصہ 1' },
    section: 'IV',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'What is Claude Code and Agentic Coding', ru: 'Claude Code kya hai', ur: 'کلاڈ کوڈ کیا ہے' },
      { en: 'Setting up Claude Code CLI', ru: 'Claude Code CLI setup', ur: 'CLI سیٹ اپ' },
      { en: 'Basic commands and workflows', ru: 'Basic commands', ur: 'بنیادی کمانڈز' },
      { en: 'File editing and code generation', ru: 'Code generation', ur: 'کوڈ جنریشن' },
    ],
    studyLinks: [
      { label: 'Agentic Coding', url: 'https://agentfactory.panaversity.org/.../agentic-coding' },
    ],
  },
  {
    id: 9,
    title: { en: 'Claude Code & OpenCode — Part 2', ru: 'Claude Code — Hissa 2', ur: 'کلاڈ کوڈ — حصہ 2' },
    section: 'IV',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'MCP servers and tool integrations', ru: 'MCP servers', ur: 'MCP سرورز' },
      { en: 'Slash commands and custom hooks', ru: 'Slash commands', ur: 'سلیش کمانڈز' },
      { en: 'Agentic workflow automation', ru: 'Workflow automation', ur: 'ورک فلو آٹومیشن' },
    ],
    studyLinks: [
      { label: 'Agentic Coding', url: 'https://agentfactory.panaversity.org/.../agentic-coding' },
    ],
  },
  {
    id: 10,
    title: { en: 'Claude Code — Practice Day', ru: 'Claude Code — Mashq', ur: 'کلاڈ کوڈ — مشق' },
    section: 'IV',
    type: 'study',
    estimatedTime: '90 min',
    topics: [
      { en: 'Build a small project with Claude Code', ru: 'Chota project banao', ur: 'چھوٹا پروجیکٹ بنائیں' },
      { en: 'Debugging with agentic tools', ru: 'Bug fix karna', ur: 'بگ ٹھیک کرنا' },
      { en: 'Best practices for agentic coding', ru: 'Best practices', ur: 'بہترین طریقے' },
    ],
    studyLinks: [
      { label: 'Agentic Coding', url: 'https://agentfactory.panaversity.org/.../agentic-coding' },
    ],
  },
  {
    id: 11,
    title: { en: 'Problem Solving with Agents — Part 1', ru: 'Agents se Problem Solving — 1', ur: 'ایجنٹس سے مسئلہ حل — 1' },
    section: 'V',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'What are General Agents', ru: 'General Agents kya hain', ur: 'جنرل ایجنٹس کیا ہیں' },
      { en: 'Agent loops: observe, plan, act', ru: 'Agent loop', ur: 'ایجنٹ لوپ' },
      { en: 'Multi-step problem decomposition', ru: 'Masla ko todna', ur: 'مسئلے کو توڑنا' },
    ],
    studyLinks: [
      { label: 'Problem Solving', url: 'https://agentfactory.panaversity.org/.../problem-solving' },
    ],
  },
  {
    id: 12,
    title: { en: 'Problem Solving with Agents — Part 2', ru: 'Agents se Problem Solving — 2', ur: 'ایجنٹس سے مسئلہ حل — 2' },
    section: 'V',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'Building multi-agent pipelines', ru: 'Multi-agent pipelines', ur: 'ملٹی ایجنٹ پائپ لائنز' },
      { en: 'Human-in-the-loop patterns', ru: 'Insaan ko loop mein rakhna', ur: 'انسان کو لوپ میں رکھنا' },
      { en: 'Real-world agent use cases', ru: 'Asli dunia mein kaam', ur: 'حقیقی دنیا کے کام' },
    ],
    studyLinks: [
      { label: 'Problem Solving', url: 'https://agentfactory.panaversity.org/.../problem-solving' },
    ],
  },
  {
    id: 13,
    title: { en: 'Problem Solving — Scenario Practice', ru: 'Scenario Mashq', ur: 'منظر نامے کی مشق' },
    section: 'V',
    type: 'study',
    estimatedTime: '90 min',
    topics: [
      { en: 'Practice: automate a research task', ru: 'Research task automate karo', ur: 'ریسرچ ٹاسک آٹومیٹ کریں' },
      { en: 'Practice: build a data pipeline agent', ru: 'Data pipeline agent', ur: 'ڈیٹا پائپ لائن ایجنٹ' },
      { en: 'Evaluating agent output quality', ru: 'Agent output quality', ur: 'ایجنٹ آؤٹ پٹ کوالٹی' },
    ],
    studyLinks: [
      { label: 'Problem Solving', url: 'https://agentfactory.panaversity.org/.../problem-solving' },
    ],
  },
  {
    id: 14,
    title: { en: 'Revision: Sections IV–V', ru: 'Revision: Section IV se V', ur: 'مراجعت: حصہ IV تا V' },
    section: 'Review',
    type: 'review',
    estimatedTime: '90 min',
    topics: [
      { en: 'Review all Claude Code concepts', ru: 'Claude Code concepts dobara', ur: 'کلاڈ کوڈ تصورات دوبارہ' },
      { en: 'Review all Agent problem solving', ru: 'Agent problem solving dobara', ur: 'ایجنٹ مسئلہ حل دوبارہ' },
    ],
    studyLinks: [],
  },
  {
    id: 15,
    title: { en: 'EXAM 2 — P2-GAPS', ru: 'IMTIHAN 2 — P2-GAPS', ur: 'امتحان 2 — P2-GAPS' },
    section: 'Exam',
    type: 'exam',
    estimatedTime: '60 min',
    topics: [
      { en: 'Covers Sections IV, V', ru: 'Section IV, V ka imtihan', ur: 'سیکشن IV، V کا امتحان' },
      { en: '40 scenario-based questions', ru: '40 scenario sawal', ur: '40 منظر نامے والے سوال' },
    ],
    studyLinks: [
      { label: '📝 Exam Link', url: 'https://docs.google.com/document/d/1CmWxh5DJ0zISPM8ovOdkZZQpKb0b_RRASoB6h5E0oSs/edit?usp=sharing' },
    ],
  },
]
