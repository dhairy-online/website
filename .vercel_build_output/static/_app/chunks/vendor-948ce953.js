function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l;function a(t,n){return l||(l=document.createElement("a")),l.href=n,t===l.href}function u(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,i){if(r){const c=f(n,e,o,i);t.p(c,r)}}function _(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}const m="undefined"!=typeof window;let p=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&g(y)}let b=!1;function x(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function v(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function w(t){const n=S("style");return function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(v(t),n),n}function E(t,n){if(b){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:x(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let s=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,a=0;l<c.length;l++){for(;a<i.length&&c[l].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function A(t,n,e){b&&!e?E(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function N(t){t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function C(){return k(" ")}function j(){return k("")}function z(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function O(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function R(t){return Array.from(t.childNodes)}function T(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function D(t,n,e){return function(t,n,e,o){return T(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,S)}function q(t,n){return T(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>k(n)),!0)}function B(t){return q(t," ")}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function P(t,n=document.body){return Array.from(n.querySelectorAll(t))}const F=new Set;let I,L=0;function H(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),L-=r,L||g((()=>{L||(F.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),F.clear())})))}function G(t){I=t}function J(){if(!I)throw new Error("Function called outside component initialization");return I}function K(t){J().$$.on_mount.push(t)}function Q(t){J().$$.after_update.push(t)}function W(t,n){J().$$.context.set(t,n)}const U=[],V=[],X=[],Y=[],Z=Promise.resolve();let tt=!1;function nt(t){X.push(t)}let et=!1;const ot=new Set;function rt(){if(!et){et=!0;do{for(let t=0;t<U.length;t+=1){const n=U[t];G(n),it(n.$$)}for(G(null),U.length=0;V.length;)V.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];ot.has(n)||(ot.add(n),n())}X.length=0}while(U.length);for(;Y.length;)Y.pop()();tt=!1,et=!1,ot.clear()}}function it(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(nt)}}let ct;function st(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const lt=new Set;let at;function ut(){at={r:0,c:[],p:at}}function ft(){at.r||i(at.c),at=at.p}function dt(t,n){t&&t.i&&(lt.delete(t),t.i(n))}function ht(t,n,e,o){if(t&&t.o){if(lt.has(t))return;lt.add(t),at.c.push((()=>{lt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const _t={duration:0};function mt(e,o,r){let i,s,l=o(e,r),a=!1,u=0;function f(){i&&H(e,i)}function d(){const{delay:o=0,duration:r=300,easing:c=n,tick:d=t,css:h}=l||_t;h&&(i=function(t,n,e,o,r,i,c,s=0){const l=16.666/o;let a="{\n";for(let p=0;p<=1;p+=l){const t=n+(e-n)*i(p);a+=100*p+`%{${c(t,1-t)}}\n`}const u=a+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${s}`,d=v(t);F.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=w(t).sheet),_=d.__svelte_rules||(d.__svelte_rules={});_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,L+=1,f}(e,0,1,r,o,c,h,u++)),d(0,1);const _=p()+o,m=_+r;s&&s.abort(),a=!0,nt((()=>st(e,!0,"start"))),s=function(t){let n;return 0===$.size&&g(y),{promise:new Promise((e=>{$.add(n={c:t,f:e})})),abort(){$.delete(n)}}}((t=>{if(a){if(t>=m)return d(1,0),st(e,!0,"end"),f(),a=!1;if(t>=_){const n=c((t-_)/r);d(n,1-n)}}return a}))}let h=!1;return{start(){h||(h=!0,H(e),c(l)?(l=l(),(ct||(ct=Promise.resolve(),ct.then((()=>{ct=null}))),ct).then(d)):d())},invalidate(){h=!1},end(){a&&(f(),a=!1)}}}const pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function gt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function $t(t){return"object"==typeof t&&null!==t?t:{}}function yt(t){t&&t.c()}function bt(t,n){t&&t.l(n)}function xt(t,n,e,r){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,e),r||nt((()=>{const n=l.map(o).filter(c);a?a.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(nt)}function vt(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function wt(t,n){-1===t.$$.dirty[0]&&(U.push(t),tt||(tt=!0,Z.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Et(n,e,o,c,s,l,a,u=[-1]){const f=I;G(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};a&&a(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&wt(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){b=!0;const t=R(e.target);d.fragment&&d.fragment.l(t),t.forEach(N)}else d.fragment&&d.fragment.c();e.intro&&dt(n.$$.fragment),xt(n,e.target,e.anchor,e.customElement),b=!1,rt()}G(f)}class At{$destroy(){vt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Nt=[];function St(n,e=t){let o;const r=new Set;function i(t){if(s(n,t)&&(n=t,o)){const t=!Nt.length;for(const e of r)e[1](),Nt.push(e,n);if(t){for(let t=0;t<Nt.length;t+=2)Nt[t][0](Nt[t+1]);Nt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const l=[c,s];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function kt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*i}}export{K as A,e as B,St as C,u as D,z as E,h as F,_ as G,d as H,P as I,a as J,E as K,pt as L,nt as M,t as N,mt as O,kt as P,i as Q,At as S,R as a,O as b,D as c,N as d,S as e,A as f,q as g,M as h,Et as i,yt as j,C as k,j as l,bt as m,B as n,xt as o,gt as p,$t as q,ut as r,s,k as t,ht as u,vt as v,ft as w,dt as x,W as y,Q as z};