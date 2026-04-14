export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  strengths: string[];
  url: string;
  urlLabel: string;
  screenshot: string;
  screenshotAlt: string;
  platform?: string;
}

export const projects: Project[] = [
  {
    slug: 'clockracer',
    name: 'ClockRacer',
    tagline: 'Race the clock. Read analog time faster than ever.',
    description:
      `An educational game built around a simple idea: how fast can you read an analog clock under real pressure? ClockRacer puts players on a ticking leaderboard — blending game design with learning outcomes in a package that's genuinely fun to play.`,
    tags: ['Game', 'Web', 'iOS'],
    strengths: [
      'Polished game loop with progressive difficulty',
      'Real-time leaderboard and achievement system',
      'Cross-platform: browser and native iOS',
      'Purposeful learning disguised as play',
    ],
    url: 'https://clockracer.com',
    urlLabel: 'clockracer.com',
    screenshot: '/screenshots/clockrace-screen.jpg',
    screenshotAlt: 'ClockRacer game interface',
    platform: 'Web + iOS',
  },
  {
    slug: 'baystrings',
    name: 'BayStrings',
    tagline: "The violin lover's guide to the Bay Area.",
    description:
      `A curated cultural resource for classical music fans in the Bay Area — concerts, venues, educators, and community, all thoughtfully organized. BayStrings fills a gap no algorithm can: a human-curated, lovingly maintained guide to strings in the region.`,
    tags: ['Community', 'Bay Area'],
    strengths: [
      'Strong information architecture that scales',
      'Curated event discovery and venue guides',
      'Practical and elegant content presentation',
      'Real local resource, not a directory dump',
    ],
    url: 'https://baystrings.org',
    urlLabel: 'baystrings.org',
    screenshot: '/screenshots/baystrings-screen.jpg',
    screenshotAlt: 'BayStrings website',
    platform: 'Web',
  },
  {
    slug: 'socalstrings',
    name: 'SoCalStrings',
    tagline: 'Bringing the strings community to Southern California.',
    description:
      `The regional expansion of BayStrings — same careful curation, same design DNA, applied to SoCal's rich classical music scene. SoCalStrings proves the content model and product thinking behind BayStrings can travel without losing quality.`,
    tags: ['Community', 'Southern California'],
    strengths: [
      'Scalable content model from BayStrings',
      'Consistent design and editorial standards',
      'Regional depth — not a copy-paste expansion',
      'Foundation for a network of city guides',
    ],
    url: 'https://socalstrings.org',
    urlLabel: 'socalstrings.org',
    screenshot: '/screenshots/socalstrings-screen.jpg',
    screenshotAlt: 'SoCalStrings website',
    platform: 'Web',
  },
];
