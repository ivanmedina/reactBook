(this.webpackJsonpreservation=this.webpackJsonpreservation||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,function(e,t,a){},,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),c=a.n(l),r=(a(18),a(2)),o=a(3),i=a(5),u=a(4),m=(a(19),a(9)),d=a(6),p=a.n(d),h=a(8),g=a(1),v=(a(11),a(7)),f=a.n(v);function E(e){return s.a.createElement(A,null)}function k(e){return e.acceso?s.a.createElement("loadLogin",null):s.a.createElement("div",{className:"signup"},s.a.createElement("div",{className:"signup-header"},s.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),s.a.createElement("h2",null,"SIGN IN")),s.a.createElement("div",{className:"signup-body"},s.a.createElement("form",{name:"form2"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{type:"text",name:"names",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Surnames"),s.a.createElement("input",{type:"text",name:"surnames",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Username"),s.a.createElement("input",{type:"text",name:"username",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"text",name:"email",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",name:"password",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Confirm Password"),s.a.createElement("input",{type:"password",name:"confirm",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){return e.sendSign(t)}}))),s.a.createElement("div",{className:"signup-footer"},s.a.createElement("a",{href:"#",onClick:e.loadLogin},"Cancel")))}var b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loading:!1,success:!1,message:"",names:"",surnames:"",username:"",email:"",password:"",confirm:"",clicked:!0},n.handleSignupClick=n.handleSignupClick.bind(Object(g.a)(n)),n.ChangeHandler=n.ChangeHandler.bind(Object(g.a)(n)),n.sendSignup=n.sendSignup.bind(Object(g.a)(n)),n.itsCreated=n.itsCreated.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"itsCreated",value:function(){}},{key:"sendSignup",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0});var a=new FormData;a.append("names",this.state.names),a.append("surnames",this.state.surnames),a.append("username",this.state.username),a.append("email",this.state.email),a.append("password",this.state.password),a.append("confirm",this.state.confirm);fetch("/signup.php",{method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json",Connection:"keep-alive",Origin:"localhost"},mode:"cors",Connection:"keep",body:a}).then((function(e){return e.json().then((function(e){t.setState({success:e.success}),t.setState({message:e.message}),t.setState({loading:!1}),console.log(t.state),alert(t.state.message)}))})).catch((function(e){var a={success:"false",message:"Error in fetch"};t.setState({success:a.success}),t.setState({message:a.message}),t.setState({loading:!1}),console.log(a),alert(t.state.message)}))}},{key:"handleSignupClick",value:function(){this.setState((function(e){return{clicked:!e.clicked}}))}},{key:"ChangeHandler",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.success?s.a.createElement(E,null):s.a.createElement("div",null,this.state.clicked?s.a.createElement(k,{loadLogin:this.handleSignupClick,saveText:this.ChangeHandler,sendSign:this.sendSignup,acceso:this.state.success}):s.a.createElement(E,null))}}]),a}(n.Component);a(21);function C(e){return s.a.createElement(A,null)}function S(e){return s.a.createElement("div",{className:"posts-empty"},s.a.createElement("p",null,"NO HAY POSTS"))}function y(e){return s.a.createElement("div",{className:"post",key:e.post.key},s.a.createElement("div",{className:"post-user"},e.post.username),s.a.createElement("div",{className:"post-date"},e.post.posted),s.a.createElement("div",{className:"post-post"},e.post.post))}function O(e){var t=e.dat;return void 0==t||t.length<1?s.a.createElement("div",{className:"div-post-div"},s.a.createElement(S,null)):s.a.createElement("div",{className:"post-div"},t.map((function(e){return s.a.createElement(y,{post:e,key:e.id})})))}function j(e){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"home-header"},s.a.createElement("h2",null,"ReactBook"),s.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})),s.a.createElement("div",{className:"home-body"},s.a.createElement("div",{className:"home-body-header"},s.a.createElement("div",null,s.a.createElement("a",{href:"#",onClick:function(t){return e.clickLogout(t)}},"Log out"))),s.a.createElement("div",{className:"home-body-newpost"},s.a.createElement("div",{className:"newpost"},s.a.createElement("textarea",{rows:"6",cols:"30",className:"newpost-area",name:"postArea",onChange:function(t){return e.handlerArea(t)}}),s.a.createElement("div",{className:"newpost-options"},s.a.createElement("div",null,s.a.createElement("button",{type:"button",name:"postB",onClick:function(t){return e.handlerPost(t)}},"Post")),s.a.createElement("div",null,s.a.createElement("button",{type:"button",name:"clearB",onClick:function(t){return e.handlerClear(t)}},"Clear"))))),s.a.createElement(O,{dat:e.datas})),s.a.createElement("div",{className:"home-footer"}))}var w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loading:!1,access:"denied",post:"",username:e.userState,posts:[],clicked:!0,logoutB:!1},n.handlerClearClick=n.handlerClearClick.bind(Object(g.a)(n)),n.handlerPostClick=n.handlerPostClick.bind(Object(g.a)(n)),n.postChangeHandler=n.postChangeHandler.bind(Object(g.a)(n)),n.handleLogoutClick=n.handleLogoutClick.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"handleLogoutClick",value:function(){var e=this;this.setState((function(t){return{logoutB:!e.state.logoutB}}))}},{key:"getPosts",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/posts.php",this.setState({loading:!0}),e.next=4,fetch("/posts.php",{method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json",Connection:"keep-alive",Origin:"localhost"},mode:"cors",Connection:"keep"}).then((function(e){return e.json().then((function(e){t.setState({posts:e}),console.log(t.state.posts),t.setState({loading:!1})}))})).catch((function(e){t.setState({posts:null}),t.setState({loading:!1})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postChangeHandler",value:function(e){var t=document.getElementsByName("postArea")[0].value;this.setState((function(e){return{post:t}}))}},{key:"handlerPostClick",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState((function(e){return{loading:!0}})),"/post.php",e.next=4,fetch("/post.php",{method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json",Connection:"keep-alive",Origin:"localhost"},mode:"cors",Connection:"keep",body:JSON.stringify({username:this.state.username,post:this.state.post})}).then((function(e){return e.text().then((function(e){console.log(e),a.setState({loading:!1}),a.getPosts(),document.getElementsByName("postArea")[0].value=""}))})).catch((function(e){console.log(e),a.setState({loading:!1})}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlerClearClick",value:function(e){this.setState((function(e){return{clicked:!e.clicked}})),document.getElementsByName("postArea")[0].value="",console.log(this.state.clicked)}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.logoutB?s.a.createElement(C,null):s.a.createElement(j,{datas:this.state.posts,handlerClear:this.handlerClearClick,handlerPost:this.handlerPostClick,handlerArea:this.postChangeHandler,clickLogout:this.handleLogoutClick}))}}]),a}(n.Component);function N(e){return s.a.createElement(b,null)}function x(e){return"sucessful"!=e.theAccess?s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"login-header"},s.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),s.a.createElement("h2",null,"LOGIN")),s.a.createElement("div",{className:"login-body"},s.a.createElement("form",null,s.a.createElement("label",null,"Username"),s.a.createElement("input",{type:"text",name:"username",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",name:"password",onChange:e.saveText}),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){return e.sendLog(t)}}))),s.a.createElement("div",{className:"login-footer"},s.a.createElement("a",{href:"#",onClick:e.loadSign},"Sign up"))):s.a.createElement(w,null)}var A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loading:!1,access:"denied",message:"",username:"",password:"",clicked:!0},n.handleSignupClick=n.handleSignupClick.bind(Object(g.a)(n)),n.ChangeHandler=n.ChangeHandler.bind(Object(g.a)(n)),n.sendLogin=n.sendLogin.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"sendLogin",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),(a=new FormData).append("username",this.state.username),a.append("password",this.state.password),"/login.php",e.next=8,fetch("/login.php",{method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json",Connection:"keep-alive",Origin:"localhost"},mode:"cors",Connection:"keep",body:a}).then((function(e){return e.json().then((function(e){n.setState({access:e.access}),n.setState({message:e.message}),n.setState({message:e.message}),n.setState({loading:!1}),alert(n.state.message),console.log(e)}))})).catch((function(e){var t={access:!1,message:e};n.setState({access:t.access}),n.setState({username:t.username}),n.setState({loading:!1}),alert(n.state.message)}));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSignupClick",value:function(){this.setState((function(e){return{clicked:!e.clicked}}))}},{key:"ChangeHandler",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.clicked?"successful"==this.state.access?s.a.createElement("div",null,s.a.createElement(w,{userState:this.state.username})):s.a.createElement(x,{loadSign:this.handleSignupClick,saveText:this.ChangeHandler,sendLog:this.sendLogin,theAccess:this.state.access}):s.a.createElement(N,null))}}]),a}(n.Component),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loading:!1,access:"denied",message:"",username:"",password:"",clicked:!0},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"container"},s.a.createElement("section",{className:"components"},s.a.createElement(A,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.73a19345.chunk.js.map