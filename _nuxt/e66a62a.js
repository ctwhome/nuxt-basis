(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,6,8],{303:function(t,e,r){"use strict";r.r(e);var l=r(56),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);var l=r(10),n=(r(37),r(47),r(104),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(56),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);var l={props:{author:{type:Object,required:!0}}},n=r(56),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:"/blog/author/"+t.author.name}},[t.author.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-col m-4"},[r("h4",{staticClass:"font-semibold"},[t._v("\n        Author\n      ")]),t._v(" "),r("p",[t._v(t._s(t.author.name))]),t._v(" "),r("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);var l={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},n=r(56),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r.r(e);var l=r(21),n=r(28),c=r(55),o=r(10),d=(r(37),r(48),r(39),r(29),{transition:"fade",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,d,v,f,h,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return d=e.sent,v=Object.assign.apply(Object,[{}].concat(Object(c.a)(d.map((function(s){return Object(n.a)({},s.name,s)}))))),e.next=10,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 10:return f=e.sent,h=Object(l.a)(f,2),m=h[0],x=h[1],e.abrupt("return",{article:article,tags:v,prev:m,next:x});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),v=r(56),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[r("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[r("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"absolute top-32 left-32 text-white"},[r("NuxtLink",{attrs:{to:"/"}},[r("Logo")],1),t._v(" "),r("div",{staticClass:"mt-16 -mb-3 flex uppercase text-sm"},[r("p",{staticClass:"mr-3"},[t._v("\n          "+t._s(t.formatDate(t.article.updatedAt))+"\n        ")]),t._v(" "),r("span",{staticClass:"mr-3"},[t._v("•")]),t._v(" "),r("p",[t._v(t._s(t.article.author.name))])]),t._v("int\n      "),r("h1",{staticClass:"text-6xl font-bold"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),t._l(t.article.tags,(function(e,l){return r("span",{key:l},[r("NuxtLink",{attrs:{to:"/blog/tag/"+t.tags[e].slug}},[r("span",{staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.tags[e].name)+"\n          ")])])],1)}))],2),t._v(" "),r("div",{staticClass:"flex absolute top-3rem right-3rem"},[r("NuxtLink",{staticClass:"mr-8 self-center text-white font-bold hover:underline",attrs:{to:"/"}},[t._v("\n        All articles\n      ")]),t._v(" "),r("AppSearchInput")],1)]),t._v(" "),r("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[r("h1",{staticClass:"font-bold text-4xl"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("p",{staticClass:"pb-4"},[t._v("\n      Post last updated: "+t._s(t.formatDate(t.article.updatedAt))+"\n    ")]),t._v(" "),r("nav",{staticClass:"pb-6"},[r("ul",t._l(t.article.toc,(function(link){return r("li",{key:link.id,class:{"font-semibold":2===link.depth}},[r("nuxtLink",{staticClass:"hover:underline",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#"+link.id}},[t._v("\n            "+t._s(link.text)+"\n          ")])],1)})),0)]),t._v(" "),r("nuxt-content",{staticClass:"prose prose-purple",attrs:{document:t.article}}),t._v(" "),r("author",{attrs:{author:t.article.author}}),t._v(" "),r("PrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(303).default,AppSearchInput:r(304).default,Author:r(309).default,PrevNext:r(310).default})}}]);