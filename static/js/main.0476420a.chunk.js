(this.webpackJsonpaccount_info=this.webpackJsonpaccount_info||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(2),i=c.n(a),l=(c(12),{accountNumber:10964978,registrationDate:"Dec 18, 2016 at 09:00 am",lastLogin:"Dec 18, 2016 at 09:00 am",documents:[{name:"Documents",quantity:1230},{name:"SingNow",quantity:1230},{name:"Shared",quantity:1230},{name:"LinkToFill",quantity:1230},{name:"Faxed",quantity:1230},{name:"Encripted",quantity:1230}],subscription:{plan:"Business",premium:!1,term:"1 Month",subscribedDate:"Dec 18, 2016 at 09:00 am",automaticRenewal:"Dec 18, 2017 at 09:00 am"},teammates:{avialable:4,used:3},internalEmail:"D+10964978@pdffiller.com"}),r=(c(13),c.p+"static/media/title_icon.0f96f959.svg"),o=(c(14),c(0)),m=function(e){var t=e.accountNumber,c=e.registrationDate,s=e.lastLogin;return Object(o.jsxs)("div",{className:"main-info",children:[Object(o.jsxs)("div",{className:"main-info__fields",children:[Object(o.jsx)("p",{children:"Account Number"}),Object(o.jsx)("p",{children:"Registration Date"}),Object(o.jsx)("p",{children:"Last Login"})]}),Object(o.jsxs)("div",{className:"main-info__values",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:s})]})]})},j=(c(16),[c.p+"static/media/Documents.4f99dd87.svg",c.p+"static/media/Encripted.a2388002.svg",c.p+"static/media/Faxed.9aef934d.svg",c.p+"static/media/LinkToFill.8b8ec557.svg",c.p+"static/media/Shared.6986303a.svg",c.p+"static/media/SingNow.9264efa6.svg"]),d=function(e){var t=e.documents;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"documents__title",children:[Object(o.jsx)("h3",{className:"documents__heading",children:"Document Statistics"}),Object(o.jsx)("a",{href:"/",className:"documents__link",children:"Job list >"})]}),Object(o.jsx)("ul",{className:"documents__list",children:t.map((function(e){return Object(o.jsxs)("li",{className:"documents__list-item document-item",children:[Object(o.jsx)("img",{className:"document-item__icon",src:j.find((function(t){return t.includes(e.name)})),alt:e.name}),Object(o.jsx)("p",{className:"document-item__name",children:e.name}),Object(o.jsx)("p",{className:"document-item__quantity",children:e.quantity})]},e.name)}))})]})},b=(c(17),function(e){var t=e.subscription;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"subscription__heading",children:"Current Subscription"}),Object(o.jsxs)("div",{className:"subscription__content",children:[Object(o.jsxs)("div",{className:"subscription__wrapper subscription__wrapper--top",children:[Object(o.jsxs)("div",{className:"subscription__info subscription__info--main",children:[Object(o.jsx)("div",{className:"subscription__info-fields",children:"Subscription Plan"}),Object(o.jsx)("div",{className:"subscription__info-values",children:t.plan})]}),Object(o.jsx)("button",{className:"subscription__button",children:"Upgrade Plan"})]}),Object(o.jsx)("div",{className:"subscription__wrapper",children:Object(o.jsxs)("div",{className:"subscription__info",children:[Object(o.jsxs)("div",{className:"subscription__info-fields",children:[Object(o.jsx)("p",{children:"Premium Support"}),Object(o.jsx)("p",{children:"Subscription Term"}),Object(o.jsx)("p",{children:"Subscribed Date"}),Object(o.jsx)("p",{children:"Automatic Renewal"})]}),Object(o.jsxs)("div",{className:"subscription__info-values",children:[Object(o.jsx)("p",{children:t.premium?"Activated":"Not activated"}),Object(o.jsx)("p",{children:"".concat(t.term," Subscription")}),Object(o.jsx)("p",{children:t.subscribedDate}),Object(o.jsx)("p",{children:t.automaticRenewal})]})]})})]})]})}),u=(c(18),c(19),function(e){var t=e.teammates,c=t.avialable,s=t.used,n=s/c;return Object(o.jsxs)("div",{class:"chart",style:{"--num":n},children:[Object(o.jsxs)("svg",{children:[Object(o.jsx)("circle",{cx:"66",cy:"66",r:"66"}),Object(o.jsx)("circle",{cx:"66",cy:"66",r:"66"})]}),Object(o.jsx)("div",{class:"chart__value",children:s})]})}),_=function(e){var t=e.teammates;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"teammates__heading",children:"My Teammates"}),Object(o.jsxs)("div",{className:"teammates__content",children:[Object(o.jsxs)("div",{className:"teammates__accounts",children:[Object(o.jsx)("div",{className:"teammates__accounts-chart",children:Object(o.jsx)(u,{teammates:t})}),Object(o.jsxs)("div",{className:"teammates__accounts-info accounts-info",children:[Object(o.jsx)("h2",{className:"accounts-info__heading",children:"Shared Accounts"}),Object(o.jsxs)("p",{className:"accounts-info__field",children:["Avialable: ",t.avialable]}),Object(o.jsxs)("p",{className:"accounts-info__field",children:["Used: ",t.used]})]})]}),Object(o.jsx)("button",{className:"teammates__button",children:"Managing accounts"})]})]})},h=c(5),x=(c(20),c.p+"static/media/copy_icon.4a1472aa.svg"),p=c.p+"static/media/checkmark_icon.14671f73.svg",O=function(e){var t=e.email,c=Object(s.useState)(!1),n=Object(h.a)(c,2),a=n[0],i=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"email__wrapper",children:[Object(o.jsx)("h3",{className:"email__heading",children:"Internal Email"}),Object(o.jsx)("p",{className:"email__hint",children:"Send documents to this email as an attachment and they will show up in your InBox Folder."})]}),Object(o.jsxs)("div",{className:"email__wrapper",children:[Object(o.jsx)("input",{readOnly:!0,type:"text",className:"email__input",value:t}),Object(o.jsx)("button",{className:"email__button",title:"copy to clipboard",onClick:function(){navigator.clipboard.writeText(t),i(!0)},children:Object(o.jsx)("img",{src:a?p:x,alt:"",className:"email__button-icon"})})]})]})},f=(c(21),c.p+"static/media/tooltip_icon.f50d3b46.svg"),g=c(4),N=(c(22),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"fax__wrapper",children:[Object(o.jsx)("h3",{className:"fax__heading",children:"Internal Email"}),Object(o.jsx)(g.a,{content:Object(o.jsx)("span",{className:"fax__tooltip",children:"Tooltip"}),children:Object(o.jsx)("img",{src:f,alt:"tooltip icon"})}),Object(o.jsx)("p",{className:"fax__hint",children:"Receive faxes online directly into your PDFfiller account."})]}),Object(o.jsx)("button",{className:"fax__button",children:"Get Fax Number"})]})}),v=function(e){var t=e.info,c=t.documents,s=t.accountNumber,n=t.registrationDate,a=t.lastLogin,i=t.subscription,l=t.teammates,j=t.internalEmail;return Object(o.jsxs)("div",{className:"InfoPage",children:[Object(o.jsxs)("div",{className:"InfoPage__title",children:[Object(o.jsx)("img",{src:r,alt:"title icon",className:"InfoPage__title-icon"}),Object(o.jsx)("h1",{className:"InfoPage__title-heading",children:"Account Information"})]}),Object(o.jsx)("section",{className:"InfoPage__section InfoPage__section--bottom-border",children:Object(o.jsx)(m,{accountNumber:s,registrationDate:n,lastLogin:a})}),Object(o.jsx)("section",{className:"InfoPage__section documents",children:Object(o.jsx)(d,{documents:c})}),Object(o.jsx)("section",{className:"InfoPage__section subscription",children:Object(o.jsx)(b,{subscription:i})}),Object(o.jsx)("section",{className:"InfoPage__section InfoPage__section--bottom-border teammates",children:Object(o.jsx)(_,{teammates:l})}),Object(o.jsx)("section",{className:"InfoPage__section InfoPage__section--bottom-border email",children:Object(o.jsx)(O,{email:j})}),Object(o.jsx)("section",{className:"InfoPage__section fax",children:Object(o.jsx)(N,{})})]})};var y=function(){return Object(o.jsx)(v,{info:l})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),I()}],[[23,1,2]]]);
//# sourceMappingURL=main.0476420a.chunk.js.map