document.addEventListener("DOMContentLoaded",(function(){const t=new Date((new Date).getFullYear(),(new Date).getMonth()+1,1);let e=null;function n(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function o(){const o=t-new Date;o<=0&&clearInterval(e);const u=o>0?Math.floor(o/1e3/60/60/24):0,d=o>0?Math.floor(o/1e3/60/60)%24:0,s=o>0?Math.floor(o/1e3/60)%60:0,i=o>0?Math.floor(o/1e3)%60:0;r.textContent=u<10?"0"+u:u,a.textContent=d<10?"0"+d:d,l.textContent=s<10?"0"+s:s,c.textContent=i<10?"0"+i:i,r.dataset.title=n(u,["день","дня","дней"]),a.dataset.title=n(d,["час","часа","часов"]),l.dataset.title=n(s,["минута","минуты","минут"]),c.dataset.title=n(i,["секунда","секунды","секунд"])}const r=document.querySelector(".timer__days"),a=document.querySelector(".timer__hours"),l=document.querySelector(".timer__minutes"),c=document.querySelector(".timer__seconds");o(),e=setInterval(o,1e3)}));
//# sourceMappingURL=variant1.46ea2f88.js.map