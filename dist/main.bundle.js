"use strict";(self.webpackChunktodolistapp=self.webpackChunktodolistapp||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),a=e.n(t),o=e(645),i=e.n(o)()(a());i.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: auto;\r\n}\r\n\r\nheader {\r\n  margin: auto;\r\n  max-width: 400px;\r\n}\r\n\r\nmain {\r\n  margin: auto;\r\n  display: flex;\r\n  max-width: 500px;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: #d3d3d3;\r\n}\r\n\r\n.list-title {\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.to-do {\r\n  padding-top: 1rem;\r\n}\r\n\r\n#form {\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 1rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n#add-task {\r\n  width: 100%;\r\n  border: none;\r\n  padding-left: 1rem;\r\n  background-color: white;\r\n}\r\n\r\n#add-btn {\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  min-width: 20px;\r\n  padding: 0 5px 10px 0;\r\n}\r\n\r\n#add-btn:active {\r\n  color: red;\r\n}\r\n\r\n#add-btn:hover {\r\n  background: #000;\r\n  color: #fff;\r\n}\r\n\r\n#list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-item {\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 0.5rem;\r\n  margin: 1px 1px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: rgb(255, 255, 255);\r\n  border: none;\r\n  flex-basis: 80%;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  border: none;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=e(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=a(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=e(o[i]);r[c].references--}for(var d=t(n,a),s=0;s<o.length;s++){var l=e(o[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,a&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),a=e.n(t),o=e(795),i=e.n(o),c=e(569),d=e.n(c),s=e(565),l=e.n(s),p=e(216),u=e.n(p),f=e(589),m=e.n(f),h=e(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g=document.getElementById("list");[{id:1,description:"Task 1",completed:!1},{id:2,description:"Task 2",completed:!1},{id:3,description:"Task 3",completed:!1}].forEach((n=>{const r=document.createElement("li"),e=document.createElement("input"),t=document.createElement("label"),a=document.createElement("br");e.type="checkbox",e.id=n.id,e.name=n.id,t.htmlFor=n.id,t.innerHTML=n.description,r.classList.add("list-item"),g.appendChild(r),r.appendChild(e),r.appendChild(t),r.appendChild(a)}))}},n=>{n(n.s=987)}]);