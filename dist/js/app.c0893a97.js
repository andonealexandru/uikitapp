(function(t){function n(n){for(var a,r,o=n[0],c=n[1],u=n[2],v=0,p=[];v<o.length;v++)r=o[v],Object.prototype.hasOwnProperty.call(e,r)&&e[r]&&p.push(e[r][0]),e[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],a=!0,o=1;o<i.length;o++){var c=i[o];0!==e[c]&&(a=!1)}a&&(s.splice(n--,1),t=r(r.s=i[0]))}return t}var a={},e={app:0},s=[];function r(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,n,i){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(i,a,function(n){return t[n]}.bind(null,a));return i},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"471d":function(t,n,i){"use strict";var a=i("6e5b"),e=i.n(a);e.a},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("vk-navbar",{staticClass:"nav"},[a("vk-navbar-nav",[a("vk-navbar-logo",[a("img",{staticClass:"logo",attrs:{src:i("cf05")}})]),a("vk-navbar-nav-item",{attrs:{title:"Home",active:t.activeHome},on:{click:t.activateHome}})],1),a("vk-navbar-nav",{attrs:{slot:"right"},slot:"right"},[a("vk-navbar-nav-item",{attrs:{title:"Sign In",active:t.activeSignIn},on:{click:t.activateSignIn}}),a("vk-navbar-nav-item",{attrs:{title:"Log In",active:t.activeLogIn},on:{click:t.activateLogIn}})],1)],1),a("router-view")],1)},s=[],r={data:function(){return{activeHome:!0,activeSignIn:!0,activeLogIn:!0}},created:function(){this.activeHome=!0,this.activeLogIn=!1,this.activeSignIn=!1},methods:{activateHome:function(){this.activeHome=!0,this.activeSignIn=!1,this.activeLogIn=!1,this.$router.push({name:"home"})},activateSignIn:function(){this.activeHome=!1,this.activeSignIn=!0,this.activeLogIn=!1,this.$router.push({name:"signin"})},activateLogIn:function(){this.activeHome=!1,this.activeSignIn=!1,this.activeLogIn=!0,this.$router.push({name:"login"})}}},o=r,c=(i("471d"),i("2877")),u=Object(c["a"])(o,e,s,!1,null,"25b6cb42",null),l=u.exports,v=i("8c4f"),p=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"home"},[t._v(" Home ")])},d=[],f={name:"home"},m=f,h=Object(c["a"])(m,p,d,!1,null,null,null),k=h.exports,g=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"uk-padding uk-flex-middle"},[i("div",{staticClass:"uk-width-2-5@m uk-align-center"},[i("vk-card",{attrs:{hover:""}},[i("vk-card-title",[t._v("Create account")]),i("form",{staticClass:"uk-card-body"},[i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"user"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"First name"}})])]),i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"user"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"Last name"}})])]),i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"mail"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"Email"}})])]),i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"location"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"Address"}})])]),i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"receiver"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"Phone number"}})])]),i("div",{staticClass:"uk-margin"},[i("div",{staticClass:"uk-inline uk-width-1-1"},[i("span",{staticClass:"uk-form-icon"},[i("vk-icon",{attrs:{icon:"user"}})],1),i("input",{staticClass:"uk-input",attrs:{type:"text",placeholder:"Lock"}})])]),i("vk-button",{staticClass:"uk-width-1-1"},[t._v("Submit")])],1)],1)],1)])},b=[],C={name:"signin"},y=C,w=Object(c["a"])(y,g,b,!1,null,null,null),I=w.exports;a["a"].use(v["a"]);var x=[{path:"/",name:"home",component:k},{path:"/signin",name:"signin",component:I}],S=new v["a"]({routes:x}),_=S,O=i("2f62");a["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=i("6d68"),H=i("5320");i("1941");a["a"].use(L["a"]),a["a"].use(H["a"]),a["a"].config.productionTip=!1,new a["a"]({router:_,store:j,frameworks:void 0,render:function(t){return t(l)}}).$mount("#app")},"6e5b":function(t,n,i){},cf05:function(t,n,i){t.exports=i.p+"img/logo.86109fc9.png"}});
//# sourceMappingURL=app.c0893a97.js.map