(this["webpackJsonpwedding-website"]=this["webpackJsonpwedding-website"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(20),s=n.n(o),i=(n(28),n(6)),r=n(7),l=n(9),m=n(8),u=n(10),d=n(12),g=n(11);var p=function(){return c.a.createElement("div",{className:"header collapse"},c.a.createElement("div",{className:"headerContent"},c.a.createElement("h1",{className:"title"},c.a.createElement("div",{className:"firstName"},"Erin ",c.a.createElement("span",{className:"lname"},"O'Brien")),c.a.createElement("span",{className:"amp"},"&"),c.a.createElement("div",{className:"secondName"},"Alex ",c.a.createElement("span",{className:"lname"},"Schneeman"))),c.a.createElement("div",{className:"navBar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/gallery"},"Gallery")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/faqs"},"FAQs")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/registry"},"Registry")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/stpaul"},"Guide to Saint Paul"))))))};n(34);var E=function(e){return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},e.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},c.a.createElement("img",{src:e.content.image,alt:"",width:"100%"}),c.a.createElement("br",null),e.content.text,c.a.createElement("br",null),e.content.fields?e.content.fields.map((function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("span",{className:"field"},e.name),c.a.createElement("span",{className:"value"},e.value))})):"",e.content.footLink&&c.a.createElement("a",{href:e.content.footLink.link},e.content.footLink.text)))};var h=function(e){return c.a.createElement("div",{className:"headImage"},c.a.createElement("img",{src:e.content.image,alt:""}))},f=n(3);var v=function(e){return e.content.display?c.a.createElement("div",{className:"galleryImage"},c.a.createElement("img",{src:e.content.image,onClick:function(){return e.onClick()},alt:""})):null};var y=function(e){return e.image?c.a.createElement("div",{className:"overlay",onClick:function(){return e.onClose()}},c.a.createElement("button",{className:"leftNav",onClick:function(t){t.stopPropagation(),e.onLeft()}},"<"),c.a.createElement("div",{className:"enlargedImage"},c.a.createElement("img",{src:e.image.image,alt:""})),c.a.createElement("button",{className:"rightNav",onClick:function(t){t.stopPropagation(),e.onRight()}},">"),c.a.createElement("button",{className:"closeButton",onClick:function(){return e.onClose()}},"X")):null},N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).openEnlargedImage=n.openEnlargedImage.bind(Object(f.a)(n)),n.closeEnlargedImage=n.closeEnlargedImage.bind(Object(f.a)(n)),n.navLeft=n.navLeft.bind(Object(f.a)(n)),n.navRight=n.navRight.bind(Object(f.a)(n)),n.state={openImage:null},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"openEnlargedImage",value:function(e){this.setState({openImage:e})}},{key:"closeEnlargedImage",value:function(){this.setState({openImage:null})}},{key:"navLeft",value:function(){this.state.openImage&&this.setState((function(e,t){for(var n=(t.content.images.indexOf(e.openImage)-1+t.content.images.length)%t.content.images.length;!t.content.images[n].display;)n=(n-1+t.content.images.length)%t.content.images.length;return{openImage:t.content.images[n]}}))}},{key:"navRight",value:function(){this.state.openImage&&this.setState((function(e,t){for(var n=(t.content.images.indexOf(e.openImage)+1+t.content.images.length)%t.content.images.length;!t.content.images[n].display;)n=(n-1+t.content.images.length)%t.content.images.length;return{openImage:t.content.images[n]}}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},this.props.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},this.props.content.images.map((function(t){return c.a.createElement(v,{key:t.id,content:t,onClick:function(){return e.openEnlargedImage(t)}})}))),c.a.createElement(y,{image:this.state.openImage,onClose:function(){return e.closeEnlargedImage()},onLeft:function(){return e.navLeft()},onRight:function(){return e.navRight()}}))}}]),t}(a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},this.props.content.sectionTitle),c.a.createElement("div",{className:"sectionContent",dangerouslySetInnerHTML:{__html:this.props.content.embedCode}}))}}]),t}(a.Component);var k=function(e){return c.a.createElement("div",{className:"attractionEntry"},c.a.createElement("div",{className:"attractionImageContainer"},c.a.createElement("img",{src:e.content.image,alt:"",className:"attractionLogo"})),c.a.createElement("div",{className:"attractionDetails"},c.a.createElement("div",{className:"attractionTitle"},e.content.name),c.a.createElement("div",{className:"attractionAddress1"},e.content.address1),c.a.createElement("div",{className:"attractionAddress2"},e.content.address2),c.a.createElement("div",{className:"attractionDescription"},e.content.description,c.a.createElement("br",null),c.a.createElement("a",{href:e.content.link.link},e.content.link.text))))};var w=function(e){return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},e.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},e.content.attractions.map((function(e){return c.a.createElement(k,{key:e.name,content:e})}))))};var I=function(e){return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"sectionContent"},c.a.createElement("h3",{className:"announcement"},e.content.line1),c.a.createElement("h3",{className:"announcementDetails"},e.content.line2),e.content.details.map((function(e){return c.a.createElement("div",{key:e.substring(10,20)+"|"+e.length+"|"+Math.round(1e4*Math.random()),className:"announcementDescriptionDetail"},e)}))))};var C=function(e){return c.a.createElement("div",{className:"section subSection"},c.a.createElement("h3",{className:"sectionHeader",dangerouslySetInnerHTML:{__html:e.content.sectionTitle}}),c.a.createElement("div",{className:"sectionContent"},e.content.lines?e.content.lines.map((function(e){return c.a.createElement("div",{className:"textLine",key:e.key+"-"+e.text},e.text)})):null,e.content.text,c.a.createElement("br",null),e.content.footLink&&c.a.createElement("a",{href:e.content.footLink.link},e.content.footLink.text)))};var D=function(e){return c.a.createElement("div",{className:"section iconSection"},c.a.createElement("img",{src:e.content.icon,alt:""}),c.a.createElement("h2",{className:"sectionHeader"},e.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},e.content.subsections?e.content.subsections.map((function(e){return c.a.createElement(C,{key:e.sectionTitle,content:e})})):"",c.a.createElement("br",null),e.content.text,c.a.createElement("br",null),e.content.footLink&&c.a.createElement("a",{href:e.content.footLink.link},e.content.footLink.text)))};var j=function(e){return c.a.createElement("div",{className:"faq"},c.a.createElement("div",{className:"faqHeader"},c.a.createElement("div",{id:e.content.number,className:"faqNumber"},e.content.number),c.a.createElement("span",{className:"question"},e.content.question)),c.a.createElement("div",{className:"answerBlock"},c.a.createElement("span",{className:"answer",dangerouslySetInnerHTML:{__html:e.content.answer}})))};var O=function(e){return c.a.createElement("div",{className:"section faqSection"},e.content.faqs?e.content.faqs.map((function(e){return c.a.createElement(j,{key:e.number+"-"+e.question,content:e})})):"")};var T=function(e){return console.log(e),e.pageData.content.map((function(e){switch(console.log(e),e.contentType){case"headerImage":return c.a.createElement(h,{key:e.contentType+"-"+e.sectionTitle,content:e});case"section":return c.a.createElement(E,{key:e.contentType+"-"+e.sectionTitle,content:e});case"gallerySection":return c.a.createElement(N,{key:e.contentType+"-"+e.sectionTitle,content:e});case"embedSection":return c.a.createElement(b,{key:e.contentType+"-"+e.sectionTitle,content:e});case"attractionsSection":return c.a.createElement(w,{key:e.contentType+"-"+e.sectionTitle,content:e});case"iconSection":return c.a.createElement(D,{key:e.contentType+"-"+e.sectionTitle,content:e});case"subSection":return c.a.createElement(C,{key:e.contentType+"-"+e.sectionTitle,content:e});case"faqSection":return console.log("FAQ"),c.a.createElement(O,{key:e.contentType+"-"+e.key,content:e});case"announcement":default:return c.a.createElement(I,{key:e.contentType+"-"+e.sectionTitle,content:e})}}))},S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={password:"",loading:!1,error:!1},n.onKeyDown=n.onKeyDown.bind(Object(f.a)(n)),n.updatePassword=n.updatePassword.bind(Object(f.a)(n)),n.authenticate=n.authenticate.bind(Object(f.a)(n)),n.processAuthResponse=n.processAuthResponse.bind(Object(f.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onKeyDown",value:function(e){13===e.keyCode&&this.authenticate()}},{key:"updatePassword",value:function(e){this.setState({password:e.target.value})}},{key:"processAuthResponse",value:function(e){var t=this;e.json().then((function(e){e.sessionId?t.props.onSessionChange(e.sessionId):t.setState({loading:!1,error:!0})}))}},{key:"authenticate",value:function(){var e=this;this.setState({loading:!0},(function(){var t="https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbyTjX1p_6pGAn6gNsYDUyWjaNBPds6ZJMvCzDQeERGKQ5AaeoY%2Fexec%3Fmethod%3Dauthenticate%26password%3D"+encodeURI(e.state.password);fetch("https://us-central1-weddingwebsiteproxy.cloudfunctions.net/cors?url="+t,{timeout:6e4}).then((function(t){e.processAuthResponse(t)}))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"authenticatePage"},c.a.createElement("div",{className:"inviteForm"},c.a.createElement("div",{className:"navBar"},"Invitation Code"),c.a.createElement("div",{className:this.state.loading?"sectionContent loader":"sectionContent"},this.state.error&&c.a.createElement("div",{className:"error"},"*Invalid Invitation Code"),c.a.createElement("div",{className:"field"},c.a.createElement("input",{type:"password",id:"password",className:"password",onChange:this.updatePassword,onKeyDown:this.onKeyDown})),c.a.createElement("div",null,c.a.createElement("button",{id:"authenticate",className:"submitButton",onClick:this.authenticate},"Enter")))))}}]),t}(a.Component),x=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(m.a)(t).call(this,e));var a=window.localStorage.getItem("sessionId");return n.state={sessionId:a,PageData:{pages:[]}},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onSessionChange",value:function(e){var t=this;fetch("https://us-central1-weddingwebsiteproxy.cloudfunctions.net/cors?url="+("https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbyTjX1p_6pGAn6gNsYDUyWjaNBPds6ZJMvCzDQeERGKQ5AaeoY%2Fexec%3Fmethod%3Dconfig%26sessionId%3D"+e),{timeout:6e4}).then((function(n){n.json().then((function(n){t.setState({sessionId:e,PageData:n})}))}))}},{key:"render",value:function(){var e=this;return this.state.sessionId?(console.log(this.state),c.a.createElement(d.a,null,c.a.createElement(p,{pages:this.state.PageData}),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/"},c.a.createElement(T,{pageData:this.state.PageData.pages.find((function(e){return"/"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/gallery"},c.a.createElement(T,{pageData:this.state.PageData.pages.find((function(e){return"/gallery"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/faqs"},c.a.createElement(T,{pageData:this.state.PageData.pages.find((function(e){return"/faqs"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/registry"},c.a.createElement(T,{pageData:this.state.PageData.pages.find((function(e){return"/registry"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/stpaul"},c.a.createElement(T,{pageData:this.state.PageData.pages.find((function(e){return"/stpaul"===e.path}))}))))):c.a.createElement(S,{onSessionChange:function(t){return e.onSessionChange(t)}})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.34ef2d5d.chunk.js.map