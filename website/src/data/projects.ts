export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  strengths: string[];
  screenshot: string;
  screenshotAlt: string;
  gallery?: Array<{
    src: string;
    alt: string;
    label?: string;
    mode?: 'default' | 'portrait';
  }>;
  platform?: string;
  url?: string;
  urlLabel?: string;
  ctaLabel?: string;
}

export const projects: Project[] = [
  {
    slug: 'bobahub',
    name: 'BobaHub',
    tagline: 'Commerce ops across iOS, backend services, payments, and production infrastructure.',
    description:
      `BobaHub is a live full-stack commerce stack spanning customer and store iOS apps, admin tooling, backend APIs, and production operations. Recent work included shipping a single-VPS deployment with Docker Compose, Caddy, Postgres, and Redis; advancing store-side workflows like Brother printing and auto-ready handling; and wiring the foundations for APNs order updates and Apple Pay checkout.`,
    tags: ['Commerce', 'iOS', 'Backend', 'Infra'],
    strengths: [
      'Shipped a live VPS stack with Docker Compose, Caddy, Postgres, Redis, API, admin web, DNS, and HTTPS',
      'Advanced iOS store operations with Brother printing, Bonjour discovery, and auto-ready workflows',
      'Implemented APNs order-ready notification plumbing and Apple Pay integration groundwork',
      'Documented and deployed the system as a real production environment, not just a local prototype',
    ],
    url: 'https://admin.bobahub.app/login',
    urlLabel: 'admin.bobahub.app',
    ctaLabel: 'View live admin surface',
    screenshot: '/screenshots/bobahub-store-board.png',
    screenshotAlt: 'BobaHub store orders board on iPad',
    gallery: [
      {
        src: '/screenshots/bobahub-customer-orders.png',
        alt: 'BobaHub customer order history screen on iPhone',
        label: 'Customer orders',
        mode: 'portrait',
      },
      {
        src: '/screenshots/bobahub-customer-rewards.png',
        alt: 'BobaHub customer rewards screen on iPhone',
        label: 'Customer rewards',
        mode: 'portrait',
      },
      {
        src: '/screenshots/bobahub-admin-menu.png',
        alt: 'BobaHub admin menu management screen',
        label: 'Admin menu',
      },
    ],
    platform: 'iOS + Web + API',
  },
  {
    slug: 'typingmaster',
    name: 'TypingMaster',
    tagline: 'Fast iteration on gameplay systems, progression logic, persistence, and interface polish.',
    description:
      `TypingMaster is a game-like typing product designed to feel responsive, motivating, and replayable rather than instructional. Recent work included redesigning progression into a gated 7-phase evaluation ladder, repairing public progress persistence and restore bugs, stabilizing shared canvas startup across modes, and reworking the summary flow into a clearer 3-card results experience.`,
    tags: ['Game', 'Frontend', 'Product Iteration'],
    strengths: [
      'Redesigned progression into a 7-phase skill-evaluation ladder mapped across 8 tiers',
      'Fixed real public persistence and restore issues so signed-in progress survives reloads correctly',
      'Reworked post-game summaries into a cleaner 3-card layout with stronger celebration and feedback states',
      'Stabilized gameplay startup and shared canvas behavior across standard and bonus play modes',
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
      `This project combines a guided prep calendar with authenticated notes, attachments, and persistent system-design sessions. Recent work split Interview Prep into a cleaner frontend-plus-backend architecture, brought up a dedicated auth service with its own APIs and database, repaired the public deployment path, and fixed canvas-state loss so saved diagram work persists through normal editing instead of silently disappearing.`,
    tags: ['AI Workflow', 'Auth', 'System Design'],
    strengths: [
      'Built a separate auth/backend service with register, login, refresh, notes, attachments, and prep-state APIs',
      'Reorganized the project into a cleaner multi-part structure for frontend, backend, and course content',
      'Repaired the public deployment and Cloudflare tunnel flow so the hosted app and studio are reachable reliably',
      'Fixed saved-canvas data loss with regression coverage and verified restored system-design sessions in-browser',
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
      `ClockRacer turns analog clock reading into a real game with progression, time pressure, and performance feedback across web and iOS. Recent work included tightening guest-versus-account progression behavior, fixing leaderboard and results-edge cases, preparing iOS release builds, and continuing to refine the product loop so it feels like a genuine consumer game rather than a classroom exercise.`,
    tags: ['Education', 'Game', 'iOS'],
    strengths: [
      'Cross-platform product spanning browser and native iOS surfaces',
      'Leaderboard, achievements, guest/account progression, and TestFlight-oriented release work',
      'Ongoing UX hardening around results flows, shortcuts, local reset actions, and progression state',
      'Educational mechanics framed as a polished consumer experience with measurable improvement loops',
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
      `BayStrings and SoCalStrings are proof that careful curation can scale when the underlying content model is strong. They combine public-facing discovery UX with disciplined editorial operations: rolling event windows, source verification against official venues and orchestras, and region-specific expansion without turning the product into a generic directory.`,
    tags: ['Content Platform', 'Community', 'Discovery'],
    strengths: [
      'Built a reusable model for regional cultural discovery rather than one-off pages',
      'Maintained active rolling event windows with repeated verification against official sources and current programs',
      'Combined clean public UX with disciplined behind-the-scenes content operations and QA checks',
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
