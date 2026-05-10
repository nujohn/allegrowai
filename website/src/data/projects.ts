export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  strengths: string[];
  screenshot: string;
  screenshotAlt: string;
  platform?: string;
  url?: string;
  urlLabel?: string;
  ctaLabel?: string;
}

export const projects: Project[] = [
  {
    slug: 'bobahub',
    name: 'BobaHub',
    tagline: 'Commerce ops across iOS, backend services, and production infrastructure.',
    description:
      `BobaHub is a live full-stack product stack spanning customer and store iOS apps, admin tooling, backend APIs, printing flows, notifications, and production deployment. Recent work included standing up a single-VPS production bundle, wiring domains and TLS, and continuing store-side operational features.`,
    tags: ['Commerce', 'iOS', 'Backend', 'Infra'],
    strengths: [
      'Shipped a live VPS stack with Docker Compose, Caddy, Postgres, Redis, API, and admin web',
      'Advanced iOS store operations: Brother printing, Bonjour discovery, and auto-ready workflows',
      'Implemented APNs order-ready notifications and Apple Pay integration groundwork',
      'Connected real production domains, DNS, HTTPS, and deployment documentation',
    ],
    url: 'https://admin.bobahub.app/login',
    urlLabel: 'admin.bobahub.app',
    ctaLabel: 'View live admin surface',
    screenshot: '/screenshots/bobahub-admin-screen.png',
    screenshotAlt: 'BobaHub admin login interface',
    platform: 'iOS + Web + API',
  },
  {
    slug: 'typingmaster',
    name: 'TypingMaster',
    tagline: 'Fast iteration on gameplay, progression, persistence, and interface polish.',
    description:
      `TypingMaster is a game-like typing app built to feel responsive, motivating, and replayable. Recent work focused on redesigning its evaluation ladder, fixing real persistence bugs, hardening startup/canvas behavior, and improving post-game summaries so the experience feels intentionally crafted instead of merely functional.`,
    tags: ['Game', 'Frontend', 'Product Iteration'],
    strengths: [
      'Redesigned progression into a 7-phase skill-evaluation ladder across 8 tiers',
      'Fixed live progress persistence and restore issues on the public app',
      'Reworked summary/results into a cleaner 3-card layout with clearer celebration states',
      'Stabilized gameplay startup and shared canvas behavior across play modes',
    ],
    screenshot: '/screenshots/typingmaster-screen.png',
    screenshotAlt: 'TypingMaster game home screen',
    platform: 'Web App',
  },
  {
    slug: 'interview-prep',
    name: 'Interview Prep',
    tagline: 'Structured preparation workflows with auth, persistence, and system-design tooling.',
    description:
      `This project combines a guided prep calendar with authenticated notes, attachments, and persistent system-design sessions. Recent work separated the backend into its own service, repaired the public stack, and fixed state-loss issues so progress and diagram work survive real use.`,
    tags: ['AI Workflow', 'Auth', 'System Design'],
    strengths: [
      'Built a separate auth/backend service with register, login, refresh, notes, attachments, and prep-state APIs',
      'Reorganized the project into a cleaner multi-part structure for frontend, backend, and course content',
      'Repaired the public deployment and Cloudflare tunnel flow for reliable remote access',
      'Fixed saved-canvas data loss with regression coverage and verified restored design sessions',
    ],
    url: 'https://interviewlogicprep.baystrings.org',
    urlLabel: 'interviewlogicprep.baystrings.org',
    ctaLabel: 'Open the live prep app',
    screenshot: '/screenshots/interview-prep-screen.png',
    screenshotAlt: 'Interview Prep calendar application',
    platform: 'Web + API',
  },
  {
    slug: 'clockracer',
    name: 'ClockRacer',
    tagline: 'A learning game that treats educational UX like product design, not homework.',
    description:
      `ClockRacer turns analog clock reading into a real game with progression, pressure, and performance feedback. It shows the kind of product work I like doing: sharp loops, measurable improvement, and enough delight that people want to come back.`,
    tags: ['Education', 'Game', 'iOS'],
    strengths: [
      'Cross-platform product spanning browser and native iOS surfaces',
      'Leaderboard, achievements, guest/account progression, and TestFlight-ready release work',
      'Ongoing UX hardening around results flows, shortcuts, and progression state',
      'Educational mechanics framed as a polished consumer experience',
    ],
    url: 'https://clockracer.com',
    urlLabel: 'clockracer.com',
    ctaLabel: 'Visit ClockRacer',
    screenshot: '/screenshots/clockrace-screen.jpg',
    screenshotAlt: 'ClockRacer gameplay interface',
    platform: 'Web + iOS',
  },
  {
    slug: 'strings-platforms',
    name: 'BayStrings + SoCalStrings',
    tagline: 'A repeatable regional content platform for the strings community.',
    description:
      `BayStrings and SoCalStrings are proof that careful curation can scale when the underlying content model is strong. Together they show editorial judgment, repeatable information architecture, and steady operational upkeep — not just a static website launch.`,
    tags: ['Content Platform', 'Community', 'Discovery'],
    strengths: [
      'Built a reusable model for regional cultural discovery rather than one-off pages',
      'Maintained active rolling event windows with verification against official sources',
      'Combined clean public UX with disciplined behind-the-scenes content operations',
      'Expanded the same design language and data model across multiple regions without feeling templated',
    ],
    url: 'https://baystrings.org',
    urlLabel: 'baystrings.org',
    ctaLabel: 'Explore BayStrings',
    screenshot: '/screenshots/baystrings-refresh.png',
    screenshotAlt: 'BayStrings website homepage',
    platform: 'Web Platform',
  },
];
