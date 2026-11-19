/* ============================================================
   DATOS DE LA WIKI — aquí puedes añadir partes, personajes y Stands
   ============================================================ */

// PARTES: [número, nombre, protagonista, antagonista, años del manga, adaptación anime, descripción]
// PARA AÑADIR UNA NUEVA PARTE: copia una línea, cambia los datos y pon su imagen en images/parts/parteN.jpg
const PARTS = [
 [1,'Phantom Blood','Jonathan Joestar','Dio Brando','1987–1989','Anime (2012)','Inglaterra, siglo XIX. Jonathan Joestar se enfrenta a su hermano adoptivo Dio, que usa una máscara de piedra para convertirse en vampiro.'],
 [2,'Battle Tendency','Joseph Joestar','Kars','1989–1990','Anime (2012–2013)','En 1938, Joseph Joestar, nieto de Jonathan, se enfrenta a los Hombres del Pilar, seres ancestrales que buscan la Piedra Roja de Aja.'],
 [3,'Stardust Crusaders','Jotaro Kujo','DIO','1989–1992','Anime (2014–2016)','Jotaro y sus aliados viajan a Egipto para derrotar a DIO y salvar a la madre de Jotaro, Holy, de una maldición.'],
 [4,'Diamond is Unbreakable','Josuke Higashikata','Yoshikage Kira','1992–1995','Anime (2016)','En la ciudad de Morioh, Josuke y sus amigos buscan a un asesino en serie con un Stand que se oculta entre los vecinos.'],
 [5,'Golden Wind (Vento Aureo)','Giorno Giovanna','Diavolo','1995–1999','Anime (2018–2019)','Giorno quiere convertirse en un gángster de buen corazón y ascender en la banda Passione, liderada por el misterioso jefe.'],
 [6,'Stone Ocean','Jolyne Cujoh','Enrico Pucci','2000–2003','Anime (Netflix, 2021–2022)','Jolyne es encarcelada injustamente en una prisión de Florida y descubre un complot ligado al legado de DIO.'],
 [7,'Steel Ball Run','Johnny Joestar y Gyro Zeppeli','Funny Valentine','2004–2011','Anime anunciado por Netflix; comprueba su estado de emisión','Carrera de caballos a través de EE. UU. en 1890. Johnny, un jinete paralítico, y Gyro, un verdugo italiano, compiten y descubren una conspiración. Universo aparte de las partes 1-6.'],
 [8,'JoJolion','Josuke Higashikata (Gappy)','Tooru','2011–2021','Sin adaptación al anime','En Morioh (otro universo), un joven sin memoria es hallado entre los escombros de un terremoto y busca su identidad.'],
 [9,'The JOJOLands','Jodio Joestar','Por determinar (serie en publicación)','2023–actualidad','Sin adaptación al anime','Ambientada en Hawái, Jodio Joestar y su grupo planean un atraco. La serie aún se está publicando.']
];

// PERSONAJES: [id (nombre de la imagen), nombre, parte, rol, Stand, descripción]
// PARA AÑADIR UN PERSONAJE: copia una línea. Su imagen: images/characters/<id>.jpg
const CHARS = [
 ['jonathan','Jonathan Joestar',1,'protagonista','—','Joven noble, íntegro y valiente. Domina la técnica Hamon para enfrentarse a Dio.'],
 ['dio-brando','Dio Brando',1,'antagonista','—','Ambicioso y cruel; arruina la vida de Jonathan y se convierte en vampiro.'],
 ['joseph','Joseph Joestar',2,'protagonista','—','Joven astuto y bromista que gana combates con ingenio y Hamon. Vuelve en la Parte 3.'],
 ['kars','Kars',2,'antagonista','—','Líder de los Hombres del Pilar; busca la perfección biológica.'],
 ['esidisi','Esidisi',2,'antagonista','—','Hombre del Pilar con sangre ardiente; feroz y orgulloso.'],
 ['wamuu','Wamuu',2,'antagonista','—','Hombre del Pilar guerrero, con un honor propio que lo hace memorable.'],
 ['jotaro','Jotaro Kujo',3,'protagonista','Star Platinum','Estudiante serio y fuerte. Protagonista de la Parte 3; reaparece en la 4 y la 6.'],
 ['dio','DIO',3,'antagonista','The World','Vampiro inmortal que domina el mundo desde Egipto.'],
 ['polnareff','Jean Pierre Polnareff',3,'secundario','Silver Chariot','Espadachín francés que busca vengar a su hermana.'],
 ['joseph-3','Joseph Joestar',3,'secundario','Hermit Purple','Ya anciano, acompaña a su nieto Jotaro al viaje a Egipto.'],
 ['kakyoin','Noriaki Kakyoin',3,'secundario','Hierophant Green','Joven reservado y estratega; se une al grupo de Jotaro.'],
 ['avdol','Muhammad Avdol',3,'secundario','Magician\'s Red','Adivino egipcio, sereno y leal, guía del grupo.'],
 ['iggy','Iggy',3,'secundario','The Fool','Perro callejero terco que se une al viaje.'],
 ['josuke','Josuke Higashikata',4,'protagonista','Crazy Diamond','Estudiante de peinado clásico, amable pero explosivo si insultan su pelo.'],
 ['kira','Yoshikage Kira',4,'antagonista','Killer Queen','Asesino en serie que desea vivir una vida tranquila.'],
 ['okuyasu','Okuyasu Nijimura',4,'secundario','The Hand','Amigo de Josuke, poco brillante pero leal.'],
 ['koichi','Koichi Hirose',4,'secundario','Echoes','Chico corriente que madura a lo largo de la historia.'],
 ['rohan','Rohan Kishibe',4,'secundario','Heaven\'s Door','Mangaka excéntrico y orgulloso.'],
 ['giorno','Giorno Giovanna',5,'protagonista','Gold Experience','Hijo de DIO, decidido a ser un gángster que proteja a la gente.'],
 ['diavolo','Diavolo',5,'antagonista','King Crimson','Líder de Passione, obsesionado con ocultar su identidad.'],
 ['bucciarati','Bruno Bucciarati',5,'secundario','Sticky Fingers','Capo del equipo de Giorno; justo y firme.'],
 ['mista','Guido Mista',5,'secundario','Sex Pistols','Pistolero supersticioso, tiene miedo al número cuatro.'],
 ['narancia','Narancia Ghirga',5,'secundario','Aerosmith','Joven impulsivo y leal.'],
 ['abbacchio','Leone Abbacchio',5,'secundario','Moody Blues','Ex-policía desencantado que se une al equipo.'],
 ['fugo','Pannacotta Fugo',5,'secundario','Purple Haze','Inteligente y de mal genio.'],
 ['jolyne','Jolyne Cujoh',6,'protagonista','Stone Free','Hija de Jotaro, enérgica y rebelde.'],
 ['pucci','Enrico Pucci',6,'antagonista','Made in Heaven','Sacerdote devoto de DIO, quiere cumplir los planes de su amigo.'],
 ['ermes','Ermes Costello',6,'secundario','Kiss','Reclusa de carácter fuerte que se alía con Jolyne.'],
 ['foo-fighters','Foo Fighters',6,'secundario','Foo Fighters (es un Stand autónomo)','Colonia de plancton con conciencia propia que se une a Jolyne.'],
 ['weather-report','Weather Report',6,'secundario','Weather Report','Preso con el poder de manipular el clima; se une al grupo de Jolyne.'],
 ['anasui','Narciso Anasui',6,'secundario','Diver Down','Preso de carácter peculiar y cercano a Jolyne.'],
 ['johnny','Johnny Joestar',7,'protagonista','Tusk','Exjinete que busca recuperar su capacidad de caminar.'],
 ['gyro','Gyro Zeppeli',7,'protagonista','Ball Breaker','Verdugo italiano que domina la rotación de las bolas de acero.'],
 ['valentine','Funny Valentine',7,'antagonista','D4C','Presidente de los EE. UU., ferviente patriota.'],
 ['diego','Diego Brando',7,'antagonista','Scary Monsters','Jinete ambicioso y feroz, rival de Johnny.'],
 ['josuke-8','Josuke Higashikata (Gappy)',8,'protagonista','Soft & Wet','Joven que ha perdido la memoria; es el protagonista de JoJolion.'],
 ['tooru','Tooru',8,'antagonista','Wonder of U','Antagonista principal de JoJolion; su poder causa calamidades.'],
 ['yasuho','Yasuho Hirose',8,'secundario','Paisley Park','Aliada de Josuke; destaca por su iniciativa.'],
 ['rai','Rai Mamezuku',8,'secundario','November Rain','Hombre misterioso con un poder vinculado a una especie de vórtice.'],
 ['jodio','Jodio Joestar',9,'protagonista','Smooth Operators','Protagonista de The JOJOLands, tiene una mente calculadora.'],
 ['dragona','Dragona Joestar',9,'secundario','Por confirmar','Aliada del grupo de Jodio; la serie sigue en publicación.'],
 ['paco','Paco Laburantes',9,'secundario','Por confirmar','Miembro del grupo; la serie sigue en publicación.'],
 ['usagi','Usagi Alohaoe',9,'secundario','Por confirmar','Aliado del grupo; la serie sigue en publicación.'],
 ['acca','Acca Howler',9,'secundario','Por confirmar','Personaje de la Parte 9; la serie sigue en publicación.']
];

// STANDS: [id, nombre, usuario, parte, tipo, descripción, habilidades]
// PARA AÑADIR UN STAND: copia una línea. Su imagen: images/stands/<id>.jpg
const STANDS = [
 ['star-platinum','Star Platinum','Jotaro Kujo',3,'Corto alcance','Stand de gran fuerza y precisión.','Puñetazos muy rápidos (ORA), precisión extrema y detención del tiempo.'],
 ['the-world','The World','DIO',3,'Corto alcance','Stand rival de Star Platinum.','Fuerza y velocidad enormes; detiene el tiempo.'],
 ['hermit-purple','Hermit Purple','Joseph Joestar',3,'Corto alcance','Stand en forma de enredadera.','Zarcillos para atar; permite la adivinación en cámaras, televisores y similares.'],
 ['magicians-red','Magician\'s Red','Muhammad Avdol',3,'Distancia media','Stand con forma de pájaro humanoide.','Genera y controla fuego.'],
 ['hierophant-green','Hierophant Green','Noriaki Kakyoin',3,'Largo alcance','Stand de gran alcance, flexible.','Se extiende; dispara el Emerald Splash.'],
 ['silver-chariot','Silver Chariot','Jean Pierre Polnareff',3,'Corto alcance','Stand caballero con estoque.','Esgrima muy veloz; puede quitar su armadura para ir más rápido.'],
 ['crazy-diamond','Crazy Diamond','Josuke Higashikata',4,'Corto alcance','Stand potente de Josuke.','Restaura lo roto; no cura a su usuario.'],
 ['killer-queen','Killer Queen','Yoshikage Kira',4,'Corto alcance','Stand explosivo con forma de gato.','Convierte objetos en bombas; Sheer Heart Attack; Bites the Dust.'],
 ['the-hand','The Hand','Okuyasu Nijimura',4,'Corto alcance','Stand cuya mano elimina lo que toca.','Borra a la nada lo que toca con la mano.'],
 ['echoes','Echoes','Koichi Hirose',4,'Evolutivo','Stand que evoluciona en tres fases (ACT 1–3).','Texto sonoro, sonidos y peso/golpe.'],
 ['heavens-door','Heaven\'s Door','Rohan Kishibe',4,'Corto alcance','Stand ligado al manga de Rohan.','Convierte a las personas en libros que puede leer y reescribir.'],
 ['gold-experience','Gold Experience','Giorno Giovanna',5,'Corto alcance','Stand creador de vida.','Da vida a objetos inertes; evoluciona a Requiem.'],
 ['sticky-fingers','Sticky Fingers','Bruno Bucciarati',5,'Corto alcance','Stand de cremalleras.','Abre cremalleras en cualquier superficie.'],
 ['king-crimson','King Crimson','Diavolo',5,'Corto alcance','Stand que manipula el tiempo.','Borra el tiempo; Epitaph predice el futuro cercano.'],
 ['sex-pistols','Sex Pistols','Guido Mista',5,'Automático (grupo)','Seis pequeños seres autónomos.','Guían las balas de Mista en la trayectoria.'],
 ['aerosmith','Aerosmith','Narancia Ghirga',5,'Largo alcance','Stand con forma de avión.','Detecta el dióxido de carbono; dispara.'],
 ['moody-blues','Moody Blues','Leone Abbacchio',5,'Corto alcance','Stand reproductor.','Reproduce eventos pasados.'],
 ['purple-haze','Purple Haze','Pannacotta Fugo',5,'Corto alcance','Stand violento y difícil de controlar.','Libera un virus que desintegra a los seres vivos.'],
 ['stone-free','Stone Free','Jolyne Cujoh',6,'Corto alcance','Stand de hilos.','Se deshace en hilos para atar, rastrear y golpear.'],
 ['made-in-heaven','Made in Heaven','Enrico Pucci',6,'Corto alcance','Stand final de Pucci.','Acelera el tiempo y reinicia el universo.'],
 ['kiss','Kiss','Ermes Costello',6,'Corto alcance','Stand de pegatinas.','Duplica objetos mediante sellos que se separan.'],
 ['foo-fighters','Foo Fighters','(Stand autónomo)',6,'Colonia autónoma','Colonia de plancton con conciencia propia.','Dispara proyectiles y puede aliarse con Jolyne.'],
 ['weather-report','Weather Report','Weather Report',6,'Fenómeno','Stand de poder climático.','Controla el clima.'],
 ['diver-down','Diver Down','Narciso Anasui',6,'Corto alcance','Stand que absorbe lo que golpea.','Almacena lo que golpea y lo libera después.'],
 ['tusk','Tusk','Johnny Joestar',7,'Evolutivo','Stand que dispara uñas, evoluciona en Act 1–4.','Dispara las uñas; con la rotación gana nuevos poderes.'],
 ['ball-breaker','Ball Breaker','Gyro Zeppeli',7,'Corto alcance','Stand de rotación.','Usa la rotación de las bolas de acero.'],
 ['d4c','D4C','Funny Valentine',7,'Corto alcance','Stand de Funny Valentine; Dirty Deeds Done Dirt Cheap.','Viaja entre universos paralelos al pasar entre objetos.'],
 ['scary-monsters','Scary Monsters','Diego Brando',7,'Transformación','Stand que transforma a su usuario.','Convierte a Diego (y a otros) en dinosaurio.'],
 ['soft-and-wet','Soft & Wet','Josuke Higashikata (Gappy)',8,'Corto alcance','Stand de burbujas.','Burbujas que roban propiedades (por ejemplo, la fricción).'],
 ['wonder-of-u','Wonder of U','Tooru',8,'Automático (calamidad)','Stand ligado a la calamidad.','Provoca desgracias a quien lo persigue.'],
 ['november-rain','November Rain','Rai Mamezuku',8,'Fenómeno','Stand de efecto climático.','Genera un vórtice; consulta la wiki oficial para más detalle.']
];

// PARTES DESTACADAS EN INICIO: ids de personajes y de Stands de la galería
const FEAT_C = ['jonathan','jotaro','josuke','giorno','jolyne','johnny'];
const FEAT_S = ['star-platinum','the-world','crazy-diamond','gold-experience','killer-queen','made-in-heaven'];

/* ============================================================
   LÓGICA — no hace falta tocar nada de aquí para añadir contenido
   ============================================================ */
const $ = s => document.querySelector(s);
const st = { q:'', part:0, role:'' };

// IMAGEN: si no existe el archivo, se muestra un marcador bonito (sin imágenes rotas)
function ph(el){ const d=document.createElement('div'); d.className='ph'; d.textContent=(el.alt||'?').split(' ').map(w=>w[0]).join('').slice(0,3); el.replaceWith(d); }
window.ph = ph;
// CAMBIAR IMAGEN: coloca tus imágenes en la carpeta correspondiente con el mismo nombre
const img = (src,alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="ph(this)">`;
const norm = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const match = txt => norm(txt).includes(norm(st.q.trim()));
const partName = n => PARTS[n-1][1];

// TARJETAS
const cardChar = c => `<article class="card" data-k="c" data-i="${c[0]}">${img('images/characters/'+c[0]+'.jpg',c[1])}<div class="in-txt"><h3>${c[1]}</h3><p>Parte ${c[2]} · ${partName(c[2])}</p><span class="tag ${c[3]=='antagonista'?'a':''}">${c[3]}</span>${c[4]!='—'?`<span class="tag s">${c[4]}</span>`:''}<p>${c[5]}</p></div></article>`;
const cardStand = s => `<article class="card" data-k="s" data-i="${s[0]}">${img('images/stands/'+s[0]+'.jpg',s[1])}<div class="in-txt"><h3>${s[1]}</h3><p>Usuario: ${s[2]}</p><span class="tag s">${s[4]}</span><span class="tag">Parte ${s[3]}</span></div></article>`;
const cardPart = p => `<article class="card" data-k="p" data-i="${p[0]}">${img('images/parts/parte'+p[0]+'.jpg','Parte '+p[0])}<div class="in-txt"><h3>${p[0]}. ${p[1]}</h3><p>Protagonista: ${p[2]}</p><p>Antagonista: ${p[3]}</p><span class="tag s">${p[5]}</span><p>${p[6]}</p><button class="btn" data-go="${p[0]}">Ver personajes</button></div></article>`;

// FUNCIÓN QUE CONTROLA EL BUSCADOR Y LOS FILTROS
function render(){
  const okC = c => (!st.part||c[2]==st.part) && (!st.role||c[3]==st.role) && (!st.q||match([c[1],c[3],c[4],partName(c[2]),c[5]].join(' ')));
  const okS = s => (!st.part||s[3]==st.part) && (!st.q||match([s[1],s[2],s[4],partName(s[3]),s[6]].join(' ')));
  const okP = p => (!st.part||p[0]==st.part) && (!st.q||match(p.join(' ')));
  const fill = (id,arr,fn) => { $(id).innerHTML = arr.length ? arr.map(fn).join('') : '<p class="empty">No hay resultados. Prueba con otro término o quita algún filtro.</p>'; };
  fill('#partsGrid',PARTS.filter(okP),cardPart);
  fill('#charGrid',CHARS.filter(okC),cardChar);
  fill('#standGrid',STANDS.filter(okS),cardStand);
  reveal();
}
// Animación suave de aparición
function reveal(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.05});
  document.querySelectorAll('.card:not(.in)').forEach(c=>io.observe(c));
}

// FILTROS por parte (botones)
function pills(){
  $('#pills').innerHTML = ['Todas',...PARTS.map(p=>'Parte '+p[0])].map((t,i)=>`<button data-p="${i}" class="${i==st.part?'on':''}">${t}</button>`).join('');
}

// FICHAS DETALLADAS (ventana emergente)
function openCard(k,i){
  let h='';
  if(k=='c'){ const c=CHARS.find(x=>x[0]==i);
    h=`<div class="row">${img('images/characters/'+c[0]+'.jpg',c[1])}<dl><h3>${c[1]}</h3><dt>Parte</dt><dd>${c[2]}. ${partName(c[2])}</dd><dt>Rol</dt><dd>${c[3]}</dd><dt>Stand</dt><dd>${c[4]}</dd><dt>Descripción</dt><dd>${c[5]}</dd></dl></div>`; }
  if(k=='s'){ const s=STANDS.find(x=>x[0]==i);
    h=`<div class="row">${img('images/stands/'+s[0]+'.jpg',s[1])}<dl><h3>${s[1]}</h3><dt>Usuario</dt><dd>${s[2]}</dd><dt>Parte</dt><dd>${s[3]}. ${partName(s[3])}</dd><dt>Tipo</dt><dd>${s[4]}</dd><dt>Descripción</dt><dd>${s[5]}</dd><dt>Habilidades</dt><dd>${s[6]}</dd></dl></div>`; }
  if(k=='p'){ const p=PARTS[i-1];
    h=`<div class="row">${img('images/parts/parte'+p[0]+'.jpg','Parte '+p[0])}<dl><h3>${p[0]}. ${p[1]}</h3><dt>Protagonista</dt><dd>${p[2]}</dd><dt>Antagonista</dt><dd>${p[3]}</dd><dt>Manga</dt><dd>${p[4]}</dd><dt>Anime</dt><dd>${p[5]}</dd><dt>Historia</dt><dd>${p[6]}</dd></dl></div>`; }
  $('#modalBox').innerHTML = h + '<p><button class="btn alt" id="close">Cerrar</button></p>';
  $('#modal').hidden = false;
}
let pending=null, spoilerOk=false;
function ask(k,i){ if(spoilerOk){ openCard(k,i); } else { pending=[k,i]; $('#spoiler').hidden=false; } }

// Un solo listener para todos los clics (tarjetas, filtros, botones)
document.addEventListener('click',e=>{
  const t=e.target;
  if(t.dataset.go){ e.stopPropagation(); st.part=+t.dataset.go; pills(); render(); $('#personajes').scrollIntoView(); return; }
  if(t.dataset.p!==undefined){ st.part=+t.dataset.p; pills(); render(); return; }
  if(t.id=='close'||t.id=='modal'){ $('#modal').hidden=true; return; }
  if(t.id=='spOk'){ spoilerOk=true; $('#spoiler').hidden=true; openCard(...pending); return; }
  if(t.id=='spNo'||t.id=='spoiler'){ $('#spoiler').hidden=true; return; }
  const c=t.closest('.card'); if(c) ask(c.dataset.k,c.dataset.i);
  if(t.closest('#menu a')) $('#menu').classList.remove('open');
});
document.addEventListener('keydown',e=>{ if(e.key=='Escape'){ $('#modal').hidden=true; $('#spoiler').hidden=true; } });
$('#q').addEventListener('input',e=>{ st.q=e.target.value; render(); });
$('#role').addEventListener('change',e=>{ st.role=e.target.value; render(); });
$('#burger').onclick=()=>$('#menu').classList.toggle('open');

// BOTÓN VOLVER ARRIBA
const up=$('#up'); up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{ up.style.display=scrollY>500?'block':'none'; });

// GALERÍA DE DESTACADOS (inicio)
$('#galeria').innerHTML = FEAT_C.map(id=>cardChar(CHARS.find(c=>c[0]==id))).join('');
$('#galeriaS').innerHTML = FEAT_S.map(id=>cardStand(STANDS.find(s=>s[0]==id))).join('');

// RELLENAR LISTAS DEL FORMULARIO
$('#fParte').insertAdjacentHTML('beforeend',PARTS.map(p=>`<option>${p[0]}. ${p[1]}</option>`).join(''));
$('#fAnta').insertAdjacentHTML('beforeend',CHARS.filter(c=>c[3]=='antagonista').map(c=>`<option>${c[1]}</option>`).join(''));
$('#dChar').innerHTML = CHARS.map(c=>`<option value="${c[1]}">`).join('');
$('#dStand').innerHTML = STANDS.map(s=>`<option value="${s[1]}">`).join('');

// FORMULARIO: valida, muestra confirmación y vuelve al inicio (no se envía nada a Internet)
$('#jojoForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target, msg=$('#formMsg');
  const vacio=[...f.elements].find(x=>x.name && x.required && !x.value.trim());
  if(vacio){ msg.className='err'; msg.textContent='Completa todos los campos obligatorios (*).'; vacio.focus(); return; }
  if(f.opinion.value.trim().length<10){ msg.className='err'; msg.textContent='Tu opinión debe tener al menos 10 caracteres.'; f.opinion.focus(); return; }
  msg.className='ok'; msg.textContent='¡Gracias, '+f.nombre.value.trim()+'! Tu opinión se ha registrado en este navegador. Volviendo al inicio…';
  f.querySelector('button').disabled=true;
  setTimeout(()=>{ f.reset(); msg.textContent=''; f.querySelector('button').disabled=false; location.hash='#inicio'; scrollTo({top:0,behavior:'smooth'}); },2500);
});

pills(); render(); reveal();
