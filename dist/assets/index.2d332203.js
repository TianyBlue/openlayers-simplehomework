import{T as m,X as d,V as C,s as y,M as E,a as G,c as M,F as N,O as T,b as g,G as w,d as V,S as h,C as O,e as b,f as X,$ as i}from"./vendor.07cba0ae.js";const z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};z();new m({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var R=new C({center:[115,35],zoom:6,projection:"EPSG:4326"});new y({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var s=new E({target:"map",layers:[],view:R}),j=new y({units:"metric",target:"scalebar",className:"ol-scale-line"}),q=new G({className:"mosuePosition",coordinateFormat:M(6),projection:"EPSG:4326",target:document.getElementById("position")}),A=new N,D=function(){s.addControl(j)},I=function(){s.addControl(A)},W=function(){s.addControl(q)},u=[],S=[],F=[],_=".layers";function B(e,r){e.addEventListener("click",function(){this.checked?r.setVisible(!0):r.setVisible(!1)})}var H=function(){for(var e=s.getLayers(),r=document.querySelector(_),t=0;t<e.getArray().length;t++){u[t]=e.item(t),S[t]=u[t].get("name"),F[t]=u[t].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+S[t]+"</label>",r.appendChild(n),F[t]&&(n.firstElementChild.checked=!0),B(n.firstElementChild,u[t])}},J=new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),Y=new d({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),K=new T,Z=new g({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new w,projection:"EPSG:4326"}),$=new g({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new w,projection:"EPSG:4326"}),v={tiandiVec:J,tiandiMark:Y,OSM:K,city:Z,province:$},Q=function(e){for(var r in v)if(r==e){var t=new m({title:e,name:e,source:v[e]});s.addLayer(t);break}},L=function(e){for(var r in v)if(r==e){var t=new V({title:e,name:e,source:v[e]});s.addLayer(t);break}},f=function(e,r){for(var t=e.getSource(),n=t.getFeatures(),a=String(r).split(),o=".*",l=0;l<a.length;l++)o=o+(a[l]+".*");for(var x=new RegExp(o),c=0;c<n.length;c++){var P=String(n[c].get("name")).trim();if(P.match(x))return n[c]}return null},p=function(e){for(var r=s.getLayers(),t=0;t<r.getArray().length;t++){var n=r.item(t);if(n.get("name")==e)return n}return null},U=s.getView(),ee=function(e){U.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},te=new h({image:new O({radius:10,fill:new b({color:"#dc143c"})})}),re=new h({stroke:new X({color:"#dc143c",width:1.25}),fill:new b({color:"rgba(0.5,0.5,0.5,0.1)"}),zIndex:999}),ae=function(e){e.setStyle(te)},k=function(e){e.setStyle(re)};Q("OSM");L("city");L("province");D();I();W();H();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var r=p("city"),t=f(r,e);t!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+t.getGeometry().getCoordinates()),ae(t),ee(t)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});window.setTimeout(function(){var e=p("province"),r=f(e,"\u5C71\u4E1C");k(r)},3e3);i(".info-bar button").on("click",function(){var e=new XMLHttpRequest;e.open("GET","/project/GetDensePointProvince");var r=null;e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){r=JSON.parse(e.response);var t=p("province");if(r==null){console.log("NetWork Error!");return}else for(var n=0;n<3;n++){var a=f(t,r[n].name);k(a)}}},e.send()});
//# sourceMappingURL=index.2d332203.js.map
