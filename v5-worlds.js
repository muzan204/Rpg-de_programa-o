// Expansão de reinos da Code Dungeon 5.0
(function(){
if(typeof worlds==='undefined')return;
const extra=[
{id:'git',name:'Fortaleza Git',icon:'🌿',description:'Domine versionamento, commits e branches.',enemy:['Merge Conflict','⚔️'],challenges:[
{id:'git-1',title:'Primeiro Commit',difficulty:'MÉDIO',story:'O portão exige um registro de mudança.',objective:'Escreva o comando git commit -m "checkpoint".',hint:'Use git commit com -m.',starter:'# terminal\n',validate:c=>/git\s+commit\s+-m\s+["']checkpoint["']/i.test(c)},
{id:'git-2',title:'Chefe: Merge Conflict',difficulty:'BOSS',story:'Duas linhas temporais de código colidiram.',objective:'Crie uma branch chamada dungeon com git checkout -b dungeon.',hint:'Use checkout -b.',starter:'# terminal\n',validate:c=>/git\s+checkout\s+-b\s+dungeon/i.test(c)}]},
{id:'node',name:'Masmorras Node.js',icon:'🟢',description:'Crie servidores e rotas no reino backend.',enemy:['Callback Beast','🐲'],challenges:[
{id:'node-1',title:'Servidor Desperto',difficulty:'AVANÇADO',story:'O núcleo precisa escutar uma porta.',objective:'Use app.listen(3000).',hint:'Chame listen com a porta 3000.',starter:'// servidor\n',validate:c=>/app\.listen\s*\(\s*3000/i.test(c)},
{id:'node-2',title:'Chefe: Rota Perdida',difficulty:'BOSS',story:'Uma rota desapareceu do mapa.',objective:'Crie app.get("/status", ...).',hint:'Use app.get para /status.',starter:'// rota\n',validate:c=>/app\.get\s*\(\s*["']\/status["']/i.test(c)}]},
{id:'react',name:'Templo React',icon:'⚛️',description:'Domine componentes, props e estado.',enemy:['Render Specter','👻'],challenges:[
{id:'react-1',title:'Componente Hero',difficulty:'AVANÇADO',story:'A estátua só aparece através de um componente.',objective:'Crie function Hero().',hint:'Declare uma função chamada Hero.',starter:'// componente\n',validate:c=>/function\s+Hero\s*\(/.test(c)},
{id:'react-2',title:'Chefe: Estado Infinito',difficulty:'BOSS',story:'O templo re-renderiza sem parar.',objective:'Use useState(0).',hint:'Crie um estado inicial 0.',starter:'// estado\n',validate:c=>/useState\s*\(\s*0\s*\)/.test(c)}]},
{id:'security',name:'Cidadela da Segurança',icon:'🛡️',description:'Proteja aplicações contra falhas comuns.',enemy:['Injection Wraith','☠️'],challenges:[
{id:'sec-1',title:'Segredo no Cofre',difficulty:'AVANÇADO',story:'Uma chave não pode permanecer exposta no código.',objective:'Use process.env.API_KEY.',hint:'Leia a variável pelo process.env.',starter:'// segredo\n',validate:c=>/process\.env\.API_KEY/.test(c)},
{id:'sec-2',title:'Chefe: Entrada Corrompida',difficulty:'BOSS',story:'Dados não confiáveis atravessam a muralha.',objective:'Use encodeURIComponent(input).',hint:'Codifique a entrada antes de usá-la em URL.',starter:'const input = "";\n',validate:c=>/encodeURIComponent\s*\(\s*input\s*\)/.test(c)}]},
{id:'python',name:'Montanhas Python',icon:'🐍',description:'Use sintaxe Python para atravessar os picos.',enemy:['Indentation Golem','🗿'],challenges:[
{id:'py-1',title:'Função do Pico',difficulty:'MÉDIO',story:'A montanha responde apenas a funções bem definidas.',objective:'Crie def soma(a, b):',hint:'Use def e dois parâmetros.',starter:'# Python\n',validate:c=>/def\s+soma\s*\(\s*a\s*,\s*b\s*\)\s*:/.test(c)},
{id:'py-2',title:'Chefe: Loop da Serpente',difficulty:'BOSS',story:'A serpente exige cinco passos.',objective:'Use for i in range(5):',hint:'range(5) gera cinco iterações.',starter:'# loop\n',validate:c=>/for\s+i\s+in\s+range\s*\(\s*5\s*\)\s*:/.test(c)}]},
{id:'ai',name:'Núcleo da Inteligência',icon:'🤖',description:'Explore conceitos básicos de IA e prompts.',enemy:['Hallucination Core','🧠'],challenges:[
{id:'ai-1',title:'Prompt Estruturado',difficulty:'AVANÇADO',story:'O núcleo exige uma instrução clara.',objective:'Crie const prompt contendo as palavras objetivo e contexto.',hint:'Inclua objetivo e contexto no texto.',starter:'const prompt = `\n`;\n',validate:c=>/prompt[\s\S]*objetivo[\s\S]*contexto/i.test(c)},
{id:'ai-2',title:'Chefe Final: Hallucination Core',difficulty:'BOSS',story:'A IA deve retornar dados estruturados.',objective:'Use JSON.parse(response).',hint:'Converta response para JSON.',starter:'// resposta\n',validate:c=>/JSON\.parse\s*\(\s*response\s*\)/.test(c)}]}
];
extra.forEach(w=>{if(!worlds.some(x=>x.id===w.id))worlds.push(w)});
try{render();}catch(e){console.warn('Falha ao renderizar expansão',e)}
})();