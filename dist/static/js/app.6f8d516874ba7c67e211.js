webpackJsonp([1],{"+708":function(t,e,a){"use strict";var s={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;a("JAHf"),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,a,s,i,n,o,c,l,r,d,g,u,I,m){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:s,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:c,distance:r,color:n,opacity:l,width:o},move:{enable:!0,speed:d,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:g,mode:u},onclick:{enable:I,mode:m},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},staticRenderFns:[]},n=a("VU/8")(s,i,!1,null,null,null);e.a=n.exports},FhHU:function(t,e){},IwEE:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIyOC4xMTMxbW0iCiAgIGhlaWdodD0iMjExLjQ4MjEzbW0iCiAgIHZpZXdCb3g9IjAgMCAyMjguMTEzMSAyMTEuNDgyMTMiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzE0MSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKGM0OTdiMDNjLCAyMDIwLTA5LTEwKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idm9sbGV5LWxvZ28tZGFyay5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMzUiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuODI1ODMzMDUiCiAgICAgaW5rc2NhcGU6Y3g9IjQzMS4wNzk4NyIKICAgICBpbmtzY2FwZTpjeT0iMzk5LjY1MTI4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI1MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NDMiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjExMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMzgiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjcwMjM3NiwtMzAuMjM4MDk0KSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgxNDMiCiAgICAgICBzdHlsZT0iZmlsbDojMzkyMjUxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDowLjYxMTgwNDtmaWxsLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjAyLjQxMDcyLDU3LjczODA5NCBhIDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwyNy41IDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwyNy41IHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9ImNpcmNsZTE0NSIKICAgICAgIHN0eWxlPSJmaWxsOiMzOTIyNTE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLXdpZHRoOjAuNjExODA0O2ZpbGwtb3BhY2l0eToxIgogICAgICAgZD0ibSAyOS4yOTc2MjQsNTguNDk0MDQ1IGEgMjcuNSwyNy41IDAgMCAxIC0yNy40OTk5OTk3LDI3LjUgMjcuNSwyNy41IDAgMCAxIC0yNy41MDAwMDAzLC0yNy41IDI3LjUsMjcuNSAwIDAgMSAyNy41MDAwMDAzLC0yNy41IDI3LjUsMjcuNSAwIDAgMSAyNy40OTk5OTk3LDI3LjUgeiIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0iY2lyY2xlMTQ3IgogICAgICAgc3R5bGU9ImZpbGw6IzM5MjI1MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6MC42MTE4MDQ7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDExMS45MjMyMywyMTQuMjIwMjMgYSAyNy41LDI3LjUgMCAwIDEgLTI3LjUwMDAwNSwyNy41IDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNTAwMDA1LDI3LjUgeiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMzkyMjUxO3N0cm9rZTojMzkyMjUxO3N0cm9rZS13aWR0aDowLjUyOTE2NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO2ZpbGwtb3BhY2l0eToxIgogICAgICAgZD0iTSAxNC4wNDA3OTcsODMuMTAzOTMxIDgzLjI0NjkwNSwxODcuMTA1NjMiCiAgICAgICBpZD0icGF0aDE0OSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMzkyMjUxO3N0cm9rZTojMzkyMjUxO3N0cm9rZS13aWR0aDowLjUyOTE2NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO2ZpbGwtb3BhY2l0eToxIgogICAgICAgZD0iTSAxNTkuODA1MjYsODAuNzI2MzU5IDgzLjI0NjkwNSwxODcuMTA1NjMiCiAgICAgICBpZD0icGF0aDE1MSIgLz4KICA8L2c+Cjwvc3ZnPgo="},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},i,!1,function(t){a("kz8L")},null,null).exports,o=a("/ocq"),c=a("xIKa"),l=a.n(c),r=a("DA7E"),d=a.n(r),g={components:{},name:"VolleyConsulting",created:function(){this.CONFIG="prod"==l.a.mode?l.a.prod:l.a.dev,this.actives={pane:this.$route.params.pane?this.$route.params.pane:"#HOME",basemap:this.$route.params.basemap?this.$route.params.basemap:null,updatekey:this.$route.params.updatekey?this.$route.params.updatekey:null,geom:null}},beforeDestroy:function(){window.removeEventListener("keydown",this.keyMonitor)},mounted:function(){var t=this;this.axios.get("http://worldtimeapi.org/api/ip",{accept:"application/json"}).then(function(e){var a=t.$MOMENT(e.data.datetime).hour();t.page.schema=a>8&&a<21?"light":"dark"},function(t){console.log("FAILED...",t)}),window.document.body.onscroll=function(){t.actives.pane=null},window.addEventListener("keydown",this.keyMonitor)},firestore:function(){return{prescreens:T.collection("prescreens")}},data:function(){return{FONT:"Roboto",CONFIG:null,showNav:!1,loadings:{maplayer:!1,app:!1,popupopen:!1},modals:{prescreen:!1},page:{splayed:!1,schema:"light",nameOfThing:"Volley Consulting",descriptionOfThing:"Volley Consulting is a small firm from Brookline, Massachusetts that brings years and years of experience with a wide variety of data problems and solutions from across many, many domains.",keywordsForThing:["data consulting","data cleanup","custom development"],panes:[{label:"Your Situation",slug:"#HOME"},{label:"Contact Us",slug:"#CONTACT"},{label:"About",slug:"#ABOUT"}]},project:{shorthand:"Volley"},console:{msgs:[]},actives:{pane:"default"},prescreen:{status:"Submit",waiting:!1,email:null,content:null,timestamp:new Date},contact:{status:"Submit",waiting:!1,email:null,name:null,content:null,timestamp:new Date}}},methods:{isEmailValid:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;return"prescreen"==t?""==this.prescreen.email?"":!!e.test(this.prescreen.email):"contact"==t?""==this.contact.email?"":!!e.test(this.contact.email):void 0},sendEmailPrescreen:function(){var t=this,e={reply_to:this.prescreen.email,prescreenBody:this.prescreen.content};d.a.send("gmail","gbw_prescreen",e,"user_B6haXsW376PCoTkyZ4eYy").then(function(e){console.log("SUCCESS!",e.status,e.text),t.prescreen.status="tnx!"},function(e){console.log("FAILED...",e),t.prescreen.status="plz try again"}).finally(function(){t.prescreen.waiting=!1})},sendEmailContact:function(){var t=this,e={reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name};console.log(e),d.a.send("gmail","gbw_contact",e,"user_B6haXsW376PCoTkyZ4eYy").then(function(e){console.log("SUCCESS!",e.status,e.text),t.contact.status="TNX! We will be eager to reply."},function(e){console.log("FAILED...",e),t.contact.status="plz try again"}).finally(function(){t.contact.waiting=!1})},addPreScreen:function(t,e){var a=this;this.prescreen.waiting=!0,T.collection("prescreens").add({replied:!1,reply_to:this.prescreen.email,prescreenBody:this.prescreen.content}).then(function(t){a.sendEmailPrescreen()})},addContact:function(t,e){var a=this;this.contact.waiting=!0,T.collection("contacts").add({replied:!1,reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name}).then(function(t){a.sendEmailContact(),console.log("ref",t)})},keyMonitor:function(t){t.altKey&&(this.page.splayed=!this.page.splayed),"escape"==t.key.toLowerCase()&&(this.modals=this.$_.mapObject(this.modals,function(t,e){return!1}))},getColor:function(t){}},watch:{"actives.pane":{handler:function(t,e){var a="#HOME"==t?"#GBW-nav":t;this.$scrollTo(a)}}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["light"==t.page.schema?"G-GBW-schema-light":"G-GBW-schema-dark"],style:"font-family:"+t.FONT,attrs:{id:"GBW-vue-root"}},[s("vue-particles",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{color:"light"==t.page.schema?"#372554":"#dedede",particleOpacity:.2,particlesNumber:101,shapeType:"edge",particleSize:3,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.2,linesDistance:150,moveSpeed:1,hoverEffect:!1,hoverMode:"grab",clickEffect:!1,clickMode:"push"}}),t._v(" "),s("vue-headful",{attrs:{title:t.page.nameOfThing,description:t.page.descriptionOfThing,keywords:t.page.keywordsForThing,url:"http://volleyconsulting.com",",":"",lang:"en"}}),t._v(" "),s("nav",{class:["navbar","light"==t.page.schema?"N-GBW-schema-light":"N-GBW-schema-dark"],attrs:{id:"GBW-nav",role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarGBW"},on:{click:function(e){t.showNav=!t.showNav}}},[s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"navbar-menu",class:[t.showNav?"is-active":"",t.showNav?"GBW-div-secondary":""],attrs:{id:"navbarGBW"}},[s("div",{staticClass:"navbar-start"},[s("div",{staticClass:"navbar-item",on:{click:function(e){t.page.schema="light"==t.page.schema?"dark":"light"}}},[s("font-awesome-icon",{attrs:{icon:"moon"}})],1),t._v(" "),t._l(t.page.panes,function(e){return s("a",{staticClass:"navbar-item",on:{click:function(a){a.preventDefault(),t.actives.pane=e.slug}}},[t._v("\n          "+t._s(e.label)+"\n        ")])})],2),t._v(" "),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item calm"},[s("button",{staticClass:"button is-large GBW-btn",attrs:{type:"submit"},on:{click:function(e){t.modals.prescreen=!0}}},[t._v("Prescreen Us!")])])])])]),t._v(" "),s("section",{class:["hero","is-fullheight","light"==t.page.schema?"M-GBW-schema-light":"M-GBW-schema-dark"],attrs:{id:"HOME"}},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[t._m(0),t._v(" "),"dark"==t.page.schema?s("div",{staticClass:"pt-6 GBW-branding column is-one-half has-text-centered"},[s("img",{attrs:{width:"250px",id:"GBW-iso-logo",src:a("V3Gg")}}),t._v(" "),s("p",[t._v("Volley")]),t._v(" "),s("p",{staticStyle:{"padding-top":"0","font-variant":"small-caps"}},[t._v("Consulting")])]):s("div",{staticClass:"pt-6 GBW-branding column is-one-half has-text-centered"},[s("img",{attrs:{width:"250px",id:"GBW-iso-logo",src:a("IwEE")}}),t._v(" "),s("p",[t._v("Volley")]),t._v(" "),s("p",{staticStyle:{"padding-top":"0","font-variant":"small-caps"}},[t._v("Consulting")])])]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"GBW-footer-faux columns"},[s("div",{staticClass:"column is-1"},[s("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.actives.pane="#HOME"}}},[t._v("\n      ("),s("font-awesome-icon",{attrs:{icon:"arrow-up"}}),t._v(")\n    ")],1)])])]),t._v(" "),s("div",{class:["modal",t.modals.prescreen?"is-active":""]},[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{class:["modal-card","light"==t.page.schema?"MO-GBW-schema-light":"MO-GBW-schema-dark"],attrs:{id:"PRESCREEN"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("What's Happening?")]),t._v(" "),s("button",{staticClass:"delete is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.modals.prescreen=!1}}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[t._m(2),t._v(" "),t._m(3),t._v(" "),s("form",[s("div",{staticClass:"input-group control has-icons-left has-icons-right"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.prescreen.email,expression:"prescreen.email"}],class:["input",t.isEmailValid("prescreen")?"is-success":"is-error"],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.prescreen.email},on:{input:function(e){e.target.composing||t.$set(t.prescreen,"email",e.target.value)}}}),t._v(" "),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),s("span",{staticClass:"icon is-small is-right"},[t.isEmailValid("prescreen")?s("font-awesome-icon",{attrs:{icon:"thumbs-up"}}):t._e(),t._v(" "),t.isEmailValid("prescreen")?t._e():s("font-awesome-icon",{attrs:{icon:"frown"}})],1)])]),t._v("\n             \n            "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.prescreen.content,expression:"prescreen.content"}],staticClass:"textarea",attrs:{placeholder:"",rows:"10"},domProps:{value:t.prescreen.content},on:{input:function(e){e.target.composing||t.$set(t.prescreen,"content",e.target.value)}}}),t._v(" "),s("button",{class:["GBW-btn-light","button","is-large","is-light","is-fullwidth",t.prescreen.waiting?"is-loading":""],attrs:{disabled:!t.isEmailValid("prescreen"),type:"submit"},on:{click:t.addPreScreen}},[t._v(t._s(t.prescreen.status))]),t._v(" "),t.isEmailValid("prescreen")?t._e():s("p",{staticClass:"is-error has-text-centered is-size-7"},[t._v("(please enter a valid email address)")])])])])]),t._v(" "),s("section",{class:["hero","is-fullheight","light"==t.page.schema?"M-GBW-schema-light":"M-GBW-schema-dark"],attrs:{id:"ABOUT"}},[t._m(4),t._v(" "),s("div",{staticClass:"GBW-footer-faux columns"},[s("div",{staticClass:"column is-1"},[s("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.actives.pane="#HOME"}}},[t._v("\n      ("),s("font-awesome-icon",{attrs:{icon:"arrow-up"}}),t._v(")\n    ")],1)])])]),t._v(" "),s("section",{class:["hero","is-size-5","is-fullheight","light"==t.page.schema?"M-GBW-schema-light":"M-GBW-schema-dark"],attrs:{id:"CONTACT"}},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n    Contact Us\n    ")]),t._v(" "),s("p",[t._v("\n            If you're not sure you want to talk to us feel free to use our anonymous prescreen form "),s("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.modals.prescreen=!0}}},[t._v("here")]),t._v(". Otherwise, it would be great to hear from you.\n          ")]),t._v(" "),s("p"),s("form",[s("div",{staticClass:"input-group control"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"input",attrs:{type:"text",placeholder:"name"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}})])]),t._v("\n               \n              "),s("div",{staticClass:"input-group control has-icons-left has-icons-right"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],class:["input",t.isEmailValid("contact")?"is-success":"is-error"],attrs:{type:"text",placeholder:"email"},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}}),t._v(" "),s("span",{staticClass:"icon is-small is-left"},[s("font-awesome-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),s("span",{staticClass:"icon is-small is-right"},[t.isEmailValid("contact")?s("font-awesome-icon",{attrs:{icon:"check"}}):t._e(),t._v(" "),t.isEmailValid("contact")?t._e():s("font-awesome-icon",{attrs:{icon:"frown"}})],1)])]),t._v("\n               \n              "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.content,expression:"contact.content"}],staticClass:"textarea",attrs:{placeholder:"",rows:"10"},domProps:{value:t.contact.content},on:{input:function(e){e.target.composing||t.$set(t.contact,"content",e.target.value)}}}),t._v(" "),s("button",{class:["GBW-btn-light","button","is-large","is-light","is-fullwidth",t.contact.waiting?"is-loading":""],attrs:{disabled:!t.isEmailValid("contact"),type:"submit"},on:{click:t.addContact}},[t._v(t._s(t.contact.status))]),t._v(" "),t.isEmailValid("contact")?t._e():s("p",{staticClass:"is-error has-text-centered is-size-7"},[t._v("(please enter a valid email address)")])]),t._v(" "),s("p")])]),t._v(" "),s("div",{staticClass:"GBW-footer-faux columns"},[s("div",{staticClass:"column is-1"},[s("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.actives.pane="#HOME"}}},[t._v("\n      ("),s("font-awesome-icon",{attrs:{icon:"arrow-up"}}),t._v(")\n    ")],1)])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-one-half"},[a("p",{staticClass:"has-text-weight-bold pl-0 is-size-3"},[t._v("You know that "),a("em",[t._v("something")]),t._v(" more can be done with your data.")]),t._v(" "),a("p",{staticClass:"pt-6 is-size-5"},[t._v("Perhaps you've heard about what data are doing for other companies and you're curious. Or maybe you're already convinced that your data can work better for you -- clearer insight into your operation or analyses of your clientele, let's say. Or maybe you want them cleaned up to better support or improve your current operations and workflows. Maybe you know you want an in-house or public visualization or a clean and easy API that can automate reporting or periodic analyses or real-time alerting.")]),t._v(" "),a("p",{staticClass:"is-size-5"},[t._v("But who in your organization has the time and acumen for this?")]),t._v(" "),a("p",{staticClass:"has-text-weight-bold pl-0 pt-6 is-size-3"},[t._v("We do.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-one-half"}),this._v(" "),e("div",{staticClass:"column"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-7 has-text-left"},[e("p",[this._v("\n                Tell us about your data problem and we will write back with our initial thoughts.")]),this._v(" "),e("p",[this._v("An actual human being is going to read what you write and reply, so of course don't put any sensitive information in here. Just describe what's bugging you about your data situation.\n              ")])]),this._v(" "),e("div",{staticClass:"column is-5 has-text-justified"},[e("div",{staticStyle:{"font-weight":"800","font-size":"1.5em"}},[this._v("No hard sell, no fee, just a conversation about your situation - free data therapy!")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",[this._v("All we need is "),e("em",[this._v("an")]),this._v(" email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using a DEA service.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body is-size-5"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n    About Us\n    ")]),this._v(" "),e("p",[this._v("Volley is a data-focused development and consulting firm devoted to helping our clients solve data problems and maximize data capability. We can clean, fix, and refine your data. We can optimize them. We can find external data that augment or inform yours. And we can build all manner of custom applications that present your own data back to you exactly how you need it. ")]),this._v(" "),e("p",[this._v("We deliver solutions that allow you to focus on what you do best - "),e("em",[this._v("on top of")]),this._v(" the powerful tool that is your own data.")])])])}]};var I=a("VU/8")(g,u,!1,function(t){a("S0qj")},null,null).exports;s.default.use(o.a);var m=new o.a({routes:[{path:"/",name:"Default",component:I}]}),p=a("PJh5"),C=a.n(p),v=a("rNNc"),h=a("WiKS"),j=a.n(h),A=(a("k5jX"),a("mM94")),y=a("bm7V"),b=a.n(y),M=a("hcVv"),w=a("mtWM"),N=a.n(w),f=a("Rf8U"),Z=a.n(f),D=a("wmKo"),W=a.n(D),z=a("yviF"),S=a.n(z),k=(a("881v"),a("FhHU"),a("C/JF")),G=a("fhbW"),L=a("1e6/");a.d(e,"db",function(){return T}),s.default.use(M),s.default.use(Z.a,N.a),s.default.use(W.a),k.c.add(G.a),k.c.add(G.c),k.c.add(G.e),k.c.add(G.b),k.c.add(G.d),s.default.component("font-awesome-icon",L.a);var x=S.a.initializeApp({databaseURL:"https://volley-prescreen.firebaseio.com",projectId:"volley-prescreen"}),T=S.a.firestore();x.firestore().settings({});"prod"==l.a.mode?l.a.prod:l.a.dev;s.default.component("vue-headful",j.a),s.default.use(v.a),s.default.use(A.a),s.default.use(b.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),s.default.config.productionTip=!1,Object.defineProperty(s.default.prototype,"$MOMENT",{value:C.a}),new s.default({el:"#app",router:m,template:"<App/>",components:{App:n}})},S0qj:function(t,e){},V3Gg:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIyOC4xMTMxbW0iCiAgIGhlaWdodD0iMjExLjQ4MjEzbW0iCiAgIHZpZXdCb3g9IjAgMCAyMjguMTEzMSAyMTEuNDgyMTMiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzE0MSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKGM0OTdiMDNjLCAyMDIwLTA5LTEwKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idm9sbGV5LWxvZ28tbGlnaHQuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTM1IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjUiCiAgICAgaW5rc2NhcGU6Y3g9IjIxNi4yNzQwMSIKICAgICBpbmtzY2FwZTpjeT0iNTExLjc0NzY2IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI1MiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI5NDMiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjExMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMzgiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjcwMjM3NiwtMzAuMjM4MDk0KSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgxNDMiCiAgICAgICBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDowLjYxMTgwNCIKICAgICAgIGQ9Im0gMjAyLjQxMDcyLDU3LjczODA5NCBhIDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwyNy41IDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwyNy41IHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9ImNpcmNsZTE0NSIKICAgICAgIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLXdpZHRoOjAuNjExODA0IgogICAgICAgZD0ibSAyOS4yOTc2MjQsNTguNDk0MDQ1IGEgMjcuNSwyNy41IDAgMCAxIC0yNy40OTk5OTk3LDI3LjUgMjcuNSwyNy41IDAgMCAxIC0yNy41MDAwMDAzLC0yNy41IDI3LjUsMjcuNSAwIDAgMSAyNy41MDAwMDAzLC0yNy41IDI3LjUsMjcuNSAwIDAgMSAyNy40OTk5OTk3LDI3LjUgeiIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0iY2lyY2xlMTQ3IgogICAgICAgc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6MC42MTE4MDQiCiAgICAgICBkPSJtIDExMS45MjMyMywyMTQuMjIwMjMgYSAyNy41LDI3LjUgMCAwIDEgLTI3LjUwMDAwNSwyNy41IDI3LjUsMjcuNSAwIDAgMSAtMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNSwtMjcuNSAyNy41LDI3LjUgMCAwIDEgMjcuNTAwMDA1LDI3LjUgeiIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZjlmOWY5O3N0cm9rZTojZjlmOWY5O3N0cm9rZS13aWR0aDowLjUyOTE2NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxNC4wNDA3OTcsODMuMTAzOTMxIDgzLjI0NjkwNSwxODcuMTA1NjMiCiAgICAgICBpZD0icGF0aDE0OSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZjlmOWY5O3N0cm9rZTojZjlmOWY5O3N0cm9rZS13aWR0aDowLjUyOTE2NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxNTkuODA1MjYsODAuNzI2MzU5IDgzLjI0NjkwNSwxODcuMTA1NjMiCiAgICAgICBpZD0icGF0aDE1MSIgLz4KICA8L2c+Cjwvc3ZnPgo="},kz8L:function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return a(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="uslO"},xIKa:function(t,e){t.exports={mode:"dev",prod:{},dev:{}}}},["NHnr"]);
//# sourceMappingURL=app.6f8d516874ba7c67e211.js.map