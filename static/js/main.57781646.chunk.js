(this.webpackJsonpprueba2=this.webpackJsonpprueba2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=(n(12),n(3)),s=n(4),l=n(5),u=n(6),d=function(e){var t=e.incidents;return c.a.createElement("div",{class:"container-sm"},t.map((function(e){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},e.id),c.a.createElement("h5",null,"uno")))})))},h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={incidents:[]},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,{incidents:this.state.incidents}))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://192.168.0.11/GetProducts.php").then((function(e){return e.json()})).then((function(t){e.setState({incidents:t})})).catch(console.log)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.57781646.chunk.js.map