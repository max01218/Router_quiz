(this.webpackJsonpquiz7=this.webpackJsonpquiz7||[]).push([[0],{81:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);n(81);var a=n(0),s=n.n(a),o=n(10),c=n.n(o),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))},r=n(31),d=n(11),l=n(50),u=n(47),j=n(68),h=n(144),b=n(141),p=n(134),m=n(142),x=n(140),g=n(143),O=n(135),f=n(132),v=n(71),w=n(129),k=n(139),y=n(136),T=n(145),N=n(138),C=n(137),S=n(66),E=n.n(S),P=n(67),V=n.n(P),F=n(4),I=Object(w.a)((function(e){return{background:{height:"100vh"},root:{"& > *":{margin:e.spacing(0),width:"100%",maxWidth:500}},paper:{margin:e.spacing(8,10),display:"flex",flexDirection:"column",alignItems:"center"},image:{backgroundImage:"url(http://localhost:3000/CGU.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",width:"100%"},word:{fontWeight:"100%",fontSize:30,fontStyle:"Bold",margin:e.spacing(5)},avatar:{margin:e.spacing(50)},form:{width:"100%",marginTop:e.spacing(1)},bottom:{margin:e.spacing(3,0,2)}}}));var D=n(69),W=n(36),q=n(37),z=n(40),G=n(39),U=(n(93),function(e){Object(z.a)(n,e);var t=Object(G.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).state={newText:e.todo.text,editing:!1},a}return Object(q.a)(n,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var e=this.state.editing;this.setState({newText:this.props.todo.text,editing:!e})}},{key:"getNewText",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"saveEditedValue",value:function(){var e=this.state.newText;this.props.saveEditedValue(this.props.todo.id,e),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var e=this,t=this.state.editing,n=this.props.todo;return Object(F.jsxs)("li",{className:"list-group-item list-row "+(n.completed?"done":""),children:[Object(F.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return e.checkTodoToggle()},children:"\u2713"}),Object(F.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return e.showEditForm()},children:[!t&&Object(F.jsx)("span",{className:"list-text",children:n.text}),t&&Object(F.jsxs)("div",{className:"input-group",children:[Object(F.jsx)("input",{type:"text",className:"form-control",placeholder:n.text,value:this.state.newText,onChange:function(t){return e.getNewText(t)}}),Object(F.jsxs)("div",{className:"input-group-append",children:[Object(F.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.showEditForm()},children:"\u53d6\u6d88"}),Object(F.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(F.jsx)("div",{className:"btn-circle delete",onClick:function(){return e.deleteTodo()},children:"\u2715"})]})}}]),n}(s.a.Component)),_=function(e){Object(z.a)(n,e);var t=Object(G.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return Object(F.jsx)("h1",{children:"CGU Todo list"})}}]),n}(s.a.Component),A=function(e){Object(z.a)(n,e);var t=Object(G.a)(n);function n(e){var a;return Object(W.a)(this,n),(a=t.call(this,e)).state={todos:[{id:1,text:"1",color:"red",completed:!0},{id:2,text:"2",completed:!1},{id:3,text:"3",completed:!1}],newId:4,newText:""},a}return Object(q.a)(n,[{key:"getNewValue",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"addTodo",value:function(e){var t=this.state,n=t.todos,a=t.newText,s=t.newId;a?this.setState({todos:[].concat(Object(D.a)(n),[{id:s,text:a,completed:!1}]),newId:s+1,newText:""}):e.preventDefault()}},{key:"deleteTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"checkTodoToggle",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));this.setState({todos:t})}},{key:"saveEditedValue",value:function(e,t){var n=this.state.todos.map((function(n){return n.id===e&&(n.text=t),n}));this.setState({todos:n})}},{key:"render",value:function(){var e=this,t=this.state.todos;return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("header",{className:"header__container",children:Object(F.jsx)(_,{})}),Object(F.jsxs)("div",{className:"input-group mb-3",children:[Object(F.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"add a new todo",value:this.state.newText,onChange:function(t){return e.getNewValue(t)}}),Object(F.jsx)("span",{className:"input-group-append",children:Object(F.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(t){return e.addTodo(t)},children:"Add"})})]}),Object(F.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(t){return Object(F.jsx)(U,{todo:t,remove:function(t){return e.deleteTodo(t)},checkToggle:function(t){return e.checkTodoToggle(t)},saveEditedValue:function(t,n){return e.saveEditedValue(t,n)}},t.id)}))})]})}}]),n}(s.a.Component);c.a.render(Object(F.jsx)(r.a,{children:Object(F.jsxs)("div",{children:[Object(F.jsx)(d.a,{exact:!0,path:"/",component:function(){var e,t=I(),n=s.a.useState({password:"",showPassword:!0}),a=Object(j.a)(n,2),o=a[0],c=a[1];return Object(F.jsxs)(f.a,{container:!0,component:"main",className:t.background,children:[Object(F.jsx)(p.a,{}),Object(F.jsx)(f.a,{item:!0,xs:!1,sm:20,md:7,className:t.image}),Object(F.jsxs)(f.a,{item:!0,xs:12,sm:8,md:5,component:O.a,elevation:6,square:!0,children:[Object(F.jsxs)("div",{className:t.paper,children:[Object(F.jsx)(h.a,{alt:"CGU",src:"icon2.png",className:t.Avatar}),Object(F.jsx)(v.a,{className:t.word,children:"\u9577\u5e9a\u5927\u5b78\u767b\u5165\u7db2\u7ad9"}),Object(F.jsxs)("form",{className:t.form,noValidate:!0,autoComplete:"off",children:[Object(F.jsx)(m.a,{id:"standard-basic",label:"Email-address",fullWidth:!0,margin:"normal"}),Object(F.jsxs)(C.a,{fullWidth:!0,margin:"normal",required:!0,children:[Object(F.jsx)(T.a,{htmlFor:"standard-adorment-password",children:"Password"}),Object(F.jsx)(y.a,{label:"password",id:"password",fullWidth:!0,margin:"normal",type:o.showPassword?"text":"password",value:o.password,onChange:(e="password",function(t){c(Object(u.a)(Object(u.a)({},o),{},Object(l.a)({},e,t.target.value)))}),endAdornment:Object(F.jsx)(N.a,{children:Object(F.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(u.a)(Object(u.a)({},o),{},{showPassword:!o.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:o.showPassword?Object(F.jsx)(E.a,{}):Object(F.jsx)(V.a,{})})})})]}),Object(F.jsx)(x.a,{control:Object(F.jsx)(g.a,{value:"remember",color:"secondary"}),label:"\u8a18\u4f4f\u81ea\u5df1"}),Object(F.jsx)("switch",{children:Object(F.jsx)(r.b,{to:"/about",children:Object(F.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.submit,children:"Sign In"})})}),Object(F.jsxs)(f.a,{container:!0,children:[Object(F.jsx)(f.a,{item:!0,xs:!0,children:Object(F.jsx)(r.b,{href:"#",variant:"body2",children:"\u5fd8\u8a18\u5bc6\u78bc?"})}),Object(F.jsx)(f.a,{item:!0,xs:!0,children:Object(F.jsx)(r.b,{href:"#",variant:"body2",children:"\u9084\u6c92\u8a3b\u518a \u8fa6\u4e00\u500b\u516b"})})]})]})]}),Object(F.jsx)(f.a,{item:!0,xs:!0,children:Object(F.jsx)(r.b,{href:"https://www.cgu.edu.tw/",children:Object(F.jsx)("img",{src:"icon.png",alt:"CGU"})})})]})]})}}),Object(F.jsx)(d.a,{path:"/about",children:Object(F.jsx)(A,{})})]})}),document.getElementById("root")),i()}},[[94,1,2]]]);
//# sourceMappingURL=main.5d47e080.chunk.js.map