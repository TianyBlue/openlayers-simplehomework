import{T as m,X as f,V as w,s as y,M as b,a as S,c as L,F,O as k,b as x,G as C,d as p,e as V,S as M,C as E,f as N,$ as i}from"./vendor.bdcd305b.js";const O=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};O();new m({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new f({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var P=new w({center:[115,35],zoom:6,projection:"EPSG:4326"});new y({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var l=new b({target:"map",layers:[],view:P}),T=new y({units:"metric",target:"scalebar",className:"ol-scale-line"}),G=new S({className:"mosuePosition",coordinateFormat:L(6),projection:"EPSG:4326",target:document.getElementById("position")}),X=new F,z=function(){l.addControl(T)},A=function(){l.addControl(X)},q=function(){l.addControl(G)},u=[],g=[],h=[],D=".layers";function _(e,a){e.addEventListener("click",function(){this.checked?a.setVisible(!0):a.setVisible(!1)})}var j=function(){for(var e=l.getLayers(),a=document.querySelector(D),t=0;t<e.getArray().length;t++){u[t]=e.item(t),g[t]=u[t].get("name"),h[t]=u[t].getVisible();var o=document.createElement("li");o.innerHTML='<input type="checkbox" name="layers"><label>'+g[t]+"</label>",a.appendChild(o),h[t]&&(o.firstElementChild.checked=!0),_(o.firstElementChild,u[t])}},B=new f({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),I=new f({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),R=new k,Y=new x({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new C,projection:"EPSG:4326"}),d={tiandiVec:B,tiandiMark:I,OSM:R,city:Y},$=function(e){for(var a in d)if(a==e){var t=new m({title:e,name:e,source:d[e]});l.addLayer(t);break}},H=function(e){for(var a in d)if(a==e){var t=new p({title:e,name:e,source:d[e]});l.addLayer(t);break}},J=function(e,a){for(var t=e.getSource().getFeatures(),o=String(a).split(),r=".*",n=0;n<o.length;n++)r=r+(o[n]+".*");console.log(r);for(var s=new RegExp(r),c=0;c<t.length;c++){var v=String(t[c].get("name")).trim();if(console.log(v.match(s)),v.match(r))return t[c]}return null},K=function(e){for(var a=l.getLayers(),t=0;t<a.getArray().length;t++){var o=a.item(t);if(o.get("name")==e)return o}return null},W=new V;W.on("click",function(){console.log(this)});var Z=new p;Z.on({});var Q=l.getView(),U=function(e){Q.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},ee=new M({image:new E({radius:10,fill:new N({color:"#dc143c"})})}),te=function(e){e.setStyle(ee)};$("OSM");H("city");z();A();q();j();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var a=K("city"),t=J(a,e);t!=null?i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+t.getGeometry().getCoordinates()):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002"),te(t),U(t)});
//# sourceMappingURL=index.554db6a8.js.map
