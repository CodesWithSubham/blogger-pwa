"use strict";(()=>{var u=JSON.parse('{"github":{"repository":"CodesWithSubham/blogger-pwa","branch":"main"},"pwa":{"serviceWorker":"/app/serviceworker.js","oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"********-****-****-****-************","allowLocalhostAsSecureOrigin":true},"logs":true},"build":{"hash":"f7i79laKTp7u1FdRTQJUZ"}}');var f=["keydown","mouseover","touchmove","touchstart","scroll","click"],p={reject(){},resolve(){}},t=new Promise((i,n)=>{p={resolve:i,reject:n}});Object.assign(t,{localKey:"__is_lazied",localValue:String(!0)});Object.defineProperties(t,{lazied:{get(){try{return localStorage.getItem(this.localKey)===String(this.localValue)}catch(i){return!0}},set(i){try{i?localStorage.setItem(this.localKey,String(this.localValue)):localStorage.removeItem(this.localKey)}catch(n){}}}});var l=i=>{t.lazied=!0,p.resolve({type:i.type});for(let n of f)window.removeEventListener(n,l)};if(t.lazied)p.resolve({type:"localStorage"});else{(document.documentElement.scrollTop!==0||document.body&&document.body.scrollTop!==0)&&l({type:"scroll"});for(let i of f)window.addEventListener(i,l)}var a=u.pwa,c=(i,n)=>{if(a.logs){console.groupCollapsed.apply(console,Array.isArray(i)?i:[i]);for(let e of n)console.log.apply(console,Array.isArray(e)?e:[e]);console.groupEnd()}};if("serviceWorker"in navigator){navigator.serviceWorker.register(a.serviceWorker,{scope:"/"}).then(n=>{var o;let e=[];n.scope&&e.push([`Scope: ${n.scope}`]),(o=n.active)!=null&&o.scriptURL&&e.push([`Script:  ${n.active.scriptURL}`]),e.push(["Build by: Fineshop Design"],["Developer site: https://fineshopdesign.com"]),c(["%cService Worker: Registered Successfully","color: green"],e)}).catch(n=>{c(["%cService Worker: Registration Failed","color: red"],["Error:",n])});let i=n=>e=>{e.init(n).then(()=>{let o=[["Version:",e.VERSION]],r=e.config,g=e.User.PushSubscription,h=e.Notifications,d=window.location.origin;if(r){o.push(["App ID:",r.appId]),o.push(["Origin:",r.origin]),o.push(["Site Name:",r.siteName]);let s=r.userConfig;s&&(s.serviceWorkerParam&&o.push(["Scope:",d+s.serviceWorkerParam.scope]),o.push(["Script:",d+s.path+s.serviceWorkerPath]))}g.id&&o.push(["Subscription ID:",g.id]),o.push(["Notification:",h.permissionNative]),c(["%cOneSignal: Initialized Successfully","color: green"],o)}).catch(o=>{c(["%cOneSignal: Initialization Failed","color: red"],["Error:",o])})};if(a.oneSignalEnabled){let n=Object.assign({},a.oneSignalConfig);window.OneSignalDeferred=window.OneSignalDeferred||[],window.OneSignalDeferred.push(i(n)),typeof OneSignal=="undefined"&&t.then(()=>{let e=document.createElement("script");e.src=a.oneSignalSDK,e.async=!0,e.defer=!0;let o=document.getElementsByTagName("script")[0];o!=null&&o.parentNode?o.parentNode.insertBefore(e,o):document.head.appendChild(e)})}}})();
