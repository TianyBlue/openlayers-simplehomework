import{T as f,X as d,V as h,s as v,M as w,a as b,c as S,F as L,O as F,b as k,G as x,d as m,e as C,S as V,C as M,f as E,$ as o}from"./vendor.bdcd305b.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}};N();new f({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var O=new h({center:[115,35],zoom:6,projection:"EPSG:4326"});new v({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var l=new w({target:"map",layers:[],view:O}),P=new v({units:"metric",target:"scalebar",className:"ol-scale-line"}),T=new b({className:"mosuePosition",coordinateFormat:S(6),projection:"EPSG:4326",target:document.getElementById("position")}),G=new L,X=function(){l.addControl(P)},z=function(){l.addControl(G)},A=function(){l.addControl(T)},c=[],y=[],p=[],q=".layers";function D(e,r){e.addEventListener("click",function(){this.checked?r.setVisible(!0):r.setVisible(!1)})}var _=function(){for(var e=l.getLayers(),r=document.querySelector(q),t=0;t<e.getArray().length;t++){c[t]=e.item(t),y[t]=c[t].get("name"),p[t]=c[t].getVisible();var i=document.createElement("li");i.innerHTML='<input type="checkbox" name="layers"><label>'+y[t]+"</label>",r.appendChild(i),p[t]&&(i.firstElementChild.checked=!0),D(i.firstElementChild,c[t])}},j=new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),B=new d({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),I=new F,Y=new k({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new x,projection:"EPSG:4326"}),u={tiandiVec:j,tiandiMark:B,OSM:I,city:Y},$=function(e){for(var r in u)if(r==e){var t=new f({title:e,name:e,source:u[e]});l.addLayer(t);break}},H=function(e){for(var r in u)if(r==e){var t=new m({title:e,name:e,source:u[e]});l.addLayer(t);break}},J=function(e,r){for(var t=l.getLayers(),i=0;i<t.getArray().length;i++){var a=t.item(i);if(a.get("name")==e)for(var n=a.getSource().getFeatures(),s=0;s<n.length;s++){var g=String(n[s].get("name"));if(g.trim()==r)return n[s]}}return null},K=new C;K.on("click",function(){console.log(this)});var R=new m;R.on({});var W=l.getView(),Z=function(e){W.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},Q=new V({image:new M({radius:10,fill:new E({color:"#dc143c"})})}),U=function(e){e.setStyle(Q)};$("OSM");H("city");X();z();A();_();o(".pic-nav").on("mouseenter",function(e){o(this).hide(),o(".nav").show().stop().animate({left:0})});o(".nav").on("mouseleave",function(e){o(this).stop().animate({left:-.8*o(this).width()},function(){o(".nav").hide(),o(".pic-nav").show()})});o(".searchBar button").on("click",function(){var e=o(this).siblings("input").val();console.log(e);var r=J("city",e);r!=null?o(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+r.getGeometry().getCoordinates()):o(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002"),U(r),Z(r)});
//# sourceMappingURL=index.ad19abfa.js.map
