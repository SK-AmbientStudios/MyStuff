define("629ecf78-6cbd-4bd2-94cb-22705762d28c_0.0.1",["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","HelloWorldWebPartStrings","@microsoft/sp-http"],function(n,a,i,r,o){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="GFLV")}({"26ea":function(e,t){e.exports=n},GFLV:function(e,t,n){"use strict";n.r(t);var a=n("UWqr"),i=n("26ea"),r=n("br4S");n("UxF6");var o,s="myApp_a120b456",c=n("hI9z"),d=n("vlQI"),l=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isDarkTheme=!1,t._environmentMessage="",t}return l(t,e),t.prototype.render=function(){this.domElement.innerHTML='    \n    <section>\n    <div class="'.concat("myAppContainer_a120b456",'">\n  <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/10/50" alt="1">\n    </a>\n  </div>\n  <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/25/50" alt="2">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/30/50" alt="3">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/44/50" alt="4">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/45/50" alt="5">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/48/50" alt="6">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/49/50" alt="7">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/52/50" alt="8">\n    </a>\n  </div>\n    <div class="').concat(s,'">\n    <a href="https://www.google.com">\n      <img src="https://picsum.photos/id/58/50" alt="9">\n    </a>\n  </div>\n</div>\n\n<div id="spListContainer"></div>\n<a class="').concat("editLink_a120b456",'" href="editpage.aspx">Edit</a>\n    </section>\n    ')},t.prototype.onInit=function(){var e=this;return this._getEnvironmentMessage().then(function(t){e._environmentMessage=t})},t.prototype._getListData=function(){return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists?$filter=Hidden eq false",d.SPHttpClient.configurations.v1).then(function(e){return e.json()})},t.prototype._renderList=function(e){var t="";e.forEach(function(e){t+='\n    <ul class="'.concat("list_a120b456",'">\n      <li class="').concat("listItem_a120b456",'">\n        <span class="ms-font-l">').concat(e.Title,"</span>\n      </li>\n    </ul>")}),this.domElement.querySelector("#spListContainer").innerHTML=t},t.prototype._renderListAsync=function(){var e=this;this._getListData().then(function(t){e._renderList(t.value)})},t.prototype._getEnvironmentMessage=function(){var e=this;return this.context.sdks.microsoftTeams?this.context.sdks.microsoftTeams.teamsJs.app.getContext().then(function(t){var n="";switch(t.app.host.name){case"Office":n=e.context.isServedFromLocalhost?c.AppLocalEnvironmentOffice:c.AppOfficeEnvironment;break;case"Outlook":n=e.context.isServedFromLocalhost?c.AppLocalEnvironmentOutlook:c.AppOutlookEnvironment;break;case"Teams":n=e.context.isServedFromLocalhost?c.AppLocalEnvironmentTeams:c.AppTeamsTabEnvironment;break;default:throw new Error("Unknown host")}return n}):Promise.resolve(this.context.isServedFromLocalhost?c.AppLocalEnvironmentSharePoint:c.AppSharePointEnvironment)},t.prototype.onThemeChanged=function(e){if(e){this._isDarkTheme=!!e.isInverted;var t=e.semanticColors;t&&(this.domElement.style.setProperty("--bodyText",t.bodyText||null),this.domElement.style.setProperty("--link",t.link||null),this.domElement.style.setProperty("--linkHovered",t.linkHovered||null))}},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return a.Version.parse("1.0")},enumerable:!1,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(i.PropertyPaneTextField)("description",{label:"Description"}),Object(i.PropertyPaneTextField)("test",{label:"Multi-line Text Field",multiline:!0}),Object(i.PropertyPaneCheckbox)("test1",{text:"Checkbox"}),Object(i.PropertyPaneDropdown)("test2",{label:"Dropdown",options:[{key:"1",text:"One"},{key:"2",text:"Two"},{key:"3",text:"Three"},{key:"4",text:"Four"}]}),Object(i.PropertyPaneToggle)("test3",{label:"Toggle",onText:"On",offText:"Off"})]}]}]}},t}(r.BaseClientSideWebPart);t.default=u},JYHe:function(e,t,n){(e.exports=n("Z+AG")(!1)).push([e.i,'.myAppContainer_a120b456{display:-ms-flexbox;display:flex;padding:5px;width:100%;background-color:#fff;overflow-x:scroll}.myAppContainer_a120b456 .myApp_a120b456{margin-left:5px}.myAppContainer_a120b456 .myApp_a120b456 img{height:50px}.hidden_a120b456{display:none}.editLink_a120b456{margin-left:5px;float:right;color:red;height:50px}.helloWorld_a120b456{overflow:hidden;padding:1em;color:"[theme:bodyText, default: #323130]";color:var(--bodyText)}.helloWorld_a120b456.teams_a120b456{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif}.welcome_a120b456{text-align:center}.welcomeImage_a120b456{width:100%;max-width:420px}.links_a120b456 a{text-decoration:none;color:"[theme:link, default:#03787c]";color:var(--link)}.links_a120b456 a:hover{text-decoration:underline;color:"[theme:linkHovered, default: #014446]";color:var(--linkHovered)}.list_a120b456{margin:10;padding:10;line-height:50px;list-style-type:none;box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.list_a120b456,.listItem_a120b456{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box}.listItem_a120b456{vertical-align:center;margin:0;padding:0;box-shadow:none;padding:9px 28px 3px;position:relative}',""])},UWqr:function(e,t){e.exports=a},UxF6:function(e,t,n){var a=n("JYHe"),i=n("ruv1");"string"==typeof a&&(a=[[e.i,a]]);for(var r=0;r<a.length;r++)i.loadStyles(a[r][1],!0);a.locals&&(e.exports=a.locals)},"Z+AG":function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,a,i,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(i," */")),c=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[r].concat(c).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},br4S:function(e,t){e.exports=i},hI9z:function(e,t){e.exports=r},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.splitStyles=t.detokenize=t.clearStyles=t.loadTheme=t.flush=t.configureRunMode=t.configureLoadStyles=t.loadStyles=void 0;var a,i="undefined"==typeof window?e:window,r=i&&i.CSPSettings&&i.CSPSettings.nonce,o=((a=i.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]}).runState||(a=n(n({},a),{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),a.registeredThemableStyles||(a=n(n({},a),{registeredThemableStyles:[]})),i.__themeState__=a,a),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,c=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var t=c();e();var n=c();o.perf.duration+=n-t}function l(){d(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function u(e,t){o.loadStyles?o.loadStyles(m(e).styleString,e):function(e){if("undefined"!=typeof document){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),a=m(e),i=a.styleString,s=a.themable;n.setAttribute("data-load-themed-styles","true"),r&&n.setAttribute("nonce",r),n.appendChild(document.createTextNode(i)),o.perf.count++,t.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var d={styleElement:n,themableStyle:e};s?o.registeredThemableStyles.push(d):o.registeredStyles.push(d)}}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(p(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(p(o.registeredThemableStyles),o.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function m(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var a=e.theme;if(a){n=!0;var i=t?t[a]:void 0,r=e.defaultValue||"inherit";return t&&!i&&console,i||r}return e.rawString}).join(""),themable:n}}function _(e){var t=[];if(e){for(var n=0,a=void 0;a=s.exec(e);){var i=a.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:a[1],defaultValue:a[2]}),n=s.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),d(function(){var n=Array.isArray(e)?e:_(e),a=o.runState,i=a.mode,r=a.buffer,s=a.flushTimer;t||1===i?(r.push(n),s||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,l()},0))):u(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=l,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var a=n[t];e.push(a.themableStyle)}e.length>0&&(f(1),u([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=function(e){return e&&(e=m(_(e)).styleString),e},t.splitStyles=_}).call(this,n("vicT"))},vicT:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},vlQI:function(e,t){e.exports=o}})});