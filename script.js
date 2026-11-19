const V = { first:C.her.first, middle:C.her.middle, last:C.her.last,
  full:[C.her.first,C.her.middle,C.her.last].join(" "),
  me:C.me.first, meFull:C.me.first+" "+C.me.last, occasion:C.occasion };
const t = s => s.replace(/\{(\w+)\}/g,(m,k)=>V[k]??m);
const $ = id => document.getElementById(id);
document.title = t("{occasion}, {first}");
document.querySelectorAll("[data-t]").forEach(e=>e.innerHTML=t(e.dataset.t));
$("msg").innerHTML = C.message.map(l=>"<p>"+t(l)+"</p>").join("");
$("closing").innerHTML = t(C.closing);
$("credit").textContent = t(C.credits);
$("wishText").textContent = t(C.wishText);

/* videos */
$("mem").innerHTML = C.videos.map((v,i)=>
  `<button class="vs" data-i="${i}" style="margin-top:${(i*17)%26}px"><i style="animation-delay:${(i*.7)%3}s"></i>${v.title}</button>`).join("");
$("mem").addEventListener("click",e=>{
  const b=e.target.closest(".vs"); if(!b) return;
  const v=C.videos[b.dataset.i];
  if(v.url) window.open(v.url,"_blank","noopener");
  else $("memHint").textContent="This star is still waking up…";
});

/* trees */
(function(){let d="M0,100",x=0;while(x<1000){const h=22+Math.random()*60,w=10+Math.random()*10;
  d+=` L${x},${100-h*.35} L${x+w/2},${100-h} L${x+w},${100-h*.35}`;x+=w}
  $("treePath").setAttribute("d",d+" L1000,100Z")})();

/* rooms */
let room=0;const POEMS=3,STARS=4,FINALE=5;
const rooms=[...document.querySelectorAll(".room")], nav=$("nav");
C.roomNames.forEach((n,i)=>{const b=document.createElement("button");b.setAttribute("aria-label",n);b.onclick=()=>go(i);nav.appendChild(b)});
function go(i){
  room=i;
  rooms.forEach((r,k)=>r.classList.toggle("on",k===i));
  [...nav.children].forEach((b,k)=>b.classList.toggle("on",k===i));
  $("msg").classList.remove("go");
  if(i===1){document.querySelectorAll("#msg p").forEach((p,k)=>p.style.transitionDelay=(.6+k*1.6)+"s");setTimeout(()=>$("msg").classList.add("go"),50)}
  if(i===POEMS)showPoem(0);
  if(i!==FINALE) fx.clearRect(0,0,W,H);
  if(i===FINALE){rk.length=0;setTimeout(()=>launch(),500)}
  $("memHint").textContent="Tap a star to watch";
}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(+b.dataset.go));

/* canvases */
const bg=$("bg"),x=bg.getContext("2d"),fwc=$("fw"),fx=fwc.getContext("2d");
let W,H,dpr,stars=[];
function size(){
  dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;
  [bg,fwc].forEach(c=>{c.width=W*dpr;c.height=H*dpr});
  x.setTransform(dpr,0,0,dpr,0,0);fx.setTransform(dpr,0,0,dpr,0,0);
  const n=W<700?110:220;
  stars=Array.from({length:n},()=>{const l=Math.random()<.6?0:Math.random()<.7?1:2;
    return{x:Math.random()*W,y:Math.random()*H,r:[.7,1.3,2][l],s:[.06,.14,.26][l],a:.3+Math.random()*.6,p:Math.random()*6.28,w:.5+Math.random()*1.5}});
}
addEventListener("resize",size);size();

/* constellation dots + shooting stars (star room) */
const dots=[],shoots=[];let lastDot=null,lastShoot=0;
function addDot(px,py){
  if(lastDot&&Math.hypot(px-lastDot.x,py-lastDot.y)<16) return;
  const n=1+(Math.random()<.5);
  for(let i=0;i<n;i++){const d={x:px+(Math.random()-.5)*60,y:py+(Math.random()-.5)*60,a:.9,r:1+Math.random()*2.5};dots.push(d);lastDot=d}
}
addEventListener("pointermove",e=>{if(room===STARS&&!e.target.closest(".btn"))addDot(e.clientX,e.clientY)});
function shoot(bright){
  const sp=bright?16:7+Math.random()*5;
  shoots.push({x:W*(.3+Math.random()*.8),y:-20+Math.random()*H*.3,vx:-sp*.75,vy:sp*.75,life:1,len:bright?220:110,b:bright});
}
$("wishBtn").onclick=()=>{shoot(true);setTimeout(()=>shoot(true),250);setTimeout(()=>$("wishText").classList.add("on"),900)};

/* fireworks (finale) */
const rk=[],ps=[];
function launch(px){
  rk.push({x:px??W*(.15+Math.random()*.7),y:H,ty:H*(.12+Math.random()*.35),h:Math.random()*360});
}
function burst(r){
  const n=W<700?55:90,sp=2+Math.random()*2.5;
  for(let i=0;i<n;i++){const a=Math.PI*2*i/n,v=sp*(.55+Math.random()*.5);
    ps.push({x:r.x,y:r.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,a:1,h:r.h+Math.random()*40})}
}
addEventListener("pointerdown",e=>{if(room===FINALE&&!e.target.closest(".btn,nav"))launch(e.clientX)});
let auto=0;

/* poems */
let pi=0;
function showPoem(i){
  pi=(i+C.poems.length)%C.poems.length;
  const p=C.poems[pi],box=$("poemBody");
  $("poemTitle").textContent=t(p.title);
  box.classList.remove("go");box.scrollTop=0;box.innerHTML="";
  p.lines.forEach((l,k)=>{const e=document.createElement("p");e.textContent=t(l);e.style.transitionDelay=(.3+k*.8)+"s";box.appendChild(e)});
  $("poemCount").textContent=(pi+1)+" / "+C.poems.length;
  setTimeout(()=>box.classList.add("go"),50);
}
$("poemPrev").onclick=()=>showPoem(pi-1);
$("poemNext").onclick=()=>showPoem(pi+1);

/* main loop */
let T=0;
function frame(){
  T+=.016;
  x.clearRect(0,0,W,H);
  stars.forEach(s=>{
    s.y-=s.s;if(s.y<-5){s.y=H+5;s.x=Math.random()*W}
    x.globalAlpha=s.a*(.65+.35*Math.sin(T*s.w+s.p));
    x.fillStyle="#fff";x.fillRect(s.x,s.y,s.r,s.r);
  });
  x.globalAlpha=1;
  if(room===STARS){
    if(Date.now()-lastShoot>900&&shoots.length<(W<700?3:6)){shoot(false);lastShoot=Date.now()}
    for(let i=dots.length-1;i>=0;i--){dots[i].a-=.004;if(dots[i].a<=0)dots.splice(i,1)}
    x.lineWidth=1;
    dots.forEach((d,i)=>{
      x.fillStyle=`rgba(255,255,255,${d.a})`;x.shadowColor="#fff";x.shadowBlur=d.r*3;
      x.beginPath();x.arc(d.x,d.y,d.r,0,6.28);x.fill();x.shadowBlur=0;
      for(let k=1;k<=2;k++){const p=dots[i-k];if(!p)continue;
        x.strokeStyle=`rgba(255,255,255,${Math.min(d.a,p.a)*.3})`;
        x.beginPath();x.moveTo(p.x,p.y);x.lineTo(d.x,d.y);x.stroke()}
    });
  } else if(dots.length) dots.length=0;
  for(let i=shoots.length-1;i>=0;i--){
    const s=shoots[i];s.x+=s.vx;s.y+=s.vy;s.life-=.012;
    if(s.life<=0||s.y>H+50||s.x<-50){shoots.splice(i,1);continue}
    const m=Math.hypot(s.vx,s.vy),tx=s.x-s.vx/m*s.len,ty=s.y-s.vy/m*s.len;
    const g=x.createLinearGradient(s.x,s.y,tx,ty);
    const c=s.b?"255,217,138":"110,160,255";
    g.addColorStop(0,`rgba(${c},${s.life})`);g.addColorStop(1,`rgba(${c},0)`);
    x.strokeStyle=g;x.lineWidth=s.b?3:2;x.lineCap="round";
    x.shadowColor=`rgb(${c})`;x.shadowBlur=8;
    x.beginPath();x.moveTo(s.x,s.y);x.lineTo(tx,ty);x.stroke();x.shadowBlur=0;
  }
  if(room===FINALE){
    if(--auto<=0){launch();auto=70+Math.random()*60}
    fx.globalCompositeOperation="destination-out";
    fx.fillStyle="rgba(0,0,0,.2)";fx.fillRect(0,0,W,H);
    fx.globalCompositeOperation="lighter";
    for(let i=rk.length-1;i>=0;i--){const r=rk[i];r.y-=9;
      fx.fillStyle="#ffe9b0";fx.fillRect(r.x,r.y,2,6);
      if(r.y<=r.ty){burst(r);rk.splice(i,1)}}
    for(let i=ps.length-1;i>=0;i--){const p=ps[i];
      p.x+=p.vx;p.y+=p.vy;p.vx*=.98;p.vy=p.vy*.98+.05;p.a-=.011;
      if(p.a<=0){ps.splice(i,1);continue}
      fx.fillStyle=`hsla(${p.h},100%,65%,${p.a})`;fx.fillRect(p.x,p.y,2.4,2.4)}
  }
  requestAnimationFrame(frame);
}
frame();
go(0);
