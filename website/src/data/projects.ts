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
    section?: string;
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
    tagline: 'Order-ahead, payments, and a counter system for a real bubble-tea chain.',
    description:
      `BobaHub is a complete ordering platform for a bubble-tea chain. Customers browse the menu, customize their drink, and pay with Apple Pay or card — in the app or on the web. Staff run the counter on an iPad that prints a label for every cup and tracks each order from new to ready. It is live in production today, with real payments, real stores, and apps on Apple's TestFlight.`,
    tags: ['Ordering', 'Payments', 'iOS + iPad'],
    strengths: [
      'Customer apps for iPhone and web: order ahead, schedule a pickup time, earn rewards, pay with Apple Pay',
      'An iPad counter app that prints a label for every cup and moves orders from new → making → ready',
      'Real card and Apple Pay payments — each store gets paid directly and the platform fee is taken out automatically',
      'Runs 24/7 on its own server with automated, security-scanned deployments',
    ],
    url: 'https://admin.bobahub.app/login',
    urlLabel: 'admin.bobahub.app',
    ctaLabel: 'See the live admin app',
    screenshot: '/screenshots/bobahub-store-board.png',
    screenshotAlt: 'BobaHub store orders board on iPad',
    gallery: [
      { src: '/screenshots/bobahub-ios-home.png', alt: 'BobaHub iOS app home with featured drink', label: 'Home', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-menu.png', alt: 'BobaHub iOS app menu with drink cards and prices', label: 'Menu', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-customize.png', alt: 'BobaHub iOS app drink customization — ice and sugar level', label: 'Customize', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-cart.png', alt: 'BobaHub iOS app cart with subtotal, tax, and total', label: 'Cart', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-pay.png', alt: 'BobaHub iOS app checkout with Apple Pay payment sheet', label: 'Apple Pay', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-orders.png', alt: 'BobaHub iOS app order history with reorder', label: 'Orders', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-rewards.png', alt: 'BobaHub iOS app loyalty rewards progress', label: 'Rewards', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-profile.png', alt: 'BobaHub iOS app account profile', label: 'Profile', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-web-home.png', alt: 'BobaHub web app home with featured drink', label: 'Home', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-menu.png', alt: 'BobaHub web app menu with real drink photos and prices', label: 'Menu', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-detail.png', alt: 'BobaHub web app drink customization — ice, sugar, and toppings', label: 'Customize', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-checkout.png', alt: 'BobaHub web app checkout with pickup time and payment', label: 'Checkout', mode: 'portrait', section: 'On the web' },
    ],
    platform: 'iOS · iPad · Web · Payments',
  },
  {
    slug: 'clockracer',
    name: 'ClockRacer',
    tagline: 'A game that teaches kids to read an analog clock — against the clock.',
    description:
      `ClockRacer turns reading an analog clock into a fast, replayable game: see the clock, type the time, beat your best. It plays in any browser and on iPhone, with leaderboards, achievements, and saved progress whether you play as a guest or sign in. It is live today at clockracer.com.`,
    tags: ['Education', 'Game', 'iOS'],
    strengths: [
      'Read the clock, type the time, race the timer — simple and genuinely fun',
      'Plays in any web browser and as a native iPhone app',
      'Leaderboards, achievements, and progress for both guests and signed-in players',
      'Live at clockracer.com and prepared for the App Store',
    ],
    url: 'https://clockracer.com',
    urlLabel: 'clockracer.com',
    ctaLabel: 'Play ClockRacer',
    screenshot: '/screenshots/clockracer-home.png',
    screenshotAlt: 'ClockRacer level select with all six levels unlocked and best times',
    gallery: [
      {
        src: '/screenshots/clockracer-ios-play.png',
        alt: 'ClockRacer iOS app — read the basic clock',
        label: 'Beginner clock',
        mode: 'portrait',
        section: 'iPhone app',
      },
      {
        src: '/screenshots/clockracer-ios-advanced.png',
        alt: 'ClockRacer iOS app — advanced clock with hour, minute, second, date and month hands',
        label: 'Advanced level',
        mode: 'portrait',
        section: 'iPhone app',
      },
      {
        src: '/screenshots/clockracer-play.png',
        alt: 'ClockRacer on the web — read the clock and type the time',
        label: 'Level 1 · read the clock',
        section: 'On the web',
      },
      {
        src: '/screenshots/clockracer-advanced.png',
        alt: 'ClockRacer on the web — Calendar Clock level with month, date, hour and minute hands',
        label: 'Level 5 · Calendar Clock',
        section: 'On the web',
      },
    ],
    platform: 'Web + iOS',
  },
  {
    slug: 'typingmaster',
    name: 'TypingMaster',
    tagline: 'An arcade typing game that teaches real touch-typing.',
    description:
      `TypingMaster turns learning to type into an arcade game. Words ride incoming missiles toward your ship, and you destroy each one by typing it before it lands. 35 levels build from the home row all the way up to symbols and real programming tokens, and your progress saves to your account.`,
    tags: ['Game', 'Education', 'Web'],
    strengths: [
      '35 levels that build from home-row basics up to symbols and code',
      'Arcade gameplay — type the word to destroy the missile before it hits',
      'Accounts and saved progress that carry across sessions and devices',
      'A clear results screen after every round so players can see they are improving',
    ],
    screenshot: '/screenshots/typingmaster-home.png',
    screenshotAlt: 'TypingMaster arcade home screen',
    gallery: [
      {
        src: '/screenshots/typingmaster-levels.png',
        alt: 'TypingMaster 35-level curriculum across 8 tiers',
        label: '35-level curriculum',
      },
      {
        src: '/screenshots/typingmaster-play.png',
        alt: 'TypingMaster gameplay — type words to destroy incoming missiles',
        label: 'Destroy the missiles',
      },
    ],
    platform: 'Web Game',
  },
  {
    slug: 'interview-prep',
    name: 'Interview Prep',
    tagline: 'A 30-day plan to get iOS engineers interview-ready.',
    description:
      `Interview Prep is a guided 30-day program for iOS engineering interviews. Each day pairs a LeetCode pattern with a real iOS system-design topic, so you build both skills at once instead of just grinding problem counts. A pattern graph shows what you've covered, and your notes and progress sync to your account.`,
    tags: ['iOS', 'Interview Prep', 'Web'],
    strengths: [
      'A day-by-day calendar that pairs an algorithm pattern with an iOS system-design topic',
      'A pattern graph that tracks which topics you have covered and what is left',
      'Notes and progress that sync to your account across sessions',
      'Secure sign-in with email or Google',
    ],
    url: 'https://interviewlogicprep.baystrings.org',
    urlLabel: 'interviewlogicprep.baystrings.org',
    ctaLabel: 'Open the live app',
    screenshot: '/screenshots/interview-prep-home.png',
    screenshotAlt: 'Interview Prep 30-day iOS interview calendar',
    gallery: [
      {
        src: '/screenshots/interview-prep-calendar.png',
        alt: '30-day calendar and interactive pattern graph',
        label: 'Calendar + pattern graph',
      },
      {
        src: '/screenshots/interview-prep-features.png',
        alt: 'Algo plus iOS system design every day',
        label: 'How it works',
      },
    ],
    platform: 'Web + Accounts',
  },
  {
    slug: 'strings-platforms',
    name: 'BayStrings + SoCalStrings',
    tagline: 'Find live classical and string concerts near you.',
    description:
      `BayStrings and SoCalStrings help people discover live classical and string concerts in their region. Every listing is checked against the official venue or orchestra, so what you see is real and current. The same design and data model expands cleanly to a new region without starting over.`,
    tags: ['Discovery', 'Community', 'Web'],
    strengths: [
      'A clean, searchable guide to upcoming string concerts by region',
      'Every event verified against the official venue or orchestra before it is listed',
      'Listings stay current — past events roll off automatically',
      'One design and data model that scales to new cities without a rebuild',
    ],
    url: 'https://baystrings.org',
    urlLabel: 'baystrings.org',
    ctaLabel: 'Explore BayStrings',
    screenshot: '/screenshots/baystrings-home.png',
    screenshotAlt: 'BayStrings concert discovery homepage',
    gallery: [
      {
        src: '/screenshots/baystrings-listings.png',
        alt: 'BayStrings verified upcoming concert listings',
        label: 'Verified Bay Area listings',
      },
      {
        src: '/screenshots/socalstrings-home.png',
        alt: 'SoCalStrings concert discovery homepage for Southern California',
        label: 'Same platform, SoCal',
      },
      {
        src: '/screenshots/socalstrings-listings.png',
        alt: 'SoCalStrings upcoming violin events in Southern California',
        label: 'SoCal listings',
      },
    ],
    platform: 'Web Platform',
  },
];
