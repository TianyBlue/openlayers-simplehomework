import{T as v,X as f,V as h,s as m,M as w,a as b,c as S,F as L,O as F,b as k,G as x,d as V,e as C,P as M,$ as i}from"./vendor.fff82900.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};P();new v({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new f({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var E=new h({center:[115,35],zoom:6,projection:"EPSG:4326"});new m({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var l=new w({target:"map",layers:[],view:E}),G=new m({units:"metric",target:"scalebar",className:"ol-scale-line"}),N=new b({className:"mosuePosition",coordinateFormat:S(6),projection:"EPSG:4326",target:document.getElementById("position")}),O=new L,T=function(){l.addControl(G)},X=function(){l.addControl(O)},z=function(){l.addControl(N)},c=[],y=[],g=[],A=".layers";function q(r,e){r.addEventListener("click",function(){this.checked?e.setVisible(!0):e.setVisible(!1)})}var D=function(){for(var r=l.getLayers(),e=document.querySelector(A),t=0;t<r.getArray().length;t++){c[t]=r.item(t),y[t]=c[t].get("name"),g[t]=c[t].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+y[t]+"</label>",e.appendChild(n),g[t]&&(n.firstElementChild.checked=!0),q(n.firstElementChild,c[t])}},_=new f({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),j=new f({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),B=new F,I=new k({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new x,projection:"EPSG:4326"}),u={tiandiVec:_,tiandiMark:j,OSM:B,city:I},Y=function(r){for(var e in u)if(e==r){var t=new v({title:r,name:r,source:u[r]});l.addLayer(t);break}},H=function(r){for(var e in u)if(e==r){var t=new V({title:r,name:r,source:u[r]});l.addLayer(t);break}},J=function(r,e){for(var t=l.getLayers(),n=0;n<t.getArray().length;n++){var a=t.item(n);if(a.get("name")==r)for(var o=a.getSource().getFeatures(),s=0;s<o.length;s++){var p=String(o[s].get("name"));if(p.trim()==e)return o[s]}}return null},K=l.getView(),d=new C({geometry:new M}),W=function(){var r=d.getGeometry().getExtent();console.log(d.getGeometry().getCoordinates()),console.log(r),K.animate({center:d.getGeometry().getCoordinates(),duration:2e3,easing:function(e){var t=7.5625,n=2.75,a;return e<1/n?a=t*e*e:e<2/n?(e-=1.5/n,a=t*e*e+.75):e<2.5/n?(e-=2.25/n,a=t*e*e+.9375):(e-=2.625/n,a=t*e*e+.984375),a}})};Y("OSM");H("city");T();X();z();D();i(".pic-nav").on("mouseenter",function(r){i(this).animate({left:0},function(){i(".pic-nav").hide().css("left",-.8*i(".pic-nav").width()),i(".nav").show()})});i(".nav").on("mouseleave",function(r){i(this).animate({left:-.8*i(this).width()},function(){i(".nav").hide().css("left",0),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var r=i(this).siblings("input").val();console.log(r);var e=J("city",r);W(),console.log(e)});
//# sourceMappingURL=index.668bfd56.js.map
