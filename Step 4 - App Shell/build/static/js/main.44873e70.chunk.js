(this["webpackJsonphow-to-build-a-pwa"]=this["webpackJsonphow-to-build-a-pwa"]||[]).push([[0],{13:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js")}))},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=n(1),i=n.n(s),u=n(4),p=n(6),f=n(5),l=n.n(f);var h=function(){var e=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://fortunecookieapi.herokuapp.com/v1/fortunes/").then((function(e){return e.json()}));case 2:t=e.sent,n=Math.floor(Math.random()*t.length)+1,o(t[n].message);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a}();return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:"/logo-512x512.png"}),a.a.createElement("p",null,e))};n(13);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.44873e70.chunk.js.map