(this.webpackJsonpstarwarsdb=this.webpackJsonpstarwarsdb||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/death-star.c0d3f101.jpg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),c=a(2),i=a(3),o=a(5),u=a(4),m=(a(15),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement("div",{className:"container fontStyle"},r.a.createElement("a",{className:"navbar-brand font-weight-bold text-brand",href:"../../../public/index.html"},r.a.createElement("div",{className:"glitch","data-text":"StarWarsDB"},"StarWarsDB"),r.a.createElement("div",{className:"glow"},"StarWarsDB")),r.a.createElement("div",{className:"collapse navbar-collapse ulList"},r.a.createElement("ul",{className:"navbar-nav d-flex"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"../../../public/index.html"},"Peoples")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"../../../public/index.html"},"Planets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"../../../public/index.html"},"Starships"))))))}),p=(a(16),a(1)),d=a.n(p),h=a(6),f=function(){function e(){var t=this;Object(c.a)(this,e),this._apiBase="https://swapi.dev/api",this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPeople",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPerson));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPerson",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",this._transformPerson(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPlanets",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPlanet));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPlanet",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",this._transformPlanet(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllStarships",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformStarship));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStarship",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.getResource("/starships/".concat(t,"/")),e.abrupt("return",this._transformStarship(a));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),v=(a(18),function(){return r.a.createElement("div",{className:"load"},r.a.createElement("div",{className:"loadingio-spinner-double-ring-f2gsivkskhw"},r.a.createElement("div",{className:"ldio-3fywb51tq1c"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),E=(a(19),a(9)),g=a.n(E),b=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:g.a,alt:"error icon"}),r.a.createElement("span",{className:"boom"},r.a.createElement("h2",null,"BOOM!")),r.a.createElement("span",null,r.a.createElement("h4",null,"Something has gone terribly wrong")),r.a.createElement("span",null,r.a.createElement("h5",null,"(but we already sent droids to fix it)")))},w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).SwapiService=new f,e.state={planet:{},loading:!0},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1,error:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(25*Math.random())+3;e.SwapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=e.error,l=!(a||n),s=n?r.a.createElement(b,null):null,c=a?r.a.createElement(v,null):null,i=l?r.a.createElement(N,{planet:t}):null;return r.a.createElement("div",{className:"random-planet jumbotron rounded"},s,c,i)}}]),a}(n.Component),N=function(e){var t=e.planet,a=t.id,l=t.name,s=t.population,c=t.rotationPeriod,i=t.diameter;return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:"img-fluid planet-image",alt:"planet",src:"https://starwars-visualguide.com/assets/img/planets/".concat(a,".jpg")}),r.a.createElement("div",null,r.a.createElement("h3",null,l),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Population:"),r.a.createElement("span",null,s)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Rotation Period:"),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Diameter:"),r.a.createElement("span",null,i)))))},k=w,y=(a(20),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).SwapiService=new f,e.state={peopleList:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.SwapiService.getAllPeople().then((function(t){e.setState({peopleList:t})}))}},{key:"renderItems",value:function(e){var t=this;return e.map((function(e){var a=e.id,n=e.name;return r.a.createElement("li",{className:"list-group-item list-active",key:a,onClick:function(){return t.props.onItemSelected(a)}},n)}))}},{key:"render",value:function(){var e=this.state.peopleList;if(!e)return r.a.createElement(v,null);var t=this.renderItems(e);return r.a.createElement("div",{className:"border-list"},r.a.createElement("ul",{className:"item-list list-group"},t))}}]),a}(n.Component)),x=(a(21),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).SwapiService=new f,e.state={person:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updatePerson()}},{key:"componentDidUpdate",value:function(e){this.props.personId!==e.personId&&this.updatePerson()}},{key:"updatePerson",value:function(){var e=this,t=this.props.personId;t&&this.SwapiService.getPerson(t).then((function(t){e.setState({person:t})}))}},{key:"render",value:function(){var e=this.state.person;if(!this.state.person)return r.a.createElement("div",{className:"person-details card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"text-white"},"Select a character from the list")));var t=e.id,a=e.name,n=e.gender,l=e.birthYear,s=e.eyeColor;return r.a.createElement("div",{className:"person-details card"},r.a.createElement("img",{className:"person-image",alt:"character",src:"https://starwars-visualguide.com/assets/img/characters/".concat(t,".jpg")}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"text-white"},a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Gender:"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Birth Year:"),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Eye Color:"),r.a.createElement("span",null,s)))))}}]),a}(n.Component)),S=(a(22),function(){return r.a.createElement("div",{className:"basic"},r.a.createElement("ul",{className:"ul-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/AkselDjun",target:"_blank"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{class:"fa fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/alexei.khinevich",target:"_blank"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{class:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/alexei-khinevich/",target:"_blank"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",{class:"fa fa-linkedin"})))))}),P=(a(23),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={selectedPerson:null},e.onPersonSelected=function(t){e.setState({selectedPerson:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,null),r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(y,{onItemSelected:this.onPersonSelected})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(x,{personId:this.state.selectedPerson})))),r.a.createElement("footer",{className:"container"},r.a.createElement(S,null)))}}]),a}(n.Component));s.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a8f70d11.chunk.js.map