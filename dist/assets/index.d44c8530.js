import{T as m,X as d,V as k,s as y,M as x,a as C,c as P,F as V,O as E,b as p,G as g,d as h,e as M,S as G,C as N,f as O,$ as i}from"./vendor.bdcd305b.js";const T=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};T();new m({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var X=new k({center:[115,35],zoom:6,projection:"EPSG:4326"});new y({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var l=new x({target:"map",layers:[],view:X}),z=new y({units:"metric",target:"scalebar",className:"ol-scale-line"}),A=new C({className:"mosuePosition",coordinateFormat:P(6),projection:"EPSG:4326",target:document.getElementById("position")}),j=new V,q=function(){l.addControl(z)},D=function(){l.addControl(j)},_=function(){l.addControl(A)},u=[],w=[],b=[],$=".layers";function B(t,a){t.addEventListener("click",function(){this.checked?a.setVisible(!0):a.setVisible(!1)})}var I=function(){for(var t=l.getLayers(),a=document.querySelector($),e=0;e<t.getArray().length;e++){u[e]=t.item(e),w[e]=u[e].get("name"),b[e]=u[e].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+w[e]+"</label>",a.appendChild(n),b[e]&&(n.firstElementChild.checked=!0),B(n.firstElementChild,u[e])}},R=new d({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),Y=new d({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),H=new E,J=new p({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new g,projection:"EPSG:4326"}),K=new p({url:"http://localhost:31142/project/GetChinaProvinces",format:new g,projection:"EPSG:4326"}),v={tiandiVec:R,tiandiMark:Y,OSM:H,city:J,province:K},W=function(t){for(var a in v)if(a==t){var e=new m({title:t,name:t,source:v[t]});l.addLayer(e);break}},S=function(t){for(var a in v)if(a==t){var e=new h({title:t,name:t,source:v[t]});l.addLayer(e);break}},L=function(t,a){var e=t.getSource().getFeatures();console.log(e);for(var n=String(a).split(),r=".*",o=0;o<n.length;o++)r=r+(n[o]+".*");console.log(r);for(var s=new RegExp(r),c=0;c<e.length;c++){console.log(e[c]);var f=String(e[c].get("name")).trim();if(console.log(f.match(s)),f.match(r))return e[c]}return null},F=function(t){for(var a=l.getLayers(),e=0;e<a.getArray().length;e++){var n=a.item(e);if(n.get("name")==t)return n}return null},Z=new M;Z.on("click",function(){console.log(this)});var Q=new h;Q.on({});var U=l.getView(),ee=function(t){U.animate({center:t.getGeometry().getCoordinates(),duration:2e3,zoom:10})},te=new G({image:new N({radius:10,fill:new O({color:"#dc143c"})})}),re=function(t){t.setStyle(te)};W("OSM");S("city");S("province");q();D();_();I();i(".pic-nav").on("mouseenter",function(t){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(t){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var t=i(this).siblings("input").val();console.log(t);var a=F("city"),e=L(a,t);e!=null?i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+t+", \u4F4D\u7F6E\u5728:"+e.getGeometry().getCoordinates()):i(".searchState").text("\u672A\u641C\u7D22\u5230"+t+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002"),re(e),ee(e)});var ae=F("province"),oe=L(ae,"\u5C71\u4E1C");console.log(oe);
//# sourceMappingURL=index.d44c8530.js.map