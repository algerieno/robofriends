(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),s=(a(12),a(3)),i=a(4),l=a(6),u=a(5),m=(a(13),a(14),a(15),function(e){var t=e.name,a=e.slogan,n=e.id;return o.a.createElement("article",{className:"w5 mw5 br3 dib pa3 pa4-ns ma3 grow ba b--black-10 bg-light-blue"},o.a.createElement("div",{className:"tc"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/robot".concat(n),className:"br-100 h3 w3 dib",title:"Photo of a kitty staring at you"}),o.a.createElement("h1",{className:"f4"},t),o.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),o.a.createElement("p",{className:"lh-copy measure center f6 black-70"},a))}),h=function(e){return e.robots.map((function(e){return o.a.createElement(m,{name:e.first_name,slogan:e.slogan,key:e.id,id:e.id})}))},b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).searchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my.api.mockaroo.com/robots.json?key=e5e19180").then((function(e){return e.json()})).then((function(t){return console.log(e.setState({robots:t}))}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.first_name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{style:{color:"white"}},"RoboFriends"),o.a.createElement("input",{type:"text",placeholder:"search",className:"mb3 bg-light-blue w5 h2 pa3 b--solid b--blue bw1 br2 outline-0",onChange:this.searchChange}),o.a.createElement("hr",null),o.a.createElement(h,{robots:t}))}}]),a}(n.Component);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d0317a01.chunk.js.map