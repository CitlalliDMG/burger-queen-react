(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e){e.exports={items:[{name:"caf\xe9 americano",price:5,category:0},{name:"caf\xe9 con leche",price:7,category:0},{name:"sandwich de jam\xf3n y queso",price:10,category:0},{name:"jugo natural",price:7,category:0},{name:"hamburguesa sencilla res",price:10,category:1},{name:"hamburguesa sencilla pollo",price:10,category:1},{name:"hamburguesa sencilla vegetariana",price:10,category:1},{name:"hamburguesa doble res",price:15,category:1},{name:"hamburguesa doble pollo",price:15,category:1},{name:"hamburguesa doble vegetariana",price:15,category:1},{name:"papas fritas",price:5,category:1},{name:"onion rings",price:5,category:1},{name:"agua 500ml",price:5,category:1},{name:"agua 750ml",price:8,category:1},{name:"refresco 500ml",price:7,category:1},{name:"refresco 750ml",price:10,category:1},{name:"queso",price:1,category:1},{name:"huevo",price:1,category:1}],categories:["desayuno","comida"]}},30:function(e,t,a){e.exports=a(72)},39:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"auth",function(){return g}),a.d(n,"db",function(){return O});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return y}),a.d(r,"doSignInWithEmailAndPassword",function(){return j}),a.d(r,"doSignOut",function(){return C}),a.d(r,"doPasswordReset",function(){return N}),a.d(r,"doPasswordUpdate",function(){return w});var o=a(0),c=a.n(o),l=(a(32),a(24),a(34),a(35),a(25)),s=a.n(l),u=(a(39),a(75)),i=a(76),m=a(74),p=a(15),d=a(17),h=a(73),b=Object(o.createContext)(null),f="/home",v=a(16),E=a.n(v);a(48),a(50);E.a.apps.length||E.a.initializeApp({apiKey:"AIzaSyBh3icoYCT51XZDQGyUW2OWB1wLXFPg9E4",authDomain:"burguer-queen-dfeeb.firebaseapp.com",databaseURL:"https://burguer-queen-dfeeb.firebaseio.com",projectId:"burguer-queen-dfeeb",storageBucket:"burguer-queen-dfeeb.appspot.com",messagingSenderId:"1084432544607"});var g=E.a.auth(),O=E.a.firestore();O.settings({timestampsInSnapshots:!0});var y=function(e,t){return g.createUserWithEmailAndPassword(e,t)},j=function(e,t){return g.signInWithEmailAndPassword(e,t)},C=function(){console.log("Adios"),g.signOut()},N=function(e){return g.sendPasswordResetEmail(e)},w=function(e){return g.currentUser.updatePassword(e)},S=(a(55),function(){return c.a.createElement("button",{className:"button",type:"button",onClick:r.doSignOut},"Cerrar sesi\xf3n")}),k=(a(57),function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-red"},c.a.createElement("a",{className:"navbar-brand",href:"/burger-queen-react/"},"Burger Queen"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{to:f,className:"nav-link"},"Ingresar pedido")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.a,{to:"/account",className:"nav-link"},"Perfil")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S,null)))))}),x=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-red"},c.a.createElement("a",{className:"navbar-brand",href:"/burger-queen-react/"},"Burger Queen"))},I=function(){return c.a.createElement(b.Consumer,null,function(e){return e?c.a.createElement(k,null):c.a.createElement(x,null)})},B=a(11),P=a(3),T=a(4),U=a(6),A=a(5),W=a(7),q=a(12),R=a(77),D=(a(61),{username:"",email:"",passwordOne:"",passwordTwo:"",error:null}),L=function(e,t){return function(){return Object(q.a)({},e,t)}},M=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(U.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=(t.username,t.email),o=t.passwordOne,c=a.props.history;r.doCreateUserWithEmailAndPassword(n,o).then(function(e){a.setState(Object(B.a)({},D)),c.push(f)}).catch(function(e){a.setState(L("error",e))})},a.state=Object(B.a)({},D),a}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,o=t.passwordTwo,l=t.error,s=r!==o||""===r||""===n||""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:a,onChange:function(t){return e.setState(L("username",t.target.value))},type:"text",placeholder:"Nombre Completo"}),c.a.createElement("input",{value:n,onChange:function(t){return e.setState(L("email",t.target.value))},type:"text",placeholder:"Correo Electr\xf3nico"}),c.a.createElement("input",{value:r,onChange:function(t){return e.setState(L("passwordOne",t.target.value))},type:"password",placeholder:"Contrase\xf1a"}),c.a.createElement("input",{value:o,onChange:function(t){return e.setState(L("passwordTwo",t.target.value))},type:"password",placeholder:"Confirmar contrase\xf1a"}),c.a.createElement("button",{disabled:s,type:"submit"},"Registrar"),l&&c.a.createElement("p",null,l.message))}}]),t}(o.Component),Q=function(){return c.a.createElement("p",null,c.a.createElement(h.a,{to:"/signup"}," Registrar a nuevo usuario"))},F=Object(R.a)(function(e){var t=e.history;return c.a.createElement("div",{className:"center container col-8"},c.a.createElement("h1",{className:"mb-3"},"Ingresa los datos del nuevo usuario"),c.a.createElement(M,{history:t}))}),$=function(e,t){return function(){return Object(q.a)({},e,t)}},z={email:"",error:null},G=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(U.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(Object(B.a)({},z))}).catch(function(e){a.setState($("error",e))})},a.state=Object(B.a)({},z),a}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState($("email",t.target.value))},type:"email",placeholder:"Correo electr\xf3nico"}),c.a.createElement("button",{disabled:r,type:"submit"},"Restablecer contrase\xf1a"),n&&c.a.createElement("p",null,n.message))}}]),t}(o.Component),J=function(){return c.a.createElement("p",null,c.a.createElement(h.a,{to:"/pw-forget"},"\xbfOlvidaste tu contrase\xf1a?"))},X=function(){return c.a.createElement("div",{className:"center container col-8"},c.a.createElement("h1",{className:"mb-3"},"\xbfOlvidaste tu contrase\xf1a?"),c.a.createElement("p",null,"Ingresa tu correo electr\xf3nico y recibe un email con las instrucciones para restablecerla"),c.a.createElement(G,null))},K=(a(64),function(e,t){return function(){return Object(q.a)({},e,t)}}),V={email:"",password:"",error:null},Y=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(U.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,o=t.password,c=a.props.history;r.doSignInWithEmailAndPassword(n,o).then(function(){a.setState(Object(B.a)({},V)),c.push(f)}).catch(function(e){a.setState(K("error",e))})},a.state=Object(B.a)({},V),a}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,o=""===n||""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:a,onChange:function(t){return e.setState(K("email",t.target.value))},type:"text",placeholder:"Correo electr\xf3nico"}),c.a.createElement("input",{value:n,onChange:function(t){return e.setState(K("password",t.target.value))},type:"password",placeholder:"Contrase\xf1a"}),c.a.createElement("button",{disabled:o,type:"submit"},"Entrar"),r&&c.a.createElement("p",null,r.message))}}]),t}(o.Component),Z=Object(R.a)(function(e){var t=e.history;return c.a.createElement("div",{className:"center container col-8"},c.a.createElement("h1",{className:"mb-3"},"Iniciar sesi\xf3n"),c.a.createElement(Y,{history:t}),c.a.createElement(J,null),c.a.createElement(Q,null))}),H=a(22),_=a(21),ee=a.n(_),te=function(e){return function(t){var a=function(a){function r(){return Object(P.a)(this,r),Object(U.a)(this,Object(A.a)(r).apply(this,arguments))}return Object(W.a)(r,a),Object(T.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/")})}},{key:"render",value:function(){var e=this;return c.a.createElement(b.Consumer,null,function(a){return a?c.a.createElement(t,e.props):null})}}]),r}(o.Component);return Object(R.a)(a)}},ae=a(28),ne=(a(66),function(e){function t(){return Object(P.a)(this,t),Object(U.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(T.a)(t,[{key:"inputName",value:function(e){this.props.getName(e.target.value)}},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("input",{value:this.props.initialName,onChange:this.inputName.bind(this),type:"text",placeholder:"Ingresa el nombre del cliente",className:"customer col-6 mr-5"}))}}]),t}(o.Component)),re=function(e){return null===e.menu?c.a.createElement("div",null,c.a.createElement("p",null,"Elige un men\xfa para ver los items disponibles")):c.a.createElement("div",{className:"menu"},e.menu.map(function(t,a){return c.a.createElement("button",{className:"option-buttons",key:a,price:t.price,name:t.name,onClick:function(){return e.onClick(t.price,t.name)}},t.name.toUpperCase()+"\n $"+t.price)}))},oe=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(U.a)(this,Object(A.a)(t).call(this,e))).handleOnClickMenu=function(e,t){a.props.orderTaked(e,t)},a.selectMenu=function(e,t){var n=t.filter(function(t){return t.category===e});a.setState({menu:n})},a.state={menu:null,order:[]},a}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=Object.values(this.props.data.categories);return c.a.createElement("div",null,c.a.createElement("div",{className:"main-buttons mb-3"},t.map(function(t,a){return c.a.createElement("button",{className:"menu-buttons",onClick:function(){return e.selectMenu(a,e.props.data.items)},key:a},t.toUpperCase())})),c.a.createElement(re,{menu:this.state.menu,onClick:this.handleOnClickMenu.bind(this)}))}}]),t}(o.Component),ce=a(29),le=(a(68),function(e){function t(){return Object(P.a)(this,t),Object(U.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=""===this.props.customerName.trim()||0===this.props.order.length,a=0===this.props.order.length||!0===t;return c.a.createElement("aside",{className:"card"},c.a.createElement("div",{className:"card-body pb-0"},c.a.createElement("p",{className:"card-tittle"},"Cliente: ",c.a.createElement("span",{className:"bold"},this.props.customerName))),c.a.createElement("div",{className:"card-body order"},this.props.order.length>0?c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Items"),c.a.createElement("th",null,"Acci\xf3n"))),c.a.createElement("tbody",null,this.props.order.map(function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("th",{scope:"row"},a+1),c.a.createElement("td",null,t.name+" - $"+t.price),c.a.createElement("td",{className:"text-right"},c.a.createElement("button",{onClick:function(a){return e.props.remove(t)},type:"button",className:"bnt btn-default btn-small"},c.a.createElement(ce.a,{icon:"trash"}))))}))):c.a.createElement("p",{className:"text-center"},'"No has agregado items a la orden"')),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Items: ",c.a.createElement("span",{className:"bold"},this.props.order.length)," - Total: ",c.a.createElement("span",{className:"bold"},"$",this.props.total)),c.a.createElement("button",{disabled:t,onClick:function(t){return e.props.send()}},"Enviar orden"),c.a.createElement("button",{disabled:a,type:"button",className:"btn-danger mb-0",onClick:function(t){return e.props.clearAll()}},"Cancelar orden")))}}]),t}(o.Component)),se=function(e){function t(){var e;return Object(P.a)(this,t),(e=Object(U.a)(this,Object(A.a)(t).call(this))).sendOrder=function(){console.log(e.state),console.log(e.state.order),ee()({title:"\xa1Listo!",text:"La orden ha sido enviada'",type:"success",confirmButtonColor:"#001f5e"})},e.state={customerName:"",order:[],total:0},e}return Object(W.a)(t,e),Object(T.a)(t,[{key:"fromCustomerForm",value:function(e){this.setState({customerName:e})}},{key:"fromTakeOrderButtons",value:function(e,t){this.setState({order:Object(H.a)(this.state.order).concat([{name:t.toUpperCase(),price:e}])});var a=this.state.total+e;this.setState({total:a})}},{key:"fromRemoveItemButtons",value:function(e){var t=Object(H.a)(this.state.order),a=t.map(function(e){return e.name}).indexOf(e.name);t.splice(a,1);var n=this.state.total-e.price;this.setState({order:t,total:n})}},{key:"cancelOrder",value:function(){var e=this;ee()({title:"\xbfQuieres cancelar la orden?",text:"(Esta acci\xf3n no se puede revertir)",type:"warning",showCancelButton:!0,confirmButtonColor:"#dc3545",cancelButtonColor:"#001f5e",confirmButtonText:"Si",cancelButtonText:"No"}).then(function(t){t.value&&(e.setState({customerName:"",menu:null,order:[],total:0}),ee()({title:"\xa1Listo!",text:"La orden ha sido borrada'",type:"success",confirmButtonColor:"#001f5e"}))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement("p",null,"1) Ingresa el nombre del cliente"),c.a.createElement(ne,{getName:this.fromCustomerForm.bind(this),initialName:this.state.customerName}),c.a.createElement("p",null,"2) Toma la orden"),c.a.createElement(oe,{data:ae,orderTaked:this.fromTakeOrderButtons.bind(this)})),c.a.createElement("div",{className:"col-md-5 mt-3"},c.a.createElement("p",null,"3) Verifica el pedido"),c.a.createElement(le,{customerName:this.state.customerName,order:this.state.order,total:this.state.total,remove:this.fromRemoveItemButtons.bind(this),clearAll:this.cancelOrder.bind(this),send:this.sendOrder.bind(this)}))))}}]),t}(o.Component),ue=te(function(e){return!!e})(se),ie=function(e,t){return function(){return Object(q.a)({},e,t)}},me={passwordOne:"",passwordTwo:"",error:null},pe=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(U.a)(this,Object(A.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state.passwordOne;r.doPasswordUpdate(t).then(function(){a.setState(Object(B.a)({},me))}).catch(function(e){a.setState(ie("error",e))})},a.state=Object(B.a)({},me),a}return Object(W.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.passwordOne,n=t.passwordTwo,r=t.error,o=a!==n||""===a;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{value:a,onChange:function(t){return e.setState(ie("passwordOne",t.target.value))},type:"password",placeholder:"Nueva contrase\xf1a"}),c.a.createElement("input",{value:n,onChange:function(t){return e.setState(ie("passwordTwo",t.target.value))},type:"password",placeholder:"Confirma nueva contrase\xf1a"}),c.a.createElement("button",{disabled:o,type:"submit"},"Guardar nueva contrase\xf1a"),r&&c.a.createElement("p",null,r.message))}}]),t}(o.Component),de=te(function(e){return!!e})(function(){return c.a.createElement(b.Consumer,null,function(e){return c.a.createElement("div",{className:"center container col-8"},c.a.createElement("h1",null,"Informaci\xf3n de perfil"),c.a.createElement("p",null,"\xbfQuieres cambiar tu contrase\xf1a?"),c.a.createElement(pe,null))})}),he=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Error404 Page"))},be=function(e){return function(t){function a(e){var t;return Object(P.a)(this,a),(t=Object(U.a)(this,Object(A.a)(a).call(this,e))).state={authUser:null},t}return Object(W.a)(a,t),Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){var t=this.state.authUser;return c.a.createElement(b.Provider,{value:t},c.a.createElement(e,this.props))}}]),a}(o.Component)};a(70);p.b.add(d.b,d.a);var fe=be(function(){return c.a.createElement(u.a,{basename:"/burger-queen-react"},c.a.createElement(o.Fragment,null,c.a.createElement(I,null),c.a.createElement(i.a,null,c.a.createElement(m.a,{exact:!0,path:"/signup",component:F}),c.a.createElement(m.a,{exact:!0,path:"/",component:Z}),c.a.createElement(m.a,{exact:!0,path:"/pw-forget",component:X}),c.a.createElement(m.a,{exact:!0,path:f,component:ue}),c.a.createElement(m.a,{exact:!0,path:"/account",component:de}),c.a.createElement(m.a,{component:he}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.e7aa6b2b.chunk.js.map