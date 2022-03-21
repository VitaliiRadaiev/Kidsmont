/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */

 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s={},a={}){Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function l(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const p={addClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=l(e.map((e=>e.split(" "))));return o(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=l(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,s,a,i]=e;function r(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),d(t).is(s))a.apply(t,i);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(s)&&a.apply(e[t],i)}}function n(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const l=t.split(" ");let o;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(o=0;o<l.length;o+=1){const e=l[o];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:a,proxyListener:r}),t.addEventListener(e,r,i)}else for(o=0;o<l.length;o+=1){const e=l[o];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:a,proxyListener:n}),t.addEventListener(e,n,i)}}return this},off:function(...e){let[t,s,a,i]=e;"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let n;if(!s&&r.dom7Listeners?n=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(n=r.dom7LiveListeners[t]),n&&n.length)for(let e=n.length-1;e>=0;e-=1){const s=n[e];a&&s.listener===a||a&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===a?(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1)):a||(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1))}}}return this},trigger:function(...e){const t=r(),s=e[0].split(" "),a=e[1];for(let i=0;i<s.length;i+=1){const r=s[i];for(let s=0;s<this.length;s+=1){const i=this[s];if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:a,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(s),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,p=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+p-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(...e){let t;const s=a();for(let a=0;a<e.length;a+=1){t=e[a];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const a=s.createElement("div");for(a.innerHTML=t;a.firstChild;)this[e].appendChild(a.firstChild)}else if(t instanceof n)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s]);else this[e].appendChild(t)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function c(e,t=0){return setTimeout(e,t)}function u(){return Date.now()}function h(e,t="x"){const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(...e){const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const r=e[i];if(null!=r&&(a=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?a instanceof HTMLElement:a&&(1===a.nodeType||11===a.nodeType)))){const e=Object.keys(Object(r)).filter((e=>s.indexOf(e)<0));for(let s=0,a=e.length;s<a;s+=1){const a=e[s],i=Object.getOwnPropertyDescriptor(r,a);void 0!==i&&i.enumerable&&(m(t[a])&&m(r[a])?r[a].__swiper__?t[a]=r[a]:f(t[a],r[a]):!m(t[a])&&m(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:f(t[a],r[a])):t[a]=r[a])}}}var a;return t}function g(e,t,s){e.style.setProperty(t,s)}function v({swiper:e,targetPosition:t,side:s}){const a=r(),i=-e.translate;let n,l=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const d=t>i?"next":"prev",p=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,c=()=>{n=(new Date).getTime(),null===l&&(l=n);const r=Math.max(Math.min((n-l)/o,1),0),d=.5-Math.cos(r*Math.PI)/2;let u=i+d*(t-i);if(p(u,t)&&(u=t),e.wrapperEl.scrollTo({[s]:u}),p(u,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:u})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(c)};c()}let w,b,x;function y(){return w||(w=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),w}function E(e={}){return b||(b=function({userAgent:e}={}){const t=y(),s=r(),a=s.navigator.platform,i=e||s.navigator.userAgent,n={ios:!1,android:!1},l=s.screen.width,o=s.screen.height,d=i.match(/(Android);?[\s\/]+([\d.]+)?/);let p=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),u=!p&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===a;let m="MacIntel"===a;return!p&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${o}`)>=0&&(p=i.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),m=!1),d&&!h&&(n.os="android",n.android=!0),(p||u||c)&&(n.os="ios",n.ios=!0),n}(e)),b}function T(){return x||(x=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),x}Object.keys(p).forEach((e=>{Object.defineProperty(d.fn,e,{value:p[e],writable:!0})}));var C={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(...s){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(a,s)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(...e){const t=this;if(!t.eventsListeners)return t;let s,a,i;"string"==typeof e[0]||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),i=t):(s=e[0].events,a=e[0].data,i=e[0].context||t),a.unshift(i);return(Array.isArray(s)?s:s.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...a])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,a)}))})),t}};function $({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:i,previousIndex:r}=e;let n=s;if(n||(n=i>r?"next":i<r?"prev":"reset"),e.emit(`transition${a}`),t&&i!==r){if("reset"===n)return void e.emit(`slideResetTransition${a}`);e.emit(`slideChangeTransition${a}`),"next"===n?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`)}}function S(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:p}=t;if(!p)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let c=e;c.originalEvent&&(c=c.originalEvent);let h=d(c.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===c.type,!n.isTouchEvent&&"which"in c&&3===c.which)return;if(!n.isTouchEvent&&"button"in c&&c.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&c.target&&c.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!c.target||!c.target.shadowRoot);if(l.noSwiping&&(f?function(e,t=this){return function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,c.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===c.type?c.targetTouches[0].pageX:c.pageX,o.currentY="touchstart"===c.type?c.targetTouches[0].pageY:c.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==c.type){let e=!0;h.is(n.focusableElements)&&(e=!1),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||c.preventDefault()}t.emit("touchStart",c)}function M(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let p=e;if(p.originalEvent&&(p=p.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));if(i.isTouchEvent&&"touchmove"!==p.type)return;const c="touchmove"===p.type&&p.targetTouches&&(p.targetTouches[0]||p.changedTouches[0]),h="touchmove"===p.type?c.pageX:p.pageX,m="touchmove"===p.type?c.pageY:p.pageY;if(p.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&p.target===t.activeElement&&d(p.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",p),p.targetTouches&&p.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)),s.emit("sliderMove",p),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function P(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),p=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),p<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),c((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}const g=(h-n[m])/f,v=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m)),"prev"===t.swipeDirection&&(g>1-a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+v):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(m+v),"prev"===t.swipeDirection&&t.slideTo(m))}}function k(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function z(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function O(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let I=!1;function L(){}const A=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,p=!!i.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[c](r.start,e.onTouchStart,t),n[c](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:p}:p),n[c](r.end,e.onTouchEnd,t),r.cancel&&n[c](r.cancel,e.onTouchEnd,t)}else n[c](r.start,e.onTouchStart,!1),s[c](r.move,e.onTouchMove,p),s[c](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[c]("click",e.onClick,!0),i.cssMode&&l[c]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",k,!0):e[u]("observerUpdate",k,!0)};const D=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var G={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function N(e,t){return function(s={}){const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),f(t,s)):f(t,s)):f(t,s)}}const B={eventsEmitter:C,update:{updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,p=i.children(`.${e.params.slideClass}`),c=o?e.virtual.slides.length:p.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let v=a.slidesOffsetAfter;"function"==typeof v&&(v=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?p.css({marginLeft:"",marginBottom:"",marginTop:""}):p.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(g(e.wrapperEl,"--swiper-centered-offset-before",""),g(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(c);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<c;i+=1){$=0;const n=p.eq(i);if(C&&e.grid.updateSlide(i,n,c,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(p[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),p[i]&&(p[i].style[t("width")]=`${$}px`);p[i]&&(p[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+v,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter(((e,t)=>!a.cssMode||t!==p.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+v:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:p,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){g(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),g(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}c!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset()},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=-(n-o),u=c+t.slidesSizesGrid[e];(c>=0&&c<t.size-1||u>1&&u<=t.size||c<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-p:p}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,p=e;if(void 0===p){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?p=e:s>=a[e]&&s<a[e+1]&&(p=e+1):s>=a[e]&&(p=e);r.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,p);d=e+Math.floor((p-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),p===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const c=parseInt(t.slides.eq(p).attr("data-swiper-slide-index")||p,10);Object.assign(t,{snapIndex:d,realIndex:c,previousIndex:n,activeIndex:p}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==c&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,p=0;s.isHorizontal()?d=a?-e:e:p=e,i.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-p:i.virtualTranslate||r.transform(`translate3d(${d}px, ${p}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:p;const c=s.maxTranslate()-s.minTranslate();o=0===c?0:(e-s.minTranslate())/c,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,s=!0,a=!0,i){const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let p;if(p=a&&e>o?o:a&&e<d?d:e,r.updateProgress(p),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-p;else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:-p,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-p,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(p),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(p),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),$({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),$({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,s=!0,a,i){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:p,activeIndex:c,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(c||l.initialSlide||0)===(p||0)&&s&&r.emit("beforeSlideChangeStart");const w=-o[g];if(r.updateProgress(w),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==c){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(c||0)!==n)return!1}let b;if(b=n>c?"next":n<c?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,s=!0,a){const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e=this.params.speed,t=!0,s){const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e=this.params.speed,t=!0,s){const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const c=p(o?a.translate:-a.translate),u=n.map((e=>p(e)));let h=n[u.indexOf(c)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{c>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;return void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning?a.slideTo(a.slides.length-1,e,t,s):a.slideTo(m,e,t,s)},slideReset:function(e=this.params.speed,t=!0,s){return this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e=this.params.speed,t=!0,s,a=.5){const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),c((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),c((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=S.bind(e),e.onTouchMove=M.bind(e),e.onTouchEnd=P.bind(e),s.cssMode&&(e.onScroll=O.bind(e)),e.onClick=z.bind(e),i.touch&&!I&&(t.addEventListener("touchstart",L),I=!0),A(e,"on")},detachEvents:function(){A(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=D(e,i),p=D(e,o),c=i.enabled;d&&!p?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&p&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),f(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!m?e.disable():!c&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t="window",s){if(!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function p(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?p():t?(o=new l.Image,o.onload=p,o.onerror=p,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):p()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},X={};class H{constructor(...e){let t,s;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?s=e[0]:[t,s]=e,s||(s={}),s=f({},s),t&&!s.el&&(s.el=t),s.el&&d(s.el).length>1){const e=[];return d(s.el).each((t=>{const a=f({},s,{el:t});e.push(new H(a))})),e}const a=this;a.__swiper__=!0,a.support=y(),a.device=E({userAgent:s.userAgent}),a.browser=T(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],s.modules&&Array.isArray(s.modules)&&a.modules.push(...s.modules);const i={};a.modules.forEach((e=>{e({swiper:a,extendParams:N(s,i),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const r=f({},G,i);return a.params=f({},r,X,s),a.originalParams=f({},a.params),a.passedParams=f({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=d,Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return a.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},a.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){f(X,e)}static get extendedDefaults(){return X}static get defaults(){return G}static installModule(e){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>H.installModule(e))),H):(H.installModule(e),H)}}function Y(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function W(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function R(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function j(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function _(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function V(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function q(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function F(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)}))}function U(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function K({swiper:e,duration:t,transformEl:s,allSlides:a}){const{slides:i,activeIndex:r,$wrapperEl:n}=e;if(e.params.virtualTranslate&&0!==t){let t,l=!1;t=a?s?i.find(s):i:s?i.eq(r).find(s):i.eq(r),t.transitionEnd((()=>{if(l)return;if(!e||e.destroyed)return;l=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)n.trigger(t[e])}))}}function Z(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(B).forEach((e=>{Object.keys(B[e]).forEach((t=>{H.prototype[t]=B[e][t]}))})),H.use([function({swiper:e,on:t,emit:s}){const a=r();let i=null;const n=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==a.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{const{width:s,height:a}=e;let i=s,r=a;t.forEach((({contentBoxSize:t,contentRect:s,target:a})=>{a&&a!==e.el||(i=s?s.width:(t[0]||t).inlineSize,r=s?s.height:(t[0]||t).blockSize)})),i===s&&r===a||n()})),i.observe(e.el)):(a.addEventListener("resize",n),a.addEventListener("orientationchange",l))})),t("destroy",(()=>{i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",n),a.removeEventListener("orientationchange",l)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=[],n=r(),l=(e,t={})=>{const s=new(n.MutationObserver||n.WebkitMutationObserver)((e=>{if(1===e.length)return void a("observerUpdate",e[0]);const t=function(){a("observerUpdate",e[0])};n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)l(t[e])}l(e.$el[0],{childList:e.params.observeSlideChildren}),l(e.$wrapperEl[0],{attributes:!1})}})),s("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);const J=[function({swiper:e,extendParams:t,on:s}){let a;function i(t,s){const a=e.params.virtual;if(a.cache&&e.virtual.cache[s])return e.virtual.cache[s];const i=a.renderSlide?d(a.renderSlide.call(e,t,s)):d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",s),a.cache&&(e.virtual.cache[s]=i),i}function r(t){const{slidesPerView:s,slidesPerGroup:a,centeredSlides:r}=e.params,{addSlidesBefore:n,addSlidesAfter:l}=e.params.virtual,{from:o,to:d,slides:p,slidesGrid:c,offset:u}=e.virtual;e.params.cssMode||e.updateActiveIndex();const h=e.activeIndex||0;let m,f,g;m=e.rtlTranslate?"right":e.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a+l,g=Math.floor(s/2)+a+n):(f=s+(a-1)+l,g=a+n);const v=Math.max((h||0)-g,0),w=Math.min((h||0)+f,p.length-1),b=(e.slidesGrid[v]||0)-(e.slidesGrid[0]||0);function x(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load()}if(Object.assign(e.virtual,{from:v,to:w,offset:b,slidesGrid:e.slidesGrid}),o===v&&d===w&&!t)return e.slidesGrid!==c&&b!==u&&e.slides.css(m,`${b}px`),void e.updateProgress();if(e.params.virtual.renderExternal)return e.params.virtual.renderExternal.call(e,{offset:b,from:v,to:w,slides:function(){const e=[];for(let t=v;t<=w;t+=1)e.push(p[t]);return e}()}),void(e.params.virtual.renderExternalUpdate&&x());const y=[],E=[];if(t)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let t=o;t<=d;t+=1)(t<v||t>w)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();for(let e=0;e<p.length;e+=1)e>=v&&e<=w&&(void 0===d||t?E.push(e):(e>d&&E.push(e),e<o&&y.push(e)));E.forEach((t=>{e.$wrapperEl.append(i(p[t],t))})),y.sort(((e,t)=>t-e)).forEach((t=>{e.$wrapperEl.prepend(i(p[t],t))})),e.$wrapperEl.children(".swiper-slide").css(m,`${b}px`),x()}t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||r())})),s("setTranslate",(()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(a),a=setTimeout((()=>{r()}),100)):r())})),s("init update resize",(()=>{e.params.virtual.enabled&&e.params.cssMode&&g(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)})),Object.assign(e.virtual,{appendSlide:function(t){if("object"==typeof t&&"length"in t)for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.push(t[s]);else e.virtual.slides.push(t);r(!0)},prependSlide:function(t){const s=e.activeIndex;let a=s+1,i=1;if(Array.isArray(t)){for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.unshift(t[s]);a=s+t.length,i=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){const t=e.virtual.cache,s={};Object.keys(t).forEach((e=>{const a=t[e],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),s[parseInt(e,10)+i]=a})),e.virtual.cache=s}r(!0),e.slideTo(a,0)},removeSlide:function(t){if(null==t)return;let s=e.activeIndex;if(Array.isArray(t))for(let a=t.length-1;a>=0;a-=1)e.virtual.slides.splice(t[a],1),e.params.virtual.cache&&delete e.virtual.cache[t[a]],t[a]<s&&(s-=1),s=Math.max(s,0);else e.virtual.slides.splice(t,1),e.params.virtual.cache&&delete e.virtual.cache[t],t<s&&(s-=1),s=Math.max(s,0);r(!0),e.slideTo(s,0)},removeAllSlides:function(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)},update:r})},function({swiper:e,extendParams:t,on:s,emit:i}){const n=a(),l=r();function o(t){if(!e.enabled)return;const{rtlTranslate:s}=e;let a=t;a.originalEvent&&(a=a.originalEvent);const r=a.keyCode||a.charCode,o=e.params.keyboard.pageUpDown,d=o&&33===r,p=o&&34===r,c=37===r,u=39===r,h=38===r,m=40===r;if(!e.allowSlideNext&&(e.isHorizontal()&&u||e.isVertical()&&m||p))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&c||e.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||n.activeElement&&n.activeElement.nodeName&&("input"===n.activeElement.nodeName.toLowerCase()||"textarea"===n.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(d||p||c||u||h||m)){let t=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&0===e.$el.parents(`.${e.params.slideActiveClass}`).length)return;const a=e.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=l.innerWidth,o=l.innerHeight,d=e.$el.offset();s&&(d.left-=e.$el[0].scrollLeft);const p=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let e=0;e<p.length;e+=1){const s=p[e];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=o){if(0===s[0]&&0===s[1])continue;t=!0}}if(!t)return}e.isHorizontal()?((d||p||c||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((p||u)&&!s||(d||c)&&s)&&e.slideNext(),((d||c)&&!s||(p||u)&&s)&&e.slidePrev()):((d||p||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(p||m)&&e.slideNext(),(d||h)&&e.slidePrev()),i("keyPress",r)}}function p(){e.keyboard.enabled||(d(n).on("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(d(n).off("keydown",o),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&p()})),s("destroy",(()=>{e.keyboard.enabled&&c()})),Object.assign(e.keyboard,{enable:p,disable:c})},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();let n;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let l,o=u();const p=[];function h(){e.enabled&&(e.mouseEntered=!0)}function m(){e.enabled&&(e.mouseEntered=!1)}function f(t){return!(e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta)&&(!(e.params.mousewheel.thresholdTime&&u()-o<e.params.mousewheel.thresholdTime)&&(t.delta>=6&&u()-o<60||(t.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",t.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",t.raw)),o=(new i.Date).getTime(),!1)))}function g(t){let s=t,i=!0;if(!e.enabled)return;const r=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let o=e.$el;if("container"!==e.params.mousewheel.eventsTarget&&(o=d(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!o[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let h=0;const m=e.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;h=-g.pixelX*m}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;h=-g.pixelY}else h=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*m:-g.pixelY;if(0===h)return!0;r.invert&&(h=-h);let v=e.getTranslate()+h*r.sensitivity;if(v>=e.minTranslate()&&(v=e.minTranslate()),v<=e.maxTranslate()&&(v=e.maxTranslate()),i=!!e.params.loop||!(v===e.minTranslate()||v===e.maxTranslate()),i&&e.params.nested&&s.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const t={time:u(),delta:Math.abs(h),direction:Math.sign(h)},i=l&&t.time<l.time+500&&t.delta<=l.delta&&t.direction===l.direction;if(!i){l=void 0,e.params.loop&&e.loopFix();let o=e.getTranslate()+h*r.sensitivity;const d=e.isBeginning,u=e.isEnd;if(o>=e.minTranslate()&&(o=e.minTranslate()),o<=e.maxTranslate()&&(o=e.maxTranslate()),e.setTransition(0),e.setTranslate(o),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!d&&e.isBeginning||!u&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(n),n=void 0,p.length>=15&&p.shift();const s=p.length?p[p.length-1]:void 0,a=p[0];if(p.push(t),s&&(t.delta>s.delta||t.direction!==s.direction))p.splice(0);else if(p.length>=15&&t.time-a.time<500&&a.delta-t.delta>=1&&t.delta<=6){const s=h>0?.8:.2;l=t,p.splice(0),n=c((()=>{e.slideToClosest(e.params.speed,!0,void 0,s)}),0)}n||(n=c((()=>{l=t,p.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)}),500))}if(i||a("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),o===e.minTranslate()||o===e.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(h),direction:Math.sign(h),raw:t};p.length>=2&&p.shift();const a=p.length?p[p.length-1]:void 0;if(p.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(t){let s=e.$el;"container"!==e.params.mousewheel.eventsTarget&&(s=d(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",h),s[t]("mouseleave",m),s[t]("wheel",g)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):!e.mousewheel.enabled&&(v("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):!!e.mousewheel.enabled&&(v("off"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&w()})),s("destroy",(()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&b()})),Object.assign(e.mousewheel,{enable:w,disable:b})},function({swiper:e,extendParams:t,on:s,emit:a}){function i(t){let s;return t&&(s=d(t),e.params.uniqueNavElements&&"string"==typeof t&&s.length>1&&1===e.$el.find(t).length&&(s=e.$el.find(t))),s}function r(t,s){const a=e.params.navigation;t&&t.length>0&&(t[s?"addClass":"removeClass"](a.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=s),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](a.lockClass))}function n(){if(e.params.loop)return;const{$nextEl:t,$prevEl:s}=e.navigation;r(s,e.isBeginning&&!e.params.rewind),r(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&e.slidePrev()}function o(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&e.slideNext()}function p(){const t=e.params.navigation;if(e.params.navigation=Y(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const s=i(t.nextEl),a=i(t.prevEl);s&&s.length>0&&s.on("click",o),a&&a.length>0&&a.on("click",l),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(t.lockClass),a&&a.addClass(t.lockClass))}function c(){const{$nextEl:t,$prevEl:s}=e.navigation;t&&t.length&&(t.off("click",o),t.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",l),s.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},s("init",(()=>{p(),n()})),s("toEdge fromEdge lock unlock",(()=>{n()})),s("destroy",(()=>{c()})),s("enable disable",(()=>{const{$nextEl:t,$prevEl:s}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),s("click",((t,s)=>{const{$nextEl:i,$prevEl:r}=e.navigation,n=s.target;if(e.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),a(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}})),Object.assign(e.navigation,{update:n,init:p,destroy:c})},function({swiper:e,extendParams:t,on:s,emit:a}){const i="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let n=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function o(t,s){const{bulletActiveClass:a}=e.params.pagination;t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const t=e.rtl,s=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.pagination.$el;let c;const u=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(c=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),c>i-1-2*e.loopedSlides&&(c-=i-2*e.loopedSlides),c>u-1&&(c-=u),c<0&&"bullets"!==e.params.paginationType&&(c=u+c)):c=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const a=e.pagination.bullets;let i,l,u;if(s.dynamicBullets&&(r=a.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),p.css(e.isHorizontal()?"width":"height",r*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==e.previousIndex&&(n+=c-(e.previousIndex-e.loopedSlides||0),n>s.dynamicMainBullets-1?n=s.dynamicMainBullets-1:n<0&&(n=0)),i=Math.max(c-n,0),l=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(l+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),p.length>1)a.each((e=>{const t=d(e),a=t.index();a===c&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=l&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&o(t,"prev"),a===l&&o(t,"next"))}));else{const t=a.eq(c),r=t.index();if(t.addClass(s.bulletActiveClass),s.dynamicBullets){const t=a.eq(i),n=a.eq(l);for(let e=i;e<=l;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else o(t,"prev"),o(n,"next");else o(t,"prev"),o(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),n=(r*i-r)/2-u*r,l=t?"right":"left";a.css(e.isHorizontal()?l:"top",`${n}px`)}}if("fraction"===s.type&&(p.find(W(s.currentClass)).text(s.formatFractionCurrent(c+1)),p.find(W(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let t;t=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(c+1)/u;let i=1,r=1;"horizontal"===t?i=a:r=a,p.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(p.html(s.renderCustom(e,c+1,u)),a("paginationRender",p[0])):a("paginationUpdate",p[0]),e.params.watchOverflow&&e.enabled&&p[e.isLocked?"addClass":"removeClass"](s.lockClass)}function c(){const t=e.params.pagination;if(l())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if("bullets"===t.type){let a=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&a>s&&(a=s);for(let s=0;s<a;s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(W(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(r)),"custom"!==t.type&&a("paginationRender",e.pagination.$el[0])}function u(){e.params.pagination=Y(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s=d(t.el);0!==s.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=e.$el.find(t.el),s.length>1&&(s=s.filter((t=>d(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),s.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",W(t.bulletClass),(function(t){t.preventDefault();let s=d(this).index()*e.params.slidesPerGroup;e.params.loop&&(s+=e.loopedSlides),e.slideTo(s)})),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(t.lockClass))}function h(){const t=e.params.pagination;if(l())return;const s=e.pagination.$el;s.removeClass(t.hiddenClass),s.removeClass(t.modifierClass+t.type),s.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&s.off("click",W(t.bulletClass))}s("init",(()=>{u(),c(),p()})),s("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&p()})),s("snapIndexChange",(()=>{e.params.loop||p()})),s("slidesLengthChange",(()=>{e.params.loop&&(c(),p())})),s("snapGridLengthChange",(()=>{e.params.loop||(c(),p())})),s("destroy",(()=>{h()})),s("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),s("lock unlock",(()=>{p()})),s("click",((t,s)=>{const i=s.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r.length>0&&!d(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);a(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}})),Object.assign(e.pagination,{render:c,update:p,init:u,destroy:h})},function({swiper:e,extendParams:t,on:s,emit:i}){const r=a();let n,l,o,p,u=!1,h=null,m=null;function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:s,progress:a}=e,{$dragEl:i,$el:r}=t,n=e.params.scrollbar;let d=l,p=(o-l)*a;s?(p=-p,p>0?(d=l-p,p=0):-p+l>o&&(d=o+p)):p<0?(d=l+p,p=0):p+l>o&&(d=o-p),e.isHorizontal()?(i.transform(`translate3d(${p}px, 0, 0)`),i[0].style.width=`${d}px`):(i.transform(`translate3d(0px, ${p}px, 0)`),i[0].style.height=`${d}px`),n.hide&&(clearTimeout(h),r[0].style.opacity=1,h=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:s,$el:a}=t;s[0].style.width="",s[0].style.height="",o=e.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,p=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),l="auto"===e.params.scrollbar.dragSize?o*p:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?s[0].style.width=`${l}px`:s[0].style.height=`${l}px`,a[0].style.display=p>=1?"none":"",e.params.scrollbar.hide&&(a[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function v(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function w(t){const{scrollbar:s,rtlTranslate:a}=e,{$el:i}=s;let r;r=(v(t)-i.offset()[e.isHorizontal()?"left":"top"]-(null!==n?n:l/2))/(o-l),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const d=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*r;e.updateProgress(d),e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}function b(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:l,$dragEl:o}=a;u=!0,n=t.target===o[0]||t.target===o?v(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),r.transition(100),o.transition(100),w(t),clearTimeout(m),l.transition(0),s.hide&&l.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",t)}function x(t){const{scrollbar:s,$wrapperEl:a}=e,{$el:r,$dragEl:n}=s;u&&(t.preventDefault?t.preventDefault():t.returnValue=!1,w(t),a.transition(0),r.transition(0),n.transition(0),i("scrollbarDragMove",t))}function y(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:n}=a;u&&(u=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),r.transition("")),s.hide&&(clearTimeout(m),m=c((()=>{n.css("opacity",0),n.transition(400)}),1e3)),i("scrollbarDragEnd",t),s.snapOnRelease&&e.slideToClosest())}function E(t){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:n,support:l}=e,o=s.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const c="on"===t?"addEventListener":"removeEventListener";l.touch?(o[c](a.start,b,d),o[c](a.move,x,d),o[c](a.end,y,p)):(o[c](i.start,b,d),r[c](i.move,x,d),r[c](i.end,y,p))}function T(){const{scrollbar:t,$el:s}=e;e.params.scrollbar=Y(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let i=d(a.el);e.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${e.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(t,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&e.params.scrollbar.el&&E("on"),i&&i[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function C(){e.params.scrollbar.el&&E("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{T(),g(),f()})),s("update resize observerUpdate lock unlock",(()=>{g()})),s("setTranslate",(()=>{f()})),s("setTransition",((t,s)=>{!function(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}(s)})),s("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),s("destroy",(()=>{C()})),Object.assign(e.scrollbar,{updateSize:g,setTranslate:f,init:T,destroy:C})},function({swiper:e,extendParams:t,on:s}){t({parallax:{enabled:!1}});const a=(t,s)=>{const{rtl:a}=e,i=d(t),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const p=i.attr("data-swiper-parallax-scale"),c=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):e.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=c){const e=c-(c-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==p)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=p-(p-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},i=()=>{const{$el:t,slides:s,progress:i,snapGrid:r}=e;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,i)})),s.each(((t,s)=>{let n=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(s/2)-i*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,n)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&i()})),s("setTranslate",(()=>{e.params.parallax.enabled&&i()})),s("setTransition",((t,s)=>{e.params.parallax.enabled&&((t=e.params.speed)=>{const{$el:s}=e;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{const s=d(e);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(a=0),s.transition(a)}))})(s)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let n,l,o,p=1,c=!1;const u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},m={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function v(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function w(t){const s=e.support,a=e.params.zoom;if(l=!1,o=!1,!s.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;l=!0,u.scaleStart=v(t)}u.$slideEl&&u.$slideEl.length||(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`),0===u.$slideEl.length&&(u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==u.$imageWrapEl.length)?(u.$imageEl&&u.$imageEl.transition(0),c=!0):u.$imageEl=void 0}function b(t){const s=e.support,a=e.params.zoom,i=e.zoom;if(!s.gestures){if("touchmove"!==t.type||"touchmove"===t.type&&t.targetTouches.length<2)return;o=!0,u.scaleMove=v(t)}u.$imageEl&&0!==u.$imageEl.length?(s.gestures?i.scale=t.scale*p:i.scale=u.scaleMove/u.scaleStart*p,i.scale>u.maxRatio&&(i.scale=u.maxRatio-1+(i.scale-u.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===t.type&&w(t)}function x(t){const s=e.device,a=e.support,i=e.params.zoom,r=e.zoom;if(!a.gestures){if(!l||!o)return;if("touchend"!==t.type||"touchend"===t.type&&t.changedTouches.length<2&&!s.android)return;l=!1,o=!1}u.$imageEl&&0!==u.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,u.maxRatio),i.minRatio),u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,c=!1,1===r.scale&&(u.$slideEl=void 0))}function y(t){const s=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(e.allowClick=!1,!m.isTouched||!u.$slideEl)return;m.isMoved||(m.width=u.$imageEl[0].offsetWidth,m.height=u.$imageEl[0].offsetHeight,m.startX=h(u.$imageWrapEl[0],"x")||0,m.startY=h(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));const a=m.width*s.scale,i=m.height*s.scale;if(!(a<u.slideWidth&&i<u.slideHeight)){if(m.minX=Math.min(u.slideWidth/2-a/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-i/2,0),m.maxY=-m.minY,m.touchesCurrent.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesCurrent.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,!m.isMoved&&!c){if(e.isHorizontal()&&(Math.floor(m.minX)===Math.floor(m.startX)&&m.touchesCurrent.x<m.touchesStart.x||Math.floor(m.maxX)===Math.floor(m.startX)&&m.touchesCurrent.x>m.touchesStart.x))return void(m.isTouched=!1);if(!e.isHorizontal()&&(Math.floor(m.minY)===Math.floor(m.startY)&&m.touchesCurrent.y<m.touchesStart.y||Math.floor(m.maxY)===Math.floor(m.startY)&&m.touchesCurrent.y>m.touchesStart.y))return void(m.isTouched=!1)}t.cancelable&&t.preventDefault(),t.stopPropagation(),m.isMoved=!0,m.currentX=m.touchesCurrent.x-m.touchesStart.x+m.startX,m.currentY=m.touchesCurrent.y-m.touchesStart.y+m.startY,m.currentX<m.minX&&(m.currentX=m.minX+1-(m.minX-m.currentX+1)**.8),m.currentX>m.maxX&&(m.currentX=m.maxX-1+(m.currentX-m.maxX+1)**.8),m.currentY<m.minY&&(m.currentY=m.minY+1-(m.minY-m.currentY+1)**.8),m.currentY>m.maxY&&(m.currentY=m.maxY-1+(m.currentY-m.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=m.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=m.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(m.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(m.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(m.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(m.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=m.touchesCurrent.x,f.prevPositionY=m.touchesCurrent.y,f.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}}function E(){const t=e.zoom;u.$slideEl&&e.previousIndex!==e.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,p=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function T(t){const s=e.zoom,a=e.params.zoom;if(u.$slideEl||(t&&t.target&&(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`)),u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`)),!u.$imageEl||0===u.$imageEl.length||!u.$imageWrapEl||0===u.$imageWrapEl.length)return;let r,n,l,o,c,h,f,g,v,w,b,x,y,E,T,C,$,S;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===m.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,n="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=m.touchesStart.x,n=m.touchesStart.y),s.scale=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,t?($=u.$slideEl[0].offsetWidth,S=u.$slideEl[0].offsetHeight,l=u.$slideEl.offset().left+i.scrollX,o=u.$slideEl.offset().top+i.scrollY,c=l+$/2-r,h=o+S/2-n,v=u.$imageEl[0].offsetWidth,w=u.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,f=c*s.scale,g=h*s.scale,f<y&&(f=y),f>T&&(f=T),g<E&&(g=E),g>C&&(g=C)):(f=0,g=0),u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function C(){const t=e.zoom,s=e.params.zoom;u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex),u.$imageEl=u.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${s.containerClass}`)),u.$imageEl&&0!==u.$imageEl.length&&u.$imageWrapEl&&0!==u.$imageWrapEl.length&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),t.scale=1,p=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${s.zoomedSlideClass}`),u.$slideEl=void 0)}function $(t){const s=e.zoom;s.scale&&1!==s.scale?C():T(t)}function S(){const t=e.support;return{passiveListener:!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!t.passiveListener||{passive:!1,capture:!0}}}function M(){return`.${e.params.slideClass}`}function P(t){const{passiveListener:s}=S(),a=M();e.$wrapperEl[t]("gesturestart",a,w,s),e.$wrapperEl[t]("gesturechange",a,b,s),e.$wrapperEl[t]("gestureend",a,x,s)}function k(){n||(n=!0,P("on"))}function z(){n&&(n=!1,P("off"))}function O(){const t=e.zoom;if(t.enabled)return;t.enabled=!0;const s=e.support,{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.on(e.touchEvents.start,k,a),e.$wrapperEl.on(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,w,a),e.$wrapperEl.on(e.touchEvents.move,r,b,i),e.$wrapperEl.on(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}function I(){const t=e.zoom;if(!t.enabled)return;const s=e.support;t.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.off(e.touchEvents.start,k,a),e.$wrapperEl.off(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,w,a),e.$wrapperEl.off(e.touchEvents.move,r,b,i),e.$wrapperEl.off(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}Object.defineProperty(e.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=u.$imageEl?u.$imageEl[0]:void 0,s=u.$slideEl?u.$slideEl[0]:void 0;a("zoomChange",e,t,s)}g=e}}),s("init",(()=>{e.params.zoom.enabled&&O()})),s("destroy",(()=>{I()})),s("touchStart",((t,s)=>{e.zoom.enabled&&function(t){const s=e.device;u.$imageEl&&0!==u.$imageEl.length&&(m.isTouched||(s.android&&t.cancelable&&t.preventDefault(),m.isTouched=!0,m.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))}(s)})),s("touchEnd",((t,s)=>{e.zoom.enabled&&function(){const t=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(!m.isTouched||!m.isMoved)return m.isTouched=!1,void(m.isMoved=!1);m.isTouched=!1,m.isMoved=!1;let s=300,a=300;const i=f.x*s,r=m.currentX+i,n=f.y*a,l=m.currentY+n;0!==f.x&&(s=Math.abs((r-m.currentX)/f.x)),0!==f.y&&(a=Math.abs((l-m.currentY)/f.y));const o=Math.max(s,a);m.currentX=r,m.currentY=l;const d=m.width*t.scale,p=m.height*t.scale;m.minX=Math.min(u.slideWidth/2-d/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-p/2,0),m.maxY=-m.minY,m.currentX=Math.max(Math.min(m.currentX,m.maxX),m.minX),m.currentY=Math.max(Math.min(m.currentY,m.maxY),m.minY),u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}()})),s("doubleTap",((t,s)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&$(s)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&E()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&E()})),Object.assign(e.zoom,{enable:O,disable:I,in:T,out:C,toggle:$})},function({swiper:e,extendParams:t,on:s,emit:a}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let i=!1,n=!1;function l(t,s=!0){const i=e.params.lazy;if(void 0===t)return;if(0===e.slides.length)return;const r=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`):e.slides.eq(t),n=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||n.push(r[0]),0!==n.length&&n.each((t=>{const n=d(t);n.addClass(i.loadingClass);const o=n.attr("data-background"),p=n.attr("data-src"),c=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");e.loadImage(n[0],p||o,c,u,!1,(()=>{if(null!=e&&e&&(!e||e.params)&&!e.destroyed){if(o?(n.css("background-image",`url("${o}")`),n.removeAttr("data-background")):(c&&(n.attr("srcset",c),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),p&&(n.attr("src",p),n.removeAttr("data-src"))),n.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),e.params.loop&&s){const t=r.attr("data-swiper-slide-index");if(r.hasClass(e.params.slideDuplicateClass)){l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(),!1)}else{l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(),!1)}}a("lazyImageReady",r[0],n[0]),e.params.autoHeight&&e.updateAutoHeight()}})),a("lazyImageLoad",r[0],n[0])}))}function o(){const{$wrapperEl:t,params:s,slides:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,o=s.lazy;let p=s.slidesPerView;function c(e){if(r){if(t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(a[e])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===p&&(p=0),n||(n=!0),e.params.watchSlidesProgress)t.children(`.${s.slideVisibleClass}`).each((e=>{l(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(p>1)for(let e=i;e<i+p;e+=1)c(e)&&l(e);else l(i);if(o.loadPrevNext)if(p>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=p,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+p;e<s;e+=1)c(e)&&l(e);for(let e=r;e<i;e+=1)c(e)&&l(e)}else{const e=t.children(`.${s.slideNextClass}`);e.length>0&&l(u(e));const a=t.children(`.${s.slidePrevClass}`);a.length>0&&l(u(a))}}function p(){const t=r();if(!e||e.destroyed)return;const s=e.params.lazy.scrollingElement?d(e.params.lazy.scrollingElement):d(t),a=s[0]===t,n=a?t.innerWidth:s[0].offsetWidth,l=a?t.innerHeight:s[0].offsetHeight,c=e.$el.offset(),{rtlTranslate:u}=e;let h=!1;u&&(c.left-=e.$el[0].scrollLeft);const m=[[c.left,c.top],[c.left+e.width,c.top],[c.left,c.top+e.height],[c.left+e.width,c.top+e.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=n&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==e.touchEvents.start||!e.support.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};h?(o(),s.off("scroll",p,f)):i||(i=!0,s.on("scroll",p,f))}s("beforeInit",(()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)})),s("init",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?p():o())})),s("scroll",(()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&o()})),s("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?p():o())})),s("transitionStart",(()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!n)&&(e.params.lazy.checkInView?p():o())})),s("transitionEnd",(()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?p():o())})),s("slideChange",(()=>{const{lazy:t,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=e.params;t.enabled&&(s||a&&(i||0===r))&&o()})),Object.assign(e.lazy,{load:o,loadInSlide:l})},function({swiper:e,extendParams:t,on:s}){function a(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((t,s,a)=>{e.controller.control&&e.controller.setTranslate(s,a)})),s("setTransition",((t,s,a)=>{e.controller.control&&e.controller.setTransition(s,a)})),Object.assign(e.controller,{setTranslate:function(t,s){const i=e.controller.control;let r,n;const l=e.constructor;function o(t){const s=e.rtlTranslate?-e.translate:e.translate;"slide"===e.params.controller.by&&(!function(t){e.controller.spline||(e.controller.spline=e.params.loop?new a(e.slidesGrid,t.slidesGrid):new a(e.snapGrid,t.snapGrid))}(t),n=-e.controller.spline.interpolate(-s)),n&&"container"!==e.params.controller.by||(r=(t.maxTranslate()-t.minTranslate())/(e.maxTranslate()-e.minTranslate()),n=(s-e.minTranslate())*r+t.minTranslate()),e.params.controller.inverse&&(n=t.maxTranslate()-n),t.updateProgress(n),t.setTranslate(n,e),t.updateActiveIndex(),t.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==s&&i[e]instanceof l&&o(i[e]);else i instanceof l&&s!==i&&o(i)},setTransition:function(t,s){const a=e.constructor,i=e.controller.control;let r;function n(s){s.setTransition(t,e),0!==t&&(s.transitionStart(),s.params.autoHeight&&c((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===e.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function({swiper:e,extendParams:t,on:s}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});let a=null;function i(e){const t=a;0!==t.length&&(t.html(""),t.html(e))}function r(e){e.attr("tabIndex","0")}function n(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function o(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function c(e){e.attr("aria-disabled",!0)}function u(e){e.attr("aria-disabled",!1)}function h(t){if(13!==t.keyCode&&32!==t.keyCode)return;const s=e.params.a11y,a=d(t.target);e.navigation&&e.navigation.$nextEl&&a.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?i(s.lastSlideMessage):i(s.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&a.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?i(s.firstSlideMessage):i(s.prevSlideMessage)),e.pagination&&a.is(W(e.params.pagination.bulletClass))&&a[0].click()}function m(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{$nextEl:t,$prevEl:s}=e.navigation;s&&s.length>0&&(e.isBeginning?(c(s),n(s)):(u(s),r(s))),t&&t.length>0&&(e.isEnd?(c(t),n(t)):(u(t),r(t)))}function f(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function g(){return f()&&e.params.pagination.clickable}const v=(e,t,s)=>{r(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",h)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)};function w(){const t=e.params.a11y;e.$el.append(a);const s=e.$el;t.containerRoleDescriptionMessage&&o(s,t.containerRoleDescriptionMessage),t.containerMessage&&p(s,t.containerMessage);const i=e.$wrapperEl,r=i.attr("id")||`swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,n=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var c;c=r,i.attr("id",c),function(e,t){e.attr("aria-live",t)}(i,n),t.itemRoleDescriptionMessage&&o(d(e.slides),t.itemRoleDescriptionMessage),l(d(e.slides),t.slideRole);const u=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;let m,f;e.slides.each(((s,a)=>{const i=d(s),r=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;p(i,t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,u))})),e.navigation&&e.navigation.$nextEl&&(m=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(f=e.navigation.$prevEl),m&&m.length&&v(m,r,t.nextSlideMessage),f&&f.length&&v(f,r,t.prevSlideMessage),g()&&e.pagination.$el.on("keydown",W(e.params.pagination.bulletClass),h)}s("beforeInit",(()=>{a=d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),s("afterInit",(()=>{e.params.a11y.enabled&&(w(),m())})),s("toEdge",(()=>{e.params.a11y.enabled&&m()})),s("fromEdge",(()=>{e.params.a11y.enabled&&m()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&function(){const t=e.params.a11y;f()&&e.pagination.bullets.each((s=>{const a=d(s);e.params.pagination.clickable&&(r(a),e.params.pagination.renderBullet||(l(a,"button"),p(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${e.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),s("destroy",(()=>{e.params.a11y.enabled&&function(){let t,s;a&&a.length>0&&a.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),t&&t.off("keydown",h),s&&s.off("keydown",h),g()&&e.pagination.$el.off("keydown",W(e.params.pagination.bulletClass),h)}()}))},function({swiper:e,extendParams:t,on:s}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let a=!1,i={};const n=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},o=(t,s)=>{const i=r();if(!a||!e.params.history.enabled)return;let l;l=e.params.url?new URL(e.params.url):i.location;const o=e.slides.eq(s);let d=n(o.attr("data-history"));if(e.params.history.root.length>0){let s=e.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${t}/${d}`}else l.pathname.includes(t)||(d=`${t}/${d}`);const p=i.history.state;p&&p.value===d||(e.params.history.replaceState?i.history.replaceState({value:d},null,d):i.history.pushState({value:d},null,d))},d=(t,s,a)=>{if(s)for(let i=0,r=e.slides.length;i<r;i+=1){const r=e.slides.eq(i);if(n(r.attr("data-history"))===s&&!r.hasClass(e.params.slideDuplicateClass)){const s=r.index();e.slideTo(s,t,a)}}else e.slideTo(0,t,a)},p=()=>{i=l(e.params.url),d(e.params.speed,e.paths.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const t=r();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=l(e.params.url),(i.key||i.value)&&(d(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",p))}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const t=r();e.params.history.replaceState||t.removeEventListener("popstate",p)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&o(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&o(e.params.history.key,e.activeIndex)}))},function({swiper:e,extendParams:t,emit:s,on:i}){let n=!1;const l=a(),o=r();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{s("hashChange");const t=l.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){const s=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(void 0===s)return;e.slideTo(s)}},c=()=>{if(n&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState)o.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");l.location.hash=a||"",s("hashSet")}};i("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const t=l.location.hash.replace("#","");if(t){const s=0;for(let a=0,i=e.slides.length;a<i;a+=1){const i=e.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===t&&!i.hasClass(e.params.slideDuplicateClass)){const t=i.index();e.slideTo(t,s,e.params.runCallbacksOnInit,!0)}}}e.params.hashNavigation.watchState&&d(o).on("hashchange",p)})()})),i("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&d(o).off("hashchange",p)})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{n&&c()})),i("slideChange",(()=>{n&&e.params.cssMode&&c()}))},function({swiper:e,extendParams:t,on:s,emit:i}){let r;function n(){const t=e.slides.eq(e.activeIndex);let s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=c((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&n()}),s)}function l(){return void 0===r&&(!e.autoplay.running&&(e.autoplay.running=!0,i("autoplayStart"),n(),!0))}function o(){return!!e.autoplay.running&&(void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0))}function d(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,u)})):(e.autoplay.paused=!1,n())))}function p(){const t=a();"hidden"===t.visibilityState&&e.autoplay.running&&d(),"visible"===t.visibilityState&&e.autoplay.paused&&(n(),e.autoplay.paused=!1)}function u(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)})),e.autoplay.paused=!1,e.autoplay.running?n():o())}function h(){e.params.autoplay.disableOnInteraction?o():d(),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)}))}function m(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,n())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(e.params.autoplay.enabled){l();a().addEventListener("visibilitychange",p),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",h),e.$el.on("mouseleave",m))}})),s("beforeTransitionStart",((t,s,a)=>{e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(s):o())})),s("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():d())})),s("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&n()})),s("destroy",(()=>{e.$el.off("mouseenter",h),e.$el.off("mouseleave",m),e.autoplay.running&&o();a().removeEventListener("visibilitychange",p)})),Object.assign(e.autoplay,{pause:d,run:n,start:l,stop:o})},function({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function r(){const t=e.thumbs.swiper;if(!t)return;const s=t.clickedIndex,a=t.clickedSlide;if(a&&d(a).hasClass(e.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=t.params.loop?parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"),10):s,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);const s=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-t<t-s?a:s}e.slideTo(i)}function n(){const{thumbs:t}=e.params;if(a)return!1;a=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(t.swiper)){const a=Object.assign({},t.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),i=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function l(t){const s=e.thumbs.swiper;if(!s)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(e.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const t=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();n=void 0===t?a:void 0===a?t:a-o==o-t?s.params.slidesPerGroup>1?a:o:a-o<o-t?a:t,l=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,l=n>e.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,t?0:void 0))}let n=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<n;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);else for(let t=0;t<n;t+=1)s.slides.eq(e.realIndex+t).addClass(l)}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:t}=e.params;t&&t.swiper&&(n(),l(!0))})),s("slideChange update resize observerUpdate",(()=>{e.thumbs.swiper&&l()})),s("setTransition",((t,s)=>{const a=e.thumbs.swiper;a&&a.setTransition(s)})),s("beforeDestroy",(()=>{const t=e.thumbs.swiper;t&&i&&t&&t.destroy()})),Object.assign(e.thumbs,{init:n,update:l})},function({swiper:e,extendParams:t,emit:s,once:a}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchMove:function(){const{touchEventsData:t,touches:s}=e;0===t.velocities.length&&t.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function({currentPos:t}){const{params:i,$wrapperEl:r,rtlTranslate:n,snapGrid:l,touchEventsData:o}=e,d=u()-o.touchStartTime;if(t<-e.minTranslate())e.slideTo(e.activeIndex);else if(t>-e.maxTranslate())e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);else{if(i.freeMode.momentum){if(o.velocities.length>1){const t=o.velocities.pop(),s=o.velocities.pop(),a=t.position-s.position,r=t.time-s.time;e.velocity=a/r,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(r>150||u()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,o.velocities.length=0;let t=1e3*i.freeMode.momentumRatio;const d=e.velocity*t;let p=e.translate+d;n&&(p=-p);let c,h=!1;const m=20*Math.abs(e.velocity)*i.freeMode.momentumBounceRatio;let f;if(p<e.maxTranslate())i.freeMode.momentumBounce?(p+e.maxTranslate()<-m&&(p=e.maxTranslate()-m),c=e.maxTranslate(),h=!0,o.allowMomentumBounce=!0):p=e.maxTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(p>e.minTranslate())i.freeMode.momentumBounce?(p-e.minTranslate()>m&&(p=e.minTranslate()+m),c=e.minTranslate(),h=!0,o.allowMomentumBounce=!0):p=e.minTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<l.length;e+=1)if(l[e]>-p){t=e;break}p=Math.abs(l[t]-p)<Math.abs(l[t-1]-p)||"next"===e.swipeDirection?l[t]:l[t-1],p=-p}if(f&&a("transitionEnd",(()=>{e.loopFix()})),0!==e.velocity){if(t=n?Math.abs((-p-e.translate)/e.velocity):Math.abs((p-e.translate)/e.velocity),i.freeMode.sticky){const s=Math.abs((n?-p:p)-e.translate),a=e.slidesSizesGrid[e.activeIndex];t=s<a?i.speed:s<2*a?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode.momentumBounce&&h?(e.updateProgress(c),e.setTransition(t),e.setTranslate(p),e.transitionStart(!0,e.swipeDirection),e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(i.speed),setTimeout((()=>{e.setTranslate(c),r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(p),e.setTransition(t),e.setTranslate(p),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(p),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode&&s("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||d>=i.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})},function({swiper:e,extendParams:t}){let s,a,i;t({grid:{rows:1,fill:"column"}}),e.grid={initSlides:t=>{const{slidesPerView:r}=e.params,{rows:n,fill:l}=e.params.grid;a=s/n,i=Math.floor(t/n),s=Math.floor(t/n)===t/n?t:Math.ceil(t/n)*n,"auto"!==r&&"row"===l&&(s=Math.max(s,r*n))},updateSlide:(t,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=e.params,{rows:p,fill:c}=e.params.grid;let u,h,m;if("row"===c&&o>1){const e=Math.floor(t/(o*p)),a=t-p*o*e,i=0===e?o:Math.min(Math.ceil((n-e*p*o)/p),o);m=Math.floor(a/i),h=a-m*i+e*o,u=h+m*s/p,r.css({"-webkit-order":u,order:u})}else"column"===c?(h=Math.floor(t/p),m=t-h*p,(h>i||h===i&&m===p-1)&&(m+=1,m>=p&&(m=0,h+=1))):(m=Math.floor(t/a),h=t-m*a);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(t,a,i)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=e.params,{rows:o}=e.params.grid;if(e.virtualSize=(t+r)*s,e.virtualSize=Math.ceil(e.virtualSize/o)-r,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+r}px`}),n){a.splice(0,a.length);const t=[];for(let s=0;s<a.length;s+=1){let i=a[s];l&&(i=Math.floor(i)),a[s]<e.virtualSize+a[0]&&t.push(i)}a.push(...t)}}}},function({swiper:e}){Object.assign(e,{appendSlide:R.bind(e),prependSlide:j.bind(e),addSlide:_.bind(e),removeSlide:V.bind(e),removeAllSlides:q.bind(e)})},function({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1,transformEl:null}}),F({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.fadeEffect;for(let a=0;a<t.length;a+=1){const t=e.slides.eq(a);let i=-t[0].swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let r=0;e.isHorizontal()||(r=i,i=0);const n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);U(s,t).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:t=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),F({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{$el:t,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=e,p=e.params.cubeEffect,c=e.isHorizontal(),u=e.virtual&&e.params.virtual.enabled;let h,m=0;p.shadow&&(c?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=t.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),t.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),c||(f=h,h=0);const v=`rotateX(${c?0:-i}deg) rotateY(${c?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),p.slideShadows){let e=c?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=c?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),p.shadow)if(c)h.transform(`translate3d(0px, ${i/2+p.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)},setTransition:t=>{const{$el:s,slides:a}=e;a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),F({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:t,rtlTranslate:s}=e,a=e.params.flipEffect;for(let i=0;i<t.length;i+=1){const r=t.eq(i);let n=r[0].progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,p=e.params.cssMode?-l-e.translate:-l,c=0;if(e.isHorizontal()?s&&(o=-o):(c=p,p=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+t.length,a.slideShadows){let t=e.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=e.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===t.length&&(t=Z(a,r,e.isHorizontal()?"left":"top")),0===s.length&&(s=Z(a,r,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${p}px, ${c}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;U(a,r).transform(u)}},setTransition:t=>{const{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),F({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:t,height:s,slides:a,slidesSizesGrid:i}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:s/2-l,d=n?r.rotate:-r.rotate,p=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s*r.modifier;let c=n?d*l:0,u=n?0:d*l,h=-p*Math.abs(l),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*s);let f=n?0:m*l,g=n?m*l:0,v=1-(1-r.scale)*Math.abs(l);Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(c)<.001&&(c=0),Math.abs(u)<.001&&(u=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${c}deg) scale(${v})`;if(U(r,t).transform(w),t[0].style.zIndex=1-Math.abs(Math.round(l)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=Z(r,t,n?"left":"top")),0===s.length&&(s=Z(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=l>0?l:0),s.length&&(s[0].style.opacity=-l>0?-l:0)}}},setTransition:t=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function({swiper:e,extendParams:t,on:s}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=e=>"string"==typeof e?e:`${e}px`;F({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:t,$wrapperEl:s,slidesSizesGrid:i}=e,r=e.params.creativeEffect,{progressMultiplier:n}=r,l=e.params.centeredSlides;if(l){const t=i[0]/2-e.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${t}px))`)}for(let s=0;s<t.length;s+=1){const i=t.eq(s),o=i[0].progress,d=Math.min(Math.max(i[0].progress,-r.limitProgress),r.limitProgress);let p=d;l||(p=Math.min(Math.max(i[0].originalProgress,-r.limitProgress),r.limitProgress));const c=i[0].swiperSlideOffset,u=[e.params.cssMode?-c-e.translate:-c,0,0],h=[0,0,0];let m=!1;e.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),i[0].style.zIndex=-Math.abs(Math.round(o))+t.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=p<0?`scale(${1+(1-f.scale)*p*n})`:`scale(${1-(1-f.scale)*p*n})`,b=p<0?1+(1-f.opacity)*p*n:1-(1-f.opacity)*p*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=i.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=Z(r,i)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=U(r,i);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:t=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,transformEl:null}}),F({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:t,activeIndex:s}=e,a=e.params.cardsEffect,{startTranslate:i,isTouched:r}=e.touchEventsData,n=e.translate;for(let l=0;l<t.length;l+=1){const o=t.eq(l),d=o[0].progress,p=Math.min(Math.max(d,-4),4);let c=o[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(c-=t[0].swiperSlideOffset);let u=e.params.cssMode?-c-e.translate:-c,h=0;const m=-100*Math.abs(p);let f=1,g=-2*p,v=8-.75*Math.abs(p);const w=(l===s||l===s-1)&&p>0&&p<1&&(r||e.params.cssMode)&&n<i,b=(l===s||l===s+1)&&p<0&&p>-1&&(r||e.params.cssMode)&&n>i;if(w||b){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;g+=-28*p*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(p)+"%"}if(u=p<0?`calc(${u}px + (${v*Math.abs(p)}%))`:p>0?`calc(${u}px + (-${v*Math.abs(p)}%))`:`${u}px`,!e.isHorizontal()){const e=h;h=u,u=e}const x=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${p<0?""+(1+(1-f)*p):""+(1-(1-f)*p)})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=Z(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+t.length;U(a,o).transform(x)}},setTransition:t=>{const{transformEl:s}=e.params.cardsEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}];return H.use(J),H}));
 //# sourceMappingURL=swiper-bundle.min.js.map;
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});;
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.4-beta.32
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory();else if("function"==typeof define&&define.amd)define([],factory);else{var a=factory();for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(window,function(){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,generateMaskSet=__webpack_require__(4).generateMaskSet,analyseMask=__webpack_require__(4).analyseMask,maskScope=__webpack_require__(8);function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&($.isPlainObject(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=$.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts),this.isRTL=this.opts.numericInput),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return $.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=generateMaskSet(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.isRTL=scopedOpts.isRTL||scopedOpts.numericInput,el.inputmask.el=el,el.inputmask.$el=$(el),el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",that.userOptions),maskScope.call(el.inputmask,{action:"mask"}))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?($.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value})},format:function format(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata})},setValue:function setValue(value){this.el&&$(this.el).trigger("setvalue",[value])},analyseMask:analyseMask},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask?el.inputmask.setValue(value):$(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=$,window.Inputmask=Inputmask,module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__WEBPACK_AMD_DEFINE_RESULT__=function(){return"undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var window=__webpack_require__(2),document=window.document;function indexOf(list,elem){for(var i=0,len=list.length;i<len;i++)if(list[i]===elem)return i;return-1}function isWindow(obj){return null!=obj&&obj===obj.window}function isArraylike(obj){var length="length"in obj&&obj.length,ltype=_typeof(obj);return"function"!==ltype&&!isWindow(obj)&&(!(1!==obj.nodeType||!length)||("array"===ltype||0===length||"number"==typeof length&&0<length&&length-1 in obj))}function isValidElement(elem){return elem instanceof Element}function DependencyLib(elem){return elem instanceof DependencyLib?elem:this instanceof DependencyLib?void(null!=elem&&elem!==window&&(this[0]=elem.nodeName?elem:void 0!==elem[0]&&elem[0].nodeName?elem[0]:document.querySelector(elem),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new DependencyLib(elem)}DependencyLib.prototype={on:function on(events,handler){function addEvent(ev,namespace){elem.addEventListener?elem.addEventListener(ev,handler,!1):elem.attachEvent&&elem.attachEvent("on"+ev,handler),eventRegistry[ev]=eventRegistry[ev]||{},eventRegistry[ev][namespace]=eventRegistry[ev][namespace]||[],eventRegistry[ev][namespace].push(handler)}if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events=events.split(" "),endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";addEvent(ev,namespace)}return this},off:function off(events,handler){var eventRegistry,elem;function removeEvent(ev,namespace,handler){if(ev in eventRegistry==!0)if(elem.removeEventListener?elem.removeEventListener(ev,handler,!1):elem.detachEvent&&elem.detachEvent("on"+ev,handler),"global"===namespace)for(var nmsp in eventRegistry[ev])eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler),1);else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler),1)}function resolveNamespace(ev,namespace){var evts=[],hndx,hndL;if(0<ev.length)if(void 0===handler)for(hndx=0,hndL=eventRegistry[ev][namespace].length;hndx<hndL;hndx++)evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:eventRegistry[ev][namespace][hndx]});else evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:handler});else if(0<namespace.length)for(var evNdx in eventRegistry)for(var nmsp in eventRegistry[evNdx])if(nmsp===namespace)if(void 0===handler)for(hndx=0,hndL=eventRegistry[evNdx][nmsp].length;hndx<hndL;hndx++)evts.push({ev:evNdx,namespace:nmsp,handler:eventRegistry[evNdx][nmsp][hndx]});else evts.push({ev:evNdx,namespace:nmsp,handler:handler});return evts}if(isValidElement(this[0])){eventRegistry=this[0].eventRegistry,elem=this[0];for(var _events=events.split(" "),endx=0;endx<_events.length;endx++)for(var nsEvent=_events[endx].split("."),offEvents=resolveNamespace(nsEvent[0],nsEvent[1]),i=0,offEventsL=offEvents.length;i<offEventsL;i++)removeEvent(offEvents[i].ev,offEvents[i].namespace,offEvents[i].handler)}return this},trigger:function trigger(events,argument_1){if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events="string"==typeof events?events.split(" "):[events.type],endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";if(void 0!==document&&"global"===namespace){var evnt,i,params={bubbles:!0,cancelable:!0,detail:argument_1};if(document.createEvent){try{evnt=new CustomEvent(ev,params)}catch(e){evnt=document.createEvent("CustomEvent"),evnt.initCustomEvent(ev,params.bubbles,params.cancelable,params.detail)}events.type&&DependencyLib.extend(evnt,events),elem.dispatchEvent(evnt)}else evnt=document.createEventObject(),evnt.eventType=ev,evnt.detail=argument_1,events.type&&DependencyLib.extend(evnt,events),elem.fireEvent("on"+evnt.eventType,evnt)}else if(void 0!==eventRegistry[ev])if(events=events.type?events:DependencyLib.Event(events),events.detail=arguments.slice(1),"global"===namespace)for(var nmsp in eventRegistry[ev])for(i=0;i<eventRegistry[ev][nmsp].length;i++)eventRegistry[ev][nmsp][i].apply(elem,arguments);else for(i=0;i<eventRegistry[ev][namespace].length;i++)eventRegistry[ev][namespace][i].apply(elem,arguments)}return this}},DependencyLib.isFunction=function(obj){return"function"==typeof obj},DependencyLib.noop=function(){},DependencyLib.isArray=Array.isArray,DependencyLib.inArray=function(elem,arr,i){return null==arr?-1:indexOf(arr,elem,i)},DependencyLib.valHooks=void 0,DependencyLib.isPlainObject=function(obj){return"object"===_typeof(obj)&&!obj.nodeType&&!isWindow(obj)&&!(obj.constructor&&!Object.hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf"))},DependencyLib.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for("boolean"==typeof target&&(deep=target,target=arguments[i]||{},i++),"object"===_typeof(target)||DependencyLib.isFunction(target)||(target={}),i===length&&(target=this,i--);i<length;i++)if(null!=(options=arguments[i]))for(name in options)src=target[name],copy=options[name],target!==copy&&(deep&&copy&&(DependencyLib.isPlainObject(copy)||(copyIsArray=DependencyLib.isArray(copy)))?(clone=copyIsArray?(copyIsArray=!1,src&&DependencyLib.isArray(src)?src:[]):src&&DependencyLib.isPlainObject(src)?src:{},target[name]=DependencyLib.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));return target},DependencyLib.each=function(obj,callback){var value,i=0;if(isArraylike(obj))for(var length=obj.length;i<length&&(value=callback.call(obj[i],i,obj[i]),!1!==value);i++);else for(i in obj)if(value=callback.call(obj[i],i,obj[i]),!1===value)break;return obj},DependencyLib.data=function(owner,key,value){if(void 0===value)return owner.__data?owner.__data[key]:null;owner.__data=owner.__data||{},owner.__data[key]=value},"function"==typeof window.CustomEvent?DependencyLib.Event=window.CustomEvent:(DependencyLib.Event=function(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt},DependencyLib.Event.prototype=window.Event.prototype),module.exports=DependencyLib},function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(3);function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return $.each(opts.isRTL?opts.mask.reverse():opts.mask,function(ndx,msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0===msk.mask||$.isFunction(msk.mask)?altMask+=msk:altMask+=msk.mask}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&!$.isFunction(opts.mask.mask)?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),$.each(element.split(""),function(ndx,lmnt){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=(opts.definitions?opts.definitions[element]:void 0)||Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}module.exports={generateMaskSet:generateMaskSet,analyseMask:analyseMask}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12),module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1);Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}Inputmask.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))}}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";__webpack_require__(9);var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,ua=window.navigator&&window.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in window,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,keyCode=__webpack_require__(0);module.exports=function maskScope(actionObj){var inputmask=this,maskset=inputmask.maskset,opts=inputmask.opts,el=inputmask.el,isRTL=inputmask.isRTL||(inputmask.isRTL=opts.numericInput);function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate(pos,getTests(pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder(pos,test));else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder(pos,test)):jitRenderStatic=!1}pos++}while((void 0===inputmask.maxLength||pos<inputmask.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function resetMaskSet(soft){maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function determineTestTemplate(pos,tests){pos=0<pos?pos-1:0;for(var altTest=getTest(pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTestTemplate(pos,ndxIntlzr,tstPs){return maskset.validPositions[pos]||determineTestTemplate(pos,getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function getTest(pos,tests){return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests(pos))[0]}function positionCanMatchDefinition(pos,testDefinition,opts){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition(pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function getTests(pos,ndxIntlzr,tstPs){var maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),firstMatch)return!1}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&$.each(maskset.tests[pos]||[maskset.validPositions[pos]],function(ndx,lmnt){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos)}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if($.each(matches,function(ndx,mtch){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var unMatchedAlternation=!1,ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)?match=!0:0===ndx&&(unMatchedAlternation=!0),maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&-1!==$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[];return $.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate(pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&-1===locator[i].toString().indexOf(tst.locator[i])&&(locator[i]+=","+tst.locator[i])})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}function getBufferTemplate(){return void 0===maskset._buffer&&(maskset._buffer=getMaskTemplate(!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getBuffer(noCache){return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=getMaskTemplate(!0,getLastValidPosition(),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function refreshFromBuffer(start,end,buffer){var i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)resetMaskSet(),maskset.tests={},start=0,end=buffer.length,p=determineNewCaretPosition({begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),inputmask.ignorable=!1;var valResult=EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if($.isFunction(opts.casing)){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(-1!==$.inArray(altArr1[alndx],altArrC)){isMatch=!0;break}return isMatch}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:getLastValidPosition(),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=getTest(lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},resetMaskSet(!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||getLastValidPosition(void 0,!0)+1,input=validInputs[i],isValidRslt=isValid(nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(resetMaskSet(),prevAltPos=getTest(decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=getDecisionTaker(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){function isSelection(posObj){return isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&($.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),$.each(commandObj.remove.sort(function(a,b){return b.pos-a.pos}),function(ndx,lmnt){revalidateMask({begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&($.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),$.each(commandObj.insert.sort(function(a,b){return a.pos-b.pos}),function(ndx,lmnt){""!==lmnt.c&&isValid(lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){var test=tst.match;if(getBuffer(!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:getPlaceholder(position,test,!0)||test.def,pos:position},!1!==rslt){var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?getPlaceholder(position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c?!1:(!1===revalidateMask(pos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1)}}),rslt}void 0!==pos.begin&&(maskPos=isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if($.isFunction(opts.preValidation)&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(el,getBuffer(),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<inputmask.maxLength){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[seekNext(maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[seekNext(maskPos)]&&(result=isValid(maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!isMask(maskPos,opts.keepStatic))for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions(maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:seekNext(maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete(getBuffer())&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate(!0)):result=alternate(maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if($.isFunction(opts.postValidation)&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(el,getBuffer(!0),void 0!==pos.begin?isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(resetMaskSet(!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions(void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function trackbackPositions(originalPos,newPos,fillOnly){if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!isMask(ps,!0)){var vp=0==ps?getTest(ps):maskset.validPositions[ps-1];if(vp){var tests=getTests(ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=determineTestTemplate(ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask(ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid(newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=getLastValidPosition(void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==getTest(posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition(posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&getBuffer(!0);var result=isValid(posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==getTest(posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1}else validTest&&getTest(validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return resetMaskSet(!0),offset}function isMask(pos,strict,fuzzy){var test=getTestTemplate(pos).match;if(""===test.def&&(test=getTest(pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=determineTestTemplate(pos,getTests(pos)),testPlaceHolder=getPlaceholder(pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function seekNext(pos,newBlock,fuzzy){void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==getTest(position).match.def&&(!0===newBlock&&(!0!==getTest(position).match.newBlockMarker||!isMask(position,void 0,!0))||!0!==newBlock&&!isMask(position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var position=pos,tests;if(position<=0)return 0;for(;0<--position&&(!0===newBlock&&!0!==getTest(position).match.newBlockMarker||!0!==newBlock&&!isMask(position,void 0,!0)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position}function writeBuffer(input,buffer,caretPos,event,triggerEvents){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||caret(input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===keyCode.DELETE||event.keyCode===keyCode.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===getBufferTemplate().join("")?$input.trigger("cleared"):!0===isComplete(buffer)&&$input.trigger("complete")},0)}}function getPlaceholder(pos,test,returnPL){if(test=test||getTest(pos).match,void 0!==test.placeholder||!0===returnPL)return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests(pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function HandleNativePlaceholder(npt,value){if(ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=getBuffer().slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=getLastValidPosition();-1===lvp&&nptValue===getBufferTemplate().join("")?buffer=[]:-1!==lvp&&clearOptionalTail(buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function determineNewCaretPosition(selectedCaret,tabbed){function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0}}}return!1}if(tabbed&&(isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer().length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext(getLastValidPosition());break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext(radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(-1!==lvclickPosition||isMask(0)?lvclickPosition:0);if(clickPosition<lastPosition)selectedCaret.end=selectedCaret.begin=isMask(clickPosition,!0)||isMask(clickPosition-1,!0)?clickPosition:seekNext(clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=getTestTemplate(lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=getPlaceholder(lastPosition,tt.match);if(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask(lastPosition,opts.keepStatic)&&tt.match.def===placeholder){var newPos=seekNext(lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}var EventRuler={on:function on(input,eventName,eventHandler){var ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new Inputmask(imOpts).mask(that)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===keyCode.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=!1;break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),HandleNativePlaceholder(input,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev)},off:function off(input,event){var events;input.inputmask&&input.inputmask.events&&(event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;0<evArr.length;){var ev=evArr.pop();-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}))}},EventHandlers={keydownEvent:function keydownEvent(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input),kdResult=opts.onKeyDown.call(this,e,getBuffer(),pos,opts);if(void 0!==kdResult)return kdResult;if(k===keyCode.BACKSPACE||k===keyCode.DELETE||iphone&&k===keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===keyCode.X&&!("oncut"in input))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),maskset.p,e,input.inputmask._valueGet()!==getBuffer().join(""));else if(k===keyCode.END||k===keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===keyCode.HOME&&!e.shiftKey||k===keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===keyCode.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?(checkVal(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===keyCode.TAB?(!0===e.shiftKey?(!0===getTest(pos.begin).match.static&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<maskset.maskLength&&pos.end--),pos.begin<maskset.maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin)},0):k===keyCode.LEFT&&setTimeout(function(){var caretPos_begin=translatePosition(input.inputmask.caretPos.begin),caretPos_end=translatePosition(input.inputmask.caretPos.end);caret(input,isRTL?caretPos_begin+(caretPos_begin===maskset.maskLength?0:1):caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=-1!==$.inArray(k,opts.ignorables)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===keyCode.ENTER&&inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:caret(input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=isValid(pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(resetMaskSet(!0),forwardPosition=void 0!==valResult.caret?valResult.caret:seekNext(valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?seekPrevious(forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=getBuffer();writeBuffer(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},pasteEvent:function pasteEvent(e){var input=this,inputValue=this.inputmask._valueGet(!0),caretPos=caret(this),tempValue;isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return checkVal(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){function ieMobileHandler(input,inputValue,caretPos){if(iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=getPlaceholder(translatePosition(i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!isMask(translatePosition(i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(isRTL?getBuffer().slice().reverse():getBuffer()).join(""),caretPos=caret(input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),writeBuffer(input,getBuffer()),caret(input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":$.each(changes.data,function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:applyInputValue(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),applyInputValue(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&caret(this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==getBuffer().join("")&&writeBuffer(this,getBuffer(),seekNext(getLastValidPosition())),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||isComplete(getBuffer())&&-1!==getLastValidPosition()||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=getBuffer().join("")},invalidEvent:function invalidEvent(e){inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&HandleNativePlaceholder(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=determineNewCaretPosition(caret(this),tabbed);void 0!==newCaretPosition&&caret(this,newCaretPosition)}},cutEvent:function cutEvent(e){var input=this,pos=caret(this),clipboardData=window.clipboardData||e.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(this,keyCode.DELETE,pos),writeBuffer(this,getBuffer(),maskset.p,e,inputmask.undoValue!==getBuffer().join(""))},blurEvent:function blurEvent(e){var $input=$(this),input=this;if(this.inputmask){HandleNativePlaceholder(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=getBuffer().slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),!1===isComplete(buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(this,buffer,void 0,e)),inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&HandleNativePlaceholder(this,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")))},submitEvent:function submitEvent(){inputmask.undoValue!==getBuffer().join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===getLastValidPosition()&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.clearIncomplete&&!1===isComplete(getBuffer())&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer())},0))},resetEvent:function resetEvent(){el.inputmask.refreshValue=!0,setTimeout(function(){applyInputValue(el,el.inputmask._valueGet(!0))},0)}},valueBuffer;function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=this||input.inputmask,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=getMaskTemplate(!0,0).slice(ndx,seekNext(ndx)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!isMask(ndx)&&(getTest(ndx).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx).match.static&&getTest(ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===getTest(ndx).match.nativeDef&&(getTest(ndx+1).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx+1).match.static&&getTest(ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!isMask(ndx,!1,!0)){var nextPos=seekNext(ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}resetMaskSet(),maskset.tests={},initialNdx=opts.radixPoint?determineNewCaretPosition({begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if($.each(inputValue,function(ndx,charCode){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===getPlaceholder(ndx)&&isMask(ndx,!0)&&!1===isValid(ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,lvp+1):(result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),isRTL||(result.forwardPosition=result.pos+1)),writeBuffer(void 0,getBuffer(),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=seekNext(-1,void 0,!1);if(!isComplete(getBuffer())&&staticMatches.length<=nextValid||isComplete(getBuffer())&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer(input,getBuffer(),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==getBuffer().join(""))}function unmaskedvalue(input){if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function translatePosition(pos){return!isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=el.inputmask._valueGet().length-pos),pos}function caret(input,begin,end,notranslate,isDelete){var range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition(begin),end:notranslate?end:translatePosition(end)};if($.isArray(begin)&&(end=isRTL?begin[0]:begin[1],begin=isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=isRTL?begin.begin:begin.end,begin=isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition(begin),end=notranslate?end:translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var buffer=getMaskTemplate(!0,getLastValidPosition(),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition(),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function clearOptionalTail(buffer){buffer.length=0;for(var template=getMaskTemplate(!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break}}}return complete}}function handleRemove(input,k,pos,strict,fromIsValid){if((opts.numericInput||isRTL)&&(k===keyCode.BACKSPACE?k=keyCode.DELETE:k===keyCode.DELETE&&(k=keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=getLastValidPosition(void 0,!0),offset;if(pos.end>=getBuffer().length&&lvp>=pos.end&&(pos.end=lvp+1),k===keyCode.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=seekPrevious(pos.begin)):k===keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0,!0)?pos.end+1:seekNext(pos.end)+1),!1!==(offset=revalidateMask(pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==getTest(pos.begin).match.def.indexOf("|")){var result=alternate(!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?seekNext(result.pos.begin?result.pos.begin:result.pos):getLastValidPosition(-1,!0);(k!==keyCode.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===keyCode.DELETE?pos.begin+offset:pos.begin)}}function applyInputValue(input,value){input.inputmask.refreshValue=!1,$.isFunction(opts.onBeforeMask)&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&-1===getLastValidPosition()&&input.inputmask._valueSet("")}function mask(){function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==getLastValidPosition(void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&applyInputValue(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&applyInputValue(this,value)}function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(isRTL?getBuffer().reverse():getBuffer()).join("")&&applyInputValue(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(keyCode.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&-1!==$.inArray(elementType,opts.supportsInputType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),iphone&&(opts.insertModeVisual=!1),EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"invalid",EventHandlers.invalidEvent),EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),mobile||!0===opts.inputEventOnly?el.removeAttribute("maxLength"):(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent),EventRuler.on(el,"compositionend",EventHandlers.compositionendEvent)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),inputmask.undoValue=getBufferTemplate().join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){applyInputValue(el,el.inputmask._valueGet(!0),opts);var buffer=getBuffer().slice();!1===isComplete(buffer)&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===getLastValidPosition()?buffer=[]:clearOptionalTail(buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&writeBuffer(el,buffer),activeElement===el&&caret(el,seekNext(getLastValidPosition()))}}}if(void 0!==actionObj)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return void 0!==el&&void 0===actionObj.value||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,valueBuffer,opts)||valueBuffer).split(""),checkVal.call(this,void 0,!1,!1,valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite.call(inputmask,void 0,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":mask();break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer)):actionObj.value=isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;rl<lmib&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===(isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""));case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$.data(el,"_inputmask_opts",null);var cv=opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(opts.autoUnmask),valueProperty;cv!==getBufferTemplate().join("")?el.inputmask._valueSet(cv,opts.autoUnmask):el.inputmask._valueSet(""),EventRuler.off(el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value"),valueProperty&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=void 0}return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1}),maskTarget}return maskset.metadata}}},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),currentYear=(new Date).getFullYear(),escapeRegex=__webpack_require__(5).default,formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day===entryCurrentYear.getDay()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(!isFinite(dateParts.rawday)||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=escapeRegex(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation&&dateOperation.call(dateObj.date,"month"==targetProp?parseInt(dateObj[targetProp])-1:dateObj[targetProp])}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}Inputmask.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){if(strict)return!0;var tokenMatch,validator;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate(dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===keyCode.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),escapeRegex=__webpack_require__(5).default;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)Inputmask.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=$.inArray(opts.radixPoint,buffer);-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;return $.each(maskset.validPositions,function(ndx,tst){if(tst&&tst.match.def===symbol)return ret=parseInt(ndx),!1}),ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}Inputmask.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=$.inArray(opts.radixPoint,buffer),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.inputmask.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(escapeRegex.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace(escapeRegex(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace(escapeRegex(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=$.inArray(opts.radixPoint,buffer);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case keyCode.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case keyCode.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===keyCode.DELETE||e.keyCode===keyCode.BACKSPACE||e.keyCode===keyCode.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===keyCode.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=$.inArray(opts.radixPoint,buffer);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===keyCode.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==keyCode.BACKSPACE&&e.keyCode!==keyCode.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(2)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(Parent,args,Class){return _construct=isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(document&&document.head&&document.head.attachShadow&&void 0===customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_possibleConstructorReturn(this,_getPrototypeOf(InputmaskElement).call(this));var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return _inherits(InputmaskElement,_HTMLElement),InputmaskElement}(_wrapNativeSuper(HTMLElement));customElements.define("input-mask",InputmaskElement)}}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=r(t);if(e){var n=r(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var l,r=t[Symbol.iterator]();!(s=(l=r.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(l){var r=f(l,2),a=r[0],c=r[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var S=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||r,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,l,r=(o()-e.startTime)/468;l=r=r>1?1:r,i=.5*(1-Math.cos(Math.PI*l)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,l){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=r),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:l})}}}})),x=(S.polyfill,function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=S,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(r(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(r(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,l=e.dataset[t.name+"Class"]||t.class,r="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:r,class:l,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[r]=v,e.classList.contains(l)&&t.setInView(t.els[r],r)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,l=o+n.targetEl.offsetHeight,r=t.getRelativeOffset(n.offset);t.els[s].top=o+r[0],t.els[s].bottom=l-r[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i;var n=function(){return parseInt(window.pageYOffset)===parseInt(i)};if(s){if(n())return void s();var o=function t(){n()&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",o)}window.scrollTo({top:i,behavior:0===e.duration?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var l in i=Object(arguments[o]))T.call(i,l)&&(n[l]=i[l]);if(k){s=k(i);for(var r=0;r<s.length;r++)E.call(i,s[r])&&(n[s[r]]=i[s[r]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,l=s.length;o<l;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,l,r;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),r=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),l=r/s.length,n=o/i.length,Math.abs(l)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,P=37,Y=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case P:case Y:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function l(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var l=s+.1*((e-n[o])/(n[o+1]-n[o])),r=Q(l,t,i);return r>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,l,t,i):0===r?l:function(t,e,i,s,n){var o,l,r=0;do{(o=J(l=e+(i-e)/2,s,n)-t)>0?i=l:e=l}while(Math.abs(o)>1e-7&&++r<10);return l}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(l(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,lt=34,rt=36,at=35,ct=function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(r(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case it:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:this.isActiveElementScrollSensitive()&&(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||document.activeElement instanceof HTMLButtonElement||document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(i){var s=f(i,2),n=(s[0],s[1]);n.persistent||t.instance.scroll[t.directionAxis]>n.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<n.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(n.el,-t.instance.scroll[t.directionAxis],0):t.transform(n.el,0,-t.instance.scroll[t.directionAxis]),n.inView||(n.inView=!0,n.el.style.opacity=1,n.el.style.pointerEvents="all",n.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):((n.inView||e)&&(n.inView=!1,n.el.style.opacity=0,n.el.style.pointerEvents="none",n.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(n.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(r(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,l=K(e),r=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return l.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===r||r.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(r.el).y-q(o).y,n=w.left-q(r.el).x-q(o).x);var S=s+o.offsetHeight,x=n+o.offsetWidth,k={x:(x-n)/2+n,y:(S-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,S=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((x=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(S-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],x-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],S-=D[1]}var L={el:e,id:c,class:a,section:r,top:s,middle:k,bottom:S,left:n,right:x,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},l={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},r="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:l,inView:!1,persistent:r,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),l=F(o.x,e,s),r=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l,",").concat(r,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(l){var r=f(l,2),a=(r[0],r[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=isNaN(parseInt(i.duration))?1e3:parseInt(i.duration),o=i.easing||[.25,0,.35,1],l=!!i.disableLerp,r=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){l?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var S=Date.now(),x=function t(){var i=(Date.now()-S)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),r&&r()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};x()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new x(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));;
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
})(this, function (exports) {
    'use strict';
    /***
     Throw a console warning with the passed arguments
     ***/

    var warningThrown = 0;

    function throwWarning() {
        if (warningThrown > 100) {
            return;
        } else if (warningThrown === 100) {
            console.warn("Curtains: too many warnings thrown, stop logging.");
        } else {
            var args = Array.prototype.slice.call(arguments);
            console.warn.apply(console, args);
        }

        warningThrown++;
    }
    /***
     Throw a console error with the passed arguments
     ***/


    function throwError() {
        var args = Array.prototype.slice.call(arguments);
        console.error.apply(console, args);
    }
    /***
     Generates an universal unique identifier
     ***/


    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16).toUpperCase();
        });
    }
    /***
     Check whether a number is power of 2
       params:
     @value (float): number to check
     ***/


    function isPowerOf2(value) {
        return (value & value - 1) === 0;
    }
    /***
     Linear interpolation between two numbers
       params:
     @start (float): value to lerp
     @end (float): end value to use for lerp
     @amount (float): amount of lerp
     ***/


    function _lerp(start, end, amount) {
        return (1 - amount) * start + amount * end;
    }
    /***
     Here we create our Scene object
     The Scene will stack all the objects that will be drawn (planes and shader passes) in different arrays, and call them in the right order to be drawn.
       Based on the concept exposed here https://webgl2fundamentals.org/webgl/lessons/webgl-drawing-multiple-things.html
     The idea is to optimize the order of the rendered object so that the WebGL calls are kept to a strict minimum
       Here's the whole draw process order:
     - first we draw the ping pong planes
     - if needed, we bind the first scene pass frame buffer
     - draw all the planes that are rendered onto a render target (render pass)
     - draw the planes from the first render target created, ordered by their renderOrder then indexes (first added first drawn) order
     - draw the planes from the second render target created, etc.
     - draw the render passes content (depth buffer is cleared after each pass)
     - draw the transparent planes ordered by renderOrder, Z positions, geometry IDs and then indexes (first added first drawn)
     - draw the opaque planes ordered by renderOrder, geometry IDs and then indexes (first added first drawn)
     - draw the scene passes content
       params:
     @renderer (Renderer class object): our renderer class object
       returns :
     @this: our Scene
     ***/


    var Scene = /*#__PURE__*/function () {
        function Scene(renderer) {
            _classCallCheck(this, Scene);

            this.type = "Scene";

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                throwError(this.type + ": Renderer WebGL context is undefined", renderer); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = renderer.gl;
            this.initStacks();
        }
        /***
         Init our Scene stacks object
         ***/


        _createClass(Scene, [{
            key: "initStacks",
            value: function initStacks() {
                this.stacks = {
                    // planes
                    "pingPong": [],
                    "renderTargets": [],
                    "opaque": [],
                    "transparent": [],
                    // post processing
                    "renderPasses": [],
                    "scenePasses": []
                };
            }
            /*** RESET STACKS ***/

            /***
             Reset the plane stacks (used when disposing a plane)
             ***/

        }, {
            key: "resetPlaneStacks",
            value: function resetPlaneStacks() {
                // clear the plane stacks
                this.stacks.pingPong = [];
                this.stacks.renderTargets = [];
                this.stacks.opaque = [];
                this.stacks.transparent = []; // rebuild them with the new plane indexes

                for (var i = 0; i < this.renderer.planes.length; i++) {
                    this.addPlane(this.renderer.planes[i]);
                }
            }
            /***
             Reset the shader pass stacks (used when disposing a shader pass)
             ***/

        }, {
            key: "resetShaderPassStacks",
            value: function resetShaderPassStacks() {
                // now rebuild the drawStacks
                // start by clearing all drawstacks
                this.stacks.scenePasses = [];
                this.stacks.renderPasses = []; // restack our planes with new indexes

                for (var i = 0; i < this.renderer.shaderPasses.length; i++) {
                    this.renderer.shaderPasses[i].index = i;

                    if (this.renderer.shaderPasses[i]._isScenePass) {
                        this.stacks.scenePasses.push(this.renderer.shaderPasses[i]);
                    } else {
                        this.stacks.renderPasses.push(this.renderer.shaderPasses[i]);
                    }
                } // reset the scenePassIndex if needed


                if (this.stacks.scenePasses.length === 0) {
                    this.renderer.state.scenePassIndex = null;
                }
            }
            /*** ADDING PLANES ***/

            /***
             Add a plane to our renderTargets stack
               params:
             @plane (Plane object): plane to add to our stack
             ***/

        }, {
            key: "addToRenderTargetsStack",
            value: function addToRenderTargetsStack(plane) {
                // find all planes that are rendered onto a render target
                var renderTargetsPlanes = this.renderer.planes.filter(function (el) {
                    return el.type !== "PingPongPlane" && el.target && el.uuid !== plane.uuid;
                }); // is there any plane that is already rendered onto that plane's render target?

                var siblingPlaneIndex = -1;

                if (plane.target._depth) {
                    // findLastIndex
                    for (var i = renderTargetsPlanes.length - 1; i >= 0; i--) {
                        if (renderTargetsPlanes[i].target.uuid === plane.target.uuid) {
                            siblingPlaneIndex = i + 1;
                            break;
                        }
                    }
                } else {
                    // findIndex
                    siblingPlaneIndex = renderTargetsPlanes.findIndex(function (el) {
                        return el.target.uuid === plane.target.uuid;
                    });
                } // if findIndex returned -1, just push the plane


                siblingPlaneIndex = Math.max(0, siblingPlaneIndex);
                renderTargetsPlanes.splice(siblingPlaneIndex, 0, plane); // sort by index (order of addition) then render order, depending on whether the render target handle depth or not

                if (plane.target._depth) {
                    renderTargetsPlanes.sort(function (a, b) {
                        return a.index - b.index;
                    });
                    renderTargetsPlanes.sort(function (a, b) {
                        return b.renderOrder - a.renderOrder;
                    });
                } else {
                    renderTargetsPlanes.sort(function (a, b) {
                        return b.index - a.index;
                    });
                    renderTargetsPlanes.sort(function (a, b) {
                        return a.renderOrder - b.renderOrder;
                    });
                } // sort by render targets order


                renderTargetsPlanes.sort(function (a, b) {
                    return a.target.index - b.target.index;
                });
                this.stacks.renderTargets = renderTargetsPlanes;
            }
            /***
             Rebuilds our regular stack (transparent or opaque) with our plane added, geometry IDs and then indexes (first added first drawn)
               params:
             @plane (Plane object): plane to add to our stack
               returns:
             @planeStack (array): our transparent or opaque stack ready to be applied custom sorting filter
             ***/

        }, {
            key: "addToRegularPlaneStack",
            value: function addToRegularPlaneStack(plane) {
                // get all planes that have same transparency
                var planeStack = this.renderer.planes.filter(function (el) {
                    return el.type !== "PingPongPlane" && !el.target && el._transparent === plane._transparent && el.uuid !== plane.uuid;
                }); // find if there's already a plane with the same geometry with a findLastIndex function

                var siblingPlaneIndex = -1;

                for (var i = planeStack.length - 1; i >= 0; i--) {
                    if (planeStack[i]._geometry.definition.id === plane._geometry.definition.id) {
                        siblingPlaneIndex = i + 1;
                        break;
                    }
                } // if findIndex returned -1 (no matching geometry or program)


                siblingPlaneIndex = Math.max(0, siblingPlaneIndex); // add it to our stack plane array

                planeStack.splice(siblingPlaneIndex, 0, plane); // sort by indexes

                planeStack.sort(function (a, b) {
                    return a.index - b.index;
                });
                return planeStack;
            }
            /***
             This function will add a plane into one of our 4 stacks : pingPong, renderTargets, transparent and opaque
             - pingPong is just a simple array (ordered by order of creation)
             - renderTargets array is ordered by render target creation order, planes renderOrder value and then planes indexes (order of creation)
             - transparent array is ordered by renderOrder, Z positions, geometry IDs and then indexes (first added first drawn)
             - opaque array is ordered by renderOrder, geometry IDs and then indexes (first added first drawn)
               This is done to improve speed and reduce GL calls
               params:
             @plane (Plane object): plane to add to our scene
             ***/

        }, {
            key: "addPlane",
            value: function addPlane(plane) {
                if (plane.type === "PingPongPlane") {
                    this.stacks.pingPong.push(plane);
                } else if (plane.target) {
                    this.addToRenderTargetsStack(plane);
                } else {
                    if (plane._transparent) {
                        // rebuild a stack of all transparent planes
                        var planeStack = this.addToRegularPlaneStack(plane); // sort by their depth position

                        planeStack.sort(function (a, b) {
                            return b.relativeTranslation.z - a.relativeTranslation.z;
                        }); // then sort by their render order

                        planeStack.sort(function (a, b) {
                            return b.renderOrder - a.renderOrder;
                        });
                        this.stacks.transparent = planeStack;
                    } else {
                        // rebuild a stack of all opaque planes
                        var _planeStack = this.addToRegularPlaneStack(plane); // then sort by their render order


                        _planeStack.sort(function (a, b) {
                            return b.renderOrder - a.renderOrder;
                        });

                        this.stacks.opaque = _planeStack;
                    }
                }
            }
            /***
             This function will remove a plane from our scene. This just reset the plane stacks for now.
             Useful if we'd want to change the way our draw stacks work and keep the logic separated from our renderer
               params:
             @plane (Plane object): plane to remove from our scene
             ***/

        }, {
            key: "removePlane",
            value: function removePlane(plane) {
                if (plane.type === "PingPongPlane") {
                    this.stacks.pingPong = this.stacks.pingPong.filter(function (el) {
                        return el.uuid !== plane.uuid;
                    });
                } else if (plane.target) {
                    this.stacks.renderTargets = this.stacks.renderTargets.filter(function (el) {
                        return el.uuid !== plane.uuid;
                    });
                } else {
                    if (plane._transparent) {
                        this.stacks.transparent = this.stacks.transparent.filter(function (el) {
                            return el.uuid !== plane.uuid;
                        });
                    } else {
                        this.stacks.opaque = this.stacks.opaque.filter(function (el) {
                            return el.uuid !== plane.uuid;
                        });
                    }
                }
            }
            /***
             Changing the position of a plane inside the correct plane stack to render it on above or behind the other planes
               params:
             @plane (Plane object): the plane that had its renderOrder property updated
             ***/

        }, {
            key: "setPlaneRenderOrder",
            value: function setPlaneRenderOrder(plane) {
                if (plane.type === "ShaderPass") {
                    this.sortShaderPassStack(plane._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
                } else if (plane.type === "PingPongPlane") {
                    // this does not makes any sense for ping pong planes
                    return;
                }

                if (plane.target) {
                    // sort by index (order of addition) then render order, depending on whether the render target handle depth or not
                    if (plane.target._depth) {
                        this.stacks.renderTargets.sort(function (a, b) {
                            return a.index - b.index;
                        });
                        this.stacks.renderTargets.sort(function (a, b) {
                            return b.renderOrder - a.renderOrder;
                        });
                    } else {
                        this.stacks.renderTargets.sort(function (a, b) {
                            return b.index - a.index;
                        });
                        this.stacks.renderTargets.sort(function (a, b) {
                            return a.renderOrder - b.renderOrder;
                        });
                    } // then sort by render targets order


                    this.stacks.renderTargets.sort(function (a, b) {
                        return a.target.index - b.target.index;
                    });
                } else {
                    var planeStack = plane._transparent ? this.stacks.transparent : this.stacks.opaque; // if the first drawn scene pass does not handle depth, we'll have to sort them in the inverse order

                    var scenePassWithoutDepth = this.stacks.scenePasses.find(function (pass, index) {
                        return pass._isScenePass && !pass._depth && index === 0;
                    });

                    if (!this.renderer.depth || scenePassWithoutDepth) {
                        // inverted sorting
                        // sort by indexes
                        planeStack.sort(function (a, b) {
                            return b.index - a.index;
                        });

                        if (plane._transparent) {
                            // if plane is transparent, sort by their depth position
                            planeStack.sort(function (a, b) {
                                return a.relativeTranslation.z - b.relativeTranslation.z;
                            });
                        } // then sort by render order


                        planeStack.sort(function (a, b) {
                            return a.renderOrder - b.renderOrder;
                        });
                    } else {
                        // regular sorting
                        // sort by indexes
                        planeStack.sort(function (a, b) {
                            return a.index - b.index;
                        });

                        if (plane._transparent) {
                            // if plane is transparent, sort by their depth position
                            planeStack.sort(function (a, b) {
                                return b.relativeTranslation.z - a.relativeTranslation.z;
                            });
                        } // then sort by render order


                        planeStack.sort(function (a, b) {
                            return b.renderOrder - a.renderOrder;
                        });
                    }
                }
            }
            /*** ADDING POST PROCESSING ***/

            /***
             Add a shader pass to the stack
               params:
             @shaderPass (ShaderPass object): shaderPass to add to our scene
             ***/

        }, {
            key: "addShaderPass",
            value: function addShaderPass(shaderPass) {
                if (!shaderPass._isScenePass) {
                    this.stacks.renderPasses.push(shaderPass);
                    this.sortShaderPassStack(this.stacks.renderPasses);
                } else {
                    this.stacks.scenePasses.push(shaderPass);
                    this.sortShaderPassStack(this.stacks.scenePasses);
                }
            }
            /***
             This function will remove a shader pass from our scene. This just reset the shaderPass stacks for now.
             Useful if we'd want to change the way our draw stacks work and keep the logic separated from our renderer
               params:
             @shaderPass (ShaderPass object): shader pass to remove from our scene
             ***/

        }, {
            key: "removeShaderPass",
            value: function removeShaderPass(shaderPass) {
                this.resetShaderPassStacks();
            }
            /***
             Sorts the shader pass stack by index then by renderOrder property
               params:
             @passStack (array): which shader pass stack (scenePasses or renderPasses) to sort
             ***/

        }, {
            key: "sortShaderPassStack",
            value: function sortShaderPassStack(passStack) {
                passStack.sort(function (a, b) {
                    return a.index - b.index;
                });
                passStack.sort(function (a, b) {
                    return a.renderOrder - b.renderOrder;
                });
            }
            /*** DRAWING SCENE ***/

            /***
             Enable the first Shader pass scene pass
             ***/

        }, {
            key: "enableShaderPass",
            value: function enableShaderPass() {
                if (this.stacks.scenePasses.length && this.stacks.renderPasses.length === 0 && this.renderer.planes.length) {
                    this.renderer.state.scenePassIndex = 0;
                    this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target);
                }
            }
            /***
             Draw the render passes
             ***/

        }, {
            key: "drawRenderPasses",
            value: function drawRenderPasses() {
                // if we got one or multiple scene passes after the render passes, bind the first scene pass here
                if (this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length) {
                    this.renderer.state.scenePassIndex = 0;
                    this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target);
                }

                for (var i = 0; i < this.stacks.renderPasses.length; i++) {
                    this.stacks.renderPasses[i]._startDrawing(); // we need to clear our depth buffer to display previously drawn render passes


                    this.renderer.clearDepth();
                }
            }
            /***
             Draw the scene passes
             ***/

        }, {
            key: "drawScenePasses",
            value: function drawScenePasses() {
                // then the scene passes
                for (var i = 0; i < this.stacks.scenePasses.length; i++) {
                    this.stacks.scenePasses[i]._startDrawing();
                }
            }
            /***
             Loop through the special ping pong planes stack and draw its planes
             ***/

        }, {
            key: "drawPingPongStack",
            value: function drawPingPongStack() {
                for (var i = 0; i < this.stacks.pingPong.length; i++) {
                    var plane = this.stacks.pingPong[i]; // be sure the plane exists

                    if (plane) {
                        // draw the plane
                        plane._startDrawing();
                    }
                }
            }
            /***
             Loop through one of our stack (renderTargets, opaque or transparent objects) and draw its planes
             ***/

        }, {
            key: "drawStack",
            value: function drawStack(stackType) {
                for (var i = 0; i < this.stacks[stackType].length; i++) {
                    var plane = this.stacks[stackType][i]; // be sure the plane exists

                    if (plane) {
                        // draw the plane
                        plane._startDrawing();
                    }
                }
            }
            /***
             Draw our scene content
             ***/

        }, {
            key: "draw",
            value: function draw() {
                // always draw our ping pong planes first!
                this.drawPingPongStack(); // enable first frame buffer for shader passes if needed

                this.enableShaderPass(); // our planes that are drawn onto a render target

                this.drawStack("renderTargets"); // then draw the content of our render targets render passes

                this.drawRenderPasses(); // disable blending for the opaque planes

                this.renderer.setBlending(false); // loop on our stacked planes

                this.drawStack("opaque"); // set blending and draw transparents planes only if we have some

                if (this.stacks.transparent.length) {
                    this.renderer.setBlending(true); // draw the transparent planes

                    this.drawStack("transparent");
                } // now draw the render targets scene passes


                this.drawScenePasses();
            }
        }]);

        return Scene;
    }();
    /***
     Here we create a CacheManager class object
     This will store geometries attributes arrays, textures and WebGL programs in arrays
     This helps speed up slow synchronous CPU operations such as WebGL shaders compilations, images decoding, etc.
       returns :
     @this: our CacheManager class object
     ***/


    var CacheManager = /*#__PURE__*/function () {
        function CacheManager() {
            _classCallCheck(this, CacheManager);

            // never clear cached geometries
            this.geometries = [];
            this.clear();
        }
        /***
         Clear WebGL context depending cache arrays (used on init and context restoration)
         ***/


        _createClass(CacheManager, [{
            key: "clear",
            value: function clear() {
                // only cache images textures for now
                this.textures = []; // cached programs

                this.programs = [];
            }
            /*** GEOMETRIES ***/

            /***
             Check if this geometry is already in our cached geometries array
               params:
             @definitionID (integer): the geometry ID
             ***/

        }, {
            key: "getGeometryFromID",
            value: function getGeometryFromID(definitionID) {
                return this.geometries.find(function (element) {
                    return element.id === definitionID;
                });
            }
            /***
             Add a geometry to our cache if not already in it
               params:
             @definitionID  (integer): the geometry ID to add to our cache
             @vertices (array): vertices coordinates array to add to our cache
             @uvs (array): uvs coordinates array to add to our cache
             ***/

        }, {
            key: "addGeometry",
            value: function addGeometry(definitionID, vertices, uvs) {
                this.geometries.push({
                    id: definitionID,
                    vertices: vertices,
                    uvs: uvs
                });
            }
            /*** PROGRAMS ***/

            /***
             Compare two shaders strings to detect whether they are equal or not
               params:
             @firstShader (string): shader code
             @secondShader (string): shader code
               returns:
             @isSameShader (bool): whether both shaders are equal or not
             ***/

        }, {
            key: "isSameShader",
            value: function isSameShader(firstShader, secondShader) {
                return firstShader.localeCompare(secondShader) === 0;
            }
            /***
             Returns a program from our cache if this program's vertex and fragment shaders code are the same as the one provided
               params:
             @vsCode (string): vertex shader code
             @fsCode (string): fragment shader code
               returns:
             @program (Program class object or null): our program if it has been found
             ***/

        }, {
            key: "getProgramFromShaders",
            value: function getProgramFromShaders(vsCode, fsCode) {
                var _this = this;

                return this.programs.find(function (element) {
                    return _this.isSameShader(element.vsCode, vsCode) && _this.isSameShader(element.fsCode, fsCode);
                });
            }
            /***
             Add a program to our cache
               params :
             @program (Program class object) : program to add to our cache
             ***/

        }, {
            key: "addProgram",
            value: function addProgram(program) {
                this.programs.push(program);
            }
            /*** TEXTURES ***/

            /***
             Check if this source is already in our cached textures array
               params :
             @source (HTML element) : html image, video or canvas element (only images for now)
             ***/

        }, {
            key: "getTextureFromSource",
            value: function getTextureFromSource(source) {
                var src = typeof source === "string" ? source : source.src; // return the texture if the source is the same and if it's not the same texture

                return this.textures.find(function (element) {
                    return element.source && element.source.src === src;
                });
            }
            /***
             Add a texture to our cache if not already in it
               params :
             @texture (Texture class object) : texture to add to our cache
             ***/

        }, {
            key: "addTexture",
            value: function addTexture(texture) {
                var cachedTexture = this.getTextureFromSource(texture.source);

                if (!cachedTexture) {
                    this.textures.push(texture);
                }
            }
            /***
             Removes a texture from the cache array
               params :
             @texture (Texture class object) : texture to remove from our cache
             ***/

        }, {
            key: "removeTexture",
            value: function removeTexture(texture) {
                // remove from our textures array
                this.textures = this.textures.filter(function (element) {
                    return element.uuid !== texture.uuid;
                });
            }
        }]);

        return CacheManager;
    }();
    /***
     Here we create a CallbackQueueManager class object
     This allows to store callbacks in a queue array with a timeout of 0 to be executed on next render call
       returns:
     @this: our CallbackQueueManager class object
     ***/


    var CallbackQueueManager = /*#__PURE__*/function () {
        function CallbackQueueManager() {
            _classCallCheck(this, CallbackQueueManager);

            this.clear();
        }
        /***
         Clears our queue array (used on init)
         ***/


        _createClass(CallbackQueueManager, [{
            key: "clear",
            value: function clear() {
                this.queue = [];
            }
            /***
             Adds a callback to our queue list with a timeout of 0
               params:
             @callback (function): the callback to execute on next render call
             @keep (bool): whether to keep calling that callback on each rendering call or not (act as a setInterval). Default to false
               returns:
             @queueItem: the queue item. Allows to keep a track of it and set its keep property to false when needed
             ***/

        }, {
            key: "add",
            value: function add(callback) {
                var _this2 = this;

                var keep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var queueItem = {
                    callback: callback,
                    keep: keep,
                    timeout: null // keep a reference to the timeout so we can safely delete if afterwards

                };
                queueItem.timeout = setTimeout(function () {
                    _this2.queue.push(queueItem);
                }, 0);
                return queueItem;
            }
            /***
             Executes all callbacks in the queue and remove the ones that have their keep property set to false.
             Called at the beginning of each render call
             ***/

        }, {
            key: "execute",
            value: function execute() {
                var _this3 = this;

                // execute queue callbacks list
                this.queue.map(function (entry) {
                    if (entry.callback) {
                        entry.callback();
                    } // clear our timeout


                    clearTimeout(_this3.queue.timeout);
                }); // remove all items that have their keep property set to false

                this.queue = this.queue.filter(function (entry) {
                    return entry.keep;
                });
            }
        }]);

        return CallbackQueueManager;
    }();
    /***
     Here we create our Renderer object
     It will create our WebGL context and handle everything that relates to it
     Will create a container, append a canvas, handle WebGL extensions, context lost/restoration events
     Will create a Scene class object that will keep tracks of all added objects
     Will also handle all global WebGL commands, like clearing scene, binding frame buffers, setting depth, blend func, etc.
     Will use a state object to handle all those commands and keep a track of what is being drawned to avoid redundant WebGL calls.
       params:
     @Curtainsparams see Curtains class object
       @onError (function): called when there has been an error while initiating the WebGL context
     @onSuccess (function): called when the WebGL context has been successfully created
     @onContextLost (function): called when the WebGL context is lost
     @onContextRestored (function): called when the WebGL context is restored
     @onSceneChange (function): called every time an object has been added/removed from the scene
       returns :
     @this: our Renderer
     ***/


    var Renderer = /*#__PURE__*/function () {
        function Renderer(_ref) {
            var alpha = _ref.alpha,
                antialias = _ref.antialias,
                premultipliedAlpha = _ref.premultipliedAlpha,
                depth = _ref.depth,
                failIfMajorPerformanceCaveat = _ref.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer = _ref.preserveDrawingBuffer,
                stencil = _ref.stencil,
                container = _ref.container,
                pixelRatio = _ref.pixelRatio,
                renderingScale = _ref.renderingScale,
                production = _ref.production,
                onError = _ref.onError,
                onSuccess = _ref.onSuccess,
                onContextLost = _ref.onContextLost,
                onContextRestored = _ref.onContextRestored,
                onDisposed = _ref.onDisposed,
                onSceneChange = _ref.onSceneChange;

            _classCallCheck(this, Renderer);

            this.type = "Renderer"; // context attributes

            this.alpha = alpha;
            this.antialias = antialias;
            this.premultipliedAlpha = premultipliedAlpha;
            this.depth = depth;
            this.failIfMajorPerformanceCaveat = failIfMajorPerformanceCaveat;
            this.preserveDrawingBuffer = preserveDrawingBuffer;
            this.stencil = stencil;
            this.container = container;
            this.pixelRatio = pixelRatio;
            this._renderingScale = renderingScale;
            this.production = production; // callbacks

            this.onError = onError;
            this.onSuccess = onSuccess;
            this.onContextLost = onContextLost;
            this.onContextRestored = onContextRestored;
            this.onDisposed = onDisposed; // keep sync between Curtains objects arrays and renderer objects arrays

            this.onSceneChange = onSceneChange; // managing our webgl draw states

            this.initState(); // create the canvas

            this.canvas = document.createElement("canvas"); // set our webgl context

            var glAttributes = {
                alpha: this.alpha,
                premultipliedAlpha: this.premultipliedAlpha,
                antialias: this.antialias,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil
            }; // try webgl2 context first

            this.gl = this.canvas.getContext("webgl2", glAttributes);
            this._isWebGL2 = !!this.gl; // fallback to webgl1

            if (!this.gl) {
                this.gl = this.canvas.getContext("webgl", glAttributes) || this.canvas.getContext("experimental-webgl", glAttributes);
            } // WebGL context could not be created


            if (!this.gl) {
                if (!this.production) throwWarning(this.type + ": WebGL context could not be created");
                this.state.isActive = false;

                if (this.onError) {
                    this.onError();
                }

                return;
            } else if (this.onSuccess) {
                this.onSuccess();
            }

            this.initRenderer();
        }
        /***
         Set/reset our context state object
         ***/


        _createClass(Renderer, [{
            key: "initState",
            value: function initState() {
                this.state = {
                    // if we are currently rendering
                    isActive: true,
                    isContextLost: true,
                    drawingEnabled: true,
                    forceRender: false,
                    // current program ID
                    currentProgramID: null,
                    // current geometry drawn
                    currentGeometryID: null,
                    // whether we should force buffer bindings update
                    forceBufferUpdate: false,
                    // if we're using depth test or not
                    depthTest: null,
                    // blending
                    blending: null,
                    // face culling
                    cullFace: null,
                    // current frame buffer ID
                    frameBufferID: null,
                    // current scene pass ID
                    scenePassIndex: null,
                    // textures
                    activeTexture: null,
                    unpackAlignment: null,
                    flipY: null,
                    premultiplyAlpha: null
                };
            }
            /***
             Add a callback queueing manager (execute functions on the next render call, see CallbackQueueManager class object)
             ***/

        }, {
            key: "initCallbackQueueManager",
            value: function initCallbackQueueManager() {
                this.nextRender = new CallbackQueueManager();
            }
            /***
             Init our renderer
             ***/

        }, {
            key: "initRenderer",
            value: function initRenderer() {
                this.planes = [];
                this.renderTargets = [];
                this.shaderPasses = []; // context is not lost

                this.state.isContextLost = false;
                this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE); // callback queue

                this.initCallbackQueueManager(); // set blend func

                this.setBlendFunc(); // enable depth by default

                this.setDepthFunc();
                this.setDepthTest(true); // texture cache

                this.cache = new CacheManager(); // init our scene

                this.scene = new Scene(this); // get webgl extensions

                this.getExtensions(); // handling context

                this._contextLostHandler = this.contextLost.bind(this);
                this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, false);
                this._contextRestoredHandler = this.contextRestored.bind(this);
                this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, false);
            }
            /***
             Get all available WebGL extensions based on WebGL used version
             Called on init and on context restoration
             ***/

        }, {
            key: "getExtensions",
            value: function getExtensions() {
                this.extensions = [];

                if (this._isWebGL2) {
                    this.extensions['EXT_color_buffer_float'] = this.gl.getExtension('EXT_color_buffer_float');
                    this.extensions['OES_texture_float_linear'] = this.gl.getExtension('OES_texture_float_linear');
                    this.extensions['EXT_texture_filter_anisotropic'] = this.gl.getExtension('EXT_texture_filter_anisotropic');
                    this.extensions['WEBGL_lose_context'] = this.gl.getExtension('WEBGL_lose_context');
                } else {
                    this.extensions['OES_vertex_array_object'] = this.gl.getExtension('OES_vertex_array_object');
                    this.extensions['OES_texture_float'] = this.gl.getExtension('OES_texture_float');
                    this.extensions['OES_texture_float_linear'] = this.gl.getExtension('OES_texture_float_linear');
                    this.extensions['OES_texture_half_float'] = this.gl.getExtension('OES_texture_half_float');
                    this.extensions['OES_texture_half_float_linear'] = this.gl.getExtension('OES_texture_half_float_linear');
                    this.extensions['EXT_texture_filter_anisotropic'] = this.gl.getExtension('EXT_texture_filter_anisotropic');
                    this.extensions['OES_element_index_uint'] = this.gl.getExtension('OES_element_index_uint');
                    this.extensions['OES_standard_derivatives'] = this.gl.getExtension('OES_standard_derivatives');
                    this.extensions['EXT_sRGB'] = this.gl.getExtension('EXT_sRGB');
                    this.extensions['WEBGL_depth_texture'] = this.gl.getExtension('WEBGL_depth_texture');
                    this.extensions['WEBGL_draw_buffers'] = this.gl.getExtension('WEBGL_draw_buffers');
                    this.extensions['WEBGL_lose_context'] = this.gl.getExtension('WEBGL_lose_context');
                }
            }
            /*** HANDLING CONTEXT LOST/RESTORE ***/

            /***
             Called when the WebGL context is lost
             ***/

        }, {
            key: "contextLost",
            value: function contextLost(event) {
                var _this4 = this;

                this.state.isContextLost = true; // do not try to restore the context if we're disposing everything!

                if (!this.state.isActive) return;
                event.preventDefault();
                this.nextRender.add(function () {
                    return _this4.onContextLost && _this4.onContextLost();
                });
            }
            /***
             Call this method to restore your context
             ***/

        }, {
            key: "restoreContext",
            value: function restoreContext() {
                // do not try to restore the context if we're disposing everything!
                if (!this.state.isActive) return;
                this.initState();

                if (this.gl && this.extensions['WEBGL_lose_context']) {
                    this.extensions['WEBGL_lose_context'].restoreContext();
                } else {
                    if (!this.gl && !this.production) {
                        throwWarning(this.type + ": Could not restore the context because the context is not defined");
                    } else if (!this.extensions['WEBGL_lose_context'] && !this.production) {
                        throwWarning(this.type + ": Could not restore the context because the restore context extension is not defined");
                    }

                    if (this.onError) {
                        this.onError();
                    }
                }
            }
            /***
             Check that all objects and textures have been restored
               returns:
             @isRestored (bool): whether everything has been restored or not
             ***/

        }, {
            key: "isContextexFullyRestored",
            value: function isContextexFullyRestored() {
                var isRestored = true;

                for (var i = 0; i < this.renderTargets.length; i++) {
                    if (!this.renderTargets[i].textures[0]._canDraw) {
                        isRestored = false;
                    }

                    break;
                }

                if (isRestored) {
                    for (var _i = 0; _i < this.planes.length; _i++) {
                        if (!this.planes[_i]._canDraw) {
                            isRestored = false;
                            break;
                        } else {
                            for (var j = 0; j < this.planes[_i].textures.length; j++) {
                                if (!this.planes[_i].textures[j]._canDraw) {
                                    isRestored = false;
                                    break;
                                }
                            }
                        }
                    }
                }

                if (isRestored) {
                    for (var _i2 = 0; _i2 < this.shaderPasses.length; _i2++) {
                        if (!this.shaderPasses[_i2]._canDraw) {
                            isRestored = false;
                            break;
                        } else {
                            for (var _j = 0; _j < this.shaderPasses[_i2].textures.length; _j++) {
                                if (!this.shaderPasses[_i2].textures[_j]._canDraw) {
                                    isRestored = false;
                                    break;
                                }
                            }
                        }
                    }
                }

                return isRestored;
            }
            /***
             Called when the WebGL context is restored
             ***/

        }, {
            key: "contextRestored",
            value: function contextRestored() {
                var _this5 = this;

                this.getExtensions(); // set blend func

                this.setBlendFunc(); // enable depth by default

                this.setDepthFunc();
                this.setDepthTest(true); // clear texture and programs cache

                this.cache.clear(); // reset draw stacks

                this.scene.initStacks(); // we need to reset everything : planes programs, shaders, buffers and textures !

                for (var i = 0; i < this.renderTargets.length; i++) {
                    this.renderTargets[i]._restoreContext();
                }

                for (var _i3 = 0; _i3 < this.planes.length; _i3++) {
                    this.planes[_i3]._restoreContext();
                } // same goes for shader passes


                for (var _i4 = 0; _i4 < this.shaderPasses.length; _i4++) {
                    this.shaderPasses[_i4]._restoreContext();
                } // callback if everything is restored


                var isRestoredQueue = this.nextRender.add(function () {
                    var isRestored = _this5.isContextexFullyRestored();

                    if (isRestored) {
                        isRestoredQueue.keep = false; // start drawing again

                        _this5.state.isContextLost = false;

                        if (_this5.onContextRestored) {
                            _this5.onContextRestored();
                        } // we've changed the objects, keep Curtains class in sync with our renderer


                        _this5.onSceneChange(); // force next frame render whatever our drawing flag value


                        _this5.needRender();
                    }
                }, true);
            }
            /*** SIZING ***/

            /***
             Updates pixelRatio property
             ***/

        }, {
            key: "setPixelRatio",
            value: function setPixelRatio(pixelRatio) {
                this.pixelRatio = pixelRatio;
            }
            /***
             Set/reset container sizes and WebGL viewport sizes
             ***/

        }, {
            key: "setSize",
            value: function setSize() {
                if (!this.gl) return; // get our container bounding client rectangle

                var containerBoundingRect = this.container.getBoundingClientRect(); // use the bounding rect values

                this._boundingRect = {
                    width: containerBoundingRect.width * this.pixelRatio,
                    height: containerBoundingRect.height * this.pixelRatio,
                    top: containerBoundingRect.top * this.pixelRatio,
                    left: containerBoundingRect.left * this.pixelRatio
                }; // iOS Safari > 8+ has a known bug due to navigation bar appearing/disappearing
                // this causes wrong bounding client rect calculations, especially negative top value when it shouldn't
                // to fix this we'll use a dirty but useful workaround
                // first we check if we're on iOS Safari

                var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
                var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

                if (isSafari && iOS) {
                    // if we are on iOS Safari we'll need a custom function to retrieve our container absolute top position
                    var getTopOffset = function getTopOffset(el) {
                        var topOffset = 0;

                        while (el && !isNaN(el.offsetTop)) {
                            topOffset += el.offsetTop - el.scrollTop;
                            el = el.offsetParent;
                        }

                        return topOffset;
                    }; // use it to update our top value


                    this._boundingRect.top = getTopOffset(this.container) * this.pixelRatio;
                }

                this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px";
                this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px";
                this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale);
                this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale);
                this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            }
            /***
             Resize all our elements: planes, shader passes and render targets
             Their textures will be resized as well
             ***/

        }, {
            key: "resize",
            value: function resize() {
                // resize the planes only if they are fully initiated
                for (var i = 0; i < this.planes.length; i++) {
                    if (this.planes[i]._canDraw) {
                        this.planes[i].resize();
                    }
                } // resize the shader passes only if they are fully initiated


                for (var _i5 = 0; _i5 < this.shaderPasses.length; _i5++) {
                    if (this.shaderPasses[_i5]._canDraw) {
                        this.shaderPasses[_i5].resize();
                    }
                } // resize the render targets


                for (var _i6 = 0; _i6 < this.renderTargets.length; _i6++) {
                    this.renderTargets[_i6].resize();
                } // be sure we'll update the scene even if drawing is disabled


                this.needRender();
            }
            /*** CLEAR SCENE ***/

            /***
             Clear our WebGL scene colors and depth
             ***/

        }, {
            key: "clear",
            value: function clear() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            }
            /***
             Clear our WebGL scene depth
             ***/

        }, {
            key: "clearDepth",
            value: function clearDepth() {
                this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
            }
            /***
             Clear our WebGL scene colors and depth
             ***/

        }, {
            key: "clearColor",
            value: function clearColor() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            }
            /*** FRAME BUFFER OBJECTS ***/

            /***
             Called to bind or unbind a FBO
               params:
             @frameBuffer (frameBuffer): if frameBuffer is not null, bind it, unbind it otherwise
             @cancelClear (bool / undefined): if we should cancel clearing the frame buffer (typically on init & resize)
             ***/

        }, {
            key: "bindFrameBuffer",
            value: function bindFrameBuffer(frameBuffer, cancelClear) {
                var bufferId = null;

                if (frameBuffer) {
                    bufferId = frameBuffer.index; // new frame buffer, bind it

                    if (bufferId !== this.state.frameBufferID) {
                        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, frameBuffer._frameBuffer);
                        this.gl.viewport(0, 0, frameBuffer._size.width, frameBuffer._size.height); // if we should clear the buffer content

                        if (frameBuffer._shouldClear && !cancelClear) {
                            this.clear();
                        }
                    }
                } else if (this.state.frameBufferID !== null) {
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
                    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                }

                this.state.frameBufferID = bufferId;
            }
            /*** DEPTH ***/

            /***
             Called to set whether the renderer will handle depth test or not
             Depth test is enabled by default
               params:
             @setDepth (boolean): if we should enable or disable the depth test
             ***/

        }, {
            key: "setDepthTest",
            value: function setDepthTest(depthTest) {
                if (depthTest && !this.state.depthTest) {
                    this.state.depthTest = depthTest; // enable depth test

                    this.gl.enable(this.gl.DEPTH_TEST);
                } else if (!depthTest && this.state.depthTest) {
                    this.state.depthTest = depthTest; // disable depth test

                    this.gl.disable(this.gl.DEPTH_TEST);
                }
            }
            /***
             Called to set the depth buffer behavior
             Only available option is gl.LEQUAL at the moment
             (see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc)
             ***/

        }, {
            key: "setDepthFunc",
            value: function setDepthFunc() {
                this.gl.depthFunc(this.gl.LEQUAL);
            }
            /*** BLENDING ***/

            /***
             Whether we should enable or disable the blending state
             Used to draw transparent planes
               params:
             @enableBlending (boolean): if we should enable or disable the blending (default to false)
             ***/

        }, {
            key: "setBlending",
            value: function setBlending() {
                var enableBlending = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (enableBlending && !this.state.blending) {
                    this.state.blending = enableBlending; // enable blending

                    this.gl.enable(this.gl.BLEND);
                } else if (!enableBlending && this.state.blending) {
                    this.state.blending = enableBlending; // disable blending

                    this.gl.disable(this.gl.BLEND);
                }
            }
            /***
             Called to set the blending function (transparency)
             ***/

        }, {
            key: "setBlendFunc",
            value: function setBlendFunc() {
                // allows transparency
                // based on how three.js solves this
                this.gl.enable(this.gl.BLEND);

                if (this.premultipliedAlpha) {
                    this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
                } else {
                    this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
                }
            }
            /*** FACE CULLING ***/

            /***
             Called to set whether we should cull an object face or not
               params:
             @cullFace (boolean): what face we should cull
             ***/

        }, {
            key: "setFaceCulling",
            value: function setFaceCulling(cullFace) {
                if (this.state.cullFace !== cullFace) {
                    this.state.cullFace = cullFace;

                    if (cullFace === "none") {
                        this.gl.disable(this.gl.CULL_FACE);
                    } else {
                        // default to back face culling
                        var faceCulling = cullFace === "front" ? this.gl.FRONT : this.gl.BACK;
                        this.gl.enable(this.gl.CULL_FACE);
                        this.gl.cullFace(faceCulling);
                    }
                }
            }
            /***
             Tell WebGL to use the specified program if it's not already in use
               params:
             @program (object): a program object
             ***/

        }, {
            key: "useProgram",
            value: function useProgram(program) {
                if (this.state.currentProgramID === null || this.state.currentProgramID !== program.id) {
                    this.gl.useProgram(program.program);
                    this.state.currentProgramID = program.id;
                }
            }
            /*** PLANES ***/

            /***
             Removes a Plane element (that has already been disposed) from the scene and the planes array
               params:
             @plane (Plane object): the plane to remove
             ***/

        }, {
            key: "removePlane",
            value: function removePlane(plane) {
                if (!this.gl) return; // remove from our planes array

                this.planes = this.planes.filter(function (element) {
                    return element.uuid !== plane.uuid;
                }); // remove from scene stacks

                this.scene.removePlane(plane);
                plane = null; // clear the buffer to clean scene

                if (this.gl) this.clear(); // we've removed an object, keep Curtains class in sync with our renderer

                this.onSceneChange();
            }
            /*** POST PROCESSING ***/

            /***
             Completely remove a RenderTarget element
               params:
             @renderTarget (RenderTarget object): the render target to remove
             ***/

        }, {
            key: "removeRenderTarget",
            value: function removeRenderTarget(renderTarget) {
                if (!this.gl) return;
                var hasPlane = this.planes.find(function (plane) {
                    return plane.type !== "PingPongPlane" && plane.target && plane.target.uuid === renderTarget.uuid;
                }); // loop through all planes that might use that render target and reset it

                for (var i = 0; i < this.planes.length; i++) {
                    if (this.planes[i].target && this.planes[i].target.uuid === renderTarget.uuid) {
                        this.planes[i].target = null;
                    }
                }

                this.renderTargets = this.renderTargets.filter(function (element) {
                    return element.uuid !== renderTarget.uuid;
                }); // update render target indexes

                for (var _i7 = 0; _i7 < this.renderTargets.length; _i7++) {
                    this.renderTargets[_i7].index = _i7;
                }

                renderTarget = null; // clear the buffer to clean scene

                if (this.gl) this.clear(); // we had at least a plane that was rendered in this render targets stack
                // re init stacks

                if (hasPlane) {
                    this.scene.resetPlaneStacks();
                } // we've removed an object, keep Curtains class in sync with our renderer


                this.onSceneChange();
            }
            /*** SHADER PASSES ***/

            /***
             Removes a ShaderPass element (that has already been disposed) from the scene and the shaderPasses array
               params:
             @shaderPass (ShaderPass object): the shader pass to remove
             ***/

        }, {
            key: "removeShaderPass",
            value: function removeShaderPass(shaderPass) {
                if (!this.gl) return; // remove from shaderPasses our array

                this.shaderPasses = this.shaderPasses.filter(function (element) {
                    return element.uuid !== shaderPass.uuid;
                }); // remove from scene stacks

                this.scene.removeShaderPass(shaderPass);
                shaderPass = null; // clear the buffer to clean scene

                if (this.gl) this.clear(); // we've removed an object, keep Curtains class in sync with our renderer

                this.onSceneChange();
            }
            /***
             Enables the render loop
             ***/

        }, {
            key: "enableDrawing",
            value: function enableDrawing() {
                this.state.drawingEnabled = true;
            }
            /***
             Disables the render loop
             ***/

        }, {
            key: "disableDrawing",
            value: function disableDrawing() {
                this.state.drawingEnabled = false;
            }
            /***
             Forces the rendering of the next frame, even if disabled
             ***/

        }, {
            key: "needRender",
            value: function needRender() {
                this.state.forceRender = true;
            }
            /***
             Called at each draw call to render our scene and its content
             Also execute our nextRender callback queue
             ***/

        }, {
            key: "render",
            value: function render() {
                if (!this.gl) return; // clear scene first

                this.clear(); // reset attributes buffer state

                this.state.currentGeometryID = null; // draw our scene content

                this.scene.draw();
            }
            /*** DISPOSING ***/

            /***
             Delete all cached programs
             ***/

        }, {
            key: "deletePrograms",
            value: function deletePrograms() {
                // delete all programs from manager
                for (var i = 0; i < this.cache.programs.length; i++) {
                    var program = this.cache.programs[i];
                    this.gl.deleteProgram(program.program);
                }
            }
            /***
             Dispose our WebGL context and all its objects
             ***/

        }, {
            key: "dispose",
            value: function dispose() {
                var _this6 = this;

                if (!this.gl) return;
                this.state.isActive = false; // be sure to delete all planes

                while (this.planes.length > 0) {
                    this.removePlane(this.planes[0]);
                } // we need to delete the shader passes also


                while (this.shaderPasses.length > 0) {
                    this.removeShaderPass(this.shaderPasses[0]);
                } // finally we need to delete the render targets


                while (this.renderTargets.length > 0) {
                    this.removeRenderTarget(this.renderTargets[0]);
                } // wait for all planes to be deleted before stopping everything


                var disposeQueue = this.nextRender.add(function () {
                    if (_this6.planes.length === 0 && _this6.shaderPasses.length === 0 && _this6.renderTargets.length === 0) {
                        // clear from callback queue
                        disposeQueue.keep = false;

                        _this6.deletePrograms(); // clear the buffer to clean scene


                        _this6.clear();

                        _this6.canvas.removeEventListener("webgllost", _this6._contextLostHandler, false);

                        _this6.canvas.removeEventListener("webglrestored", _this6._contextRestoredHandler, false); // lose context


                        if (_this6.gl && _this6.extensions['WEBGL_lose_context']) {
                            _this6.extensions['WEBGL_lose_context'].loseContext();
                        } // clear canvas state


                        _this6.canvas.width = _this6.canvas.width;
                        _this6.gl = null; // remove canvas from DOM

                        _this6.container.removeChild(_this6.canvas);

                        _this6.container = null;
                        _this6.canvas = null;
                        _this6.onDisposed && _this6.onDisposed();
                    }
                }, true);
            }
        }]);

        return Renderer;
    }();
    /***
     Here we create a ScrollManager class object
     This keeps track of our scroll position, scroll deltas and triggers an onScroll callback
     Could either listen to the native scroll event or be hooked to any scroll (natural or virtual) scroll event
       params:
     @xOffset (float): scroll along X axis
     @yOffset (float): scroll along Y axis
     @lastXDelta (float): last scroll delta along X axis
     @lastYDelta (float): last scroll delta along Y axis
       @shouldWatch (bool): if the scroll manager should listen to the scroll event or not. Default to true.
       @onScroll (function): callback to execute each time the scroll values changed
       returns:
     @this: our ScrollManager class object
     ***/


    var ScrollManager = /*#__PURE__*/function () {
        function ScrollManager() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$xOffset = _ref2.xOffset,
                xOffset = _ref2$xOffset === void 0 ? 0 : _ref2$xOffset,
                _ref2$yOffset = _ref2.yOffset,
                yOffset = _ref2$yOffset === void 0 ? 0 : _ref2$yOffset,
                _ref2$lastXDelta = _ref2.lastXDelta,
                lastXDelta = _ref2$lastXDelta === void 0 ? 0 : _ref2$lastXDelta,
                _ref2$lastYDelta = _ref2.lastYDelta,
                lastYDelta = _ref2$lastYDelta === void 0 ? 0 : _ref2$lastYDelta,
                _ref2$shouldWatch = _ref2.shouldWatch,
                shouldWatch = _ref2$shouldWatch === void 0 ? true : _ref2$shouldWatch,
                _ref2$onScroll = _ref2.onScroll,
                onScroll = _ref2$onScroll === void 0 ? function () { } : _ref2$onScroll;

            _classCallCheck(this, ScrollManager);

            this.xOffset = xOffset;
            this.yOffset = yOffset;
            this.lastXDelta = lastXDelta;
            this.lastYDelta = lastYDelta;
            this.shouldWatch = shouldWatch;
            this.onScroll = onScroll; // keep a ref to our scroll event

            this.handler = this.scroll.bind(this, true);

            if (this.shouldWatch) {
                window.addEventListener("scroll", this.handler, {
                    passive: true
                });
            }
        }
        /***
         Called by the scroll event listener
         ***/


        _createClass(ScrollManager, [{
            key: "scroll",
            value: function scroll() {
                this.updateScrollValues(window.pageXOffset, window.pageYOffset);
            }
            /***
             Updates the scroll manager X and Y scroll values as well as last X and Y deltas
             Internally called by the scroll handler
             Could be called externally as well if the user wants to handle the scroll by himself
               params:
             @x (float): scroll value along X axis
             @y (float): scroll value along Y axis
             ***/

        }, {
            key: "updateScrollValues",
            value: function updateScrollValues(x, y) {
                // get our scroll delta values
                var lastScrollXValue = this.xOffset;
                this.xOffset = x;
                this.lastXDelta = lastScrollXValue - this.xOffset;
                var lastScrollYValue = this.yOffset;
                this.yOffset = y;
                this.lastYDelta = lastScrollYValue - this.yOffset;

                if (this.onScroll) {
                    this.onScroll(this.lastXDelta, this.lastYDelta);
                }
            }
            /***
             Dispose our scroll manager (just remove our event listner if it had been added previously)
             ***/

        }, {
            key: "dispose",
            value: function dispose() {
                if (this.shouldWatch) {
                    window.removeEventListener("scroll", this.handler, {
                        passive: true
                    });
                }
            }
        }]);

        return ScrollManager;
    }();

    var version = "8.1.3";
    /***
     Here we create our Curtains object
         params:
     @container (HTML element or string, optional): the container HTML element or ID that will hold our canvas. Could be set later if not passed as parameter here
       (WebGL context parameters)
     @alpha (bool, optional): whether the WebGL context should handle transparency. Default to true.
     @premultipliedAlpha (bool, optional): whether the WebGL context should handle premultiplied alpha. Default to false.
     @antialias (bool, optional): whether the WebGL context should use the default antialiasing. When using render targets, WebGL disables antialiasing, so you can safely set this to false to improve the performance. Default to true.
     @depth (bool, optional): whether the WebGL context should handle depth. Default to true.
     @failIfMajorPerformanceCaveat (bool, optional): whether the WebGL context creation should fail in case of major performance caveat. Default to true.
     @preserveDrawingBuffer (bool, optional): whether the WebGL context should preserve the drawing buffer. Default to false.
     @stencil (bool, optional): whether the WebGL context should handle stencil. Default to false.
       @autoResize (bool, optional): Whether the library should listen to the window resize event and actually resize the scene. Set it to false if you want to handle this by yourself using the resize() method. Default to true.
     @autoRender (bool, optional): Whether the library should create a request animation frame loop to render the scene. Set it to false if you want to handle this by yourself using the render() method. Default to true.
     @watchScroll (bool, optional): Whether the library should listen to the window scroll event. Set it to false if you want to handle this by yourself. Default to true.
       @pixelRatio (float, optional): Defines the pixel ratio value. Use it to limit it on init to increase performance. Default to window.devicePixelRatio.
     @renderingScale (float, optional): Use it to downscale your rendering canvas. May improve performance but will decrease quality. Default to 1 (minimum: 0.25, maximum: 1).
       @production (bool, optional): Whether the library should throw useful console warnings and errors and check shaders and programs compilation status. Default to false.
       returns :
     @this: our Renderer
     ***/

    var Curtains = /*#__PURE__*/function () {
        function Curtains() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                container = _ref3.container,
                _ref3$alpha = _ref3.alpha,
                alpha = _ref3$alpha === void 0 ? true : _ref3$alpha,
                _ref3$premultipliedAl = _ref3.premultipliedAlpha,
                premultipliedAlpha = _ref3$premultipliedAl === void 0 ? false : _ref3$premultipliedAl,
                _ref3$antialias = _ref3.antialias,
                antialias = _ref3$antialias === void 0 ? true : _ref3$antialias,
                _ref3$depth = _ref3.depth,
                depth = _ref3$depth === void 0 ? true : _ref3$depth,
                _ref3$failIfMajorPerf = _ref3.failIfMajorPerformanceCaveat,
                failIfMajorPerformanceCaveat = _ref3$failIfMajorPerf === void 0 ? true : _ref3$failIfMajorPerf,
                _ref3$preserveDrawing = _ref3.preserveDrawingBuffer,
                preserveDrawingBuffer = _ref3$preserveDrawing === void 0 ? false : _ref3$preserveDrawing,
                _ref3$stencil = _ref3.stencil,
                stencil = _ref3$stencil === void 0 ? false : _ref3$stencil,
                _ref3$autoResize = _ref3.autoResize,
                autoResize = _ref3$autoResize === void 0 ? true : _ref3$autoResize,
                _ref3$autoRender = _ref3.autoRender,
                autoRender = _ref3$autoRender === void 0 ? true : _ref3$autoRender,
                _ref3$watchScroll = _ref3.watchScroll,
                watchScroll = _ref3$watchScroll === void 0 ? true : _ref3$watchScroll,
                _ref3$pixelRatio = _ref3.pixelRatio,
                pixelRatio = _ref3$pixelRatio === void 0 ? window.devicePixelRatio || 1 : _ref3$pixelRatio,
                _ref3$renderingScale = _ref3.renderingScale,
                renderingScale = _ref3$renderingScale === void 0 ? 1 : _ref3$renderingScale,
                _ref3$production = _ref3.production,
                production = _ref3$production === void 0 ? false : _ref3$production;

            _classCallCheck(this, Curtains);

            this.type = "Curtains"; // if we should use auto resize (default to true)

            this._autoResize = autoResize; // if we should use auto render (default to true)

            this._autoRender = autoRender; // if we should watch the scroll (default to true)

            this._watchScroll = watchScroll; // pixel ratio and rendering scale

            this.pixelRatio = pixelRatio; // rendering scale

            renderingScale = isNaN(renderingScale) ? 1 : parseFloat(renderingScale);
            this._renderingScale = Math.max(0.25, Math.min(1, renderingScale)); // webgl context parameters

            this.premultipliedAlpha = premultipliedAlpha;
            this.alpha = alpha;
            this.antialias = antialias;
            this.depth = depth;
            this.failIfMajorPerformanceCaveat = failIfMajorPerformanceCaveat;
            this.preserveDrawingBuffer = preserveDrawingBuffer;
            this.stencil = stencil;
            this.production = production;
            this.errors = false; // if a container has been provided, proceed to init

            if (container) {
                this.setContainer(container);
            } else if (!this.production) {
                throwWarning(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context");
            }
        }
        /***
         Set up our Curtains container and start initializing everything
         Called on Curtains instancing if a params container has been provided, could be call afterwards else
         Useful with JS frameworks to init our Curtains class globally and then set the container in a canvas component afterwards to fully instantiate everything
           params:
         @container (HTML element or string): the container HTML element or ID that will hold our canvas
         ***/


        _createClass(Curtains, [{
            key: "setContainer",
            value: function setContainer(container) {
                if (!container) {
                    var _container = document.createElement("div");

                    _container.setAttribute("id", "curtains-canvas");

                    document.body.appendChild(_container);
                    this.container = _container;
                    if (!this.production) throwWarning('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead');
                } else {
                    if (typeof container === "string") {
                        container = document.getElementById(container);

                        if (!container) {
                            var _container2 = document.createElement("div");

                            _container2.setAttribute("id", "curtains-canvas");

                            document.body.appendChild(_container2);
                            this.container = _container2;
                            if (!this.production) throwWarning('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead');
                        } else {
                            this.container = container;
                        }
                    } else if (container instanceof Element) {
                        this.container = container;
                    }
                }

                this._initCurtains();
            }
            /***
             Initialize everything that the class will need: WebGL renderer, scroll manager, sizes, listeners
             Then starts our animation frame loop if needed
             ***/

        }, {
            key: "_initCurtains",
            value: function _initCurtains() {
                this.planes = [];
                this.renderTargets = [];
                this.shaderPasses = []; // init webgl context

                this._initRenderer();

                if (!this.gl) return; // scroll

                this._initScroll(); // sizes


                this._setSize(); // event listeners


                this._addListeners(); // we are ready to go


                this.container.appendChild(this.canvas); // watermark

                console.log("curtains.js - v" + version); // start rendering

                this._animationFrameID = null;

                if (this._autoRender) {
                    this._animate();
                }
            }
            /*** WEBGL CONTEXT ***/

            /***
             Initialize the Renderer class object
             ***/

        }, {
            key: "_initRenderer",
            value: function _initRenderer() {
                var _this7 = this;

                this.renderer = new Renderer({
                    alpha: this.alpha,
                    antialias: this.antialias,
                    premultipliedAlpha: this.premultipliedAlpha,
                    depth: this.depth,
                    failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                    preserveDrawingBuffer: this.preserveDrawingBuffer,
                    stencil: this.stencil,
                    container: this.container,
                    pixelRatio: this.pixelRatio,
                    renderingScale: this._renderingScale,
                    production: this.production,
                    onError: function onError() {
                        return _this7._onRendererError();
                    },
                    onSuccess: function onSuccess() {
                        return _this7._onRendererSuccess();
                    },
                    onContextLost: function onContextLost() {
                        return _this7._onRendererContextLost();
                    },
                    onContextRestored: function onContextRestored() {
                        return _this7._onRendererContextRestored();
                    },
                    onDisposed: function onDisposed() {
                        return _this7._onRendererDisposed();
                    },
                    // keep sync between renderer planes, shader passes and render targets arrays and the Curtains ones
                    onSceneChange: function onSceneChange() {
                        return _this7._keepSync();
                    }
                });
                this.gl = this.renderer.gl;
                this.canvas = this.renderer.canvas;
            }
            /***
             Force our renderer to restore the WebGL context
             ***/

        }, {
            key: "restoreContext",
            value: function restoreContext() {
                this.renderer.restoreContext();
            }
            /***
             This just handles our drawing animation frame
             ***/

        }, {
            key: "_animate",
            value: function _animate() {
                this.render();
                this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this));
            }
            /*** RENDERING ***/

            /***
             Enables rendering
             ***/

        }, {
            key: "enableDrawing",
            value: function enableDrawing() {
                this.renderer.enableDrawing();
            }
            /***
             Disables rendering
             ***/

        }, {
            key: "disableDrawing",
            value: function disableDrawing() {
                this.renderer.disableDrawing();
            }
            /***
             Forces the rendering of the next frame, even if disabled
             ***/

        }, {
            key: "needRender",
            value: function needRender() {
                this.renderer.needRender();
            }
            /***
             Executes a callback on next frame
               params:
             @callback (function): callback to execute on next frame
             @keep (bool): whether to keep calling that callback on each rendering call or not (act as a setInterval). Default to false
               returns:
             @queueItem: the queue item. Allows to keep a track of it and set its keep property to false when needed
             ***/

        }, {
            key: "nextRender",
            value: function nextRender(callback) {
                var keep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                return this.renderer.nextRender.add(callback, keep);
            }
            /***
             Clear our WebGL renderer colors and depth buffers
             ***/

        }, {
            key: "clear",
            value: function clear() {
                this.renderer && this.renderer.clear();
            }
            /***
             Clear our WebGL renderer depth buffer
             ***/

        }, {
            key: "clearDepth",
            value: function clearDepth() {
                this.renderer && this.renderer.clearDepth();
            }
            /***
             Clear our WebGL renderer color buffer
             ***/

        }, {
            key: "clearColor",
            value: function clearColor() {
                this.renderer && this.renderer.clearColor();
            }
            /***
             Check whether the created context is WebGL2
               return:
             @isWebGL2 (bool): whether the created WebGL context is 2.0 or not
             ***/

        }, {
            key: "isWebGL2",
            value: function isWebGL2() {
                return this.gl ? this.renderer._isWebGL2 : false;
            }
            /***
             Tells our renderer to render the scene if the drawing is enabled
             ***/

        }, {
            key: "render",
            value: function render() {
                // always execute callback queue
                this.renderer.nextRender.execute(); // If forceRender is true, force rendering this frame even if drawing is not enabled.
                // If not, only render if enabled.

                if (!this.renderer.state.drawingEnabled && !this.renderer.state.forceRender) {
                    return;
                } // reset forceRender


                if (this.renderer.state.forceRender) {
                    this.renderer.state.forceRender = false;
                } // Curtains onRender callback


                if (this._onRenderCallback) {
                    this._onRenderCallback();
                }

                this.renderer.render();
            }
            /*** LISTENERS ***/

            /***
             Adds our resize event listener if needed
             ***/

        }, {
            key: "_addListeners",
            value: function _addListeners() {
                // handling window resize event
                this._resizeHandler = null;

                if (this._autoResize) {
                    this._resizeHandler = this.resize.bind(this, true);
                    window.addEventListener("resize", this._resizeHandler, false);
                }
            }
            /*** SIZING ***/

            /***
             Set the pixel ratio property and update everything by calling the resize() method
             ***/

        }, {
            key: "setPixelRatio",
            value: function setPixelRatio(pixelRatio, triggerCallback) {
                this.pixelRatio = parseFloat(Math.max(pixelRatio, 1)) || 1;
                this.renderer.setPixelRatio(pixelRatio); // apply new pixel ratio to all our elements but don't trigger onAfterResize callback

                this.resize(triggerCallback);
            }
            /***
             Set our renderer container and canvas sizes and update the scroll values
             ***/

        }, {
            key: "_setSize",
            value: function _setSize() {
                this.renderer.setSize(); // update scroll values ass well

                if (this._scrollManager.shouldWatch) {
                    this._scrollManager.xOffset = window.pageXOffset;
                    this._scrollManager.yOffset = window.pageYOffset;
                }
            }
            /***
             Useful to get our container bounding rectangle without triggering a reflow/layout
               returns :
             @boundingRectangle (object): an object containing our container bounding rectangle (width, height, top and left properties)
             ***/

        }, {
            key: "getBoundingRect",
            value: function getBoundingRect() {
                return this.renderer._boundingRect;
            }
            /***
             Resize our container and the renderer
               params:
             @triggerCallback (bool): Whether we should trigger onAfterResize callback
             ***/

        }, {
            key: "resize",
            value: function resize(triggerCallback) {
                var _this8 = this;

                if (!this.gl) return;

                this._setSize();

                this.renderer.resize();
                this.nextRender(function () {
                    if (_this8._onAfterResizeCallback && triggerCallback) {
                        _this8._onAfterResizeCallback();
                    }
                });
            }
            /*** SCROLL ***/

            /***
             Init our ScrollManager class object
             ***/

        }, {
            key: "_initScroll",
            value: function _initScroll() {
                var _this9 = this;

                this._scrollManager = new ScrollManager({
                    // init values
                    xOffset: window.pageXOffset,
                    yOffset: window.pageYOffset,
                    lastXDelta: 0,
                    lastYDelta: 0,
                    shouldWatch: this._watchScroll,
                    onScroll: function onScroll(lastXDelta, lastYDelta) {
                        return _this9._updateScroll(lastXDelta, lastYDelta);
                    }
                });
            }
            /***
             Handles the different values associated with a scroll event (scroll and delta values)
             If no plane watch the scroll then those values won't be retrieved to avoid unnecessary reflow calls
             If at least a plane is watching, update all watching planes positions based on the scroll values
             And force render for at least one frame to actually update the scene
             ***/

        }, {
            key: "_updateScroll",
            value: function _updateScroll(lastXDelta, lastYDelta) {
                for (var i = 0; i < this.planes.length; i++) {
                    // if our plane is watching the scroll, update its position
                    if (this.planes[i].watchScroll) {
                        this.planes[i].updateScrollPosition(lastXDelta, lastYDelta);
                    }
                } // be sure we'll update the scene even if drawing is disabled


                this.renderer.needRender();
                this._onScrollCallback && this._onScrollCallback();
            }
            /***
             Updates the scroll manager X and Y scroll values as well as last X and Y deltas
             Internally called by the scroll handler if at least one plane is watching the scroll
             Could be called externally as well if the user wants to handle the scroll by himself
               params:
             @x (float): scroll value along X axis
             @y (float): scroll value along Y axis
             ***/

        }, {
            key: "updateScrollValues",
            value: function updateScrollValues(x, y) {
                this._scrollManager.updateScrollValues(x, y);
            }
            /***
             Returns last delta scroll values
               returns:
             @delta (object): an object containing X and Y last delta values
             ***/

        }, {
            key: "getScrollDeltas",
            value: function getScrollDeltas() {
                return {
                    x: this._scrollManager.lastXDelta,
                    y: this._scrollManager.lastYDelta
                };
            }
            /***
             Returns last window scroll values
               returns:
             @scrollValues (object): an object containing X and Y last scroll values
             ***/

        }, {
            key: "getScrollValues",
            value: function getScrollValues() {
                return {
                    x: this._scrollManager.xOffset,
                    y: this._scrollManager.yOffset
                };
            }
            /*** ADDING / REMOVING OBJECTS TO THE RENDERER ***/

            /***
             Always keep sync between renderer and Curtains scene objects when adding/removing objects
             ***/

        }, {
            key: "_keepSync",
            value: function _keepSync() {
                this.planes = this.renderer.planes;
                this.shaderPasses = this.renderer.shaderPasses;
                this.renderTargets = this.renderer.renderTargets;
            }
            /*** UTILS ***/

            /***
             Linear interpolation helper defined in utils
             ***/

        }, {
            key: "lerp",
            value: function lerp(start, end, amount) {
                return _lerp(start, end, amount);
            }
            /*** EVENTS ***/

            /***
             This is called each time our container has been resized
               params :
             @callback (function) : a function to execute
               returns :
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onAfterResize",
            value: function onAfterResize(callback) {
                if (callback) {
                    this._onAfterResizeCallback = callback;
                }

                return this;
            }
            /***
             This is called when an error has been detected
               params:
             @callback (function): a function to execute
               returns:
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onError",
            value: function onError(callback) {
                if (callback) {
                    this._onErrorCallback = callback;
                }

                return this;
            }
            /***
             This triggers the onError callback and is called by the renderer when an error has been detected
             ***/

        }, {
            key: "_onRendererError",
            value: function _onRendererError() {
                var _this10 = this;

                // be sure that the callback has been registered and only call the global error callback once
                setTimeout(function () {
                    if (_this10._onErrorCallback && !_this10.errors) {
                        _this10._onErrorCallback();
                    }

                    _this10.errors = true;
                }, 0);
            }
            /***
             This is called when the WebGL context has been successfully created
               params:
             @callback (function): a function to execute
               returns:
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onSuccess",
            value: function onSuccess(callback) {
                if (callback) {
                    this._onSuccessCallback = callback;
                }

                return this;
            }
            /***
             This triggers the onSuccess callback and is called by the renderer when the context has been successfully created
             ***/

        }, {
            key: "_onRendererSuccess",
            value: function _onRendererSuccess() {
                var _this11 = this;

                setTimeout(function () {
                    _this11._onSuccessCallback && _this11._onSuccessCallback();
                }, 0);
            }
            /***
             This is called once our context has been lost
               params:
             @callback (function): a function to execute
               returns:
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onContextLost",
            value: function onContextLost(callback) {
                if (callback) {
                    this._onContextLostCallback = callback;
                }

                return this;
            }
            /***
             This triggers the onContextLost callback and is called by the renderer when the context has been lost
             ***/

        }, {
            key: "_onRendererContextLost",
            value: function _onRendererContextLost() {
                this._onContextLostCallback && this._onContextLostCallback();
            }
            /***
             This is called once our context has been restored
               params:
             @callback (function): a function to execute
               returns:
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onContextRestored",
            value: function onContextRestored(callback) {
                if (callback) {
                    this._onContextRestoredCallback = callback;
                }

                return this;
            }
            /***
             This triggers the onContextRestored callback and is called by the renderer when the context has been restored
             ***/

        }, {
            key: "_onRendererContextRestored",
            value: function _onRendererContextRestored() {
                this._onContextRestoredCallback && this._onContextRestoredCallback();
            }
            /***
             This is called once at each request animation frame call
               params:
             @callback (function): a function to execute
               returns:
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onRender",
            value: function onRender(callback) {
                if (callback) {
                    this._onRenderCallback = callback;
                }

                return this;
            }
            /***
             This is called each time window is scrolled and if our scrollManager is active
               params :
             @callback (function) : a function to execute
               returns :
             @this: our Curtains element to handle chaining
             ***/

        }, {
            key: "onScroll",
            value: function onScroll(callback) {
                if (callback) {
                    this._onScrollCallback = callback;
                }

                return this;
            }
            /*** DESTROYING ***/

            /***
             Dispose everything
             ***/

        }, {
            key: "dispose",
            value: function dispose() {
                this.renderer.dispose();
            }
            /***
             This is called when the renderer has finished disposing all the WebGL stuff
             ***/

        }, {
            key: "_onRendererDisposed",
            value: function _onRendererDisposed() {
                // cancel animation frame
                this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID); // remove event listeners

                this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, false);
                this._scrollManager && this._scrollManager.dispose();
            }
        }]);

        return Curtains;
    }();
    /***
     Uniforms class manages uniforms setting and updating
       params:
     @renderer (Renderer class object): our renderer class object
     @program (object): our mesh's Program (see Program class object)
       @uniforms (object): our uniforms object:
     - name (string): uniform name to use in your shaders
     - type (uniform type): uniform type. Will try to detect it if not set (see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform)
     - value (float / int / Vec2 / Vec3 / Mat4 / array): initial value of the uniform
       returns:
     @this: our Uniforms manager
     ***/


    var Uniforms = /*#__PURE__*/function () {
        function Uniforms(renderer, program, uniforms) {
            _classCallCheck(this, Uniforms);

            this.type = "Uniforms";

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                throwError(this.type + ": Renderer WebGL context is undefined", renderer); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = renderer.gl;
            this.program = program;
            this.uniforms = {};

            if (uniforms) {
                for (var key in uniforms) {
                    var uniform = uniforms[key]; // fill our uniform object

                    this.uniforms[key] = {
                        name: uniform.name,
                        type: uniform.type,
                        // clone value if possible, use original value else
                        value: uniform.value.clone && typeof uniform.value.clone === "function" ? uniform.value.clone() : uniform.value,
                        update: null
                    };
                }
            }
        }
        /***
         Set uniforms WebGL function based on their types
           params :
         @uniform (object): the uniform
         ***/


        _createClass(Uniforms, [{
            key: "handleUniformSetting",
            value: function handleUniformSetting(uniform) {
                switch (uniform.type) {
                    case "1i":
                        uniform.update = this.setUniform1i.bind(this);
                        break;

                    case "1iv":
                        uniform.update = this.setUniform1iv.bind(this);
                        break;

                    case "1f":
                        uniform.update = this.setUniform1f.bind(this);
                        break;

                    case "1fv":
                        uniform.update = this.setUniform1fv.bind(this);
                        break;

                    case "2i":
                        uniform.update = this.setUniform2i.bind(this);
                        break;

                    case "2iv":
                        uniform.update = this.setUniform2iv.bind(this);
                        break;

                    case "2f":
                        uniform.update = this.setUniform2f.bind(this);
                        break;

                    case "2fv":
                        uniform.update = this.setUniform2fv.bind(this);
                        break;

                    case "3i":
                        uniform.update = this.setUniform3i.bind(this);
                        break;

                    case "3iv":
                        uniform.update = this.setUniform3iv.bind(this);
                        break;

                    case "3f":
                        uniform.update = this.setUniform3f.bind(this);
                        break;

                    case "3fv":
                        uniform.update = this.setUniform3fv.bind(this);
                        break;

                    case "4i":
                        uniform.update = this.setUniform4i.bind(this);
                        break;

                    case "4iv":
                        uniform.update = this.setUniform4iv.bind(this);
                        break;

                    case "4f":
                        uniform.update = this.setUniform4f.bind(this);
                        break;

                    case "4fv":
                        uniform.update = this.setUniform4fv.bind(this);
                        break;

                    case "mat2":
                        uniform.update = this.setUniformMatrix2fv.bind(this);
                        break;

                    case "mat3":
                        uniform.update = this.setUniformMatrix3fv.bind(this);
                        break;

                    case "mat4":
                        uniform.update = this.setUniformMatrix4fv.bind(this);
                        break;

                    default:
                        if (!this.renderer.production) throwWarning(this.type + ": This uniform type is not handled : ", uniform.type);
                }
            }
            /***
             Auto detect the format of the uniform (check if its a float, an integer, a Vector, a Matrix, an array...)
             Also set a lastValue property that we'll use to compare to our value property and update the uniform if it changed
               params :
             @uniform (object): the uniform
             ***/

        }, {
            key: "setInternalFormat",
            value: function setInternalFormat(uniform) {
                if (uniform.value.type === "Vec2") {
                    uniform._internalFormat = "Vec2";
                    uniform.lastValue = uniform.value.clone();
                } else if (uniform.value.type === "Vec3") {
                    uniform._internalFormat = "Vec3";
                    uniform.lastValue = uniform.value.clone();
                } else if (uniform.value.type === "Mat4") {
                    uniform._internalFormat = "Mat4";
                    uniform.lastValue = uniform.value.clone();
                } else if (uniform.value.type === "Quat") {
                    uniform._internalFormat = "Quat";
                    uniform.lastValue = uniform.value.clone();
                } else if (Array.isArray(uniform.value)) {
                    uniform._internalFormat = "array";
                    uniform.lastValue = Array.from(uniform.value);
                } else if (uniform.value.constructor === Float32Array) {
                    uniform._internalFormat = "mat";
                    uniform.lastValue = uniform.value;
                } else {
                    uniform._internalFormat = "float";
                    uniform.lastValue = uniform.value;
                }
            }
            /***
             This inits our uniforms
             Sets its internal format and type if not provided then upload the uniform
             ***/

        }, {
            key: "setUniforms",
            value: function setUniforms() {
                // set our uniforms if we got some
                if (this.uniforms) {
                    for (var key in this.uniforms) {
                        var uniform = this.uniforms[key]; // set our uniform location

                        uniform.location = this.gl.getUniformLocation(this.program, uniform.name); // handle Vec2, Vec3, Mat4, floats, arrays, etc

                        if (!uniform._internalFormat) {
                            this.setInternalFormat(uniform);
                        }

                        if (!uniform.type) {
                            if (uniform._internalFormat === "Vec2") {
                                uniform.type = "2f";
                            } else if (uniform._internalFormat === "Vec3") {
                                uniform.type = "3f";
                            } else if (uniform._internalFormat === "Mat4") {
                                uniform.type = "mat4";
                            } else if (uniform._internalFormat === "array") {
                                if (uniform.value.length === 4) {
                                    uniform.type = "4f";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a 4f (array of 4 floats) uniform type");
                                } else if (uniform.value.length === 3) {
                                    uniform.type = "3f";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a 3f (array of 3 floats) uniform type");
                                } else if (uniform.value.length === 2) {
                                    uniform.type = "2f";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a 2f (array of 2 floats) uniform type");
                                }
                            } else if (uniform._internalFormat === "mat") {
                                if (uniform.value.length === 16) {
                                    uniform.type = "mat4";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a mat4 (4x4 matrix array) uniform type");
                                } else if (uniform.value.length === 9) {
                                    uniform.type = "mat3";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a mat3 (3x3 matrix array) uniform type");
                                } else if (uniform.value.length === 4) {
                                    uniform.type = "mat2";
                                    if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a mat2 (2x2 matrix array) uniform type");
                                }
                            } else {
                                uniform.type = "1f";
                                if (!this.renderer.production) throwWarning(this.type + ": No uniform type declared for " + uniform.name + ", applied a 1f (float) uniform type");
                            }
                        } // set the uniforms update functions


                        this.handleUniformSetting(uniform); // update the uniform

                        uniform.update && uniform.update(uniform);
                    }
                }
            }
            /***
             This updates all uniforms of an object that were set by the user
             It is called at each draw call
             ***/

        }, {
            key: "updateUniforms",
            value: function updateUniforms() {
                if (this.uniforms) {
                    for (var key in this.uniforms) {
                        var uniform = this.uniforms[key];
                        var shouldUpdate = false;

                        if (uniform._internalFormat === "Vec2") {
                            if (!uniform.value.equals(uniform.lastValue)) {
                                shouldUpdate = true;
                                uniform.lastValue.copy(uniform.value);
                            }
                        } else if (uniform._internalFormat === "Vec3") {
                            if (!uniform.value.equals(uniform.lastValue)) {
                                shouldUpdate = true;
                                uniform.lastValue.copy(uniform.value);
                            }
                        } else if (uniform._internalFormat === "Quat") {
                            if (!uniform.value.equals(uniform.lastValue)) {
                                shouldUpdate = true;
                                uniform.lastValue.copy(uniform.value);
                            }
                        } else if (!uniform.value.length) {
                            if (uniform.value !== uniform.lastValue) {
                                shouldUpdate = true;
                                uniform.lastValue = uniform.value;
                            }
                        } else if (JSON.stringify(uniform.value) !== JSON.stringify(uniform.lastValue)) {
                            // compare two arrays
                            shouldUpdate = true; // copy array

                            uniform.lastValue = Array.from(uniform.value);
                        }

                        if (shouldUpdate) {
                            // update our uniforms
                            uniform.update && uniform.update(uniform);
                        }
                    }
                }
            }
            /***
             Use appropriate WebGL uniform setting function based on the uniform type
               params :
             @uniform (object): the uniform
             ***/

        }, {
            key: "setUniform1i",
            value: function setUniform1i(uniform) {
                this.gl.uniform1i(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform1iv",
            value: function setUniform1iv(uniform) {
                this.gl.uniform1iv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform1f",
            value: function setUniform1f(uniform) {
                this.gl.uniform1f(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform1fv",
            value: function setUniform1fv(uniform) {
                this.gl.uniform1fv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform2i",
            value: function setUniform2i(uniform) {
                uniform._internalFormat === "Vec2" ? this.gl.uniform2i(uniform.location, uniform.value.x, uniform.value.y) : this.gl.uniform2i(uniform.location, uniform.value[0], uniform.value[1]);
            }
        }, {
            key: "setUniform2iv",
            value: function setUniform2iv(uniform) {
                uniform._internalFormat === "Vec2" ? this.gl.uniform2iv(uniform.location, [uniform.value.x, uniform.value.y]) : this.gl.uniform2iv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform2f",
            value: function setUniform2f(uniform) {
                uniform._internalFormat === "Vec2" ? this.gl.uniform2f(uniform.location, uniform.value.x, uniform.value.y) : this.gl.uniform2f(uniform.location, uniform.value[0], uniform.value[1]);
            }
        }, {
            key: "setUniform2fv",
            value: function setUniform2fv(uniform) {
                uniform._internalFormat === "Vec2" ? this.gl.uniform2fv(uniform.location, [uniform.value.x, uniform.value.y]) : this.gl.uniform2fv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform3i",
            value: function setUniform3i(uniform) {
                uniform._internalFormat === "Vec3" ? this.gl.uniform3i(uniform.location, uniform.value.x, uniform.value.y, uniform.value.z) : this.gl.uniform3i(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2]);
            }
        }, {
            key: "setUniform3iv",
            value: function setUniform3iv(uniform) {
                uniform._internalFormat === "Vec3" ? this.gl.uniform3iv(uniform.location, [uniform.value.x, uniform.value.y, uniform.value.z]) : this.gl.uniform3iv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform3f",
            value: function setUniform3f(uniform) {
                uniform._internalFormat === "Vec3" ? this.gl.uniform3f(uniform.location, uniform.value.x, uniform.value.y, uniform.value.z) : this.gl.uniform3f(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2]);
            }
        }, {
            key: "setUniform3fv",
            value: function setUniform3fv(uniform) {
                uniform._internalFormat === "Vec3" ? this.gl.uniform3fv(uniform.location, [uniform.value.x, uniform.value.y, uniform.value.z]) : this.gl.uniform3fv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform4i",
            value: function setUniform4i(uniform) {
                uniform._internalFormat === "Quat" ? this.gl.uniform4i(uniform.location, uniform.value.elements[0], uniform.value.elements[1], uniform.value.elements[2], uniform.value[3]) : this.gl.uniform4i(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2], uniform.value[3]);
            }
        }, {
            key: "setUniform4iv",
            value: function setUniform4iv(uniform) {
                uniform._internalFormat === "Quat" ? this.gl.uniform4iv(uniform.location, [uniform.value.elements[0], uniform.value.elements[1], uniform.value.elements[2], uniform.value[3]]) : this.gl.uniform4iv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniform4f",
            value: function setUniform4f(uniform) {
                uniform._internalFormat === "Quat" ? this.gl.uniform4f(uniform.location, uniform.value.elements[0], uniform.value.elements[1], uniform.value.elements[2], uniform.value[3]) : this.gl.uniform4f(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2], uniform.value[3]);
            }
        }, {
            key: "setUniform4fv",
            value: function setUniform4fv(uniform) {
                uniform._internalFormat === "Quat" ? this.gl.uniform4fv(uniform.location, [uniform.value.elements[0], uniform.value.elements[1], uniform.value.elements[2], uniform.value[3]]) : this.gl.uniform4fv(uniform.location, uniform.value);
            }
        }, {
            key: "setUniformMatrix2fv",
            value: function setUniformMatrix2fv(uniform) {
                this.gl.uniformMatrix2fv(uniform.location, false, uniform.value);
            }
        }, {
            key: "setUniformMatrix3fv",
            value: function setUniformMatrix3fv(uniform) {
                this.gl.uniformMatrix3fv(uniform.location, false, uniform.value);
            }
        }, {
            key: "setUniformMatrix4fv",
            value: function setUniformMatrix4fv(uniform) {
                uniform._internalFormat === "Mat4" ? this.gl.uniformMatrix4fv(uniform.location, false, uniform.value.elements) : this.gl.uniformMatrix4fv(uniform.location, false, uniform.value);
            }
        }]);

        return Uniforms;
    }();

    var precisionMedium = "\nprecision mediump float;\n";
    var precisionMedium$1 = precisionMedium.replace(/\n/g, '');
    var defaultAttributes = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n";
    var defaultAttributes$1 = defaultAttributes.replace(/\n/g, '');
    var defaultVaryings = "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n";
    var defaultVaryings$1 = defaultVaryings.replace(/\n/g, '');
    var planeVS = precisionMedium$1 + defaultAttributes$1 + defaultVaryings$1 + "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n";
    var planeVS$1 = planeVS.replace(/\n/g, '');
    var planeFS = precisionMedium$1 + defaultVaryings$1 + "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n";
    var planeFS$1 = planeFS.replace(/\n/g, '');
    var shaderPassVS = precisionMedium$1 + defaultAttributes$1 + defaultVaryings$1 + "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n";
    var shaderPassVS$1 = shaderPassVS.replace(/\n/g, '');
    var shaderPassFS = precisionMedium$1 + defaultVaryings$1 + "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n";
    var shaderPassFS$1 = shaderPassFS.replace(/\n/g, '');
    /***
     Program class that creates, compiles and links the shaders
     Use a cache system to get already compiled shaders and save some CPU
     Also responsible for the creation, setting and updating of the uniforms (see Uniforms class object)
       params:
     @renderer (Renderer class object): our renderer class object
       @parent (Plane/ShaderPass class object): the mesh that will use that program
     @vertexShader (string): vertex shader as a string
     @fragmentShader (string): fragment shader as a string
       returns:
     @this: our newly created Program
     ***/
    // store programs id

    var id = 0;

    var Program = /*#__PURE__*/function () {
        function Program(renderer) {
            var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                parent = _ref4.parent,
                vertexShader = _ref4.vertexShader,
                fragmentShader = _ref4.fragmentShader;

            _classCallCheck(this, Program);

            this.type = "Program";

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                throwError(this.type + ": Renderer WebGL context is undefined", renderer); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = this.renderer.gl;
            this.parent = parent;
            this.defaultVsCode = this.parent.type === "Plane" ? planeVS$1 : shaderPassVS$1;
            this.defaultFsCode = this.parent.type === "Plane" ? planeFS$1 : shaderPassFS$1; // use the vertex shader specified or fallback to a default one

            if (!vertexShader) {
                if (!this.renderer.production && this.parent.type === "Plane") {
                    throwWarning(this.parent.type + ": No vertex shader provided, will use a default one");
                }

                this.vsCode = this.defaultVsCode;
            } else {
                this.vsCode = vertexShader;
            } // use the fragment shader specified or fallback to a default one


            if (!fragmentShader) {
                if (!this.renderer.production) {
                    throwWarning(this.parent.type + ": No fragment shader provided, will use a default one");
                }

                this.fsCode = this.defaultFsCode;
            } else {
                this.fsCode = fragmentShader;
            }

            this.compiled = true;
            this.setupProgram();
        }
        /***
         Compile our WebGL shaders based on our written shaders
           params:
         @shaderCode (string): shader code
         @shaderType (shaderType): WebGL shader type (vertex or fragment)
           returns:
         @shader (compiled shader): our compiled shader
         ***/


        _createClass(Program, [{
            key: "createShader",
            value: function createShader(shaderCode, shaderType) {
                var shader = this.gl.createShader(shaderType);
                this.gl.shaderSource(shader, shaderCode);
                this.gl.compileShader(shader); // check shader compilation status only when not in production mode

                if (!this.renderer.production) {
                    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
                        // shader debugging log as seen in THREE.js WebGLProgram source code
                        var shaderTypeString = shaderType === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
                        var shaderSource = this.gl.getShaderSource(shader);
                        var shaderLines = shaderSource.split('\n');

                        for (var i = 0; i < shaderLines.length; i++) {
                            shaderLines[i] = i + 1 + ': ' + shaderLines[i];
                        }

                        shaderLines = shaderLines.join("\n");
                        throwWarning(this.type + ": Errors occurred while compiling the", shaderTypeString, ":\n", this.gl.getShaderInfoLog(shader));
                        throwError(shaderLines);
                        throwWarning(this.type + ": Will use a default", shaderTypeString); // use the library default shaders instead

                        return this.createShader(shaderType === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, shaderType);
                    }
                }

                return shader;
            }
            /***
             Compiles and creates new shaders
             ***/

        }, {
            key: "useNewShaders",
            value: function useNewShaders() {
                this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER);
                this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER);

                if (!this.vertexShader || !this.fragmentShader) {
                    if (!this.renderer.production) throwWarning(this.type + ": Unable to find or compile the vertex or fragment shader");
                }
            }
        }, {
            key: "setupProgram",
            value:
                /***
                 Checks whether the program has already been registered before creating it
                 If yes, use the compiled shaders to create a new one with createProgram()
                 If not, compile the shaders and call createProgram()
                 ***/
                function setupProgram() {
                    var existingProgram = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode); // we found an existing program

                    if (existingProgram) {
                        // we need to create a new program but we don't have to re compile the shaders
                        this.vertexShader = existingProgram.vertexShader;
                        this.fragmentShader = existingProgram.fragmentShader; // copy active uniforms and attributes as well

                        this.activeUniforms = existingProgram.activeUniforms;
                        this.activeAttributes = existingProgram.activeAttributes;
                        this.createProgram();
                    } else {
                        // compile the new shaders and create a new program
                        this.useNewShaders();

                        if (this.compiled) {
                            this.createProgram(); // add it to our program manager programs list

                            this.renderer.cache.addProgram(this);
                        }
                    }
                }
            /***
             Used internally to set up program based on the created shaders and attach them to the program
             Sets a list of active textures that are actually used by the shaders to avoid binding unused textures during draw calls
             Add the program to the cache
             ***/

        }, {
            key: "createProgram",
            value: function createProgram() {
                // set program id and type
                id++;
                this.id = id; // we need to create a new shader program

                this.program = this.gl.createProgram(); // if shaders are valid, go on

                this.gl.attachShader(this.program, this.vertexShader);
                this.gl.attachShader(this.program, this.fragmentShader);
                this.gl.linkProgram(this.program); // TODO getProgramParameter even in production to avoid errors?
                // check the shader program creation status only when not in production mode

                if (!this.renderer.production) {
                    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
                        throwWarning(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)); // use default shaders, recompile and recreate program

                        throwWarning(this.type + ": Will use default vertex and fragment shaders");
                        this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER);
                        this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER);
                        this.createProgram();
                        return;
                    }
                } // free the shaders handles


                this.gl.deleteShader(this.vertexShader);
                this.gl.deleteShader(this.fragmentShader); // store active textures (those that are used in the shaders) to avoid binding unused textures

                if (!this.activeUniforms || !this.activeAttributes) {
                    this.activeUniforms = {
                        textures: [],
                        textureMatrices: []
                    }; // check for program active textures

                    var numUniforms = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);

                    for (var i = 0; i < numUniforms; i++) {
                        var activeUniform = this.gl.getActiveUniform(this.program, i);

                        if (activeUniform.type === this.gl.SAMPLER_2D) {
                            // if it's a texture add it to our activeUniforms textures array
                            this.activeUniforms.textures.push(activeUniform.name);
                        }

                        if (activeUniform.type === this.gl.FLOAT_MAT4 && activeUniform.name !== "uMVMatrix" && activeUniform.name !== "uPMatrix") {
                            // if it's a texture matrix add it to our activeUniforms textureMatrices array
                            this.activeUniforms.textureMatrices.push(activeUniform.name);
                        }
                    }

                    this.activeAttributes = []; // check for program active attributes to avoid binding attribute buffer if attribute is unused

                    var numAttributes = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);

                    for (var _i8 = 0; _i8 < numAttributes; _i8++) {
                        var activeAttribute = this.gl.getActiveAttrib(this.program, _i8); // push attribute name

                        this.activeAttributes.push(activeAttribute.name);
                    }
                }
            }
            /*** UNIFORMS ***/

            /***
             Creates and attach the uniform handlers to our program
               params:
             @uniforms (object): an object describing our uniforms (see Uniforms class object)
             ***/

        }, {
            key: "createUniforms",
            value: function createUniforms(uniforms) {
                this.uniformsManager = new Uniforms(this.renderer, this.program, uniforms); // set them right away

                this.setUniforms();
            }
            /***
             Sets our uniforms (used on init and on context restoration)
             ***/

        }, {
            key: "setUniforms",
            value: function setUniforms() {
                // use this program
                this.renderer.useProgram(this);
                this.uniformsManager.setUniforms();
            }
            /***
             Updates our uniforms at each draw calls
             ***/

        }, {
            key: "updateUniforms",
            value: function updateUniforms() {
                // use this program
                this.renderer.useProgram(this);
                this.uniformsManager.updateUniforms();
            }
        }]);

        return Program;
    }();
    /***
     Geometry class handles attributes, VertexArrayObjects (if available) and vertices/UVs set up
       params:
     @renderer (Renderer class object): our renderer class object
       @program (object): our mesh's Program (see Program class object)
     @width (int): number of vertices along width
     @height (int): number of vertices along height
     @id (int): an integer based on geometry's width and height and used to avoid redundant buffer binding calls
       returns:
     @this: our newly created Geometry
     ***/


    var Geometry = /*#__PURE__*/function () {
        function Geometry(renderer) {
            var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref5$program = _ref5.program,
                program = _ref5$program === void 0 ? null : _ref5$program,
                _ref5$width = _ref5.width,
                width = _ref5$width === void 0 ? 1 : _ref5$width,
                _ref5$height = _ref5.height,
                height = _ref5$height === void 0 ? 1 : _ref5$height;

            _classCallCheck(this, Geometry);

            this.type = "Geometry";

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                throwError(this.type + ": Renderer WebGL context is undefined", renderer); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = this.renderer.gl; // unique plane buffers id based on width and height
            // used to get a geometry from cache

            this.definition = {
                id: width * height + width,
                width: width,
                height: height
            };
            this.setDefaultAttributes();
            this.setVerticesUVs();
        }
        /*** CONTEXT RESTORATION ***/

        /***
         Used internally to handle context restoration after the program has been successfully compiled again
         Reset the default attributes, the vertices and UVs and the program
         ***/


        _createClass(Geometry, [{
            key: "restoreContext",
            value: function restoreContext(program) {
                this.program = null;
                this.setDefaultAttributes();
                this.setVerticesUVs();
                this.setProgram(program);
            }
            /*** SET DEFAULT ATTRIBUTES ***/

            /***
             Our geometry default attributes that will handle the buffers
             We're just using vertices positions and texture coordinates
             ***/

        }, {
            key: "setDefaultAttributes",
            value: function setDefaultAttributes() {
                // our plane default attributes
                // if we'd want to introduce custom attributes we'd merge them with those
                this.attributes = {
                    vertexPosition: {
                        name: "aVertexPosition",
                        size: 3,
                        isActive: false
                    },
                    textureCoord: {
                        name: "aTextureCoord",
                        size: 3,
                        isActive: false
                    }
                };
            }
            /***
             Set our vertices and texture coordinates array
             Get them from the cache if possible
             ***/

        }, {
            key: "setVerticesUVs",
            value: function setVerticesUVs() {
                // we need to create our geometry and material objects
                var cachedGeometry = this.renderer.cache.getGeometryFromID(this.definition.id);

                if (cachedGeometry) {
                    this.attributes.vertexPosition.array = cachedGeometry.vertices;
                    this.attributes.textureCoord.array = cachedGeometry.uvs;
                } else {
                    this.computeVerticesUVs(); // TODO better caching? We could pass all attributes to cache and handle arrays in there

                    this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array);
                }
            }
            /***
             Called on init and on context restoration to set up the attribute buffers
             Use VertexArrayObjects whenever possible
             ***/

        }, {
            key: "setProgram",
            value: function setProgram(program) {
                this.program = program;
                this.initAttributes(); // use vertex array objects if available

                if (this.renderer._isWebGL2) {
                    this._vao = this.gl.createVertexArray();
                    this.gl.bindVertexArray(this._vao);
                } else if (this.renderer.extensions['OES_vertex_array_object']) {
                    this._vao = this.renderer.extensions['OES_vertex_array_object'].createVertexArrayOES();
                    this.renderer.extensions['OES_vertex_array_object'].bindVertexArrayOES(this._vao);
                }

                this.initializeBuffers();
            }
            /***
             This creates our mesh attributes and buffers by looping over it
             ***/

        }, {
            key: "initAttributes",
            value: function initAttributes() {
                // loop through our attributes and create buffers and attributes locations
                for (var key in this.attributes) {
                    // is this attribute active in our program?
                    this.attributes[key].isActive = this.program.activeAttributes.includes(this.attributes[key].name); // if attribute is not active, no need to go further

                    if (!this.attributes[key].isActive) {
                        return;
                    }

                    this.attributes[key].location = this.gl.getAttribLocation(this.program.program, this.attributes[key].name);
                    this.attributes[key].buffer = this.gl.createBuffer();
                    this.attributes[key].numberOfItems = this.definition.width * this.definition.height * this.attributes[key].size * 2;
                }
            }
            /***
             This method is used internally to create our vertices coordinates and texture UVs
             we first create our UVs on a grid from [0, 0, 0] to [1, 1, 0]
             then we use the UVs to create our vertices coords
             ***/

        }, {
            key: "computeVerticesUVs",
            value: function computeVerticesUVs() {
                // geometry vertices and UVs
                this.attributes.vertexPosition.array = [];
                this.attributes.textureCoord.array = [];
                var vertices = this.attributes.vertexPosition.array;
                var uvs = this.attributes.textureCoord.array;

                for (var y = 0; y < this.definition.height; y++) {
                    var v = y / this.definition.height;

                    for (var x = 0; x < this.definition.width; x++) {
                        var u = x / this.definition.width; // uvs and vertices
                        // our uvs are ranging from 0 to 1, our vertices range from -1 to 1
                        // first triangle

                        uvs.push(u);
                        uvs.push(v);
                        uvs.push(0);
                        vertices.push((u - 0.5) * 2);
                        vertices.push((v - 0.5) * 2);
                        vertices.push(0);
                        uvs.push(u + 1 / this.definition.width);
                        uvs.push(v);
                        uvs.push(0);
                        vertices.push((u + 1 / this.definition.width - 0.5) * 2);
                        vertices.push((v - 0.5) * 2);
                        vertices.push(0);
                        uvs.push(u);
                        uvs.push(v + 1 / this.definition.height);
                        uvs.push(0);
                        vertices.push((u - 0.5) * 2);
                        vertices.push((v + 1 / this.definition.height - 0.5) * 2);
                        vertices.push(0); // second triangle

                        uvs.push(u);
                        uvs.push(v + 1 / this.definition.height);
                        uvs.push(0);
                        vertices.push((u - 0.5) * 2);
                        vertices.push((v + 1 / this.definition.height - 0.5) * 2);
                        vertices.push(0);
                        uvs.push(u + 1 / this.definition.width);
                        uvs.push(v);
                        uvs.push(0);
                        vertices.push((u + 1 / this.definition.width - 0.5) * 2);
                        vertices.push((v - 0.5) * 2);
                        vertices.push(0);
                        uvs.push(u + 1 / this.definition.width);
                        uvs.push(v + 1 / this.definition.height);
                        uvs.push(0);
                        vertices.push((u + 1 / this.definition.width - 0.5) * 2);
                        vertices.push((v + 1 / this.definition.height - 0.5) * 2);
                        vertices.push(0);
                    }
                }
            }
            /***
             This method enables and binds our attributes buffers
             ***/

        }, {
            key: "initializeBuffers",
            value: function initializeBuffers() {
                if (!this.attributes) return; // loop through our attributes

                for (var key in this.attributes) {
                    if (!this.attributes[key].isActive) return; // bind attribute buffer

                    this.gl.enableVertexAttribArray(this.attributes[key].location);
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[key].buffer);
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[key].array), this.gl.STATIC_DRAW); // set where the attribute gets its data

                    this.gl.vertexAttribPointer(this.attributes[key].location, this.attributes[key].size, this.gl.FLOAT, false, 0, 0);
                } // update current buffers ID


                this.renderer.state.currentGeometryID = this.definition.id;
            }
            /***
             Used inside our draw call to set the correct plane buffers before drawing it
             ***/

        }, {
            key: "bindBuffers",
            value: function bindBuffers() {
                if (this._vao) {
                    if (this.renderer._isWebGL2) {
                        this.gl.bindVertexArray(this._vao);
                    } else {
                        this.renderer.extensions['OES_vertex_array_object'].bindVertexArrayOES(this._vao);
                    }
                } else {
                    // loop through our attributes to bind the buffers and set the attribute pointer
                    for (var key in this.attributes) {
                        if (!this.attributes[key].isActive) return;
                        this.gl.enableVertexAttribArray(this.attributes[key].location);
                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[key].buffer);
                        this.gl.vertexAttribPointer(this.attributes[key].location, this.attributes[key].size, this.gl.FLOAT, false, 0, 0);
                    }
                } // update current buffers ID


                this.renderer.state.currentGeometryID = this.definition.id;
            }
            /***
             Draw a geometry
             ***/

        }, {
            key: "draw",
            value: function draw() {
                this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems);
            }
            /***
             Dispose a geometry (ie delete its vertex array objects and buffers)
             ***/

        }, {
            key: "dispose",
            value: function dispose() {
                // delete buffers
                // each time we check for existing properties to avoid errors
                if (this._vao) {
                    if (this.renderer._isWebGL2) {
                        this.gl.deleteVertexArray(this._vao);
                    } else {
                        this.renderer.extensions['OES_vertex_array_object'].deleteVertexArrayOES(this._vao);
                    }
                }

                for (var key in this.attributes) {
                    if (!this.attributes[key].isActive) return;
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[key].buffer);
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW);
                    this.gl.deleteBuffer(this.attributes[key].buffer);
                }

                this.attributes = null; // update current buffers ID

                this.renderer.state.currentGeometryID = null;
            }
        }]);

        return Geometry;
    }();
    /***
     Here we create a Mat4 class object
     This is a really basic Matrix4 class used for matrix calculations
     Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js and http://glmatrix.net/docs/mat4.js.html
       params :
     @elements (Float32Array of length 16): our matrix array. Default to identity matrix.
       returns :
     @this: our Mat4 class object
     ***/
    // TODO lot of (unused at the time) methods are missing


    var Mat4 = /*#__PURE__*/function () {
        function Mat4() {
            var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

            _classCallCheck(this, Mat4);

            this.type = "Mat4";
            this.elements = elements;
        }
        /***
         Sets the matrix values from an array
           params:
         @array (array): an array of at least 16 elements
           returns:
         @this (Mat4 class object): this matrix after being set
         ***/


        _createClass(Mat4, [{
            key: "setFromArray",
            value: function setFromArray(array) {
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i] = array[i];
                }

                return this;
            }
            /***
             Copy another Mat4
               params:
             @matrix (Mat4 class object): matrix to copy
               returns:
             @this (Mat4 class object): this matrix after copy
             ***/

        }, {
            key: "copy",
            value: function copy(matrix) {
                var array = matrix.elements;
                this.elements[0] = array[0];
                this.elements[1] = array[1];
                this.elements[2] = array[2];
                this.elements[3] = array[3];
                this.elements[4] = array[4];
                this.elements[5] = array[5];
                this.elements[6] = array[6];
                this.elements[7] = array[7];
                this.elements[8] = array[8];
                this.elements[9] = array[9];
                this.elements[10] = array[10];
                this.elements[11] = array[11];
                this.elements[12] = array[12];
                this.elements[13] = array[13];
                this.elements[14] = array[14];
                this.elements[15] = array[15];
                return this;
            }
            /***
             Clone a matrix
               returns:
             @clonedMatrix (Mat4 object): cloned matrix
             ***/

        }, {
            key: "clone",
            value: function clone() {
                return new Mat4().copy(this);
            }
            /***
             Simple matrix multiplication helper
               params:
             @matrix (Mat4 class object): Mat4 to multiply with
               returns:
             @result (Mat4 class object): Mat4 after multiplication
             ***/

        }, {
            key: "multiply",
            value: function multiply(matrix) {
                var a = this.elements;
                var b = matrix.elements;
                var result = new Mat4();
                result.elements[0] = b[0] * a[0] + b[1] * a[4] + b[2] * a[8] + b[3] * a[12];
                result.elements[1] = b[0] * a[1] + b[1] * a[5] + b[2] * a[9] + b[3] * a[13];
                result.elements[2] = b[0] * a[2] + b[1] * a[6] + b[2] * a[10] + b[3] * a[14];
                result.elements[3] = b[0] * a[3] + b[1] * a[7] + b[2] * a[11] + b[3] * a[15];
                result.elements[4] = b[4] * a[0] + b[5] * a[4] + b[6] * a[8] + b[7] * a[12];
                result.elements[5] = b[4] * a[1] + b[5] * a[5] + b[6] * a[9] + b[7] * a[13];
                result.elements[6] = b[4] * a[2] + b[5] * a[6] + b[6] * a[10] + b[7] * a[14];
                result.elements[7] = b[4] * a[3] + b[5] * a[7] + b[6] * a[11] + b[7] * a[15];
                result.elements[8] = b[8] * a[0] + b[9] * a[4] + b[10] * a[8] + b[11] * a[12];
                result.elements[9] = b[8] * a[1] + b[9] * a[5] + b[10] * a[9] + b[11] * a[13];
                result.elements[10] = b[8] * a[2] + b[9] * a[6] + b[10] * a[10] + b[11] * a[14];
                result.elements[11] = b[8] * a[3] + b[9] * a[7] + b[10] * a[11] + b[11] * a[15];
                result.elements[12] = b[12] * a[0] + b[13] * a[4] + b[14] * a[8] + b[15] * a[12];
                result.elements[13] = b[12] * a[1] + b[13] * a[5] + b[14] * a[9] + b[15] * a[13];
                result.elements[14] = b[12] * a[2] + b[13] * a[6] + b[14] * a[10] + b[15] * a[14];
                result.elements[15] = b[12] * a[3] + b[13] * a[7] + b[14] * a[11] + b[15] * a[15];
                return result;
            }
            /***
             Get matrix inverse
               returns:
             @result (Mat4 class object): inverted Mat4
             ***/

        }, {
            key: "getInverse",
            value: function getInverse() {
                var te = this.elements;
                var out = new Mat4();
                var oe = out.elements;
                var a00 = te[0],
                    a01 = te[1],
                    a02 = te[2],
                    a03 = te[3];
                var a10 = te[4],
                    a11 = te[5],
                    a12 = te[6],
                    a13 = te[7];
                var a20 = te[8],
                    a21 = te[9],
                    a22 = te[10],
                    a23 = te[11];
                var a30 = te[12],
                    a31 = te[13],
                    a32 = te[14],
                    a33 = te[15];
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                    return null;
                }

                det = 1 / det;
                oe[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                oe[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                oe[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                oe[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                oe[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                oe[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                oe[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                oe[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                oe[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                oe[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                oe[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                oe[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                oe[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                oe[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                oe[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                oe[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return out;
            }
            /***
             Simple Mat4 scaling helper
               params :
             @vector (Vec3 class object): Vec3 representing scale along X, Y and Z axis
               returns :
             @result (Mat4 class object): Mat4 after scaling
             ***/

        }, {
            key: "scale",
            value: function scale(vector) {
                var a = this.elements;
                a[0] *= vector.x;
                a[1] *= vector.x;
                a[2] *= vector.x;
                a[3] *= vector.x;
                a[4] *= vector.y;
                a[5] *= vector.y;
                a[6] *= vector.y;
                a[7] *= vector.y;
                a[8] *= vector.z;
                a[9] *= vector.z;
                a[10] *= vector.z;
                a[11] *= vector.z;
                return this;
            }
            /***
             Creates a matrix from a quaternion rotation, vector translation and vector scale
             Equivalent for applying translation, rotation and scale matrices but much faster
             Source code from: http://glmatrix.net/docs/mat4.js.html
               params :
             @translation (Vec3 class object): translation vector
             @quaternion (Quat class object): rotation quaternion
             @scale (Vec3 class object): scale vector
               returns :
             @this (Mat4 class object): matrix after transformations
             ***/

        }, {
            key: "compose",
            value: function compose(translation, quaternion, scale) {
                var matrix = this.elements; // Quaternion math

                var x = quaternion.elements[0],
                    y = quaternion.elements[1],
                    z = quaternion.elements[2],
                    w = quaternion.elements[3];
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = scale.x;
                var sy = scale.y;
                var sz = scale.z;
                matrix[0] = (1 - (yy + zz)) * sx;
                matrix[1] = (xy + wz) * sx;
                matrix[2] = (xz - wy) * sx;
                matrix[3] = 0;
                matrix[4] = (xy - wz) * sy;
                matrix[5] = (1 - (xx + zz)) * sy;
                matrix[6] = (yz + wx) * sy;
                matrix[7] = 0;
                matrix[8] = (xz + wy) * sz;
                matrix[9] = (yz - wx) * sz;
                matrix[10] = (1 - (xx + yy)) * sz;
                matrix[11] = 0;
                matrix[12] = translation.x;
                matrix[13] = translation.y;
                matrix[14] = translation.z;
                matrix[15] = 1;
                return this;
            }
            /***
             Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
             Equivalent for applying translation, rotation and scale matrices but much faster
             Source code from: http://glmatrix.net/docs/mat4.js.html
               params :
             @translation (Vec3 class object): translation vector
             @quaternion (Quat class object): rotation quaternion
             @scale (Vec3 class object): scale vector
             @origin (Vec3 class object): origin vector around which to scale and rotate
               returns :
             @this (Mat4 class object): matrix after transformations
             ***/

        }, {
            key: "composeFromOrigin",
            value: function composeFromOrigin(translation, quaternion, scale, origin) {
                var matrix = this.elements; // Quaternion math

                var x = quaternion.elements[0],
                    y = quaternion.elements[1],
                    z = quaternion.elements[2],
                    w = quaternion.elements[3];
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = scale.x;
                var sy = scale.y;
                var sz = scale.z; // scale along Z is always equal to 1 anyway

                var ox = origin.x;
                var oy = origin.y;
                var oz = origin.z;
                var out0 = (1 - (yy + zz)) * sx;
                var out1 = (xy + wz) * sx;
                var out2 = (xz - wy) * sx;
                var out4 = (xy - wz) * sy;
                var out5 = (1 - (xx + zz)) * sy;
                var out6 = (yz + wx) * sy;
                var out8 = (xz + wy) * sz;
                var out9 = (yz - wx) * sz;
                var out10 = (1 - (xx + yy)) * sz;
                matrix[0] = out0;
                matrix[1] = out1;
                matrix[2] = out2;
                matrix[3] = 0;
                matrix[4] = out4;
                matrix[5] = out5;
                matrix[6] = out6;
                matrix[7] = 0;
                matrix[8] = out8;
                matrix[9] = out9;
                matrix[10] = out10;
                matrix[11] = 0;
                matrix[12] = translation.x + ox - (out0 * ox + out4 * oy + out8 * oz);
                matrix[13] = translation.y + oy - (out1 * ox + out5 * oy + out9 * oz);
                matrix[14] = translation.z + oz - (out2 * ox + out6 * oy + out10 * oz);
                matrix[15] = 1;
                return this;
            }
        }]);

        return Mat4;
    }();
    /***
     Here we create a Vec2 class object
     This is a really basic Vector2 class used for vector calculations
     Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Vector2.js and http://glmatrix.net/docs/vec2.js.html
       params :
     @x (float): X component of our vector
     @y (float): Y component of our vector
       returns :
     @this: our Vec2 class object
     ***/
    // TODO lot of (unused at the time) methods are missing


    var Vec2 = /*#__PURE__*/function () {
        function Vec2() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

            _classCallCheck(this, Vec2);

            this.type = "Vec2";
            this._x = x;
            this._y = y;
        }
        /***
         Getters and setters (with onChange callback)
         ***/


        _createClass(Vec2, [{
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(value) {
                var changed = value !== this._x;
                this._x = value;
                changed && this._onChangeCallback && this._onChangeCallback();
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(value) {
                var changed = value !== this._y;
                this._y = value;
                changed && this._onChangeCallback && this._onChangeCallback();
            }
        }, {
            key: "onChange",
            value: function onChange(callback) {
                if (callback) {
                    this._onChangeCallback = callback;
                }

                return this;
            }
            /***
             Sets the vector from values
               params:
             @x (float): X component of our vector
             @y (float): Y component of our vector
               returns:
             @this (Vec2): this vector after being set
             ***/

        }, {
            key: "set",
            value: function set(x, y) {
                this._x = x;
                this._y = y;
                return this;
            }
            /***
             Adds a vector to this vector
               params:
             @vector (Vec2): vector to add
               returns:
             @this (Vec2): this vector after addition
             ***/

        }, {
            key: "add",
            value: function add(vector) {
                this._x += vector.x;
                this._y += vector.y;
                return this;
            }
            /***
             Adds a scalar to this vector
               params:
             @value (float): number to add
               returns:
             @this (Vec2): this vector after addition
             ***/

        }, {
            key: "addScalar",
            value: function addScalar(value) {
                this._x += value;
                this._y += value;
                return this;
            }
            /***
             Subtracts a vector from this vector
               params:
             @vector (Vec2): vector to use for subtraction
               returns:
             @this (Vec2): this vector after subtraction
             ***/

        }, {
            key: "sub",
            value: function sub(vector) {
                this._x -= vector.x;
                this._y -= vector.y;
                return this;
            }
            /***
             Subtracts a scalar to this vector
               params:
             @value (float): number to use for subtraction
               returns:
             @this (Vec2): this vector after subtraction
             ***/

        }, {
            key: "subScalar",
            value: function subScalar(value) {
                this._x -= value;
                this._y -= value;
                return this;
            }
            /***
             Multiplies a vector with this vector
               params:
             @vector (Vec2): vector to use for multiplication
               returns:
             @this (Vec2): this vector after multiplication
             ***/

        }, {
            key: "multiply",
            value: function multiply(vector) {
                this._x *= vector.x;
                this._y *= vector.y;
                return this;
            }
            /***
             Multiplies a scalar with this vector
               params:
             @value (float): number to use for multiplication
               returns:
             @this (Vec2): this vector after multiplication
             ***/

        }, {
            key: "multiplyScalar",
            value: function multiplyScalar(value) {
                this._x *= value;
                this._y *= value;
                return this;
            }
            /***
             Copy a vector into this vector
               params:
             @vector (Vec2): vector to copy
               returns:
             @this (Vec2): this vector after copy
             ***/

        }, {
            key: "copy",
            value: function copy(vector) {
                this._x = vector.x;
                this._y = vector.y;
                return this;
            }
            /***
             Clone this vector
               returns:
             @vector (Vec2): cloned vector
             ***/

        }, {
            key: "clone",
            value: function clone() {
                return new Vec2(this._x, this._y);
            }
            /***
             Merges this vector with a vector when values are NaN. Mostly used internally.
               params:
             @vector (Vec2): vector to use for sanitization
               returns:
             @vector (Vec2): sanitized vector
             ***/

        }, {
            key: "sanitizeNaNValuesWith",
            value: function sanitizeNaNValuesWith(vector) {
                this._x = isNaN(this._x) ? vector.x : parseFloat(this._x);
                this._y = isNaN(this._y) ? vector.y : parseFloat(this._y);
                return this;
            }
            /***
             Apply max values to this vector
               params:
             @vector (Vec2): vector representing max values
               returns:
             @vector (Vec2): vector with max values applied
             ***/

        }, {
            key: "max",
            value: function max(vector) {
                this._x = Math.max(this._x, vector.x);
                this._y = Math.max(this._y, vector.y);
                return this;
            }
            /***
             Apply min values to this vector
               params:
             @vector (Vec2): vector representing min values
               returns:
             @vector (Vec2): vector with min values applied
             ***/

        }, {
            key: "min",
            value: function min(vector) {
                this._x = Math.min(this._x, vector.x);
                this._y = Math.min(this._y, vector.y);
                return this;
            }
            /***
             Checks if 2 vectors are equal
               params:
             @vector (Vec2): vector to compare
               returns:
             @isEqual (bool): whether the vectors are equals or not
             ***/

        }, {
            key: "equals",
            value: function equals(vector) {
                return this._x === vector.x && this._y === vector.y;
            }
            /***
             Normalize this vector
               returns:
             @this (Vec2): normalized vector
             ***/

        }, {
            key: "normalize",
            value: function normalize() {
                // normalize
                var len = this._x * this._x + this._y * this._y;

                if (len > 0) {
                    len = 1 / Math.sqrt(len);
                }

                this._x *= len;
                this._y *= len;
                return this;
            }
            /***
             Calculates the dot product of 2 vectors
               params:
             @vector (Vec2): vector to use for dot product
               returns:
             @dotProduct (float): dot product of the 2 vectors
             ***/

        }, {
            key: "dot",
            value: function dot(vector) {
                return this._x * vector.x + this._y * vector.y;
            }
        }]);

        return Vec2;
    }();
    /***
     Here we create a Vec3 class object
     This is a really basic Vector3 class used for vector calculations
     Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Vector3.js and http://glmatrix.net/docs/vec3.js.html
       params :
     @x (float): X component of our vector
     @y (float): Y component of our vector
     @z (float): Z component of our vector
       returns :
     @this: our Vec3 class object
     ***/
    // TODO lot of (unused at the time) methods are missing


    var Vec3 = /*#__PURE__*/function () {
        function Vec3() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;

            _classCallCheck(this, Vec3);

            this.type = "Vec3";
            this._x = x;
            this._y = y;
            this._z = z;
        }
        /***
         Getters and setters (with onChange callback)
         ***/


        _createClass(Vec3, [{
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(value) {
                var changed = value !== this._x;
                this._x = value;
                changed && this._onChangeCallback && this._onChangeCallback();
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(value) {
                var changed = value !== this._y;
                this._y = value;
                changed && this._onChangeCallback && this._onChangeCallback();
            }
        }, {
            key: "z",
            get: function get() {
                return this._z;
            },
            set: function set(value) {
                var changed = value !== this._z;
                this._z = value;
                changed && this._onChangeCallback && this._onChangeCallback();
            }
        }, {
            key: "onChange",
            value: function onChange(callback) {
                if (callback) {
                    this._onChangeCallback = callback;
                }

                return this;
            }
            /***
             Sets the vector from values
               params:
             @x (float): X component of our vector
             @y (float): Y component of our vector
             @z (float): Z component of our vector
               returns:
             @this (Vec2): this vector after being set
             ***/

        }, {
            key: "set",
            value: function set(x, y, z) {
                this._x = x;
                this._y = y;
                this._z = z;
                return this;
            }
            /***
             Adds a vector to this vector
               params:
             @vector (Vec3): vector to add
               returns:
             @this (Vec3): this vector after addition
             ***/

        }, {
            key: "add",
            value: function add(vector) {
                this._x += vector.x;
                this._y += vector.y;
                this._z += vector.z;
                return this;
            }
            /***
             Adds a scalar to this vector
               params:
             @value (float): number to add
               returns:
             @this (Vec3): this vector after addition
             ***/

        }, {
            key: "addScalar",
            value: function addScalar(value) {
                this._x += value;
                this._y += value;
                this._z += value;
                return this;
            }
            /***
             Subtracts a vector from this vector
               params:
             @vector (Vec3): vector to use for subtraction
               returns:
             @this (Vec3): this vector after subtraction
             ***/

        }, {
            key: "sub",
            value: function sub(vector) {
                this._x -= vector.x;
                this._y -= vector.y;
                this._z -= vector.z;
                return this;
            }
            /***
             Subtracts a scalar to this vector
               params:
             @value (float): number to use for subtraction
               returns:
             @this (Vec3): this vector after subtraction
             ***/

        }, {
            key: "subScalar",
            value: function subScalar(value) {
                this._x -= value;
                this._y -= value;
                this._z -= value;
                return this;
            }
            /***
             Multiplies a vector with this vector
               params:
             @vector (Vec3): vector to use for multiplication
               returns:
             @this (Vec3): this vector after multiplication
             ***/

        }, {
            key: "multiply",
            value: function multiply(vector) {
                this._x *= vector.x;
                this._y *= vector.y;
                this._z *= vector.z;
                return this;
            }
            /***
             Multiplies a scalar with this vector
               params:
             @value (float): number to use for multiplication
               returns:
             @this (Vec3): this vector after multiplication
             ***/

        }, {
            key: "multiplyScalar",
            value: function multiplyScalar(value) {
                this._x *= value;
                this._y *= value;
                this._z *= value;
                return this;
            }
            /***
             Copy a vector into this vector
               params:
             @vector (Vec3): vector to copy
               returns:
             @this (Vec3): this vector after copy
             ***/

        }, {
            key: "copy",
            value: function copy(vector) {
                this._x = vector.x;
                this._y = vector.y;
                this._z = vector.z;
                return this;
            }
            /***
             Clone this vector
               returns:
             @vector (Vec3): cloned vector
             ***/

        }, {
            key: "clone",
            value: function clone() {
                return new Vec3(this._x, this._y, this._z);
            }
            /***
             Merges this vector with a vector when values are NaN. Mostly used internally.
               params:
             @vector (Vec3): vector to use for sanitization
               returns:
             @vector (Vec3): sanitized vector
             ***/

        }, {
            key: "sanitizeNaNValuesWith",
            value: function sanitizeNaNValuesWith(vector) {
                this._x = isNaN(this._x) ? vector.x : parseFloat(this._x);
                this._y = isNaN(this._y) ? vector.y : parseFloat(this._y);
                this._z = isNaN(this._z) ? vector.z : parseFloat(this._z);
                return this;
            }
            /***
             Apply max values to this vector
               params:
             @vector (Vec3): vector representing max values
               returns:
             @vector (Vec3): vector with max values applied
             ***/

        }, {
            key: "max",
            value: function max(vector) {
                this._x = Math.max(this._x, vector.x);
                this._y = Math.max(this._y, vector.y);
                this._z = Math.max(this._z, vector.z);
                return this;
            }
            /***
             Apply min values to this vector
               params:
             @vector (Vec3): vector representing min values
               returns:
             @vector (Vec3): vector with min values applied
             ***/

        }, {
            key: "min",
            value: function min(vector) {
                this._x = Math.min(this._x, vector.x);
                this._y = Math.min(this._y, vector.y);
                this._z = Math.min(this._z, vector.z);
                return this;
            }
            /***
             Checks if 2 vectors are equal
               returns:
             @isEqual (bool): whether the vectors are equals or not
             ***/

        }, {
            key: "equals",
            value: function equals(vector) {
                return this._x === vector.x && this._y === vector.y && this._z === vector.z;
            }
            /***
             Normalize this vector
               returns:
             @this (Vec3): normalized vector
             ***/

        }, {
            key: "normalize",
            value: function normalize() {
                // normalize
                var len = this._x * this._x + this._y * this._y + this._z * this._z;

                if (len > 0) {
                    len = 1 / Math.sqrt(len);
                }

                this._x *= len;
                this._y *= len;
                this._z *= len;
                return this;
            }
            /***
             Calculates the dot product of 2 vectors
               returns:
             @dotProduct (float): dot product of the 2 vectors
             ***/

        }, {
            key: "dot",
            value: function dot(vector) {
                return this._x * vector.x + this._y * vector.y + this._z * vector.z;
            }
            /***
             Apply a matrix 4 to a point (vec3)
             Useful to convert a point position from plane local world to webgl space using projection view matrix for example
             Source code from: http://glmatrix.net/docs/vec3.js.html
               params :
             @matrix (array): 4x4 matrix used
               returns :
             @this (Vec3): this vector after matrix application
             ***/

        }, {
            key: "applyMat4",
            value: function applyMat4(matrix) {
                var x = this._x,
                    y = this._y,
                    z = this._z;
                var mArray = matrix.elements;
                var w = mArray[3] * x + mArray[7] * y + mArray[11] * z + mArray[15];
                w = w || 1;
                this._x = (mArray[0] * x + mArray[4] * y + mArray[8] * z + mArray[12]) / w;
                this._y = (mArray[1] * x + mArray[5] * y + mArray[9] * z + mArray[13]) / w;
                this._z = (mArray[2] * x + mArray[6] * y + mArray[10] * z + mArray[14]) / w;
                return this;
            }
            /***
             Apply a quaternion (rotation in 3D space) to this vector
               params :
             @quaternion (Quat): quaternion to use
               returns :
             @this (Vec3): this vector after applying the transformation
             ***/

        }, {
            key: "applyQuat",
            value: function applyQuat(quaternion) {
                var x = this._x,
                    y = this._y,
                    z = this._z;
                var qx = quaternion.elements[0],
                    qy = quaternion.elements[1],
                    qz = quaternion.elements[2],
                    qw = quaternion.elements[3]; // calculate quat * vector

                var ix = qw * x + qy * z - qz * y;
                var iy = qw * y + qz * x - qx * z;
                var iz = qw * z + qx * y - qy * x;
                var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

                this._x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                this._y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                this._z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
                return this;
            }
            /***
             Project 3D coordinate to 2D point
               params:
             @camera (Camera): camera to use for projection
             ***/

        }, {
            key: "project",
            value: function project(camera) {
                this.applyMat4(camera.viewMatrix).applyMat4(camera.projectionMatrix);
                return this;
            }
            /***
             Unproject 2D point to 3D coordinate
               params:
             @camera (Camera): camera to use for projection
             ***/

        }, {
            key: "unproject",
            value: function unproject(camera) {
                this.applyMat4(camera.projectionMatrix.getInverse()).applyMat4(camera.worldMatrix);
                return this;
            }
        }]);

        return Vec3;
    }();
    /***
     Texture class objects used by render targets, shader passes and planes.
       params:
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
       @isFBOTexture (bool): Whether this texture is used by a render target/frame buffer object. Default to false
     @fromTexture (bool): Whether this texture should copy another texture right from init (and avoid creating a new webgl texture). Default to false
     @loader (TextureLoader class object): loader used to create that texture and load its source. Default to null
       @sampler (string): the texture sampler's name that will be used in the shaders
       @floatingPoint (string): texture floating point to apply. Could be "float", "half-float" or "none". Default to "none"
       @premultiplyAlpha (bool): Whether this texture should handle premultiplied alpha. Default to false
     @anisotropy (int): Texture anisotropy (see https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic). Default to 1
     @generateMipmap (bool): Whether to generate texture mipmaps (see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/generateMipmap). Default to true except for frame buffer objects textures.
       see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter
     @wrapS (GLenum): WebGL constant specifying the texture wrapping function for the texture coordinate S
     @wrapT (GLenum): WebGL constant specifying the texture wrapping function for the texture coordinate T
     @minFilter (GLenum): WebGL constant specifying the texture minification filter
     @magFilter (GLenum): WebGL constant specifying the texture magnification filter
       returns:
     @this: our newly created Texture class object
     ***/
    // avoid reinstancing those during runtime


    var tempVec2 = new Vec2();
    var tempVec3 = new Vec3();
    var textureTranslation = new Mat4();

    var Texture = /*#__PURE__*/function () {
        function Texture(renderer) {
            var _this12 = this;

            var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref6$isFBOTexture = _ref6.isFBOTexture,
                isFBOTexture = _ref6$isFBOTexture === void 0 ? false : _ref6$isFBOTexture,
                _ref6$fromTexture = _ref6.fromTexture,
                fromTexture = _ref6$fromTexture === void 0 ? false : _ref6$fromTexture,
                loader = _ref6.loader,
                sampler = _ref6.sampler,
                _ref6$floatingPoint = _ref6.floatingPoint,
                floatingPoint = _ref6$floatingPoint === void 0 ? "none" : _ref6$floatingPoint,
                _ref6$premultiplyAlph = _ref6.premultiplyAlpha,
                premultiplyAlpha = _ref6$premultiplyAlph === void 0 ? false : _ref6$premultiplyAlph,
                _ref6$anisotropy = _ref6.anisotropy,
                anisotropy = _ref6$anisotropy === void 0 ? 1 : _ref6$anisotropy,
                _ref6$generateMipmap = _ref6.generateMipmap,
                generateMipmap = _ref6$generateMipmap === void 0 ? null : _ref6$generateMipmap,
                wrapS = _ref6.wrapS,
                wrapT = _ref6.wrapT,
                minFilter = _ref6.minFilter,
                magFilter = _ref6.magFilter;

            _classCallCheck(this, Texture);

            this.type = "Texture"; // we could pass our curtains object OR our curtains renderer object

            renderer = renderer && renderer.renderer || renderer;

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                if (!renderer.production) throwError(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = this.renderer.gl;
            this.uuid = generateUUID(); // texture parameters

            this._globalParameters = {
                // global gl context parameters
                unpackAlignment: 4,
                flipY: !isFBOTexture,
                premultiplyAlpha: false,
                shouldPremultiplyAlpha: premultiplyAlpha,
                // texImage2D properties
                floatingPoint: floatingPoint,
                type: this.gl.UNSIGNED_BYTE,
                internalFormat: this.gl.RGBA,
                format: this.gl.RGBA
            };
            this.parameters = {
                // per texture parameters
                anisotropy: anisotropy,
                generateMipmap: generateMipmap,
                wrapS: wrapS || this.gl.CLAMP_TO_EDGE,
                wrapT: wrapT || this.gl.CLAMP_TO_EDGE,
                minFilter: minFilter || this.gl.LINEAR,
                magFilter: magFilter || this.gl.LINEAR,
                _shouldUpdate: true
            }; // per texture state

            this._initState(); // is it a frame buffer object texture?
            // if it's not, type will change when the source will be loaded


            this.sourceType = isFBOTexture ? "fbo" : "empty"; // whether to use cache for image textures

            this._useCache = true;
            this._samplerName = sampler; // prepare texture sampler

            this._sampler = {
                isActive: false,
                isTextureBound: false,
                texture: this.gl.createTexture() // always create a gl texture

            }; // we will always declare a texture matrix

            this._textureMatrix = {
                matrix: new Mat4(),
                isActive: false
            }; // actual size will be set later on

            this._size = {
                width: 1,
                height: 1
            };
            this.scale = new Vec2(1);
            this.scale.onChange(function () {
                return _this12.resize();
            });
            this.offset = new Vec2();
            this.offset.onChange(function () {
                return _this12.resize();
            }); // source loading and GPU uploading flags

            this._loader = loader;
            this._sourceLoaded = false;
            this._uploaded = false; // _willUpdate and shouldUpdate property are set to false by default
            // we will handle that in the setSource() method for videos and canvases

            this._willUpdate = false;
            this.shouldUpdate = false; // if we need to force a texture update

            this._forceUpdate = false; // custom user properties

            this.userData = {}; // useful flag to avoid binding texture that does not belong to current context

            this._canDraw = false; // is it set from an existing texture?

            if (fromTexture) {
                this._copyOnInit = true;
                this._copiedFrom = fromTexture; // everything else will be done when adding a parent to that texture

                return;
            }

            this._copyOnInit = false; // init our texture

            this._initTexture();
        }
        /***
         Init per-texture parameters state
         Called on init and on context restoration to force parameters settings
         ***/


        _createClass(Texture, [{
            key: "_initState",
            value: function _initState() {
                this._state = {
                    anisotropy: 1,
                    generateMipmap: false,
                    wrapS: null,
                    wrapT: null,
                    minFilter: null,
                    magFilter: this.gl.LINEAR // default to gl.LINEAR

                };
            }
            /***
             Init our texture object
             ***/

        }, {
            key: "_initTexture",
            value: function _initTexture() {
                // bind the texture the target (TEXTURE_2D) of the active texture unit.
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture);

                if (this.sourceType === "empty") {
                    // avoid flipY on non DOM elements
                    this._globalParameters.flipY = false; // update global parameters before drawing an empty texture

                    this._updateGlobalTexParameters(); // draw a black plane before the real texture's content has been loaded


                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
                    this._canDraw = true;
                }
            }
            /*** RESTORING CONTEXT ***/

            /***
             Restore a WebGL texture that is a copy
             Depending on whether it's a copy from start or not, just reset its uniforms or run the full init
             And finally copy our original texture back again
             ***/

        }, {
            key: "_restoreFromTexture",
            value: function _restoreFromTexture() {
                // init again if needed
                if (!this._copyOnInit) {
                    this._initTexture();
                } // a texture shouldn't be restored if it does not have a parent
                // since it's always the parent that calls the _restoreContext() method


                if (this._parent) {
                    // set uniforms again
                    this._setTextureUniforms(); // update the texture matrix uniform as well


                    this._setSize();
                } // copy our texture again


                this.copy(this._copiedFrom);
                this._canDraw = true;
            }
            /***
             Restore our WebGL texture
             If it is an original texture, just re run the init function and eventually reset its source
             If it is a texture set from another texture, wait for the original texture to be ready first
             ***/

        }, {
            key: "_restoreContext",
            value: function _restoreContext() {
                var _this13 = this;

                // avoid binding that texture before reseting it
                this._canDraw = false; // reinit sampler and texture matrix

                this._sampler.texture = this.gl.createTexture();
                this._sampler.isActive = false;
                this._sampler.isTextureBound = false;
                this._textureMatrix.isActive = false;

                this._initState(); // force mip map regeneration if needed


                this._state.generateMipmap = false;
                this.parameters._shouldUpdate = true; // this is an original texture, reset it right away

                if (!this._copiedFrom) {
                    this._initTexture();

                    if (this._parent) {
                        this._setParent();
                    }

                    if (this.source) {
                        this.setSource(this.source); // cache again if it is an image
                        // also since it's an image it has been uploaded in setSource()

                        if (this.sourceType === "image") {
                            this.renderer.cache.addTexture(this);
                        } else {
                            // force update
                            this.needUpdate();
                        }
                    }

                    this._canDraw = true;
                } else {
                    // wait for the original texure to be ready before attempting to restore the copy
                    var queue = this.renderer.nextRender.add(function () {
                        if (_this13._copiedFrom._canDraw) {
                            _this13._restoreFromTexture(); // remove from callback queue


                            queue.keep = false;
                        }
                    }, true);
                }
            }
            /*** ADD PARENT ***/

            /***
             Adds a parent to a texture
             Sets its index, its parent and add it to the parent textures array as well
             Then runs _setParent() to set the size and uniforms if needed
             ***/

        }, {
            key: "addParent",
            value: function addParent(parent) {
                if (!parent || parent.type !== "Plane" && parent.type !== "PingPongPlane" && parent.type !== "ShaderPass" && parent.type !== "RenderTarget") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": cannot add texture as a child of ", parent, " because it is not a valid parent");
                    }

                    return;
                } // add parent property


                this._parent = parent; // update parent textures array

                this.index = this._parent.textures.length;

                this._parent.textures.push(this); // now set its parent for real


                this._setParent();
            }
            /***
             Sets the parent
             Basically sets the uniforms names and locations and sizes
             ***/

        }, {
            key: "_setParent",
            value: function _setParent() {
                var _this14 = this;

                // prepare texture sampler
                this._sampler.name = this._samplerName || "uSampler" + this.index; // we will always declare a texture matrix

                this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index; // if the parent has a program it means its not a render target texture

                if (this._parent._program) {
                    if (!this._parent._program.compiled) {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": Unable to create the texture because the program is not valid");
                        }

                        return;
                    } // set uniform


                    this._setTextureUniforms();

                    if (this._copyOnInit) {
                        // wait for original texture to be ready before copying it
                        var waitForOriginalTexture = this.renderer.nextRender.add(function () {
                            if (_this14._copiedFrom._canDraw && _this14._copiedFrom._uploaded) {
                                _this14.copy(_this14._copiedFrom);

                                waitForOriginalTexture.keep = false;
                            }
                        }, true); // we're done!

                        return;
                    }

                    if (!this.source) {
                        // set its size based on parent element size for now
                        this._size = {
                            width: this._parent._boundingRect.document.width,
                            height: this._parent._boundingRect.document.height
                        };
                    } else if (this._parent.loader) {
                        // we're adding a parent to a texture that already has a source
                        // it means the source should have been loaded before the parent was set
                        // add it to the right asset array if needed
                        this._parent.loader._addSourceToParent(this.source, this.sourceType);
                    }

                    this._setSize();
                } else if (this._parent.type === "RenderTarget") {
                    // its a render target texture, it has no uniform location and no texture matrix
                    this._size = {
                        width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                        height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
                    }; // updload to gpu

                    this._upload(); // update render texture parameters because it will never be drawn (hence not called)


                    this._updateTexParameters();

                    this._canDraw = true;
                }
            }
            /***
             Checks if this texture has a parent
               return:
             @hasParent (bool): whether this texture has a parent or not
             ***/

        }, {
            key: "hasParent",
            value: function hasParent() {
                return !!this._parent;
            }
            /*** SEND DATA TO THE GPU ***/

            /***
             Check if our textures is effectively used in our shaders
             If so, set it to active, get its uniform locations and bind it to our texture unit
             ***/

        }, {
            key: "_setTextureUniforms",
            value: function _setTextureUniforms() {
                var _this15 = this;

                // check if our texture is used in our program shaders
                // if so, get its uniform locations and bind it to our program
                var activeUniforms = this._parent._program.activeUniforms;

                for (var i = 0; i < activeUniforms.textures.length; i++) {
                    if (activeUniforms.textures[i] === this._sampler.name) {
                        // this texture is active
                        this._sampler.isActive = true; // use the program and get our sampler and texture matrices uniforms

                        this.renderer.useProgram(this._parent._program); // set our texture sampler uniform

                        this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name); // set texture matrix uniform location only if active

                        var isTextureMatrixActive = activeUniforms.textureMatrices.find(function (textureMatrix) {
                            return textureMatrix === _this15._textureMatrix.name;
                        });

                        if (isTextureMatrixActive) {
                            this._textureMatrix.isActive = true;
                            this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name);
                        } // tell the shader we bound the texture to our indexed texture unit


                        this.gl.uniform1i(this._sampler.location, this.index);
                    }
                }
            }
            /***
             This copies an already existing Texture object to our texture
               params:
             @texture (Texture): texture to set from
             ***/

        }, {
            key: "copy",
            value: function copy(texture) {
                if (!texture || texture.type !== "Texture") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Unable to set the texture from texture:", texture);
                    }

                    return;
                } // copy states


                this._globalParameters = Object.assign({}, texture._globalParameters);
                this._state = Object.assign({}, texture._state); // regenerate mips if needed

                this.parameters.generateMipmap = texture.parameters.generateMipmap;
                this._state.generateMipmap = null; // copy source

                this._size = texture._size; // trigger loaded callback if needed

                if (!this._sourceLoaded && texture._sourceLoaded) {
                    this._onSourceLoadedCallback && this._onSourceLoadedCallback();
                }

                this._sourceLoaded = texture._sourceLoaded; // trigger uploaded callback if needed

                if (!this._uploaded && texture._uploaded) {
                    this._onSourceUploadedCallback && this._onSourceUploadedCallback();
                }

                this._uploaded = texture._uploaded;
                this.sourceType = texture.sourceType;
                this.source = texture.source;
                this._videoFrameCallbackID = texture._videoFrameCallbackID; // copy texture

                this._sampler.texture = texture._sampler.texture; // keep a track from the original one

                this._copiedFrom = texture; // update its texture matrix if needed and we're good to go!

                if (this._parent && this._parent._program && (!this._canDraw || !this._textureMatrix.matrix)) {
                    this._setSize();

                    this._canDraw = true;
                }

                this._updateTexParameters(); // force rendering


                this.renderer.needRender();
            }
            /*** LOADING SOURCES ***/

            /***
             This uses our source as texture
               params:
             @source (images/video/canvas): either an image, a video or a canvas
             ***/

        }, {
            key: "setSource",
            value: function setSource(source) {
                var _this16 = this;

                // fire callback during load (useful for a loader)
                if (!this._sourceLoaded) {
                    // texture source loaded callback
                    this.renderer.nextRender.add(function () {
                        return _this16._onSourceLoadedCallback && _this16._onSourceLoadedCallback();
                    });
                } // get new source type based on source tag


                var sourceType = source.tagName.toUpperCase() === "IMG" ? "image" : source.tagName.toLowerCase(); // somehow if the texture type changes from image to video or canvas, the cache won't work anymore

                if (sourceType === "video" || sourceType === "canvas") {
                    this._useCache = false;
                } // check for cache


                if (this._useCache) {
                    var cachedTexture = this.renderer.cache.getTextureFromSource(source); // if we have a cached texture, just copy it

                    if (cachedTexture && cachedTexture.uuid !== this.uuid) {
                        // force texture uploaded callback
                        if (!this._uploaded) {
                            // GPU uploading callback
                            this.renderer.nextRender.add(function () {
                                return _this16._onSourceUploadedCallback && _this16._onSourceUploadedCallback();
                            });
                            this._uploaded = true;
                        }

                        this.copy(cachedTexture);
                        this.resize();
                        return;
                    }
                }

                if (this.sourceType === "empty" || this.sourceType !== sourceType) {
                    if (sourceType === "video") {
                        // a video should be updated by default
                        this._willUpdate = false;
                        this.shouldUpdate = true;
                    } else if (sourceType === "canvas") {
                        // a canvas could change each frame so we need to update it by default
                        this._willUpdate = true;
                        this.shouldUpdate = true;
                    } else if (sourceType === "image") {
                        this._willUpdate = false;
                        this.shouldUpdate = false;
                    } else {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": this HTML tag could not be converted into a texture:", source.tagName);
                        }

                        return;
                    }
                } // set new source


                this.source = source;
                this.sourceType = sourceType;
                this._size = {
                    width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                    height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                }; // our source is loaded now

                this._sourceLoaded = true; // no need to set WebGL active texture unit here, we'll do it at run time for each texture
                // binding the texture is enough

                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture);
                this.resize();
                this._globalParameters.flipY = true;
                this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha; // upload our webgl texture only if it is an image
                // canvas and video textures will be updated anyway in the rendering loop
                // thanks to the shouldUpdate and _willUpdate flags

                if (this.sourceType === "image") {
                    // generate mip maps if they have not been explicitly disabled
                    this.parameters.generateMipmap = this.parameters.generateMipmap || this.parameters.generateMipmap === null;
                    this.parameters._shouldUpdate = this.parameters.generateMipmap;
                    this._state.generateMipmap = false;

                    this._upload();
                } // update scene


                this.renderer.needRender();
            }
            /*** TEXTURE PARAMETERS ***/

            /***
             Updates textures parameters that depends on global WebGL context state
             Typically unpacking, flipY and premultiplied alpha
             Usually called before uploading a texture to the GPU
             ***/

        }, {
            key: "_updateGlobalTexParameters",
            value: function _updateGlobalTexParameters() {
                // unpack alignment
                if (this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment) {
                    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment);
                    this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment;
                } // flip Y only if source is not empty


                if (this.renderer.state.flipY !== this._globalParameters.flipY) {
                    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY);
                    this.renderer.state.flipY = this._globalParameters.flipY;
                } // premultiplied alpha only if source is not empty


                if (this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha) {
                    this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha);
                    this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha;
                } // floating point textures


                if (this._globalParameters.floatingPoint === "half-float") {
                    if (this.renderer._isWebGL2 && this.renderer.extensions['EXT_color_buffer_float']) {
                        this._globalParameters.internalFormat = this.gl.RGBA16F;
                        this._globalParameters.type = this.gl.HALF_FLOAT;
                    } else if (this.renderer.extensions['OES_texture_half_float']) {
                        this._globalParameters.type = this.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES;
                    } else if (!this.renderer.production) {
                        throwWarning(this.type + ": could not use half-float textures because the extension is not available");
                    }
                } else if (this._globalParameters.floatingPoint === "float") {
                    if (this.renderer._isWebGL2 && this.renderer.extensions['EXT_color_buffer_float']) {
                        this._globalParameters.internalFormat = this.gl.RGBA16F;
                        this._globalParameters.type = this.gl.FLOAT;
                    } else if (this.renderer.extensions['OES_texture_float']) {
                        this._globalParameters.type = this.renderer.extensions['OES_texture_half_float'].FLOAT;
                    } else if (!this.renderer.production) {
                        throwWarning(this.type + ": could not use float textures because the extension is not available");
                    }
                }
            }
            /***
             Updates per-textures parameters
             Wrapping, filters, anisotropy and mipmaps generation
             Usually called after uploading a texture to the GPU
             ***/

        }, {
            key: "_updateTexParameters",
            value: function _updateTexParameters() {
                // be sure we're updating the right texture
                if (this.index && this.renderer.state.activeTexture !== this.index) {
                    this._bindTexture();
                } // wrapS


                if (this.parameters.wrapS !== this._state.wrapS) {
                    if (!this.renderer._isWebGL2 && (!isPowerOf2(this._size.width) || !isPowerOf2(this._size.height))) {
                        this.parameters.wrapS = this.gl.CLAMP_TO_EDGE;
                    } // handle wrong wrapS values


                    if (this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT) {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead");
                        }

                        this.parameters.wrapS = this.gl.CLAMP_TO_EDGE;
                    }

                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS);
                    this._state.wrapS = this.parameters.wrapS;
                } // wrapT


                if (this.parameters.wrapT !== this._state.wrapT) {
                    if (!this.renderer._isWebGL2 && (!isPowerOf2(this._size.width) || !isPowerOf2(this._size.height))) {
                        this.parameters.wrapT = this.gl.CLAMP_TO_EDGE;
                    } // handle wrong wrapT values


                    if (this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT) {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead");
                        }

                        this.parameters.wrapT = this.gl.CLAMP_TO_EDGE;
                    }

                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT);
                    this._state.wrapT = this.parameters.wrapT;
                } // generate mip map only if it has a source


                if (this.parameters.generateMipmap && !this._state.generateMipmap && this.source) {
                    if (!this.renderer._isWebGL2 && (!isPowerOf2(this._size.width) || !isPowerOf2(this._size.height))) {
                        this.parameters.generateMipmap = false;
                    } else {
                        this.gl.generateMipmap(this.gl.TEXTURE_2D);
                    }

                    this._state.generateMipmap = this.parameters.generateMipmap;
                } // min filter


                if (this.parameters.minFilter !== this._state.minFilter) {
                    // WebGL1 and non PO2
                    if (!this.renderer._isWebGL2 && (!isPowerOf2(this._size.width) || !isPowerOf2(this._size.height))) {
                        this.parameters.minFilter = this.gl.LINEAR;
                    } // at this point if generateMipmap is null it means we will generate them later on


                    if (!this.parameters.generateMipmap && this.parameters.generateMipmap !== null) {
                        this.parameters.minFilter = this.gl.LINEAR;
                    } // handle wrong minFilter values


                    if (this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR) {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead");
                        }

                        this.parameters.minFilter = this.gl.LINEAR;
                    }

                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter);
                    this._state.minFilter = this.parameters.minFilter;
                } // mag filter


                if (this.parameters.magFilter !== this._state.magFilter) {
                    if (!this.renderer._isWebGL2 && (!isPowerOf2(this._size.width) || !isPowerOf2(this._size.height))) {
                        this.parameters.magFilter = this.gl.LINEAR;
                    } // handle wrong magFilter values


                    if (this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST) {
                        if (!this.renderer.production) {
                            throwWarning(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead");
                        }

                        this.parameters.magFilter = this.gl.LINEAR;
                    }

                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter);
                    this._state.magFilter = this.parameters.magFilter;
                } // anisotropy


                var anisotropyExt = this.renderer.extensions['EXT_texture_filter_anisotropic'];

                if (anisotropyExt && this.parameters.anisotropy !== this._state.anisotropy) {
                    var max = this.gl.getParameter(anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, max));
                    this.gl.texParameterf(this.gl.TEXTURE_2D, anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy);
                    this._state.anisotropy = this.parameters.anisotropy;
                }
            }
            /***
             Sets the texture wrapping for the texture coordinate S
               params:
             @wrapS (GLenum): WebGL constant specifying the texture wrapping function for the texture coordinate S
             ***/

        }, {
            key: "setWrapS",
            value: function setWrapS(wrapS) {
                if (this.parameters.wrapS !== wrapS) {
                    this.parameters.wrapS = wrapS;
                    this.parameters._shouldUpdate = true;
                }
            }
            /***
             Sets the texture wrapping for the texture coordinate T
               params:
             @wrapT (GLenum): WebGL constant specifying the texture wrapping function for the texture coordinate T
             ***/

        }, {
            key: "setWrapT",
            value: function setWrapT(wrapT) {
                if (this.parameters.wrapT !== wrapT) {
                    this.parameters.wrapT = wrapT;
                    this.parameters._shouldUpdate = true;
                }
            }
            /***
             Sets the texture minifaction filter value
               params:
             @minFilter (GLenum): WebGL constant specifying the texture minification filter
             ***/

        }, {
            key: "setMinFilter",
            value: function setMinFilter(minFilter) {
                if (this.parameters.minFilter !== minFilter) {
                    this.parameters.minFilter = minFilter;
                    this.parameters._shouldUpdate = true;
                }
            }
            /***
             Sets the texture magnifaction filter value
               params:
             @magFilter (GLenum): WebGL constant specifying the texture magnifaction filter
             ***/

        }, {
            key: "setMagFilter",
            value: function setMagFilter(magFilter) {
                if (this.parameters.magFilter !== magFilter) {
                    this.parameters.magFilter = magFilter;
                    this.parameters._shouldUpdate = true;
                }
            }
            /***
             Sets the texture anisotropy
               params:
             @anisotropy (int): Texture anisotropy value
             ***/

        }, {
            key: "setAnisotropy",
            value: function setAnisotropy(anisotropy) {
                anisotropy = isNaN(anisotropy) ? this.parameters.anisotropy : anisotropy;

                if (this.parameters.anisotropy !== anisotropy) {
                    this.parameters.anisotropy = anisotropy;
                    this.parameters._shouldUpdate = true;
                }
            }
            /***
             This forces a texture to be updated on the next draw call
             ***/

        }, {
            key: "needUpdate",
            value: function needUpdate() {
                this._forceUpdate = true;
            }
            /***
             This uses the requestVideoFrameCallback API to update the texture each time a new frame is displayed
             ***/

        }, {
            key: "_videoFrameCallback",
            value: function _videoFrameCallback() {
                var _this17 = this;

                this._willUpdate = true;
                this.source.requestVideoFrameCallback(function () {
                    return _this17._videoFrameCallback();
                });
            }
            /***
             This updloads our texture to the GPU
             Called on init or inside our drawing loop if shouldUpdate property is set to true
             Typically used by videos or canvas
             ***/

        }, {
            key: "_upload",
            value: function _upload() {
                var _this18 = this;

                // set parameters that need to be set before texture uploading
                this._updateGlobalTexParameters();

                if (this.source) {
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source);
                } else if (this.sourceType === "fbo") {
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null);
                } // texture has been uploaded


                if (!this._uploaded) {
                    // GPU uploading callback
                    this.renderer.nextRender.add(function () {
                        return _this18._onSourceUploadedCallback && _this18._onSourceUploadedCallback();
                    });
                    this._uploaded = true;
                }
            }
            /*** TEXTURE SIZINGS ***/

            /***
             This is used to calculate how to crop/center an texture
               returns:
             @sizes (obj): an object containing plane sizes, source sizes and x and y offset to center the source in the plane
             ***/

        }, {
            key: "_getSizes",
            value: function _getSizes() {
                // if this is a fbo texture, its size is the same as its parent
                if (this.sourceType === "fbo") {
                    return {
                        parentWidth: this._parent._boundingRect.document.width,
                        parentHeight: this._parent._boundingRect.document.height,
                        sourceWidth: this._parent._boundingRect.document.width,
                        sourceHeight: this._parent._boundingRect.document.height,
                        xOffset: 0,
                        yOffset: 0
                    };
                } // remember our ShaderPass objects don't have a scale property


                var scale = this._parent.scale ? tempVec2.set(this._parent.scale.x, this._parent.scale.y) : tempVec2.set(1, 1);
                var parentWidth = this._parent._boundingRect.document.width * scale.x;
                var parentHeight = this._parent._boundingRect.document.height * scale.y;
                var sourceWidth = this._size.width;
                var sourceHeight = this._size.height;
                var sourceRatio = sourceWidth / sourceHeight;
                var parentRatio = parentWidth / parentHeight; // center image in its container

                var xOffset = 0;
                var yOffset = 0;

                if (parentRatio > sourceRatio) {
                    // means parent is larger
                    yOffset = Math.min(0, parentHeight - parentWidth * (1 / sourceRatio));
                } else if (parentRatio < sourceRatio) {
                    // means parent is taller
                    xOffset = Math.min(0, parentWidth - parentHeight * sourceRatio);
                }

                return {
                    parentWidth: parentWidth,
                    parentHeight: parentHeight,
                    sourceWidth: sourceWidth,
                    sourceHeight: sourceHeight,
                    xOffset: xOffset,
                    yOffset: yOffset
                };
            }
            /***
             Set the texture scale and then update its matrix
               params:
             @scale (Vec2 object): scale to apply on X and Y axes
             ***/

        }, {
            key: "setScale",
            value: function setScale(scale) {
                if (!scale.type || scale.type !== "Vec2") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", scale);
                    }

                    return;
                }

                scale.sanitizeNaNValuesWith(this.scale).max(tempVec2.set(0.001, 0.001));

                if (!scale.equals(this.scale)) {
                    this.scale.copy(scale);
                    this.resize();
                }
            }
        }, {
            key: "setOffset",
            value: function setOffset(offset) {
                if (!offset.type || offset.type !== "Vec2") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale);
                    }

                    return;
                }

                offset.sanitizeNaNValuesWith(this.offset);

                if (!offset.equals(this.offset)) {
                    this.offset.copy(offset);
                    this.resize();
                }
            }
            /***
             Gets our texture and parent sizes and tells our texture matrix to update based on those values
             ***/

        }, {
            key: "_setSize",
            value: function _setSize() {
                // if we need to update the texture matrix uniform
                if (this._parent && this._parent._program) {
                    var sizes = this._getSizes(); // always update texture matrix anyway


                    this._updateTextureMatrix(sizes);
                }
            }
            /***
             This is used to crop/center a texture
             If the texture is using texture matrix then we just have to update its matrix
             If it is a render pass texture we also upload the texture with its new size on the GPU
             ***/

        }, {
            key: "resize",
            value: function resize() {
                if (this.sourceType === "fbo") {
                    // update size based on parent sizes (RenderTarget or ShaderPass)
                    this._size = {
                        width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
                        height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
                    }; // reupload only if its not a texture set from another texture (means its a RenderTarget texture)

                    if (!this._copiedFrom) {
                        this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture);
                        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null);
                    }
                } else if (this.source) {
                    // reset texture sizes (useful for canvas because their dimensions might change on resize)
                    this._size = {
                        width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                        height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                    };
                }

                this._setSize();
            }
            /***
             This updates our textures matrix uniform based on plane and sources sizes
               params:
             @sizes (object): object containing plane sizes, source sizes and x and y offset to center the source in the plane
             ***/

        }, {
            key: "_updateTextureMatrix",
            value: function _updateTextureMatrix(sizes) {
                // calculate scale to apply to the matrix
                var textureScale = tempVec3.set(sizes.parentWidth / (sizes.parentWidth - sizes.xOffset), sizes.parentHeight / (sizes.parentHeight - sizes.yOffset), 1); // apply texture scale

                textureScale.x /= this.scale.x;
                textureScale.y /= this.scale.y; // translate and scale texture to center it
                // equivalent (but faster) than applying those steps to an identity matrix:
                // translate from [(1 - textureScale.x) / 2 + this.offset.x, (1 - textureScale.y) / 2 + this.offset.y, 0]
                // then apply a scale of [textureScale.x, textureScale.y, 1]

                this._textureMatrix.matrix = textureTranslation.setFromArray([textureScale.x, 0, 0, 0, 0, textureScale.y, 0, 0, 0, 0, 1, 0, (1 - textureScale.x) / 2 + this.offset.x, (1 - textureScale.y) / 2 + this.offset.y, 0, 1]); // update the texture matrix uniform

                this._updateMatrixUniform();
            }
            /***
             This updates our textures matrix GL uniform
             ***/

        }, {
            key: "_updateMatrixUniform",
            value: function _updateMatrixUniform() {
                if (this._textureMatrix.isActive) {
                    this.renderer.useProgram(this._parent._program);
                    this.gl.uniformMatrix4fv(this._textureMatrix.location, false, this._textureMatrix.matrix.elements);
                }
            }
            /***
             This calls our loading callback and set our media as texture source
             ***/

        }, {
            key: "_onSourceLoaded",
            value: function _onSourceLoaded(source) {
                // set the media as our texture source
                this.setSource(source); // add to the cache if needed

                if (this.sourceType === "image") {
                    this.renderer.cache.addTexture(this);
                }
            }
            /*** DRAWING ***/

            /***
             This is used to set the WebGL context active texture and bind it
               params:
             @texture (texture object): Our texture object containing our WebGL texture and its index
             ***/

        }, {
            key: "_bindTexture",
            value: function _bindTexture() {
                if (this._canDraw) {
                    if (this.renderer.state.activeTexture !== this.index) {
                        // tell WebGL we want to affect the texture at the plane's index unit
                        this.gl.activeTexture(this.gl.TEXTURE0 + this.index);
                        this.renderer.state.activeTexture = this.index;
                    } // bind the texture to the plane's index unit


                    this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture); // check for texture binding until we got one

                    if (!this._sampler.isTextureBound) {
                        this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D); // force render

                        this._sampler.isTextureBound && this.renderer.needRender();
                    }
                }
            }
            /***
             This is called to draw the texture
             ***/

        }, {
            key: "_draw",
            value: function _draw() {
                // only draw if the texture is active (used in the shader)
                if (this._sampler.isActive) {
                    // bind the texture
                    this._bindTexture(); // if no videoFrameCallback check if the video is actually really playing


                    if (this.sourceType === "video" && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused) {
                        this._willUpdate = true;
                    }

                    if (this._forceUpdate || this._willUpdate && this.shouldUpdate) {
                        // force mipmaps regeneration if needed
                        this._state.generateMipmap = false;

                        this._upload();
                    } // reset the video willUpdate flag


                    if (this.sourceType === "video") {
                        this._willUpdate = false;
                    }

                    this._forceUpdate = false;
                } // set parameters that need to be set after texture uploading


                if (this.parameters._shouldUpdate) {
                    this._updateTexParameters();

                    this.parameters._shouldUpdate = false;
                }
            }
            /*** EVENTS ***/

            /***
             This is called each time a source has been loaded for the first time
             TODO useless?
               params :
             @callback (function) : a function to execute
               returns :
             @this: our texture to handle chaining
             ***/

        }, {
            key: "onSourceLoaded",
            value: function onSourceLoaded(callback) {
                if (callback) {
                    this._onSourceLoadedCallback = callback;
                }

                return this;
            }
            /***
             This is called each time a texture has been uploaded to the GPU for the first time
               params :
             @callback (function) : a function to execute
               returns :
             @this: our texture to handle chaining
             ***/

        }, {
            key: "onSourceUploaded",
            value: function onSourceUploaded(callback) {
                if (callback) {
                    this._onSourceUploadedCallback = callback;
                }

                return this;
            }
            /*** DESTROYING ***/

            /***
             This is used to destroy a texture and free the memory space
             Usually used on a plane/shader pass/render target removal
               params:
             @force (bool, optional): force the texture to be deleted even if cached
             ***/

        }, {
            key: "_dispose",
            value: function _dispose() {
                var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (this.sourceType === "video" || this.sourceType === "image" && !this.renderer.state.isActive) {
                    // remove event listeners
                    if (this._loader) {
                        this._loader._removeSource(this);
                    } // clear source


                    this.source = null;
                } else if (this.sourceType === "canvas") {
                    // clear all canvas states
                    this.source.width = this.source.width; // clear source

                    this.source = null;
                } // remove its parent


                this._parent = null; // do not delete original texture if this texture is a copy, or image texture if we're not destroying the context

                var shouldDelete = this.gl && !this._copiedFrom && (force || this.sourceType !== "image" || !this.renderer.state.isActive);

                if (shouldDelete) {
                    this._canDraw = false; // if the texture is in our textures cache array, remove it

                    this.renderer.cache.removeTexture(this);
                    this.gl.activeTexture(this.gl.TEXTURE0 + this.index);
                    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
                    this.gl.deleteTexture(this._sampler.texture);
                }
            }
        }]);

        return Texture;
    }();
    /*** TEXTURE LOADER CLASS ***/

    /***
     An asset loader that handles images, videos and canvas loading
     Load the assets and create a Texture class object that will use those assets as sources
       params:
     @renderer (Curtains or Renderer class object): our curtains object OR our curtains renderer object
     @crossOrigin (string, optional): crossorigin policy to use
       returns :
     @this: our TextureLoader element
     ***/
    // TODO load assets with a web worker?


    var TextureLoader = /*#__PURE__*/function () {
        function TextureLoader(renderer) {
            var crossOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "anonymous";

            _classCallCheck(this, TextureLoader);

            this.type = "TextureLoader"; // we could pass our curtains object OR our curtains renderer object

            renderer = renderer && renderer.renderer || renderer; // throw warning if no renderer or webgl context

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                throwError(this.type + ": Renderer WebGL context is undefined", renderer); // return if no gl context

                return;
            } // renderer and webgl context


            this.renderer = renderer;
            this.gl = this.renderer.gl; // crossorigin policy to apply

            this.crossOrigin = crossOrigin; // keep a track of all sources loaded via this loader

            this.elements = [];
        }
        /***
         Keep a track of all sources loaded via this loader with an els array
         This allows to get clean refs to the event listeners to be able to remove them later
           params:
         @source (html element): html image, video or canvas element that has been loaded
         @texture (Texture class object): our newly created texture that will use that source
         @successCallback (function): reference to our success callback
         @errorCallback (function): reference to our error callback
         ***/


        _createClass(TextureLoader, [{
            key: "_addElement",
            value: function _addElement(source, texture, successCallback, errorCallback) {
                var el = {
                    source: source,
                    texture: texture,
                    load: this._sourceLoaded.bind(this, source, texture, successCallback),
                    error: this._sourceLoadError.bind(this, source, errorCallback)
                };
                this.elements.push(el);
                return el;
            }
            /***
             Handles media loading errors
               params:
             @source (html element): html image or video element that has failed to load
             @callback (function): function to execute
             @error (object): loading error
             ***/

        }, {
            key: "_sourceLoadError",
            value: function _sourceLoadError(source, callback, error) {
                // execute callback
                if (callback) {
                    callback(source, error);
                }
            }
            /***
             Handles media loading success
               params:
             @source (html element): html image, video or canvas element that has been loaded
             @texture (Texture class object): our newly created texture that will use that source
             @callback (function): function to execute
             ***/

        }, {
            key: "_sourceLoaded",
            value: function _sourceLoaded(source, texture, callback) {
                var _this19 = this;

                // execute only once
                if (!texture._sourceLoaded) {
                    texture._onSourceLoaded(source); // if this loader has a parent (means its a PlaneTextureLoader)


                    if (this._parent) {
                        // increment plane texture loader
                        this._increment && this._increment();
                        this.renderer.nextRender.add(function () {
                            return _this19._parent._onLoadingCallback && _this19._parent._onLoadingCallback(texture);
                        });
                    } // execute callback


                    if (callback) {
                        callback(texture);
                    }
                }
            }
            /***
             Get the source type based on its file extension if it's a string or it's tag name if its a HTML element
               params:
             @source (html element or string): html image, video, canvas element or source url
               returns :
             @sourceType (string): either "image", "video", "canvas" or null if source type cannot be determined
             ***/

        }, {
            key: "_getSourceType",
            value: function _getSourceType(source) {
                var sourceType;

                if (typeof source === "string") {
                    // from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Supported_image_formats
                    if (source.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) !== null) {
                        sourceType = "image";
                    } else if (source.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) !== null) {
                        sourceType = "video";
                    }
                } else {
                    if (source.tagName.toUpperCase() === "IMG") {
                        sourceType = "image";
                    } else if (source.tagName.toUpperCase() === "VIDEO") {
                        sourceType = "video";
                    } else if (source.tagName.toUpperCase() === "CANVAS") {
                        sourceType = "canvas";
                    }
                }

                return sourceType;
            }
            /***
             Create an image HTML element based on an image source url
               params:
             @source (string): source url
               returns :
             @image (HTML image element): an HTML image element
             ***/

        }, {
            key: "_createImage",
            value: function _createImage(source) {
                // create a new image element if the source specified is a string
                // or if the crossorigin attribute is not specified (avoid potential CORS errors)
                if (typeof source === "string" || !source.hasAttribute("crossOrigin")) {
                    var image = new Image();
                    image.crossOrigin = this.crossOrigin;

                    if (typeof source === "string") {
                        image.src = source;
                    } else {
                        image.src = source.src;
                        source.hasAttribute("data-sampler") && image.setAttribute("data-sampler", source.getAttribute("data-sampler"));
                    }

                    return image;
                } else {
                    // else return source directly to avoid reloading the image
                    return source;
                }
            }
            /***
             Create a video HTML element based on a video source url
               params:
             @source (string): source url
               returns :
             @video (HTML video element): an HTML video element
             ***/

        }, {
            key: "_createVideo",
            value: function _createVideo(source) {
                // create a new video element if the source specified is a string
                // or if the crossorigin attribute is not specified (avoid potential CORS errors)
                if (typeof source === "string" || source.getAttribute("crossOrigin") === null) {
                    var video = document.createElement("video");
                    video.crossOrigin = this.crossOrigin;

                    if (typeof source === "string") {
                        video.src = source;
                    } else {
                        video.src = source.src;
                        source.hasAttribute("data-sampler") && video.setAttribute("data-sampler", source.getAttribute("data-sampler"));
                    }

                    return video;
                } else {
                    // else return source directly to avoid reloading the video
                    return source;
                }
            }
            /***
             This method loads one source
             It checks what type of source it is then use the right loader
               params:
             @source (html element): html image, video or canvas element
             @textureOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when the source has been loaded
             @errorCallback (function): function to execute if the source fails to load
             ***/

        }, {
            key: "loadSource",
            value: function loadSource(source, textureOptions, successCallback, errorCallback) {
                // get source type to use the right loader
                var sourceType = this._getSourceType(source);

                switch (sourceType) {
                    case "image":
                        this.loadImage(source, textureOptions, successCallback, errorCallback);
                        break;

                    case "video":
                        this.loadVideo(source, textureOptions, successCallback, errorCallback);
                        break;

                    case "canvas":
                        this.loadCanvas(source, textureOptions, successCallback);
                        break;

                    default:
                        this._sourceLoadError(source, errorCallback, "this source could not be converted into a texture: " + source);

                        break;
                }
            }
            /***
             This method loads an array of sources by calling loadSource() for each one of them
               params:
             @sources (array of html elements / sources url): array of html images, videos, canvases element or sources url
             @texturesOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when each source has been loaded
             @errorCallback (function): function to execute if a source fails to load
             ***/

        }, {
            key: "loadSources",
            value: function loadSources(sources, texturesOptions, successCallback, errorCallback) {
                for (var i = 0; i < sources.length; i++) {
                    this.loadSource(sources[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             This method loads an image
             Creates a new texture object right away and once the image is loaded it uses it as our WebGL texture
               params:
             @source (image): html image element
             @textureOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when the source has been loaded
             @errorCallback (function): function to execute if the source fails to load
             ***/

        }, {
            key: "loadImage",
            value: function loadImage(source) {
                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;
                // check for cache
                var cachedTexture = this.renderer.cache.getTextureFromSource(source);
                var options = Object.assign({}, textureOptions); // merge texture options with its parent textures options if needed

                if (this._parent) {
                    options = Object.assign(options, this._parent._texturesOptions);
                }

                options.loader = this;

                if (cachedTexture) {
                    options.sampler = typeof source !== "string" && source.hasAttribute("data-sampler") ? source.getAttribute("data-sampler") : options.sampler;
                    options.fromTexture = cachedTexture;

                    var _texture = new Texture(this.renderer, options); // execute source loaded callback directly


                    this._sourceLoaded(cachedTexture.source, _texture, successCallback); // if there's a parent (PlaneTextureLoader) add texture and source to it


                    this._parent && this._addToParent(_texture, cachedTexture.source, "image"); // that's all!

                    return;
                }

                var image = this._createImage(source);

                options.sampler = image.hasAttribute("data-sampler") ? image.getAttribute("data-sampler") : options.sampler; // create a new texture that will use our image later

                var texture = new Texture(this.renderer, options); // add a new entry in our elements array

                var el = this._addElement(image, texture, successCallback, errorCallback); // If the image is in the cache of the browser,
                // the 'load' event might have been triggered
                // before we registered the event handler.


                if (image.complete) {
                    this._sourceLoaded(image, texture, successCallback);
                } else if (image.decode) {
                    image.decode().then(this._sourceLoaded.bind(this, image, texture, successCallback))["catch"](function () {
                        // fallback to classic load & error events
                        image.addEventListener('load', el.load, false);
                        image.addEventListener('error', el.error, false);
                    });
                } else {
                    image.addEventListener('load', el.load, false);
                    image.addEventListener('error', el.error, false);
                } // if there's a parent (PlaneTextureLoader) add texture and source to it


                this._parent && this._addToParent(texture, image, "image");
            }
            /***
             This method loads an array of images by calling loadImage() for each one of them
               params:
             @sources (array of images / images url): array of html images elements or images url
             @texturesOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when each source has been loaded
             @errorCallback (function): function to execute if a source fails to load
             ***/

        }, {
            key: "loadImages",
            value: function loadImages(sources, texturesOptions, successCallback, errorCallback) {
                for (var i = 0; i < sources.length; i++) {
                    this.loadImage(sources[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             This method loads a video
             Creates a new texture object right away and once the video has enough data it uses it as our WebGL texture
               params:
             @source (video): html video element
             @textureOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when the source has been loaded
             @errorCallback (function): function to execute if the source fails to load
             ***/

        }, {
            key: "loadVideo",
            value: function loadVideo(source) {
                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;

                var video = this._createVideo(source);

                video.preload = true;
                video.muted = true;
                video.loop = true;
                video.setAttribute("playsinline", "");
                video.crossOrigin = this.crossOrigin;
                var options = Object.assign({}, textureOptions); // merge texture options with its parent textures options if needed

                if (this._parent) {
                    options = Object.assign(textureOptions, this._parent._texturesOptions);
                }

                options.loader = this;
                options.sampler = video.hasAttribute("data-sampler") ? video.getAttribute("data-sampler") : options.sampler; // create a new texture that will use our video later

                var texture = new Texture(this.renderer, options); // add a new entry in our elements array

                var el = this._addElement(video, texture, successCallback, errorCallback); // handle our loaded data event inside the texture and tell our plane when the video is ready to play


                video.addEventListener('canplaythrough', el.load, false);
                video.addEventListener('error', el.error, false); // If the video is in the cache of the browser,
                // the 'canplaythrough' event might have been triggered
                // before we registered the event handler.

                if (video.readyState >= video.HAVE_FUTURE_DATA && successCallback) {
                    this._sourceLoaded(video, texture, successCallback);
                } // start loading our video


                video.load(); // if there's a parent (PlaneTextureLoader) add texture and source to it

                this._addToParent && this._addToParent(texture, video, "video"); // if requestVideoFrameCallback exist, use it to update our video texture

                if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
                    el.videoFrameCallback = texture._videoFrameCallback.bind(texture);
                    texture._videoFrameCallbackID = video.requestVideoFrameCallback(el.videoFrameCallback);
                }
            }
            /***
             This method loads an array of images by calling loadVideo() for each one of them
               params:
             @sources (array of videos / videos url): array of html videos elements or videos url
             @texturesOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when each source has been loaded
             @errorCallback (function): function to execute if a source fails to load
             ***/

        }, {
            key: "loadVideos",
            value: function loadVideos(sources, texturesOptions, successCallback, errorCallback) {
                for (var i = 0; i < sources.length; i++) {
                    this.loadVideo(sources[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             This method loads a canvas
             Creates a new texture object right away and uses the canvas as our WebGL texture
               params:
             @source (canvas): html canvas element
             @textureOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when the source has been loaded
             ***/

        }, {
            key: "loadCanvas",
            value: function loadCanvas(source) {
                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var options = Object.assign({}, textureOptions); // merge texture options with its parent textures options if needed

                if (this._parent) {
                    options = Object.assign(textureOptions, this._parent._texturesOptions);
                }

                options.loader = this;
                options.sampler = source.hasAttribute("data-sampler") ? source.getAttribute("data-sampler") : options.sampler; // create a new texture that will use our source later

                var texture = new Texture(this.renderer, options); // add a new entry in our elements array

                this._addElement(source, texture, successCallback, null); // canvas are directly loaded


                this._sourceLoaded(source, texture, successCallback); // if there's a parent (PlaneTextureLoader) add texture and source to it


                this._parent && this._addToParent(texture, source, "canvas");
            }
            /***
             This method loads an array of images by calling loadCanvas() for each one of them
               params:
             @sources (array of canvas): array of html canvases elements
             @texturesOptions (object): parameters to apply to the textures, such as sampler name, repeat wrapping, filters, anisotropy...
             @successCallback (function): function to execute when each source has been loaded
             ***/

        }, {
            key: "loadCanvases",
            value: function loadCanvases(sources, texturesOptions, successCallback) {
                for (var i = 0; i < sources.length; i++) {
                    this.loadCanvas(sources[i], texturesOptions, successCallback);
                }
            }
            /*** REMOVING EVENT LISTENERS ***/

            /***
             Cleanly removes a texture source by removing its associated event listeners
               params:
             @texture (Texture class object): The texture that contains our source
             ***/

        }, {
            key: "_removeSource",
            value: function _removeSource(texture) {
                // find our reference el in our els array
                var el = this.elements.find(function (element) {
                    return element.texture.uuid === texture.uuid;
                }); // if we have an element, remove its associated event listeners

                if (el) {
                    if (texture.sourceType === "image") {
                        el.source.removeEventListener("load", el.load, false);
                    } else if (texture.sourceType === "video") {
                        // cancel video frame callback
                        if (el.videoFrameCallback && texture._videoFrameCallbackID) {
                            el.source.cancelVideoFrameCallback(texture._videoFrameCallbackID);
                        }

                        el.source.removeEventListener("canplaythrough", el.load, false); // empty source to properly delete video element and free the memory

                        el.source.pause();
                        el.source.removeAttribute("src");
                        el.source.load();
                    }

                    el.source.removeEventListener("error", el.error, false);
                }
            }
        }]);

        return TextureLoader;
    }();
    /*** PLANE TEXTURE LOADER CLASS ***/

    /***
     Extends our TextureLoader class to add sources loaded count, handle onComplete event
     Also adds the sources and textures to its defined parent
       params:
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
     @parent (Plane or ShaderPass class object): The plane or shader pass that will use this loader
       @sourcesLoaded (int): Number of sources loaded
     @sourcesToLoad (int): Number of initial sources to load
     @complete (bool): Whether the loader has loaded all the initial sources
     @onComplete (function): Callback to execute when all the initial sources have been loaded
       returns :
     @this: our PlaneTextureLoader element
     ***/


    var PlaneTextureLoader = /*#__PURE__*/function (_TextureLoader) {
        _inherits(PlaneTextureLoader, _TextureLoader);

        var _super = _createSuper(PlaneTextureLoader);

        function PlaneTextureLoader(renderer, parent) {
            var _this20;

            var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref7$sourcesLoaded = _ref7.sourcesLoaded,
                sourcesLoaded = _ref7$sourcesLoaded === void 0 ? 0 : _ref7$sourcesLoaded,
                _ref7$sourcesToLoad = _ref7.sourcesToLoad,
                sourcesToLoad = _ref7$sourcesToLoad === void 0 ? 0 : _ref7$sourcesToLoad,
                _ref7$complete = _ref7.complete,
                complete = _ref7$complete === void 0 ? false : _ref7$complete,
                _ref7$onComplete = _ref7.onComplete,
                onComplete = _ref7$onComplete === void 0 ? function () { } : _ref7$onComplete;

            _classCallCheck(this, PlaneTextureLoader);

            _this20 = _super.call(this, renderer, parent.crossOrigin);
            _this20.type = "PlaneTextureLoader";
            _this20._parent = parent;

            if (_this20._parent.type !== "Plane" && _this20._parent.type !== "PingPongPlane" && _this20._parent.type !== "ShaderPass") {
                throwWarning(_this20.type + ": Wrong parent type assigned to this loader");
                _this20._parent = null;
            }

            _this20.sourcesLoaded = sourcesLoaded;
            _this20.sourcesToLoad = sourcesToLoad;
            _this20.complete = complete;
            _this20.onComplete = onComplete;
            return _this20;
        }
        /*** TRACK LOADING ***/

        /***
         Sets the total number of assets to load before firing the onComplete event
           params:
         @size (int): our curtains object OR our curtains renderer object
         ***/


        _createClass(PlaneTextureLoader, [{
            key: "_setLoaderSize",
            value: function _setLoaderSize(size) {
                var _this21 = this;

                this.sourcesToLoad = size;

                if (this.sourcesToLoad === 0) {
                    this.complete = true;
                    this.renderer.nextRender.add(function () {
                        return _this21.onComplete && _this21.onComplete();
                    });
                }
            }
            /***
             Increment the number of sources loaded
             ***/

        }, {
            key: "_increment",
            value: function _increment() {
                var _this22 = this;

                this.sourcesLoaded++;

                if (this.sourcesLoaded >= this.sourcesToLoad && !this.complete) {
                    this.complete = true;
                    this.renderer.nextRender.add(function () {
                        return _this22.onComplete && _this22.onComplete();
                    });
                }
            }
            /*** UPDATE PARENT SOURCES AND TEXTURES ARAYS ***/

            /***
             Adds the source to the correct parent assets array
               params:
             @source (html element): html image, video or canvas element that has been loaded
             @sourceType (string): either "image", "video" or "canvas"
             ***/

        }, {
            key: "_addSourceToParent",
            value: function _addSourceToParent(source, sourceType) {
                // add the source if it is not already in the correct parent assets array
                if (sourceType === "image") {
                    var parentAssetArray = this._parent["images"];
                    var isInParent = parentAssetArray.find(function (element) {
                        return element.src === source.src;
                    });
                    !isInParent && parentAssetArray.push(source);
                } else if (sourceType === "video") {
                    var _parentAssetArray = this._parent["videos"];

                    var _isInParent = _parentAssetArray.find(function (element) {
                        return element.src === source.src;
                    });

                    !_isInParent && _parentAssetArray.push(source);
                } else if (sourceType === "canvas") {
                    var _parentAssetArray2 = this._parent["canvases"];

                    var _isInParent2 = _parentAssetArray2.find(function (element) {
                        return element.isSameNode(source);
                    });

                    !_isInParent2 && _parentAssetArray2.push(source);
                }
            }
            /***
             Adds the loader parent to the newly created texture
             Also adds the source to the correct parent assets array
               params:
             @texture (Texture class object): our newly created texture
             @source (html element): html image, video or canvas element that has been loaded
             @sourceType (string): either "image", "video" or "canvas"
             ***/

        }, {
            key: "_addToParent",
            value: function _addToParent(texture, source, sourceType) {
                this._addSourceToParent(source, sourceType); // add the texture to the parent


                this._parent && texture.addParent(this._parent);
            }
        }]);

        return PlaneTextureLoader;
    }(TextureLoader);
    /***
     Here we create our Mesh object
     We will create an object containing the program that handles shaders and uniforms, a geometry that handles attributes
     Also handles anything that relates to textures creation and basic drawing operations
       params:
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
     @type (string): Object type (should be either "Plane" or "ShaderPass")
       @vertexShaderID (string, optional): the vertex shader script ID. If not specified, will look for a data attribute data-vs-id on the plane HTML element.
     @fragmentShaderID (string, optional): the fragment shader script ID. If not specified, will look for a data attribute data-fs-id on the plane HTML element.
     @vertexShader (string, optional): the vertex shader as a string. Will look for a vertexShaderID if not specified.
     @fragmentShader (string, optional): the fragment shader as a string. Will look for a fragmentShaderID if not specified.
     @uniforms (object, optional): the uniforms that will be passed to the shaders.
     @widthSegments (int, optional): mesh definition along the X axis (1 by default)
     @heightSegments (int, optional): mesh definition along the Y axis (1 by default)
     @renderOrder (int, optional): mesh render order in the scene draw stacks (0 by default)
     @depthTest (bool, optional): if the mesh should enable or disable the depth test. Default to true.
     @cullFace (string, optional): which face of the mesh should be culled. Could either be "back", "front" or "none". Default to "back".
     @texturesOptions (object, optional): options and parameters to apply to the textures loaded by the mesh's loader. See the Texture class object.
     @crossorigin (string, optional): defines the crossOrigin process to load images if any (default to "anonymous").
       returns:
     @this: our Mesh element
     ***/


    var Mesh = /*#__PURE__*/function () {
        function Mesh(renderer) {
            var _this23 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Mesh";

            var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                vertexShaderID = _ref8.vertexShaderID,
                fragmentShaderID = _ref8.fragmentShaderID,
                vertexShader = _ref8.vertexShader,
                fragmentShader = _ref8.fragmentShader,
                _ref8$uniforms = _ref8.uniforms,
                uniforms = _ref8$uniforms === void 0 ? {} : _ref8$uniforms,
                _ref8$widthSegments = _ref8.widthSegments,
                widthSegments = _ref8$widthSegments === void 0 ? 1 : _ref8$widthSegments,
                _ref8$heightSegments = _ref8.heightSegments,
                heightSegments = _ref8$heightSegments === void 0 ? 1 : _ref8$heightSegments,
                _ref8$renderOrder = _ref8.renderOrder,
                renderOrder = _ref8$renderOrder === void 0 ? 0 : _ref8$renderOrder,
                _ref8$depthTest = _ref8.depthTest,
                depthTest = _ref8$depthTest === void 0 ? true : _ref8$depthTest,
                _ref8$cullFace = _ref8.cullFace,
                cullFace = _ref8$cullFace === void 0 ? "back" : _ref8$cullFace,
                _ref8$texturesOptions = _ref8.texturesOptions,
                texturesOptions = _ref8$texturesOptions === void 0 ? {} : _ref8$texturesOptions,
                _ref8$crossOrigin = _ref8.crossOrigin,
                crossOrigin = _ref8$crossOrigin === void 0 ? "anonymous" : _ref8$crossOrigin;

            _classCallCheck(this, Mesh);

            this.type = type; // we could pass our curtains object OR our curtains renderer object

            renderer = renderer && renderer.renderer || renderer;

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", renderer); // no renderer, we can't use the renderer nextRender method

                setTimeout(function () {
                    if (_this23._onErrorCallback) {
                        _this23._onErrorCallback();
                    }
                }, 0);
            }

            this.renderer = renderer;
            this.gl = this.renderer.gl;

            if (!this.gl) {
                if (!this.renderer.production) throwError(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"); // we should assume there's still no renderer here, so no nextRender method

                setTimeout(function () {
                    if (_this23._onErrorCallback) {
                        _this23._onErrorCallback();
                    }
                }, 0); // return if no gl context

                return;
            }

            this._canDraw = false;
            this.renderOrder = renderOrder; // depth test

            this._depthTest = depthTest; // face culling

            this.cullFace = cullFace;

            if (this.cullFace !== "back" && this.cullFace !== "front" && this.cullFace !== "none") {
                this.cullFace = "back";
            } // textures


            this.textures = []; // default textures options depends on the type of Mesh and WebGL context

            this._texturesOptions = Object.assign({
                premultiplyAlpha: false,
                anisotropy: 1,
                floatingPoint: "none",
                // accepts "none", "half-float" or "float"
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, texturesOptions);
            this.crossOrigin = crossOrigin; // handling shaders

            if (!vertexShader && vertexShaderID && document.getElementById(vertexShaderID)) {
                vertexShader = document.getElementById(vertexShaderID).innerHTML;
            }

            if (!fragmentShader && fragmentShaderID && document.getElementById(fragmentShaderID)) {
                fragmentShader = document.getElementById(fragmentShaderID).innerHTML;
            } // init sizes and loader


            this._initMesh(); // geometry
            // set plane attributes


            widthSegments = parseInt(widthSegments);
            heightSegments = parseInt(heightSegments);
            this._geometry = new Geometry(this.renderer, {
                width: widthSegments,
                height: heightSegments // using a special ID for shader passes to avoid weird buffer binding bugs on mac devices
                //id: this.type === "ShaderPass" ? 1 : widthSegments * heightSegments + widthSegments

            });
            this._program = new Program(this.renderer, {
                parent: this,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            });

            if (this._program.compiled) {
                // create and set program uniforms
                this._program.createUniforms(uniforms); // make uniforms accessible directly


                this.uniforms = this._program.uniformsManager.uniforms; // geometry
                // set plane attributes

                this._geometry.setProgram(this._program); // we've added a new object, keep Curtains class in sync with our renderer


                this.renderer.onSceneChange();
            } else {
                this.renderer.nextRender.add(function () {
                    return _this23._onErrorCallback && _this23._onErrorCallback();
                });
            }
        }

        _createClass(Mesh, [{
            key: "_initMesh",
            value: function _initMesh() {
                var _this24 = this;

                this.uuid = generateUUID(); // our Loader Class that will handle all medias loading process

                this.loader = new PlaneTextureLoader(this.renderer, this, {
                    sourcesLoaded: 0,
                    initSourcesToLoad: 0,
                    // will change if there's any texture to load on init
                    complete: false,
                    onComplete: function onComplete() {
                        _this24._onReadyCallback && _this24._onReadyCallback();

                        _this24.renderer.needRender();
                    }
                });
                this.images = [];
                this.videos = [];
                this.canvases = []; // allow the user to add custom data to the plane

                this.userData = {};
                this._canDraw = true;
            }
            /*** RESTORING CONTEXT ***/

            /***
             Used internally to handle context restoration
             ***/

        }, {
            key: "_restoreContext",
            value: function _restoreContext() {
                this._canDraw = false;

                if (this._matrices) {
                    this._matrices = null;
                } // reset the used program based on our previous shaders code strings


                this._program = new Program(this.renderer, {
                    parent: this,
                    vertexShader: this._program.vsCode,
                    fragmentShader: this._program.fsCode
                });

                if (this._program.compiled) {
                    // reset geometry
                    this._geometry.restoreContext(this._program); // create and set program uniforms


                    this._program.createUniforms(this.uniforms); // make uniforms accessible directly


                    this.uniforms = this._program.uniformsManager.uniforms; // program restored callback of Planes and ShaderPasses

                    this._programRestored();
                }
            }
            /***
             This function adds a render target to a mesh
               params :
             @renderTarger (RenderTarget): the render target to add to that mesh
             ***/

        }, {
            key: "setRenderTarget",
            value: function setRenderTarget(renderTarget) {
                if (!renderTarget || renderTarget.type !== "RenderTarget") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", renderTarget);
                    }

                    return;
                }

                if (this.type === "Plane") {
                    // remove from scene stacks
                    this.renderer.scene.removePlane(this);
                }

                this.target = renderTarget;

                if (this.type === "Plane") {
                    // add to scene stacks again
                    this.renderer.scene.addPlane(this);
                }
            }
            /***
             Set the mesh render order to draw it above or behind other meshes
               params :
             @renderOrder (int): new render order to apply: higher number means a mesh is drawn on top of others
             ***/

        }, {
            key: "setRenderOrder",
            value: function setRenderOrder() {
                var renderOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                renderOrder = isNaN(renderOrder) ? this.renderOrder : parseInt(renderOrder);

                if (renderOrder !== this.renderOrder) {
                    this.renderOrder = renderOrder;
                    this.renderer.scene.setPlaneRenderOrder(this);
                }
            }
            /*** IMAGES, VIDEOS AND CANVASES LOADING ***/

            /***
             This method creates a new Texture and adds it to the mesh
               params :
             @textureOptions (object, optional) : Parameters to apply to that texture (see Texture class). Will be merged with the mesh default textures options
               returns :
             @texture: our newly created texture
             ***/

        }, {
            key: "createTexture",
            value: function createTexture() {
                var textureOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                // create a new texture with the specified options
                var texture = new Texture(this.renderer, Object.assign(this._texturesOptions, textureOptions)); // add the texture to the mesh

                texture.addParent(this);
                return texture;
            }
            /***
             Shortcut for addParent() Texture class method
             ***/

        }, {
            key: "addTexture",
            value: function addTexture(texture) {
                if (!texture || texture.type !== "Texture") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": cannot add ", texture, " to this " + this.type + " because it is not a valid texture");
                    }

                    return;
                }

                texture.addParent(this);
            }
            /***
             This method handles the sources loading process
               params :
             @sourcesArray (array): array of html images, videos or canvases elements
             @texturesOptions (object, optional) : Parameters to apply to those textures (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadSources",
            value: function loadSources(sourcesArray) {
                var texturesOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;

                for (var i = 0; i < sourcesArray.length; i++) {
                    this.loadSource(sourcesArray[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             This method loads one source using our mesh loader (see PlaneTextureLoader class)
               params :
             @source (html element) : html image, video or canvas element
             @textureOptions (object, optional) : Parameters to apply to that texture (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadSource",
            value: function loadSource(source) {
                var _this25 = this;

                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;
                this.loader.loadSource(source, Object.assign(textureOptions, this._texturesOptions), function (texture) {
                    successCallback && successCallback(texture);
                }, function (source, error) {
                    if (!_this25.renderer.production) {
                        throwWarning(_this25.type + ": this HTML tag could not be converted into a texture:", source.tagName);
                    }

                    errorCallback && errorCallback(source, error);
                });
            }
            /***
             This method loads an image using our mesh loader (see PlaneTextureLoader class)
               params :
             @source (image) : html image element
             @textureOptions (object, optional) : Parameters to apply to that texture (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadImage",
            value: function loadImage(source) {
                var _this26 = this;

                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;
                this.loader.loadImage(source, Object.assign(textureOptions, this._texturesOptions), function (texture) {
                    successCallback && successCallback(texture);
                }, function (source, error) {
                    if (!_this26.renderer.production) {
                        throwWarning(_this26.type + ": There has been an error:\n", error, "\nwhile loading this image:\n", source);
                    }

                    errorCallback && errorCallback(source, error);
                });
            }
            /***
             This method loads a video using the mesh loader (see PlaneTextureLoader class)
               params :
             @source (video) : html video element
             @textureOptions (object, optional) : Parameters to apply to that texture (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadVideo",
            value: function loadVideo(source) {
                var _this27 = this;

                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;
                this.loader.loadVideo(source, Object.assign(textureOptions, this._texturesOptions), function (texture) {
                    successCallback && successCallback(texture);
                }, function (source, error) {
                    if (!_this27.renderer.production) {
                        throwWarning(_this27.type + ": There has been an error:\n", error, "\nwhile loading this video:\n", source);
                    }

                    errorCallback && errorCallback(source, error);
                });
            }
            /***
             This method loads a canvas using the mesh loader (see PlaneTextureLoader class)
               params :
             @source (canvas) : html canvas element
             @textureOptions (object, optional) : Parameters to apply to that texture (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             ***/

        }, {
            key: "loadCanvas",
            value: function loadCanvas(source) {
                var textureOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                this.loader.loadCanvas(source, Object.assign(textureOptions, this._texturesOptions), function (texture) {
                    successCallback && successCallback(texture);
                });
            }
            /*** LOAD ARRAYS ***/

            /***
             Loads an array of images
               params :
             @imagesArray (array) : array of html image elements
             @texturesOptions (object, optional) : Parameters to apply to those textures (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadImages",
            value: function loadImages(imagesArray) {
                var texturesOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;

                for (var i = 0; i < imagesArray.length; i++) {
                    this.loadImage(imagesArray[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             Loads an array of videos
               params :
             @videosArray (array) : array of html video elements
             @texturesOptions (object, optional) : Parameters to apply to those textures (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadVideos",
            value: function loadVideos(videosArray) {
                var texturesOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;
                var errorCallback = arguments.length > 3 ? arguments[3] : undefined;

                for (var i = 0; i < videosArray.length; i++) {
                    this.loadVideo(videosArray[i], texturesOptions, successCallback, errorCallback);
                }
            }
            /***
             Loads an array of canvases
               params :
             @canvasesArray (array) : array of html canvas elements
             @texturesOptions (object, optional) : Parameters to apply to those textures (see Texture class). Will be merged with the mesh default textures options
             @successCallback (function): callback to execute on source loading success
             @errorCallback (function): callback to execute on source loading error
             ***/

        }, {
            key: "loadCanvases",
            value: function loadCanvases(canvasesArray) {
                var texturesOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var successCallback = arguments.length > 2 ? arguments[2] : undefined;

                for (var i = 0; i < canvasesArray.length; i++) {
                    this.loadCanvas(canvasesArray[i], texturesOptions, successCallback);
                }
            }
            /***
             This has to be called in order to play the planes videos
             We need this because on mobile devices we can't start playing a video without a user action
             Once the video has started playing we set an interval and update a new frame to our our texture at a 30FPS rate
             ***/

        }, {
            key: "playVideos",
            value: function playVideos() {
                var _this28 = this;

                for (var i = 0; i < this.textures.length; i++) {
                    var texture = this.textures[i];

                    if (texture.sourceType === "video") {
                        var playPromise = texture.source.play(); // In browsers that don’t yet support this functionality,
                        // playPromise won’t be defined.

                        if (playPromise !== undefined) {
                            playPromise["catch"](function (error) {
                                if (!_this28.renderer.production) throwWarning(_this28.type + ": Could not play the video : ", error);
                            });
                        }
                    }
                }
            }
            /*** DRAW THE PLANE ***/

            /***
             We draw the plane, ie bind the buffers, set the active textures and draw it
             ***/

        }, {
            key: "_draw",
            value: function _draw() {
                // enable/disable depth test
                this.renderer.setDepthTest(this._depthTest); // face culling

                this.renderer.setFaceCulling(this.cullFace); // update all uniforms set up by the user

                this._program.updateUniforms(); // bind plane attributes buffers
                // TODO ideally we should only bind the attributes buffers if the geometry changed
                // however it is leading to some bugs on macOS & iOS and should therefore be tested extensively
                // for now we'll disable this feature even tho it is ready to be used
                //if(this.renderer.state.currentGeometryID !== this._geometry.definition.id || this.renderer.state.forceBufferUpdate) {


                this._geometry.bindBuffers();

                this.renderer.state.forceBufferUpdate = false; //}
                // draw all our plane textures

                for (var i = 0; i < this.textures.length; i++) {
                    // draw (bind and maybe update) our texture
                    this.textures[i]._draw(); // do not draw mesh if one of the active texture is not bound yet


                    if (this.textures[i]._sampler.isActive && !this.textures[i]._sampler.isTextureBound) {
                        return;
                    }
                } // the draw call!


                this._geometry.draw(); // reset active texture


                this.renderer.state.activeTexture = null; // callback after draw

                this._onAfterRenderCallback && this._onAfterRenderCallback();
            }
            /*** EVENTS ***/

            /***
             This is called each time a mesh can't be instanciated
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onError",
            value: function onError(callback) {
                if (callback) {
                    this._onErrorCallback = callback;
                }

                return this;
            }
            /***
             This is called each time a mesh's image has been loaded. Useful to handle a loader
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onLoading",
            value: function onLoading(callback) {
                if (callback) {
                    this._onLoadingCallback = callback;
                }

                return this;
            }
            /***
             This is called when a mesh is ready to be drawn
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onReady",
            value: function onReady(callback) {
                if (callback) {
                    this._onReadyCallback = callback;
                }

                return this;
            }
            /***
             This is called at each requestAnimationFrame call
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onRender",
            value: function onRender(callback) {
                if (callback) {
                    this._onRenderCallback = callback;
                }

                return this;
            }
            /***
             This is called at each requestAnimationFrame call for each mesh after the draw call
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onAfterRender",
            value: function onAfterRender(callback) {
                if (callback) {
                    this._onAfterRenderCallback = callback;
                }

                return this;
            }
            /*** DESTROYING ***/

            /***
             Remove an element by calling the appropriate renderer method
             ***/

        }, {
            key: "remove",
            value: function remove() {
                // first we want to stop drawing it
                this._canDraw = false; // force unbinding frame buffer

                if (this.target) {
                    this.renderer.bindFrameBuffer(null);
                } // delete all the webgl bindings


                this._dispose();

                if (this.type === "Plane") {
                    this.renderer.removePlane(this);
                } else if (this.type === "ShaderPass") {
                    // remove its render target first
                    if (this.target) {
                        this.target._shaderPass = null;
                        this.target.remove();
                        this.target = null;
                    }

                    this.renderer.removeShaderPass(this);
                }
            }
            /***
             This deletes all our mesh webgl bindings and its textures
             ***/

        }, {
            key: "_dispose",
            value: function _dispose() {
                if (this.gl) {
                    // dispose our geometry
                    this._geometry && this._geometry.dispose();

                    if (this.target && this.type === "ShaderPass") {
                        this.renderer.removeRenderTarget(this.target); // remove the first texture since it has been deleted with the render target

                        this.textures.shift();
                    } // unbind and delete the textures


                    for (var i = 0; i < this.textures.length; i++) {
                        this.textures[i]._dispose();
                    }

                    this.textures = [];
                }
            }
        }]);

        return Mesh;
    }();
    /***
     Here we create our DOMGLObject object
     We will extend our Mesh class object by adding HTML sizes helpers (bounding boxes getter/setter and mouse to mesh positioning)
       params:
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
     @plane (html element): the html element that we will use for our DOMMesh object
     @type (string): Object type (should be either "Plane" or "ShaderPass")
     @Meshparams (object): see Mesh class object
     
     returns:
     @this: our BasePlane element
     ***/
    // avoid reinstancing those during runtime


    var tempVec2a = new Vec2();
    var tempVec2b = new Vec2();

    var DOMMesh = /*#__PURE__*/function (_Mesh) {
        _inherits(DOMMesh, _Mesh);

        var _super2 = _createSuper(DOMMesh);

        function DOMMesh(renderer, htmlElement) {
            var _this29;

            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "DOMMesh";

            var _ref9 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                widthSegments = _ref9.widthSegments,
                heightSegments = _ref9.heightSegments,
                renderOrder = _ref9.renderOrder,
                depthTest = _ref9.depthTest,
                cullFace = _ref9.cullFace,
                uniforms = _ref9.uniforms,
                vertexShaderID = _ref9.vertexShaderID,
                fragmentShaderID = _ref9.fragmentShaderID,
                vertexShader = _ref9.vertexShader,
                fragmentShader = _ref9.fragmentShader,
                texturesOptions = _ref9.texturesOptions,
                crossOrigin = _ref9.crossOrigin;

            _classCallCheck(this, DOMMesh);

            // handling HTML shaders scripts
            vertexShaderID = vertexShaderID || htmlElement && htmlElement.getAttribute("data-vs-id");
            fragmentShaderID = fragmentShaderID || htmlElement && htmlElement.getAttribute("data-fs-id");
            _this29 = _super2.call(this, renderer, type, {
                widthSegments: widthSegments,
                heightSegments: heightSegments,
                renderOrder: renderOrder,
                depthTest: depthTest,
                cullFace: cullFace,
                uniforms: uniforms,
                vertexShaderID: vertexShaderID,
                fragmentShaderID: fragmentShaderID,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                texturesOptions: texturesOptions,
                crossOrigin: crossOrigin
            }); // return if no gl context

            if (!_this29.gl) {
                return _possibleConstructorReturn(_this29);
            } // our HTML element


            _this29.htmlElement = htmlElement;

            if (!_this29.htmlElement || _this29.htmlElement.length === 0) {
                if (!_this29.renderer.production) throwWarning(_this29.type + ": The HTML element you specified does not currently exists in the DOM");
            } // set plane sizes


            _this29._setDocumentSizes();

            return _this29;
        }
        /*** PLANE SIZES ***/

        /***
         Set our plane dimensions and positions relative to document
         Triggers reflow!
         ***/


        _createClass(DOMMesh, [{
            key: "_setDocumentSizes",
            value: function _setDocumentSizes() {
                // set our basic initial infos
                var planeBoundingRect = this.htmlElement.getBoundingClientRect();
                if (!this._boundingRect) this._boundingRect = {}; // set plane dimensions in document space

                this._boundingRect.document = {
                    width: planeBoundingRect.width * this.renderer.pixelRatio,
                    height: planeBoundingRect.height * this.renderer.pixelRatio,
                    top: planeBoundingRect.top * this.renderer.pixelRatio,
                    left: planeBoundingRect.left * this.renderer.pixelRatio
                };
            }
        }, {
            key: "getBoundingRect",
            value:
                /*** BOUNDING BOXES GETTERS ***/

                /***
                 Useful to get our plane HTML element bounding rectangle without triggering a reflow/layout
                   returns :
                 @boundingRectangle (obj): an object containing our plane HTML element bounding rectangle (width, height, top, bottom, right and left properties)
                 ***/
                function getBoundingRect() {
                    return {
                        width: this._boundingRect.document.width,
                        height: this._boundingRect.document.height,
                        top: this._boundingRect.document.top,
                        left: this._boundingRect.document.left,
                        // right = left + width, bottom = top + height
                        right: this._boundingRect.document.left + this._boundingRect.document.width,
                        bottom: this._boundingRect.document.top + this._boundingRect.document.height
                    };
                }
            /***
             Handles each plane resizing
             used internally when our container is resized
             ***/

        }, {
            key: "resize",
            value: function resize() {
                var _this30 = this;

                // reset plane dimensions
                this._setDocumentSizes(); // if this is a Plane object we need to update its perspective and positions


                if (this.type === "Plane") {
                    // reset perspective
                    this.setPerspective(this.camera.fov, this.camera.near, this.camera.far); // apply new position

                    this._setWorldSizes();

                    this._applyWorldPositions();
                } // resize all textures


                for (var i = 0; i < this.textures.length; i++) {
                    this.textures[i].resize();
                } // handle our after resize event


                this.renderer.nextRender.add(function () {
                    return _this30._onAfterResizeCallback && _this30._onAfterResizeCallback();
                });
            }
            /*** INTERACTION ***/

            /***
             This function takes the mouse position relative to the document and returns it relative to our plane
             It ranges from -1 to 1 on both axis
               params :
             @mouseCoordinates (Vec2 object): coordinates of the mouse
               returns :
             @mousePosition (Vec2 object): the mouse position relative to our plane in WebGL space coordinates
             ***/

        }, {
            key: "mouseToPlaneCoords",
            value: function mouseToPlaneCoords(mouseCoordinates) {
                // remember our ShaderPass objects don't have a scale property
                var scale = this.scale ? this.scale : tempVec2b.set(1, 1); // we need to adjust our plane document bounding rect to it's webgl scale

                var scaleAdjustment = tempVec2a.set((this._boundingRect.document.width - this._boundingRect.document.width * scale.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * scale.y) / 2); // also we need to divide by pixel ratio

                var planeBoundingRect = {
                    width: this._boundingRect.document.width * scale.x / this.renderer.pixelRatio,
                    height: this._boundingRect.document.height * scale.y / this.renderer.pixelRatio,
                    top: (this._boundingRect.document.top + scaleAdjustment.y) / this.renderer.pixelRatio,
                    left: (this._boundingRect.document.left + scaleAdjustment.x) / this.renderer.pixelRatio
                }; // mouse position conversion from document to plane space

                return tempVec2a.set((mouseCoordinates.x - planeBoundingRect.left) / planeBoundingRect.width * 2 - 1, 1 - (mouseCoordinates.y - planeBoundingRect.top) / planeBoundingRect.height * 2);
            }
            /*** EVENTS ***/

            /***
             This is called each time a plane has been resized
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onAfterResize",
            value: function onAfterResize(callback) {
                if (callback) {
                    this._onAfterResizeCallback = callback;
                }

                return this;
            }
        }]);

        return DOMMesh;
    }(Mesh);
    /***
     Here we create our Camera object
     Creates a perspective camera and its projection matrix (which is used by Plane's class objects)
     Uses a dirty _shouldUpdate flag used to determine if we should update the matrix
       params:
     @fov (float, optional): the perspective field of view. Should be greater than 0 and lower than 180. Default to 50.
     @near (float, optional): near plane, the closest point where a mesh vertex is drawn. Default to 0.1.
     @far (float, optional): far plane, farthest point where a mesh vertex is drawn. Default to 150.
     @width (float, optional): width used to calculate the camera aspect ratio. Default to the renderer container's width.
     @height (float, optional): height used to calculate the camera aspect ratio. Default to the renderer container's height.
     @pixelRatio (float, optional): pixel ratio used to calculate the camera aspect ratio. Default to the renderer's pixel ratio.
       returns:
     @this: our Mesh element
     ***/


    var Camera = /*#__PURE__*/function () {
        function Camera() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref10$fov = _ref10.fov,
                fov = _ref10$fov === void 0 ? 50 : _ref10$fov,
                _ref10$near = _ref10.near,
                near = _ref10$near === void 0 ? 0.1 : _ref10$near,
                _ref10$far = _ref10.far,
                far = _ref10$far === void 0 ? 150 : _ref10$far,
                width = _ref10.width,
                height = _ref10.height,
                _ref10$pixelRatio = _ref10.pixelRatio,
                pixelRatio = _ref10$pixelRatio === void 0 ? 1 : _ref10$pixelRatio;

            _classCallCheck(this, Camera);

            this.position = new Vec3();
            this.projectionMatrix = new Mat4();
            this.worldMatrix = new Mat4();
            this.viewMatrix = new Mat4();
            this._shouldUpdate = false;
            this.setSize();
            this.setPerspective(fov, near, far, width, height, pixelRatio);
        }
        /***
         Sets the camera field of view
         Update the camera projection matrix only if the fov actually changed
           params:
         @fov (float, optional): field of view to use
         ***/


        _createClass(Camera, [{
            key: "setFov",
            value: function setFov(fov) {
                fov = isNaN(fov) ? this.fov : parseFloat(fov); // clamp between 1 and 179

                fov = Math.max(1, Math.min(fov, 179));

                if (fov !== this.fov) {
                    this.fov = fov;
                    this.setPosition();
                    this._shouldUpdate = true;
                }

                this.setCSSPerspective();
            }
            /***
             Sets the camera near plane value
             Update the camera projection matrix only if the near plane actually changed
               params:
             @near (float, optional): near plane value to use
             ***/

        }, {
            key: "setNear",
            value: function setNear(near) {
                near = isNaN(near) ? this.near : parseFloat(near);
                near = Math.max(near, 0.01);

                if (near !== this.near) {
                    this.near = near;
                    this._shouldUpdate = true;
                }
            }
            /***
             Sets the camera far plane value
             Update the camera projection matrix only if the far plane actually changed
               params:
             @far (float, optional): far plane value to use
             ***/

        }, {
            key: "setFar",
            value: function setFar(far) {
                far = isNaN(far) ? this.far : parseFloat(far);
                far = Math.max(far, 50);

                if (far !== this.far) {
                    this.far = far;
                    this._shouldUpdate = true;
                }
            }
            /***
             Sets the camera pixel ratio value
             Update the camera projection matrix only if the pixel ratio actually changed
               params:
             @pixelRatio (float, optional): pixelRatio value to use
             ***/

        }, {
            key: "setPixelRatio",
            value: function setPixelRatio(pixelRatio) {
                if (pixelRatio !== this.pixelRatio) {
                    this._shouldUpdate = true;
                }

                this.pixelRatio = pixelRatio;
            }
            /***
             Sets the camera width and height
             Update the camera projection matrix only if the width or height actually changed
               params:
             @width (float, optional): width value to use
             @height (float, optional): height value to use
             ***/

        }, {
            key: "setSize",
            value: function setSize(width, height) {
                if (width !== this.width || height !== this.height) {
                    this._shouldUpdate = true;
                }

                this.width = width;
                this.height = height;
            }
            /***
             Sets the camera perspective
             Update the camera projection matrix if our _shouldUpdate flag is true
               params:
             @fov (float, optional): field of view to use
             @near (float, optional): near plane value to use
             @far (float, optional): far plane value to use
             @width (float, optional): width value to use
             @height (float, optional): height value to use
             @pixelRatio (float, optional): pixelRatio value to use
             ***/

        }, {
            key: "setPerspective",
            value: function setPerspective(fov, near, far, width, height, pixelRatio) {
                this.setPixelRatio(pixelRatio);
                this.setSize(width, height);
                this.setFov(fov);
                this.setNear(near);
                this.setFar(far);

                if (this._shouldUpdate) {
                    this.updateProjectionMatrix();
                }
            }
            /***
             Sets the camera position based on its fov
             Used by the Plane class objects to scale the planes with the right amount
             ***/

        }, {
            key: "setPosition",
            value: function setPosition() {
                this.position.set(0, 0, 1); // update matrices

                this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]);
                this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse();
            }
            /***
             Sets a CSSPerspective property based on width, height, pixelRatio and fov
             Used to translate planes along the Z axis using pixel units as CSS would do
             Taken from: https://stackoverflow.com/questions/22421439/convert-field-of-view-value-to-css3d-perspective-value
             ***/

        }, {
            key: "setCSSPerspective",
            value: function setCSSPerspective() {
                this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), 0.5) / Math.tan(this.fov * 0.5 * Math.PI / 180);
            }
            /***
             Returns visible width / height at a given z-depth from our camera parameters
               Taken from: https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269
             ***/

        }, {
            key: "getScreenRatiosFromFov",
            value: function getScreenRatiosFromFov() {
                var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                // compensate for cameras not positioned at z=0
                var cameraOffset = this.position.z;

                if (depth < cameraOffset) {
                    depth -= cameraOffset;
                } else {
                    depth += cameraOffset;
                } // vertical fov in radians


                var vFOV = this.fov * Math.PI / 180; // Math.abs to ensure the result is always positive

                var height = 2 * Math.tan(vFOV / 2) * Math.abs(depth);
                return {
                    width: height * this.width / this.height,
                    height: height
                };
            }
            /***
             Updates the camera projection matrix
             ***/

        }, {
            key: "updateProjectionMatrix",
            value: function updateProjectionMatrix() {
                var aspect = this.width / this.height;
                var top = this.near * Math.tan(Math.PI / 180 * 0.5 * this.fov);
                var height = 2 * top;
                var width = aspect * height;
                var left = -0.5 * width;
                var right = left + width;
                var bottom = top - height;
                var x = 2 * this.near / (right - left);
                var y = 2 * this.near / (top - bottom);
                var a = (right + left) / (right - left);
                var b = (top + bottom) / (top - bottom);
                var c = -(this.far + this.near) / (this.far - this.near);
                var d = -2 * this.far * this.near / (this.far - this.near);
                this.projectionMatrix.setFromArray([x, 0, 0, 0, 0, y, 0, 0, a, b, c, -1, 0, 0, d, 0]);
            }
            /***
             Force the projection matrix to update (used in Plane class objects context restoration)
             ***/

        }, {
            key: "forceUpdate",
            value: function forceUpdate() {
                this._shouldUpdate = true;
            }
            /***
             Cancel the projection matrix update (used in Plane class objects after the projection matrix has been updated)
             ***/

        }, {
            key: "cancelUpdate",
            value: function cancelUpdate() {
                this._shouldUpdate = false;
            }
        }]);

        return Camera;
    }();
    /***
     Here we create a Quat class object
     This is a really basic Quaternion class used for rotation calculations
     Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Quaternion.js
       params :
     @elements (Float32Array of length 4): our quaternion array. Default to identity quaternion.
       returns :
     @this: our Quat class object
     ***/
    // TODO lot of (unused at the time) methods are missing


    var Quat = /*#__PURE__*/function () {
        function Quat() {
            var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Float32Array([0, 0, 0, 1]);
            var axisOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "XYZ";

            _classCallCheck(this, Quat);

            this.type = "Quat";
            this.elements = elements; // rotation axis order

            this.axisOrder = axisOrder;
        }
        /***
         Sets the quaternion values from an array
           params:
         @array (array): an array of at least 4 elements
           returns:
         @this (Quat class object): this quaternion after being set
         ***/


        _createClass(Quat, [{
            key: "setFromArray",
            value: function setFromArray(array) {
                this.elements[0] = array[0];
                this.elements[1] = array[1];
                this.elements[2] = array[2];
                this.elements[3] = array[3];
                return this;
            }
            /***
             Sets the quaternion axis order
               params:
             @axisOrder (string): an array of at least 4 elements
               returns:
             @this (Quat class object): this quaternion after axis order has been set
             ***/

        }, {
            key: "setAxisOrder",
            value: function setAxisOrder(axisOrder) {
                // force uppercase for strict equality tests
                axisOrder = axisOrder.toUpperCase();

                switch (axisOrder) {
                    case "XYZ":
                    case "YXZ":
                    case "ZXY":
                    case "ZYX":
                    case "YZX":
                    case "XZY":
                        this.axisOrder = axisOrder;
                        break;

                    default:
                        // apply a default axis order
                        this.axisOrder = "XYZ";
                }

                return this;
            }
            /***
             Copy a quaternion into this quaternion
               params:
             @vector (Quat): quaternion to copy
               returns:
             @this (Quat): this quaternion after copy
             ***/

        }, {
            key: "copy",
            value: function copy(quaternion) {
                this.elements = quaternion.elements;
                this.axisOrder = quaternion.axisOrder;
                return this;
            }
            /***
             Clone a quaternion
               returns:
             @clonedQuaternion (Quat): cloned quaternion
             ***/

        }, {
            key: "clone",
            value: function clone() {
                return new Quat().copy(this);
            }
            /***
             Checks if 2 quaternions are equal
               returns:
             @isEqual (bool): whether the quaternions are equals or not
             ***/

        }, {
            key: "equals",
            value: function equals(quaternion) {
                return this.elements[0] === quaternion.elements[0] && this.elements[1] === quaternion.elements[1] && this.elements[2] === quaternion.elements[2] && this.elements[3] === quaternion.elements[3] && this.axisOrder === quaternion.axisOrder;
            }
            /***
             Sets a rotation quaternion using Euler angles and its axis order
               params:
             @vector (Vec3 class object): rotation vector to set our quaternion from
               returns :
             @this (Quat class object): quaternion after having applied the rotation
             ***/

        }, {
            key: "setFromVec3",
            value: function setFromVec3(vector) {
                var ax = vector.x * 0.5;
                var ay = vector.y * 0.5;
                var az = vector.z * 0.5;
                var cosx = Math.cos(ax);
                var cosy = Math.cos(ay);
                var cosz = Math.cos(az);
                var sinx = Math.sin(ax);
                var siny = Math.sin(ay);
                var sinz = Math.sin(az); // XYZ order

                if (this.axisOrder === "XYZ") {
                    this.elements[0] = sinx * cosy * cosz + cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz - sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz + sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz - sinx * siny * sinz;
                } else if (this.axisOrder === "YXZ") {
                    this.elements[0] = sinx * cosy * cosz + cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz - sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz - sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz + sinx * siny * sinz;
                } else if (this.axisOrder === "ZXY") {
                    this.elements[0] = sinx * cosy * cosz - cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz + sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz + sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz - sinx * siny * sinz;
                } else if (this.axisOrder === "ZYX") {
                    this.elements[0] = sinx * cosy * cosz - cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz + sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz - sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz + sinx * siny * sinz;
                } else if (this.axisOrder === "YZX") {
                    this.elements[0] = sinx * cosy * cosz + cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz + sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz - sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz - sinx * siny * sinz;
                } else if (this.axisOrder === "XZY") {
                    this.elements[0] = sinx * cosy * cosz - cosx * siny * sinz;
                    this.elements[1] = cosx * siny * cosz - sinx * cosy * sinz;
                    this.elements[2] = cosx * cosy * sinz + sinx * siny * cosz;
                    this.elements[3] = cosx * cosy * cosz + sinx * siny * sinz;
                }

                return this;
            }
        }]);

        return Quat;
    }();
    /***
     Here we create our Plane object
     We will extend our DOMMesh class that handles all the WebGL part and basic HTML sizings
       Plane class will add:
     - sizing and positioning and everything that relates to the DOM like draw checks (frustum culling) and reenter/leave events
     - projection (using Camera class object) and view matrices and everything that is related like perspective, scale, rotation...
       params :
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
     @plane (html element): the html element that we will use for our Plane object
       @Meshparams (object): see Mesh class object
       @alwaysDraw (boolean, optionnal): if the plane should always be drawn or if it should use frustum culling. Default to false.
     @visible (boolean, optional): if the plane should be drawn or not. Default to true.
     @transparent (boolean, optional): if the plane should handle transparency. Default to false.
     @drawCheckMargins (object, optional): defines the margins in pixels to add to the frustum culling check to determine if the plane should be drawn. Default to 0.
     @autoloadSources (boolean, optional): if the sources should be loaded on init automatically. Default to true
     @watchScroll (boolean, optional): if the plane should auto update its position based on the scroll value. Default to true.
     @fov (float, optional): defines the perspective field of view used by the camera. Default to 50.
       returns :
     @this: our Plane
     ***/
    // avoid reinstancing those during runtime


    var tempScale = new Vec2(); // positions

    var tempWorldPos1 = new Vec3();
    var tempWorldPos2 = new Vec3(); // frustum culling

    var tempCorner1 = new Vec3();
    var tempCorner2 = new Vec3();
    var tempCorner3 = new Vec3();
    var tempCorner4 = new Vec3();
    var tempCulledCorner1 = new Vec3();
    var tempCulledCorner2 = new Vec3(); // raycasting

    var identityQuat = new Quat();
    var defaultTransformOrigin = new Vec3(0.5, 0.5, 0);
    var tempRayDirection = new Vec3();
    var tempNormals = new Vec3();
    var tempRotatedOrigin = new Vec3();
    var tempRaycast = new Vec3();
    var castedMouseCoords = new Vec2();

    var Plane = /*#__PURE__*/function (_DOMMesh) {
        _inherits(Plane, _DOMMesh);

        var _super3 = _createSuper(Plane);

        function Plane(renderer, htmlElement) {
            var _this31;

            var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                widthSegments = _ref11.widthSegments,
                heightSegments = _ref11.heightSegments,
                renderOrder = _ref11.renderOrder,
                depthTest = _ref11.depthTest,
                cullFace = _ref11.cullFace,
                uniforms = _ref11.uniforms,
                vertexShaderID = _ref11.vertexShaderID,
                fragmentShaderID = _ref11.fragmentShaderID,
                vertexShader = _ref11.vertexShader,
                fragmentShader = _ref11.fragmentShader,
                texturesOptions = _ref11.texturesOptions,
                crossOrigin = _ref11.crossOrigin,
                _ref11$alwaysDraw = _ref11.alwaysDraw,
                alwaysDraw = _ref11$alwaysDraw === void 0 ? false : _ref11$alwaysDraw,
                _ref11$visible = _ref11.visible,
                visible = _ref11$visible === void 0 ? true : _ref11$visible,
                _ref11$transparent = _ref11.transparent,
                transparent = _ref11$transparent === void 0 ? false : _ref11$transparent,
                _ref11$drawCheckMargi = _ref11.drawCheckMargins,
                drawCheckMargins = _ref11$drawCheckMargi === void 0 ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                } : _ref11$drawCheckMargi,
                _ref11$autoloadSource = _ref11.autoloadSources,
                autoloadSources = _ref11$autoloadSource === void 0 ? true : _ref11$autoloadSource,
                _ref11$watchScroll = _ref11.watchScroll,
                watchScroll = _ref11$watchScroll === void 0 ? true : _ref11$watchScroll,
                _ref11$fov = _ref11.fov,
                fov = _ref11$fov === void 0 ? 50 : _ref11$fov;

            _classCallCheck(this, Plane);

            _this31 = _super3.call(this, renderer, htmlElement, "Plane", {
                widthSegments: widthSegments,
                heightSegments: heightSegments,
                renderOrder: renderOrder,
                depthTest: depthTest,
                cullFace: cullFace,
                uniforms: uniforms,
                vertexShaderID: vertexShaderID,
                fragmentShaderID: fragmentShaderID,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                texturesOptions: texturesOptions,
                crossOrigin: crossOrigin
            }); // return if no gl context

            if (!_this31.gl) {
                return _possibleConstructorReturn(_this31);
            }

            _this31.index = _this31.renderer.planes.length; // used for FBOs

            _this31.target = null; // use frustum culling or not

            _this31.alwaysDraw = alwaysDraw; // should draw is set to true by default, we'll check it later

            _this31._shouldDraw = true;
            _this31.visible = visible; // if the plane has transparency

            _this31._transparent = transparent; // draw check margins in pixels
            // positive numbers means it can be displayed even when outside the viewport
            // negative numbers means it can be hidden even when inside the viewport

            _this31.drawCheckMargins = drawCheckMargins; // if we decide to load all sources on init or let the user do it manually

            _this31.autoloadSources = autoloadSources; // if we should watch scroll

            _this31.watchScroll = watchScroll; // define if we should update the plane's matrices when called in the draw loop

            _this31._updateMVMatrix = false; // init camera

            _this31.camera = new Camera({
                fov: fov,
                width: _this31.renderer._boundingRect.width,
                height: _this31.renderer._boundingRect.height,
                pixelRatio: _this31.renderer.pixelRatio
            }); // if program is valid, go on

            if (_this31._program.compiled) {
                // init our plane
                _this31._initPlane(); // add our plane to the scene stack and the renderer array


                _this31.renderer.scene.addPlane(_assertThisInitialized(_this31));

                _this31.renderer.planes.push(_assertThisInitialized(_this31));
            }

            return _this31;
        }
        /*** RESTORING CONTEXT ***/

        /***
         Used internally to handle context restoration after the program has been successfully compiled again
         ***/


        _createClass(Plane, [{
            key: "_programRestored",
            value: function _programRestored() {
                if (this.target) {
                    // reset its render target if needed
                    this.setRenderTarget(this.renderer.renderTargets[this.target.index]);
                }

                this._initMatrices(); // set our initial perspective matrix


                this.setPerspective(this.camera.fov, this.camera.near, this.camera.far);

                this._setWorldSizes();

                this._applyWorldPositions(); // add the plane to our draw stack again as it have been emptied


                this.renderer.scene.addPlane(this); // reset textures

                for (var i = 0; i < this.textures.length; i++) {
                    this.textures[i]._parent = this;

                    this.textures[i]._restoreContext();
                }

                this._canDraw = true;
            }
            /***
             Init our basic plane values (transformations, positions, camera, sources)
             ***/

        }, {
            key: "_initPlane",
            value: function _initPlane() {
                // init transformation values
                this._initTransformValues(); // init its position values


                this._initPositions(); // set camera values


                this.setPerspective(this.camera.fov, this.camera.near, this.camera.far); // load sources

                this._initSources();
            }
            /*** TRANSFORMATIONS, PROJECTION & MATRICES ***/

            /***
             Set/reset plane's transformation values: rotation, scale, translation, transform origin
             ***/

        }, {
            key: "_initTransformValues",
            value: function _initTransformValues() {
                var _this32 = this;

                this.rotation = new Vec3();
                this.rotation.onChange(function () {
                    return _this32._applyRotation();
                }); // initial quaternion

                this.quaternion = new Quat(); // translation in viewport coordinates

                this.relativeTranslation = new Vec3();
                this.relativeTranslation.onChange(function () {
                    return _this32._setTranslation();
                }); // translation in webgl coordinates

                this._translation = new Vec3(); // scale is a Vec3 with z always equal to 1

                this.scale = new Vec3(1);
                this.scale.onChange(function () {
                    _this32.scale.z = 1;

                    _this32._applyScale();
                }); // set plane transform origin to center

                this.transformOrigin = new Vec3(0.5, 0.5, 0);
                this.transformOrigin.onChange(function () {
                    // set transformation origin relative to world space as well
                    _this32._setWorldTransformOrigin();

                    _this32._updateMVMatrix = true;
                });
            }
            /***
             Reset our plane transformation values and HTML element if specified (and valid)
               params :
             @htmlElement (HTML element, optional) : if provided, new HTML element to use as a reference for sizes and position syncing.
             ***/

        }, {
            key: "resetPlane",
            value: function resetPlane(htmlElement) {
                this._initTransformValues(); // reset transformation origin relative to world space as well


                this._setWorldTransformOrigin();

                if (htmlElement !== null && !!htmlElement) {
                    this.htmlElement = htmlElement;
                    this.resize();
                } else if (!htmlElement && !this.renderer.production) {
                    throwWarning(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.");
                }
            }
            /***
             This function removes the plane current render target
             ***/

        }, {
            key: "removeRenderTarget",
            value: function removeRenderTarget() {
                if (this.target) {
                    // reset our planes stacks
                    this.renderer.scene.removePlane(this);
                    this.target = null;
                    this.renderer.scene.addPlane(this);
                }
            }
            /***
             Init our plane position: set its matrices, its position and perspective
             ***/

        }, {
            key: "_initPositions",
            value: function _initPositions() {
                // set its matrices
                this._initMatrices(); // apply our css positions


                this._setWorldSizes();

                this._applyWorldPositions();
            }
            /***
             Init our plane model view and projection matrices and set their uniform locations
             ***/

        }, {
            key: "_initMatrices",
            value: function _initMatrices() {
                // create our matrices, they will be set after
                var matrix = new Mat4();
                this._matrices = {
                    world: {
                        // world matrix (global transformation)
                        matrix: matrix
                    },
                    modelView: {
                        // model view matrix (world matrix multiplied by camera view matrix)
                        name: "uMVMatrix",
                        matrix: matrix,
                        location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
                    },
                    projection: {
                        // camera projection matrix
                        name: "uPMatrix",
                        matrix: matrix,
                        location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
                    },
                    modelViewProjection: {
                        // model view projection matrix (model view matrix multiplied by projection)
                        matrix: matrix
                    }
                };
            }
            /*** PLANES PERSPECTIVES, SCALES AND ROTATIONS ***/

            /***
             This will set our perspective matrix and update our perspective matrix uniform
             used internally at each draw call if needed
             ***/

        }, {
            key: "_setPerspectiveMatrix",
            value: function _setPerspectiveMatrix() {
                // update our matrix uniform if we actually have updated its values
                if (this.camera._shouldUpdate) {
                    this.renderer.useProgram(this._program);
                    this.gl.uniformMatrix4fv(this._matrices.projection.location, false, this._matrices.projection.matrix.elements);
                } // reset camera shouldUpdate flag


                this.camera.cancelUpdate();
            }
            /***
             This will set our perspective matrix new parameters (fov, near plane and far plane)
             used internally but can be used externally as well to change fov for example
               params :
             @fov (float): the field of view
             @near (float): the nearest point where object are displayed
             @far (float): the farthest point where object are displayed
             ***/

        }, {
            key: "setPerspective",
            value: function setPerspective(fov, near, far) {
                this.camera.setPerspective(fov, near, far, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio); // force camera update on context restoration

                if (this.renderer.state.isContextLost) {
                    this.camera.forceUpdate();
                }

                this._matrices.projection.matrix = this.camera.projectionMatrix;

                if (this.camera._shouldUpdate) {
                    // we changed the fov, update world sizes and world positions
                    this._setWorldSizes();

                    this._applyWorldPositions(); // translation along the Z axis is dependant of camera CSSPerspective
                    // we're computing it here because it changes when the fov changes


                    this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective;
                } // if camera settings changed update the mvMatrix as well cause we need to update z translation based on new fov


                this._updateMVMatrix = this.camera._shouldUpdate;
            }
            /***
             This will set our model view matrix
             used internally at each draw call if needed
             It will calculate our matrix based on its plane translation, rotation and scale
             ***/

        }, {
            key: "_setMVMatrix",
            value: function _setMVMatrix() {
                if (this._updateMVMatrix) {
                    // compose our world transformation matrix from custom origin
                    this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin); // we need to scale our planes, from a square to a right sized rectangle
                    // we're doing this after our transformation matrix because this scale transformation always have the same origin

                    this._matrices.world.matrix.scale({
                        x: this._boundingRect.world.width,
                        y: this._boundingRect.world.height,
                        z: 1
                    }); // our model view matrix is our world matrix multiplied with our camera view matrix
                    // in our case we're just subtracting the camera Z position to our world matrix


                    this._matrices.modelView.matrix.copy(this._matrices.world.matrix);

                    this._matrices.modelView.matrix.elements[14] -= this.camera.position.z; // our modelViewProjection matrix, useful for bounding box calculations and frustum culling
                    // this is the result of our projection matrix multiplied by our modelView matrix

                    this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix); // check if we should draw the plane but only if everything has been initialized

                    if (!this.alwaysDraw) {
                        this._shouldDrawCheck();
                    } // update our matrix uniform


                    this.renderer.useProgram(this._program);
                    this.gl.uniformMatrix4fv(this._matrices.modelView.location, false, this._matrices.modelView.matrix.elements);
                } // reset our flag


                this._updateMVMatrix = false;
            }
            /*** SCREEN TO WORLD CALCS ***/

            /***
             Convert our transform origin point from plane space to world space
             ***/

        }, {
            key: "_setWorldTransformOrigin",
            value: function _setWorldTransformOrigin() {
                // set transformation origin relative to world space as well
                this._boundingRect.world.transformOrigin = new Vec3((this.transformOrigin.x * 2 - 1) * this._boundingRect.world.width, -(this.transformOrigin.y * 2 - 1) // between -1 and 1
                    * this._boundingRect.world.height, this.transformOrigin.z);
            }
            /***
             This function takes pixel values along X and Y axis and convert them to world space coordinates
               params :
             @vector (Vec3): position to convert on X, Y and Z axes
               returns :
             @worldPosition: plane's position in WebGL space
             ***/

        }, {
            key: "_documentToWorldSpace",
            value: function _documentToWorldSpace(vector) {
                return tempWorldPos2.set(vector.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -(vector.y * this.renderer.pixelRatio / this.renderer._boundingRect.height) * this._boundingRect.world.ratios.height, vector.z);
            }
            /***
             Set our plane dimensions relative to clip spaces
             ***/

        }, {
            key: "_setWorldSizes",
            value: function _setWorldSizes() {
                var ratios = this.camera.getScreenRatiosFromFov(); // our plane world informations
                // since our vertices values range from -1 to 1, it is supposed to draw a square
                // we need to scale them under the hood relatively to our canvas
                // to display an accurately sized plane

                this._boundingRect.world = {
                    width: this._boundingRect.document.width / this.renderer._boundingRect.width * ratios.width / 2,
                    height: this._boundingRect.document.height / this.renderer._boundingRect.height * ratios.height / 2,
                    ratios: ratios
                }; // set transformation origin relative to world space as well

                this._setWorldTransformOrigin();
            }
            /***
             Set our plane position relative to clip spaces
             ***/

        }, {
            key: "_setWorldPosition",
            value: function _setWorldPosition() {
                // dimensions and positions of our plane in the document and clip spaces
                // don't forget translations in webgl space are referring to the center of our plane and canvas
                var planeCenter = {
                    x: this._boundingRect.document.width / 2 + this._boundingRect.document.left,
                    y: this._boundingRect.document.height / 2 + this._boundingRect.document.top
                };
                var containerCenter = {
                    x: this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
                    y: this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top
                };
                this._boundingRect.world.top = (containerCenter.y - planeCenter.y) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height;
                this._boundingRect.world.left = (planeCenter.x - containerCenter.x) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width;
            }
            /*** TRANSFORMATIONS ***/

            /***
             This will set our plane scale
             used internally but can be used externally as well
               params :
             @scale (Vec2 object): scale to apply on X and Y axes
             ***/

        }, {
            key: "setScale",
            value: function setScale(scale) {
                if (!scale.type || scale.type !== "Vec2") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", scale);
                    }

                    return;
                }

                scale.sanitizeNaNValuesWith(this.scale).max(tempScale.set(0.001, 0.001)); // only apply if values changed

                if (scale.x !== this.scale.x || scale.y !== this.scale.y) {
                    this.scale.set(scale.x, scale.y, 1);

                    this._applyScale();
                }
            }
            /***
             This will apply our scale and tells our model view matrix to update
             ***/

        }, {
            key: "_applyScale",
            value: function _applyScale() {
                // adjust textures size
                for (var i = 0; i < this.textures.length; i++) {
                    this.textures[i].resize();
                } // we should update the plane mvMatrix


                this._updateMVMatrix = true;
            }
            /***
             This will set our plane rotation
             used internally but can be used externally as well
               params :
             @rotation (Vec3 object): rotation to apply on X, Y and Z axes (in radians)
             ***/

        }, {
            key: "setRotation",
            value: function setRotation(rotation) {
                if (!rotation.type || rotation.type !== "Vec3") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", rotation);
                    }

                    return;
                }

                rotation.sanitizeNaNValuesWith(this.rotation); // only apply if values changed

                if (!rotation.equals(this.rotation)) {
                    this.rotation.copy(rotation);

                    this._applyRotation();
                }
            }
            /***
             This will apply our rotation and tells our model view matrix to update
             ***/

        }, {
            key: "_applyRotation",
            value: function _applyRotation() {
                this.quaternion.setFromVec3(this.rotation); // we should update the plane mvMatrix

                this._updateMVMatrix = true;
            }
            /***
             This will set our plane transform origin
             (0, 0, 0) means plane's top left corner
             (1, 1, 0) means plane's bottom right corner
             (0.5, 0.5, -1) means behind plane's center
               params :
             @origin (Vec3 object): coordinate of transformation origin X, Y and Z axes
             ***/

        }, {
            key: "setTransformOrigin",
            value: function setTransformOrigin(origin) {
                if (!origin.type || origin.type !== "Vec3") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", origin);
                    }

                    return;
                }

                origin.sanitizeNaNValuesWith(this.transformOrigin);

                if (!origin.equals(this.transformOrigin)) {
                    this.transformOrigin.copy(origin); // set transformation origin relative to world space as well

                    this._setWorldTransformOrigin();

                    this._updateMVMatrix = true;
                }
            }
            /***
             This will set our plane translation by adding plane computed bounding box values and computed relative position values
             ***/

        }, {
            key: "_setTranslation",
            value: function _setTranslation() {
                // avoid unnecessary calculations if we don't have a users set relative position
                var worldPosition = tempWorldPos1.set(0, 0, 0);

                if (!this.relativeTranslation.equals(worldPosition)) {
                    worldPosition = this._documentToWorldSpace(this.relativeTranslation);
                }

                this._translation.set(this._boundingRect.world.left + worldPosition.x, this._boundingRect.world.top + worldPosition.y, //this._translation.z,
                    this.relativeTranslation.z / this.camera.CSSPerspective); // we should update the plane mvMatrix


                this._updateMVMatrix = true;
            }
            /***
             This function takes pixel values along X and Y axis and convert them to clip space coordinates, and then apply the corresponding translation
               params :
             @translation (Vec3): translation to apply on X, Y and Z axes
             ***/

        }, {
            key: "setRelativeTranslation",
            value: function setRelativeTranslation(translation) {
                if (!translation.type || translation.type !== "Vec3") {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", translation);
                    }

                    return;
                }

                translation.sanitizeNaNValuesWith(this.relativeTranslation); // only apply if values changed

                if (!translation.equals(this.relativeTranslation)) {
                    this.relativeTranslation.copy(translation);

                    this._setTranslation();
                }
            }
            /***
             This function uses our plane HTML Element bounding rectangle values and convert them to the world clip space coordinates, and then apply the corresponding translation
             ***/

        }, {
            key: "_applyWorldPositions",
            value: function _applyWorldPositions() {
                // set our plane sizes and positions relative to the world clipspace
                this._setWorldPosition(); // set the translation values


                this._setTranslation();
            }
            /***
             This function updates the plane position based on its CSS positions and transformations values.
             Useful if the HTML element has been moved while the container size has not changed.
             ***/

        }, {
            key: "updatePosition",
            value: function updatePosition() {
                // set the new plane sizes and positions relative to document by triggering getBoundingClientRect()
                this._setDocumentSizes(); // apply them


                this._applyWorldPositions();
            }
            /***
             This function updates the plane position based on the Curtains class scroll manager values
               params:
             @lastXDelta (float): last scroll value along X axis
             @lastYDelta (float): last scroll value along Y axis
             ***/

        }, {
            key: "updateScrollPosition",
            value: function updateScrollPosition(lastXDelta, lastYDelta) {
                // actually update the plane position only if last X delta or last Y delta is not equal to 0
                if (lastXDelta || lastYDelta) {
                    // set new positions based on our delta without triggering reflow
                    this._boundingRect.document.top += lastYDelta * this.renderer.pixelRatio;
                    this._boundingRect.document.left += lastXDelta * this.renderer.pixelRatio; // apply them

                    this._applyWorldPositions();
                }
            }
            /*** FRUSTUM CULLING (DRAW CHECK) ***/

            /***
             Find the intersection point by adding a vector starting from a corner till we reach the near plane
               params:
             @refPoint (Vec3 class object): corner of the plane from which we start to iterate from
             @secondPoint (Vec3 class object): second point near the refPoint to get a direction to use for iteration
               returns:
             @intersection (Vec3 class object): intersection between our plane and the camera near plane
             ***/

        }, {
            key: "_getIntersection",
            value: function _getIntersection(refPoint, secondPoint) {
                // direction vector to add
                var direction = secondPoint.clone().sub(refPoint); // copy our corner refpoint

                var intersection = refPoint.clone(); // iterate till we reach near plane

                while (intersection.z > -1) {
                    intersection.add(direction);
                }

                return intersection;
            }
            /***
             Get intersection points between a plane and the camera near plane
             When a plane gets clipped by the camera near plane, the clipped corner projected coords returned by _applyMat4() are erronate
             We need to find the intersection points using another approach
             Here I chose to use non clipped corners projected coords and a really small vector parallel to the plane's side
             We're adding that vector again and again to our corner projected coords until the Z coordinate matches the near plane: we got our intersection
               params:
             @corners (array): our original corners vertices coordinates
             @mvpCorners (array): the projected corners of our plane
             @clippedCorners (array): index of the corners that are clipped
               returns:
             @mvpCorners (array): the corrected projected corners of our plane
             ***/

        }, {
            key: "_getNearPlaneIntersections",
            value: function _getNearPlaneIntersections(corners, mvpCorners, clippedCorners) {
                // rebuild the clipped corners based on non clipped ones
                var mVPMatrix = this._matrices.modelViewProjection.matrix;

                if (clippedCorners.length === 1) {
                    // we will have 5 corners to check so we'll need to push a new entry in our mvpCorners array
                    if (clippedCorners[0] === 0) {
                        // top left is culled
                        // get intersection iterating from top right
                        mvpCorners[0] = this._getIntersection(mvpCorners[1], tempCulledCorner1.set(0.95, 1, 0).applyMat4(mVPMatrix)); // get intersection iterating from bottom left

                        mvpCorners.push(this._getIntersection(mvpCorners[3], tempCulledCorner2.set(-1, -0.95, 0).applyMat4(mVPMatrix)));
                    } else if (clippedCorners[0] === 1) {
                        // top right is culled
                        // get intersection iterating from top left
                        mvpCorners[1] = this._getIntersection(mvpCorners[0], tempCulledCorner1.set(-0.95, 1, 0).applyMat4(mVPMatrix)); // get intersection iterating from bottom right

                        mvpCorners.push(this._getIntersection(mvpCorners[2], tempCulledCorner2.set(1, -0.95, 0).applyMat4(mVPMatrix)));
                    } else if (clippedCorners[0] === 2) {
                        // bottom right is culled
                        // get intersection iterating from bottom left
                        mvpCorners[2] = this._getIntersection(mvpCorners[3], tempCulledCorner1.set(-0.95, -1, 0).applyMat4(mVPMatrix)); // get intersection iterating from top right

                        mvpCorners.push(this._getIntersection(mvpCorners[1], tempCulledCorner2.set(1, 0.95, 0).applyMat4(mVPMatrix)));
                    } else if (clippedCorners[0] === 3) {
                        // bottom left is culled
                        // get intersection iterating from bottom right
                        mvpCorners[3] = this._getIntersection(mvpCorners[2], tempCulledCorner1.set(0.95, -1, 0).applyMat4(mVPMatrix)); // get intersection iterating from top left

                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner2.set(-1, 0.95, 0).applyMat4(mVPMatrix)));
                    }
                } else if (clippedCorners.length === 2) {
                    if (clippedCorners[0] === 0 && clippedCorners[1] === 1) {
                        // top part of the plane is culled by near plane
                        // find intersection using bottom corners
                        mvpCorners[0] = this._getIntersection(mvpCorners[3], tempCulledCorner1.set(-1, -0.95, 0).applyMat4(mVPMatrix));
                        mvpCorners[1] = this._getIntersection(mvpCorners[2], tempCulledCorner2.set(1, -0.95, 0).applyMat4(mVPMatrix));
                    } else if (clippedCorners[0] === 1 && clippedCorners[1] === 2) {
                        // right part of the plane is culled by near plane
                        // find intersection using left corners
                        mvpCorners[1] = this._getIntersection(mvpCorners[0], tempCulledCorner1.set(-0.95, 1, 0).applyMat4(mVPMatrix));
                        mvpCorners[2] = this._getIntersection(mvpCorners[3], tempCulledCorner2.set(-0.95, -1, 0).applyMat4(mVPMatrix));
                    } else if (clippedCorners[0] === 2 && clippedCorners[1] === 3) {
                        // bottom part of the plane is culled by near plane
                        // find intersection using top corners
                        mvpCorners[2] = this._getIntersection(mvpCorners[1], tempCulledCorner1.set(1, 0.95, 0).applyMat4(mVPMatrix));
                        mvpCorners[3] = this._getIntersection(mvpCorners[0], tempCulledCorner2.set(-1, 0.95, 0).applyMat4(mVPMatrix));
                    } else if (clippedCorners[0] === 0 && clippedCorners[1] === 3) {
                        // left part of the plane is culled by near plane
                        // find intersection using right corners
                        mvpCorners[0] = this._getIntersection(mvpCorners[1], tempCulledCorner1.set(0.95, 1, 0).applyMat4(mVPMatrix));
                        mvpCorners[3] = this._getIntersection(mvpCorners[2], tempCulledCorner2.set(0.95, -1, 0).applyMat4(mVPMatrix));
                    }
                } else if (clippedCorners.length === 3) {
                    // get the corner that is not clipped
                    var nonClippedCorner = 0;

                    for (var i = 0; i < corners.length; i++) {
                        if (!clippedCorners.includes(i)) {
                            nonClippedCorner = i;
                        }
                    } // we will have just 3 corners so reset our mvpCorners array with just the visible corner


                    mvpCorners = [mvpCorners[nonClippedCorner]];

                    if (nonClippedCorner === 0) {
                        // from top left corner to right
                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner1.set(-0.95, 1, 0).applyMat4(mVPMatrix))); // from top left corner to bottom

                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner2.set(-1, 0.95, 0).applyMat4(mVPMatrix)));
                    } else if (nonClippedCorner === 1) {
                        // from top right corner to left
                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner1.set(0.95, 1, 0).applyMat4(mVPMatrix))); // from top right corner to bottom

                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner2.set(1, 0.95, 0).applyMat4(mVPMatrix)));
                    } else if (nonClippedCorner === 2) {
                        // from bottom right corner to left
                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner1.set(0.95, -1, 0).applyMat4(mVPMatrix))); // from bottom right corner to top

                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner2.set(1, -0.95, 0).applyMat4(mVPMatrix)));
                    } else if (nonClippedCorner === 3) {
                        // from bottom left corner to right
                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner1.set(-0.95, -1, 0).applyMat4(mVPMatrix))); // from bottom left corner to top

                        mvpCorners.push(this._getIntersection(mvpCorners[0], tempCulledCorner2.set(-1 - 0.95, 0).applyMat4(mVPMatrix)));
                    }
                } else {
                    // all 4 corners are culled! artificially apply wrong coords to force plane culling
                    for (var _i9 = 0; _i9 < corners.length; _i9++) {
                        mvpCorners[_i9][0] = 10000;
                        mvpCorners[_i9][1] = 10000;
                    }
                }

                return mvpCorners;
            }
        }, {
            key: "_getWorldCoords",
            value:
                /***
                 Useful to get our WebGL plane bounding box in the world space
                 Takes all transformations into account
                 Used internally for frustum culling
                   returns :
                 @boundingRectangle (obj): an object containing our plane WebGL element 4 corners coordinates: top left corner is [-1, 1] and bottom right corner is [1, -1]
                 ***/
                function _getWorldCoords() {
                    var corners = [tempCorner1.set(-1, 1, 0), // plane's top left corner
                    tempCorner2.set(1, 1, 0), // plane's top right corner
                    tempCorner3.set(1, -1, 0), // plane's bottom right corner
                    tempCorner4.set(-1, -1, 0) // plane's bottom left corner
                    ]; // corners with model view projection matrix applied

                    var mvpCorners = []; // eventual clipped corners

                    var clippedCorners = []; // we are going to get our plane's four corners relative to our model view projection matrix

                    for (var i = 0; i < corners.length; i++) {
                        var mvpCorner = corners[i].applyMat4(this._matrices.modelViewProjection.matrix);
                        mvpCorners.push(mvpCorner); // Z position is > 1 or < -1 means the corner is clipped

                        if (Math.abs(mvpCorner.z) > 1) {
                            clippedCorners.push(i);
                        }
                    } // near plane is clipping, get intersections between plane and near plane


                    if (clippedCorners.length) {
                        mvpCorners = this._getNearPlaneIntersections(corners, mvpCorners, clippedCorners);
                    } // we need to check for the X and Y min and max values
                    // use arbitrary integers that will be overriden anyway


                    var minX = Infinity;
                    var maxX = -Infinity;
                    var minY = Infinity;
                    var maxY = -Infinity;

                    for (var _i10 = 0; _i10 < mvpCorners.length; _i10++) {
                        var corner = mvpCorners[_i10];

                        if (corner.x < minX) {
                            minX = corner.x;
                        }

                        if (corner.x > maxX) {
                            maxX = corner.x;
                        }

                        if (corner.y < minY) {
                            minY = corner.y;
                        }

                        if (corner.y > maxY) {
                            maxY = corner.y;
                        }
                    }

                    return {
                        top: maxY,
                        right: maxX,
                        bottom: minY,
                        left: minX
                    };
                }
        }, {
            key: "_computeWebGLBoundingRect",
            value:
                /***
                 Transpose our plane corners coordinates from world space to document space
                 Sets an object with the accurate plane WebGL bounding rect relative to document
                 ***/
                function _computeWebGLBoundingRect() {
                    // get our world space bouding rect
                    var worldBBox = this._getWorldCoords(); // normalize worldBBox to (0 -> 1) screen coordinates with [0, 0] being the top left corner and [1, 1] being the bottom right


                    var screenBBox = {
                        top: 1 - (worldBBox.top + 1) / 2,
                        right: (worldBBox.right + 1) / 2,
                        bottom: 1 - (worldBBox.bottom + 1) / 2,
                        left: (worldBBox.left + 1) / 2
                    };
                    screenBBox.width = screenBBox.right - screenBBox.left;
                    screenBBox.height = screenBBox.bottom - screenBBox.top; // return our values ranging from 0 to 1 multiplied by our canvas sizes + canvas top and left offsets

                    this._boundingRect.worldToDocument = {
                        width: screenBBox.width * this.renderer._boundingRect.width,
                        height: screenBBox.height * this.renderer._boundingRect.height,
                        top: screenBBox.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
                        left: screenBBox.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
                        // add left and width to get right property
                        right: screenBBox.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + screenBBox.width * this.renderer._boundingRect.width,
                        // add top and height to get bottom property
                        bottom: screenBBox.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + screenBBox.height * this.renderer._boundingRect.height
                    };
                }
            /***
             Returns our plane WebGL bounding rect relative to document
               returns :
             @boundingRectangle (obj): an object containing our plane WebGL element bounding rectangle (width, height, top, bottom, right and left properties)
             ***/

        }, {
            key: "getWebGLBoundingRect",
            value: function getWebGLBoundingRect() {
                if (!this._matrices.modelViewProjection) {
                    return this._boundingRect.document;
                } else if (!this._boundingRect.worldToDocument || this.alwaysDraw) {
                    this._computeWebGLBoundingRect();
                }

                return this._boundingRect.worldToDocument;
            }
            /***
             Returns our plane WebGL bounding rectangle in document coordinates including additional drawCheckMargins
               returns :
             @boundingRectangle (obj): an object containing our plane WebGL element bounding rectangle including the draw check margins (top, bottom, right and left properties)
             ***/

        }, {
            key: "_getWebGLDrawRect",
            value: function _getWebGLDrawRect() {
                this._computeWebGLBoundingRect();

                return {
                    top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
                    right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
                    bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
                    left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
                };
            }
            /***
             This function checks if the plane is currently visible in the canvas and sets _shouldDraw property according to this test
             This is our real frustum culling check
             ***/

        }, {
            key: "_shouldDrawCheck",
            value: function _shouldDrawCheck() {
                var _this33 = this;

                // get plane bounding rect
                var actualPlaneBounds = this._getWebGLDrawRect(); // if we decide to draw the plane only when visible inside the canvas
                // we got to check if its actually inside the canvas


                if (Math.round(actualPlaneBounds.right) <= this.renderer._boundingRect.left || Math.round(actualPlaneBounds.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(actualPlaneBounds.bottom) <= this.renderer._boundingRect.top || Math.round(actualPlaneBounds.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height) {
                    if (this._shouldDraw) {
                        this._shouldDraw = false; // callback for leaving view

                        this.renderer.nextRender.add(function () {
                            return _this33._onLeaveViewCallback && _this33._onLeaveViewCallback();
                        });
                    }
                } else {
                    if (!this._shouldDraw) {
                        // callback for entering view
                        this.renderer.nextRender.add(function () {
                            return _this33._onReEnterViewCallback && _this33._onReEnterViewCallback();
                        });
                    }

                    this._shouldDraw = true;
                }
            }
            /***
             This function returns if the plane is actually drawn (ie fully initiated, visible property set to true and not culled)
             ***/

        }, {
            key: "isDrawn",
            value: function isDrawn() {
                return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw);
            }
            /*** DEPTH AND RENDER ORDER ***/

            /***
             This function set/unset the depth test for that plane
               params :
             @shouldEnableDepthTest (bool): enable/disable depth test for that plane
             ***/

        }, {
            key: "enableDepthTest",
            value: function enableDepthTest(shouldEnableDepthTest) {
                this._depthTest = shouldEnableDepthTest;
            }
            /*** SOURCES ***/

            /***
             Load our initial sources if needed and calls onReady callback
             ***/

        }, {
            key: "_initSources",
            value: function _initSources() {
                // finally load every sources already in our plane html element
                // load plane sources
                var loaderSize = 0;

                if (this.autoloadSources) {
                    var images = this.htmlElement.getElementsByTagName("img");
                    var videos = this.htmlElement.getElementsByTagName("video");
                    var canvases = this.htmlElement.getElementsByTagName("canvas"); // load images

                    if (images.length) {
                        this.loadImages(images);
                    } // load videos


                    if (videos.length) {
                        this.loadVideos(videos);
                    } // load canvases


                    if (canvases.length) {
                        this.loadCanvases(canvases);
                    }

                    loaderSize = images.length + videos.length + canvases.length;
                }

                this.loader._setLoaderSize(loaderSize);

                this._canDraw = true;
            }
            /*** DRAWING ***/

            /***
             Specific instructions for the Plane class to execute before drawing it
             ***/

        }, {
            key: "_startDrawing",
            value: function _startDrawing() {
                // check if our plane is ready to draw
                if (this._canDraw) {
                    // even if our plane should not be drawn we still execute its onRender callback and update its uniforms
                    if (this._onRenderCallback) {
                        this._onRenderCallback();
                    } // to improve webgl pipeline performace, we might want to update each texture that needs an update here
                    // see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#texImagetexSubImage_uploads_particularly_with_videos_can_cause_pipeline_flushes
                    // if we should render to a render target


                    if (this.target) {
                        this.renderer.bindFrameBuffer(this.target);
                    } else if (this.renderer.state.scenePassIndex === null) {
                        this.renderer.bindFrameBuffer(null);
                    } // update our perspective matrix


                    this._setPerspectiveMatrix(); // update our mv matrix


                    this._setMVMatrix(); // now check if we really need to draw it and its textures


                    if ((this.alwaysDraw || this._shouldDraw) && this.visible) {
                        this._draw();
                    }
                }
            }
            /*** INTERACTION ***/

            /***
             This function takes the mouse position relative to the document and returns it relative to our plane
             It ranges from -1 to 1 on both axis
               params :
             @mouseCoordinates (Vec2 object): coordinates of the mouse
               returns :
             @mousePosition (Vec2 object): the mouse position relative to our plane in WebGL space coordinates
             ***/

        }, {
            key: "mouseToPlaneCoords",
            value: function mouseToPlaneCoords(mouseCoordinates) {
                identityQuat.setAxisOrder(this.quaternion.axisOrder); // plane has no rotation and transform origin is set to default, no need for real raycasting

                if (identityQuat.equals(this.quaternion) && defaultTransformOrigin.equals(this.transformOrigin)) {
                    return _get(_getPrototypeOf(Plane.prototype), "mouseToPlaneCoords", this).call(this, mouseCoordinates);
                } else {
                    // raycasting
                    // based on https://people.cs.clemson.edu/~dhouse/courses/405/notes/raycast.pdf
                    // convert mouse position to 3d normalised device coordinates (from [-1, -1] to [1, 1])
                    var worldMouse = {
                        x: 2 * (mouseCoordinates.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio)) - 1,
                        y: 2 * (1 - mouseCoordinates.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
                    };
                    var rayOrigin = this.camera.position.clone(); // ray direction based on normalised coordinates and plane translation

                    var rayDirection = tempRayDirection.set(worldMouse.x, worldMouse.y, -0.5); // unproject ray direction

                    rayDirection.unproject(this.camera);
                    rayDirection.sub(rayOrigin).normalize(); // plane normals (could also be [0, 0, 1], makes no difference, raycasting lands the same result for both face)

                    var planeNormals = tempNormals.set(0, 0, -1); // apply plane quaternion to plane normals

                    planeNormals.applyQuat(this.quaternion).normalize();
                    var result = tempRaycast.set(0, 0, 0);
                    var denominator = planeNormals.dot(rayDirection);

                    if (Math.abs(denominator) >= 0.0001) {
                        var inverseViewMatrix = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix); // get the plane's center coordinates
                        // start with our transform origin point


                        var planeOrigin = this._boundingRect.world.transformOrigin.clone().add(this._translation); // rotate our transform origin about world center


                        var rotatedOrigin = tempRotatedOrigin.set(this._translation.x - planeOrigin.x, this._translation.y - planeOrigin.y, this._translation.z - planeOrigin.z);
                        rotatedOrigin.applyQuat(this.quaternion); // add it to our plane origin

                        planeOrigin.add(rotatedOrigin); // distance from ray origin to plane

                        var distance = planeNormals.dot(planeOrigin.clone().sub(rayOrigin)) / denominator;
                        result.copy(rayOrigin.add(rayDirection.multiplyScalar(distance)));
                        result.applyMat4(inverseViewMatrix);
                    } else {
                        // no intersection!
                        result.set(Infinity, Infinity, Infinity);
                    }

                    return castedMouseCoords.set(result.x, result.y);
                }
            }
            /*** EVENTS ***/

            /***
             This is called each time a plane is entering again the view bounding box
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onReEnterView",
            value: function onReEnterView(callback) {
                if (callback) {
                    this._onReEnterViewCallback = callback;
                }

                return this;
            }
            /***
             This is called each time a plane is leaving the view bounding box
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onLeaveView",
            value: function onLeaveView(callback) {
                if (callback) {
                    this._onLeaveViewCallback = callback;
                }

                return this;
            }
        }]);

        return Plane;
    }(DOMMesh);
    /***
     Here we create a RenderTarget class object
       params :
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
       @shaderPass (ShaderPass class object): shader pass that will use that render target. Default to null
     @depth (bool, optional): whether to create a depth buffer (handle depth inside your render target). Default to false.
     @clear (bool, optional): whether the content of the render target should be cleared before being drawn. Should be set to false to handle ping-pong shading. Default to true.
       @minWidth (float, optional): minimum width of the render target
     @minHeight (float, optional): minimum height of the render target
       @texturesOptions (object, optional): options and parameters to apply to the render target texture. See the Texture class object.
       returns :
     @this: our RenderTarget class object
     ***/


    var RenderTarget = /*#__PURE__*/function () {
        function RenderTarget(renderer) {
            var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                shaderPass = _ref12.shaderPass,
                _ref12$depth = _ref12.depth,
                depth = _ref12$depth === void 0 ? false : _ref12$depth,
                _ref12$clear = _ref12.clear,
                clear = _ref12$clear === void 0 ? true : _ref12$clear,
                maxWidth = _ref12.maxWidth,
                maxHeight = _ref12.maxHeight,
                _ref12$minWidth = _ref12.minWidth,
                minWidth = _ref12$minWidth === void 0 ? 1024 : _ref12$minWidth,
                _ref12$minHeight = _ref12.minHeight,
                minHeight = _ref12$minHeight === void 0 ? 1024 : _ref12$minHeight,
                _ref12$texturesOption = _ref12.texturesOptions,
                texturesOptions = _ref12$texturesOption === void 0 ? {} : _ref12$texturesOption;

            _classCallCheck(this, RenderTarget);

            this.type = "RenderTarget"; // we could pass our curtains object OR our curtains renderer object

            renderer = renderer && renderer.renderer || renderer;

            if (!renderer || renderer.type !== "Renderer") {
                throwError(this.type + ": Renderer not passed as first argument", renderer);
            } else if (!renderer.gl) {
                if (!renderer.production) throwError(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"); // return if no gl context

                return;
            }

            this.renderer = renderer;
            this.gl = this.renderer.gl;
            this.index = this.renderer.renderTargets.length;
            this._shaderPass = shaderPass; // whether to create a render buffer

            this._depth = depth;
            this._shouldClear = clear;
            this._maxSize = {
                width: maxWidth ? Math.min(this.renderer.state.maxTextureSize / 4, maxWidth) : this.renderer.state.maxTextureSize / 4,
                // enough!
                height: maxHeight ? Math.min(this.renderer.state.maxTextureSize / 4, maxHeight) : this.renderer.state.maxTextureSize / 4
            };
            this._minSize = {
                width: minWidth * this.renderer.pixelRatio,
                height: minHeight * this.renderer.pixelRatio
            }; // default textures options depends on the type of Mesh and WebGL context

            texturesOptions = Object.assign({
                // set default sampler to "uRenderTexture" and isFBOTexture to true
                sampler: "uRenderTexture",
                isFBOTexture: true,
                premultiplyAlpha: false,
                anisotropy: 1,
                generateMipmap: false,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, texturesOptions);
            this._texturesOptions = texturesOptions;
            this.userData = {};
            this.uuid = generateUUID();
            this.renderer.renderTargets.push(this); // we've added a new object, keep Curtains class in sync with our renderer

            this.renderer.onSceneChange();

            this._initRenderTarget();
        }
        /***
         Init our RenderTarget by setting its size, creating a textures array and then calling _createFrameBuffer()
         ***/


        _createClass(RenderTarget, [{
            key: "_initRenderTarget",
            value: function _initRenderTarget() {
                this._setSize(); // create our render texture


                this.textures = []; // create our frame buffer

                this._createFrameBuffer();
            }
            /*** RESTORING CONTEXT ***/

            /***
             Restore a render target
             Basically just re init it
             ***/

        }, {
            key: "_restoreContext",
            value: function _restoreContext() {
                // reset size
                this._setSize(); // re create our frame buffer and restore its texture


                this._createFrameBuffer();
            }
            /***
             Sets our RenderTarget size based on its parent plane size
             ***/

        }, {
            key: "_setSize",
            value: function _setSize() {
                if (this._shaderPass && this._shaderPass._isScenePass) {
                    this._size = {
                        width: this.renderer._boundingRect.width,
                        height: this.renderer._boundingRect.height
                    };
                } else {
                    this._size = {
                        width: Math.min(this._maxSize.width, Math.max(this._minSize.width, this.renderer._boundingRect.width)),
                        height: Math.min(this._maxSize.height, Math.max(this._minSize.height, this.renderer._boundingRect.height))
                    };
                }
            }
            /***
             Resizes our RenderTarget (only resize it if it's a ShaderPass scene pass FBO)
             ***/

        }, {
            key: "resize",
            value: function resize() {
                // resize render target only if its a child of a shader pass
                if (this._shaderPass) {
                    this._setSize();

                    this.textures[0].resize(); // cancel clear on resize

                    this.renderer.bindFrameBuffer(this, true);

                    if (this._depth) {
                        this._bindDepthBuffer();
                    }

                    this.renderer.bindFrameBuffer(null);
                }
            }
            /***
             Binds our depth buffer
             ***/

        }, {
            key: "_bindDepthBuffer",
            value: function _bindDepthBuffer() {
                // render to our target texture by binding the framebuffer
                if (this._depthBuffer) {
                    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer); // allocate renderbuffer

                    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height); // attach renderbuffer

                    this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer);
                }
            }
            /***
             Here we create our frame buffer object
             We're also adding a render buffer object to handle depth if needed
             ***/

        }, {
            key: "_createFrameBuffer",
            value: function _createFrameBuffer() {
                this._frameBuffer = this.gl.createFramebuffer(); // cancel clear on init

                this.renderer.bindFrameBuffer(this, true); // if textures array is not empty it means we're restoring the context

                if (this.textures.length) {
                    this.textures[0]._parent = this;

                    this.textures[0]._restoreContext();
                } else {
                    // create a texture
                    var texture = new Texture(this.renderer, this._texturesOptions); // adds the render target as parent and adds the texture to our textures array as well

                    texture.addParent(this);
                } // attach the texture as the first color attachment
                // this.textures[0]._sampler.texture contains our WebGLTexture object


                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0); // create a depth renderbuffer

                if (this._depth) {
                    this._depthBuffer = this.gl.createRenderbuffer();

                    this._bindDepthBuffer();
                }

                this.renderer.bindFrameBuffer(null);
            }
            /*** GET THE RENDER TARGET TEXTURE ***/

            /***
             Returns the render target's texture
               returns :
             @texture (Texture class object): our RenderTarget's texture
             ***/

        }, {
            key: "getTexture",
            value: function getTexture() {
                return this.textures[0];
            }
            /*** DESTROYING ***/

            /***
             Remove an element by calling the appropriate renderer method
             ***/

        }, {
            key: "remove",
            value: function remove() {
                // check if it is attached to a shader pass
                if (this._shaderPass) {
                    if (!this.renderer.production) {
                        throwWarning(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass);
                    }

                    return;
                }

                this._dispose();

                this.renderer.removeRenderTarget(this);
            }
            /***
             Delete a RenderTarget buffers and its associated texture
             ***/

        }, {
            key: "_dispose",
            value: function _dispose() {
                if (this._frameBuffer) {
                    this.gl.deleteFramebuffer(this._frameBuffer);
                    this._frameBuffer = null;
                }

                if (this._depthBuffer) {
                    this.gl.deleteRenderbuffer(this._depthBuffer);
                    this._depthBuffer = null;
                }

                this.textures[0]._dispose();

                this.textures = [];
            }
        }]);

        return RenderTarget;
    }();
    /*** SHADERPASS CLASS ***/

    /***
     Here we create our ShaderPass object
     We will extend our DOMMesh class that handles all the WebGL part and basic HTML sizings
     ShaderPass class will add the frame buffer by creating a new RenderTarget class object
       params :
     @renderer (Curtains renderer or Renderer class object): our curtains object OR our curtains renderer object
       @Meshparams (object): see Mesh class object
       @depth (boolean, optionnal): whether the shader pass render target should use a depth buffer (see RenderTarget class object). Default to false.
     @clear (boolean, optional): whether the shader pass render target content should be cleared before being drawn (see RenderTarget class object). Default to true.
     @renderTarget (RenderTarget class object, optional): an already existing render target to use. Default to null.
       returns :
     @this: our ShaderPass element
     ***/


    var ShaderPass = /*#__PURE__*/function (_DOMMesh2) {
        _inherits(ShaderPass, _DOMMesh2);

        var _super4 = _createSuper(ShaderPass);

        function ShaderPass(renderer) {
            var _this34;

            var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                widthSegments = _ref13.widthSegments,
                heightSegments = _ref13.heightSegments,
                renderOrder = _ref13.renderOrder,
                depthTest = _ref13.depthTest,
                cullFace = _ref13.cullFace,
                uniforms = _ref13.uniforms,
                vertexShaderID = _ref13.vertexShaderID,
                fragmentShaderID = _ref13.fragmentShaderID,
                vertexShader = _ref13.vertexShader,
                fragmentShader = _ref13.fragmentShader,
                texturesOptions = _ref13.texturesOptions,
                crossOrigin = _ref13.crossOrigin,
                _ref13$depth = _ref13.depth,
                depth = _ref13$depth === void 0 ? false : _ref13$depth,
                _ref13$clear = _ref13.clear,
                clear = _ref13$clear === void 0 ? true : _ref13$clear,
                renderTarget = _ref13.renderTarget;

            _classCallCheck(this, ShaderPass);

            // force plane defintion to 1x1
            widthSegments = 1;
            heightSegments = 1; // always cull back face

            cullFace = "back"; // use the renderer container as our HTML element to create a DOMMesh object

            _this34 = _super4.call(this, renderer, renderer.container, "ShaderPass", {
                widthSegments: widthSegments,
                heightSegments: heightSegments,
                renderOrder: renderOrder,
                depthTest: depthTest,
                cullFace: cullFace,
                uniforms: uniforms,
                vertexShaderID: vertexShaderID,
                fragmentShaderID: fragmentShaderID,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                texturesOptions: texturesOptions,
                crossOrigin: crossOrigin
            }); // return if no gl context

            if (!_this34.gl) {
                return _possibleConstructorReturn(_this34);
            } // default to scene pass


            _this34._isScenePass = true;
            _this34.index = _this34.renderer.shaderPasses.length;
            _this34._depth = depth;
            _this34._shouldClear = clear;
            _this34.target = renderTarget;

            if (_this34.target) {
                // if there's a target defined it's not a scene pass
                _this34._isScenePass = false; // inherit clear param

                _this34._shouldClear = _this34.target._shouldClear;
            } // if the program is valid, go on


            if (_this34._program.compiled) {
                _this34._initShaderPass(); // add shader pass to our renderer shaderPasses array


                _this34.renderer.shaderPasses.push(_assertThisInitialized(_this34)); // wait one tick before adding our shader pass to the scene to avoid flickering black screen for one frame


                _this34.renderer.nextRender.add(function () {
                    _this34.renderer.scene.addShaderPass(_assertThisInitialized(_this34));
                });
            }

            return _this34;
        }
        /*** RESTORING CONTEXT ***/

        /***
         Used internally to handle context restoration after the program has been successfully compiled again
         ***/


        _createClass(ShaderPass, [{
            key: "_programRestored",
            value: function _programRestored() {
                // add the shader pass to our draw stack again as it have been emptied
                this.renderer.scene.addShaderPass(this); // restore the textures

                for (var i = 0; i < this.textures.length; i++) {
                    this.textures[i]._parent = this;

                    this.textures[i]._restoreContext();
                }

                this._canDraw = true;
            }
            /***
             Here we init additionnal shader pass planes properties
             This mainly consists in creating our render texture and add a frame buffer object
             ***/

        }, {
            key: "_initShaderPass",
            value: function _initShaderPass() {
                // create our frame buffer
                if (!this.target) {
                    this._createFrameBuffer();
                } else {
                    // set the render target
                    this.setRenderTarget(this.target);
                    this.target._shaderPass = this;
                } // create a texture from the render target texture


                var texture = new Texture(this.renderer, {
                    sampler: "uRenderTexture",
                    isFBOTexture: true,
                    fromTexture: this.target.getTexture()
                });
                texture.addParent(this); // onReady callback

                this.loader._setLoaderSize(0);

                this._canDraw = true; // be sure we'll update the scene even if drawing is disabled

                this.renderer.needRender();
            }
            /***
             Here we create our frame buffer object
             We're also adding a render buffer object to handle depth inside our shader pass
             ***/

        }, {
            key: "_createFrameBuffer",
            value: function _createFrameBuffer() {
                var target = new RenderTarget(this.renderer, {
                    shaderPass: this,
                    clear: this._shouldClear,
                    depth: this._depth,
                    texturesOptions: this._texturesOptions
                });
                this.setRenderTarget(target);
            }
            /*** DRAWING ***/

            /***
             Specific instructions for the Shader pass class to execute before drawing it
             ***/

        }, {
            key: "_startDrawing",
            value: function _startDrawing() {
                // check if our plane is ready to draw
                if (this._canDraw) {
                    // even if our plane should not be drawn we still execute its onRender callback and update its uniforms
                    if (this._onRenderCallback) {
                        this._onRenderCallback();
                    } // to improve webgl pipeline performance, we might want to update each texture that needs an update here
                    // see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#texImagetexSubImage_uploads_particularly_with_videos_can_cause_pipeline_flushes


                    if (this._isScenePass) {
                        // if this is a scene pass, check if theres one more coming next and eventually bind it
                        if (this.renderer.state.scenePassIndex + 1 < this.renderer.scene.stacks.scenePasses.length) {
                            this.renderer.bindFrameBuffer(this.renderer.scene.stacks.scenePasses[this.renderer.state.scenePassIndex + 1].target);
                            this.renderer.state.scenePassIndex++;
                        } else {
                            this.renderer.bindFrameBuffer(null);
                        }
                    } else if (this.renderer.state.scenePassIndex === null) {
                        // we are rendering a bunch of planes inside a render target, unbind it
                        this.renderer.bindFrameBuffer(null);
                    } // force attribute buffer bindings update


                    this.renderer.state.forceBufferUpdate = true; // now check if we really need to draw it and its textures

                    this._draw();
                }
            }
        }]);

        return ShaderPass;
    }(DOMMesh);
    /*** FBO PING PONG PLANE CLASS ***/

    /***
     A little helper to create a plane that will perform FBO ping pong
     This plane will use FBOs swapping, using these following steps:
     - create two render targets (read and write)
     - create a texture onto which we'll draw
     - before drawing our plane (onRender callback), apply the write pass as our plane render target
     - after drawing our plane (onAfterRender callback), swap the read and write pass and copy the read pass texture again
       params:
     @sampler (string): sampler name used to create our texture and that will be used inside your shader
     @planeParams: see Plane class object
       returns :
     @this: our PingPongPlane element
     ***/


    var PingPongPlane = /*#__PURE__*/function (_Plane) {
        _inherits(PingPongPlane, _Plane);

        var _super5 = _createSuper(PingPongPlane);

        function PingPongPlane(curtains, htmlElement) {
            var _this35;

            var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref14$sampler = _ref14.sampler,
                sampler = _ref14$sampler === void 0 ? "uPingPongTexture" : _ref14$sampler,
                widthSegments = _ref14.widthSegments,
                heightSegments = _ref14.heightSegments,
                renderOrder = _ref14.renderOrder,
                depthTest = _ref14.depthTest,
                cullFace = _ref14.cullFace,
                uniforms = _ref14.uniforms,
                vertexShaderID = _ref14.vertexShaderID,
                fragmentShaderID = _ref14.fragmentShaderID,
                vertexShader = _ref14.vertexShader,
                fragmentShader = _ref14.fragmentShader,
                texturesOptions = _ref14.texturesOptions,
                crossOrigin = _ref14.crossOrigin,
                alwaysDraw = _ref14.alwaysDraw,
                visible = _ref14.visible,
                transparent = _ref14.transparent,
                drawCheckMargins = _ref14.drawCheckMargins,
                autoloadSources = _ref14.autoloadSources,
                watchScroll = _ref14.watchScroll,
                fov = _ref14.fov;

            _classCallCheck(this, PingPongPlane);

            // force depthTest and autoloadSources to false
            depthTest = false;
            autoloadSources = false; // create our plane

            _this35 = _super5.call(this, curtains, htmlElement, {
                widthSegments: widthSegments,
                heightSegments: heightSegments,
                renderOrder: renderOrder,
                depthTest: depthTest,
                cullFace: cullFace,
                uniforms: uniforms,
                vertexShaderID: vertexShaderID,
                fragmentShaderID: fragmentShaderID,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                texturesOptions: texturesOptions,
                crossOrigin: crossOrigin,
                alwaysDraw: alwaysDraw,
                visible: visible,
                transparent: transparent,
                drawCheckMargins: drawCheckMargins,
                autoloadSources: autoloadSources,
                watchScroll: watchScroll,
                fov: fov
            }); // return if no gl context

            if (!_this35.gl) {
                return _possibleConstructorReturn(_this35);
            } // remove from stack, update type to PingPongPlane and then stack again


            _this35.renderer.scene.removePlane(_assertThisInitialized(_this35));

            _this35.type = "PingPongPlane";

            _this35.renderer.scene.addPlane(_assertThisInitialized(_this35)); // create 2 render targets


            _this35.readPass = new RenderTarget(curtains, {
                depth: false,
                clear: false,
                texturesOptions: texturesOptions
            });
            _this35.writePass = new RenderTarget(curtains, {
                depth: false,
                clear: false,
                texturesOptions: texturesOptions
            }); // create a texture where we'll draw

            _this35.createTexture({
                sampler: sampler
            }); // wait for both render targets textures to be ready and force a copy of the current target texture
            // even if the swap already began
            // this seems to fix some erratic bugs


            var nbPassesReady = 0;

            _this35.readPass.getTexture().onSourceUploaded(function () {
                nbPassesReady++;

                _this35._checkIfReady(nbPassesReady);
            });

            _this35.writePass.getTexture().onSourceUploaded(function () {
                nbPassesReady++;

                _this35._checkIfReady(nbPassesReady);
            }); // directly assign a render target


            _this35.setRenderTarget(_this35.readPass); // override onRender and onAfterRender callbacks


            _this35._onRenderCallback = function () {
                // update the render target
                if (_this35.readPass && _this35.writePass && _this35.textures[0] && _this35.textures[0]._uploaded) {
                    _this35.setRenderTarget(_this35.writePass);
                }

                _this35._onPingPongRenderCallback && _this35._onPingPongRenderCallback();
            };

            _this35._onAfterRenderCallback = function () {
                // swap FBOs and update texture
                if (_this35.readPass && _this35.writePass && _this35.textures[0] && _this35.textures[0]._uploaded) {
                    _this35._swapPasses();
                }

                _this35._onPingPongAfterRenderCallback && _this35._onPingPongAfterRenderCallback();
            };

            return _this35;
        }
        /***
         Copy the current target texture once both render targets textures have been uploaded
         Wait for next tick to be sure our texture is correctly initiated
         ***/


        _createClass(PingPongPlane, [{
            key: "_checkIfReady",
            value: function _checkIfReady(loadedTextures) {
                var _this36 = this;

                if (loadedTextures === 2) {
                    this.renderer.nextRender.add(function () {
                        _this36.textures[0].copy(_this36.target.getTexture());
                    });
                }
            }
            /***
             After each draw call, we'll swap the 2 render targets and copy the read pass texture again
             ***/

        }, {
            key: "_swapPasses",
            value: function _swapPasses() {
                // swap read and write passes
                var tempFBO = this.readPass;
                this.readPass = this.writePass;
                this.writePass = tempFBO; // apply new texture

                this.textures[0].copy(this.readPass.getTexture());
            }
            /***
             Returns the created texture where we're writing
             ***/

        }, {
            key: "getTexture",
            value: function getTexture() {
                return this.textures[0];
            }
            /*** OVERRIDE USED EVENTS ***/

            /***
             This is called at each requestAnimationFrame call
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onRender",
            value: function onRender(callback) {
                if (callback) {
                    this._onPingPongRenderCallback = callback;
                }

                return this;
            }
            /***
             This is called at each requestAnimationFrame call
               params :
             @callback (function) : a function to execute
               returns :
             @this: our plane to handle chaining
             ***/

        }, {
            key: "onAfterRender",
            value: function onAfterRender(callback) {
                if (callback) {
                    this._onPingPongAfterRenderCallback = callback;
                }

                return this;
            }
            /*** DESTROYING ***/

            /***
             Override the regular remove method to remove the 2 render targets
             ***/

        }, {
            key: "remove",
            value: function remove() {
                this.target = null; // force unbinding frame buffer

                this.renderer.bindFrameBuffer(null);

                if (this.writePass) {
                    this.writePass.remove();
                    this.writePass = null;
                }

                if (this.readPass) {
                    this.readPass.remove();
                    this.readPass = null;
                } // call original remove method


                _get(_getPrototypeOf(PingPongPlane.prototype), "remove", this).call(this);
            }
        }]);

        return PingPongPlane;
    }(Plane);
    /*** FXAAPASS CLASS ***/

    /***
     Here we create our FXAAPass object
     This is just a regular ShaderPass with preset shaders and a resolution uniform
       params: see ShaderPas class object
       returns :
     @this: our FXAAPass element
     ***/


    var FXAAPass = /*#__PURE__*/function (_ShaderPass) {
        _inherits(FXAAPass, _ShaderPass);

        var _super6 = _createSuper(FXAAPass);

        function FXAAPass(curtains) {
            var _this37;

            var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                renderOrder = _ref15.renderOrder,
                depthTest = _ref15.depthTest,
                texturesOptions = _ref15.texturesOptions,
                crossOrigin = _ref15.crossOrigin,
                depth = _ref15.depth,
                clear = _ref15.clear,
                renderTarget = _ref15.renderTarget;

            _classCallCheck(this, FXAAPass);

            // taken from https://github.com/spite/Wagner/blob/master/fragment-shaders/fxaa-fs.glsl
            var fragmentShader = "\n            precision mediump float;\n            \n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n        \n            uniform sampler2D uRenderTexture;\n            \n            uniform vec2 uResolution;\n            \n            #define FXAA_REDUCE_MIN   (1.0/128.0)\n            #define FXAA_REDUCE_MUL   (1.0/8.0)\n            #define FXAA_SPAN_MAX     8.0\n            \n            void main() {\n                vec2 res = 1.0 / uResolution;\n            \n                vec3 rgbNW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, -1.0) * res)).xyz;\n                vec3 rgbNE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, -1.0) * res)).xyz;\n                vec3 rgbSW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, 1.0) * res)).xyz;\n                vec3 rgbSE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, 1.0) * res)).xyz;\n                vec4 rgbaM = texture2D(uRenderTexture, vTextureCoord.xy * res);\n                vec3 rgbM = rgbaM.xyz;\n                vec3 luma = vec3(0.299, 0.587, 0.114);\n            \n                float lumaNW = dot(rgbNW, luma);\n                float lumaNE = dot(rgbNE, luma);\n                float lumaSW = dot(rgbSW, luma);\n                float lumaSE = dot(rgbSE, luma);\n                float lumaM  = dot(rgbM,  luma);\n                float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n                float lumaMax = max(lumaM, max(max(lumaNW, lumaNE) , max(lumaSW, lumaSE)));\n            \n                vec2 dir;\n                dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n                dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n            \n                float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n            \n                float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n                dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n                      max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                            dir * rcpDirMin)) * res;\n                vec4 rgbA = (1.0/2.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (1.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (2.0/3.0 - 0.5)));\n                vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (0.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (3.0/3.0 - 0.5)));\n                float lumaB = dot(rgbB, vec4(luma, 0.0));\n            \n                if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n                    gl_FragColor = rgbA;\n                } else {\n                    gl_FragColor = rgbB;\n                }\n            }\n        ";
            var uniforms = {
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: [0, 0] // will be updated after having called super()

                }
            };
            _this37 = _super6.call(this, curtains, {
                fragmentShader: fragmentShader,
                uniforms: uniforms,
                // Mesh params
                renderOrder: renderOrder,
                depthTest: depthTest,
                texturesOptions: texturesOptions,
                crossOrigin: crossOrigin,
                depth: depth,
                clear: clear,
                renderTarget: renderTarget
            }); // return if no gl context

            if (!_this37.gl) {
                return _possibleConstructorReturn(_this37);
            } // update the resolution uniform


            _this37.uniforms.resolution.value = [_this37.renderer._boundingRect.width, _this37.renderer._boundingRect.height]; // override onAfterResize callback

            _this37._onAfterResizeCallback = function () {
                // update the resolution uniform
                _this37.uniforms.resolution.value = [_this37.renderer._boundingRect.width, _this37.renderer._boundingRect.height];
                _this37._onFXAAPassAfterResizeCallback && _this37._onFXAAPassAfterResizeCallback();
            };

            return _this37;
        }
        /***
         This is called each time the FXAAPass has been resized
           params :
         @callback (function) : a function to execute
           returns :
         @this: our FXAAPass to handle chaining
         ***/


        _createClass(FXAAPass, [{
            key: "onAfterResize",
            value: function onAfterResize(callback) {
                if (callback) {
                    this._onFXAAPassAfterResizeCallback = callback;
                }

                return this;
            }
        }]);

        return FXAAPass;
    }(ShaderPass);

    exports.Curtains = Curtains;
    exports.FXAAPass = FXAAPass;
    exports.Mat4 = Mat4;
    exports.PingPongPlane = PingPongPlane;
    exports.Plane = Plane;
    exports.Quat = Quat;
    exports.RenderTarget = RenderTarget;
    exports.ShaderPass = ShaderPass;
    exports.Texture = Texture;
    exports.TextureLoader = TextureLoader;
    exports.Vec2 = Vec2;
    exports.Vec3 = Vec3;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});
;