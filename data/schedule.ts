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
      { en: 'What is AI and why it matters in 2026', ru: 'AI kya hai aur kyun zaroori hai', ur: 'AI کیا ہے اور کیوں ضروری ہے' },
      { en: 'The shift from tools to agents', ru: 'Tools se Agents tak ka safar', ur: 'ٹولز سے ایجنٹس تک کا سفر' },
      { en: 'Why professionals must learn AI now', ru: 'Professionals ko AI kyun seekhni chahiye', ur: 'پروفیشنلز کو AI کیوں سیکھنی چاہیے' },
      { en: 'GIAIC thesis core argument', ru: 'GIAIC thesis ki badi baat', ur: 'GIAIC تھیسس کی اہم بات' },
    ],
    studyLinks: [
      { label: 'Thesis — Plain English', url: 'https://agentfactory.panaversity.org/docs/thesis/plain-english#start-here-the-whole-thesis-in-2-pages' },
    ],
  },
  {
    id: 2,
    title: { en: 'Thesis — Full Version', ru: 'Thesis — Mukammal Version', ur: 'تھیسس — مکمل ورژن' },
    section: 'I',
    type: 'study',
    estimatedTime: '60 min',
    topics: [
      { en: 'Full thesis deep dive', ru: 'Puri thesis gehri samajh', ur: 'پوری تھیسس کی گہری سمجھ' },
      { en: 'Agentic AI definition and scope', ru: 'Agentic AI ki tarif', ur: 'Agentic AI کی تعریف' },
      { en: 'Economic impact of AI agents', ru: 'AI agents ka maashi asar', ur: 'AI ایجنٹس کا معاشی اثر' },
      { en: 'Pakistan and AI opportunity', ru: 'Pakistan aur AI ka mauka', ur: 'پاکستان اور AI کا موقع' },
    ],
    studyLinks: [
      { label: 'Full Thesis (English)', url: 'https://agentfactory.panaversity.org/docs/thesis' },
      { label: 'Full Thesis (Urdu)', url: 'https://agentfactory.panaversity.org/ur/docs/thesis' },
    ],
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
    title: { en: 'Revision: Sections I–III', ru: 'Revision: Section I se III', ur: 'مراجعت: حصہ I تا III' },
    section: 'Review',
    type: 'review',
    estimatedTime: '90 min',
    topics: [
      { en: 'Review Thesis key points', ru: 'Thesis ke nuktay', ur: 'تھیسس کے نکات' },
      { en: 'Review Getting Started', ru: 'Getting Started dobara', ur: 'شروعات دوبارہ' },
      { en: 'Review all prompting techniques', ru: 'Prompting techniques dobara', ur: 'پرامپٹنگ تکنیکیں دوبارہ' },
    ],
    studyLinks: [],
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
