import{r as t,e as s,h as i,H as a,d as e}from"./p-2dc6ed97.js";const o=class{constructor(s){t(this,s),this.edge=!1,this.activated=!1,this.onClick=()=>{const t=!!this.el.querySelector("ion-fab-list"),s=this.getFab();t&&(!s||!s.disabled)&&(this.activated=!this.activated)}}activatedChanged(){const t=this.activated,s=this.getFab();s&&(s.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(s=>{s.activated=t})}componentDidLoad(){this.activated&&this.activatedChanged()}async close(){this.activated=!1}getFab(){return this.el.querySelector("ion-fab-button")}render(){const{horizontal:t,vertical:e,edge:o}=this,n=s(this);return i(a,{onClick:this.onClick,class:{[n]:!0,[`fab-horizontal-${t}`]:void 0!==t,[`fab-vertical-${e}`]:void 0!==e,"fab-edge":o}},i("slot",null))}get el(){return e(this)}static get watchers(){return{activated:["activatedChanged"]}}static get style(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"}};export{o as ion_fab};