import{T as d,X as v,V as x,s as p,M as C,a as E,c as G,F as M,O as N,b as m,G as y,d as V,S as g,C as T,e as h,f as O,$ as i}from"./vendor.07cba0ae.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};X();new d({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var z=new x({center:[115,35],zoom:6,projection:"EPSG:4326"});new p({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var s=new C({target:"map",layers:[],view:z}),R=new p({units:"metric",target:"scalebar",className:"ol-scale-line"}),j=new E({className:"mosuePosition",coordinateFormat:G(6),projection:"EPSG:4326",target:document.getElementById("position")}),q=new M,A=function(){s.addControl(R)},D=function(){s.addControl(q)},I=function(){s.addControl(j)},u=[],w=[],b=[],W=".layers";function _(e,r){e.addEventListener("click",function(){this.checked?r.setVisible(!0):r.setVisible(!1)})}var B=function(){for(var e=s.getLayers(),r=document.querySelector(W),t=0;t<e.getArray().length;t++){u[t]=e.item(t),w[t]=u[t].get("name"),b[t]=u[t].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+w[t]+"</label>",r.appendChild(n),b[t]&&(n.firstElementChild.checked=!0),_(n.firstElementChild,u[t])}},H=new v({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),J=new v({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),Y=new N,K=new m({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new y,projection:"EPSG:4326"}),Z=new m({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new y,projection:"EPSG:4326"}),f={tiandiVec:H,tiandiMark:J,OSM:Y,city:K,province:Z},$=function(e){for(var r in f)if(r==e){var t=new d({title:e,name:e,source:f[e]});s.addLayer(t);break}},S=function(e){for(var r in f)if(r==e){var t=new V({title:e,name:e,source:f[e]});s.addLayer(t);break}},F=function(e,r){for(var t=e.getSource(),n=t.getFeatures(),a=String(r).split(),o=".*",l=0;l<a.length;l++)o=o+(a[l]+".*");for(var k=new RegExp(o),c=0;c<n.length;c++){var P=String(n[c].get("name")).trim();if(P.match(k))return n[c]}return null},L=function(e){for(var r=s.getLayers(),t=0;t<r.getArray().length;t++){var n=r.item(t);if(n.get("name")==e)return n}return null},Q=s.getView(),U=function(e){Q.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},ee=new g({image:new T({radius:10,fill:new h({color:"#dc143c"})})}),te=new g({stroke:new O({color:"#dc143c",width:1.25}),fill:new h({color:"rgba(0.5,0.5,0.5,0.1)"}),zIndex:999}),re=function(e){e.setStyle(ee)},ae=function(e){e.setStyle(te)};$("OSM");S("city");S("province");A();D();I();B();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var r=L("city"),t=F(r,e);t!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+t.getGeometry().getCoordinates()),re(t),U(t)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});i(".info-bar button").on("click",function(){var e=new XMLHttpRequest;e.open("GET","/project/GetDensePointProvince");var r=null;e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){r=JSON.parse(e.response);var t=L("province");if(r==null){console.log("NetWork Error!");return}else{for(var n="",a=0;a<3;a++){var o=F(t,r[a].name);ae(o),n+=r[a].name+","+r[a].points,n+=";"}n=n.slice(0,n.length-2),i(".info-bar .info").text="\u5BC6\u5EA6\u6700\u9AD8\u7684\u4E09\u4E2A\u7701\u4EFD\u4E3A: "+n}}},e.send()});
//# sourceMappingURL=index.650abcba.js.map