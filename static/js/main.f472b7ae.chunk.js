(this["webpackJsonpastro-calendar"]=this["webpackJsonpastro-calendar"]||[]).push([[0],{106:function(e,t,n){e.exports=n(150)},116:function(e,t,n){},142:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setDate",(function(){return h})),n.d(a,"setLocation",(function(){return v})),n.d(a,"addToCache",(function(){return O}));var r=n(0),c=n.n(r),o=n(13),i=n.n(o),u=n(20),l=n(15),s=n(14),m=n(48),d=n.n(m),f=n(25),h=function(e){return function(t){return Object(s.a)({},t,{date:e})}},v=function(e){return function(t){return Object(s.a)({},t,{location:e,cache:{}})}},O=function(e,t){return function(n){return Object(s.a)({},n,{cache:Object(s.a)({},n.cache,Object(l.a)({},e,t))})}},g=n(49),b=n(5),y=n.n(b),E=(n(50),Math.round),N=(Math.floor,Math.abs,2*Math.PI),p=(function(e){var t=Math.pow(10,e)}(2),function(e){return e/360*N}),j=function(e){return e/N*360},w=function(e){return y()(e).startOf("day").hour(12).valueOf()},M=function(e){return y()(e).add(1,"day").valueOf()},k=Math.sin,C=Math.cos,T=Math.asin,x=Math.acos,D=function(e){return(y()(e).dayOfYear()-1)*N/365},I=function(e){return 229.18*(75e-6+.001868*C(e)-.032077*k(e)-.014615*C(2*e)-.040849*k(2*e))},L=function(e){return.006918-.399912*C(e)+.070257*k(e)-.006758*C(2*e)+907e-6*k(2*e)-.002697*C(3*e)+.00148*k(3*e)},A=function(e,t,n,a){var r=t.lat,c=t.lon,o=new Date(a),i=n-4*j(c)+o.getTimezoneOffset(),u=60*o.getHours()+o.getMinutes()+i,l=p(u/4-180);return T(k(r)*k(e)+C(r)*C(e)*C(l))},S=function(e,t){var n=t.lat,a=t.lon,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=D(e),o=I(c),i=L(c),u=x((k(r)-k(n)*k(i))/(C(n)*C(i)));if(!Number.isFinite(u))return A(i,{lat:n,lon:a},o,e)>0?{start:-1/0,end:1/0}:null;var l=720+4*j(-a-u)-o,s=720+4*j(-a+u)-o,m=y.a.utc(e).startOf("day").add(l,"minutes").valueOf(),d=y.a.utc(e).startOf("day").add(s,"minutes").valueOf();return{start:m,end:d}},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=w(e),c=M(r),o=S(r,t,n),i=S(c,t,n);return o&&i?o.end===1/0&&i.start===-1/0?null:{start:o.end,end:i.start}:{start:a?r:-1/0,end:a?c:1/0}},Y=n(56),B=n(26),P=n.n(B),_=function(e,t){if(!e||!t)return null;var n=e.start,a=e.end,r=t.start,c=t.end;return n>c||r>a?null:{start:Math.max(n,r),end:Math.min(a,c)}},G=function(e,t){return e&&function(e,t){var n=e.start,a=e.end,r=t.lat,c=t.lon,o=j(r),i=j(c),u=P.a.getMoonTimes(w(n),o,i,!0),l=u.rise,m=u.set,d=u.alwaysUp,f=P.a.getMoonTimes(w(a),o,i,!0),h=f.rise,v=f.set,O=[l?{type:"rise",time:l.getTime()}:null,m?{type:"set",time:m.getTime()}:null,h?{type:"rise",time:h.getTime()}:null,v?{type:"set",time:v.getTime()}:null].filter((function(e){return e})).sort((function(e,t){return e.time-t.time}));return 0===O.length?d?[]:[{start:-1/0,end:1/0}]:O.reduce((function(e,t){return"set"===t.type?[].concat(Object(Y.a)(e),[{start:t.time,end:1/0}]):0===e.length?[{start:-1/0,end:t.time}]:e.map((function(n,a){return a===e.length-1?Object(s.a)({},n,{end:t.time}):n}))}),[])}(e,t).find((function(t){return!!_(e,t)}))||null},H=function(e,t,n,a){var r,c,o=function(e,t){return{lat:p(e),lon:p(t)}}(t,n),i=F(e,o),u=i?F(e,o,p(a),!0):null,l=G(u,o),s=(c=e,r=y()(c).startOf("day").add(1,"day").valueOf(),P.a.getMoonIllumination(new Date(r)).phase);return{night:i,moonNight:l,astroNight:u,moonlessNight:_(u,l),moonPhase:s}},J=function(e,t){var n=e.map((function(e){var n=e.day;return Object(s.a)({day:n},H(n,t[1],t[0],-18))}));return e.map((function(e,a){return Object(s.a)({},e,{info:n[a],moonPhase:n[a].moonPhase,bands:{night:R(n,a,e.day,"night",t),astroNight:R(n,a,e.day,"astroNight",t),moonlessNight:R(n,a,e.day,"moonlessNight",t)}})}))},R=function(e,t,n,a,r){return V(n,W(e,n,t-1,a,r),e[t][a])},V=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=n.map((function(t){return z(t,e)})).filter((function(e){return e})).map(U);return r},W=function(e,t,n,a,r){return e[n]?e[n][a]:H((c=t,y()(c).subtract(1,"day").valueOf()),r[1],r[0],-18)[a];var c},z=function(e,t){return e?[K(e.start,t),K(e.end,t)]:null},K=function(e,t){return Number.isFinite(e)?y()(e).isSame(y()(t),"day")?e:y()(e).isBefore(y()(t),"day")?y()(t).startOf("day").valueOf():y()(e).isAfter(y()(t),"day")?y()(t).endOf("day").valueOf():void 0:null},U=function(e){return e.map($)},$=function(e){var t=y()(e),n=(60*t.hours()+t.minutes())/1440;return 1-n<.001?1:n},q=function(e){return e.date},Q=function(e){return e.location},X=Object(g.a)([q,Q,function(e){return e.cache}],(function(e,t,n){return n[e]?n[e]:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,a=y()(e),r=y()(a).startOf("month"),c=r.weekday()-t;c<0&&(c+=7);for(var o=[],i=0;i<c;i++)o.push({day:r.clone().subtract(c-i,"days").valueOf(),classNames:"prevMonth"});for(var u=[],l=1;l<a.daysInMonth()+1;l++)u.push({day:y()([a.year(),a.month(),l]).valueOf()});for(var s=o.length+u.length-1,m=[],d=1;(s+d)%7!==0;)m.push({day:y()(u[u.length-1].day).clone().add(d,"days").valueOf(),classNames:"nextMonth"}),d+=1;return J([].concat(o,u,m),n)}(e,1,t)})),Z=new d.a({date:Date.now(),location:[19,47],cache:{}});window.store=Z;var ee=Z,te=function(){var e=Object(u.b)();return Object(r.useMemo)((function(){return Object.keys(a).reduce((function(t,n){return Object(s.a)({},t,Object(l.a)({},n,Object(f.a)(a[n],e)))}),{})}),[e])},ne=n(24),ae=n(153),re=n(1),ce=(n(116),c.a.memo((function(e){var t=e.isOpen,n=e.onClose,a=Object(u.c)(Q),o=te().setLocation,i=Object(r.useState)(a[0]),l=Object(ne.a)(i,2),s=l[0],m=l[1],d=Object(r.useState)(a[1]),f=Object(ne.a)(d,2),h=f[0],v=f[1],O=Object(r.useCallback)((function(){o([s,h]),n()}),[o,n,s,h]);return c.a.createElement(ae.b,{icon:"locate",title:"Location",isOpen:t,onClose:n},c.a.createElement("div",{className:re.a.DIALOG_BODY},c.a.createElement(ae.c,{label:"Lat",inline:!0,className:"form-group"},c.a.createElement(ae.d,{value:h,onValueChange:v,min:-90,max:90})),c.a.createElement(ae.c,{label:"Lng",inline:!0,className:"form-group"},c.a.createElement(ae.d,{value:s,onValueChange:m,min:-180,max:180}))),c.a.createElement("div",{className:re.a.DIALOG_FOOTER},c.a.createElement("div",{className:re.a.DIALOG_FOOTER_ACTIONS},c.a.createElement(ae.a,{onClick:O},"OK"))))}))),oe=(n(142),c.a.memo((function(){var e=Object(u.c)(q),t=te().setDate,n=Object(r.useState)(!1),a=Object(ne.a)(n,2),o=a[0],i=a[1],l=Object(r.useCallback)((function(){return i(!0)}),[]),s=Object(r.useCallback)((function(){return i(!1)}),[]),m=Object(r.useCallback)((function(n){return t(y()(e).add(n,"months").valueOf())}),[e,t]),d=Object(r.useCallback)((function(){return m(-1)}),[m]),f=Object(r.useCallback)((function(){return m(1)}),[m]),h=Object(r.useCallback)((function(){return t(y()().startOf("day").valueOf())}),[t]);return c.a.createElement("div",{className:"Header"},c.a.createElement("div",{className:"action-bar"},c.a.createElement(ae.a,{icon:"locate",onClick:l,large:!0},"Location"),c.a.createElement(ce,{isOpen:o,onClose:s}),c.a.createElement("div",{className:"date-controls"},c.a.createElement("div",{className:"current-date"},y()(e).format("MMMM YYYY")),c.a.createElement(ae.a,{onClick:d,large:!0},"\xab"),c.a.createElement(ae.a,{onClick:h,large:!0},"\u2022"),c.a.createElement(ae.a,{onClick:f,large:!0},"\xbb"))))}))),ie=n(3),ue=n.n(ie),le=n(54),se=n(55),me=n.n(se),de=function(e){var t,n=[];e<=.25?(n=[1,0],t=20-20*e*4):e<=.5?(n=[0,0],t=20*(e-.25)*4):e<=.75?(n=[1,1],t=20-20*(e-.5)*4):e<=1&&(n=[0,1],t=20*(e-.75)*4);var a="m100,0 ";return(a=a+"a"+t+",20 0 1,"+n[0]+" 0,150 ")+"a20,20 0 1,"+n[1]+" 0,-150"},fe=Array.from({length:101}).map((function(e,t){return(t/100).toFixed(2)})).reduce((function(e,t){return Object(s.a)({},e,Object(l.a)({},t,function(e){var t=de(e),n=Object(le.renderToStaticMarkup)(c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 200 150",width:"100px",height:"100px"},c.a.createElement("path",{className:"moonback",fill:"black",d:"m100,0 a20,20 0 1,1 0,150 a20,20 0 1,1 0,-150"}),c.a.createElement("path",{className:"moonlight",fill:"white",d:t})));return me()(n)}(t)))}),{});window.svgs=fe;var he=fe,ve=(n(144),c.a.memo((function(e){var t=e.phase,n=he[t.toFixed(2)];return c.a.createElement("div",{className:"Moon"},c.a.createElement("div",{className:"svg-container",style:{backgroundImage:"url(".concat(n,")")}}))}))),Oe=(n(145),c.a.memo((function(e){var t=e.night,n=(e.moonNight,e.astroNight),a=e.moonlessNight,r=function(e,t){return t.map((function(t,n){return function(e,t,n){return c.a.createElement("div",{key:n,className:e,style:{left:"".concat(100*t[0],"%"),right:"".concat(100*(1-t[1]),"%")}})}(e,t,n)}))};return c.a.createElement("div",{className:"Night"},c.a.createElement("div",{className:"daylight"}),r("night",t),r("astroNight",n),r("moonlessNight",a))}))),ge=(n(146),c.a.memo((function(e){var t=e.day,n=e.classNames,a=e.moonPhase,r=(e.info,e.bands);return c.a.createElement("div",{className:ue()("CalendarItem",y()(t).isSame(y()(),"day")&&"current",n)},c.a.createElement("header",null,c.a.createElement("div",{className:"day"},c.a.createElement("div",{className:"day-number"},y()(t).format("D")),c.a.createElement("div",{className:"day-name"},y()(t).format("ddd"))),c.a.createElement("div",{className:"moon-container"},c.a.createElement(ve,{phase:a}))),c.a.createElement("main",null,c.a.createElement("div",{className:"band-container"},c.a.createElement(Oe,r))))}))),be=(n(147),c.a.memo((function(){var e=function(){var e=Object(u.c)(q),t=Object(u.c)(X),n=te().addToCache;return Object(r.useEffect)((function(){n(e,t)}),[n,e,t]),t}();return c.a.createElement("div",{className:"Calendar"},c.a.createElement("div",{className:"grid"},e.map((function(e){return c.a.createElement(ge,Object.assign({key:e.day},e))}))))}))),ye=(n(148),c.a.memo((function(){return c.a.createElement("div",{className:"App"},c.a.createElement(oe,null),c.a.createElement(be,{date:new Date}))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(149);i.a.render(c.a.createElement(u.a,{store:ee},c.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.f472b7ae.chunk.js.map