import{r as t,c as s,w as i,f as h,e as n,h as e,d as o,H as r}from"./p-2dc6ed97.js";const a=class{constructor(i){t(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const s=this.el.offsetHeight;if(0===s)return 2;const i=t.scrollTop,h=t.offsetHeight,n=0!==this.thrPc?h*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-s-i-n-h:i-s-n)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.ionInfinite=s(this,"ionInfinite",7)}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}disabledChanged(){const t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&i(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const s=t.scrollHeight-t.scrollTop;requestAnimationFrame(()=>{h(()=>{const h=t.scrollHeight-s;requestAnimationFrame(()=>{i(()=>{t.scrollTop=h,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const t=n(this);return e(r,{class:{[t]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}static get style(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}};export{a as ion_infinite_scroll};