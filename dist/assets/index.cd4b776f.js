import{T as f,X as v,V as x,s as m,M as k,a as C,c as V,F as E,O as M,b as p,G as y,d as P,S as G,C as N,e as T,$ as i}from"./vendor.e546cdd5.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}};O();new f({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var X=new x({center:[115,35],zoom:6,projection:"EPSG:4326"});new m({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var s=new k({target:"map",layers:[],view:X}),z=new m({units:"metric",target:"scalebar",className:"ol-scale-line"}),A=new C({className:"mosuePosition",coordinateFormat:V(6),projection:"EPSG:4326",target:document.getElementById("position")}),j=new E,q=function(){s.addControl(z)},D=function(){s.addControl(j)},_=function(){s.addControl(A)},u=[],g=[],w=[],B=".layers";function I(e,r){e.addEventListener("click",function(){this.checked?r.setVisible(!0):r.setVisible(!1)})}var R=function(){for(var e=s.getLayers(),r=document.querySelector(B),t=0;t<e.getArray().length;t++){u[t]=e.item(t),g[t]=u[t].get("name"),w[t]=u[t].getVisible();var o=document.createElement("li");o.innerHTML='<input type="checkbox" name="layers"><label>'+g[t]+"</label>",r.appendChild(o),w[t]&&(o.firstElementChild.checked=!0),I(o.firstElementChild,u[t])}},W=new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),Y=new v({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),H=new M,J=new p({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new y,projection:"EPSG:4326"}),K=new p({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new y,projection:"EPSG:4326"}),d={tiandiVec:W,tiandiMark:Y,OSM:H,city:J,province:K},Z=function(e){for(var r in d)if(r==e){var t=new f({title:e,name:e,source:d[e]});s.addLayer(t);break}},h=function(e){for(var r in d)if(r==e){var t=new P({title:e,name:e,source:d[e]});s.addLayer(t);break}},b=function(e,r){for(var t=e.getSource(),o=t.getFeatures(),a=String(r).split(),n=".*",c=0;c<a.length;c++)n=n+(a[c]+".*");for(var F=new RegExp(n),l=0;l<o.length;l++){var L=String(o[l].get("name")).trim();if(L.match(F))return o[l]}return null},S=function(e){for(var r=s.getLayers(),t=0;t<r.getArray().length;t++){var o=r.item(t);if(o.get("name")==e)return o}return null},$=s.getView(),Q=function(e){$.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},U=new G({image:new N({radius:10,fill:new T({color:"#dc143c"})})}),ee=function(e){e.setStyle(U)};Z("OSM");h("city");h("province");q();D();_();R();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var r=S("city"),t=b(r,e);t!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+t.getGeometry().getCoordinates()),ee(t),Q(t)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});window.setTimeout(function(){var e=S("province"),r=b(e,"\u5C71\u4E1C");console.log(r)},3e3);
//# sourceMappingURL=index.cd4b776f.js.map
