import{r as s,h as t}from"./p-2dc6ed97.js";const i=class{constructor(t){s(this,t),this.ionicon="code-working",this.showApp=!0}async close(){this.showApp=!1}handleClick(){this.showApp=!this.showApp}render(){return[t("ion-fab-button",{class:"fab",onClick:this.handleClick.bind(this)},t("ion-icon",{name:this.ionicon})),t("style",null,"::slotted(:first-child) ","{","display: ",this.showApp?"block":"none",";","}"),t("slot",null)]}static get style(){return".fab{-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;position:fixed;right:50px;bottom:50px;width:60px;height:60px}.fab:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}::slotted(:first-child){width:400px;height:65%;position:fixed;right:50px;bottom:130px;-webkit-box-shadow:0 0 .5em .2em #666;box-shadow:0 0 .5em .2em #666;z-index:10000}\@media screen and (max-width:700px){::slotted(:first-child){width:100%;height:100%;right:0;bottom:0}}"}};export{i as fab_app};