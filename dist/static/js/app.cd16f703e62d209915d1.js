webpackJsonp([1],{"+708":function(e,t,a){"use strict";var s={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;a("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,a,s,n,i,o,r,l,c,d,u,p,v,m){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:s,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:c,color:i,opacity:l,width:o},move:{enable:!0,speed:d,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:u,mode:p},onclick:{enable:v,mode:m},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},i=a("VU/8")(s,n,!1,null,null,null);t.a=i.exports},"1FUi":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"app"},n,!1,function(e){a("kz8L")},null,null).exports,o=a("/ocq"),r=a("xIKa"),l=a.n(r),c=a("DA7E"),d=a.n(c),u={components:{},name:"Volley Consulting",created:function(){this.CONFIG="prod"==l.a.mode?l.a.prod:l.a.dev,this.actives={pane:this.$route.params.pane?this.$route.params.pane:"#HOME",basemap:this.$route.params.basemap?this.$route.params.basemap:null,updatekey:this.$route.params.updatekey?this.$route.params.updatekey:null,geom:null}},beforeDestroy:function(){window.removeEventListener("keydown",this.keyMonitor)},mounted:function(){var e=this;window.document.body.onscroll=function(){e.actives.pane=null}},firestore:function(){return{prescreens:B.collection("prescreens")}},data:function(){return{FONT:"Nunito",nameOfThing:"Volley",CONFIG:null,showNav:!1,loadings:{maplayer:!1,app:!1,popupopen:!1},page:{splayed:!1,panes:[{label:"",slug:"#HOME"},{label:"Your Situation",slug:"#PRESCREEN"},{label:"Contact Us",slug:"#CONTACT"},{label:"Tools",slug:"#TOOLS"},{label:"About",slug:"#ABOUT"}]},project:{shorthand:"Volley"},console:{msgs:[]},actives:{pane:"default"},prescreen:{status:"Submit",waiting:!1,email:null,content:null,timestamp:new Date},contact:{status:"Submit",waiting:!1,email:null,name:null,content:null,timestamp:new Date}}},methods:{isEmailValid:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;return"prescreen"==e?""==this.prescreen.email?"":!!t.test(this.prescreen.email):"contact"==e?""==this.contact.email?"":!!t.test(this.contact.email):void 0},sendEmailPrescreen:function(){var e=this,t={reply_to:this.prescreen.email,prescreenBody:this.prescreen.content};console.log(t),d.a.send("gmail","gbw_prescreen",t,"user_B6haXsW376PCoTkyZ4eYy").then(function(t){console.log("SUCCESS!",t.status,t.text),e.prescreen.status="tnx!"},function(t){console.log("FAILED...",t),e.prescreen.status="plz try again"}).finally(function(){e.prescreen.waiting=!1})},sendEmailContact:function(){var e=this,t={reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name};console.log(t),d.a.send("gmail","gbw_contact",t,"user_B6haXsW376PCoTkyZ4eYy").then(function(t){console.log("SUCCESS!",t.status,t.text),e.contact.status="tnx!"},function(t){console.log("FAILED...",t),e.contact.status="plz try again"}).finally(function(){e.contact.waiting=!1})},addPreScreen:function(e,t){var a=this;this.prescreen.waiting=!0,B.collection("prescreens").add({replied:!1,reply_to:this.prescreen.email,prescreenBody:this.prescreen.content}).then(function(e){a.sendEmailPrescreen(),console.log("ref",e)})},addContact:function(e,t){var a=this;this.contact.waiting=!0,B.collection("contacts").add({replied:!1,reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name}).then(function(e){a.sendEmailContact(),console.log("ref",e)})},keyMonitor:function(e){e.altKey&&(this.page.splayed=!this.page.splayed),"escape"==e.key.toLowerCase()&&(this.modals={settings:!1})}},watch:{"actives.pane":{handler:function(e,t){var a="#HOME"==e?"#GBW-nav":e;this.$scrollTo(a)}}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:"font-family:"+e.FONT,attrs:{id:"GBW-vue-root"}},[a("vue-particles",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{color:"#dedede",particleOpacity:.2,particlesNumber:101,shapeType:"edge",particleSize:3,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.2,linesDistance:150,moveSpeed:1,hoverEffect:!1,hoverMode:"grab",clickEffect:!1,clickMode:"push"}}),e._v(" "),a("vue-headful",{attrs:{title:e.page.nameOfThing,description:"fxsxxxrrrre"}}),e._v(" "),a("nav",{staticClass:"navbar",attrs:{id:"GBW-nav",role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-burger burger",class:{"is-active":e.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarGBW"},on:{click:function(t){e.showNav=!e.showNav}}},[a("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",{attrs:{"aria-hidden":"true"}})])]),e._v(" "),a("div",{staticClass:"navbar-menu",class:[e.showNav?"is-active":"",e.showNav?"GBW-div-secondary":""],attrs:{id:"navbarGBW"}},[a("div",{staticClass:"navbar-start"},e._l(e.page.panes,function(t){return a("a",{staticClass:"navbar-item",on:{click:function(a){a.preventDefault(),e.actives.pane=t.slug}}},[e._v("\n          "+e._s(t.label)+"\n        ")])}),0),e._v(" "),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("button",{staticClass:"button is-large GBW-btn-light",attrs:{type:"submit"},on:{click:function(t){e.actives.pane="#PRESCREEN"}}},[e._v("Prescreen Us!")])])])])]),e._v(" "),a("section",{staticClass:"hero is-fullheight GBW-div-bold",attrs:{id:"HOME"}},[e._m(0),e._v(" "),a("div",{staticClass:"GBW-footer-faux columns"},[a("div",{staticClass:"column is-1"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])]),e._v(" "),a("section",{staticClass:"hero is-fullheight GBW-div-bold",attrs:{id:"PRESCREEN"}},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title GBW-copy-default"},[e._v("\n    What's Happening?\n    ")]),e._v(" "),a("p",[e._v("\n       Tell us about your data problem and we will write back with our initial thoughts. Very seriously - no hard sell, no fee, just a conversation about your situation. Think of it as free data therapy!")]),e._v(" "),a("p",[e._v("An actual human being is going to read what you write and reply. (So of course don't put any sensitive information in here - just describe what's bugging you about your data situation).\n    ")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v(" ")]),e._v(" "),a("p"),a("form",[a("div",{staticClass:"input-group control has-icons-left has-icons-right"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.prescreen.email,expression:"prescreen.email"}],class:["input",e.isEmailValid("prescreen")?"is-success":"is-error"],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.prescreen.email},on:{input:function(t){t.target.composing||e.$set(e.prescreen,"email",t.target.value)}}}),e._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("font-awesome-icon",{attrs:{icon:"envelope"}})],1),e._v(" "),a("span",{staticClass:"icon is-small is-right"},[e.isEmailValid("prescreen")?a("font-awesome-icon",{attrs:{icon:"check"}}):e._e(),e._v(" "),e.isEmailValid("prescreen")?e._e():a("font-awesome-icon",{attrs:{icon:"frown"}})],1)])]),e._v("\n   \n"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.prescreen.content,expression:"prescreen.content"}],staticClass:"textarea",attrs:{placeholder:"",rows:"10"},domProps:{value:e.prescreen.content},on:{input:function(t){t.target.composing||e.$set(e.prescreen,"content",t.target.value)}}}),e._v(" "),a("button",{class:["GBW-btn-light","button","is-large","is-light","is-fullwidth",e.prescreen.waiting?"is-loading":""],attrs:{disabled:!e.isEmailValid("prescreen"),type:"submit"},on:{click:e.addPreScreen}},[e._v(e._s(e.prescreen.status))]),e._v(" "),e.isEmailValid("prescreen")?e._e():a("p",{staticClass:"is-error has-text-centered is-size-7"},[e._v("(please enter a valid email address)")])]),e._v(" "),a("p")])]),e._v(" "),a("div",{staticClass:"GBW-footer-faux columns"},[a("div",{staticClass:"column is-1"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])]),e._v(" "),a("section",{staticClass:"hero is-fullheight GBW-div-bold",attrs:{id:"ABOUT"}},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title GBW-copy-default"},[e._v("\n    About Us\n    ")]),e._v(" "),a("p",[e._v(e._s(e.nameOfThing)+" is a data-focused development and consulting firm devoted to helping our clients solve data problems and maximize data capability. We can clean, fix, and refine your data. We can optimize them. We can find external data that augment or inform yours. And we can build all manner of custom applications that present your own data back to you exactly how you need it. ")]),e._v(" "),a("p",[e._v("We deliver solutions that allow you to focus on what you do best, on top of the powerful tool that is your own data.")])])]),e._v(" "),a("div",{staticClass:"GBW-footer-faux columns"},[a("div",{staticClass:"column is-1"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])]),e._v(" "),a("section",{staticClass:"hero is-fullheight GBW-div-bold",attrs:{id:"CONTACT"}},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title GBW-copy-default"},[e._v("\n    Contact Us\n    ")]),e._v(" "),a("p",[e._v("\n       If you're not sure you want to talk to us (!) feel free to use our anonymous prescreen form "),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.actives.pane="#PRESCREEN"}}},[e._v("here")]),e._v(". Otherwise, it would be great to hear from you (optionally telling us a little about your situation).\n    ")]),e._v(" "),a("p"),a("form",[a("div",{staticClass:"input-group control"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.contact.name,expression:"contact.name"}],staticClass:"input",attrs:{type:"text",placeholder:"name"},domProps:{value:e.contact.name},on:{input:function(t){t.target.composing||e.$set(e.contact,"name",t.target.value)}}})])]),e._v("\n   \n  "),a("div",{staticClass:"input-group control has-icons-left has-icons-right"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.contact.email,expression:"contact.email"}],class:["input",e.isEmailValid("contact")?"is-success":"is-error"],attrs:{type:"text",placeholder:"email"},domProps:{value:e.contact.email},on:{input:function(t){t.target.composing||e.$set(e.contact,"email",t.target.value)}}}),e._v(" "),a("span",{staticClass:"icon is-small is-left"},[a("font-awesome-icon",{attrs:{icon:"envelope"}})],1),e._v(" "),a("span",{staticClass:"icon is-small is-right"},[e.isEmailValid("contact")?a("font-awesome-icon",{attrs:{icon:"check"}}):e._e(),e._v(" "),e.isEmailValid("contact")?e._e():a("font-awesome-icon",{attrs:{icon:"frown"}})],1)])]),e._v("\n   \n"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contact.content,expression:"contact.content"}],staticClass:"textarea",attrs:{placeholder:"",rows:"10"},domProps:{value:e.contact.content},on:{input:function(t){t.target.composing||e.$set(e.contact,"content",t.target.value)}}}),e._v(" "),a("button",{class:["GBW-btn-light","button","is-large","is-light","is-fullwidth",e.contact.waiting?"is-loading":""],attrs:{disabled:!e.isEmailValid("contact"),type:"submit"},on:{click:e.addContact}},[e._v(e._s(e.contact.status))]),e._v(" "),e.isEmailValid("contact")?e._e():a("p",{staticClass:"is-error has-text-centered is-size-7"},[e._v("(please enter a valid email address)")])]),e._v(" "),a("p")])]),e._v(" "),a("div",{staticClass:"GBW-footer-faux columns"},[a("div",{staticClass:"column is-1"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])]),e._v(" "),a("section",{staticClass:"hero is-fullheight GBW-div-invert",attrs:{id:"TOOLS"}},[e._m(2),e._v(" "),a("div",{staticClass:"GBW-footer-faux columns"},[a("div",{staticClass:"column is-1"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])]),e._v(" "),a("footer",{staticClass:"footer",attrs:{id:"GBW-footer"}},[e._m(3),e._v(" "),a("div",{staticClass:"is-pulled-left"},[a("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.actives.pane="#HOME"}}},[e._v("\n      ("),a("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(")\n    ")],1)])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("p",{staticClass:"GBW-pullquote-right"},[e._v("We do. And we love it.")]),e._v(" "),a("p",[e._v("Probably you know why you're here: you know that "),a("em",[e._v("something")]),e._v(" more can be done with your data.")]),e._v(" "),a("p",[e._v("Perhaps you've heard about what data are doing for other companies and you're curious. Or maybe you're already convinced that your data can work better for you -- clearer insight into your operation or analyses of your clientele, let's say. Or maybe you want them cleaned up to better support or improve your current operations and workflows. Maybe you know you want an in-house or public visualization or a clean and easy API that can automate reporting or periodic analyses or real-time alerting.")]),e._v(" "),a("p",[e._v("But who in your organization has the time for this?")]),e._v(" "),a("hr"),e._v(" "),a("p",{staticClass:"GBW-pullquote-left"},[e._v("Here's what we'll do.")]),e._v(" "),a("p",[e._v("First we'll meet and talk. It will feel a lot like an interview, maybe a little like an interrogation, but it's all in good fun. And vital to the understanding of your situation.")]),e._v(" "),a("p",[e._v("Then the meeting will end and we'll retreat and study what we've heard; investigate any technologies we don't already know, any data sources that might help; and revisit any work we've already done that might inform (or shortcut, even) your situation. Almost certainly there will be follow-ups. (Just emails, don't worry.)")]),e._v(" "),a("p",[e._v("After that – and this tends to depend on the situation – we will deliver ideas. Ideas about solutions. They might simply be recommendations, they might be sketches for custom solutions, or it might be a comprehensive and long-term analysis. We're a small, agile, and attentive firm, which means we really spend the time on *your* problems. Because they've become ours.")]),e._v(" "),a("hr"),e._v(" "),a("p",{staticClass:"GBW-pullquote-right"},[e._v("Then it's time for us to deliver.")]),e._v(" "),a("p",[e._v("In some cases we'll be done at this point. Otherwise it's probably time to meet again to set timelines, do technical demos, make more sketches together, and more questions. We want to get it right.")]),e._v(" "),a("p",[e._v("Reserving the right to follow-up and iterate, of course, we'll get you where you want to be. Possibly beyond.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All we need is "),t("em",[this._v("an")]),this._v(" email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using a DEA service (see Tools)")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title GBW-copy-default"},[e._v("\n    Tools\n    ")]),e._v(" "),a("h2",{staticClass:"subtitle has-text-grey-light"},[e._v("\n      There's a chance you don't need us at all! Here are some common tools for working with data, information, and the systems that consume and produce them.\n    ")]),e._v(" "),a("h4",{staticClass:"is-size-4"},[e._v("eMail Subaddressing")]),e._v(" "),a("nav",{staticClass:"level"},[a("div",{staticClass:"level-item"},[a("p",[a("a",{attrs:{href:"https://maildrop.cc/"}},[e._v("Maildrop")])])]),e._v(" "),a("div",{staticClass:"level-item has-text-centered"},[a("p",[a("a",{attrs:{href:"https://www.guerrillamail.com/"}},[e._v("Guerrilla Mail")])])]),e._v(" "),a("div",{staticClass:"level-item has-text-centered"},[a("p",[a("a",{attrs:{href:"http://www.fakeinbox.com/"}},[e._v("Fake Inbox")])])]),e._v(" "),a("div",{staticClass:"level-item has-text-centered"},[a("p",[a("a",{attrs:{href:"https://temp-mail.org/en/"}},[e._v("TempMail")])])])]),e._v(" "),a("p",{staticClass:"is-size-6 has-text-italic",staticStyle:{padding:"0 5em 2em 5em"}},[e._v("** There are "),a("a",{attrs:{href:"https://duckduckgo.com/?q=email+anonymous+service+free&t=h_&df=y&ia=web"}},[e._v("plenty of these services")]),e._v(" and we're not endorsing any of them. Also — honorable mention — it's less anonymous (for obvious reasons), but if your email provider supports "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Email_address#Subaddressing"}},[e._v("subaddressing")]),e._v(" you can do something like this: take your email address (\"Alphabet@gmail.com\" let's say) and you can endlessly just append a '+' (or, often, *any* character) and then a random string to the end of it and all of these addresses will also deliver to Alphabet@gmail.com (so Alphabet+123456@gmail.com or Alphabet+tebahplA@gmail.com and so on).")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-one-third"}),this._v(" "),t("div",{staticClass:"column is-one-third"}),this._v(" "),t("div",{staticClass:"column is-one-third has-text-right"})])}]};var v=a("VU/8")(u,p,!1,function(e){a("1FUi")},null,null).exports;s.default.use(o.a);var m=new o.a({routes:[{path:"/",name:"Default",component:v}]}),h=a("PJh5"),f=a.n(h),y=a("rNNc"),g=a("WiKS"),b=a.n(g),_=(a("k5jX"),a("mM94")),w=a("bm7V"),j=a.n(w),C=a("hcVv"),k=a("wmKo"),E=a.n(k),x=a("yviF"),z=a.n(x),O=(a("881v"),a("C/JF")),S=a("fhbW"),N=a("1e6/");a.d(t,"db",function(){return B}),s.default.use(C),s.default.use(E.a),O.c.add(S.a),O.c.add(S.d),O.c.add(S.c),O.c.add(S.b),s.default.component("font-awesome-icon",N.a);var W=z.a.initializeApp({databaseURL:"https://gbw1-28f50.firebaseio.com",projectId:"gbw1-28f50"}),B=z.a.firestore();W.firestore().settings({});"prod"==l.a.mode?l.a.prod:l.a.dev;s.default.component("vue-headful",b.a),s.default.use(y.a),s.default.use(_.a),s.default.use(j.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),s.default.config.productionTip=!1,Object.defineProperty(s.default.prototype,"$MOMENT",{value:f.a}),new s.default({el:"#app",router:m,template:"<App/>",components:{App:i}})},kz8L:function(e,t){},uslO:function(e,t,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return a(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="uslO"},xIKa:function(e,t){e.exports={mode:"dev",prod:{},dev:{}}}},["NHnr"]);
//# sourceMappingURL=app.cd16f703e62d209915d1.js.map