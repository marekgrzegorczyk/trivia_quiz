(this.webpackJsonpprojekt_koncowy=this.webpackJsonpprojekt_koncowy||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(6),a=n.n(r),o=(n(12),n(2)),i=(n(13),n(14),n(7)),j=(n(15),n(0)),b=function(e){e.showAnswers;var t=e.handleAnswer,n=e.currentIndex,c=e.data,s=c.question,r=c.correct_answer,a=c.incorrect_answers,o=[r].concat(Object(i.a)(a)).sort((function(){return Math.random()-.5}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"question_box",children:[Object(j.jsxs)("p",{children:[n+1,"/10"]}),Object(j.jsx)("h1",{className:"question_box_description",dangerouslySetInnerHTML:{__html:s}})]}),Object(j.jsx)("div",{className:"answer",children:o.map((function(e,n){return Object(j.jsx)("button",{className:"answer_box",onClick:function(){return t(e)},dangerouslySetInnerHTML:{__html:e}},n)}))})]})},u=function(e){var t=e.id,n=Object(c.useState)([]),s=Object(o.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(0),u=Object(o.a)(i,2),d=u[0],l=u[1],O=Object(c.useState)(0),h=Object(o.a)(O,2),x=h[0],m=h[1];Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=".concat(t)).then((function(e){return e.json()})).then((function(e){a(e.results)}))}),[]);return r.length>0?Object(j.jsx)("div",{className:"container",children:d>=r.length?Object(j.jsxs)("h1",{className:"loading_and_score",children:["Congratulations! ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Your score is ",x," !",Object(j.jsx)("button",{onClick:function(){window.location.reload()},className:"answer_box button_try_again",children:Object(j.jsx)("p",{className:"button_try_again_text",children:"Click here to try again!"})})]}):Object(j.jsx)(b,{currentIndex:d,data:r[d],handleAnswer:function(e){setTimeout((function(){l(d+1),e===r[d].correct_answer&&m(x+1)}),500)}})}):Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})},d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],b=a[1],d=Object(c.useState)(null),l=Object(o.a)(d,2),O=l[0],h=l[1];Object(c.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){s(e.trivia_categories)}))}),[]);return!0!==i?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Welcome to trivia api quiz!"}),Object(j.jsx)("h2",{children:"Choose your category:"}),Object(j.jsx)("div",{className:"category_box",children:n.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"category_button",onClick:function(){return t=e.id,b(!0),void h(t);var t},dangerouslySetInnerHTML:{__html:e.name}},t)})}))})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{id:O})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("body"))}],[[17,1,2]]]);
//# sourceMappingURL=main.fcf76d30.chunk.js.map