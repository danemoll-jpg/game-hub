import { GAMES } from './games.js';

function cardFor(game) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = game.url;
  a.style.setProperty('--accent', game.accent ?? '#e6b73f');
  a.setAttribute('aria-label', `Play ${game.name}`);

  a.innerHTML = `
    <div class="card__icon" aria-hidden="true">${game.icon}</div>
    <h2 class="card__name">${game.name}</h2>
    <p class="card__tagline">${game.tagline}</p>
    <div class="card__tags">
      ${game.tags.map((t) => `<span class="card__tag">${t}</span>`).join('')}
    </div>
    <span class="card__play">Play <span class="card__play-arrow" aria-hidden="true">→</span></span>
  `;

  return a;
}

const grid = document.getElementById('game-grid');
for (const game of GAMES) {
  grid.appendChild(cardFor(game));
}
