import{T as w,X as v,V as N,s as g,M as V,a as x,c as T,F as O,O as X,b as p,G as h,d as b,S as m,C as q,e as u,f as S,g as z,D,$ as i}from"./vendor.2eab1d9b.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};R();new w({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var j=new N({center:[115,35],zoom:6,projection:"EPSG:4326"});new g({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var c=new V({target:"map",layers:[],view:j}),A=new g({units:"metric",target:"scalebar",className:"ol-scale-line"}),I=new x({className:"mosuePosition",coordinateFormat:T(6),projection:"EPSG:4326",target:document.getElementById("position")}),W=new O,_=function(){c.addControl(A)},B=function(){c.addControl(W)},H=function(){c.addControl(I)},f=[],F=[],L=[],J=".layers";function Y(e,t){e.addEventListener("click",function(){this.checked?t.setVisible(!0):t.setVisible(!1)})}var $=function(){for(var e=c.getLayers(),t=document.querySelector(J),r=0;r<e.getArray().length;r++){f[r]=e.item(r),F[r]=f[r].get("name"),L[r]=f[r].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+F[r]+"</label>",t.appendChild(n),L[r]&&(n.firstElementChild.checked=!0),Y(n.firstElementChild,f[r])}},K=new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),Z=new v({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),Q=new X,U=new p({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new h,projection:"EPSG:4326"}),ee=new p({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new h,projection:"EPSG:4326"}),d={tiandiVec:K,tiandiMark:Z,OSM:Q,city:U,province:ee},te=function(e){for(var t in d)if(t==e){var r=new w({title:e,name:e,source:d[e]});c.addLayer(r);break}},k=function(e){for(var t in d)if(t==e){var r=new b({title:e,name:e,source:d[e]});c.addLayer(r);break}},P=function(e,t){for(var r=e.getSource(),n=r.getFeatures(),a=String(t).split(),o=".*",s=0;s<a.length;s++)o=o+(a[s]+".*");for(var G=new RegExp(o),l=0;l<n.length;l++){var M=String(n[l].get("name")).trim();if(M.match(G))return n[l]}return null},C=function(e){for(var t=c.getLayers(),r=0;r<t.getArray().length;r++){var n=t.item(r);if(n.get("name")==e)return n}return null},re=c.getView(),ae=function(e){re.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},ne=new m({image:new q({radius:10,fill:new u({color:"#dc143c"})})}),oe=new m({stroke:new S({color:"#dc143c",width:1.25}),fill:new u({color:"rgba(0.5,0.5,0.5,0.1)"}),zIndex:999}),ie=function(e){e.setStyle(ne)},ce=function(e){e.setStyle(oe)},y,E=new p({wrapX:!1}),se=new b({source:E,style:new m({fill:new u({color:"rgba(255,255,255,0.2)"}),stroke:new S({color:"#ff0000",width:2}),image:new z({radius:7,fill:new u({color:"#ff0000"})})})}),le=function(e,t){return t||(t=new ol.geom.Point(e)),t.setCoordinates(e),t};c.addLayer(se);var ue=function(){y=new D({source:E,type:"Point",geometryFunction:le}),c.addInteraction(y)},fe=function(){c.removeInteraction(y)};te("OSM");k("city");k("province");_();B();H();$();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var t=C("city"),r=P(t,e);r!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+r.getGeometry().getCoordinates()),ie(r),ae(r)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});i(".info-bar button").on("click",function(){var e=new XMLHttpRequest;e.open("GET","/project/GetDensePointProvince");var t=null;e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){t=JSON.parse(e.response);var r=C("province");if(t==null){console.log("NetWork Error!");return}else{for(var n="",a=0;a<3;a++){var o=P(r,t[a].name);ce(o),n+=t[a].name+","+t[a].points,n+=";",console.log(n)}n=n.slice(0,n.length-1),console.log(n),i(".info-bar .info").text("\u5BC6\u5EA6\u6700\u9AD8\u7684\u4E09\u4E2A\u7701\u4EFD\u4E3A: "+n)}}},e.send()});i(".create-point").on("click",function(){ue()});i(".quit-create").on("click",function(){fe()});
//# sourceMappingURL=index.df1b8fb7.js.map