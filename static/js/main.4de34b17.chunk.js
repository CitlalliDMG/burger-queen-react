(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={items:[{name:"caf\xe9 americano",price:5,category:0},{name:"caf\xe9 con leche",price:7,category:0},{name:"sandwich de jam\xf3n y queso",price:10,category:0},{name:"jugo natural",price:7,category:0},{name:"hamburguesa s res",price:10,category:1},{name:"hamburguesa s pollo",price:10,category:1},{name:"hamburguesa s vegetariana",price:10,category:1},{name:"hamburguesa d res",price:15,category:1},{name:"hamburguesa d pollo",price:15,category:1},{name:"hamburguesa d vegetariana",price:15,category:1},{name:"papas fritas",price:5,category:1},{name:"onion rings",price:5,category:1},{name:"agua 500ml",price:5,category:1},{name:"agua 750ml",price:8,category:1},{name:"refresco 500ml",price:7,category:1},{name:"refresco 750ml",price:10,category:1},{name:"queso",price:1,category:1},{name:"huevo",price:1,category:1}],categories:["desayuno","comida"]}},26:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"auth",function(){return v});var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",function(){return E}),a.d(r,"doSignInWithEmailAndPassword",function(){return g}),a.d(r,"doSignOut",function(){return O}),a.d(r,"doPasswordReset",function(){return y}),a.d(r,"doPasswordUpdate",function(){return j});var c=a(0),o=a.n(c),u=(a(28),a(20),a(30),a(31),a(21)),l=a.n(u),s=(a(35),a(66)),i=a(67),m=a(65),p=a(64),d=Object(c.createContext)(null),b="/home",h=a(18),f=a.n(h);a(44);f.a.apps.length||f.a.initializeApp({apiKey:"AIzaSyBh3icoYCT51XZDQGyUW2OWB1wLXFPg9E4",authDomain:"burguer-queen-dfeeb.firebaseapp.com",databaseURL:"https://burguer-queen-dfeeb.firebaseio.com",projectId:"burguer-queen-dfeeb",storageBucket:"burguer-queen-dfeeb.appspot.com",messagingSenderId:"1084432544607"});var v=f.a.auth(),E=function(e,t){return v.createUserWithEmailAndPassword(e,t)},g=function(e,t){return v.signInWithEmailAndPassword(e,t)},O=function(){console.log("Adios"),v.signOut()},y=function(e){return v.sendPasswordResetEmail(e)},j=function(e){return v.currentUser.updatePassword(e)},w=(a(46),function(){return o.a.createElement("button",{className:"button",type:"button",onClick:r.doSignOut},"Cerrar sesi\xf3n")}),C=(a(48),function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-red"},o.a.createElement("a",{className:"navbar-brand",href:"/burger-queen-react/"},"Burger Queen"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.a,{to:b,className:"nav-link"},"Ingresar pedido")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(p.a,{to:"/account",className:"nav-link"},"Perfil")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(w,null)))))}),N=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-red"},o.a.createElement("a",{className:"navbar-brand",href:"/burger-queen-react/"},"Burger Queen"))},S=function(){return o.a.createElement(d.Consumer,null,function(e){return e?o.a.createElement(C,null):o.a.createElement(N,null)})},k=a(12),x=a(3),P=a(4),U=a(6),I=a(5),T=a(7),A=a(11),W=a(68),q=(a(52),{username:"",email:"",passwordOne:"",passwordTwo:"",error:null}),B=function(e,t){return function(){return Object(A.a)({},e,t)}},D=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(U.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=(t.username,t.email),c=t.passwordOne,o=a.props.history;r.doCreateUserWithEmailAndPassword(n,c).then(function(e){a.setState(Object(k.a)({},q)),o.push(b)}).catch(function(e){a.setState(B("error",e))})},a.state=Object(k.a)({},q),a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,c=t.passwordTwo,u=t.error,l=r!==c||""===r||""===n||""===a;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:a,onChange:function(t){return e.setState(B("username",t.target.value))},type:"text",placeholder:"Nombre Completo"}),o.a.createElement("input",{value:n,onChange:function(t){return e.setState(B("email",t.target.value))},type:"text",placeholder:"Correo Electr\xf3nico"}),o.a.createElement("input",{value:r,onChange:function(t){return e.setState(B("passwordOne",t.target.value))},type:"password",placeholder:"Contrase\xf1a"}),o.a.createElement("input",{value:c,onChange:function(t){return e.setState(B("passwordTwo",t.target.value))},type:"password",placeholder:"Confirmar contrase\xf1a"}),o.a.createElement("button",{disabled:l,type:"submit"},"Registrar"),u&&o.a.createElement("p",null,u.message))}}]),t}(c.Component),R=function(){return o.a.createElement("p",null,o.a.createElement(p.a,{to:"/signup"}," Registrar a nuevo usuario"))},M=Object(W.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"center container col-8"},o.a.createElement("h1",{className:"mb-3"},"Ingresa los datos del nuevo usuario"),o.a.createElement(D,{history:t}))}),F=function(e,t){return function(){return Object(A.a)({},e,t)}},Q={email:"",error:null},$=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(U.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state.email;r.doPasswordReset(t).then(function(){a.setState(Object(k.a)({},Q))}).catch(function(e){a.setState(F("error",e))})},a.state=Object(k.a)({},Q),a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=""===a;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState(F("email",t.target.value))},type:"email",placeholder:"Correo electr\xf3nico"}),o.a.createElement("button",{disabled:r,type:"submit"},"Restablecer contrase\xf1a"),n&&o.a.createElement("p",null,n.message))}}]),t}(c.Component),z=function(){return o.a.createElement("p",null,o.a.createElement(p.a,{to:"/pw-forget"},"\xbfOlvidaste tu contrase\xf1a?"))},G=function(){return o.a.createElement("div",{className:"center container col-8"},o.a.createElement("h1",{className:"mb-3"},"\xbfOlvidaste tu contrase\xf1a?"),o.a.createElement("p",null,"Ingresa tu correo electr\xf3nico y recibe un email con las instrucciones para restablecerla"),o.a.createElement($,null))},J=(a(55),function(e,t){return function(){return Object(A.a)({},e,t)}}),L={email:"",password:"",error:null},X=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(U.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,c=t.password,o=a.props.history;r.doSignInWithEmailAndPassword(n,c).then(function(){a.setState(Object(k.a)({},L)),o.push(b)}).catch(function(e){a.setState(J("error",e))})},a.state=Object(k.a)({},L),a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,c=""===n||""===a;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:a,onChange:function(t){return e.setState(J("email",t.target.value))},type:"text",placeholder:"Correo electr\xf3nico"}),o.a.createElement("input",{value:n,onChange:function(t){return e.setState(J("password",t.target.value))},type:"password",placeholder:"Contrase\xf1a"}),o.a.createElement("button",{disabled:c,type:"submit"},"Entrar"),r&&o.a.createElement("p",null,r.message))}}]),t}(c.Component),K=Object(W.a)(function(e){var t=e.history;return o.a.createElement("div",{className:"center container col-8"},o.a.createElement("h1",{className:"mb-3"},"Iniciar sesi\xf3n"),o.a.createElement(X,{history:t}),o.a.createElement(z,null),o.a.createElement(R,null))}),V=a(25),Y=function(e){return function(t){var a=function(a){function r(){return Object(x.a)(this,r),Object(U.a)(this,Object(I.a)(r).apply(this,arguments))}return Object(T.a)(r,a),Object(P.a)(r,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/")})}},{key:"render",value:function(){var e=this;return o.a.createElement(d.Consumer,null,function(a){return a?o.a.createElement(t,e.props):null})}}]),r}(c.Component);return Object(W.a)(a)}},Z=a(24),H=(a(57),function(e){function t(){return Object(x.a)(this,t),Object(U.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(P.a)(t,[{key:"inputName",value:function(e){this.props.getName(e.target.value)}},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("input",{onChange:this.inputName.bind(this),type:"text",placeholder:"Ingresa el nombre del cliente",className:"customer col-6 mr-5"}))}}]),t}(c.Component)),_=function(e){return null===e.menu?o.a.createElement("div",null,o.a.createElement("p",null,"Elige un men\xfa para ver los items disponibles")):o.a.createElement("div",{className:"menu"},e.menu.map(function(t,a){return o.a.createElement("button",{className:"option-buttons",key:a,price:t.price,name:t.name,onClick:function(){return e.onClick(t.price,t.name)}},t.name.toUpperCase()+"\n $"+t.price)}))},ee=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(U.a)(this,Object(I.a)(t).call(this,e))).handleOnClickMenu=function(e,t){a.props.orderTaked(e,t)},a.selectMenu=function(e,t){var n=t.filter(function(t){return t.category===e});a.setState({menu:n})},a.state={menu:null,order:[]},a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=Object.values(this.props.data.categories);return o.a.createElement("div",null,o.a.createElement("div",{className:"main-buttons mb-3"},t.map(function(t,a){return o.a.createElement("button",{className:"menu-buttons",onClick:function(){return e.selectMenu(a,e.props.data.items)},key:a},t.toUpperCase())})),o.a.createElement(_,{menu:this.state.menu,onClick:this.handleOnClickMenu.bind(this)}))}}]),t}(c.Component),te=(a(59),function(e){var t=""===e.customerName||0===e.order.length;return o.a.createElement("aside",{className:"card"},o.a.createElement("div",{className:"card-body order"},o.a.createElement("p",{className:"card-tittle"},"Cliente"),o.a.createElement("p",{className:"card-text bold"},e.customerName),o.a.createElement("hr",null),e.order.map(function(e,t){return o.a.createElement("p",{key:t},Object.keys(e)+" - $"+Object.values(e))})),o.a.createElement("div",{className:"card-body"},o.a.createElement("hr",null),o.a.createElement("p",{className:"card-text"},"Total: ",e.total),o.a.createElement("button",{disabled:t},"Enviar orden")))}),ae=function(e){function t(){var e;return Object(x.a)(this,t),(e=Object(U.a)(this,Object(I.a)(t).call(this))).state={customerName:"",menu:null,order:[],total:0},e}return Object(T.a)(t,e),Object(P.a)(t,[{key:"fromCustomerForm",value:function(e){this.setState({customerName:e})}},{key:"fromTakeOrderButtons",value:function(e,t){this.setState({order:Object(V.a)(this.state.order).concat([Object(A.a)({},t.toUpperCase(),e)])});var a=this.state.total+e;this.setState({total:a})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-7"},o.a.createElement("p",null,"1) Ingresa el nombre del cliente"),o.a.createElement(H,{getName:this.fromCustomerForm.bind(this)}),o.a.createElement("p",null,"2) Toma la orden"),o.a.createElement(ee,{data:Z,orderTaked:this.fromTakeOrderButtons.bind(this)})),o.a.createElement("div",{className:"col-md-5 mt-3"},o.a.createElement("p",null,"3) Verifica el pedido"),o.a.createElement(te,{customerName:this.state.customerName,order:this.state.order,total:this.state.total}))))}}]),t}(c.Component),ne=Y(function(e){return!!e})(ae),re=function(e,t){return function(){return Object(A.a)({},e,t)}},ce={passwordOne:"",passwordTwo:"",error:null},oe=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(U.a)(this,Object(I.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state.passwordOne;r.doPasswordUpdate(t).then(function(){a.setState(Object(k.a)({},ce))}).catch(function(e){a.setState(re("error",e))})},a.state=Object(k.a)({},ce),a}return Object(T.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.passwordOne,n=t.passwordTwo,r=t.error,c=a!==n||""===a;return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:a,onChange:function(t){return e.setState(re("passwordOne",t.target.value))},type:"password",placeholder:"Nueva contrase\xf1a"}),o.a.createElement("input",{value:n,onChange:function(t){return e.setState(re("passwordTwo",t.target.value))},type:"password",placeholder:"Confirma nueva contrase\xf1a"}),o.a.createElement("button",{disabled:c,type:"submit"},"Guardar nueva contrase\xf1a"),r&&o.a.createElement("p",null,r.message))}}]),t}(c.Component),ue=Y(function(e){return!!e})(function(){return o.a.createElement(d.Consumer,null,function(e){return o.a.createElement("div",{className:"center container col-8"},o.a.createElement("h1",null,"Informaci\xf3n de perfil"),o.a.createElement("p",null,"\xbfQuieres cambiar tu contrase\xf1a?"),o.a.createElement(oe,null))})}),le=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Error404 Page"))},se=function(e){return function(t){function a(e){var t;return Object(x.a)(this,a),(t=Object(U.a)(this,Object(I.a)(a).call(this,e))).state={authUser:null},t}return Object(T.a)(a,t),Object(P.a)(a,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){var t=this.state.authUser;return o.a.createElement(d.Provider,{value:t},o.a.createElement(e,this.props))}}]),a}(c.Component)},ie=(a(61),se(function(){return o.a.createElement(s.a,{basename:"/burger-queen-react"},o.a.createElement(c.Fragment,null,o.a.createElement(S,null),o.a.createElement(i.a,null,o.a.createElement(m.a,{exact:!0,path:"/signup",component:M}),o.a.createElement(m.a,{exact:!0,path:"/",component:K}),o.a.createElement(m.a,{exact:!0,path:"/pw-forget",component:G}),o.a.createElement(m.a,{exact:!0,path:b,component:ne}),o.a.createElement(m.a,{exact:!0,path:"/account",component:ue}),o.a.createElement(m.a,{component:le}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.4de34b17.chunk.js.map