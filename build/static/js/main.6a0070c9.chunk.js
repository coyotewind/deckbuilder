(this.webpackJsonpdeckbuilder=this.webpackJsonpdeckbuilder||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},21:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(3),c=a(0),u=a.n(c),o=(a(21),a(18)),l=a.n(o),i=a(7),s=a.n(i),d=a(2),m=a.n(d),p=a(6);function f(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.text,e.prev=1,e.next=4,s.a.get("https://api.magicthegathering.io/v1/cards?name=".concat(a,"&text=").concat(n));case 4:return r=e.sent,c=r.data,e.abrupt("return",c.cards||[]);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var E=function(e){console.log(e);var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(""),i=Object(r.a)(l,2),s=i[0],d=i[1];function v(){return(v=Object(p.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,f({name:n,text:s});case 3:r=t.sent,e.setResults(r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return u.a.createElement("div",{id:"search"},u.a.createElement("h3",null,"Look up cards here..."),u.a.createElement("form",{onSubmit:function(e){return v.apply(this,arguments)}},u.a.createElement("input",{type:"text",placeholder:"card name",value:n,onChange:function(e){o(e.target.value)}}),u.a.createElement("input",{type:"text",placeholder:"card text",value:s,onChange:function(e){d(e.target.value)}}),u.a.createElement("button",{type:"submit"},"Search")))},k=(a(43),a(44),function(e){var t=e.id,a=e.name,n=e.manaCost,r=e.type,c=e.text,o=e.flavor,l=e.imageUrl,i=e.addCardToDeck,s=e.removeCardFromDeck;return u.a.createElement("div",{className:"Card"},u.a.createElement("div",{className:"info"},u.a.createElement("p",{className:"header"},a," - ",n),u.a.createElement("p",{className:"type"},r),u.a.createElement("p",{className:"text"},c),u.a.createElement("p",{className:"flavor"},o)),u.a.createElement("img",{alt:"Card",className:"preview",src:l}),u.a.createElement("div",{className:"actions"},u.a.createElement("button",{onClick:function(){i({id:t,name:a})}},"(+) Add to Deck"),u.a.createElement("button",{onClick:function(){s({id:t})}},"(-) Remove from Deck")))}),h=function(e){var t=e.results,a=e.addCardToDeck,n=e.removeCardFromDeck;return u.a.createElement("div",{id:"results"},u.a.createElement("h3",null,"Here's what we found (",t.length," results):"),u.a.createElement("div",{className:"CardList"},t.map((function(e){return u.a.createElement(k,Object.assign({key:e.id,addCardToDeck:a,removeCardFromDeck:n},e))}))))},b=function(e){var t=e.deck,a=e.addCardToDeck,n=e.removeCardFromDeck,r=t.reduce((function(e,t){return e+t.count}),0);return u.a.createElement("div",{id:"deck"},u.a.createElement("h3",null,"Your deck so far (",r," cards):"),u.a.createElement("div",{className:"DeckList"},t.map((function(e){var t=e.id,r=e.name,c=e.count;return u.a.createElement("p",{key:t},u.a.createElement("span",null,"(",c,"x) ",r),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){return a({id:t,name:r})}}," ","+"," "),u.a.createElement("button",{onClick:function(){return n({id:t})}}," ","-"," "))}))))},C=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)([]),i=Object(r.a)(l,2),s=i[0],d=i[1];return u.a.createElement("div",{id:"app"},u.a.createElement(E,{setResults:o}),u.a.createElement(h,{results:a,addCardToDeck:function(e){var t=e.id,a=e.name,r=Object(n.a)(s),c=r.findIndex((function(e){return e.id===t}));c>-1?r[c].count+=1:r.push({id:t,name:a,count:1}),d(r)},removeCardFromDeck:function(e){var t=e.id,a=Object(n.a)(s),r=a.findIndex((function(e){return e.id===t}));-1!==r&&(1===a[r].count?a.splice(r,1):a[r].count-=1,d(a))}}),u.a.createElement(b,{deck:s}))};l.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6a0070c9.chunk.js.map