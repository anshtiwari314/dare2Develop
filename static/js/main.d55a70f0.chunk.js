(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),a=n(18),r=n.n(a),s=(n(29),n(30),n(4)),l=n.n(s),u=n(6),d=n(5),h=n(19),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(48),n(20)),j=n(23),b=n.n(j);var p=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,a=Object(i.useState)([]),r=Object(d.a)(a,2),s=r[0],h=r[1],j=Object(i.useState)(""),p=Object(d.a)(j,2),m=p[0],g=p[1];return Object(i.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){console.log("movie",e),m?g(""):b()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||"").then((function(e){console.log("url",e);var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log("lala",e)}))}(e)},className:"row_poster ".concat(o&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(c.jsx)(v.a,{videoId:m,opts:{height:"390px",width:"100%",playerVars:{autoplay:1}}})]})},m="7f5a6889f96c519a8d31651709138e07",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&languages=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(70);var O=function(){var e,t,n=Object(i.useState)([]),o=Object(d.a)(n,2),a=o[0],r=o[1];return Object(i.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(g.fetchNetflixOriginals);case 2:t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),console.log();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n            )')},children:[Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsx)("h1",{class:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",children:"Play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List"}),Object(c.jsx)("h1",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})]}),Object(c.jsx)("div",{className:"banner-fadeBottom"})]})};n(71);var x=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(c.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}),Object(c.jsx)("img",{className:"nav_avatar",src:"https://images.emojiterra.com/twitter/v13.0/512px/1f987.png",alt:"Netflix Logo"})]})};n(72);n(73);var w=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(x,{}),Object(c.jsx)(O,{}),Object(c.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending",fetchUrl:g.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),_()}},[[74,1,2]]]);
//# sourceMappingURL=main.d55a70f0.chunk.js.map