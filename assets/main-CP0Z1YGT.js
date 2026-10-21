import{n as e,t}from"./projects-D6KBgP7A.js";var n={x:160,y:172},r=125,i={x:250,y:120},a={x:352,y:214},o=50,s=36,c=25,l=1.1,u=[{hit:!1,dy:-100,reward:-30},{hit:!1,dy:56,reward:-10},{hit:!1,dy:-52,reward:-10},{hit:!0,dy:0,reward:100},{hit:!0,dy:0,reward:100}],d=u.findIndex(e=>e.hit),f=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,p=e=>1-(1-e)**3,m=(e,t,n)=>e+(t-e)*n;function h(){let e=[{t:0,x:i.x,y:i.y,grip:0,lift:0,ease:`lin`}],t=[],n=[],r=0,s=(t,n,i,a,o)=>{r+=t,e.push({t:r,x:n,y:i,grip:a,lift:o,ease:`io`})},c=t=>{let n=e[e.length-1];r+=t,e.push({...n,t:r,ease:`lin`})};return u.forEach((e,l)=>{n.push(r);let u=a.x,f=a.y+e.dy;s(l>d?.7:.9,u,f,0,0),s(.18,u,f,1,0),t.push({t:r,value:e.reward}),e.hit?(s(.5,u,f-o,1,1),c(.6),s(.5,u,f,1,0)):c(.5),s(.2,u,f,0,0),s(.7,i.x,i.y,0,0),c(.3)}),c(.8),{keys:e,popups:t,starts:n,total:r}}function g(e,t){let n=0;for(;n<e.length-2&&e[n+1].t<=t;)n++;let r=e[n],i=e[n+1],a=Math.min(Math.max((t-r.t)/(i.t-r.t),0),1),o=i.ease===`io`?f(a):a;return{x:m(r.x,i.x,o),y:m(r.y,i.y,o),grip:m(r.grip,i.grip,o),lift:m(r.lift,i.lift,o)}}function _(e,t){let i=e-n.x,a=t-n.y,o=Math.min(Math.hypot(i,a),249.99),s=(15625+o*o-15625)/(250*o),c=Math.atan2(a,i)-Math.acos(Math.min(Math.max(s,-1),1));return{x:n.x+r*Math.cos(c),y:n.y+r*Math.sin(c)}}var v=`
<svg class="rl-svg" viewBox="0 0 640 320" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="rl-beam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" style="stop-color: var(--beam)" stop-opacity="0.5" />
      <stop offset="1" style="stop-color: var(--beam)" stop-opacity="0" />
    </linearGradient>
  </defs>

  <rect class="rl-ceiling" x="0" y="0" width="640" height="6" />
  <line class="rl-line" x1="380" y1="6" x2="380" y2="20" />
  <path class="rl-lamp" d="M362 40 L370 20 H390 L398 40 Z" />
  <polygon points="366,42 394,42 470,300 290,300" fill="url(#rl-beam)" />
  <rect class="rl-bulb" x="368" y="39" width="24" height="3" />

  <line class="rl-floor" x1="0" y1="300" x2="640" y2="300" />
  <rect class="rl-solid" x="448" y="120" width="8" height="180" />
  <rect class="rl-solid" x="336" y="236" width="120" height="10" />

  <g id="rl-can">
    <rect x="366" y="192" width="28" height="44" rx="5" fill="#dc2626" />
    <rect x="366" y="207" width="28" height="13" fill="#ffffff" />
    <rect x="368" y="192" width="24" height="4" rx="2" fill="#d4d4d8" />
  </g>

  <rect class="rl-solid" x="110" y="292" width="100" height="8" />
  <rect class="rl-solid" x="148" y="172" width="24" height="120" rx="4" />
  <rect class="rl-solid" x="154" y="156" width="12" height="16" />
  <rect class="rl-head" x="138" y="128" width="44" height="30" rx="7" />
  <circle class="rl-eye" cx="170" cy="143" r="5" />

  <line id="rl-upper" class="rl-arm" x1="160" y1="172" x2="160" y2="172" />
  <line id="rl-fore" class="rl-arm" x1="160" y1="172" x2="160" y2="172" />
  <circle class="rl-joint" cx="160" cy="172" r="12" />
  <circle id="rl-elbow" class="rl-joint" r="9" />

  <g id="rl-hand">
    <line id="rl-palm" class="rl-finger" x1="0" x2="0" />
    <line id="rl-f-top" class="rl-finger" x1="0" x2="28" />
    <line id="rl-f-bot" class="rl-finger" x1="0" x2="28" />
    <circle class="rl-joint" r="7" />
  </g>

  <g id="rl-hud" class="rl-hud">
    <text id="rl-attempt" x="24" y="38"></text>
    <text id="rl-return" x="24" y="64"></text>
  </g>

  <text id="rl-popup" class="rl-popup" x="540" y="168" text-anchor="middle" opacity="0"></text>
</svg>`;function y(e){e.innerHTML=v;let t=t=>e.querySelector(`#${t}`),n=t(`rl-upper`),r=t(`rl-fore`),i=t(`rl-elbow`),a=t(`rl-hand`),f=t(`rl-palm`),y=t(`rl-f-top`),b=t(`rl-f-bot`),x=t(`rl-can`),S=t(`rl-popup`),C=t(`rl-attempt`),w=t(`rl-return`),{keys:T,popups:E,starts:D,total:O}=h(),k=e=>{let t=g(T,e),d=_(t.x,t.y);n.setAttribute(`x2`,d.x.toFixed(2)),n.setAttribute(`y2`,d.y.toFixed(2)),r.setAttribute(`x1`,d.x.toFixed(2)),r.setAttribute(`y1`,d.y.toFixed(2)),r.setAttribute(`x2`,t.x.toFixed(2)),r.setAttribute(`y2`,t.y.toFixed(2)),i.setAttribute(`cx`,d.x.toFixed(2)),i.setAttribute(`cy`,d.y.toFixed(2)),a.setAttribute(`transform`,`translate(${t.x.toFixed(2)} ${t.y.toFixed(2)})`);let h=m(s,c,t.grip);f.setAttribute(`y1`,String(-h)),f.setAttribute(`y2`,String(h)),y.setAttribute(`y1`,String(-h)),y.setAttribute(`y2`,String(-h)),b.setAttribute(`y1`,String(h)),b.setAttribute(`y2`,String(h)),x.setAttribute(`transform`,`translate(0 ${(-t.lift*o).toFixed(2)})`);let v=0;for(;v<D.length-1&&D[v+1]<=e;)v++;let O=0,k;for(let t of E)t.t<=e&&(O+=t.value,e-t.t<l&&(k=t));if(C.textContent=`ATTEMPT ${v+1} / ${u.length}`,w.textContent=`RETURN ${O>0?`+`:``}${O}`,k){let t=(e-k.t)/l,n=Math.min(t/.12,1),r=t>.75?(1-t)/.25:1;S.textContent=`${k.value>0?`+`:`−`}${Math.abs(k.value)}`,S.setAttribute(`class`,`rl-popup ${k.value>0?`good`:`bad`}`),S.setAttribute(`opacity`,String(Math.min(n,r))),S.setAttribute(`transform`,`translate(0 ${(-14*p(Math.min(t/.4,1))).toFixed(2)})`)}else S.setAttribute(`opacity`,`0`)};if(matchMedia(`(prefers-reduced-motion: reduce)`).matches){k(D[d]+.9+.18+.5);return}let A=0,j=0,M=0,N=e=>{A=(A+Math.min((e-j)/1e3,.05))%O,j=e,k(A),M=requestAnimationFrame(N)},P=()=>{M||=(j=performance.now(),requestAnimationFrame(N))},F=()=>{cancelAnimationFrame(M),M=0};k(0),new IntersectionObserver(([e])=>e.isIntersecting?P():F()).observe(e)}var b={live:`Live`,building:`Building`,wip:`WIP`,complete:`Complete`,archived:`Archived`},x=`<svg class="arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 12L12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,S=e=>e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),C=e=>/^https?:/.test(e),w=e=>e.image?`<div class="thumb"><img src="${S(e.image)}" alt="" loading="lazy" decoding="async"></div>`:`<div class="thumb" aria-hidden="true"><span>${S(e.title.charAt(0))}</span></div>`,T=(e,t)=>`
  <li class="card" style="--i:${t}" data-tags="${S(e.tags.join(`|`))}">
    <a class="card-link" href="${S(e.href)}"${C(e.href)?` target="_blank" rel="noreferrer"`:``}>
      ${w(e)}
      <div class="card-body">
        <div class="meta">
          <span class="num">${String(t+1).padStart(2,`0`)}</span>
          <span class="status" data-status="${e.status}">${b[e.status]}</span>
          <span class="year">${e.year}</span>
        </div>
        <h3>${S(e.title)} ${x}</h3>
        <p>${S(e.summary)}</p>
        <ul class="tags">${e.tags.map(e=>`<li>${S(e)}</li>`).join(``)}</ul>
      </div>
    </a>
    ${e.repo?`<a class="repo" href="${S(e.repo)}" target="_blank" rel="noreferrer">Source<span class="sr"> for ${S(e.title)}</span></a>`:``}
  </li>`,E=[...new Set(e.flatMap(e=>e.tags))].sort();document.querySelector(`#app`).innerHTML=`
  <header class="site-header">
    <a class="brand" href="#top">${S(t.name)}</a>
    <nav aria-label="Primary">
      <a href="#work">Work</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <p class="eyebrow">Side projects</p>
      <h1>${S(t.tagline)}</h1>
      <p class="lede">${S(t.intro)}</p>
      <div class="hero-actions">
        <a class="button" href="#work">See the work</a>
        <a class="button secondary" href="${S(t.links.find(e=>e.label===`GitHub`)?.href??`https://github.com/VictorTumbiolo`)}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>

    <section class="rl" aria-labelledby="rl-title">
      <h2 id="rl-title">Learning by trial and error</h2>
      <div class="rl-stage" id="rl-stage" role="img" aria-label="Animation of reinforcement learning. A robot arm under a floodlight tries to grab a soda can. It reaches far too high and gets a reward of minus 30, then too low and gets minus 10, then slightly too high and gets minus 10, then grabs the can twice and gets plus 100 each time before the loop restarts."></div>
      <p class="rl-caption">Misses are penalized (−30 when far off, −10 when close); a clean grab earns +100. After a few tries the policy settles on the grab that pays off.</p>
    </section>

    <section id="work" class="work" aria-labelledby="work-title">
      <div class="work-head">
        <h2 id="work-title">Selected work</h2>
        <div class="filters" role="group" aria-label="Filter by tag">
          <button type="button" aria-pressed="true" data-tag="">All</button>
          ${E.map(e=>`<button type="button" aria-pressed="false" data-tag="${S(e)}">${S(e)}</button>`).join(``)}
        </div>
      </div>
      <p class="sr" role="status" id="count"></p>
      <ul class="grid">${e.map(T).join(``)}</ul>
    </section>
  </main>
`,y(document.querySelector(`#rl-stage`));var D=[...document.querySelector(`.grid`).querySelectorAll(`.card`)],O=[...document.querySelectorAll(`.filters button`)],k=document.querySelector(`#count`),A=e=>{let t=0;for(let n of D){let r=!e||n.dataset.tags.split(`|`).includes(e);n.hidden=!r,r&&n.style.setProperty(`--i`,String(t++))}for(let t of O)t.setAttribute(`aria-pressed`,String(t.dataset.tag===e));k.textContent=`Showing ${t} of ${D.length} projects`};document.querySelector(`.filters`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&A(t.dataset.tag)});