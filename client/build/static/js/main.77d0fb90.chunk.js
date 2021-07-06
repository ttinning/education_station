(this.webpackJsonpeducation_app=this.webpackJsonpeducation_app||[]).push([[0],{147:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(47),i=n.n(s),r=(n(55),n(56),n(6)),a=n(3),j=n(0),l=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Education Station"}),Object(j.jsx)("ul",{id:"navbar",children:Object(j.jsx)(r.b,{to:"/",children:"Home "})})]})},d=function(){return Object(j.jsxs)("section",{id:"landing-page",children:[Object(j.jsxs)(r.b,{to:"/parent",children:[Object(j.jsx)("button",{children:"Parent"})," "]}),Object(j.jsxs)(r.b,{to:"/student",children:[Object(j.jsx)("button",{children:"Student"})," "]})]})},u=n(4),b=n(25),h="http://localhost:5000/api/accounts/",p={getAccounts:function(){return fetch(h).then((function(t){return t.json()}))},updateAccounts:function(t,e){return console.log(t,e),fetch(h+t,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))}},O=function(t){var e=t.word;t.accounts;return Object(j.jsx)("li",{children:e})},x=function(t){var e=t.topic,n=t.accounts,c=e.word_list.map((function(t){return Object(j.jsx)(O,{word:t,accounts:n})})),o=n[0].student.completed_topics,s=function(){var t,n=Object(b.a)(o);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(e.title===c)return"Completed!"}}catch(s){n.e(s)}finally{n.f()}}();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:[e.title," ",s]}),Object(j.jsx)("ul",{children:c})]})},f=function(t){var e=t.topics,n=t.accounts,c=e.map((function(t){return Object(j.jsx)(x,{topic:t,accounts:n},t._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Topic categories:"}),n.length>0?Object(j.jsx)("ul",{className:"topics-list",children:c}):null]})},m="http://localhost:5000/api/topics",g={getTopics:function(){return fetch(m).then((function(t){return t.json()}))},postTopic:function(t){return fetch(m,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))}},w={headers:{"Content-Type":"application/json",Authorization:"Token ".concat({token:"a62ed48e984604001204b2af4f405a763ad97feb"}.token)}},v={getWordInfo:function(t){return fetch("https://owlbot.info/api/v4/dictionary/"+t,w).then((function(t){return t.json()}))}},y=function(t){var e=t.addNewTopic,n=Object(c.useState)({}),o=Object(u.a)(n,2),s=o[0],i=o[1],r=function(t){s[t.target.id]=t.target.value,i(s)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Topic form"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=Object.values(s);n.splice(0,1);var c={title:s.title,word_list:n};console.log(c),g.postTopic(c).then((function(t){e(c)})),document.querySelector("#new-topic-form").reset(),i({})},id:"new-topic-form",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Topic title"}),Object(j.jsx)("input",{onChange:r,type:"text",id:"title",required:!0}),Object(j.jsx)("h3",{children:"Word list"}),Object(j.jsx)("label",{htmlFor:"word1",children:"1."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word1"}),Object(j.jsx)("label",{htmlFor:"word2",children:"2."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word2"}),Object(j.jsx)("label",{htmlFor:"word3",children:"3."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word3"}),Object(j.jsx)("label",{htmlFor:"word4",children:"4."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word4"}),Object(j.jsx)("label",{htmlFor:"word5",children:"5."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word5"}),Object(j.jsx)("label",{htmlFor:"word6",children:"6."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word6"}),Object(j.jsx)("label",{htmlFor:"word7",children:"7."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word7"}),Object(j.jsx)("label",{htmlFor:"word8",children:"8."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word8"}),Object(j.jsx)("label",{htmlFor:"word9",children:"9."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word9"}),Object(j.jsx)("label",{htmlFor:"word10",children:"10."}),Object(j.jsx)("input",{onChange:r,type:"text",id:"word10"}),Object(j.jsx)("button",{className:"standard-button",type:"submit",children:"Save topic"})]})]})},S=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),r=i[0],a=i[1];Object(c.useEffect)((function(){g.getTopics().then((function(t){return o(t)})),p.getAccounts().then((function(t){return a(t)}))}),[]);return Object(j.jsxs)("section",{className:"dashboard",children:[Object(j.jsx)("h2",{children:"Parent Dashboard"}),r.length>0?Object(j.jsxs)("section",{id:"account-details",children:[Object(j.jsx)("h3",{children:"Account details"}),Object(j.jsxs)("p",{children:["Parent: ",r[0].parent.name]}),Object(j.jsxs)("p",{children:["email: ",r[0].parent.email]}),Object(j.jsxs)("p",{children:["Student: ",r[0].student.name]}),Object(j.jsxs)("p",{children:["Age: ",r[0].student.age]})]}):null,Object(j.jsx)(y,{addNewTopic:function(t){var e=n.map((function(t){return t}));e.push(t),o(e)}}),Object(j.jsx)(f,{topics:n,accounts:r})]})},C=function(t){var e=t.topic,n=t.accounts,c=n[0].student.completed_topics,o=function(){var t,n=Object(b.a)(c);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(e.title===o)return!0}}catch(s){n.e(s)}finally{n.f()}}();return Object(j.jsxs)("li",{children:[Object(j.jsx)(r.b,{to:{pathname:"/student/".concat(e.title),state:{topic:e,accounts:n}},children:Object(j.jsx)("button",{className:"standard-button",children:e.title.toUpperCase()})}),o?Object(j.jsx)("p",{className:"completed-trophy",children:"\ud83c\udfc6"}):null]})},T=function(t){var e=t.topics,n=t.accounts,c=e.map((function(t){return Object(j.jsx)(C,{topic:t,accounts:n},t._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Topics"}),Object(j.jsx)("ul",{className:"topic-buttons-container",children:c})]})},N=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){g.getTopics().then((function(t){return o(t)})),p.getAccounts().then((function(t){return a(t)}))}),[]),Object(j.jsxs)("section",{className:"dashboard",children:[Object(j.jsx)("h2",{children:"Student Dashboard"}),r.length>0&&n.length>0?Object(j.jsx)(T,{topics:n,accounts:r}):null]})},F=n(50),_=function(){var t=Object(a.f)(),e=t.state.topic,n=t.state.accounts,o=Object(c.useState)(0),s=Object(u.a)(o,2),i=s[0],l=s[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),h=b[0],O=b[1],x=Object(c.useState)({}),f=Object(u.a)(x,2),m=f[0],g=f[1],w=Object(c.useState)(!1),y=Object(u.a)(w,2),S=y[0],C=y[1],T=Object(c.useState)(!1),N=Object(u.a)(T,2),_=N[0],k=N[1],E=Object(c.useState)(!1),A=Object(u.a)(E,2),I=A[0],B=A[1],P=Object(c.useState)(""),q=Object(u.a)(P,2),D=q[0],z=q[1],J=Object(c.useState)(!1),L=Object(u.a)(J,2),R=L[0],U=L[1],W=Object(c.useState)(1),H=Object(u.a)(W,2),M=H[0],Y=H[1];Object(c.useEffect)((function(){v.getWordInfo(e.word_list[i]).then((function(t){return g(t)}))}),[i]),Object(c.useEffect)((function(){h===G?(B(!0),U(!1),O(""),Y(0),document.getElementById("answer-input").reset()):h.length===G.length&&(document.getElementById("answer-input").reset(),U(!0),Y(0),O(""))}),[h]);var G=e.word_list[i],K=function t(e){var n=e,c="";for(e=e.split("");e.length>0;)c+=e.splice(e.length*Math.random()<<0,1);n===c&&t(e),z(c)};return Object(j.jsxs)("section",{id:"quiz-body",children:[Object(j.jsxs)("h2",{children:[e.title," quiz"]}),Object.keys(m).length>0?Object(j.jsx)("img",{src:m.definitions[0].image_url,alt:m.word}):null,Object(j.jsx)("button",{className:"standard-button",onClick:function(){K(G),C(!0)},children:"Show Hint"}),S?Object(j.jsx)("p",{children:D}):null,Object(j.jsx)("button",{className:"standard-button",onClick:function(){k(!0)},children:"Reveal answer"}),_?Object(j.jsxs)("p",{children:["The answer is ",m.word]}):null,Object(j.jsxs)("form",{id:"answer-input",children:[Object(j.jsx)("label",{htmlFor:"answer-box",children:"Enter your answer here:"}),G.split("").map((function(t,e){return Object(j.jsx)("input",{maxLength:"1",className:"letter-input",id:"answer-box-".concat(e),type:"text",onKeyUp:function(t){var e;e=t,O(h.concat(e.target.value.toLowerCase())),function(t){M>=G.length?Y(0):1==t.target.value.length?(Y(M+1),document.querySelector("#answer-box-".concat(M)).focus()):console.log("oops")}(t)}})}))]}),I?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"CORRECT!"}),Object(j.jsx)("p",{children:m.definitions[0].definition})]}):null,R?Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"TRY AGAIN!"})}):null,m.word!==e.word_list[e.word_list.length-1]?Object(j.jsx)("button",{className:"standard-button",onClick:function(){document.getElementById("answer-input").reset(),l(i+1),C(!1),k(!1),B(!1),U(!1),Y(1),O("")},children:"Next"}):Object(j.jsx)(r.b,{to:"/student/".concat(e.title,"/completed"),children:Object(j.jsx)("button",{onClick:function(){var t=Object(F.a)({},n[0]);t.student.completed_topics.push(e.title),delete t._id,p.updateAccounts(n[0]._id,t)},children:"Complete Topic!"})}),Object(j.jsxs)(r.b,{to:"/student",children:[Object(j.jsx)("button",{className:"standard-button",children:"Back To Dashboard"})," "]})]})},k=(n(65),n.p+"static/media/trophy.7be342d3.png"),E=n(49),A=n.n(E),I=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1];Object(c.useEffect)((function(){o(!0)}),[]);var s=Object(a.g)().topic;return Object(j.jsxs)("div",{id:"completion-page-wrapper",children:[n&&Object(j.jsx)(A.a,{}),Object(j.jsxs)("p",{children:["You have completed the ",s," quiz!"]}),Object(j.jsx)("img",{id:"trophy-img",src:k,alt:"gold completion trophy"}),Object(j.jsxs)(r.b,{to:"/student",children:[Object(j.jsx)("button",{className:"standard-button",children:"Back To Dashboard"})," "]})]})};var B=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/",component:d,exact:!0}),Object(j.jsx)(a.a,{path:"/parent",component:S}),Object(j.jsx)(a.a,{path:"/student",exact:!0,component:N}),Object(j.jsx)(a.a,{path:"/student/:topic",exact:!0,component:_}),Object(j.jsx)(a.a,{path:"/student/:topic/completed",component:I})]})})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),P()},55:function(t,e,n){},56:function(t,e,n){},65:function(t,e,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.77d0fb90.chunk.js.map