(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,5,7,8,12],{317:function(t,e,n){"use strict";(function(t){var r=n(320);e.a={data:function(){return{DAISYUI_VERSION:t.env.DAISYUI_VERSION,scrolled:!1,themes:[{id:"light",name:"🌝  light"},{id:"dark",name:"🌚  dark"},{id:"cupcake",name:"🧁  cupcake"},{id:"bumblebee",name:"🐝  bumblebee"},{id:"emerald",name:"✳️  Emerald"},{id:"corporate",name:"🏢  Corporate"},{id:"synthwave",name:"🌃  synthwave"},{id:"retro",name:"👴  retro"},{id:"cyberpunk",name:"🤖  cyberpunk"},{id:"valentine",name:"🌸  valentine"},{id:"halloween",name:"🎃  halloween"},{id:"garden",name:"🌷  garden"},{id:"forest",name:"🌲  forest"},{id:"aqua",name:"🐟  aqua"},{id:"lofi",name:"👓  lofi"},{id:"pastel",name:"🖍  pastel"},{id:"fantasy",name:"🧚‍♀️  fantasy"},{id:"wireframe",name:"📝  Wireframe"},{id:"black",name:"🏴  black"},{id:"luxury",name:"💎  luxury"},{id:"dracula",name:"🧛‍♂️  dracula"}]}},mounted:function(){Object(r.themeChange)(!1)}}}).call(this,n(144))},318:function(t,e,n){"use strict";n.r(e);var r=n(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),n("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),n("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(33),n(50),n(109),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return n.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),l=n(60),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none  text-base-content focus:bg-base-100",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?n("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-base-100 text-base-content rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 hover:text-black",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){function r(){var t=document.querySelector("[data-toggle-theme]");!function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.classList.add(t.getAttribute("data-act-class"))})))}(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.addEventListener("click",(function(){var e=t.getAttribute("data-toggle-theme");if(e){var n=e.split(",");document.documentElement.getAttribute("data-theme")==n[0]?1==n.length?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",n[1]),localStorage.setItem("theme",n[1])):(document.documentElement.setAttribute("data-theme",n[0]),localStorage.setItem("theme",n[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.classList.toggle(this.getAttribute("data-act-class"))}))}))}))}function o(){!function(t=localStorage.getItem("theme")){var e;null!=t&&""!=t&&(localStorage.getItem("theme")&&""!=localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme",t),(e=document.querySelector("[data-set-theme='"+t.toString()+"']"))&&([...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))):(e=document.querySelector("[data-set-theme='']")).getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}(),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.addEventListener("click",(function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}))}))}function l(){!function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']")&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach((t=>{t.selected=!0})))}(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach((t=>{t.addEventListener("change",(function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach((t=>{t.selected=!0}))}))}))}t.exports={themeChange:function(t=!0){!0===t?document.addEventListener("DOMContentLoaded",(function(t){r(),l(),o()})):(r(),l(),o())}}},321:function(t,e,n){"use strict";n.r(e);var r=n(145),o={setup:function(){return{userSession:r.d,loginWithGoogle:r.b,isLoggedIn:r.a}},data:function(){return{activeTab:0,loginDialog:!1}},methods:{toProfile:function(){this.$router.push({name:"profile"})}}},l=n(60),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoggedIn?n("div",{staticClass:"hover:bg-gray-100 rounded-full  h-12 w-12 flex items-center justify-center"},[n("img",{staticClass:"cursor-pointer h-8 w-8 rounded-full",attrs:{src:t.userSession.user.user_metadata.avatar_url},on:{click:t.toProfile}})]):n("div",[n("button",{staticClass:"w-full inline-flex items-center no-underline py-2 px-4 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-white font-bold rounded",on:{click:function(e){return t.loginWithGoogle(t.$nuxt.context.isDev)}}},[n("svg",{staticClass:"w-4 h-4 mr-2",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12.0039 0C5.37491 0 0 5.373 0 12C0 18.627 5.37491 24 12.0039 24C22.0139 24 24.2691 14.707 23.3301 10H22H19.7324H12V14H19.7383C18.8487 17.4483 15.726 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C14.009 4 15.8391 4.74575 17.2441 5.96875L20.0859 3.12891C17.9519 1.18491 15.1169 0 12.0039 0Z",fill:"currentColor"}})]),t._v(" "),n("div",{staticClass:"whitespace-nowrap"},[t._v("\n        Login with Google\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var r=n(317).a,o=n(60),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown dropdown-end",attrs:{title:"Change Theme"}},[n("div",{staticClass:"m-1 normal-case btn-ghost btn",attrs:{tabindex:"0"}},[n("svg",{staticClass:"inline-block w-6 h-6 stroke-current md:mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}})]),t._v(" "),n("span",{staticClass:"hidden md:inline"},[t._v("\n      Change Theme\n    ")]),t._v(" "),n("svg",{staticClass:"inline-block w-4 h-4 ml-1 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1792 1792"}},[n("path",{attrs:{d:"M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"}})])]),t._v(" "),n("div",{staticClass:"mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"},[n("ul",{staticClass:"p-4 menu compact"},t._l(t.themes,(function(e,r){return n("li",{key:r},[n("a",{attrs:{tabindex:"0","data-set-theme":e.id,"data-act-class":"active"}},[t._v(t._s(e.name))])])})),0)])])}),[],!1,null,"7730b0b8",null);e.default=component.exports},323:function(t,e,n){"use strict";n.r(e);var r=n(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex"},[n("NuxtLink",{attrs:{to:"/"}},[n("Logo",{staticClass:"mb-4"})],1),t._v(" "),n("AppSearchInput",{staticClass:"ml-8 p-2"}),t._v(" "),n("daisyui-theme-switcher"),t._v(" "),n("user-login-button",{staticClass:"ml-auto"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(318).default,AppSearchInput:n(319).default,DaisyuiThemeSwitcher:n(322).default,UserLoginButton:n(321).default})},326:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("47a26b28",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(326)},334:function(t,e,n){var r=n(70)(!1);r.push([t.i,".page-enter-active[data-v-53642e06],.page-leave-active[data-v-53642e06]{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:2s}.page-enter[data-v-53642e06],.page-leave-to[data-v-53642e06]{opacity:0}",""]),t.exports=r},352:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(33),{components:{MainHeader:n(323).default},transition:"fade",data:function(){return{content:{},error:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.page,e.prev=1,e.next=4,t.$content("pages/"+n).fetch();case 4:t.content=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.error=!0;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),l=(n(333),n(60)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen"},[n("nuxt-content",{staticClass:"prose p-20",attrs:{document:t.content}}),t._v(" "),t.error?n("div",{staticClass:"mt-60 p-20 text-base-content bg-primary prose"},[n("h3",[t._v("\n      Page not found\n      "),n("div",{staticClass:"btn btn-ghost",on:{click:function(e){return t.$router.push("/")}}},[t._v("\n        ← Go back\n      ")])])]):t._e()],1)}),[],!1,null,"53642e06",null);e.default=component.exports}}]);