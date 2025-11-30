/* script.js — final replacement built from your latest baseline plus fixes */

/* ---------- DATA (movies + tvShows) ---------- */
/* Poster paths assume files placed at assets/posters/<filename>.jpg */
const movies = [
  {
    id: 'm-inception',
    title: 'Inception',
    poster: 'assets/posters/m-inception.jpg',
    img: 'assets/posters/inception-wide.jpg',
    rating: '8.8',
    type: 'Movie',
    year: 2010,
    genre: 'Action, Sci-Fi',
    desc: 'A thief who enters dreams to steal secrets and ideas.',
    runtime: '2h 28m',
    providers: [
      { name: 'Amazon Prime Video', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' },
      { name: 'JioCinema', url: 'https://www.jiocinema.com', logo: 'https://via.placeholder.com/80x32.png?text=Jio' },
    ]
  },
  {
    id: 'm-shawshank',
    title: 'The Shawshank Redemption',
    poster: 'assets/posters/m-theshawshankredemption.jpg',
    img: 'assets/posters/m-theshawshankredemption-wide.jpg',
    rating: '9.3',
    type: 'Movie',
    year: 1994,
    genre: 'Drama',
    desc: 'Hope and friendship inside a corrupt prison.',
    runtime: '2h 22m',
    providers: [
      { name: 'Amazon Video', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' },
      { name: 'Apple TV', url: 'https://tv.apple.com', logo: 'https://via.placeholder.com/80x32.png?text=Apple' }
    ]
  },
  {
    id: 'm-interstellar',
    title: 'Interstellar',
    poster: 'assets/posters/m-interstellar.jpg',
    img: 'assets/posters/m-interstellar.jpg',
    rating: '8.6',
    type: 'Movie',
    year: 2014,
    genre: 'Adventure, Sci-Fi',
    desc: 'Explorers travel a wormhole searching for a new home.',
    runtime: '2h 49m',
    providers: [
      { name: 'Amazon Prime Video', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' },
      { name: 'JioCinema', url: 'https://www.jiocinema.com', logo: 'https://via.placeholder.com/80x32.png?text=Jio' },
    ]
  },
  {
    id: 'm-dune',
    title: 'Dune (2021)',
    poster: 'assets/posters/m-dune.jpg',
    img: 'assets/posters/m-dune-wide.jpg',
    rating: '8.1',
    type: 'Movie',
    year: 2021,
    genre: 'Sci-Fi, Adventure',
    desc: 'Epic sci-fi on a desert planet.',
    runtime: '2h 35m',
    providers: [
      { name: 'Apple TV (check rental/purchase)', url: 'https://tv.apple.com', logo: 'https://via.placeholder.com/80x32.png?text=Apple' },
      { name: 'Amazon Video (check rental/purchase)', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' }
    ]
  },
  {
    id: 'm-tenet',
    title: 'Tenet',
    poster: 'assets/posters/m-tennet.jpg',
    img: 'assets/posters/m-tennet,jpg',
    rating: '7.4',
    type: 'Movie',
    year: 2020,
    genre: 'Action, Sci-Fi',
    desc: 'Time-bending espionage thriller.',
    runtime: '2h 30m',
    providers: [
      { name: 'Amazon Video (Rent/Buy)', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' },
      { name: 'Apple TV (Rent/Buy)', url: 'https://tv.apple.com', logo: 'https://via.placeholder.com/80x32.png?text=Apple' }
    ]
  },
  {
    id: 'm-guardians',
    title: 'Guardians of the Galaxy',
    poster: 'assets/posters/m-guardiansofthegalaxy.jpg',
    img: 'assets/posters/m-guardiansofthegalaxy-wide.jpg',
    rating: '8.0',
    type: 'Movie',
    year: 2014,
    genre: 'Action, Comedy, Sci-Fi',
    desc: 'A band of intergalactic criminals must pull together to stop a fanatical warrior.',
    runtime: '2h 1m',
    providers: [
      { name: 'JioCinema (Subscription)', url: 'https://www.jiocinema.com', logo: 'https://via.placeholder.com/80x32.png?text=Jio' }
    ]
  },
  {
    id: 'm-avengers',
    title: 'The Avengers',
    poster: 'assets/posters/m-theavengers.jpg',
    img: 'assets/posters/m-theavengers.jpg',
    rating: '8.0',
    type: 'Movie',
    year: 2012,
    genre: 'Action, Adventure',
    desc: "Earth's mightiest heroes team up.",
    runtime: '2h 23m',
    providers: [
      { name: 'JioCinema (Subscription)', url: 'https://www.jiocinema.com', logo: 'https://via.placeholder.com/80x32.png?text=Jio' },
      { name: 'VI Movies & TV (Subscription)', url: 'https://www.vimoviesandtv.com', logo: 'https://via.placeholder.com/80x32.png?text=VI' }
    ]
  },
  {
    id: 'm-parasite',
    title: 'Parasite',
    poster: 'assets/posters/m-parasite.jpg',
    img: 'assets/posters/m-parasite.jpg',
    rating: '8.6',
    type: 'Movie',
    year: 2019,
    genre: 'Drama, Thriller',
    desc: 'Class tensions boil over.',
    runtime: '2h 12m',
    providers: [
      { name: 'Sony LIV (Subscription)', url: 'https://www.sonyliv.com', logo: 'https://via.placeholder.com/80x32.png?text=SonyLIV' },
      { name: 'VI Movies & TV (Subscription)', url: 'https://www.vimoviesandtv.com', logo: 'https://via.placeholder.com/80x32.png?text=VI' }
    ]
  },
  {
    id: 'm-johnwick',
    title: 'John Wick',
    poster: 'assets/posters/m-johnwick.jpg',
    img: 'assets/posters/m-johnwick.jpg',
    rating: '7.4',
    type: 'Movie',
    year: 2014,
    genre: 'Action, Crime',
    desc: 'A legendary hitman returns for revenge.',
    runtime: '1h 41m',
    providers: [
      { name: 'Lionsgate Play (Subscription)', url: 'https://www.lionsgateplay.com', logo: 'https://via.placeholder.com/80x32.png?text=Lionsgate' },
      { name: 'Amazon Video (Rent/Buy)', url: 'https://www.amazon.com/Amazon-Video', logo: 'https://via.placeholder.com/80x32.png?text=Prime' },
    ]
  },
  {
    id: 'm-1917',
    title: '1917',
    poster: 'assets/posters/m-1917.jpg',
    img: 'assets/posters/m-1917.jpg',
    rating: '8.3',
    type: 'Movie',
    year: 2019,
    genre: 'Drama, War',
    desc: 'A WWI single-shot style mission.',
    runtime: '1h 59m',
    providers: [
      { name: 'Apple TV (check rental/purchase)', url: 'https://tv.apple.com', logo: 'https://via.placeholder.com/80x32.png?text=Apple' }
    ]
  },
  /* extras */
    { 
    id: 'm-ironman', 
    title:'Iron Man', 
    poster:'assets/posters/m-ironman.jpg', 
    img:'assets/posters/m-ironman.jpg', 
    rating:'7.9', 
    type:'Movie', 
    year:2008, 
    genre:'Action, Adventure, Sci-Fi', 
    desc:'A billionaire inventor builds a high-tech suit of armor.', 
    runtime:'2h 6m', 
    providers:[
      { name: 'JioCinema (JioHotstar)', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/iron-man' },
      // Note: May also be available for rent/buy on platforms like Google Play Movies/Apple TV.
    ] 
  },
  { 
    id: 'm-gonegirl', 
    title:'Gone Girl', 
    poster:'assets/posters/m-gonegirl.jpg', 
    img:'assets/posters/m-gonegirl.jpg', 
    rating:'8.1', 
    type:'Movie', 
    year:2014, 
    genre:'Drama, Mystery, Thriller', 
    desc:'A man becomes the focus of an intense media circus when his wife disappears.', 
    runtime:'2h 29m', 
    providers:[
      { name: 'JioCinema (JioHotstar)', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/gone-girl' },
      { name: 'Vi Movies and TV', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/gone-girl' }
    ] 
  },
  { 
    id: 'm-matrix', 
    title:'The Matrix', 
    poster:'assets/posters/m-thematrix.jpg', 
    img:'assets/posters/m-thematrix.jpg', 
    rating:'8.7', 
    type:'Movie', 
    year:1999, 
    genre:'Action, Sci-Fi', 
    desc:'A hacker discovers reality is a simulation and joins a rebellion.', 
    runtime:'2h 15m', 
    providers:[
      { name: 'Amazon Prime Video', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/the-matrix' },
      { name: 'JioCinema (JioHotstar)', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/the-matrix' },
      { name: 'Amazon Prime Video with Ads', type: 'Subscription (with ads)', link: 'https://www.justwatch.com/in/movie/the-matrix' }
    ] 
  },
  { 
    id: 'm-darkknight', 
    title:'The Dark Knight', 
    poster:'assets/posters/m-thedarkknight.jpg', 
    img:'assets/posters/m-thedarkknight.jpg', 
    rating:'9.0', 
    type:'Movie', 
    year:2008, 
    genre:'Action, Crime, Drama', 
    desc:'Batman faces the Joker in a battle for Gotham\'s soul.', 
    runtime:'2h 32m', 
    providers:[
      { name: 'Amazon Prime Video', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/the-dark-knight' },
      { name: 'JioCinema (JioHotstar)', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/the-dark-knight' },
      { name: 'Amazon Prime Video with Ads', type: 'Subscription (with ads)', link: 'https://www.justwatch.com/in/movie/the-dark-knight' },
      { name: 'Apple TV', type: 'Rent/Buy', link: 'https://tv.apple.com/in/movie/the-dark-knight/umc.cmc.1uf4c3neuc9yxhnjv7t4rd5wa' }
      // Note: Also available for rent/buy on Amazon Video.
    ] 
  },
  { 
    id: 'm-aquietplace', 
    title:'A Quiet Place', 
    poster:'assets/posters/m-thequiteplace.jpg', 
    img:'assets/posters/m-thequiteplace.jpg', 
    rating:'7.5', 
    type:'Movie', 
    year:2018, 
    genre:'Horror, Drama, Sci-Fi', 
    desc:'A family must live in silence to survive.', 
    runtime:'1h 30m', 
    providers:[
      { name: 'Netflix', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/a-quiet-place' },
      { name: 'Amazon Prime Video', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/a-quiet-place' },
      { name: 'JioCinema (JioHotstar)', type: 'Subscription', link: 'https://www.justwatch.com/in/movie/a-quiet-place' },
      { name: 'Apple TV', type: 'Rent/Buy', link: 'https://www.justwatch.com/in/movie/a-quiet-place' }
      // Note: Also available for rent/buy on Amazon Video.
    ] 
  }
];

const tvShows = [
  { id:'s-stranger', title:'Stranger Things', poster:'assets/posters/s-strangerthings.jpg', img:'assets/posters/s-strangerthings-wide.jpg', rating:'8.7', type:'TV Series', year:2016, genre:'Drama, Fantasy, Horror, Mystery, Sci-Fi', desc:'Kids fight supernatural forces in a nostalgic 80s town.'},
  { id:'s-got', title:'Game of Thrones', poster:'assets/posters/s-gameofthrones-wide.jpg', img:'assets/posters/s-gameofthrones-wide.jpg', rating:'9.2', type:'TV Series', year:2011, genre:'Action, Adventure, Drama, Fantasy', desc:'Noble houses vie for control of Westeros amid looming threats.'},
  { id:'s-breaking', title:'Breaking Bad', poster:'assets/posters/s-breakingbad.jpg', img:'assets/posters/s-breakingbad.jpg', rating:'9.5', type:'TV Series', year:2008, genre:'Crime, Drama', desc:'A chemistry teacher becomes a meth-maker.'},
  { id:'s-mandalorian', title:'The Mandalorian', poster:'assets/posters/s-themandalorian.jpg', img:'assets/posters/s-themandalorian.jpg', rating:'8.6', type:'TV Series', year:2019, genre:'Action, Adventure, Sci-Fi', desc:'A lone bounty hunter protects a mysterious child in a post-Empire galaxy.'},
  { id:'s-theboys', title:'The Boys', poster:'assets/posters/s-theboys.jpg', img:'assets/posters/s-theboys.jpg', rating:'8.7', type:'TV Series', year:2019, genre:'Action, Comedy', desc:'A dark take on superheroes.'},
  { id:'s-sherlock', title:'Sherlock', poster:'assets/posters/s-sherlock.jpg', img:'assets/posters/s-sherlock.jpg', rating:'9.1', type:'TV Series', year:2010, genre:'Crime, Drama, Mystery', desc:'A modern update of Sherlock Holmes solving crimes in London.'},
  { id:'s-truedetective', title:'True Detective', poster:'assets/posters/s-truedetective.jpg', img:'assets/posters/s-truedetective.jpg', rating:'9.0', type:'TV Series', year:2014, genre:'Crime, Drama, Mystery', desc:'Detectives investigate disturbing crimes across nonlinear timelines.'},
  { id:'s-fargo', title:'Fargo', poster:'assets/posters/s-fargo.jpg', img:'assets/posters/s-fargo.jpg', rating:'8.9', type:'TV Series', year:2014, genre:'Crime, Drama, Thriller', desc:'Anthology series blending crime, dark humor, and Midwestern oddity.'},
  { id:'s-handmaids', title:'The Handmaid\'s Tale', poster:'assets/posters/s-thehandmaidtale.jpg', img:'assets/posters/s-thehandmaidtale.jpg', rating:'8.4', type:'TV Series', year:2017, genre:'Drama, Sci-Fi, Thriller', desc:'A dystopia forces fertile women into reproductive servitude.'},
  { id:'s-thecrown', title:'The Crown', poster:'assets/posters/s-thecrown.jpg', img:'assets/posters/s-thecrown.jpg', rating:'8.7', type:'TV Series', year:2016, genre:'Biography, Drama, History', desc:'A dramatized history of Queen Elizabeth II’s reign.'},
  { id:'s-blackmirror', title:'Black Mirror', poster:'assets/posters/s-blackmirror.jpg', img:'assets/posters/s-blackmirror.jpg', rating:'8.8', type:'TV Series', year:2011, genre:'Drama, Sci-Fi, Thriller', desc:'Standalone episodes explore technology\'s dark sides.'},
  { id:'s-narcos', title:'Narcos', poster:'assets/posters/s-narcos.jpg', img:'assets/posters/s-narcos.jpg', rating:'8.8', type:'TV Series', year:2015, genre:'Biography, Crime, Drama', desc:'The rise of drug cartels and law enforcement\'s fight.'},
  { id:'s-peakyblinders', title:'Peaky Blinders', poster:'assets/posters/s-peakyblinders.jpg', img:'assets/posters/s-peakyblinders.jpg', rating:'8.8', type:'TV Series', year:2013, genre:'Crime, Drama, Thriller', desc:'A gangster family rises in post-WWI Birmingham.'},
  { id:'s-ozark', title:'Ozark', poster:'assets/posters/s-ozark.jpg', img:'assets/posters/s-ozark.jpg', rating:'8.4', type:'TV Series', year:2017, genre:'Crime, Drama, Thriller', desc:'A family launders money for a drug cartel while their world collapses.'},
  { id:'s-chernobyl', title:'Chernobyl', poster:'assets/posters/s-chernobyl.jpg', img:'assets/posters/s-chernobyl.jpg', rating:'9.4', type:'TV Series', year:2019, genre:'Drama, History, Thriller', desc:'A dramatized recounting of the 1986 nuclear disaster.'},
];

/* ---------- watchlist (localStorage) ---------- */
const WATCH_KEY = 'tellmate_watchlist_v1';
function readWatch(){ try{ return JSON.parse(localStorage.getItem(WATCH_KEY)||'[]'); }catch{ return []; } }
function writeWatch(list){ localStorage.setItem(WATCH_KEY, JSON.stringify(list)); }
function addToWatch(item){ const list=readWatch(); if(list.find(i=>i.id===item.id)) return false; list.push(item); writeWatch(list); return true; }
function removeFromWatch(id){ let list=readWatch(); list=list.filter(i=>i.id!==id); writeWatch(list); }

/* ---------- utilities ---------- */
function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function showToast(text, ms=1200){ const t=document.getElementById('tell-toast'); if(!t) return; t.textContent=text; t.style.opacity='1'; clearTimeout(t._timer); t._timer=setTimeout(()=>{ t.style.opacity='0'; t.textContent=''; }, ms); }
function uniqueSorted(values, numeric=false){ const set=new Set(values.filter(v=>v!==undefined&&v!==null&&v!=='')); const arr=Array.from(set); if(numeric) return arr.map(Number).sort((a,b)=>b-a); return arr.sort((a,b)=>a.localeCompare(b)); }
function getItemById(id){ return [...movies, ...tvShows].find(i=>i.id===id) || readWatch().find(i=>i.id===id); }

/* ---------- preset filters ---------- */
const PRESET_YEARS = (function(){ const a=[]; for(let y=2025;y>=2010;y--) a.push(String(y)); return a; })();
const PRESET_GENRES = ["Action","Adventure","Animation","Biography","Comedy","Crime","Drama","Family","Fantasy","Horror","Mystery","Romance","Sci-Fi","Thriller","Documentary","History","Sport","Crime"];

/* populate select options */
function populateFilterOptionsFor(yearId, genreId, items){
  const yearEl = document.getElementById(yearId), genreEl = document.getElementById(genreId);
  if(!yearEl||!genreEl) return;
  yearEl.innerHTML = '<option value="">All years</option>';
  PRESET_YEARS.forEach(y=>{ const o=document.createElement('option'); o.value=y; o.textContent=y; yearEl.appendChild(o); });
  const detected = uniqueSorted(items.flatMap(i=> (i.genre||'').split(',').map(g=>g.trim()).filter(Boolean)));
  const merged = Array.from(new Set([...PRESET_GENRES, ...detected]));
  genreEl.innerHTML = '<option value="">All genres</option>';
  merged.forEach(g=>{ const o=document.createElement('option'); o.value=g; o.textContent=g; genreEl.appendChild(o); });
}

/* ---------- render helpers ---------- */
function placeholderPoster(){ return 'https://picsum.photos/seed/tellmate/600/900'; }
function createCardElement(it){
  const card = document.createElement('article'); card.className='card';
  const img = document.createElement('img'); img.src = it.poster||it.img||placeholderPoster(); img.alt = it.title;
  card.appendChild(img);
  const body = document.createElement('div'); body.className='card-body'; body.innerHTML = `<strong>${escapeHtml(it.title)}</strong>`;
  card.appendChild(body);
  const btn = document.createElement('button'); btn.className='card-add add-watch'; btn.dataset.id = it.id; btn.textContent = '+ Watchlist';
  btn.addEventListener('click', e=>{ e.stopPropagation(); const added = addToWatch({ id:it.id, title:it.title, img:it.poster||it.img }); showToast(added ? `Added "${it.title}" to watchlist` : `"${it.title}" already in watchlist`); renderWatchlist(); });
  card.appendChild(btn);
  // clicking card opens detail (except when on watchlist rendered separately)
  card.addEventListener('click', ()=>{ location.hash = `detail?id=${it.id}`; showSection('detail'); renderDetail(it.id); });
  return card;
}
function renderHorizontal(containerId, items){
  const container=document.getElementById(containerId); if(!container) return; container.innerHTML='';
  items.forEach(it=> container.appendChild(createCardElement(it)));
}
function createGridItem(item){
  const div = document.createElement('div'); div.className='card-grid-item';
  const img = document.createElement('img'); img.src = item.poster||item.img||placeholderPoster(); img.alt = item.title; div.appendChild(img);
  const footer = document.createElement('div'); footer.className='card-grid-footer';
  const strong = document.createElement('strong'); strong.innerHTML = escapeHtml(item.title); footer.appendChild(strong);
  const actions = document.createElement('div'); actions.className='grid-actions';
  const addBtn = document.createElement('button'); addBtn.className='btn add-watch'; addBtn.textContent = '+ Watchlist'; addBtn.dataset.id = item.id;
  addBtn.addEventListener('click', e=>{ e.stopPropagation(); const it = getItemById(item.id); const added = addToWatch({ id:it.id, title:it.title, img:it.poster||it.img }); showToast(added ? `Added "${it.title}"`: `"${it.title}" already`); renderWatchlist(); });
  actions.appendChild(addBtn); footer.appendChild(actions); div.appendChild(footer);
  div.addEventListener('click', ()=>{ location.hash = `detail?id=${item.id}`; showSection('detail'); renderDetail(item.id); });
  return div;
}
function renderGrid(containerId, items){ const container=document.getElementById(containerId); if(!container) return; container.innerHTML=''; items.forEach(it=> container.appendChild(createGridItem(it))); }

/* ---------- search, suggestions, filters ---------- */
function getPool(){ return [...movies, ...tvShows]; }
function filterItems(items, query='', year='', genre=''){
  const q = String(query||'').trim().toLowerCase();
  return items.filter(it=>{
    const titleMatch = !q || (it.title||'').toLowerCase().includes(q);
    const yearMatch = !year || String(it.year) === String(year);
    const genreMatch = !genre || ((it.genre||'').toLowerCase().split(',').map(s=>s.trim()).includes(genre.toLowerCase()));
    return titleMatch && yearMatch && genreMatch;
  });
}

/* Header search and internal search remain independent (Option A) */
function performSearchAndFilters(context='search'){
  const pool = context==='movies' ? movies : context==='series' ? tvShows : getPool();
  const headerQ = document.getElementById('globalSearch')?.value || '';
  const internalQ = document.getElementById('searchInput')?.value || '';
  const query = (context==='search' && internalQ) ? internalQ : (context==='search' && !internalQ ? '' : (context==='movies' ? '' : headerQ));
  const year = (document.getElementById(`${context}YearFilter`)?.value) || '';
  const genre = (document.getElementById(`${context}GenreFilter`)?.value) || '';
  const result = filterItems(pool, query, year, genre);
  if(context==='movies') renderGrid('moviesGrid', result);
  else if(context==='series') renderGrid('seriesGrid', result);
  else renderGrid('searchResults', result);
  return result;
}

function showSuggestions(query){
  const box=document.getElementById('suggestions'); if(!box) return;
  const q=String(query||'').trim().toLowerCase(); box.innerHTML='';
  if(!q){ box.hidden=true; return; }
  const pool=getPool(); const results=pool.filter(it=>it.title.toLowerCase().includes(q)).slice(0,6);
  if(results.length===0){ box.hidden=true; return; }
  results.forEach(it=>{
    const item=document.createElement('div'); item.className='suggestion-item';
    item.innerHTML = `<div class="suggestion-thumb"><img src="${it.poster||it.img||placeholderPoster()}" alt=""></div><div><div class="suggestion-text">${escapeHtml(it.title)}</div><div class="suggestion-type">${it.type||''}</div></div>`;
    // clicking suggestion opens detail (no syncing to search input)
    item.addEventListener('click', ()=>{ box.hidden=true; location.hash = `detail?id=${it.id}`; showSection('detail'); renderDetail(it.id); });
    box.appendChild(item);
  });
  box.hidden=false;
}

/* ---------- detail page rendering ---------- */
function renderDetail(id){
  const item = getItemById(id);
  if(!item) return;
  document.getElementById('detailPoster').querySelector('img').src = item.poster || item.img || '';
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailRating').textContent = `⭐ ${item.rating||'N/A'}`;
  document.getElementById('detailYear').textContent = item.year || '—';
  document.getElementById('detailType').textContent = item.type || '';
  document.getElementById('detailShort').textContent = item.desc || '';
  document.getElementById('detailOverviewText').textContent = item.desc || 'No description available.';
  const metaList = document.getElementById('detailMetaList'); metaList.innerHTML='';
  const meta = [
    ['Runtime', item.runtime || 'N/A'],
    ['Release Date', item.release_date || (item.year ? `${item.year}` : 'N/A')],
    ['Genre', item.genre || '—'],
    ['Status', item.status || (item.type && item.type.toLowerCase().includes('series') ? 'Ongoing' : 'Released')],
    ['Type', item.type || '—']
  ];
  meta.forEach(([k,v])=>{ if(k==='Runtime' && (!item.runtime || item.type && item.type.toLowerCase().includes('tv'))) return; const li=document.createElement('li'); li.textContent = `${k}: ${v}`; li.style.marginBottom='6px'; li.style.color='var(--muted)'; metaList.appendChild(li); });

  const providersList = document.getElementById('providersList'); providersList.innerHTML='';
  const providers = item.providers || [];
  if(providers.length===0){ providersList.innerHTML = '<div class="muted">No provider information available.</div>'; }
  else{
    providers.forEach(p=>{
      const a = document.createElement('a'); a.className='provider'; a.href = p.url || '#'; a.target='_blank'; a.rel='noopener noreferrer';
      a.innerHTML = `<img src="${p.logo||'https://via.placeholder.com/80x32.png?text=play'}" alt="${escapeHtml(p.name)}"><div><strong>${escapeHtml(p.name)}</strong></div>`;
      providersList.appendChild(a);
    });
  }

  const addBtn = document.getElementById('detailAdd');
  addBtn.onclick = () => {
    const added = addToWatch({ id:item.id, title:item.title, img:item.poster||item.img });
    showToast(added ? `Added "${item.title}" to watchlist` : `"${item.title}" already in watchlist`);
    renderWatchlist();
  };

  document.getElementById('detailPlay').onclick = ()=> showToast('Play (demo)');
  document.getElementById('detailShare').onclick = ()=>{ try{ navigator.clipboard.writeText(location.href); showToast('Link copied'); }catch{ showToast('Copy link: '+location.href); } };

  setDetailTab('overview');
}
function setDetailTab(name){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===name));
  document.getElementById('detailOverview').style.display = name==='overview' ? 'block' : 'none';
  document.getElementById('detailWatch').style.display = name==='watch' ? 'block' : 'none';
}

/* ---------- watchlist ---------- */
function renderWatchlist(){
  const grid=document.getElementById('watchGrid'); const count=document.getElementById('watchCount');
  if(!grid||!count) return;
  const list = readWatch();
  grid.innerHTML = ''; count.textContent = `You have ${list.length} item${list.length!==1 ? 's' : ''} in your watchlist`;
  if(list.length===0){ grid.innerHTML = `<div class="empty muted">Your watchlist is empty. Add items from other sections.</div>`; return; }
  list.forEach(item=>{
    // WATCHLIST cards: only title + remove button (no whole-card click)
    const el = document.createElement('div'); el.className='card-grid-item watch-card';
    el.innerHTML = `<img src="${item.img||item.poster||placeholderPoster()}" alt="${escapeHtml(item.title)}">
      <div class="watch-content"><div><strong>${escapeHtml(item.title)}</strong></div><div><button class="remove-btn" data-id="${item.id}" title="Remove">−</button></div></div>`;
    // DO NOT add a click handler to the watchlist card; only remove button will act.
    grid.appendChild(el);
  });
  grid.querySelectorAll('.remove-btn').forEach(b=> b.addEventListener('click', e=>{ e.stopPropagation(); removeFromWatch(e.currentTarget.dataset.id); renderWatchlist(); showToast('Removed'); }));
}

/* ---------- hero slider ---------- */
const HERO_AUTOPLAY_MS = 4500;
let heroSlides = [], heroIndex = 0, heroTimer = null, heroPaused = false;

function buildHeroSlides(){
  heroSlides = [ movies[0], movies[3], tvShows[0], movies[1], tvShows[1] ].filter(Boolean);
}

function renderHero(){
  const container = document.getElementById('heroSlider'), dots = document.getElementById('heroDots');
  if(!container) return;
  container.innerHTML=''; dots.innerHTML='';
  heroSlides.forEach((s,i)=>{
    const slide = document.createElement('div'); slide.className='hero-slide'+(i===heroIndex?' active':''); slide.dataset.index=i; slide.dataset.id=s.id;
    slide.innerHTML = `<div class="slide-bg" style="background-image:url('${s.img||s.poster||placeholderPoster()}')"></div>
      <div class="hero-content">
        <h2 class="hero-title">${escapeHtml(s.title)}</h2>
        <div class="hero-meta"><span class="badge rating">⭐ ${s.rating||'-'}</span><span class="badge type">${s.type||''}</span><span class="badge year">${s.year||''}</span></div>
        <p class="hero-desc">${escapeHtml(s.desc||'')}</p>
        <div class="hero-ctas"><button class="btn primary play-hero" data-id="${s.id}">Play</button><button class="btn outline more-info" data-id="${s.id}">More Info</button><button class="btn outline add-watch" data-id="${s.id}" data-title="${escapeHtml(s.title)}" data-img="${s.poster||s.img}">+ Watchlist</button></div>
      </div>
      <div class="hero-poster"><img src="${s.poster||s.img||placeholderPoster()}" alt="${escapeHtml(s.title)} poster"></div>`;
    container.appendChild(slide);
    // clicking anywhere on slide opens detail
    slide.addEventListener('click', ()=>{ const id = s.id; if(id){ location.hash = `detail?id=${id}`; showSection('detail'); renderDetail(id); } });
    const dot = document.createElement('button'); dot.className='hero-dot'+(i===heroIndex?' active':''); dot.dataset.index=i; dot.addEventListener('click', (ev)=>{ ev.stopPropagation(); goToHero(i); }); dots.appendChild(dot);
  });
  container.addEventListener('mouseenter', ()=>{ heroPaused=true; stopHeroTimer(); });
  container.addEventListener('mouseleave', ()=>{ heroPaused=false; startHeroTimer(); });
}

function updateHeroActive(){ document.querySelectorAll('.hero-slide').forEach(sl=>sl.classList.toggle('active', Number(sl.dataset.index)===heroIndex)); document.querySelectorAll('.hero-dot').forEach(d=>d.classList.toggle('active', Number(d.dataset.index)===heroIndex)); }
function goToHero(i){ heroIndex = (i + heroSlides.length) % heroSlides.length; updateHeroActive(); restartHeroTimer(); }
function nextHero(){ goToHero(heroIndex + 1); }
function prevHero(){ goToHero(heroIndex - 1); }
function startHeroTimer(){ stopHeroTimer(); if(heroPaused) return; heroTimer = setInterval(()=>nextHero(), HERO_AUTOPLAY_MS); }
function stopHeroTimer(){ if(heroTimer){ clearInterval(heroTimer); heroTimer = null; } }
function restartHeroTimer(){ stopHeroTimer(); startHeroTimer(); }

/* ---------- Init & event wiring ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  buildHeroSlides(); renderHero(); startHeroTimer();

  renderHorizontal('trendingMovies', movies);
  renderHorizontal('trendingTV', tvShows);
  renderGrid('moviesGrid', movies);
  renderGrid('seriesGrid', tvShows);
  renderGrid('searchResults', getPool());

  populateFilterOptionsFor('moviesYearFilter','moviesGenreFilter', movies);
  populateFilterOptionsFor('seriesYearFilter','seriesGenreFilter', tvShows);
  populateFilterOptionsFor('searchYearFilter','searchGenreFilter', getPool());

  const initial = location.hash ? location.hash.replace('#','') : 'home'; showSection(initial || 'home');

  document.querySelectorAll('.main-nav .nav-link').forEach(a=>a.addEventListener('click', e=>{ e.preventDefault(); showSection(a.dataset.target); if(a.dataset.target==='watchlist') renderWatchlist(); }));

  document.getElementById('heroPrev').addEventListener('click', prevHero);
  document.getElementById('heroNext').addEventListener('click', nextHero);

  document.querySelectorAll('.row-scroll').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.target; const outer = document.getElementById(id);
      if(!outer) return;
      const amount = Math.round(outer.clientWidth * 0.6);
      if(btn.classList.contains('row-next')) outer.scrollBy({ left: amount, behavior:'smooth' });
      else outer.scrollBy({ left: -amount, behavior:'smooth' });
    });
  });

  document.querySelectorAll('.cards-wrap').forEach(wrap=>{
    const prev = wrap.querySelector('.row-prev'); const next = wrap.querySelector('.row-next');
    if(prev) prev.style.opacity='0.75'; if(next) next.style.opacity='0.75';
    wrap.addEventListener('mouseenter', ()=>{ if(prev) prev.style.opacity='1'; if(next) next.style.opacity='1'; });
    wrap.addEventListener('mouseleave', ()=>{ if(prev) prev.style.opacity='0.75'; if(next) next.style.opacity='0.75'; });
  });

  // delegated events for hero buttons, more-info, add-watch etc.
  document.body.addEventListener('click', ev=>{
    const play = ev.target.closest('.play-hero'); if(play){ showToast('Play (demo)'); return; }
    const more = ev.target.closest('.more-info'); if(more){ const id = more.dataset.id; if(id){ location.hash = `detail?id=${id}`; showSection('detail'); renderDetail(id); } return; }
    const watchBtn = ev.target.closest('.add-watch');
    if(watchBtn){ const id=watchBtn.dataset.id; const title=watchBtn.dataset.title||''; const img=watchBtn.dataset.img||''; if(!id) return; const added = addToWatch({id,title,img}); showToast(added ? `Added "${title}" to Watchlist` : `"${title}" already in Watchlist`); renderWatchlist(); return; }
  });

  const headerSearchWrap = document.getElementById('headerSearchWrap');
  const headerSearch = document.getElementById('globalSearch');
  const internalSearch = document.getElementById('searchInput');
  const clearBtn = document.getElementById('globalClear');
  const openBtn = document.getElementById('openSearch');

  headerSearchWrap.addEventListener('mouseenter', ()=> headerSearchWrap.classList.remove('collapsed'));
  headerSearchWrap.addEventListener('mouseleave', ()=>{ if(document.activeElement===headerSearch) return; if(!headerSearchWrap.classList.contains('open')) headerSearchWrap.classList.add('collapsed'); });

  openBtn.addEventListener('click', e=>{ e.stopPropagation(); const isOpen = headerSearchWrap.classList.toggle('open'); headerSearchWrap.classList.toggle('collapsed', !isOpen); if(isOpen){ headerSearch.focus(); headerSearch.select(); } else headerSearch.blur(); });

  document.addEventListener('click', e=>{ if(!headerSearchWrap.contains(e.target)){ if(!headerSearchWrap.classList.contains('open')) headerSearchWrap.classList.add('collapsed'); const box=document.getElementById('suggestions'); if(box) box.hidden=true; } });

  /* ---------- HEADER search behavior (Option A): shows suggestions only and does NOT sync with search input ---------- */
  if(headerSearch){
    headerSearch.addEventListener('input', e=>{
      const q=e.target.value;
      showSuggestions(q); // suggestions tied to header only
    });

    headerSearch.addEventListener('keydown', e=>{
      if(e.key==='Escape'){
        headerSearch.value='';
        showSuggestions('');
        headerSearch.blur();
      }
      if(e.key==='Enter'){ e.preventDefault(); showSuggestions(''); }
    });

    headerSearch.addEventListener('focus', ()=>headerSearchWrap.classList.remove('collapsed'));
    headerSearch.addEventListener('blur', ()=>{ setTimeout(()=>{ if(!headerSearchWrap.classList.contains('open') && !headerSearchWrap.matches(':hover')) headerSearchWrap.classList.add('collapsed'); }, 120); });
  }

  /* ---------- INTERNAL Search (Search page): independent; only updates Search page results ---------- */
  if(internalSearch){
    internalSearch.addEventListener('input', e=>{ performSearchAndFilters('search'); });
    internalSearch.addEventListener('keydown', e=>{ if(e.key==='Escape'){ internalSearch.value=''; performSearchAndFilters('search'); } if(e.key==='Enter'){ e.preventDefault(); performSearchAndFilters('search'); } });
  }

  if(clearBtn && headerSearch){
    clearBtn.addEventListener('click', ev=>{ ev.stopPropagation(); headerSearch.value=''; showSuggestions(''); headerSearch.focus(); });
  }

  document.addEventListener('click', e=>{ const box=document.getElementById('suggestions'); const header=document.getElementById('globalSearch'); if(!box||!header) return; if(!box.contains(e.target) && e.target !== header) box.hidden = true; });

  document.addEventListener('keydown', e=>{ const tag = (document.activeElement && document.activeElement.tagName) || ''; if(e.key==='/' && tag!=='INPUT' && tag!=='TEXTAREA'){ e.preventDefault(); const header=document.getElementById('globalSearch'); const wrap=document.getElementById('headerSearchWrap'); if(wrap) wrap.classList.remove('collapsed'); if(header){ header.focus(); header.select(); } } });

  function wireFilters(context){
    const yearEl = document.getElementById(`${context}YearFilter`);
    const genreEl = document.getElementById(`${context}GenreFilter`);
    if(yearEl) yearEl.addEventListener('change', ()=>performSearchAndFilters(context));
    if(genreEl) genreEl.addEventListener('change', ()=>performSearchAndFilters(context));
  }
  wireFilters('movies'); wireFilters('series'); wireFilters('search');

  document.getElementById('searchClearFilters')?.addEventListener('click', ()=>{ document.getElementById('searchYearFilter').value=''; document.getElementById('searchGenreFilter').value=''; performSearchAndFilters('search'); showToast('Filters cleared'); });
  document.getElementById('moviesClearFilters')?.addEventListener('click', ()=>{ document.getElementById('moviesYearFilter').value=''; document.getElementById('moviesGenreFilter').value=''; performSearchAndFilters('movies'); showToast('Filters cleared'); });
  document.getElementById('seriesClearFilters')?.addEventListener('click', ()=>{ document.getElementById('seriesYearFilter').value=''; document.getElementById('seriesGenreFilter').value=''; performSearchAndFilters('series'); showToast('Filters cleared'); });

  document.querySelectorAll('.main-nav .nav-link').forEach(a=>a.addEventListener('click', ()=>{ const t=a.dataset.target; if(t==='movies') populateFilterOptionsFor('moviesYearFilter','moviesGenreFilter', movies); if(t==='series') populateFilterOptionsFor('seriesYearFilter','seriesGenreFilter', tvShows); if(t==='search') populateFilterOptionsFor('searchYearFilter','searchGenreFilter', getPool()); }));

  performSearchAndFilters('movies'); performSearchAndFilters('series'); performSearchAndFilters('search');

  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click', ()=> setDetailTab(t.dataset.tab)));
  document.addEventListener('keydown', e=>{ if(e.key==='ArrowLeft') prevHero(); if(e.key==='ArrowRight') nextHero(); });

  renderWatchlist();

  const h = location.hash || '#home';
  if(h.startsWith('#detail')){
    const id = (new URLSearchParams(h.replace('#detail?',''))).get('id') || (h.split('id=')[1] || '').trim();
    if(id){ showSection('detail'); renderDetail(id); }
  } else { showSection(h.replace('#','') || 'home'); }
});

/* ---------- show/hide pages ---------- */
function showSection(id){
  document.querySelectorAll('.page').forEach(s=>{ if(s.id===id){ s.classList.remove('section-hidden'); s.classList.add('section-active'); } else { s.classList.remove('section-active'); s.classList.add('section-hidden'); }});
  document.querySelectorAll('.main-nav .nav-link').forEach(a=> a.classList.toggle('active', a.dataset.target===id));
  if(location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  if(id === 'watchlist') renderWatchlist();
}
