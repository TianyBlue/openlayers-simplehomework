import{T as f,X as d,V as g,s as v,M as h,a as b,c as w,F as S,O as L,b as k,G as F,d as x,$ as o}from"./vendor.a310f410.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};M();new f({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var V=new g({center:[115,35],zoom:6,projection:"EPSG:4326"});new v({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var c=new h({target:"map",layers:[],view:V}),C=new v({units:"metric",target:"scalebar",className:"ol-scale-line"}),E=new b({className:"mosuePosition",coordinateFormat:w(6),projection:"EPSG:4326",target:document.getElementById("position")}),N=new S,O=function(){c.addControl(C)},P=function(){c.addControl(N)},T=function(){c.addControl(E)},l=[],m=[],y=[],G=".layers";function X(e,n){e.addEventListener("click",function(){this.checked?n.setVisible(!0):n.setVisible(!1)})}var z=function(){for(var e=c.getLayers(),n=document.querySelector(G),t=0;t<e.getArray().length;t++){l[t]=e.item(t),m[t]=l[t].get("name"),y[t]=l[t].getVisible();var i=document.createElement("li");i.innerHTML='<input type="checkbox" name="layers"><label>'+m[t]+"</label>",n.appendChild(i),y[t]&&(i.firstElementChild.checked=!0),X(i.firstElementChild,l[t])}},A=new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),q=new d({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),D=new L,_=new k({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new F,projection:"EPSG:4326"}),u={tiandiVec:A,tiandiMark:q,OSM:D,city:_},B=function(e){for(var n in u)if(n==e){var t=new f({title:e,name:e,source:u[e]});c.addLayer(t);break}},I=function(e){for(var n in u)if(n==e){var t=new x({title:e,name:e,source:u[e]});c.addLayer(t);break}},Y=function(e,n){var t=c.getLayers();console.log(t);for(var i=0;i<t.getArray().length;i++){var r=t.item(i);if(console.log(r),r.get("name")==e){var a=r.getSource().getFeatures();console.log(a);for(var s=0;s<a.length;s++){console.log(a[s]);var p=String(a[s].get("name"));if(p.trim()==n)return a[s]}}}return null};B("OSM");I("city");O();P();T();z();o(".pic-nav").on("mouseenter",function(e){o(this).animate({left:0},function(){o(".pic-nav").hide().css("left",-.8*o(".pic-nav").width()),o(".nav").show()})});o(".nav").on("mouseleave",function(e){o(this).animate({left:-.8*o(this).width()},function(){o(".nav").hide().css("left",0),o(".pic-nav").show()})});o(".searchBar button").on("click",function(){var e=o(this).siblings("input").val();console.log(e);var n=Y("city",e);console.log(n)});
//# sourceMappingURL=index.866ff47c.js.map
