"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5760],{57632:(t,n,o)=>{o.d(n,{Z:()=>p});const r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const u=new Uint8Array(16);function c(){if(!e&&(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(u)}const d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function s(t,n=0){return(d[t[n+0]]+d[t[n+1]]+d[t[n+2]]+d[t[n+3]]+"-"+d[t[n+4]]+d[t[n+5]]+"-"+d[t[n+6]]+d[t[n+7]]+"-"+d[t[n+8]]+d[t[n+9]]+"-"+d[t[n+10]]+d[t[n+11]]+d[t[n+12]]+d[t[n+13]]+d[t[n+14]]+d[t[n+15]]).toLowerCase()}const p=function(t,n,o){if(r.randomUUID&&!n&&!t)return r.randomUUID();const e=(t=t||{}).random||(t.rng||c)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){o=o||0;for(let t=0;t<16;++t)n[o+t]=e[t];return n}return s(e)}}}]);