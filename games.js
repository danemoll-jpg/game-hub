// The game library. Add a new game by adding one object to this array — nothing else in the
// site needs to change. Fields:
//
//   id          short unique slug (used as a DOM key; doesn't need to match anything else)
//   name        display title
//   tagline     one sentence describing how it plays
//   icon        a single emoji, shown large on the card
//   url         the game's live URL (its own Netlify deploy)
//   tags        short pills under the tagline — player count, category, etc.
//   accent      a CSS color (hex or var) used for the card's icon glow and border-on-hover;
//               pick something that doesn't clash with the felt-green background
//
// Order here is display order. New games are typically appended to the end.

export const GAMES = [
  {
    id: 'mexican-train',
    name: 'Mexican Train',
    tagline: 'Build trains off a shared double-12 hub and chase the lowest pip total over 13 rounds.',
    icon: '🚂',
    url: 'https://mexicantraingame.netlify.app/',
    tags: ['2–4 players', 'dominoes', 'online'],
    accent: '#e6b73f',
  },
  {
    id: 'golf',
    name: 'Golf',
    tagline: 'Six-card layouts, low score wins — swap and reveal your way through 9 holes.',
    icon: '⛳',
    url: 'https://golfcardgamedan.netlify.app/',
    tags: ['2–4 players', 'cards', 'online'],
    accent: '#5fb87a',
  },
  {
    id: 'durak',
    name: 'Durak',
    tagline: "Attack, defend, and try not to be the last one holding cards.",
    icon: '🃏',
    url: 'https://durak-dan.netlify.app/',
    tags: ['2–4 players', 'cards', 'online'],
    accent: '#c85a5a',
  },
  {
    id: 'par-five',
    name: 'Par Five',
    tagline: 'Five dice, thirteen categories — roll, hold, and chase the high score.',
    icon: '🎲',
    url: 'https://parfive.netlify.app/',
    tags: ['up to 4 players', 'dice'],
    accent: '#5f9be0',
  },
  {
    id: 'spades',
    name: 'Spades',
    tagline: 'Bid your tricks, then go make it — spades are always trump, first to 500 wins.',
    icon: '♠️',
    url: 'https://spadescards.netlify.app/',
    tags: ['2–4 players', 'cards', 'online'],
    accent: '#8f6fe0',
  },
  {
    id: 'worldly',
    name: 'Worldly',
    tagline: 'Pan and zoom a real world map, quiz yourself untimed, and drill whatever you keep missing.',
    icon: '🌍',
    url: 'https://worldlyquiz.netlify.app/',
    tags: ['solo', 'geography', 'study'],
    accent: '#45b8c4',
  },
  {
    id: 'outworldly',
    name: 'Outworldly',
    tagline: 'Pan and zoom a real star map with all 88 constellations, learn the sky, then quiz yourself untimed.',
    icon: '✨',
    url: 'https://outworldly.netlify.app/',
    tags: ['solo', 'astronomy', 'study'],
    accent: '#e8c873',
  },
  {
    id: 'innerworldly',
    name: 'Innerworldly',
    tagline: "Pan and zoom a real skeleton photo, find each bone you're asked about, then quiz yourself untimed.",
    icon: '🫀',
    url: 'https://innerworldly.netlify.app/',
    tags: ['solo', 'anatomy', 'study'],
    accent: '#7ec8e3',
  },
  {
    id: 'helioworldly',
    name: 'Helioworldly',
    tagline: "Pan and zoom a real NASA/JPL photo of the solar system, find each planet you're asked about, then quiz yourself untimed.",
    icon: '☀️',
    url: 'https://helioworldly.netlify.app/',
    tags: ['solo', 'solar system', 'study'],
    accent: '#f2a541',
  },
];
