(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),c=(n(15),n(3)),l=n(4),u=n(6),o=n(5),m=n(1),d=n(7),h=n(9),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).createTasks=n.createTasks.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key},e.text)}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"thelist"},i.a.createElement(h.a,{duration:200,easing:"ease-out"},e))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={items:[]},n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}}))}this._inputElement.value="",console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"TodolistMain"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"Your Task Here"}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(f,{entries:this.state.items,delete:this.deleteItem}))}}]),t}(a.Component),p=document.querySelector("#container");s.a.render(i.a.createElement("div",null,i.a.createElement(b,null)),p)}},[[10,1,2]]]);
//# sourceMappingURL=main.ae3967aa.chunk.js.map