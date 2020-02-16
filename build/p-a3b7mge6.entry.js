import{r as i,e as s,c as t,h as r,H as e,d as o}from"./p-2dc6ed97.js";import"./p-251a23b9.js";import{g as a}from"./p-f1a4df63.js";import{c}from"./p-148ba63e.js";import{B as n,i as h,p as l,a as p,d,e as k,s as u}from"./p-805bf4bf.js";const b=i=>{const s=c(),t=c(),r=c();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),r.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),s.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t,r])},m=i=>{const s=c(),t=c(),r=c();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),r.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),s.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t,r])},v=class{constructor(r){i(this,r),this.mode=s(this),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.dispatchCancelHandler=i=>{if(h(i.detail.role)){const i=this.buttons.find(i=>"cancel"===i.role);this.callButtonHandler(i)}},l(this.el),this.didPresent=t(this,"ionPickerDidPresent",7),this.willPresent=t(this,"ionPickerWillPresent",7),this.willDismiss=t(this,"ionPickerWillDismiss",7),this.didDismiss=t(this,"ionPickerDidDismiss",7)}async present(){await p(this,"pickerEnter",b,b,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(i,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),d(this,i,s,"pickerLeave",m,m)}onDidDismiss(){return k(this.el,"ionPickerDidDismiss")}onWillDismiss(){return k(this.el,"ionPickerWillDismiss")}getColumn(i){return Promise.resolve(this.columns.find(s=>s.name===i))}async buttonClick(i){const s=i.role;return h(s)?this.dismiss(void 0,s):await this.callButtonHandler(i)?this.dismiss(this.getSelected(),i.role):Promise.resolve()}async callButtonHandler(i){return!i||!1!==await u(i.handler,this.getSelected())}getSelected(){const i={};return this.columns.forEach((s,t)=>{const r=void 0!==s.selectedIndex?s.options[s.selectedIndex]:void 0;i[s.name]={text:r?r.text:void 0,value:r?r.value:void 0,columnIndex:t}}),i}render(){const i=s(this);return r(e,{"aria-modal":"true",class:Object.assign({[i]:!0,[`picker-${i}`]:!0},a(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler},r("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),r("div",{class:"picker-wrapper",role:"dialog"},r("div",{class:"picker-toolbar"},this.buttons.map(i=>r("div",{class:D(i)},r("button",{type:"button",onClick:()=>this.buttonClick(i),class:P(i)},i.text)))),r("div",{class:"picker-columns"},r("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(i=>r("ion-picker-column",{col:i})),r("div",{class:"picker-below-highlight"}))))}get el(){return o(this)}static get style(){return".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity,0.26);color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}"}},D=i=>({[`picker-toolbar-${i.role}`]:void 0!==i.role,"picker-toolbar-button":!0}),P=i=>Object.assign({"picker-button":!0,"ion-activatable":!0},a(i.cssClass));export{v as ion_picker};