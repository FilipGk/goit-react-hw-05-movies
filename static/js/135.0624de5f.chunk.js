"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),i=n(689),s=n(87),c=n(263),u="MovieDetails_container__Ys+c9",o="MovieDetails_list__dbNMP",l="MovieDetails_listInfo__8Bb04",d="MovieDetails_linkInfo__CGpXD",p="MovieDetails_button__uXZxd",f=n(673),h=n(184),v=function(){var e,t,n=(0,i.UO)().movieId,v=(0,a.useState)(null),x=(0,r.Z)(v,2),m=x[0],_=x[1],g=(0,a.useState)(!1),j=(0,r.Z)(g,2),w=j[0],k=j[1],b=(0,i.TH)();if((0,a.useEffect)((function(){k(!0),(0,c.Y5)(n).then((function(e){_(e)})).catch((function(e){console.log(e)})).finally((function(){k(!1)}))}),[n]),m){var y=m||{},Z=y.title,U=y.release_date,N=y.popularity,M=y.overview,D=y.genres,S=y.poster_path,C=y.original_title;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.rU,{to:null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,h.jsx)("button",{className:p,type:"button",children:"Go back"})}),w&&(0,h.jsx)(f.Z,{}),m&&(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("img",{width:"300px",src:S?"https://image.tmdb.org/t/p/w500".concat(S):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:C}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[Z," (",U.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User score: ",N]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:M}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("ul",{className:o,children:D.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{className:l,children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{className:d,to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{className:d,to:"reviews",children:"Reviews"})})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(i.j3,{})]})]})}}},263:function(e,t,n){n.d(t,{Bt:function(){return p},Ml:function(){return o},Tg:function(){return u},Y5:function(){return l},wL:function(){return d}});var r=n(861),a=n(757),i=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="77375c1461f4bbe6d78772cd5f93d658",u=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.0624de5f.chunk.js.map