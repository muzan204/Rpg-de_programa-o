(() => {
const EXTRA_MISSIONS = {
 html:[
  {id:'html-3',title:'Selo da Imagem',difficulty:'INICIANTE',story:'Uma runa visual precisa de uma imagem para revelar o caminho.',objective:'Crie uma tag img com src="hero.png" e alt="Heroi".',hint:'Use os atributos src e alt.',starter:'<!-- invoque a imagem -->\n',validate:c=>/<img[^>]*src=["']hero\.png["'][^>]*alt=["']Heroi["'][^>]*>/i.test(c)},
  {id:'html-4',title:'Lista dos Guardiões',difficulty:'INICIANTE',story:'Os nomes dos guardiões devem ser inscritos em uma lista.',objective:'Crie uma ul com pelo menos dois elementos li.',hint:'Use <ul> envolvendo duas tags <li>.',starter:'<!-- lista -->\n',validate:c=>(c.match(/<li\b/gi)||[]).length>=2&&/<ul\b/i.test(c)},
  {id:'html-5',title:'Portal do Formulário',difficulty:'MÉDIO',story:'O portal pede uma identificação antes de abrir.',objective:'Crie um form contendo um input com type="text".',hint:'O input deve ficar dentro de <form>.',starter:'<!-- formulário -->\n',validate:c=><any>false},
  {id:'html-6',title:'Chefe: Semântica Sombria',difficulty:'BOSS',story:'O Guardião Semântico só reconhece estruturas modernas.',objective:'Use header, main e footer na mesma página.',hint:'Inclua as três tags semânticas.',starter:'<!-- estrutura semântica -->\n',validate:c=>/<header\b/i.test(c)&&/<main\b/i.test(c)&&/<footer\b/i.test(c)}
 ],
 css:[
  {id:'css-3',title:'Escudo Responsivo',difficulty:'MÉDIO',story:'O escudo deve se adaptar ao tamanho da arena.',objective:'Crie uma media query com max-width: 600px.',hint:'Use @media (max-width: 600px).',starter:'/* responsividade */\n',validate:c=>/@media\s*\(\s*max-width\s*:\s*600px\s*\)/i.test(c)},
  {id:'css-4',title:'Grade Arcana',difficulty:'MÉDIO',story:'As pedras precisam se organizar em uma grade.',objective:'Defina display: grid em .runes.',hint:'.runes { display: grid; }',starter:'.runes {\n\n}',validate:c=>/\.runes\s*\{[^}]*display\s*:\s*grid/is.test(c)},
  {id:'css-5',title:'Animação de Mana',difficulty:'AVANÇADO',story:'O cristal precisa pulsar continuamente.',objective:'Crie @keyframes pulse.',hint:'Declare @keyframes pulse { ... }',starter:'/* animação */\n',validate:c=>/@keyframes\s+pulse\s*\{/i.test(c)},
  {id:'css-6',title:'Chefe: Layout Fantasma',difficulty:'BOSS',story:'O chefe desmonta layouts que não centralizam corretamente.',objective:'Na classe .boss, use display:flex, align-items:center e justify-content:center.',hint:'As três propriedades ficam no mesmo seletor.',starter:'.boss {\n\n}',validate:c=>/\.boss\s*\{(?=[^}]*display\s*:\s*flex)(?=[^}]*align-items\s*:\s*center)(?=[^}]*justify-content\s*:\s*center)[^}]*\}/is.test(c)}
 ],
 js:[
  {id:'js-3',title:'Array de Relíquias',difficulty:'MÉDIO',story:'Relíquias dispersas precisam ser agrupadas.',objective:'Crie const relics como um array com pelo menos 3 itens.',hint:'const relics = [ ... ];',starter:'// relíquias\n',validate:c=>/const\s+relics\s*=\s*\[[\s\S]*,[\s\S]*,[\s\S]*\]/i.test(c)},
  {id:'js-4',title:'Função de Cura',difficulty:'MÉDIO',story:'Sua equipe precisa de uma magia reutilizável.',objective:'Crie function heal() que retorne 25.',hint:'Use return 25 dentro da função.',starter:'// função\n',validate:c=>/function\s+heal\s*\(\s*\)\s*\{[^}]*return\s+25/is.test(c)},
  {id:'js-5',title:'Filtro de Monstros',difficulty:'AVANÇADO',story:'Só monstros acima do nível 10 interessam ao caçador.',objective:'Use .filter com condição level > 10.',hint:'Exemplo: monsters.filter(m => m.level > 10)',starter:'const monsters = [];\n',validate:c=>/\.filter\s*\([^)]*=>[^)]*\.level\s*>\s*10/i.test(c)},
  {id:'js-6',title:'Chefe: Promise Eterna',difficulty:'BOSS',story:'Uma promessa assíncrona prende a torre em um loop temporal.',objective:'Crie uma async function e use await dentro dela.',hint:'Combine async function com await.',starter:'// magia assíncrona\n',validate:c=>/async\s+function\s+\w+\s*\([^)]*\)\s*\{[\s\S]*await\s+/i.test(c)}
 ],
 sql:[
  {id:'sql-3',title:'Ordenação dos Campeões',difficulty:'MÉDIO',story:'O mural precisa mostrar os melhores primeiro.',objective:'Selecione players ordenando score em ordem decrescente.',hint:'ORDER BY score DESC',starter:'-- ranking\n',validate:c=>/select[\s\S]+from\s+players[\s\S]+order\s+by\s+score\s+desc/i.test(c)},
  {id:'sql-4',title:'Contagem da Guilda',difficulty:'MÉDIO',story:'Descubra quantos membros sobreviveram.',objective:'Use COUNT(*) na tabela guild.',hint:'SELECT COUNT(*) FROM guild;',starter:'-- contagem\n',validate:c=>/select\s+count\s*\(\s*\*\s*\)\s+from\s+guild/i.test(c)},
  {id:'sql-5',title:'Junção dos Reinos',difficulty:'AVANÇADO',story:'Heróis e guildas estão separados em tabelas diferentes.',objective:'Faça um JOIN entre heroes e guilds.',hint:'Use JOIN guilds na consulta.',starter:'-- join\n',validate:c=>/from\s+heroes[\s\S]+join\s+guilds/i.test(c)},
  {id:'sql-6',title:'Chefe: Cofre Transacional',difficulty:'BOSS',story:'O cofre só aceita mudanças protegidas por transação.',objective:'Use BEGIN e COMMIT.',hint:'Inicie com BEGIN e finalize com COMMIT.',starter:'-- transação\n',validate:c=>/\bbegin\b/i.test(c)&&/\bcommit\b/i.test(c)}
 ],
 api:[
  {id:'api-3',title:'POST do Ferreiro',difficulty:'AVANÇADO',story:'O ferreiro remoto precisa receber um novo item.',objective:'Use fetch com method: "POST".',hint:'Passe um objeto de opções para fetch.',starter:'// POST\n',validate:c=>/fetch\s*\([\s\S]+method\s*:\s*["']POST["']/i.test(c)},
  {id:'api-4',title:'Cabeçalho Arcano',difficulty:'AVANÇADO',story:'A API real exige identificação JSON.',objective:'Inclua Content-Type: application/json nos headers.',hint:'Use headers com Content-Type.',starter:'// headers\n',validate:c=>/Content-Type["']?\s*:\s*["']application\/json["']/i.test(c)},
  {id:'api-5',title:'Tratamento do Caos',difficulty:'AVANÇADO',story:'Falhas da rede precisam ser capturadas.',objective:'Use .catch para tratar erro de uma Promise.',hint:'Encadeie .catch(error => ...).',starter:'// tratamento\n',validate:c=>/\.catch\s*\(/i.test(c)},
  {id:'api-6',title:'Chefe Final: NULL',difficulty:'BOSS',story:'NULL controla o núcleo da dungeon. Só uma requisição assíncrona completa pode quebrar o selo.',objective:'Crie async function defeatNull(), use await fetch("/api/null") e response.json().',hint:'Use async/await e converta a resposta em JSON.',starter:'// batalha final\n',validate:c=>/async\s+function\s+defeatNull[\s\S]*await\s+fetch\s*\(\s*["']\/api\/null["']\s*\)[\s\S]*\.json\s*\(/i.test(c)}
 ]
};

// Corrige a missão HTML 5 sem usar execução de HTML.
EXTRA_MISSIONS.html[2].validate = c => /<form\b[\s\S]*<input[^>]*type=["']text["'][^>]*>[\s\S]*<\/form>/i.test(c);

if (typeof worlds !== 'undefined') {
  worlds.forEach(w => {
    const extra = EXTRA_MISSIONS[w.id] || [];
    extra.forEach(m => { if (!w.challenges.some(c => c.id === m.id)) w.challenges.push(m); });
  });
}

const v4Default={name:'Dev Aprendiz',classId:'codemancer',hp:100,maxHp:100,mana:100,maxMana:100,atk:10,def:5,crit:5,skillPoints:0,skills:[],pet:'byte-dragon',questsDone:[],dailyDone:[],codex:[],materials:{fragment:0,crystal:0},bossWins:0,currentWorld:0};
let v4={...v4Default,...JSON.parse(localStorage.getItem('codeDungeonV4')||'{}')};
const saveV4=()=>localStorage.setItem('codeDungeonV4',JSON.stringify(v4));
const $=id=>document.getElementById(id);
const classes=[
 {id:'codemancer',icon:'🧙‍♂️',name:'Codemancer',desc:'Especialista em magia lógica.',atk:10,def:5,mana:120},
 {id:'webknight',icon:'🛡️',name:'Web Knight',desc:'Mais defesa e resistência.',atk:8,def:9,mana:90},
 {id:'datamage',icon:'🔮',name:'Data Mage',desc:'Alto poder crítico e energia.',atk:9,def:5,mana:140}
];
const skills=[
 {id:'syntax',name:'Sintaxe Afiada',icon:'⚔️',desc:'+3 ATK',cost:1},{id:'firewall',name:'Firewall',icon:'🛡️',desc:'+3 DEF',cost:1},{id:'cache',name:'Cache Mental',icon:'✨',desc:'+20 Energia',cost:1},
 {id:'critical',name:'Critical Bug',icon:'💥',desc:'+7% crítico',cost:2},{id:'compiler',name:'Compilador Arcano',icon:'🧠',desc:'+5 ATK',cost:2},{id:'root',name:'Root Access',icon:'👑',desc:'Golpe supremo',cost:3}
];
const abilities=[
 {id:'slash',icon:'⚡',name:'Syntax Slash',cost:20,power:1.45},{id:'shield',icon:'🧱',name:'Firewall Shield',cost:18,power:.8},{id:'burst',icon:'💠',name:'Compiler Burst',cost:35,power:2.1},{id:'root',icon:'👑',name:'Root Override',cost:55,power:3.0,requires:'root'}
];
const pets=[
 {id:'byte-dragon',icon:'🐲',name:'Byte Dragon',desc:'+2 ataque'}, {id:'cache-fox',icon:'🦊',name:'Cache Fox',desc:'+10 energia'}, {id:'sql-owl',icon:'🦉',name:'SQL Owl',desc:'+2 defesa'}
];
const quests=[
 {id:'q1',name:'Primeiro Sangue',desc:'Conclua 3 desafios.',goal:3,reward:120,type:'completed'},
 {id:'q2',name:'Explorador',desc:'Desbloqueie 3 mundos.',goal:3,reward:180,type:'world'},
 {id:'q3',name:'Caçador de Chefes',desc:'Conclua 2 desafios BOSS.',goal:2,reward:260,type:'boss'},
 {id:'q4',name:'Mestre da Dungeon',desc:'Conclua 20 desafios.',goal:20,reward:500,type:'completed'}
];
const codex=[['html','🏛️ HTML','Estrutura e semântica da web.'],['css','🎨 CSS','Estilo, layout e animação.'],['js','⚡ JavaScript','Lógica e comportamento.'],['sql','🗄️ SQL','Consultas e dados.'],['api','🌐 APIs','Integração entre sistemas.'],['null','👑 NULL','Entidade final da corrupção.']];

function progressOf(q){if(q.type==='completed')return Math.min(state.completed.length,q.goal);if(q.type==='world')return Math.min((state.unlockedWorld||0)+1,q.goal);if(q.type==='boss')return Math.min(state.completed.filter(id=>id.endsWith('-6')||id==='api-2').length,q.goal);return 0}
function renderV4(){
 const cls=classes.find(c=>c.id===v4.classId)||classes[0];
 $('heroName')&&($('heroName').textContent=v4.name); $('playerNameArena')&&($('playerNameArena').textContent=v4.name.toUpperCase()); $('classLabel')&&($('classLabel').textContent=`Classe: ${cls.name}`);
 $('heroAvatar')&&($('heroAvatar').textContent=cls.icon); $('playerSprite')&&($('playerSprite').textContent=cls.icon);
 $('atkLabel')&&($('atkLabel').textContent=v4.atk); $('defLabel')&&($('defLabel').textContent=v4.def); $('critLabel')&&($('critLabel').textContent=`${v4.crit}%`);
 $('playerHpLabel')&&($('playerHpLabel').textContent=`${v4.hp}/${v4.maxHp}`); $('playerHpBar')&&($('playerHpBar').style.width=`${v4.hp/v4.maxHp*100}%`);
 $('manaLabel')&&($('manaLabel').textContent=`${v4.mana}/${v4.maxMana}`); $('manaBar')&&($('manaBar').style.width=`${v4.mana/v4.maxMana*100}%`);
 $('skillPoints')&&($('skillPoints').textContent=v4.skillPoints);
 const pet=pets.find(p=>p.id===v4.pet)||pets[0]; $('petArena')&&($('petArena').textContent=pet.icon);
 renderQuests();renderSkills();renderAbilities();renderPets();renderCraft();renderCodex();decorateWorlds();
}
function renderQuests(){const g=$('questGrid');if(!g)return;g.innerHTML='';quests.forEach(q=>{const p=progressOf(q),done=v4.questsDone.includes(q.id),ready=p>=q.goal&&!done;const d=document.createElement('div');d.className='quest-card';d.innerHTML=`<h4>${done?'✅':'📜'} ${q.name}</h4><p>${q.desc}</p><div class="quest-meta"><span>${p}/${q.goal}</span><span>🪙 ${q.reward}</span></div>${ready?`<button class="btn btn-primary" data-claim="${q.id}">RESGATAR</button>`:''}`;g.appendChild(d)});g.querySelectorAll('[data-claim]').forEach(b=>b.onclick=()=>claimQuest(b.dataset.claim));$('questCount')&&($('questCount').textContent=`${v4.questsDone.length}/${quests.length}`);renderDaily()}
function claimQuest(id){const q=quests.find(x=>x.id===id);if(!q||v4.questsDone.includes(id)||progressOf(q)<q.goal)return;v4.questsDone.push(id);state.coins+=q.reward;v4.skillPoints++;saveState();saveV4();showToast(`Quest concluída: +${q.reward} moedas e +1 ponto!`);render();renderV4()}
function renderDaily(){const g=$('dailyGrid');if(!g)return;const day=new Date().toISOString().slice(0,10);if(v4.dailyDate!==day){v4.dailyDate=day;v4.dailyDone=[];saveV4()}const ds=[['d1','Resolver 1 desafio',state.completed.length>0,80],['d2','Visitar a loja',!!v4.visitedShop,60],['d3','Usar uma habilidade',!!v4.usedAbility,100]];g.innerHTML=ds.map(d=>`<div class="daily-card"><h4>${v4.dailyDone.includes(d[0])?'✅':'📅'} ${d[1]}</h4><p>Recompensa: 🪙 ${d[3]}</p>${d[2]&&!v4.dailyDone.includes(d[0])?`<button class="btn btn-primary" data-daily="${d[0]}">RESGATAR</button>`:''}</div>`).join('');g.querySelectorAll('[data-daily]').forEach(b=>b.onclick=()=>{const d=ds.find(x=>x[0]===b.dataset.daily);v4.dailyDone.push(d[0]);state.coins+=d[3];saveState();saveV4();render();renderV4();showToast('Recompensa diária coletada!')})}
function renderSkills(){const g=$('skillTree');if(!g)return;g.innerHTML=skills.map(s=>`<div class="skill-node ${v4.skills.includes(s.id)?'unlocked':'locked'}"><h4>${s.icon} ${s.name}</h4><p>${s.desc}</p>${v4.skills.includes(s.id)?'<span class="tag green">DESBLOQUEADA</span>':`<button class="btn btn-ghost" data-skill="${s.id}">${s.cost} PONTO(S)</button>`}</div>`).join('');g.querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>unlockSkill(b.dataset.skill))}
function unlockSkill(id){const s=skills.find(x=>x.id===id);if(!s||v4.skills.includes(id)||v4.skillPoints<s.cost){showToast('Pontos insuficientes.');return}v4.skillPoints-=s.cost;v4.skills.push(id);if(id==='syntax')v4.atk+=3;if(id==='firewall')v4.def+=3;if(id==='cache'){v4.maxMana+=20;v4.mana+=20}if(id==='critical')v4.crit+=7;if(id==='compiler')v4.atk+=5;saveV4();renderV4();showToast(`${s.name} desbloqueada!`)}
function renderAbilities(){const g=$('abilityGrid');if(!g)return;g.innerHTML=abilities.map(a=>{const lock=a.requires&&!v4.skills.includes(a.requires);return`<div class="ability-card"><h4>${a.icon} ${a.name}</h4><p>Custo: ${a.cost} energia • Poder x${a.power}</p><button class="btn ${lock?'btn-ghost':'btn-primary'}" data-ability="${a.id}" ${lock?'disabled':''}>${lock?'BLOQUEADA':'USAR'}</button></div>`}).join('');g.querySelectorAll('[data-ability]').forEach(b=>b.onclick=()=>useAbility(b.dataset.ability))}
function useAbility(id){const a=abilities.find(x=>x.id===id);if(!a||v4.mana<a.cost){showToast('Energia insuficiente.');return}v4.mana-=a.cost;v4.usedAbility=true;const damage=Math.max(1,Math.round(v4.atk*a.power+(Math.random()*6)));damageEnemy(damage,true);saveV4();renderV4()}
function renderPets(){const g=$('petGrid');if(!g)return;g.innerHTML=pets.map(p=>`<div class="pet-card"><div class="pet-icon">${p.icon}</div><h4>${p.name}</h4><p>${p.desc}</p><button class="btn ${v4.pet===p.id?'btn-primary':'btn-ghost'}" data-pet="${p.id}">${v4.pet===p.id?'ATIVO':'EQUIPAR'}</button></div>`).join('');g.querySelectorAll('[data-pet]').forEach(b=>b.onclick=()=>{v4.pet=b.dataset.pet;saveV4();renderV4()})}
function renderCraft(){const g=$('craftGrid');if(!g)return;const recipes=[['Poção Maior','🧪',2,0,()=>{v4.hp=Math.min(v4.maxHp,v4.hp+60)}],['Cristal de Mana','💎',1,1,()=>{v4.mana=Math.min(v4.maxMana,v4.mana+70)}],['Fragmento Dourado','🟨',3,1,()=>{state.coins+=200}]];g.innerHTML=`<p style="color:#8ea1c1">Materiais: 🧩 ${v4.materials.fragment||0} • 💠 ${v4.materials.crystal||0}</p>`+recipes.map((r,i)=>`<div class="craft-card"><h4>${r[1]} ${r[0]}</h4><p>Custa ${r[2]} fragmentos e ${r[3]} cristais.</p><button class="btn btn-ghost" data-craft="${i}">CRIAR</button></div>`).join('');g.querySelectorAll('[data-craft]').forEach(b=>b.onclick=()=>{const r=recipes[+b.dataset.craft];if((v4.materials.fragment||0)<r[2]||(v4.materials.crystal||0)<r[3]){showToast('Materiais insuficientes.');return}v4.materials.fragment-=r[2];v4.materials.crystal-=r[3];r[4]();saveV4();saveState();render();renderV4();showToast(`${r[0]} criado!`)})}
function renderCodex(){const g=$('codexGrid');if(!g)return;g.innerHTML=codex.map(c=>{const unlocked=c[0]==='null'?state.completed.includes('api-6'):state.completed.some(id=>id.startsWith(c[0]+'-'));return`<div class="codex-card ${unlocked?'':'locked'}"><h4>${unlocked?c[1]:'🔒 ???'}</h4><p>${unlocked?c[2]:'Continue explorando para revelar.'}</p></div>`}).join('')}
function decorateWorlds(){document.querySelectorAll('.world-card').forEach((card,i)=>{card.classList.toggle('current-world',i===(state.unlockedWorld||0));if(i===worlds.length-1)card.classList.add('boss-world')})}
function damageEnemy(dmg,ability=false){const hp=$('enemyHp');if(!hp)return;let now=Number(hp.dataset.hp||100);now=Math.max(0,now-dmg);hp.dataset.hp=now;hp.style.width=`${now}%`;popDamage(dmg);$('battleLog')&&($('battleLog').textContent=ability?`Habilidade causou ${dmg} de dano!`:`Seu código causou ${dmg} de dano!`);if(now<=0){v4.materials.fragment=(v4.materials.fragment||0)+1;if(Math.random()>.65)v4.materials.crystal=(v4.materials.crystal||0)+1;v4.skillPoints++;state.coins+=100;hp.dataset.hp=100;setTimeout(()=>hp.style.width='100%',500);saveState();saveV4();showToast('Inimigo derrotado! +100 moedas, material e +1 ponto.');render();renderV4()}}
function popDamage(dmg){const a=$('arena');if(!a)return;const p=document.createElement('span');p.className='damage-pop';p.textContent=`-${dmg}`;p.style.left='72%';p.style.top='42%';a.appendChild(p);setTimeout(()=>p.remove(),850)}
function setupProfile(){const open=$('profileBtn'),modal=$('profileModal'),close=$('closeProfile'),grid=$('classGrid'),save=$('saveProfile');if(!modal||!grid)return;grid.innerHTML=classes.map(c=>`<div class="class-card ${v4.classId===c.id?'selected':''}" data-class="${c.id}"><div style="font-size:2rem">${c.icon}</div><h4>${c.name}</h4><p>${c.desc}</p></div>`).join('');let selected=v4.classId;grid.querySelectorAll('[data-class]').forEach(c=>c.onclick=()=>{selected=c.dataset.class;grid.querySelectorAll('.class-card').forEach(x=>x.classList.toggle('selected',x===c))});open&&(open.onclick=()=>{modal.classList.remove('hidden');$('heroNameInput').value=v4.name});close&&(close.onclick=()=>modal.classList.add('hidden'));save&&(save.onclick=()=>{const cls=classes.find(c=>c.id===selected)||classes[0];v4.name=$('heroNameInput').value.trim()||'Dev Aprendiz';v4.classId=cls.id;v4.atk=Math.max(v4.atk,cls.atk);v4.def=Math.max(v4.def,cls.def);v4.maxMana=Math.max(v4.maxMana,cls.mana);v4.mana=v4.maxMana;saveV4();modal.classList.add('hidden');renderV4();showToast('Herói atualizado!')})}
function setupNav(){document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll)?.scrollIntoView({behavior:'smooth',block:'start'}));$('randomDungeonBtn')&&($('randomDungeonBtn').onclick=()=>{const unlocked=Math.min(state.unlockedWorld||0,worlds.length-1);const i=Math.floor(Math.random()*(unlocked+1));openNextChallenge(i);showToast(`Dungeon aleatória: ${worlds[i].name}`)});$('shopBtn')&&$('shopBtn').addEventListener('click',()=>{v4.visitedShop=true;saveV4();renderDaily()})}

// Chefões ganham destaque ao abrir desafios -6.
const originalOpen=typeof openChallenge==='function'?openChallenge:null;
if(originalOpen){window.openChallenge=(challenge,world,worldIndex)=>{originalOpen(challenge,world,worldIndex);$('arena')?.classList.toggle('boss-mode',challenge.difficulty==='BOSS');v4.currentWorld=worldIndex;saveV4()}}

// Recompensa novos desafios quando o script base conclui uma missão.
document.getElementById('runBtn')?.addEventListener('click',()=>setTimeout(()=>{const id=activeChallenge?.id;if(id&&state.completed.includes(id)&&!v4.codex.includes(id)){v4.codex.push(id);v4.materials.fragment=(v4.materials.fragment||0)+1;if(activeChallenge.difficulty==='BOSS'){v4.bossWins++;v4.materials.crystal=(v4.materials.crystal||0)+1;v4.skillPoints+=2}saveV4();renderV4()}},80));

setupProfile();setupNav();renderV4();
window.addEventListener('storage',renderV4);
})();