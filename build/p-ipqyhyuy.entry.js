import{r as s,e as a,h as t,j as r,H as i,d as o,i as _}from"./p-2dc6ed97.js";const e=class{constructor(a){s(this,a)}componentDidLoad(){c(()=>{const s=_(window,"hybrid");r.getBoolean("_testing")||__sc_import_rasa("./p-5b54350c.js").then(s=>s.startTapClick(r)),r.getBoolean("statusTap",s)&&__sc_import_rasa("./p-f09f5f0c.js").then(s=>s.startStatusTap()),r.getBoolean("inputShims",n())&&__sc_import_rasa("./p-05a47253.js").then(s=>s.startInputShims(r)),r.getBoolean("hardwareBackButton",s)&&__sc_import_rasa("./p-105bab28.js").then(s=>s.startHardwareBackButton()),__sc_import_rasa("./p-b9bccfd6.js").then(s=>s.startFocusVisible())})}render(){const s=a(this);return t(i,{class:{[s]:!0,"ion-page":!0,"force-statusbar-padding":r.getBoolean("_forceStatusbarPadding")}})}get el(){return o(this)}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}},n=()=>_(window,"ios")&&_(window,"mobile"),c=s=>{"requestIdleCallback"in window?window.requestIdleCallback(s):setTimeout(s,32)};export{e as ion_app};