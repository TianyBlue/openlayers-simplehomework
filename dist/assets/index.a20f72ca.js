import{T as g,X as m,V as N,s as h,M as O,a as V,c as q,F as R,O as X,b as f,G as b,d as S,S as y,C as F,e as d,f as L,D as z,P as D,$ as i}from"./vendor.82360beb.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};j();new g({title:"\u5929\u5730\u56FE\u77E2\u91CF",source:new m({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1})});var H=new N({center:[115,35],zoom:6,projection:"EPSG:4326"});new h({units:"metric",bar:!0,text:!0,className:"ol-scale-line"});var s=new O({target:"map",layers:[],view:H}),I=new h({units:"metric",target:"scalebar",className:"ol-scale-line"}),A=new V({className:"mosuePosition",coordinateFormat:q(6),projection:"EPSG:4326",target:document.getElementById("position")}),J=new R,W=function(){s.addControl(I)},_=function(){s.addControl(J)},B=function(){s.addControl(A)},v=[],P=[],k=[],Y=".layers";function K(e,t){e.addEventListener("click",function(){this.checked?t.setVisible(!0):t.setVisible(!1)})}var Z=function(){for(var e=s.getLayers(),t=document.querySelector(Y),r=0;r<e.getArray().length;r++){v[r]=e.item(r),P[r]=v[r].get("name"),k[r]=v[r].getVisible();var n=document.createElement("li");n.innerHTML='<input type="checkbox" name="layers"><label>'+P[r]+"</label>",t.appendChild(n),k[r]&&(n.firstElementChild.checked=!0),K(n.firstElementChild,v[r])}},$=new m({url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",wrapX:!1}),Q=new m({url:"http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",attributions:"\u5929\u5730\u56FE\u5C5E\u6027\u63CF\u8FF0",wrapX:!1}),U=new X,ee=new f({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson",format:new b,projection:"EPSG:4326"}),te=new f({url:"http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson",format:new b,projection:"EPSG:4326"}),p={tiandiVec:$,tiandiMark:Q,OSM:U,city:ee,province:te},re=function(e){for(var t in p)if(t==e){var r=new g({title:e,name:e,source:p[e]});s.addLayer(r);break}},C=function(e){for(var t in p)if(t==e){var r=new S({title:e,name:e,source:p[e]});s.addLayer(r);break}},x=function(e,t){for(var r=e.getSource(),n=r.getFeatures(),a=String(t).split(),o=".*",c=0;c<a.length;c++)o=o+(a[c]+".*");for(var G=new RegExp(o),u=0;u<n.length;u++){var M=String(n[u].get("name")).trim();if(M.match(G))return n[u]}return null},T=function(e){for(var t=s.getLayers(),r=0;r<t.getArray().length;r++){var n=t.item(r);if(n.get("name")==e)return n}return null},ae=s.getView(),ne=function(e){ae.animate({center:e.getGeometry().getCoordinates(),duration:2e3,zoom:10})},oe=new y({image:new F({radius:10,fill:new d({color:"#dc143c"})})}),ie=new y({stroke:new L({color:"#dc143c",width:1.25}),fill:new d({color:"rgba(0.5,0.5,0.5,0.1)"}),zIndex:999}),se=function(e){e.setStyle(oe)},ce=function(e){e.setStyle(ie)},w,l=new f({wrapX:!1}),E=new S({source:l,style:new y({fill:new d({color:"rgba(255,255,255,0.2)"}),stroke:new L({color:"#ff0000",width:2}),image:new F({radius:7,fill:new d({color:"#ff0000"})})}),zIndex:999,name:"\u65B0\u5EFA\u8981\u7D20\u56FE\u5C42"}),le=function(e,t){return t||(t=new D(e)),t.setCoordinates(e),t};s.addLayer(E);var ue=function(){w=new z({type:"Point",source:l,geometryFunction:le}),s.addInteraction(w)},fe=function(){var e=l.getFeatures();if(confirm("\u662F\u5426\u4FDD\u5B58\u5DF2\u7ED8\u5236\u8981\u7D20\uFF1F")){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n.getGeometry().getCoordinates())}var a={length:t.length,data:t},o=JSON.stringify(a);console.log(o),de(o)}else l=new f({wrapX:!1}),E.setSource(l);s.removeInteraction(w)};function de(e){var t=new XMLHttpRequest;t.open("POST","/project/AddPointsToDB"),t.setRequestHeader("cache-control","no-cache"),t.setRequestHeader("contentType","text/html;charset=utf-8"),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){console.log(t.response)},t.send(e)}re("OSM");C("city");C("province");W();_();B();Z();i(".pic-nav").on("mouseenter",function(e){i(this).hide(),i(".nav").show().stop().animate({left:0})});i(".nav").on("mouseleave",function(e){i(this).stop().animate({left:-.8*i(this).width()},function(){i(".nav").hide(),i(".pic-nav").show()})});i(".searchBar button").on("click",function(){var e=i(this).siblings("input").val();console.log(e);var t=T("city"),r=x(t,e);r!=null?(i(".searchState").text("\u5DF2\u641C\u7D22\u5230"+e+", \u4F4D\u7F6E\u5728:"+r.getGeometry().getCoordinates()),se(r),ne(r)):i(".searchState").text("\u672A\u641C\u7D22\u5230"+e+", \u8BF7\u5C1D\u8BD5\u5176\u4ED6\u4F4D\u7F6E\u3002")});i(".info-bar button").on("click",function(){var e=new XMLHttpRequest;e.open("GET","/project/GetDensePointProvince");var t=null;e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){t=JSON.parse(e.response);var r=T("province");if(t==null){console.log("NetWork Error!");return}else{for(var n="",a=0;a<3;a++){var o=x(r,t[a].name);ce(o),n+=t[a].name+","+t[a].points,n+=";",console.log(n)}n=n.slice(0,n.length-1),console.log(n),i(".info-bar .info").text("\u5BC6\u5EA6\u6700\u9AD8\u7684\u4E09\u4E2A\u7701\u4EFD\u4E3A: "+n)}}},e.send()});i(".create-point").on("click",function(){ue()});i(".quit-create").on("click",function(){fe()});
//# sourceMappingURL=index.a20f72ca.js.map
