(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(32),r=a.n(c),i=a(8),s=a(9),o=a.n(s),u=a(13),l=a(21),d=a(22),j=a(10),b=a(36),p=a.n(b),m=a(28);a(170),a(75);m.a.initializeApp({apiKey:"AIzaSyD-DjJLkfN6G2xxbsFO1gDrkZcYK_71Ikc",authDomain:"journal-app-d1a3e.firebaseapp.com",projectId:"journal-app-d1a3e",storageBucket:"journal-app-d1a3e.appspot.com",messagingSenderId:"62681961631",appId:"1:62681961631:web:5ce7d4f96bbf07e1277eaa"});var h=m.a.firestore(),f=new m.a.auth.GoogleAuthProvider,O=a(19),x=a.n(O),v="[Auth] Login",g="[Auth] Logout",_="[UI] Set Error",y="[UI] Remove Error",N="[UI] Start Loading",w="[UI] Finish Loading",k="[Notes] Add New Note",C="[Notes] Set Active Note",S="[Notes] Load Notes",E="[Notes] Refresh Updated Note",I="[Notes] Delete Note",A="[Notes] Logout Cleaning Notes",L=function(e){return{type:_,payload:e}},F=function(){return{type:y}},U=function(){return{type:w}},D=a(6),P=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(D.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.cloudinary.com/v1_1/dvupfwoil/image/upload",(a=new FormData).append("upload_preset","journal-app-ractjs"),a.append("file",t),e.next=7,fetch("https://api.cloudinary.com/v1_1/dvupfwoil/image/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log("uploadImage>>>>>>>>>>>>>>>>"+e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t){return{type:C,payload:Object(D.a)({id:e},t)}},B=function(e,t){return{type:k,payload:Object(D.a)({id:e},t)}},W=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:n=t.sent,a(G(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("startLoadingNotes >>>>>>"+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return{type:S,payload:e}},z=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(a,n){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.uid,e.imageUrl||delete e.imageUrl,delete(r=Object(D.a)({},e)).id,t.next=6,h.doc("/".concat(c,"/journal/notes/").concat(e.id)).update(r).catch((function(e){console.log(e.message),x.a.fire("Saved",e.message,"success")}));case 6:a(J(e.id,r)),x.a.fire({position:"top-end",icon:"success",title:"Your note has been saved",text:"".concat(e.title),showConfirmButton:!1,timer:1500});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},J=function(e,t){return{type:E,payload:{id:e,note:Object(D.a)({id:e},t)}}},q=function(e){return{type:I,payload:{id:e}}},K=function(e,t){return function(a){return a({type:N}),m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(X(t.uid,t.displayName)),a(U())})).catch((function(e){a(U()),x.a.fire({icon:"error",title:"",text:e.message})}))}},X=function(e,t){return{type:v,payload:{uid:e,displayName:t}}},Y=function(e){return{type:g}},M=a(35),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(l.a)(t,2),c=a[0],r=a[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(D.a)(Object(D.a)({},c),{},Object(M.a)({},t.name,t.value)))};return[c,s,i]},Z=a(1),H=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),a=t.msgError,n=t.loading,c=V({email:"ralf_raid@yopmail.com",password:"123456"}),r=Object(l.a)(c,2),s=r[0],o=r[1],u=s.email,j=s.password,b=function(){return p.a.isEmail(u)?j.length<5?(e(L("password should be at least 6 characters")),!1):(e(F()),!0):(e(L("email is not valid")),!1)};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h3",{className:"auth__title",children:" Login Screen "}),Object(Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b()&&e(K(u,j))},className:"animate__animated animate__fadeIn  animate__faster  ",children:[a&&Object(Z.jsx)("div",{className:"auth__alert-error",children:a}),Object(Z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Z.jsx)("input",{className:"auth__input",name:"email",type:"text",autoComplete:"off",value:u,onChange:o}),Object(Z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Z.jsx)("input",{className:"auth__input",name:"password",type:"password",autoComplete:"off",value:j,onChange:o}),Object(Z.jsx)("br",{}),Object(Z.jsx)("button",{className:"btn btn-primary btn-block",disabled:n,children:"SigIn"}),Object(Z.jsxs)("div",{className:"auth__social-networks",children:[Object(Z.jsx)("p",{children:"Login with social netwoks"}),Object(Z.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){m.a.auth().signInWithPopup(f).then((function(t){var a=t.user;e(X(a.uid,a.displayName))}))}))},children:[Object(Z.jsx)("div",{className:"google-icon-wrapper",children:Object(Z.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Z.jsx)("p",{className:"btn-text",children:Object(Z.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Z.jsx)(d.b,{className:"link",to:"/auth/register",children:"Crate new acount"})]})]})},Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,a=V({name:"rafael",email:"ralf_raid@yopmail.com",password:"123456",confirmpassword:"123456"}),n=Object(l.a)(a,2),c=n[0],r=n[1],s=c.name,j=c.email,b=c.password,h=c.confirmpassword,f=function(){return 0===s.trim().length?(e(L("name is required")),!1):p.a.isEmail(j)?b!==h||b.length<5?(e(L("password should be at least 6 characters an match each other")),!1):(e(F()),!0):(e(L("email is not valid")),!1)};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h3",{className:"auth__title",children:" Register Screen "}),Object(Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,a){return function(n){m.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:a});case 3:n(X(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){x.a.fire("Error",e.message,"error")}))}}(j,b,s))},className:"animate__animated animate__fadeIn  animate__faster  ",children:[t&&Object(Z.jsx)("div",{className:"auth__alert-error",children:t}),Object(Z.jsx)("label",{htmlFor:"name",children:"Name"}),Object(Z.jsx)("input",{className:"auth__input",name:"name",value:s,type:"text",autoComplete:"off",onChange:r}),Object(Z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Z.jsx)("input",{className:"auth__input",name:"email",value:j,type:"text",autoComplete:"off",onChange:r}),Object(Z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Z.jsx)("input",{className:"auth__input",name:"password",value:b,type:"password",autoComplete:"off",onChange:r}),Object(Z.jsx)("label",{htmlFor:"password",children:"Confirm password"}),Object(Z.jsx)("input",{className:"auth__input",name:"confirmpassword",value:h,type:"password",autoComplete:"off",onChange:r}),Object(Z.jsx)("br",{}),Object(Z.jsx)("button",{className:"btn btn-primary btn-block mb-5 mt-5",children:"Register"}),Object(Z.jsx)(d.b,{className:"link ",to:"/auth/login",children:"Already register?"})]})]})},$=function(){return Object(Z.jsx)("div",{className:"auth__main",children:Object(Z.jsx)("div",{className:"auth__box-container",children:Object(Z.jsxs)(j.d,{children:[Object(Z.jsx)(j.b,{path:"/auth/login",component:H}),Object(Z.jsx)(j.b,{path:"/auth/register",component:Q}),Object(Z.jsx)(j.a,{to:"/auth/login"})]})})})},ee=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return Object(Z.jsxs)("div",{className:"notes__appbar ",children:[Object(Z.jsx)("span",{children:" 28 de agosto de 2021"}),Object(Z.jsx)("input",{id:"fileSelector",type:"file",onChange:function(t){var a=t.target.files[0];e(function(e){return function(){var t=Object(u.a)(o.a.mark((function t(a,n){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n().notes.active,x.a.fire({title:"Loading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,didOpen:function(){x.a.showLoading()}}),t.next=5,R(e);case 5:r=t.sent,c.imageUrl=r,a(z(c)),x.a.close(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("startUploadingImage >>>>>>>>>>>>"+t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(a))},style:{display:"none"}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Z.jsx)("button",{className:"btn",onClick:function(){e(z(t))},children:"Save"})]})]})},te=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=V(t),c=Object(l.a)(a,3),r=c[0],s=c[1],d=c[2],j=r.id,b=r.title,p=r.body,m=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==m.current&&(d(t),m.current=t.id)}),[t,d]),Object(n.useEffect)((function(){e(T(r.id,Object(D.a)({},r)))}),[r,e]);return Object(Z.jsxs)("div",{className:"notes__main-content",children:[Object(Z.jsx)(ee,{}),Object(Z.jsxs)("div",{className:"notes__content",children:[Object(Z.jsx)("label",{className:"mt-5 mb-1",htmlFor:"title",children:"Title"}),Object(Z.jsx)("input",{type:"text",placeholder:"Title",name:"title",className:"notes__title-input",value:b,onChange:s}),Object(Z.jsx)("label",{className:"mt-5 mb-1",htmlFor:"body",children:"Description"}),Object(Z.jsx)("textarea",{className:"notes__textarea ",name:"body",placeholder:"What happened today?",value:p,onChange:s}),Object(Z.jsx)("div",{className:"notes__image",children:t.imageUrl&&Object(Z.jsx)("img",{src:t.imageUrl,alt:"fantastic"})})]}),Object(Z.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(o.a.mark((function t(a,n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.uid,x.a.fire({title:"Loading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,didOpen:function(){x.a.showLoading()}}),t.next=4,h.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 4:a(q(e)),x.a.close();case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(j))},children:"Delete"})]})},ae=function(){return Object(Z.jsxs)("div",{className:"nothing__main-content animate__animated animate__fadeIn  animate__faster  ",children:[Object(Z.jsx)("p",{children:"Select somethin, or create a new entry"}),Object(Z.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ne=a(64),ce=a.n(ne),re=function(e){var t=e.id,a=e.title,n=e.body,c=e.date,r=e.imageUrl,s=Object(i.b)(),o=ce()(c);return Object(Z.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn  animate__faster  ",onClick:function(){s(T(t,{title:a,body:n,date:c,imageUrl:r}))},children:[r&&Object(Z.jsx)("div",{className:"journal__entry-picture",style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover"}}),Object(Z.jsxs)("div",{className:"journal__entry-body",children:[Object(Z.jsx)("div",{className:"journal__entry-title",children:a}),Object(Z.jsx)("div",{className:"journal__entry-content",children:n})]}),Object(Z.jsxs)("div",{className:"journal__date",children:[Object(Z.jsx)("span",{children:o.format("dddd")}),Object(Z.jsx)("h4",{children:o.format("Do")})]})]})},ie=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return Object(Z.jsx)("div",{className:"journal__entries animate__animated animate__fadeIn  animate__faster  ",children:e.map((function(e){return Object(Z.jsx)(re,Object(D.a)({},e),e.id)}))})},se=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return Object(Z.jsxs)("aside",{className:"journal__sidebar",children:[Object(Z.jsxs)("div",{className:"journal__side-navbar",children:[Object(Z.jsxs)("h3",{className:"mt-5",children:[Object(Z.jsx)("i",{className:"far fa-moon"}),Object(Z.jsxs)("span",{children:["  ",t," "]})]}),Object(Z.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(Y()),t({type:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(Z.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,h.collection("".concat(n,"/journal/notes")).add(c).catch((function(e){x.a.fire("Saved",e.message,"success")}));case 5:r=e.sent,t(T(r.id,c)),t(B(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("startNewNote>>>>>>>>>>>>>>>>>"+e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}())},children:[Object(Z.jsx)("i",{className:"far fa-calendar-plus fa-3x"}),Object(Z.jsx)("p",{className:"mt-1",children:"New Entry"})]}),Object(Z.jsx)(ie,{})]})},oe=function(){var e=Object(i.c)((function(e){return e.notes})).active;return Object(Z.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn  animate__faster  ",children:[Object(Z.jsx)(se,{}),Object(Z.jsx)("main",{children:e?Object(Z.jsx)(te,{}):Object(Z.jsx)(ae,{})})]})},ue=a(37),le=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,le);return localStorage.setItem("lastPath",n.location.pathname),Object(Z.jsx)(j.b,Object(D.a)(Object(D.a)({},n),{},{component:function(e){return t?Object(Z.jsx)(a,Object(D.a)({},e)):Object(Z.jsx)(j.a,{to:"/auth/login"})}}))},je=["isAuthenticated","component"],be=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,je);return Object(Z.jsx)(j.b,Object(D.a)(Object(D.a)({},n),{},{component:function(e){return t?Object(Z.jsx)(j.a,{to:"/"}):Object(Z.jsx)(a,Object(D.a)({},e))}}))},pe=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),b=Object(l.a)(s,2),p=b[0],h=b[1];return Object(n.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(X(a.uid,a.displayName)),h(!0),e(W(a.uid))):h(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,p]),c?Object(Z.jsx)("h2",{children:"Wait..."}):Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(d.a,{children:Object(Z.jsx)("div",{children:Object(Z.jsxs)(j.d,{children:[Object(Z.jsx)(be,{path:"/auth",isAuthenticated:p,component:$}),Object(Z.jsx)(de,{exact:!0,path:"/",isAuthenticated:p,component:oe}),Object(Z.jsx)(j.a,{to:"/auth/login"})]})})})})},me=a(29),he=a(65),fe=a(46),Oe={notes:[],active:null},xe={loading:!1,msgError:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,ge=Object(me.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.payload.uid,name:t.payload.displayName};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(D.a)(Object(D.a)({},e),{},{msgError:t.payload});case y:return Object(D.a)(Object(D.a)({},e),{},{msgError:null});case N:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case w:return Object(D.a)(Object(D.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(D.a)(Object(D.a)({},e),{},{active:Object(D.a)({},t.payload)});case k:return Object(D.a)(Object(D.a)({},e),{},{notes:[t.payload].concat(Object(fe.a)(e.notes))});case S:return Object(D.a)(Object(D.a)({},e),{},{notes:Object(fe.a)(t.payload)});case E:return Object(D.a)(Object(D.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case I:return Object(D.a)(Object(D.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload.id}))});case A:return Object(D.a)(Object(D.a)({},e),{},{active:null,notes:[]});default:return e}}}),_e=Object(me.d)(ge,ve(Object(me.a)(he.a))),ye=function(){return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(i.a,{store:_e,children:Object(Z.jsx)(pe,{})})})};a(168);r.a.render(Object(Z.jsx)(ye,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.c257340c.chunk.js.map