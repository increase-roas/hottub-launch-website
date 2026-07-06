/**
 * AI Masterclass opt-in page — edit this file to reuse the template
 * for a different brand, industry, or event.
 */
window.MASTERCLASS_CONFIG = {
  // Domain this funnel page lives on (not hottublaunch.com)
  siteDomain: 'hottublaunchai.com',
  pagePath: '/ai-masterclass',

  // Brand
  brandName: 'Hot Tub Launch',
  logoUrl: '../../logo.png',
  logoAlt: 'Hot Tub Launch',

  // Audience & industry (injected into hero copy)
  industry: 'hot tub & spa retail',
  audience: 'Hot Tub Store Owners',

  // Event
  dateTimeISO: '2026-06-24T18:00:00-04:00',
  dateTimeDisplay: 'Tuesday, June 24, 2026 · 2:00 PM ET',

  // Hero image — swap for your event creative
  heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1360&q=80',
  heroImageAlt: 'Live AI masterclass for hot tub store owners',

  // Form — set to your GHL webhook, Zapier, or API endpoint.
  // Leave empty for preview mode (shows success UI without sending).
  registerFormEndpoint: '',

  // Legal links
  privacyUrl: '#',
  termsUrl: '#',

  // “This Is For…” checklist
  checklist: [
    'You’re spending money on marketing but the phone still isn’t ringing consistently with real showroom buyers',
    'You know you’re losing high-intent buyers because nobody responds fast enough — especially after hours and on weekends',
    'You’ve been burned by agencies that don’t understand hot tub retail, shared leads, or long-cycle sales',
    'You want a predictable pipeline of direct buyers at full margin — not price shoppers bouncing between dealers'
  ],

  // “Front-Row Seat” bullets
  frontRowBullets: [
    'The “90-second auction” happening behind every high-intent buyer search in your area right now — you’re a bidder in it whether you know it or not, and most owners lose every single round without ever seeing the bid.',
    'Why the dealer stealing your sales isn’t better than you, doesn’t outspend you, and often shows up with a worse team — they’ve just figured out one thing about the follow-up that you haven’t yet.',
    'The 4-minute mistake that silently voids 80% of the money you spend on leads — it happens after the inquiry comes in, it’s invisible on every report your agency sends you, and you’re almost certainly making it today.',
    'How a handful of stores are booking qualified appointments late at night, on weekends, and while the owner is asleep — no receptionist, no answering service, no overseas call center, and no one manually picking up a phone.',
    'The uncomfortable reason your ad budget “isn’t working” — it’s not your leads, your market, or your pricing, and the agency running your ads will never tell you what it actually is because it’s not the part they get paid for.',
    'The single number that decides who wins every sale in your zip code — once you see where you fall on it, you won’t be able to look at your missed-lead log the same way again.'
  ],

  // Scarcity closing section
  scarcity: {
    heading: 'This Is a Live Masterclass, Limited to 100 Attendees.',
    copy: 'We’ve run this exact session twice. Both times, owners asked us to take it down afterward — because once their competitors saw it, their edge started shrinking. So this is the last time we’re running it open. No replay link, no recording, no “catch it later.” You’re in the room, or you’re on the wrong side of it.'
  },

  // Social proof logos (shown in proof bar)
  proofLogos: [
    { name: 'Summit Spas', initials: 'SS' },
    { name: 'Blue Wave Hot Tubs', initials: 'BW' },
    { name: 'Pacific Spa Co.', initials: 'PS' },
    { name: 'Midwest Leisure', initials: 'ML' },
    { name: 'AquaLife Retail', initials: 'AL' }
  ],

  // Testimonial cards
  testimonials: [
    {
      name: 'Mike R.',
      company: 'Summit Spas — Denver, CO',
      logoInitials: 'SS',
      quote: 'We thought our website was fine. After this session we realized we were losing 3–4 qualified buyers a week before anyone ever called us. Fixed two things and showroom traffic jumped within 30 days.',
      stars: 5
    },
    {
      name: 'Jennifer L.',
      company: 'Blue Wave Hot Tubs — Austin, TX',
      logoInitials: 'BW',
      quote: 'No fluff. They showed us exactly where leads were leaking and gave us a playbook we could hand to our team Monday morning. Best hour we’ve spent on marketing all year.',
      stars: 5
    },
    {
      name: 'Tom & Sarah K.',
      company: 'Pacific Spa Co. — Portland, OR',
      logoInitials: 'PS',
      quote: 'We’ve tried three agencies. This was the first time someone explained why our ads weren’t converting — and it had nothing to do with the ads. Game changer.',
      stars: 5
    }
  ]
};
