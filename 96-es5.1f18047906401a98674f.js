(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{tJwM:function(n,a,i){"use strict";i.r(a),i.d(a,"mdTransitionAnimation",(function(){return o}));var e=i("CZWo"),o=function(n,a){var i="back"===a.direction,o=a.leavingEl,r=t(a.enteringEl),c=r.querySelector("ion-toolbar"),s=Object(e.a)();if(s.addElement(r).fill("both").beforeRemoveClass("ion-page-invisible"),i?s.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):s.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){var d=Object(e.a)();d.addElement(c),s.addAnimation(d)}if(o&&i){s.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var u=Object(e.a)();u.addElement(t(o)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),s.addAnimation(u)}return s},t=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}}}]);