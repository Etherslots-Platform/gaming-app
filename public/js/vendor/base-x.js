"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[424],{58162:r=>{r.exports=function(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),t=0;t<e.length;t++)e[t]=255;for(var n=0;n<r.length;n++){var o=r.charAt(n),a=o.charCodeAt(0);if(255!==e[a])throw new TypeError(o+" is ambiguous");e[a]=n}var f=r.length,i=r.charAt(0),h=Math.log(f)/Math.log(256),c=Math.log(256)/Math.log(f);function w(r){if("string"!=typeof r)throw new TypeError("Expected String");if(0===r.length)return new Uint8Array;for(var t=0,n=0,o=0;r[t]===i;)n++,t++;for(var a=(r.length-t)*h+1>>>0,c=new Uint8Array(a);r[t];){var w=e[r.charCodeAt(t)];if(255===w)return;for(var y=0,u=a-1;(0!==w||y<o)&&-1!==u;u--,y++)w+=f*c[u]>>>0,c[u]=w%256>>>0,w=w/256>>>0;if(0!==w)throw new Error("Non-zero carry");o=y,t++}for(var A=a-o;A!==a&&0===c[A];)A++;for(var g=new Uint8Array(n+(a-A)),l=n;A!==a;)g[l++]=c[A++];return g}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var t=0,n=0,o=0,a=e.length;o!==a&&0===e[o];)o++,t++;for(var h=(a-o)*c+1>>>0,w=new Uint8Array(h);o!==a;){for(var y=e[o],u=0,A=h-1;(0!==y||u<n)&&-1!==A;A--,u++)y+=256*w[A]>>>0,w[A]=y%f>>>0,y=y/f>>>0;if(0!==y)throw new Error("Non-zero carry");n=u,o++}for(var g=h-n;g!==h&&0===w[g];)g++;for(var l=i.repeat(t);g<h;++g)l+=r.charAt(w[g]);return l},decodeUnsafe:w,decode:function(r){var e=w(r);if(e)return e;throw new Error("Non-base"+f+" character")}}}}}]);