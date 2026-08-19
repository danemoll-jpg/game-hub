# Dan's Game Room

A launcher page linking out to each game in the collection. Plain static site — no framework,
no build step — so Netlify serves the repo directly.

Live at: (add the Netlify URL here once the site is created)

## Adding a new game

Open [`games.js`](./games.js) and add one object to the `GAMES` array:

```js
{
  id: 'my-new-game',
  name: 'My New Game',
  tagline: 'One sentence describing how it plays.',
  icon: '🎯',                              // a single emoji
  url: 'https://my-new-game.netlify.app/', // its own live deploy
  tags: ['2-4 players', 'cards', 'online'],
  accent: '#5f9be0',                        // any CSS color, used for the card's glow/hover
},
```

Commit and push — Netlify redeploys automatically (same continuous-deployment setup as every
other game in the series) and the new card shows up. Nothing else in the site needs to change.

## Running it locally

No build tooling needed — just open `index.html` in a browser, or serve the folder with
anything static (e.g. `npx serve .`).
