import{d as H,z as x,f as v,n as m,g as u,C as T,F as E,t as C,ag as z,ai as I,ah as F,k as A,o as f,r as B,E as P,L as R,D as V,p as K}from"../modules/vue-RaTfj2bZ.js";import{o as j,r as q,C as N,_ as U}from"../index-DIRMg5Ln.js";const X=["title"],G={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},J={"text-primary":""},O={op50:"","text-sm":""},Q={key:1,op50:"","flex-auto":"",pl1:""},W={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},Y=["min","max"],Z=H({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(L){const d=L,t=x(()=>d.clicksContext.total),k=x(()=>j(0,d.clicksContext.clicksStart,t.value)),p=x(()=>t.value-k.value+1),r=x({get(){return d.clicksContext.current>t.value?-1:d.clicksContext.current},set(s){d.clicksContext.current=s}}),b=x(()=>q(k.value,t.value+1));function g(){d.readonly||(r.value<0||r.value>t.value)&&(r.value=0)}return(s,n)=>(f(),v("div",{class:m(["flex gap-1 items-center select-none",p.value&&d.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${p.value}`},[u("div",G,[n[4]||(n[4]=u("div",{class:"i-carbon:cursor-1 text-sm op50"},null,-1)),r.value>=0&&r.value!==T(N)&&s.active?(f(),v(E,{key:0},[n[2]||(n[2]=u("div",{"flex-auto":""},null,-1)),u("span",J,C(r.value),1),n[3]||(n[3]=u("span",{op25:"","text-sm":""},"/",-1)),u("span",O,C(t.value),1)],64)):(f(),v("div",Q,C(t.value),1))]),u("div",W,[(f(!0),v(E,null,I(b.value,o=>(f(),v("div",{key:o,border:"y main","of-hidden":"",relative:"",class:m([o===0?"rounded-l border-l":"",o===t.value?"rounded-r border-r":""]),style:A({width:p.value>0?`${1/p.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:m(o<=r.value&&s.active?"bg-primary op15":"")},null,2),u("div",{class:m([+o==+r.value&&s.active?"text-primary font-bold op100 border-primary":"op30 border-main",o===0?"rounded-l":"",o===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},C(o),3)],6))),128)),z(u("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),class:m(["range",s.readonly?"pointer-events-none":""]),type:"range",min:k.value,max:t.value,step:1,absolute:"","inset-0":"","z-label":"",op0:"",style:A({"--thumb-width":`${1/(p.value+1)*100}%`}),onMousedown:g,onFocus:n[1]||(n[1]=o=>{var h;return(h=o.currentTarget)==null?void 0:h.blur()})},null,46,Y),[[F,r.value]])])],10,X))}}),ne=U(Z,[["__scopeId","data-v-48bbdd70"]]),ee=["innerHTML"],te=["textContent"],oe=["textContent"],M="slidev-note-fade",y="slidev-note-click-mark",ae=H({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(L,{emit:d}){const t=L,k=d,p=x(()=>{var s;return t.clicksContext!=null&&((s=t.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),r=B(null);function b(){var $,D;if(!r.value||!p.value)return;const s=Array.from(r.value.querySelectorAll(`.${y}`)),n=new Map,o=new Map;let h=0;for(const i of s){const a=Number(i.dataset.clicks);n.set(i,a);let l=i,e=i.parentElement;for(;e&&l!==r.value;)o.has(e)||o.set(e,[[null,h]]),o.get(e).push([l,a]),l=e,e=e.parentElement;h=a}const S=new Map;for(const[i,a]of o){let l=!1,e=0;for(const c of Array.from(i.childNodes)){let _=!1;for(;c===(($=a[e+1])==null?void 0:$[0]);)_=!0,e++;if(_)continue;let w=c;if(c.nodeType===3){if(!((D=c.textContent)!=null&&D.trim()))continue;w=document.createElement("span"),w.textContent=c.textContent,i.insertBefore(w,c),c.remove()}l||(l=e===0),S.set(w,a[e][1])}l||(a[0][1]=-1)}return i=>{const a=t.highlight;for(const[l,e]of o)l.classList.toggle(M,a&&!e.some(([c,_])=>_===i));for(const[l,e]of S)l.classList.toggle(M,a&&e!==i);for(const[l,e]of n)l.classList.remove(M),l.classList.toggle(`${y}-past`,a&&e<i),l.classList.toggle(`${y}-active`,a&&e===i),l.classList.toggle(`${y}-next`,a&&e===i+1),l.classList.toggle(`${y}-future`,a&&e>i+1),l.ondblclick=a?c=>{k("markerDblclick",c,e),!c.defaultPrevented&&(t.clicksContext.current=e,c.stopPropagation(),c.stopImmediatePropagation())}:null,l.onclick=a?c=>{k("markerClick",c,e)}:null,a&&t.autoScroll&&e===i&&l.scrollIntoView({block:"center",behavior:"smooth"})}}const g=B();return P(()=>[t.noteHtml,t.highlight],()=>{K(()=>{g.value=b()})},{immediate:!0}),R(()=>{b()}),V(()=>{var n,o;const s=((n=t.clicksContext)==null?void 0:n.current)??N;(o=g.value)==null||o.call(g,s)}),(s,n)=>s.noteHtml?(f(),v("div",{key:0,ref_key:"noteDisplay",ref:r,class:m(["prose overflow-auto outline-none slidev-note",[t.class,p.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,ee)):s.note?(f(),v("div",{key:1,class:m(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:C(s.note)},null,8,te)],2)):(f(),v("div",{key:2,class:m(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:C(t.placeholder||"No notes.")},null,8,oe)],2))}});export{ne as C,ae as _};
