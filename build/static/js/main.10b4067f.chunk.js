(this.webpackJsonpcorona_chart=this.webpackJsonpcorona_chart||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),s=a(11),i=a.n(s),u=a(20),l=a(72),p=a(73),m=a(84),f=a(82),d=a(83),_=a(45),h=a(42),v=a(15),E=a.n(v),g=a(75),C=a.n(g),b=function(e){var t=e.data,a=e.selectedCamp,c=Object(n.useState)([]),o=Object(_.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)([]),l=Object(_.a)(u,2),p=l[0],m=l[1];Object(n.useEffect)((function(){var e=[];if(a){t.map((function(t){t.name_gr===a&&t.recorded_events.forEach((function(t){t.confirmed_cases&&e.push({case_detection_week:t.case_detection_week,confirmed_cases:t.confirmed_cases})}))}));i(e)}else{var n,r=t.map((function(e){return e.recorded_events.filter((function(e){return!(!e.case_detection_week||!e.confirmed_cases)}))})).map((function(e){if(e.length>0)return e})).filter((function(e){return!!e}));r.forEach((function(e){e.forEach((function(e){var t=e.case_detection_week.split("-"),a=E()(t[0],"DD/MM/YYYY").format("DD/MM/YYYY")+" - "+E()(t[1],"DD/MM/YYYY").format("DD/MM/YYYY");e.case_detection_week=a}))}));var c=Object.values((n=[]).concat.apply(n,Object(d.a)(r)).reduce((function(e,t){var a=t.case_detection_week,n=t.confirmed_cases;return e[a]=e[a]||{case_detection_week:a,confirmed_cases:0},e[a].confirmed_cases=String(Number(e[a].confirmed_cases)+Number(n)),e}),{}));c.sort((function(e,t){var a=e.case_detection_week.split("-")[0],n=t.case_detection_week.split("-")[0];return E()(a,"DD/MM/YYYY")-E()(n,"DD/MM/YYYY")})),m(c)}}),[t,a]);var f=s[0]?r.a.createElement(h.a,{options:{title:{display:!0,text:"\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03c9\u03bc\u03ad\u03bd\u03b1 \u03ba\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 \u03b4\u03bf\u03bc\u03ae\u03c2 ".concat(a)}},data:{labels:s.map((function(e){return e.case_detection_week})),datasets:[{data:s.map((function(e){return e.confirmed_cases})),label:"\u039a\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 Covid19",borderColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):r.a.createElement("span",{style:{marginBottom:"35px"}},"\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03ba\u03b1\u03c4\u03b1\u03b3\u03b5\u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03bd\u03b1 \u03ba\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03b7 \u03b4\u03bf\u03bc\u03ae ",a,"."),v=p[0]?r.a.createElement(h.a,{options:{title:{display:!0,text:"\u03a3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03ac \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03c9\u03bc\u03ad\u03bd\u03b1 \u03ba\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 \u03b4\u03bf\u03bc\u03ce\u03bd"}},data:{labels:p.map((function(e){return e.case_detection_week})),datasets:[{data:p.map((function(e){return e.confirmed_cases})),label:"\u039a\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 Covid19",borderColor:"red",fill:!0}]}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.container},a?f:v),a&&s[0]?r.a.createElement("h4",null,"\u0395\u03b2\u03b4\u03bf\u03bc\u03b1\u03b4\u03b9\u03b1\u03af\u03b1 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae \u039a\u03c1\u03bf\u03c5\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd COVID19"):null,!a&&r.a.createElement("h4",null,"\u0395\u03b2\u03b4\u03bf\u03bc\u03b1\u03b4\u03b9\u03b1\u03af\u03b1 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae \u039a\u03c1\u03bf\u03c5\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd COVID19"))},w=a(222),Y=a(221),k=a(76),O=a.n(k),D=function(e){var t=e.camps,a=e.handleCampChange;return r.a.createElement(w.a,{className:O.a.formControl},r.a.createElement(Y.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u0394\u03bf\u03bc\u03ae \u03a6\u03b9\u03bb\u03bf\u03be\u03b5\u03bd\u03af\u03b1\u03c2 \u03a0\u03c1\u03bf\u03c3\u03c6\u03cd\u03b3\u03c9\u03bd"),t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},y=a(220),M=a(81),j=a.n(M),x=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://covid-19-greece.herokuapp.com/refugee-camps");case 3:return t=e.sent,a=t.data,e.abrupt("return",a["refugee-camps"]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=a(44),I=a.n(N),S=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],selectedCamp:"",camps:[]},e.handleCampChange=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({selectedCamp:a});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a=t.map((function(e){return e.name_gr})),this.setState({data:t,camps:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.camps,n=e.selectedCamp;return r.a.createElement("div",{className:I.a.container_outer},r.a.createElement("div",{className:I.a.container},r.a.createElement(y.a,{color:"textSecondary"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://camps.covid19response.gr"},r.a.createElement("img",{class:"alignleft",src:"https://devpap.co.uk/wp-content/uploads/2020/07/icon1.png",alt:"",width:"22",height:"22"})),r.a.createElement("a",{href:"https://camps.covid19response.gr"},"   \u03a0\u03af\u03c3\u03c9 \u03c3\u03c4\u03b7\u03bd \u0391\u03c1\u03c7\u03b9\u03ba\u03ae"))),r.a.createElement("h2",null,"\u039a\u03c1\u03bf\u03cd\u03c3\u03bc\u03b1\u03c4\u03b1 COVID19 \u03b1\u03bd\u03ac \u03b4\u03bf\u03bc\u03ae \u03c6\u03b9\u03bb\u03bf\u03be\u03b5\u03bd\u03af\u03b1\u03c2"),r.a.createElement(D,{camps:a,handleCampChange:this.handleCampChange}),r.a.createElement(b,{selectedCamp:n,data:t})),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{id:"pagelink",href:"https://www.covid19response.gr/"},"Covid-19 Response Greece"))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(S,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container_outer:"App_container_outer__2lxIK",container:"App_container__1MQN3"}},75:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},76:function(e,t,a){e.exports={formControl:"CampPicker_formControl__Y7yMs"}},87:function(e,t,a){e.exports=a(204)}},[[87,1,2]]]);
//# sourceMappingURL=main.10b4067f.chunk.js.map