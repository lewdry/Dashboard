var H=Object.defineProperty;var J=(t,e,o)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var F=(t,e,o)=>J(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function m(){}function V(t){return t()}function K(){return Object.create(null)}function y(t){t.forEach(V)}function W(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function O(t,e,o){t.insertBefore(e,o||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function _(){return X(" ")}function v(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function g(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function Z(t){return Array.from(t.childNodes)}let I;function A(t){I=t}function ee(){if(!I)throw new Error("Function called outside component initialization");return I}function te(t){ee().$$.on_mount.push(t)}const q=[],R=[];let C=[];const U=[],ne=Promise.resolve();let D=!1;function oe(){D||(D=!0,ne.then(G))}function z(t){C.push(t)}const M=new Set;let k=0;function G(){if(k!==0)return;const t=I;do{try{for(;k<q.length;){const e=q[k];k++,A(e),re(e.$$)}}catch(e){throw q.length=0,k=0,e}for(A(null),q.length=0,k=0;R.length;)R.pop()();for(let e=0;e<C.length;e+=1){const o=C[e];M.has(o)||(M.add(o),o())}C.length=0}while(q.length);for(;U.length;)U.pop()();D=!1,M.clear(),A(t)}function re(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function ie(t){const e=[],o=[];C.forEach(n=>t.indexOf(n)===-1?e.push(n):o.push(n)),o.forEach(n=>n()),C=e}const B=new Set;let b;function le(){b={r:0,c:[],p:b}}function se(){b.r||y(b.c),b=b.p}function x(t,e){t&&t.i&&(B.delete(t),t.i(e))}function w(t,e,o,n){if(t&&t.o){if(B.has(t))return;B.add(t),b.c.push(()=>{B.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}else n&&n()}function j(t){t&&t.c()}function Y(t,e,o){const{fragment:n,after_update:r}=t.$$;n&&n.m(e,o),z(()=>{const i=t.$$.on_mount.map(V).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...i):y(i),t.$$.on_mount=[]}),r.forEach(z)}function L(t,e){const o=t.$$;o.fragment!==null&&(ie(o.after_update),y(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function ce(t,e){t.$$.dirty[0]===-1&&(q.push(t),oe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,o,n,r,i,l=null,s=[-1]){const f=I;A(t);const c=t.$$={fragment:null,ctx:[],props:i,update:m,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:K(),dirty:s,skip_bound:!1,root:e.target||f.$$.root};l&&l(c.root);let a=!1;if(c.ctx=o?o(t,e.props||{},(h,p,...$)=>{const T=$.length?$[0]:p;return c.ctx&&r(c.ctx[h],c.ctx[h]=T)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](T),a&&ce(t,h)),p}):[],c.update(),a=!0,y(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=Z(e.target);c.fragment&&c.fragment.l(h),h.forEach(P)}else c.fragment&&c.fragment.c();e.intro&&x(t.$$.fragment),Y(t,e.target,e.anchor),G()}A(f)}class S{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){L(this,1),this.$destroy=m}$on(e,o){if(!W(o))return m;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(o),()=>{const r=n.indexOf(o);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function ae(t){let e,o,n,r,i,l,s,f,c;return{c(){e=d("div"),o=d("p"),o.textContent="You find yourself at the entrance of a mysterious cave. The air is cool and damp, and you can hear strange echoes coming from deep within the tunnel mouth.",n=_(),r=d("div"),i=d("div"),l=_(),s=d("button"),s.textContent="Begin",g(o,"class","svelte-mfxxqi"),g(s,"class","svelte-mfxxqi"),g(r,"class","button-container svelte-mfxxqi"),g(e,"class","page svelte-mfxxqi")},m(a,h){O(a,e,h),u(e,o),u(e,n),u(e,r),u(r,i),u(r,l),u(r,s),f||(c=v(s,"click",t[1]),f=!0)},p:m,i:m,o:m,d(a){a&&P(e),f=!1,c()}}}function fe(t,e,o){let{goToPage:n}=e;const r=()=>n(2);return t.$$set=i=>{"goToPage"in i&&o(0,n=i.goToPage)},[n,r]}class de extends S{constructor(e){super(),N(this,e,fe,ae,E,{goToPage:0})}}function ge(t){let e,o,n,r,i,l,s,f,c;return{c(){e=d("div"),o=d("p"),o.textContent="You've entered the tunnel and find yourself at a fork. There are two tunnels ahead of you: one to the left and one to the right. Which path will you choose?",n=_(),r=d("div"),i=d("button"),i.textContent="Take left tunnel",l=_(),s=d("button"),s.textContent="Take right tunnel",g(o,"class","svelte-mfxxqi"),g(i,"class","svelte-mfxxqi"),g(s,"class","svelte-mfxxqi"),g(r,"class","button-container svelte-mfxxqi"),g(e,"class","page svelte-mfxxqi")},m(a,h){O(a,e,h),u(e,o),u(e,n),u(e,r),u(r,i),u(r,l),u(r,s),f||(c=[v(i,"click",t[1]),v(s,"click",t[2])],f=!0)},p:m,i:m,o:m,d(a){a&&P(e),f=!1,y(c)}}}function me(t,e,o){let{goToPage:n}=e;const r=()=>n(3),i=()=>n(4);return t.$$set=l=>{"goToPage"in l&&o(0,n=l.goToPage)},[n,r,i]}class he extends S{constructor(e){super(),N(this,e,me,ge,E,{goToPage:0})}}function pe(t){let e,o,n,r,i,l,s,f,c;return{c(){e=d("div"),o=d("p"),o.textContent="You continue down a narrow stone tunnel. The air is thick and acrid. You feel the space begin to narrow but you continue regardless untile the walls begin to touch your shoulders. The roof of the tunnel drops down sharply. You'll need to crawl from here.",n=_(),r=d("div"),i=d("button"),i.textContent="Turn around",l=_(),s=d("button"),s.textContent="Crawl",g(o,"class","svelte-mfxxqi"),g(i,"class","svelte-mfxxqi"),g(s,"class","svelte-mfxxqi"),g(r,"class","button-container svelte-mfxxqi"),g(e,"class","page svelte-mfxxqi")},m(a,h){O(a,e,h),u(e,o),u(e,n),u(e,r),u(r,i),u(r,l),u(r,s),f||(c=[v(i,"click",t[1]),v(s,"click",t[2])],f=!0)},p:m,i:m,o:m,d(a){a&&P(e),f=!1,y(c)}}}function _e(t,e,o){let{goToPage:n}=e;const r=()=>n(2),i=()=>n(4);return t.$$set=l=>{"goToPage"in l&&o(0,n=l.goToPage)},[n,r,i]}class $e extends S{constructor(e){super(),N(this,e,_e,pe,E,{goToPage:0})}}function ve(t){let e,o,n,r,i,l,s,f,c;return{c(){e=d("div"),o=d("p"),o.textContent="You find yourself in a strange room. The walls are glowing faintly and the temperature here is noticeably cooler. In the centre of the room is a small green glass bottle, covered in frost. The tunnel continues on the other side of the room.",n=_(),r=d("div"),i=d("button"),i.textContent="Follow tunnel",l=_(),s=d("button"),s.textContent="Investigate bottle",g(o,"class","svelte-mfxxqi"),g(i,"class","svelte-mfxxqi"),g(s,"class","svelte-mfxxqi"),g(r,"class","button-container svelte-mfxxqi"),g(e,"class","page svelte-mfxxqi")},m(a,h){O(a,e,h),u(e,o),u(e,n),u(e,r),u(r,i),u(r,l),u(r,s),f||(c=[v(i,"click",t[1]),v(s,"click",t[2])],f=!0)},p:m,i:m,o:m,d(a){a&&P(e),f=!1,y(c)}}}function xe(t,e,o){let{goToPage:n}=e;const r=()=>n(2),i=()=>n(5);return t.$$set=l=>{"goToPage"in l&&o(0,n=l.goToPage)},[n,r,i]}class ye extends S{constructor(e){super(),N(this,e,xe,ve,E,{goToPage:0})}}function be(t){let e,o,n,r,i,l,s,f,c;return{c(){e=d("div"),o=d("p"),o.textContent="You pick up the green bottle. The frost doesn't melt away in your hand. Strange. A small brown stopper sticks out of the neck. You aren't sure if you should pull it out, but you feel your hand moving to it before you can stop yourself. You open the bottle. You think of the moon in the sky, phases, cycles. Starting again.",n=_(),r=d("div"),i=d("div"),l=_(),s=d("button"),s.textContent="Drink from bottle",g(o,"class","svelte-mfxxqi"),g(s,"class","svelte-mfxxqi"),g(r,"class","button-container svelte-mfxxqi"),g(e,"class","page svelte-mfxxqi")},m(a,h){O(a,e,h),u(e,o),u(e,n),u(e,r),u(r,i),u(r,l),u(r,s),f||(c=v(s,"click",t[1]),f=!0)},p:m,i:m,o:m,d(a){a&&P(e),f=!1,c()}}}function we(t,e,o){let{goToPage:n}=e;const r=()=>n(1);return t.$$set=i=>{"goToPage"in i&&o(0,n=i.goToPage)},[n,r]}class Pe extends S{constructor(e){super(),N(this,e,we,be,E,{goToPage:0})}}function Te(t){let e,o;return e=new Pe({props:{goToPage:t[1]}}),{c(){j(e.$$.fragment)},m(n,r){Y(e,n,r),o=!0},p:m,i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){L(e,n)}}}function ke(t){let e,o;return e=new ye({props:{goToPage:t[1]}}),{c(){j(e.$$.fragment)},m(n,r){Y(e,n,r),o=!0},p:m,i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){L(e,n)}}}function qe(t){let e,o;return e=new $e({props:{goToPage:t[1]}}),{c(){j(e.$$.fragment)},m(n,r){Y(e,n,r),o=!0},p:m,i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){L(e,n)}}}function Ce(t){let e,o;return e=new he({props:{goToPage:t[1]}}),{c(){j(e.$$.fragment)},m(n,r){Y(e,n,r),o=!0},p:m,i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){L(e,n)}}}function Ee(t){let e,o;return e=new de({props:{goToPage:t[1]}}),{c(){j(e.$$.fragment)},m(n,r){Y(e,n,r),o=!0},p:m,i(n){o||(x(e.$$.fragment,n),o=!0)},o(n){w(e.$$.fragment,n),o=!1},d(n){L(e,n)}}}function Oe(t){let e,o,n,r,i,l,s,f;const c=[Ee,Ce,qe,ke,Te],a=[];function h(p,$){return p[0]===1?0:p[0]===2?1:p[0]===3?2:p[0]===4?3:p[0]===5?4:-1}return~(l=h(t))&&(s=a[l]=c[l](t)),{c(){e=d("main"),o=d("div"),n=d("h1"),n.textContent="Dashboard: a data mystery.",r=_(),i=d("div"),s&&s.c(),g(n,"class","header svelte-17asv0l"),g(i,"class","content svelte-17asv0l"),g(o,"class","game-window svelte-17asv0l"),g(e,"class","svelte-17asv0l")},m(p,$){O(p,e,$),u(e,o),u(o,n),u(o,r),u(o,i),~l&&a[l].m(i,null),f=!0},p(p,[$]){let T=l;l=h(p),l===T?~l&&a[l].p(p,$):(s&&(le(),w(a[T],1,1,()=>{a[T]=null}),se()),~l?(s=a[l],s?s.p(p,$):(s=a[l]=c[l](p),s.c()),x(s,1),s.m(i,null)):s=null)},i(p){f||(x(s),f=!0)},o(p){w(s),f=!1},d(p){p&&P(e),~l&&a[l].d()}}}function Ye(t,e,o){let n=1;function r(i){o(0,n=i)}return te(()=>{}),[n,r]}class Le extends S{constructor(e){super(),N(this,e,Ye,Oe,E,{})}}new Le({target:document.getElementById("app")});
