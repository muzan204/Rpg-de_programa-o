const worlds = [
  {
    id: 'html',
    name: 'Ruínas do HTML',
    icon: '🏛️',
    description: 'Reconstrua estruturas perdidas e domine os elementos da web.',
    glow: 'rgba(251,113,133,.18)',
    challenges: [
      {
        id: 'html-1',
        title: 'A Porta sem Título',
        difficulty: 'INICIANTE',
        story: 'Uma porta ancestral exibe uma página vazia. O mecanismo exige um título HTML antes de liberar a passagem.',
        objective: 'Crie um elemento <h1> contendo o texto Code Dungeon.',
        hint: 'Use uma tag de abertura, o texto e a tag de fechamento.',
        starter: '<!-- Escreva sua solução abaixo -->\n',
        validate: code => /<h1[^>]*>\s*Code Dungeon\s*<\/h1>/i.test(code)
      },
      {
        id: 'html-2',
        title: 'O Link Perdido',
        difficulty: 'INICIANTE',
        story: 'Um mapa mágico aponta para uma saída, mas só responde a um link corretamente construído.',
        objective: 'Crie um link <a> com href="https://github.com" e texto GitHub.',
        hint: 'O endereço vai no atributo href dentro da tag <a>.',
        starter: '<!-- Crie o link -->\n',
        validate: code => /<a[^>]*href=["']https:\/\/github\.com["'][^>]*>\s*GitHub\s*<\/a>/i.test(code)
      }
    ]
  },
  {
    id: 'css',
    name: 'Floresta CSS',
    icon: '🌲',
    description: 'Molde o ambiente usando seletores, layout e estilos.',
    glow: 'rgba(52,211,153,.18)',
    challenges: [
      {
        id: 'css-1',
        title: 'Armadura de Cor',
        difficulty: 'INICIANTE',
        story: 'Sua armadura perdeu o brilho. Um fragmento de estilo pode restaurar sua energia visual.',
        objective: 'Defina a propriedade color como purple para a classe .hero.',
        hint: 'Use .hero { ... } e coloque a propriedade dentro das chaves.',
        starter: '.hero {\n  \n}\n',
        validate: code => /\.hero\s*\{[^}]*color\s*:\s*purple\s*;?[^}]*\}/is.test(code)
      },
      {
        id: 'css-2',
        title: 'Ponte Flexível',
        difficulty: 'MÉDIO',
        story: 'Uma ponte quebrada só se alinha quando seus blocos entram em formação flexível.',
        objective: 'Na classe .bridge, use display: flex e justify-content: center.',
        hint: 'As duas propriedades precisam estar dentro do mesmo seletor.',
        starter: '.bridge {\n  \n}\n',
        validate: code => /\.bridge\s*\{(?=[^}]*display\s*:\s*flex)(?=[^}]*justify-content\s*:\s*center)[^}]*\}/is.test(code)
      }
    ]
  },
  {
    id: 'js',
    name: 'Torre JavaScript',
    icon: '⚡',
    description: 'Use lógica, condições e funções para sobreviver aos andares.',
    glow: 'rgba(251,191,36,.18)',
    challenges: [
      {
        id: 'js-1',
        title: 'Energia da Porta',
        difficulty: 'MÉDIO',
        story: 'A porta principal mede sua energia. Ela só abre quando o valor for maior que 50.',
        objective: 'Crie uma condição if que verifique se energia > 50 e chame abrirPorta().',
        hint: 'A estrutura começa com if (condição) { ... }.',
        starter: 'const energia = 75;\n\n// Sua condição aqui\n',
        validate: code => /if\s*\(\s*energia\s*>\s*50\s*\)\s*\{[^}]*abrirPorta\s*\(\s*\)\s*;?[^}]*\}/is.test(code)
      },
      {
        id: 'js-2',
        title: 'Feitiço em Loop',
        difficulty: 'MÉDIO',
        story: 'Cinco runas precisam ser ativadas em sequência. Repetir manualmente não é suficiente.',
        objective: 'Crie um loop for que percorra de 0 até menor que 5.',
        hint: 'Você pode usar for (let i = 0; i < 5; i++).',
        starter: '// Ative as cinco runas\n',
        validate: code => /for\s*\(\s*(?:let|var)\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*5\s*;\s*\w+\+\+\s*\)/i.test(code)
      }
    ]
  },
  {
    id: 'sql',
    name: 'Catacumbas SQL',
    icon: '🗄️',
    description: 'Encontre pistas escondidas consultando bancos de dados antigos.',
    glow: 'rgba(96,165,250,.18)',
    challenges: [
      {
        id: 'sql-1',
        title: 'Registro dos Heróis',
        difficulty: 'MÉDIO',
        story: 'Uma lápide digital guarda milhares de registros. Você precisa localizar todos os heróis.',
        objective: 'Faça uma consulta que selecione todas as colunas da tabela heroes.',
        hint: 'SELECT * FROM nome_da_tabela;',
        starter: '-- Sua consulta SQL\n',
        validate: code => /select\s+\*\s+from\s+heroes\s*;?/i.test(code)
      },
      {
        id: 'sql-2',
        title: 'Nível Proibido',
        difficulty: 'AVANÇADO',
        story: 'O guardião só revela jogadores veteranos. Filtre os registros corretamente.',
        objective: 'Selecione todos os usuários da tabela players com level maior que 10.',
        hint: 'Use WHERE para criar o filtro.',
        starter: '-- Filtre os jogadores\n',
        validate: code => /select\s+\*\s+from\s+players\s+where\s+level\s*>\s*10\s*;?/i.test(code)
      }
    ]
  },
  {
    id: 'api',
    name: 'Reino das APIs',
    icon: '🌐',
    description: 'Conecte sistemas e recupere dados para enfrentar o Bug Supremo.',
    glow: 'rgba(217,70,239,.18)',
    challenges: [
      {
        id: 'api-1',
        title: 'Chamado do Servidor',
        difficulty: 'AVANÇADO',
        story: 'O cristal central espera uma requisição para despertar. Você precisa chamar o endpoint correto.',
        objective: 'Use fetch("/api/player") para iniciar uma requisição.',
        hint: 'A função fetch recebe a URL como primeiro argumento.',
        starter: '// Faça a requisição\n',
        validate: code => /fetch\s*\(\s*["']\/api\/player["']\s*\)/i.test(code)
      },
      {
        id: 'api-2',
        title: 'Castelo do Bug',
        difficulty: 'BOSS',
        story: 'O Bug Supremo corrompeu a resposta da API. Para vencê-lo, recupere os dados e converta a resposta para JSON.',
        objective: 'Use fetch("/api/boss") seguido de .then(response => response.json()).',
        hint: 'Encadeie .then depois do fetch e retorne response.json().',
        starter: '// Derrote o Bug Supremo\n',
        validate: code => /fetch\s*\(\s*["']\/api\/boss["']\s*\)[\s\S]*\.then\s*\(\s*(?:response|res)\s*=>\s*(?:response|res)\.json\s*\(\s*\)\s*\)/i.test(code)
      }
    ]
  }
];

const achievements = [
  { id: 'first-blood', icon: '🗝️', title: 'Primeira Chave', description: 'Conclua seu primeiro desafio.', test: s => s.completed.length >= 1 },
  { id: 'html-master', icon: '🏛️', title: 'Arquiteto HTML', description: 'Conclua as Ruínas do HTML.', test: s => s.completed.filter(id => id.startsWith('html-')).length === 2 },
  { id: 'level-3', icon: '⚡', title: 'Ascensão', description: 'Alcance o nível 3.', test: s => getLevel(s.xp) >= 3 },
  { id: 'boss', icon: '👑', title: 'Caçador de Bugs', description: 'Derrote o Bug Supremo.', test: s => s.completed.includes('api-2') }
];

const defaultState = { xp: 0, coins: 0, lives: 3, completed: [], attempts: {}, unlockedWorld: 0 };
let state = loadState();
let activeChallenge = null;
let activeWorldIndex = 0;

const els = {
  levelValue: document.getElementById('levelValue'),
  xpValue: document.getElementById('xpValue'),
  coinValue: document.getElementById('coinValue'),
  lifeValue: document.getElementById('lifeValue'),
  progressLabel: document.getElementById('progressLabel'),
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  worldGrid: document.getElementById('worldGrid'),
  achievementGrid: document.getElementById('achievementGrid'),
  achievementCounter: document.getElementById('achievementCounter'),
  mentorText: document.getElementById('mentorText'),
  modal: document.getElementById('challengeModal'),
  challengeWorld: document.getElementById('challengeWorld'),
  challengeTitle: document.getElementById('challengeTitle'),
  challengeDifficulty: document.getElementById('challengeDifficulty'),
  challengeStory: document.getElementById('challengeStory'),
  challengeObjective: document.getElementById('challengeObjective'),
  challengeHint: document.getElementById('challengeHint'),
  codeEditor: document.getElementById('codeEditor'),
  terminal: document.getElementById('terminalOutput'),
  toast: document.getElementById('toast')
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('codeDungeonSave'));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem('codeDungeonSave', JSON.stringify(state));
}

function getLevel(xp) {
  return Math.floor(xp / 250) + 1;
}

function totalChallenges() {
  return worlds.reduce((sum, world) => sum + world.challenges.length, 0);
}

function render() {
  renderStats();
  renderWorlds();
  renderAchievements();
}

function renderStats() {
  const total = totalChallenges();
  const pct = Math.round((state.completed.length / total) * 100);
  els.levelValue.textContent = getLevel(state.xp);
  els.xpValue.textContent = state.xp;
  els.coinValue.textContent = state.coins;
  els.lifeValue.textContent = state.lives;
  els.progressLabel.textContent = `${pct}%`;
  els.progressBar.style.width = `${pct}%`;
  els.progressText.textContent = `${state.completed.length} de ${total} desafios concluídos`;
}

function renderWorlds() {
  els.worldGrid.innerHTML = '';
  worlds.forEach((world, index) => {
    const done = world.challenges.filter(c => state.completed.includes(c.id)).length;
    const locked = index > state.unlockedWorld;
    const pct = Math.round((done / world.challenges.length) * 100);
    const card = document.createElement('article');
    card.className = `world-card ${locked ? 'locked' : ''}`;
    card.style.setProperty('--world-glow', world.glow);
    card.innerHTML = `
      <div class="world-icon">${locked ? '🔒' : world.icon}</div>
      <span class="eyebrow">MUNDO ${String(index + 1).padStart(2, '0')}</span>
      <h3>${world.name}</h3>
      <p>${world.description}</p>
      <div class="world-meta"><span>${done}/${world.challenges.length} MISSÕES</span><span>${pct}%</span></div>
      <div class="world-progress"><span style="width:${pct}%"></span></div>
      <button class="btn ${locked ? 'btn-ghost' : 'btn-primary'}" ${locked ? 'disabled' : ''}>
        ${locked ? 'BLOQUEADO' : done === world.challenges.length ? 'REVISITAR' : 'ENTRAR'}
      </button>`;

    if (!locked) card.querySelector('button').addEventListener('click', () => openNextChallenge(index));
    els.worldGrid.appendChild(card);
  });
}

function renderAchievements() {
  els.achievementGrid.innerHTML = '';
  const unlocked = achievements.filter(a => a.test(state));
  els.achievementCounter.textContent = `${unlocked.length}/${achievements.length}`;

  achievements.forEach(achievement => {
    const isUnlocked = achievement.test(state);
    const item = document.createElement('div');
    item.className = `achievement ${isUnlocked ? '' : 'locked'}`;
    item.innerHTML = `
      <div class="achievement-icon">${isUnlocked ? achievement.icon : '🔒'}</div>
      <div><h4>${achievement.title}</h4><p>${achievement.description}</p></div>`;
    els.achievementGrid.appendChild(item);
  });
}

function openNextChallenge(worldIndex) {
  const world = worlds[worldIndex];
  const next = world.challenges.find(c => !state.completed.includes(c.id)) || world.challenges[0];
  activeWorldIndex = worldIndex;
  openChallenge(next, world, worldIndex);
}

function openChallenge(challenge, world, worldIndex) {
  activeChallenge = challenge;
  activeWorldIndex = worldIndex;
  els.challengeWorld.textContent = `MUNDO ${String(worldIndex + 1).padStart(2, '0')} • ${world.name.toUpperCase()}`;
  els.challengeTitle.textContent = challenge.title;
  els.challengeDifficulty.textContent = challenge.difficulty;
  els.challengeStory.textContent = challenge.story;
  els.challengeObjective.textContent = challenge.objective;
  els.challengeHint.textContent = challenge.hint;
  els.codeEditor.value = challenge.starter;
  setTerminal('> Terminal pronta. Execute sua solução.');
  els.modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => els.codeEditor.focus(), 50);
}

function closeChallenge() {
  els.modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function setTerminal(message, type = '') {
  els.terminal.className = `terminal ${type}`;
  els.terminal.textContent = message;
}

function runChallenge() {
  if (!activeChallenge) return;
  const code = els.codeEditor.value;
  const solved = activeChallenge.validate(code);

  state.attempts[activeChallenge.id] = (state.attempts[activeChallenge.id] || 0) + 1;

  if (solved) {
    const firstTime = !state.completed.includes(activeChallenge.id);
    if (firstTime) {
      state.completed.push(activeChallenge.id);
      state.xp += activeChallenge.difficulty === 'BOSS' ? 250 : activeChallenge.difficulty === 'AVANÇADO' ? 180 : 120;
      state.coins += activeChallenge.difficulty === 'BOSS' ? 150 : 60;
      unlockNextWorldIfNeeded();
    }

    state.lives = Math.max(state.lives, 1);
    saveState();
    setTerminal('✓ CÓDIGO ACEITO\nA runa respondeu ao seu comando. Caminho liberado!', 'success');
    els.mentorText.textContent = '"Boa. Você não apenas passou — você fez o código obedecer."';
    showToast(firstTime ? '+ XP e moedas! Missão concluída.' : 'Desafio concluído novamente.');
    render();

    setTimeout(() => {
      const world = worlds[activeWorldIndex];
      const next = world.challenges.find(c => !state.completed.includes(c.id));
      if (next) {
        openChallenge(next, world, activeWorldIndex);
      } else {
        closeChallenge();
        showToast(activeWorldIndex < worlds.length - 1 ? 'Novo reino desbloqueado!' : 'Você venceu a Dungeon!');
      }
    }, 1100);
  } else {
    state.lives = Math.max(0, state.lives - 1);
    saveState();
    setTerminal('✗ O CÓDIGO NÃO ATIVOU A RUNA\nRevise a estrutura e tente novamente. A dica do Javas pode ajudar.', 'error');
    els.mentorText.textContent = '"Erro não é derrota. Leia a missão, compare com seu código e encontre a diferença."';
    if (state.lives === 0) {
      state.lives = 3;
      saveState();
      showToast('Suas vidas foram restauradas para continuar aprendendo.');
    }
    renderStats();
  }
}

function unlockNextWorldIfNeeded() {
  const world = worlds[activeWorldIndex];
  const completedWorld = world.challenges.every(c => state.completed.includes(c.id));
  if (completedWorld && activeWorldIndex < worlds.length - 1) {
    state.unlockedWorld = Math.max(state.unlockedWorld, activeWorldIndex + 1);
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function continueAdventure() {
  let target = Math.min(state.unlockedWorld, worlds.length - 1);
  for (let i = 0; i <= state.unlockedWorld; i++) {
    if (worlds[i].challenges.some(c => !state.completed.includes(c.id))) {
      target = i;
      break;
    }
  }
  openNextChallenge(target);
}

function resetGame() {
  const confirmed = confirm('Tem certeza que deseja apagar seu progresso e começar um novo jogo?');
  if (!confirmed) return;
  state = { ...defaultState };
  saveState();
  els.mentorText.textContent = '"Toda grande jornada começa com uma linha de código."';
  render();
  showToast('Novo jogo iniciado.');
}

document.getElementById('continueBtn').addEventListener('click', continueAdventure);
document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('closeModal').addEventListener('click', closeChallenge);
document.getElementById('runBtn').addEventListener('click', runChallenge);
document.getElementById('restoreBtn').addEventListener('click', () => {
  if (activeChallenge) {
    els.codeEditor.value = activeChallenge.starter;
    setTerminal('> Código inicial restaurado.');
  }
});
els.modal.addEventListener('click', event => {
  if (event.target === els.modal) closeChallenge();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !els.modal.classList.contains('hidden')) closeChallenge();
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter' && !els.modal.classList.contains('hidden')) runChallenge();
});
els.codeEditor.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const start = els.codeEditor.selectionStart;
    const end = els.codeEditor.selectionEnd;
    els.codeEditor.value = `${els.codeEditor.value.substring(0, start)}  ${els.codeEditor.value.substring(end)}`;
    els.codeEditor.selectionStart = els.codeEditor.selectionEnd = start + 2;
  }
});

render();
