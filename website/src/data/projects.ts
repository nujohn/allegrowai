// Tone drives the colour of a status: live = shipped and public,
// beta = in TestFlight / a tester build, dev = built but not released.
export type StatusTone = 'live' | 'beta' | 'dev';

export interface PlatformStatus {
  // 'iPhone', 'iPad', 'Android', 'Web' — optionally qualified, e.g. 'iPad (counter)'.
  name: string;
  // Where it stands on that platform: 'App Store', 'TestFlight beta', 'Live', …
  state: string;
  tone: StatusTone;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'appstore' | 'testflight' | 'android' | 'web' | 'demo';
}

export interface Project {
  slug: string;
  // 'ios' projects lead the page; 'web' projects follow under "Also on the web".
  category: 'ios' | 'web';
  name: string;
  tagline: string;
  // One-line headline status shown under the name and in the hero card.
  status: { label: string; tone: StatusTone };
  platforms: PlatformStatus[];
  description: string;
  tags: string[];
  strengths: string[];
  screenshot: string;
  screenshotAlt: string;
  gallery?: Array<{
    src: string;
    alt: string;
    label?: string;
    mode?: 'default' | 'portrait' | 'wide';
    section?: string;
  }>;
  // 'phone' renders the lead image in a portrait phone frame instead of
  // the default landscape browser chrome.
  heroMode?: 'browser' | 'phone';
  // Shown in the browser-frame address bar when heroMode is 'browser'.
  urlLabel?: string;
  // Download / open buttons, first one is the primary.
  links?: ProjectLink[];
  // Shown instead of buttons when there is nothing public to link to.
  note?: string;
}

export const projects: Project[] = [
  // ── iOS apps, ordered by effort and how far along they are ──────────────
  {
    slug: 'bobahub',
    category: 'ios',
    name: 'BobaHub',
    tagline: 'Order-ahead, payments, and a counter system for a real bubble-tea chain.',
    status: { label: 'On the App Store', tone: 'live' },
    platforms: [
      { name: 'iPhone', state: 'App Store', tone: 'live' },
      { name: 'iPad (counter)', state: 'TestFlight · in use at a store', tone: 'beta' },
      { name: 'Web', state: 'Live', tone: 'live' },
      { name: 'Android', state: 'Built · not yet released', tone: 'dev' },
    ],
    description:
      `BobaHub is a complete ordering platform for a bubble-tea chain. Customers browse the menu, customize their drink, and pay with Apple Pay or card, on iPhone or on the web. Staff run the counter on an iPad that prints a label for every cup and tracks each order from new to ready. The customer app is on the App Store as TeaTop USA (version 1.6), and the counter iPad app runs a live store through TestFlight.`,
    tags: ['Ordering', 'Payments', 'SwiftUI'],
    strengths: [
      'A native SwiftUI customer app: order ahead, schedule a pickup time, earn rewards, pay with Apple Pay',
      'An iPad counter app that prints a label for every cup and moves orders from new → making → ready',
      'Real card and Apple Pay payments through Stripe — each store is paid directly and the platform fee comes out automatically',
      'One API behind iPhone, iPad, Android, and web, covered by ~670 iOS and 800+ API tests, with automated, security-scanned deploys',
    ],
    links: [
      { label: 'Download on the App Store', url: 'https://apps.apple.com/us/app/teatop-usa/id6768713041', kind: 'appstore' },
      { label: 'Order on the web', url: 'https://order.bobahub.app', kind: 'web' },
      { label: 'Admin console', url: 'https://admin.bobahub.app/login', kind: 'web' },
    ],
    urlLabel: 'admin.bobahub.app',
    heroMode: 'phone',
    screenshot: '/screenshots/bobahub-ios-home.png',
    screenshotAlt: 'BobaHub consumer iPhone app home screen with featured drink',
    gallery: [
      // Consumer iPhone app first (the hero is its Home screen).
      { src: '/screenshots/bobahub-ios-menu.png', alt: 'BobaHub iOS app menu with drink cards and prices', label: 'Menu', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-customize.png', alt: 'BobaHub iOS app drink customization — ice and sugar level', label: 'Customize', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-cart.png', alt: 'BobaHub iOS app cart with subtotal, tax, and total', label: 'Cart', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-pay.png', alt: 'BobaHub iOS app checkout with Apple Pay payment sheet', label: 'Apple Pay', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-orders.png', alt: 'BobaHub iOS app order history with reorder', label: 'Orders', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-loyalty.png', alt: 'BobaHub iOS app loyalty rewards progress', label: 'Rewards', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/bobahub-ios-profile.png', alt: 'BobaHub iOS app account profile', label: 'Profile', mode: 'portrait', section: 'iPhone app' },
      // iPad counter app for staff.
      { src: '/screenshots/bobahub-store-board.png', alt: 'BobaHub iPad counter app order board with New, Preparing, and Ready columns', label: 'Order board', mode: 'wide', section: 'iPad counter' },
      // Admin console (per-store web back office).
      { src: '/screenshots/bobahub-admin-menu.png', alt: 'BobaHub admin menu management with per-store prices and availability', label: 'Menu management', mode: 'wide', section: 'Admin console' },
      { src: '/screenshots/bobahub-admin-options.png', alt: 'BobaHub admin modifier and option-group editor', label: 'Modifiers', mode: 'wide', section: 'Admin console' },
      { src: '/screenshots/bobahub-admin-settings.png', alt: 'BobaHub admin store settings with tax rate and cancel window', label: 'Settings', mode: 'wide', section: 'Admin console' },
      { src: '/screenshots/bobahub-admin-funnel.png', alt: 'BobaHub admin analytics funnel with daily event counts', label: 'Analytics', mode: 'wide', section: 'Admin console' },
      { src: '/screenshots/bobahub-admin-featured.png', alt: 'BobaHub admin featured-drink merchandising editor', label: 'Featured drink', mode: 'wide', section: 'Admin console' },
      // Mobile web storefront.
      { src: '/screenshots/bobahub-web-home-2.png', alt: 'BobaHub web app home with featured drink', label: 'Home', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-menu-2.png', alt: 'BobaHub web app menu with real drink photos and prices', label: 'Menu', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-detail-2.png', alt: 'BobaHub web app drink customization with ice, sugar, and toppings', label: 'Customize', mode: 'portrait', section: 'On the web' },
      { src: '/screenshots/bobahub-web-checkout-2.png', alt: 'BobaHub web app checkout with pickup time and payment', label: 'Checkout', mode: 'portrait', section: 'On the web' },
    ],
  },
  {
    slug: 'whattoget',
    category: 'ios',
    name: 'WhatToGet',
    tagline: 'Shopping lists that know your stores, and nudge you when you walk past one.',
    status: { label: 'TestFlight beta · real testers', tone: 'beta' },
    platforms: [
      { name: 'iPhone', state: 'TestFlight beta', tone: 'beta' },
      { name: 'Android', state: 'Tester builds', tone: 'beta' },
    ],
    description:
      `WhatToGet keeps a shopping list for each store you actually shop at and reminds you when you arrive near one that has things on its list. Photograph a handwritten list, a receipt, a pantry shelf, or a cookbook page and AI turns it into list items. Recipes become shopping lists, voice commands move things between stores, and lists sync and share across phones. The iPhone app is in a public TestFlight beta with outside testers, and a native Android build goes to testers too.`,
    tags: ['AI', 'Location', 'SwiftUI'],
    strengths: [
      'Arrival reminders from on-device geofencing: a nudge when you are near a store that has things on your list',
      'Photo scanning through a pluggable vision-LLM backend (Claude, or a self-hosted Qwen2.5-VL) — lists, receipts, shelves, and recipe pages become editable items',
      'Voice commands understood on the phone: "add milk and eggs", "move rice to H Mart", "clear the Costco list"',
      'Offline-first SwiftUI + SwiftData with live sync and shared lists, 600+ iOS tests, and a native Kotlin/Compose Android app on the same API',
    ],
    links: [
      { label: 'Join the TestFlight beta', url: 'https://testflight.apple.com/join/Q6zRcdCG', kind: 'testflight' },
    ],
    heroMode: 'phone',
    screenshot: '/screenshots/whattoget-ios-recipe.jpg',
    screenshotAlt: 'WhatToGet iPhone app recipe page for broccoli beef stir-fry with ingredients matched to stores',
    gallery: [
      { src: '/screenshots/whattoget-ios-home.jpg', alt: 'WhatToGet iPhone home with a list per store and how many things to grab at each', label: 'A list per store', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/whattoget-ios-scan.jpg', alt: 'WhatToGet iPhone review screen after scanning a photo: six items found, ready to add', label: 'AI photo scan', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/whattoget-ios-recipes.jpg', alt: 'WhatToGet iPhone recipe browser with popular dishes', label: 'Recipes', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/whattoget-android-home.png', alt: 'WhatToGet Android home with stores and a prompt to turn on reminders', label: 'Home', mode: 'portrait', section: 'Android app' },
      { src: '/screenshots/whattoget-android-instore.png', alt: 'WhatToGet Android in-store mode with big checkboxes', label: 'In the store', mode: 'portrait', section: 'Android app' },
      { src: '/screenshots/whattoget-android-shop.png', alt: 'WhatToGet Android adding a recipe’s ingredients to a store list', label: 'Recipe → list', mode: 'portrait', section: 'Android app' },
    ],
  },
  {
    slug: 'clockracer',
    category: 'ios',
    name: 'ClockRacer',
    tagline: 'A game that teaches kids to read an analog clock, against the clock.',
    status: { label: 'Live on the web · iPhone in TestFlight', tone: 'live' },
    platforms: [
      { name: 'Web', state: 'Live', tone: 'live' },
      { name: 'iPhone', state: 'TestFlight beta', tone: 'beta' },
    ],
    description:
      `ClockRacer turns reading an analog clock into a fast, replayable game: see the clock, type the time, beat your best. It is live on the web at clockracer.com, and the native iPhone app is in TestFlight with outside testers. Leaderboards, achievements, and progress carry over whether you play as a guest or sign in.`,
    tags: ['Education', 'Game', 'SwiftUI'],
    strengths: [
      'Read the clock, type the time, race the timer — six levels, from 5-minute times up to a calendar clock',
      'A native SwiftUI iPhone app alongside the React web game, with shared accounts and leaderboards',
      'Leaderboards, achievements, and progress for both guests and signed-in players',
      'Live at clockracer.com; the iPhone app is in TestFlight with outside testers',
    ],
    links: [
      { label: 'Play on the web', url: 'https://clockracer.com', kind: 'web' },
    ],
    urlLabel: 'clockracer.com',
    screenshot: '/screenshots/clockracer-home.png',
    screenshotAlt: 'ClockRacer level select with all six levels unlocked and best times',
    gallery: [
      { src: '/screenshots/clockracer-ios-play.png', alt: 'ClockRacer iOS app — read the basic clock', label: 'Beginner clock', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/clockracer-ios-advanced.png', alt: 'ClockRacer iOS app — advanced clock with hour, minute, second, date and month hands', label: 'Advanced level', mode: 'portrait', section: 'iPhone app' },
      { src: '/screenshots/clockracer-play.png', alt: 'ClockRacer on the web — read the clock and type the time', label: 'Level 1 · read the clock', section: 'On the web' },
      { src: '/screenshots/clockracer-advanced.png', alt: 'ClockRacer on the web — Calendar Clock level with month, date, hour and minute hands', label: 'Level 5 · Calendar Clock', section: 'On the web' },
    ],
  },
  {
    slug: 'moodie-diary',
    category: 'ios',
    name: 'Moodie Diary',
    tagline: 'A private journal you can talk to in English or Mandarin, with AI that stays on hardware you own.',
    status: { label: 'Private TestFlight beta', tone: 'beta' },
    platforms: [
      { name: 'iPhone', state: 'TestFlight beta', tone: 'beta' },
      { name: 'iPad', state: 'TestFlight beta', tone: 'beta' },
    ],
    description:
      `Moodie Diary is an offline-first journal. Write or speak an entry in English or Mandarin, add photos and a place, and it titles, summarizes, tags, and reads the mood of what you wrote. A second tab logs how the day was spent in 5-minute blocks and can read a photographed handwritten page straight into it. The AI runs on the device and on a server you own; nothing goes to a third-party AI provider.`,
    tags: ['AI', 'On-device ML', 'SwiftUI'],
    strengths: [
      'Dictation in English and Mandarin with on-device speech recognition',
      'Summaries, tags, and mood from Apple Foundation Models on device, refined by a self-hosted Qwen 3 model',
      'Offline-first SwiftData with delta sync to its own NestJS + Postgres backend',
      'Passwordless sign-in with Apple, Google, or an email code, with tokens kept in the Keychain',
    ],
    note: 'Invite-only TestFlight beta — ask for an invite.',
    heroMode: 'phone',
    screenshot: '/screenshots/moodie-01-diary-timeline.jpg',
    screenshotAlt: 'Moodie Diary timeline: entries by day with photo thumbnails, mood emoji, and places',
    gallery: [
      { src: '/screenshots/moodie-02-entry-detail.jpg', alt: 'An entry with three moods, a photo strip, the text, an AI summary, tags, and a map', label: 'Entry: moods, photos, AI summary', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-03-photo-viewer.jpg', alt: 'Full-screen photo viewer, photo 3 of 3', label: 'Full-screen photos', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-04-compose.jpg', alt: 'New entry with dictation in English or Chinese and an Add context button', label: 'Write or dictate', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-05-photo-picker.jpg', alt: 'The system photo picker with three photos selected and private access to the library', label: 'Pick photos', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-06-compose-with-photos.jpg', alt: 'The new entry with three photos attached, ready to save', label: 'Photos attached', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-07-mood-week.jpg', alt: 'Week view with a mood emoji on each day and mood badges on every entry', label: 'Moods by day', mode: 'portrait', section: 'Diary' },
      { src: '/screenshots/moodie-08-activities-day.jpg', alt: 'Activities tab with a running timer, quick-start buttons, and the day as a list of blocks', label: 'Time tracker', mode: 'portrait', section: 'Activities' },
      { src: '/screenshots/moodie-09-activity-insights.jpg', alt: 'Weekly insights: stacked bars per day and totals per activity', label: 'Weekly insights', mode: 'portrait', section: 'Activities' },
      { src: '/screenshots/moodie-10-scan-schedule.jpg', alt: 'A photographed handwritten plan read into seven time blocks, matched to activities', label: 'Scan a handwritten plan', mode: 'portrait', section: 'Activities' },
    ],
  },
  {
    slug: 'fastordr',
    category: 'ios',
    name: 'FastOrdr',
    tagline: 'Order-ahead for restaurants, with a demo an owner can click through before they decide.',
    status: { label: 'Interactive demo · pre-launch', tone: 'dev' },
    platforms: [
      { name: 'iPhone', state: 'Built · pre-launch', tone: 'dev' },
      { name: 'iPad (kitchen)', state: 'Built · pre-launch', tone: 'dev' },
      { name: 'Web', state: 'Demo live', tone: 'live' },
    ],
    description:
      `FastOrdr takes the BobaHub platform to any restaurant: the customer orders and pays from their phone, the kitchen gets it on an iPad that prints a label for every item and one receipt for the bag, and the owner watches the money and edits the menu from one dashboard. The link below is an interactive walkthrough that follows a single order across all three screens at once, then works out what it would cost on the owner's own sales.`,
    tags: ['Ordering', 'Restaurants', 'iOS + iPad'],
    strengths: [
      'An interactive demo an owner drives themselves: one order from phone to kitchen screen to printed ticket to dashboard',
      'Each restaurant spun up from a tenant kit: menu import, its own skin, and AI-generated food photography',
      'Honest arithmetic on their own numbers: three plans, card processing counted in, no commission per order and no contract',
      'English, Japanese, and Chinese (Traditional and Simplified) from one toggle — every screen, down to the phone and the kitchen iPad',
    ],
    links: [
      { label: 'Open the interactive demo', url: 'https://allegrowai.com/fastordr/', kind: 'demo' },
    ],
    urlLabel: 'allegrowai.com/fastordr',
    screenshot: '/screenshots/fastordr-demo-stage.png',
    screenshotAlt: 'FastOrdr demo showing one order at once on the customer phone, the kitchen iPad and the owner dashboard',
    gallery: [
      { src: '/screenshots/fastordr-timelines.png', alt: 'Two timelines of the same lunch — standing in line versus ordering from the app', label: 'Why it helps', mode: 'wide', section: 'The walkthrough' },
      { src: '/screenshots/fastordr-japanese.png', alt: 'The same demo screen rendered in Japanese', label: 'Japanese', mode: 'wide', section: 'The walkthrough' },
      { src: '/screenshots/fastordr-plans.png', alt: 'Three pricing plans with a worked example of what is taken out of $10,000', label: 'What it costs', mode: 'wide', section: 'The numbers' },
      { src: '/screenshots/fastordr-chart.png', alt: 'Chart of total monthly cost per plan as online sales grow, card processing included', label: 'Cost as you grow', mode: 'wide', section: 'The numbers' },
      { src: '/screenshots/fastordr-hardware.png', alt: 'Hardware list: iPad and stand, Brother label printer and Star receipt printer, about $520 one time', label: 'Hardware', mode: 'wide', section: 'The numbers' },
    ],
  },

  // ── Also on the web ─────────────────────────────────────────────────────
  {
    slug: 'typingmaster',
    category: 'web',
    name: 'TypingMaster',
    tagline: 'An arcade typing game that teaches real touch-typing.',
    status: { label: 'Web game', tone: 'live' },
    platforms: [{ name: 'Web', state: 'Web game', tone: 'live' }],
    description:
      `TypingMaster turns learning to type into an arcade game. Words ride incoming missiles toward your ship, and you destroy each one by typing it before it lands. 35 levels build from the home row all the way up to symbols and real programming tokens, and your progress saves to your account.`,
    tags: ['Game', 'Education', 'Web'],
    strengths: [
      '35 levels that build from home-row basics up to symbols and code',
      'Arcade gameplay — type the word to destroy the missile before it hits',
      'Accounts and saved progress that carry across sessions and devices',
      'A clear results screen after every round so players can see they are improving',
    ],
    note: 'Walkthrough on request.',
    screenshot: '/screenshots/typingmaster-home.png',
    screenshotAlt: 'TypingMaster arcade home screen',
    gallery: [
      { src: '/screenshots/typingmaster-levels.png', alt: 'TypingMaster 35-level curriculum across 8 tiers', label: '35-level curriculum' },
      { src: '/screenshots/typingmaster-play.png', alt: 'TypingMaster gameplay — type words to destroy incoming missiles', label: 'Destroy the missiles' },
    ],
  },
  {
    slug: 'interview-prep',
    category: 'web',
    name: 'Interview Prep',
    tagline: 'A 30-day plan to get iOS engineers interview-ready.',
    status: { label: 'Private · access on request', tone: 'dev' },
    platforms: [{ name: 'Web', state: 'Private', tone: 'dev' }],
    description:
      `Interview Prep is a guided 30-day program for iOS engineering interviews. Each day pairs a LeetCode pattern with a real iOS system-design topic, so you build both skills at once instead of just grinding problem counts. A pattern graph shows what you've covered, and your notes and progress sync to your account.`,
    tags: ['iOS', 'Interview Prep', 'Web'],
    strengths: [
      'A day-by-day calendar that pairs an algorithm pattern with an iOS system-design topic',
      'A pattern graph that tracks which topics you have covered and what is left',
      'Notes and progress that sync to your account across sessions',
      'Secure sign-in with email or Google',
    ],
    note: 'Now behind a private sign-in — ask for access.',
    urlLabel: 'interviewlogicprep.baystrings.org',
    screenshot: '/screenshots/interview-prep-home.png',
    screenshotAlt: 'Interview Prep 30-day iOS interview calendar',
    gallery: [
      { src: '/screenshots/interview-prep-calendar.png', alt: '30-day calendar and interactive pattern graph', label: 'Calendar + pattern graph' },
      { src: '/screenshots/interview-prep-features.png', alt: 'Algo plus iOS system design every day', label: 'How it works' },
    ],
  },
  {
    slug: 'strings-platforms',
    category: 'web',
    name: 'BayStrings + SoCalStrings',
    tagline: 'Find live classical and string concerts near you.',
    status: { label: 'Live on the web', tone: 'live' },
    platforms: [{ name: 'Web', state: 'Live', tone: 'live' }],
    description:
      `BayStrings and SoCalStrings help people discover live classical and string concerts in their region. Every listing is checked against the official venue or orchestra, so what you see is real and current. The same design and data model expands cleanly to a new region without starting over.`,
    tags: ['Discovery', 'Community', 'Web'],
    strengths: [
      'A clean, searchable guide to upcoming string concerts by region',
      'Every event verified against the official venue or orchestra before it is listed',
      'Listings stay current — past events roll off automatically',
      'One design and data model that scales to new cities without a rebuild',
    ],
    links: [
      { label: 'Explore BayStrings', url: 'https://baystrings.org', kind: 'web' },
      { label: 'SoCalStrings', url: 'https://socalstrings.org', kind: 'web' },
    ],
    urlLabel: 'baystrings.org',
    screenshot: '/screenshots/baystrings-home.png',
    screenshotAlt: 'BayStrings concert discovery homepage',
    gallery: [
      { src: '/screenshots/baystrings-listings.png', alt: 'BayStrings verified upcoming concert listings', label: 'Verified Bay Area listings' },
      { src: '/screenshots/socalstrings-home.png', alt: 'SoCalStrings concert discovery homepage for Southern California', label: 'Same platform, SoCal' },
      { src: '/screenshots/socalstrings-listings.png', alt: 'SoCalStrings upcoming violin events in Southern California', label: 'SoCal listings' },
    ],
  },
];

export const iosApps = projects.filter((p) => p.category === 'ios');
export const webProjects = projects.filter((p) => p.category === 'web');
