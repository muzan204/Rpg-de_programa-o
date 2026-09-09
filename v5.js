// Code Dungeon 5.0 — camada de evolução sem quebrar saves antigos
(function(){
  // Compatibilidade com nomes usados pela V4
  window.saveState = window.saveState || function(){ try{ if(typeof save==='function') save(); }catch(e){} };
  window.showToast = window.showToast || function(msg){ try{ if(typeof toast==='function') toast(msg); else console.log(msg); }catch(e){console.log(msg);} };

  const KEY='codeDungeonV5';
  const defaults={map:{x:2,y:2,visited:['2,2'],chests:[],npcs:[]},equipment:{helmet:null,ring:null,amulet:null},petXP:0,petLevel:1,boss:{phase:1,maxPhase:3},effects:[],weeklyDone:[],weeklyDate:'',stats:{steps:0,chests:0,bosses:0}};
  let v5={...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')};
  v5.map={...defaults.map,...(v5.map||{})};v5.equipment={...defaults.equipment,...(v5.equipment||{})};v5.boss={...defaults.boss,...(v5.boss||{})};v5.stats={...defaults.stats,...(v5.stats||{})};
  const save5=()=>localStorage.setItem(KEY,JSON.stringify(v5));
  const $=id=>document.getElementById(id);

  const mapTiles=[
    ['🌲','🌲','🚪','🌲','🌲'],
    ['🌲','🧙','⬜','💎','🌲'],
    ['🪨','⬜','⬜','⬜','👾'],
    ['🌲','💎','⬜','🏪','🌲'],
    ['🌲','🌲','👑','🌲','🌲']
  ];
  function tileAt(x,y){return mapTiles[y]?.[x]||'🌲'}
  function ensureV5UI(){
    const worlds=document.querySelector('.worlds-section'); if(!worlds||$('map2dSection'))return;
    const map=document.createElement('section');map.id='map2dSection';map.className='panel v5-section';map.innerHTML=`<div class="section-heading"><div><p class="eyebrow">EXPLORAÇÃO REAL</p><h2>🗺️ Mapa 2D</h2></div><span id="mapCoords">2,2</span></div><div class="map-layout"><div id="mapGrid" class="map-grid"></div><aside class="map-info"><h3 id="tileTitle">Sala Central</h3><p id="tileDesc">Explore para encontrar NPCs, baús, loja e chefões.</p><div class="map-controls"><button data-dir="up">↑</button><button data-dir="left">←</button><button data-dir="down">↓</button><button data-dir="right">→</button></div><button class="btn btn-primary full" id="interactTile">INTERAGIR</button></aside></div>`;
    worlds.parentNode.insertBefore(map,worlds);

    const inv=document.querySelector('.inventory-panel');
    const gear=document.createElement('section');gear.id='gearSection';gear.className='panel v5-section';gear.innerHTML=`<div class="section-heading"><div><p class="eyebrow">EQUIPAMENTO</p><h2>🧰 Slots avançados</h2></div></div><div class="gear-grid"><div>👑<small>CAPACETE</small><strong id="helmetSlot">Vazio</strong></div><div>💍<small>ANEL</small><strong id="ringSlot">Vazio</strong></div><div>📿<small>AMULETO</small><strong id="amuletSlot">Vazio</strong></div><div>🐉<small>PET</small><strong id="petLevelSlot">Nv. 1</strong></div></div>`;
    inv.parentNode.insertBefore(gear,inv);

    const quest=document.getElementById('questSection');
    if(quest){const weekly=document.createElement('section');weekly.className='panel feature-card';weekly.innerHTML=`<div class="section-heading"><div><p class="eyebrow">SEMANAL</p><h2>🗓️ Quests Semanais</h2></div></div><div id="weeklyGrid" class="list-grid"></div>`;quest.appendChild(weekly);}

    document.querySelector('.quick-nav')?.insertAdjacentHTML('beforeend','<button data-scroll="map2dSection">🗺️ Mapa 2D</button>');
    document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
    document.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>move(b.dataset.dir));
    $('interactTile').onclick=interact;
  }

  function renderMap(){if(!$('mapGrid'))return;$('mapGrid').innerHTML='';mapTiles.forEach((row,y)=>row.forEach((tile,x)=>{const c=document.createElement('button');c.className='map-tile'+(v5.map.x===x&&v5.map.y===y?' player-tile':'');c.textContent=v5.map.x===x&&v5.map.y===y?'🧑‍💻':tile;c.title=`${x},${y}`;$('mapGrid').appendChild(c)}));$('mapCoords').textContent=`${v5.map.x},${v5.map.y}`;describeTile();}
  function move(dir){const d={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[dir];if(!d)return;const nx=v5.map.x+d[0],ny=v5.map.y+d[1];if(nx<0||ny<0||nx>=5||ny>=5||tileAt(nx,ny)==='🌲'||tileAt(nx,ny)==='🪨'){showToast('⛔ Caminho bloqueado');return;}v5.map.x=nx;v5.map.y=ny;v5.stats.steps++;const k=`${nx},${ny}`;if(!v5.map.visited.includes(k))v5.map.visited.push(k);save5();renderMap();}
  function describeTile(){const t=tileAt(v5.map.x,v5.map.y);const info={
    '⬜':['Corredor Digital','Uma passagem segura entre os reinos.'],'🧙':['Javas','Seu mentor aguarda uma conversa.'],'💎':['Baú de Dados','Pode conter moedas, fragmentos ou equipamento.'],'🏪':['Loja do Byte','Acesso direto ao mercador.'],'👾':['Zona de Combate','Um inimigo bloqueia o caminho.'],'👑':['Portal do Chefão','Prepare-se para uma batalha em fases.'],'🚪':['Portal','Uma saída para outra região.']
  }[t]||['Terreno','Nada especial aqui.'];$('tileTitle').textContent=info[0];$('tileDesc').textContent=info[1];}
  function interact(){const t=tileAt(v5.map.x,v5.map.y),k=`${v5.map.x},${v5.map.y}`;if(t==='💎'){if(v5.map.chests.includes(k))return showToast('📦 Baú já aberto');v5.map.chests.push(k);v5.stats.chests++;try{state.coins+=120;save();render();}catch(e){};v5.petXP+=25;showToast('💎 +120 moedas • +25 XP do pet');checkPetLevel();}else if(t==='🧙'){document.getElementById('talkBtn')?.click();}else if(t==='🏪'){document.getElementById('shopBtn')?.click();}else if(t==='👾'){document.getElementById('attackBtn')?.click();}else if(t==='👑'){startBossPhase();}else if(t==='🚪'){showToast('🚪 Portal ativado!');}else showToast('Nada para interagir aqui.');save5();renderAll();}

  function checkPetLevel(){const need=v5.petLevel*50;if(v5.petXP>=need){v5.petXP-=need;v5.petLevel++;showToast(`🐉 Pet evoluiu para nível ${v5.petLevel}!`);}}
  function startBossPhase(){v5.boss.phase=Math.max(1,v5.boss.phase);document.getElementById('arena')?.classList.add('boss-mode');const log=$('battleLog');if(log)log.textContent=`BOSS — Fase ${v5.boss.phase}/${v5.boss.maxPhase}: resolva o desafio para quebrar o núcleo.`;document.getElementById('attackBtn')?.click();}

  const originalRun=$('runBtn')?.onclick;
  if($('runBtn')&&originalRun){$('runBtn').onclick=function(){const before=Array.isArray(window.state?.completed)?window.state.completed.length:null;originalRun();setTimeout(()=>{try{const after=state.completed.length;if(before!==null&&after>before){v5.petXP+=10;checkPetLevel();const activeDiff=window.active?.difficulty||'';if(document.getElementById('arena')?.classList.contains('boss-mode')){v5.boss.phase++;if(v5.boss.phase>v5.boss.maxPhase){v5.boss.phase=1;v5.stats.bosses++;document.getElementById('arena')?.classList.remove('boss-mode');showToast('👑 CHEFÃO DERROTADO!');}else showToast(`⚔️ Fase ${v5.boss.phase-1} vencida! Próxima fase desbloqueada.`);}save5();renderAll();}},950);};}

  function renderGear(){if($('helmetSlot'))$('helmetSlot').textContent=v5.equipment.helmet||'Vazio';if($('ringSlot'))$('ringSlot').textContent=v5.equipment.ring||'Vazio';if($('amuletSlot'))$('amuletSlot').textContent=v5.equipment.amulet||'Vazio';if($('petLevelSlot'))$('petLevelSlot').textContent=`Nv. ${v5.petLevel} • ${v5.petXP}/${v5.petLevel*50} XP`;}
  function weekKey(){const d=new Date();const jan=new Date(d.getFullYear(),0,1);return `${d.getFullYear()}-W${Math.ceil((((d-jan)/86400000)+jan.getDay()+1)/7)}`}
  function renderWeekly(){const g=$('weeklyGrid');if(!g)return;const wk=weekKey();if(v5.weeklyDate!==wk){v5.weeklyDate=wk;v5.weeklyDone=[];save5();}const qs=[['w1','Andar 20 passos',v5.stats.steps>=20,250],['w2','Abrir 2 baús',v5.stats.chests>=2,300],['w3','Derrotar 1 chefão',v5.stats.bosses>=1,450]];g.innerHTML='';qs.forEach(([id,n,ok,r])=>{const done=v5.weeklyDone.includes(id);const d=document.createElement('div');d.className='quest-card';d.innerHTML=`<h4>${done?'✅':'🗓️'} ${n}</h4><p>Recompensa: 🪙 ${r}</p>${ok&&!done?`<button class="btn btn-primary" data-week="${id}">RESGATAR</button>`:''}`;g.appendChild(d)});g.querySelectorAll('[data-week]').forEach(b=>b.onclick=()=>{const q=qs.find(x=>x[0]===b.dataset.week);if(!q)return;v5.weeklyDone.push(q[0]);try{state.coins+=q[3];save();render();}catch(e){}showToast(`🗓️ +${q[3]} moedas`);save5();renderWeekly();});}
  function renderAll(){renderMap();renderGear();renderWeekly();}

  ensureV5UI();renderAll();
})();