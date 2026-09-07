export const projects = [
  {
    period: '2026',
    name: 'Firaasat',
    role: 'Team of 3 — owned the Admin Command Center',
    description:
      'An AI intelligence layer for a multi-vendor marketplace. I built the risk-scoring engine, fraud-ring detection, anomaly detection, and an AI-drafted dispute assistant that only ever suggests — a human always approves the outcome.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Claude API'],
    metrics: ['40 tests passing', '65% smaller bundle'],
    live: 'https://firaasat.vercel.app',
    code: 'https://github.com/OBAID-DAFTANI/firaasat',
    caseStudy: {
      problem:
        'A multi-vendor marketplace has no reliable way to flag risky orders or coordinated fraud rings before money moves — manual review does not scale past a handful of admins.',
      approach:
        'I owned the Admin Command Center: a risk-scoring engine that flags suspicious orders, an anomaly-detection layer that surfaces patterns across vendors, and an AI-drafted dispute assistant.',
      challenge:
        'Keeping AI strictly advisory was the hard part — the assistant drafts a suggested outcome, but every refund or dispute resolution still requires a human admin to approve it before anything touches money.',
      solution:
        'Deterministic, testable code makes every scoring and fraud-detection decision — AI only phrases the suggestion. This kept the system auditable and explainable, backed by a passing test suite.',
    },
  },
  {
    period: '2026',
    name: 'TalentMatch AI',
    role: 'Solo build',
    description:
      'A three-service recruitment platform. Semantic matching runs on sentence-transformer embeddings with a fuzzy-matching fallback, and every score returns a plain-English breakdown instead of a black-box number.',
    stack: ['React', 'Node.js', 'FastAPI', 'MongoDB'],
    metrics: ['3-service architecture'],
    live: 'https://talentmatch-ai-iota.vercel.app',
    code: 'https://github.com/OBAID-DAFTANI/talentmatch-ai',
  },
  {
    period: '2025',
    name: 'TaskFlow',
    role: 'Solo build',
    description:
      'A real-time Kanban board where every move, edit, and comment syncs instantly. Fixed a race condition between API responses and live broadcasts by making client state updates idempotent.',
    stack: ['Next.js 14', 'MongoDB', 'Pusher'],
    metrics: ['Real-time sync'],
    live: 'https://taskflow-green-tau.vercel.app',
    code: 'https://github.com/OBAID-DAFTANI/taskflow',
  },
  {
    period: '2025',
    name: 'Scholar Pizza',
    role: 'Solo build',
    description:
      'A full ordering platform with a 60+ item menu and WhatsApp checkout. Orders persist to MongoDB before handoff, so an order is never lost even if WhatsApp fails to open.',
    stack: ['React', 'Node.js', 'MongoDB'],
    metrics: ['60+ item catalog'],
    live: 'https://scholar-pizza.vercel.app',
    code: 'https://github.com/OBAID-DAFTANI/scholar-pizza',  },
]
