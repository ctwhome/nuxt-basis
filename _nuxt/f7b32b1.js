(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{307:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("b97bc6d6",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n(307)},315:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".page-enter-active[data-v-6611e793],.page-leave-active[data-v-6611e793]{\n  transition-property:opacity;\n  transition-timing-function:ease-in-out;\n  transition-duration:2s\n}\n.page-enter[data-v-6611e793],.page-leave-to[data-v-6611e793]{\n  opacity:0\n}",""]),r.locals={},t.exports=r},331:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(37),{transition:"fade",data:function(){return{content:{},error:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.page,e.prev=1,e.next=4,t.$content("pages/"+n).fetch();case 4:t.content=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.error=!0;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),c=(n(314),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen"},[n("nuxt-content",{staticClass:"prose p-20",attrs:{document:t.content}}),t._v(" "),t.error?n("div",{staticClass:"mt-60 p-20 bg-green-300 prose"},[n("h3",[t._v("\n      Page not found\n      "),n("div",{staticClass:"btn btn-ghost",on:{click:function(e){return t.$router.push("/")}}},[t._v("\n        ← Go back\n      ")])])]):t._e()],1)}),[],!1,null,"6611e793",null);e.default=component.exports}}]);