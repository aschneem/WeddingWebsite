(this["webpackJsonpwedding-website"]=this["webpackJsonpwedding-website"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"pages":[]}')},25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(21),s=n.n(o),i=(n(30),n(6)),r=n(7),l=n(9),m=n(8),u=n(10),d=n(12),g=n(11);var p=function(){return c.a.createElement("div",{className:"header collapse"},c.a.createElement("div",{className:"headerContent"},c.a.createElement("h1",{className:"title"},c.a.createElement("div",{className:"firstName"},"Erin ",c.a.createElement("span",{className:"lname"},"O'Brien")),c.a.createElement("span",{className:"amp"},"&"),c.a.createElement("div",{className:"secondName"},"Alex ",c.a.createElement("span",{className:"lname"},"Schneeman"))),c.a.createElement("div",{className:"navBar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/gallery"},"Gallery")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/faqs"},"FAQs")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/registry"},"Registry"))))))},h=(n(36),n(18));var E=function(e){return console.log("Section"),console.log(e),c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},e.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},c.a.createElement("img",{src:e.content.image,alt:"",width:"100%"}),c.a.createElement("br",null),e.content.text,c.a.createElement("br",null),e.content.fields?e.content.fields.map((function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("span",{className:"field"},e.name),c.a.createElement("span",{className:"value"},e.value))})):"",e.content.footLink&&c.a.createElement("a",{href:e.content.footLink.link},e.content.footLink.text)))};var f=function(e){return console.log("HeaderImage"),console.log(e),c.a.createElement("div",{className:"headImage"},c.a.createElement("img",{src:e.content.image,alt:""}))},v=n(24),b=n(4);var y=function(e){return e.content.display?c.a.createElement("div",{className:"galleryImage"},c.a.createElement("a",{onClick:function(){return e.onClick()}},c.a.createElement("img",{src:e.content.image,alt:""}))):null};var N=function(e){return e.image?c.a.createElement("div",{className:"overlay",onClick:function(){return e.onClose()}},c.a.createElement("button",{className:"leftNav",onClick:function(t){t.stopPropagation(),e.onLeft()}},"<"),c.a.createElement("div",{className:"enlargedImage"},c.a.createElement("img",{src:e.image.image,alt:""})),c.a.createElement("button",{class:"rightNav",onClick:function(t){t.stopPropagation(),e.onRight()}},">"),c.a.createElement("button",{class:"closeButton",onClick:function(){return e.onClose()}},"X")):null},k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).openEnlargedImage=n.openEnlargedImage.bind(Object(b.a)(n)),n.closeEnlargedImage=n.closeEnlargedImage.bind(Object(b.a)(n)),n.navLeft=n.navLeft.bind(Object(b.a)(n)),n.navRight=n.navRight.bind(Object(b.a)(n)),n.state={openImage:null},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"openEnlargedImage",value:function(e){this.setState({openImage:e})}},{key:"closeEnlargedImage",value:function(){this.setState({openImage:null})}},{key:"navLeft",value:function(){this.state.openImage&&this.setState((function(e,t){for(var n=(t.content.images.indexOf(e.openImage)-1+t.content.images.length)%t.content.images.length;!t.content.images[n].display;)n=(n-1+t.content.images.length)%t.content.images.length;return{openImage:t.content.images[n]}}))}},{key:"navRight",value:function(){this.state.openImage&&this.setState((function(e,t){for(var n=(t.content.images.indexOf(e.openImage)+1+t.content.images.length)%t.content.images.length;!t.content.images[n].display;)Object(v.a)("rightImageIndex"),n=(n-1+t.content.images.length)%t.content.images.length;return{openImage:t.content.images[n]}}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},this.props.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},this.props.content.images.map((function(t){return c.a.createElement(y,{key:t.id,content:t,onClick:function(){return e.openEnlargedImage(t)}})}))),c.a.createElement(N,{image:this.state.openImage,onClose:function(){return e.closeEnlargedImage()},onLeft:function(){return e.navLeft()},onRight:function(){return e.navRight()}}))}}]),t}(a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},this.props.content.sectionTitle),c.a.createElement("div",{className:"sectionContent",dangerouslySetInnerHTML:{__html:this.props.content.embedCode}}))}}]),t}(a.Component);var j=function(e){return c.a.createElement("div",{className:"attractionEntry"},c.a.createElement("div",{className:"attractionImageContainer"},c.a.createElement("img",{src:e.content.image,alt:"",className:"attractionLogo"})),c.a.createElement("div",{className:"attractionDetails"},c.a.createElement("div",{className:"attractionTitle"},e.content.name),c.a.createElement("div",{className:"attractionAddress1"},e.content.address1),c.a.createElement("div",{className:"attractionAddress2"},e.content.address2),c.a.createElement("div",{className:"attractionDescription"},e.content.description,c.a.createElement("br",null),c.a.createElement("a",{href:e.content.link.link},e.content.link.text))))};var C=function(e){return c.a.createElement("div",{className:"section"},c.a.createElement("h2",{className:"sectionHeader"},e.content.sectionTitle),c.a.createElement("div",{className:"sectionContent"},e.content.attractions.map((function(e){return c.a.createElement(j,{key:e.name,content:e})}))))};var w=function(e){return console.log("Announcement"),console.log(e),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"sectionContent"},c.a.createElement("h3",{className:"announcement"},e.content.line1),c.a.createElement("h3",{className:"announcementDetails"},e.content.line2),e.content.details.map((function(e){return c.a.createElement("div",{key:e.substring(10,20)+" "+e.length,className:"announcementDescriptionDetail"},e)}))))};var O=function(e){return console.log(e),e.pageData.content.map((function(e){switch(e.contentType){case"headerImage":return c.a.createElement(f,{key:e.contentType+"-"+e.sectionTitle,content:e});case"section":return c.a.createElement(E,{key:e.contentType+"-"+e.sectionTitle,content:e});case"gallerySection":return c.a.createElement(k,{key:e.contentType+"-"+e.sectionTitle,content:e});case"embedSection":return c.a.createElement(I,{key:e.contentType+"-"+e.sectionTitle,content:e});case"attractionsSection":return c.a.createElement(C,{key:e.contentType+"-"+e.sectionTitle,content:e});case"announcement":default:return c.a.createElement(w,{key:e.contentType+"-"+e.sectionTitle,content:e})}}))},D=(n(37),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={password:""},n.updatePassword=n.updatePassword.bind(Object(b.a)(n)),n.authenticate=n.authenticate.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"updatePassword",value:function(e){this.setState({password:e.target.value})}},{key:"authenticate",value:function(){var e=this,t="https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbyTjX1p_6pGAn6gNsYDUyWjaNBPds6ZJMvCzDQeERGKQ5AaeoY%2Fexec%3Fmethod%3Dauthenticate%26password%3D"+encodeURI(this.state.password);console.log(t),fetch("https://us-central1-weddingwebsiteproxy.cloudfunctions.net/cors?url="+t,{timeout:6e4}).then((function(e){return console.log(e),e.json()})).then((function(t){return e.props.onSessionChange(t.sessionId)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"authenticatePage"},c.a.createElement("div",{className:"inviteForm"},c.a.createElement("div",{className:"navBar"},"Invitation Code"),c.a.createElement("div",{className:"sectionContent"},c.a.createElement("div",{className:"field"},c.a.createElement("input",{type:"password",id:"password",className:"password",onChange:this.updatePassword})),c.a.createElement("div",null,c.a.createElement("button",{id:"authenticate",className:"submitButton",onClick:this.authenticate},"Enter")))))}}]),t}(a.Component)),T=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(m.a)(t).call(this,e));var a=window.localStorage.getItem("sessionId");return n.state={sessionId:a,PageData:h},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onSessionChange",value:function(e){var t=this,n="https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbyTjX1p_6pGAn6gNsYDUyWjaNBPds6ZJMvCzDQeERGKQ5AaeoY%2Fexec%3Fmethod%3Dconfig%26sessionId%3D"+e;console.log(n),console.log(h),fetch("https://us-central1-weddingwebsiteproxy.cloudfunctions.net/cors?url="+n,{timeout:6e4}).then((function(n){n.json().then((function(n){console.log(n),t.setState({sessionId:e,PageData:n})}))}))}},{key:"render",value:function(){var e=this;return this.state.sessionId?c.a.createElement(d.a,null,c.a.createElement(p,{pages:this.state.PageData}),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/WeddingWebsite/"},c.a.createElement(O,{pageData:this.state.PageData.pages.find((function(e){return"/"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/WeddingWebsite/gallery"},c.a.createElement(O,{pageData:this.state.PageData.pages.find((function(e){return"/gallery"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/WeddingWebsite/faqs"},c.a.createElement(O,{pageData:this.state.PageData.pages.find((function(e){return"/faqs"===e.path}))})),c.a.createElement(g.a,{exact:!0,path:"/WeddingWebsite/registry"},c.a.createElement(O,{pageData:this.state.PageData.pages.find((function(e){return"/registry"===e.path}))})))):c.a.createElement(D,{onSessionChange:function(t){return e.onSessionChange(t)}})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.cdc3e814.chunk.js.map