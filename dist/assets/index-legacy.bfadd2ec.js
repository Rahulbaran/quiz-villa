!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var p={};function d(){}function m(){}function h(){}var g={};l(g,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==n&&o.call(x,a)&&(g=x);var y=h.prototype=d.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function v(t,r){function n(i,a,c,s){var l=f(t[i],t,a);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==e(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):r.resolve(p).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,s)}))}s(l.arg)}var i;this._invoke=function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return i=i?i.then(o,o):o()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=h,l(y,"constructor",h),l(h,"constructor",m),m.displayName=l(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},t.awrap=function(e){return{__await:e}},w(v.prototype),l(v.prototype,c,(function(){return this})),t.AsyncIterator=v,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new v(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),l(y,s,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function n(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=document.createElement("style");a.innerHTML='@import"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Lora:ital,wght@0,600;0,700;1,700&family=Poppins:wght@400;500&display=swap";html{font-size:75%;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;scrollbar-width:thin;scrollbar-color:#1f1f93 white}*,*:after,*:before{margin:0;padding:0;-webkit-box-sizing:inherit;box-sizing:inherit}:root{--font-stack-poppins: "Poppins", sans-serif;--font-stack-heebo: "Heebo", sans-serif;--font-stack-lora: "Lora", sans-serif}@media (prefers-reduced-motion){html{scroll-behavior:auto}}@media (prefers-reduced-motion: no-preference){html{scroll-behavior:smooth}}@media screen and (min-width: 481px){html{font-size:90%}}@media screen and (min-width: 769px){html{font-size:100%}}@media screen and (min-width: 1261px){html{font-size:110%}}body{min-height:100vh;background-image:-o-linear-gradient(bottom right,rgba(0,0,255,.6),rgba(255,0,0,.6)),-o-repeating-linear-gradient(45deg,#d1d1fa 0,#d1d1fa 10px,#ffcccc 10px,#ffcccc 20px,#dedeed 20px,#dedeed 30px);background-image:-webkit-gradient(linear,right bottom,left top,from(rgba(0,0,255,.6)),to(rgba(255,0,0,.6))),repeating-linear-gradient(45deg,#d1d1fa 0,#d1d1fa 10px,#ffcccc 10px,#ffcccc 20px,#dedeed 20px,#dedeed 30px);background-image:linear-gradient(to top left,rgba(0,0,255,.6),rgba(255,0,0,.6)),repeating-linear-gradient(45deg,#d1d1fa 0,#d1d1fa 10px,#ffcccc 10px,#ffcccc 20px,#dedeed 20px,#dedeed 30px);background-image:-o-linear-gradient(bottom right,rgba(0,0,255,.6),rgba(255,0,0,.6)),-o-repeating-linear-gradient(45deg,#d1d1fa 0 10px,#ffcccc 10px 20px,#dedeed 20px 30px);background-image:-webkit-gradient(linear,right bottom,left top,from(rgba(0,0,255,.6)),to(rgba(255,0,0,.6))),repeating-linear-gradient(45deg,#d1d1fa 0 10px,#ffcccc 10px 20px,#dedeed 20px 30px);background-image:linear-gradient(to top left,rgba(0,0,255,.6),rgba(255,0,0,.6)),repeating-linear-gradient(45deg,#d1d1fa 0 10px,#ffcccc 10px 20px,#dedeed 20px 30px);background-attachment:fixed;background-color:#999;font-weight:400;font-size:1rem;font-family:Heebo,sans-serif;font-family:var(--font-stack-heebo);line-height:1.35;position:relative}::-webkit-scrollbar{height:9px;width:9px}::-webkit-scrollbar-track{background-color:#fff;-webkit-box-shadow:2px 0 5px rgba(0,0,0,.2) inset;box-shadow:2px 0 5px rgba(0,0,0,.2) inset}::-webkit-scrollbar-thumb{background-color:#1f1f93;border-radius:2px}::-webkit-scrollbar-thumb:hover{background-color:#161669}h1,h2,h3,h4,h5,h6{line-height:1.0125}button{margin-top:.5rem;background-color:#eb4747;color:#fff;border:none;font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins);font-size:inherit;padding:.675rem 1rem;border-radius:4px;-webkit-transition:background-color .3s ease-in;-o-transition:background-color .3s ease-in;transition:background-color .3s ease-in}button:hover{cursor:pointer;background-color:#0a0a43;-webkit-transition:background-color .3s ease-out;-o-transition:background-color .3s ease-out;transition:background-color .3s ease-out}.container{height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.user--form__container .app--heading{background-color:#0a0a43;-ms-flex-item-align:stretch;align-self:stretch;padding:1rem;text-align:center;-webkit-box-shadow:0 2px 1px rgba(0,0,0,.25);box-shadow:0 2px 1px rgba(0,0,0,.25)}.user--form__container .app--heading>*{color:#dbdbff}.user--form__container .app--heading h1{font-family:Lora,sans-serif;font-family:var(--font-stack-lora);text-transform:uppercase;margin-bottom:.375rem;font-size:1.9rem}.user--form__container .app--heading p{-webkit-text-decoration:underline 1px wavy currentColor;text-decoration:underline 1px wavy currentColor;text-underline-offset:3px;letter-spacing:.5px}.user--form__container .user__form{width:25rem;max-width:94%;margin-left:auto;margin-right:auto;background-color:#fff;padding:1rem;border-radius:5px;-webkit-box-shadow:2px 2px 20px rgba(0,0,0,.1);box-shadow:2px 2px 20px rgba(0,0,0,.1)}.user--form__container .user__form button{font-size:1.05rem}.user--form__container .form__group{margin-bottom:.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.user--form__container .form__group label{color:#eb4747;font-weight:500;font-size:1.05rem}.user--form__container .form__group input,.user--form__container .form__group select{padding:.5rem;font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins);font-size:inherit}.user--form__container>*:last-child{font-family:Lora,sans-serif;font-family:var(--font-stack-lora);-ms-flex-item-align:end;align-self:flex-end;text-transform:uppercase;letter-spacing:1px;font-weight:700}.instructions--wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;position:fixed;top:0;right:0;bottom:0;left:0}.instructions__bg--layer{background-color:rgba(0,0,0,.6);position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1}.instructions__list{width:32rem;max-width:95%;margin-left:auto;margin-right:auto;background-color:#e6e6ff;padding:2rem 1rem;border-radius:4px;position:relative;-webkit-box-shadow:0 0 20px rgba(0,0,0,.4);box-shadow:0 0 20px rgba(0,0,0,.4)}.instructions__list button{position:absolute;top:10px;right:15px;background-color:transparent;border:none;padding:.125rem;font-weight:600;font-size:1.1rem;color:#0a0a43}.instructions__list button:hover{cursor:pointer}.instructions__list h2{color:#f53d3d;margin-bottom:1.5rem;-webkit-text-decoration:underline 2px wavy currentColor;text-decoration:underline 2px wavy currentColor;text-underline-offset:1px}.instructions__list p{margin-bottom:.375rem;color:#0a0a43;font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins)}.instructions__list h4{color:#03037c;margin-top:1rem;font-size:1.1rem}.questions--container{display:none}.questions--container .quiz__heading{background-color:#0a0a43;-ms-flex-item-align:stretch;align-self:stretch;padding:1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-shadow:0 2px 1px rgba(0,0,0,.25);box-shadow:0 2px 1px rgba(0,0,0,.25)}.questions--container .quiz__heading>*{color:#dbdbff}.questions--container .quiz__heading p{font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins);font-size:1.1rem;letter-spacing:.5px}.questions--container .question__wrapper{width:450px;max-width:96%;margin-left:auto;margin-right:auto;background-color:#fff;padding:1.5rem;border-radius:5px;-webkit-box-shadow:2px 2px 20px rgba(0,0,0,.1);box-shadow:2px 2px 20px rgba(0,0,0,.1);font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins)}.questions--container .question__wrapper .question{font-size:1.2rem;color:#eb4747;margin-bottom:.5rem;font-weight:500}.questions--container .question__wrapper .options{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:.25rem}.questions--container .question__wrapper .options label{color:#0d0da5}.questions--container .question__wrapper .next__btn{letter-spacing:.5px}.questions--container .timer__wrapper{-ms-flex-item-align:end;align-self:flex-end;background-color:#75ffff;padding:.5rem;font-weight:500}.questions--container .timer__wrapper p:only-child{font-size:1.05rem;color:#0b0b8e}.score--container{display:none}.score--container h2{padding:1rem;text-align:center;-webkit-box-shadow:0 2px 1px rgba(0,0,0,.25);box-shadow:0 2px 1px rgba(0,0,0,.25);background-color:#0a0a43;font-family:Lora,sans-serif;font-family:var(--font-stack-lora);text-transform:uppercase;color:#dbdbff}.score--container .user__score--details>div{padding:1rem;font-family:Poppins,sans-serif;font-family:var(--font-stack-poppins)}.score--container .user__score--details>div h4{color:#f53d3d;letter-spacing:.5px;margin-bottom:.5rem;font-weight:500}.score--container .user__score--details>div p{font-size:.9rem;line-height:1.215}.score--container .user__score--details>div p span:first-child{font-weight:500}.score--container .user__score--details>div p span:last-child{color:#006}.score--container .user__score--details>div p:first-of-type span:first-child{color:#00c}.score--container .user__score--details>div p:last-of-type span:first-child{color:#2b8000}.score--container .user__score--details>div:nth-child(even){background-color:#e6e6ff}.score--container .user__score--details>div:nth-child(odd){background-color:#fff}.score--container .restart__btn{margin:1rem;padding:.875rem 3rem;background-color:#0a0a43}.score--container .restart__btn:hover{background-color:#e83030}\n',document.head.appendChild(a),System.register([],(function(){"use strict";return{execute:function(){var e,o,i=document.querySelector(".user--form__container"),a=document.querySelector(".instructions__show--btn"),c=document.querySelector(".instructions__hide--btn"),s=document.querySelector(".instructions__bg--layer"),l=document.querySelector(".instructions--wrapper"),u=document.querySelector(".user__form"),f=document.getElementById("fullname"),p=document.getElementById("questions__quantity"),d=document.getElementById("difficulty__level"),m=document.querySelector(".questions--container"),h=document.querySelector(".username"),g=document.querySelector(".total__questions"),b=document.querySelector(".minutes"),x=document.querySelector(".seconds"),y=document.querySelector(".question__no"),w=document.querySelector(".question__label"),v=document.querySelectorAll(".option__group label"),_=document.querySelectorAll(".option__group input"),k=document.querySelector(".next__btn"),q=document.querySelector(".score--container"),L=document.querySelector(".user__score"),S=document.querySelector(".quiz__score"),E=document.querySelector(".user__score--details"),j=document.querySelector(".restart__btn"),z=0,A=0,C=new Map;null==a||a.addEventListener("click",(function(){return l.style.display="flex"})),null==c||c.addEventListener("click",(function(){return l.style.display="none"})),null==s||s.addEventListener("click",(function(){return l.style.display="none"})),null==u||u.addEventListener("submit",(function(e){e.preventDefault();var t=new Map([["fullname",f.value],["totalQues",p.value],["diffLevel",d.value]]);i.style.display="none",P(t)}));var P=function(){var e,t=(e=r().mark((function e(t){var n,i,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://the-trivia-api.com/api/questions?categories=general_knowledge,science,geography&limit=".concat(t.get("totalQues"),"&region=IN&difficulty=").concat(t.get("diffLevel")),e.next=3,fetch(n,{method:"GET"});case 3:return e.next=5,e.sent.json();case 5:i=e.sent,a=new Map([[10,120],[15,180],[20,240],[25,300]]),I(i),o=parseInt(t.get("totalQues")),O(t.get("fullname"),o,a.get(parseInt(t.get("totalQues"))));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,s,"next",e)}function s(e){n(a,o,i,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),I=function(r){e=r.map((function(e){return{question:e.question,options:[].concat(t(e.incorrectAnswers),[e.correctAnswer]).sort(),answer:e.correctAnswer}}))},O=function(e,t,r){m.style.display="flex",h.textContent=e,g.textContent=t,G(),N(r)},G=function(){y.textContent="".concat(z+1,"."),w.textContent=e[z].question,v.forEach((function(t,r){t.textContent=e[z].options[r],_[r].value=e[z].options[r]}))},N=function(e){var t=Date.now()+1e3*e,r=setInterval((function(){var e=Date.now(),n=t-e,o=[Math.floor(n/6e4),Math.floor(n%6e4/1e3)],i=o[0],a=o[1];b.textContent="0".concat(i),x.textContent=a<10?"0".concat(a):a,n<=0&&(clearInterval(r),T())}))};null==k||k.addEventListener("click",(function(){_.forEach((function(t){t.checked&&(C.set(z,t.value),t.checked=!1,C.get(z)===e[z].answer&&A++)})),++z<o?G():T()}));var T=function(){m.style.display="none",q.style.display="block",L.textContent=A,S.textContent=o,e.forEach((function(e,t){var r=C.get(t),n='<div><h4 class="question"><span class="question__index">'.concat(t+1,".</span>\n      <span>").concat(e.question,'</span></h4>\n      <p class="user__answer"><span>Your Answer ➡ </span><span>').concat(r?r===e.answer?r:r+" ❌":"❌",'</span>\n      </p><p class="correct__answer"><span>Correct Answer ➡ </span><span>').concat(e.answer,"</span>\n      </p></div>");E.insertAdjacentHTML("beforeend",n)}))};null==j||j.addEventListener("click",(function(){q.style.display="none",m.style.display="none",i.style.display="flex",E.textContent="",e=void 0,o=void 0,z=0,A=0,C.clear()}))}}}))}();