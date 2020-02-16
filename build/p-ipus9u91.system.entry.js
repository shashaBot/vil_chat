var __awaiter=this&&this.__awaiter||function(e,t,r,o){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function a(e){try{l(o.next(e))}catch(t){n(t)}}function s(e){try{l(o["throw"](e))}catch(t){n(t)}}function l(e){e.done?r(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];i=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-88d97a9c.system.js","./p-778d4295.system.js","./p-2294249a.system.js","./p-02b26cbc.system.js","./p-83999f54.system.js","./p-4ae599ad.system.js","./p-1284c5fd.system.js","./p-fd7b2785.system.js"],(function(e){"use strict";var t,r,o,i,n,a,s,l,p,c,u,f,v,d,h,m;return{setters:[function(e){t=e.r;r=e.e;o=e.c;i=e.h;n=e.H;a=e.d},function(){},function(e){s=e.g},function(e){l=e.c},function(e){p=e.B;c=e.p;u=e.a;f=e.d;v=e.e},function(e){d=e.a;h=e.d},function(){},function(e){m=e.d}],execute:function(){var y=function(e,t){var r="top";var o="left";var i=e.querySelector(".popover-content");var n=i.getBoundingClientRect();var a=n.width;var s=n.height;var p=e.ownerDocument.defaultView.innerWidth;var c=e.ownerDocument.defaultView.innerHeight;var u=t&&t.target&&t.target.getBoundingClientRect();var f=u!=null&&"top"in u?u.top:c/2-s/2;var v=u!=null&&"left"in u?u.left:p/2;var d=u&&u.width||0;var h=u&&u.height||0;var m=e.querySelector(".popover-arrow");var y=m.getBoundingClientRect();var g=y.width;var w=y.height;if(u==null){m.style.display="none"}var D={top:f+h,left:v+d/2-g/2};var E={top:f+h+(w-1),left:v+d/2-a/2};var P=false;var k=false;if(E.left<b+25){P=true;E.left=b}else if(a+b+E.left+25>p){k=true;E.left=p-a-b;o="right"}if(f+h+s>c&&f-s>0){D.top=f-(w+1);E.top=f-s-(w-1);e.className=e.className+" popover-bottom";r="bottom"}else if(f+h+s>c){i.style.bottom=b+"%"}m.style.top=D.top+"px";m.style.left=D.left+"px";i.style.top=E.top+"px";i.style.left=E.left+"px";if(P){i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"}if(k){i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"}i.style.transformOrigin=r+" "+o;var x=l();var _=l();var S=l();_.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)");S.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return x.addElement(e).easing("ease").duration(100).addAnimation([_,S])};var b=5;var g=function(e){var t=l();var r=l();var o=l();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var w=function(e,t){var r=12;var o=e.ownerDocument;var i=o.dir==="rtl";var n="top";var a=i?"right":"left";var s=e.querySelector(".popover-content");var p=s.getBoundingClientRect();var c=p.width;var u=p.height;var f=o.defaultView.innerWidth;var v=o.defaultView.innerHeight;var d=t&&t.target&&t.target.getBoundingClientRect();var h=d!=null&&"bottom"in d?d.bottom:v/2-u/2;var m=d!=null&&"left"in d?i?d.left-c+d.width:d.left:f/2-c/2;var y=d&&d.height||0;var b={top:h,left:m};if(b.left<r){b.left=r;a="left"}else if(c+r+b.left>f){b.left=f-c-r;a="right"}if(h+y+u>v&&h-u>0){b.top=h-u-y;e.className=e.className+" popover-bottom";n="bottom"}else if(h+y+u>v){s.style.bottom=r+"px"}var g=l();var w=l();var D=l();var E=l();var P=l();w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)");D.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);E.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":n+" "+a}).fromTo("transform","scale(0.001)","scale(1)");P.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,D,E,P])};var D=function(e){var t=l();var r=l();var o=l();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var E=e("ion_popover",function(){function e(e){var i=this;t(this,e);this.presented=false;this.mode=r(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();i.dismiss()};this.onBackdropTap=function(){i.dismiss(undefined,p)};this.onLifecycle=function(e){var t=i.usersElement;var r=P[e.type];if(t&&r){var o=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(o)}};c(this.el);this.didPresent=o(this,"ionPopoverDidPresent",7);this.willPresent=o(this,"ionPopoverWillPresent",7);this.willDismiss=o(this,"ionPopoverWillDismiss",7);this.didDismiss=o(this,"ionPopoverDidDismiss",7)}e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this;return[4,d(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,m(this.usersElement)];case 2:o.sent();return[2,u(this,"popoverEnter",y,w,this.event)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return[4,f(this,e,t,"popoverLeave",g,D,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,h(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}}))}))};e.prototype.onDidDismiss=function(){return v(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return v(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var t=r(this);var o=this.onLifecycle;return i(n,{"aria-modal":"true","no-router":true,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},s(this.cssClass)),(e={},e[t]=true,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},i("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),i("div",{class:"popover-wrapper"},i("div",{class:"popover-arrow"}),i("div",{class:"popover-content"})))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity,0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"},enumerable:true,configurable:true});return e}());var P={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}}));