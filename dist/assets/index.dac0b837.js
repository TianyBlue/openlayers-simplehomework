import{T as f,X as d,V as x,s as m,M as P,a as V,c as E,F as M,O as T,b as y,G as p,d as G,S as w,C as N,e as g,f as O,$ as i}from"./vendor.07cba0ae.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};X();new f({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var z=new x({center:[115,35],zoom:6,projection:"EPSG:4326"});new m({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var s=new P({target:"map",layers:[],view:z}),A=new m({units:"metric",target:"scalebar",className:"ol-scale-line"}),R=new V({className:"mosuePosition",coordinateFormat:E(6),projection:"EPSG:4326",target:document.getElementById("position")}),j=new M,q=function(){s.addControl(A)},D=function(){s.addControl(j)},_=function(){s.addControl(R)},u=[],h=[],b=[],B=".layers";function I(e,r){e.addEventListener("click",function(){this.checked?r.setVisible(!0):r.setVisible(!1)})}var W=function(){for(var e=s.getLayers(),r=document.querySelector(B),t=0;t<e.getArray().length;t++){u[t]=e.item(t),h[t]=u[t].get("name"),b[t]=u[t].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+h[t]+"</label>",r.appendChild(n),b[t]&&(n.firstElementChild.checked=!0),I(n.firstElementChild,u[t])}},Y=new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),H=new d({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),J=new T,K=new y({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new p,projection:"EPSG:4326"}),Z=new y({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new p,projection:"EPSG:4326"}),v={tiandiVec:Y,tiandiMark:H,OSM:J,city:K,province:Z},$=function(e){for(var r in v)if(r==e){var t=new f({title:e,name:e,source:v[e]});s.addLayer(t);break}},S=function(e){for(var r in v)if(r==e){var t=new G({title:e,name:e,source:v[e]});s.addLayer(t);break}},F=function(e,r){for(var t=e.getSource(),n=t.getFeatures(),a=String(r).split(),o=".*",l=0;l<a.length;l++)o=o+(a[l]+".*");for(var L=new RegExp(o),c=0;c<n.length;c++){var k=String(n[c].get("name")).trim();if(k.match(L))return n[c]}return null},C=function(e){for(var r=s.getLayers(),t=0;t<r.getArray().length;t++){var n=r.item(t);if(n.get("name")==e)return n}return null},Q=s.getView(),U=function(e){Q.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},ee=new w({image:new N({radius:10,fill:new g({color:"#dc143c"})})}),te=new w({stroke:new O({color:"#234152",width:1.25}),fill:new g({color:"#CCCCCC"})}),re=function(e){e.setStyle(ee)},ae=function(e){e.setStyle(te)};$("OSM");S("city");S("province");q();D();_();W();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var r=C("city"),t=F(r,e);t!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+t.getGeometry().getCoordinates()),re(t),U(t)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});window.setTimeout(function(){var e=C("province"),r=F(e,"\u5C71\u4E1C");ae(r)},3e3);
//# sourceMappingURL=index.dac0b837.js.map
