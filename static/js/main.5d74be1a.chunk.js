/*! For license information please see main.5d74be1a.chunk.js.LICENSE.txt */
(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},,,,function(t){t.exports=JSON.parse('[{"id":1,"title":"Go to the pet shop","status":0},{"id":2,"title":"Learn React.js","status":0},{"id":3,"title":"Go to the office","status":1},{"id":4,"title":"Go to the bank","status":1},{"id":5,"title":"Learn JavaScript","status":0}]')},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(2),c=n.n(s),i=n(13),a=n.n(i),l=(n(20),n(9)),r=n(7),j=n(4),o=n(14),u=(n(11),n(1)),d=function(t){var e=t.list,n=t.setToDeleted,s=t.setToDone;return Object(u.jsx)(u.Fragment,{children:e.length>=1?Object(u.jsx)("ul",{className:"task_list",children:e.map((function(t){return Object(u.jsxs)("li",{className:"task_list_item",children:[Object(u.jsx)(j.a,{className:"circle",onClick:function(){return e=t.id,s(e);var e}}),Object(u.jsx)("input",{type:"checkbox",className:"sr_only"}),Object(u.jsxs)("p",{className:"task_list_text",children:[t.id,". ",t.title]}),Object(u.jsx)("div",{className:"task_list_cta",onClick:function(){return e=t.id,n(e);var e},children:Object(u.jsxs)("p",{children:[Object(u.jsx)(o.a,{}),Object(u.jsx)("span",{className:"sr_only"})]})})]},t.id)}))}):Object(u.jsx)("h3",{children:"No more to do..."})})},b=function(t){var e=t.list;return Object(u.jsx)(u.Fragment,{children:e.length>=1?Object(u.jsx)("ul",{className:"task_list",children:e.map((function(t){return Object(u.jsxs)("li",{className:"deleted_task_list_item",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)("input",{type:"checkbox",className:"sr_only"}),Object(u.jsxs)("p",{className:"task_list_text",children:[t.id,". ",t.title]})]},t.id)}))}):Object(u.jsx)("h3",{children:"Deleted list is empty..."})})},h=function(t){var e=t.list,n=t.setToAll;return Object(u.jsx)(u.Fragment,{children:e.length>=1?Object(u.jsx)("ul",{className:"task_list",children:e.map((function(t){return Object(u.jsxs)("li",{className:"done_task_list_item",children:[Object(u.jsx)(j.a,{className:"circle",onClick:function(){return n(t.id)}}),Object(u.jsx)("input",{type:"checkbox",className:"sr_only"}),Object(u.jsxs)("p",{className:"task_list_text",children:[t.id,". ",t.title]})]},t.id)}))}):Object(u.jsx)("h3",{children:"Done list is empty..."})})},O=(n(22),function(t){return Object(u.jsx)("main",{className:"main_wrapper",children:t.children})}),x=(n(23),function(t){var e=t.onAddToDo,n=Object(s.useState)(""),c=Object(r.a)(n,2),i=c[0],a=c[1],l=Object(s.useState)(!1),j=Object(r.a)(l,2),o=j[0],d=j[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"new_task_wrapper",children:[Object(u.jsx)("input",{onChange:function(t){a(t.target.value)},className:"new_task_input",type:"text",placeholder:"Type a new todo item",value:i}),Object(u.jsxs)("button",{onClick:function(){i.length<3?d(!0):(d(!1),e(i),a(""))},className:"new_task_button",children:["+ Add ",o]})]}),o&&Object(u.jsx)("p",{className:"error",children:"Input value must be at last 3 character!"})]})});n(24);var m=function(){return Object(u.jsx)("h1",{className:"page_title",children:"React Your Todo"})};n(25);var f=function(){return Object(u.jsx)("p",{className:"subtitle",children:"A todo app powered by React.js 17.0.2"})},p=n(15),_=n(12),N=function(t,e,n){var s=t.findIndex((function(t){return t.id==e})),c=Object(l.a)(t);return c[s]=Object(_.a)(Object(_.a)({},c[s]),{},{status:n}),c},k=function(t,e){return t.filter((function(t){return t.status==e}))},v=n(3),g=(n(28),n(29),function(){var t=Object(s.useState)(p),e=Object(r.a)(t,2),n=e[0],c=e[1],i=k(n,0),a=k(n,1),j=k(n,2);return Object(u.jsxs)(O,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(f,{}),Object(u.jsx)(x,{onAddToDo:function(t){c((function(e){return[].concat(Object(l.a)(e),[{title:t,id:Math.random().toFixed(3),status:0}])}))}}),Object(u.jsxs)(v.d,{children:[Object(u.jsxs)(v.b,{children:[Object(u.jsxs)(v.a,{children:["All (",i.length,")"]}),Object(u.jsxs)(v.a,{children:["Done (",a.length,")"]}),Object(u.jsxs)(v.a,{children:["Deleted (",j.length,")"]})]}),Object(u.jsx)(v.c,{children:Object(u.jsx)(d,{setToDone:function(t){var e=N(n,t,1);c(e)},setToDeleted:function(t){var e=N(n,t,2);c(e)},list:i})}),Object(u.jsx)(v.c,{children:Object(u.jsx)(h,{setToAll:function(t){var e=N(n,t,0);c(e)},list:a})}),Object(u.jsx)(v.c,{children:Object(u.jsx)(b,{list:j})})]})]})});var y=function(){return Object(u.jsx)(g,{})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),T()}],[[30,1,2]]]);
//# sourceMappingURL=main.5d74be1a.chunk.js.map