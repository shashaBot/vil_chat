var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(r.next(t))}catch(e){a(e)}}function s(t){try{u(r["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):i(t.value).then(o,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-88d97a9c.system.js","./p-778d4295.system.js","./p-2294249a.system.js"],(function(t,e){"use strict";var n,r,i,a,o,s,u,l,c,f;return{setters:[function(t){n=t.r;r=t.c;i=t.w;a=t.e;o=t.h;s=t.H;u=t.d},function(t){l=t.p},function(t){c=t.c;f=t.h}],execute:function(){var d=t("ion_segment",function(){function t(t){var e=this;n(this,t);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.onClick=function(t){var n=t.target;var r=e.checked;e.value=n.value;if(r&&e.scrollable){e.checkButton(r,n)}e.checked=n};this.ionChange=r(this,"ionChange",7);this.ionStyle=r(this,"ionStyle",7)}t.prototype.valueChanged=function(t){if(this.didInit){this.ionChange.emit({value:t})}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,n=t;e<n.length;e++){var r=n[e];r.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture&&!this.scrollable){this.gesture.enable(!this.disabled)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;var n=this;return __generator(this,(function(r){switch(r.label){case 0:this.setCheckedClasses();t=this;return[4,e.import("./p-59502d8d.system.js")];case 1:t.gesture=r.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.gesture.enable(!this.scrollable);this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);var e=this.setNextIndex(t,true);t.event.preventDefault();t.event.stopImmediatePropagation();if(e){this.addRipple(t)}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))};t.prototype.addRipple=function(t){var e=this;var n=this.getButtons();var r=n.find((function(t){return t.value===e.value}));var i=r.shadowRoot.querySelector("ion-ripple-effect");if(!i){return}var a=l(t.event),o=a.x,s=a.y;i.addRipple(o,s).then((function(t){return t()}))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var n=t.event.target;var r=this.getButtons();var i=r.find((function(t){return t.value===e.value}));if(n.tagName!=="ION-SEGMENT-BUTTON"){return}if(!i){this.value=n.value}if(this.value===n.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){return t.shadowRoot&&t.shadowRoot.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var n=this.getIndicator(t);var r=this.getIndicator(e);if(n===null||r===null){return}var a=n.getBoundingClientRect();var o=r.getBoundingClientRect();var s=a.width/o.width;var u=a.left-o.left;var l="translate3d("+u+"px, 0, 0) scaleX("+s+")";i((function(){r.classList.remove("segment-button-indicator-animated");r.style.setProperty("transform",l);r.getBoundingClientRect();r.classList.add("segment-button-indicator-animated");r.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var n=e.findIndex((function(e){return e.value===t.value}));var r=n+1;this.checked=e.find((function(e){return e.value===t.value}));for(var i=0,a=e;i<a.length;i++){var o=a[i];o.classList.remove("segment-button-after-checked")}if(r<e.length){e[r].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var n=this;if(e===void 0){e=false}var r=document.dir==="rtl";var i=this.activated;var a=this.getButtons();var o=a.findIndex((function(t){return t.value===n.value}));var s=a[o];var u;var l;if(o===-1){return}var c=s.getBoundingClientRect();var f=c.left;var d=c.width;var h=t.currentX;var v=c.y;var p=document.elementFromPoint(h,v);var g=r?h>f+d:h<f;var y=r?h<f:h>f+d;if(i&&!e){if(g){var b=o-1;if(b>=0){l=b}}else if(y){if(i&&!e){var b=o+1;if(b<a.length){l=b}}}if(l!==undefined&&!a[l].disabled){u=a[l]}}if(!i&&e){u=p}if(u!=null){if(u.tagName==="ION-SEGMENT"){return false}if(s!==u){this.checkButton(s,u)}}return true};t.prototype.emitStyle=function(){this.ionStyle.emit({segment:true})};t.prototype.render=function(){var t;var e=a(this);return o(s,{onClick:this.onClick,class:Object.assign(Object.assign({},c(this.color)),(t={},t[e]=true,t["in-toolbar"]=f("ion-toolbar",this.el),t["in-toolbar-color"]=f("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},o("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background,var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb),.11)}"},enumerable:true,configurable:true});return t}())}}}));