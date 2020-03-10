<template>
<div id="GBW-vue-root" :style="'font-family:'+FONT">
  <vue-particles style="position:absolute;top: 0;left: 0;width: 100%;height: 100%;"
  color="#dedede"
  :particleOpacity="0.2"
  :particlesNumber="101"
  shapeType="edge"
  :particleSize="3"
  linesColor="#dedede"
  :linesWidth="1"
  :lineLinked="true"
  :lineOpacity="0.2"
  :linesDistance="150"
  :moveSpeed="1"
  :hoverEffect="false"
  hoverMode="grab"
  :clickEffect="false"
  clickMode="push"
  />
  <vue-headful :title="page.nameOfThing" description="fxsxxxrrrre" />
  <nav id="GBW-nav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarGBW">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarGBW" class="navbar-menu" :class="[showNav?'is-active':'',showNav?'GBW-div-secondary':'']">
      <div class="navbar-start">
        <a @click.prevent="actives.pane=pane.slug" v-for="pane in page.panes" class="navbar-item">
          {{pane.label}}
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          
        </div>
      </div>
    </div>
  </nav>

  <!--
  ..........................................................         __ __  __  ______  __  _________
  ..........................................................      __/ // /_/ / / / __ \/  |/  / ____/
  ..........................................................     /_  _  __/ /_/ / / / / /|_/ / __/
  ..........................................................    /_  _  __/ __  / /_/ / /  / / /___
  ..........................................................     /_//_/ /_/ /_/\____/_/  /_/_____/
  ..........................................................
  -->
  <section id="HOME" class="hero is-fullheight GBW-div-splash">
    <div class="columns is-vcentered" style="padding-top:12%;">
    <div class="column is-1"></div NB=".column">
    <div class="column is-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
          {{nameOfThing}}
          <!-- TENIS? -->
          </h1>
          <h2 class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h2>
    <!-- <p class="title GBW-copy-default">data-focused consulting and development</p> -->
<h3 class="subtitle is-size-3">
  <button @click="actives.pane='#PRESCREEN'" class="button is-large GBW-btn-light" type="submit">Prescreen Us!</button>
</h3>
<!-- <div v-for="(agency, idx) in prescreens" :key="idx" class="card">
  {{agency.email}}
</div NB=".card"> -->

        </div>
      </div NB=".hero-body">
    </div ".column">
  <!-- <div class="column is-1"></div NB=".column"> -->
  <div class="column is-5 has-text-centered">
    
    <figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      <!-- <img id="GBW-iso-logo" src="@/assets/construction-tower-blueprint.svg"> -->
      <!-- <img src="@/assets/logo-note.svg"> -->
    </figure>
  </div ".column">
</div NB=".columns">
</section>


<!-- 
    ••••••••••••••••• +++++++++++============++++++++++ •••••• ____  ____  ___________ __________  _____________   __
   ••••••••••••••••• +++++++++++============++++++++++ •••••• / __ \/ __ \/ ____/ ___// ____/ __ \/ ____/ ____/ | / /
  ••••••••••••••••• +++++++++++============++++++++++ •••••• / /_/ / /_/ / __/  \__ \/ /   / /_/ / __/ / __/ /  |/ /
 ••••••••••••••••• +++++++++++============++++++++++ •••••• / ____/ _, _/ /___ ___/ / /___/ _, _/ /___/ /___/ /|  /
••••••••••••••••• +++++++++++============++++++++++ •••••• /_/   /_/ |_/_____//____/\____/_/ |_/_____/_____/_/ |_/
 -->



<!-- 
    fontsel.fontsel.fontsel.fontsel.fontsel.fontsel. >> __________  _   ________   _____ ________
   fontsel.fontsel.fontsel.fontsel.fontsel.fontsel. >> / ____/ __ \/ | / /_  __/  / ___// ____/ /
  fontsel.fontsel.fontsel.fontsel.fontsel.fontsel. >> / /_  / / / /  |/ / / /     \__ \/ __/ / /
 fontsel.fontsel.fontsel.fontsel.fontsel.fontsel. >> / __/ / /_/ / /|  / / /     ___/ / /___/ /___
fontsel.fontsel.fontsel.fontsel.fontsel.fontsel. >> /_/    \____/_/ |_/ /_/     /____/_____/_____/
<nav class="level">
  <div class="level-left">
    <div v-for="font in fonts" class="level-item">
      <p @click="FONT=font" :class="['KILLME','subtitle','is-7',font==FONT?'has-text-weight-bold':'']">
        {{font}}
      </p>
    </div>
  </div>
</nav>
 -->


<section id="PRESCREEN" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    What's Happening?
    </h1>

    <p>
       Tell us about your data problem and we will write back with our initial thoughts. Very seriously - no hard sell, no fee, just a conversation about your situation. Think of it as free data therapy!</p>
       <p>An actual human being is going to read what you write and reply. (So of course don't put any sensitive information in here - just describe what's bugging you about your data situation).
    </p>

    <p>All we need is <em>an</em> email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using any of these DEA services**:</p>
<p>&nbsp;</p>
    <nav class="level">
  <!-- Left side -->
    <div class="level-item">
      <p>
        <a href="https://maildrop.cc/">Maildrop</a>
      </p>
    </div>
    <div class="level-item has-text-centered"><p><a href="https://www.guerrillamail.com/">Guerrilla Mail</a></p></div>
<div class="level-item has-text-centered"><p><a href="http://www.fakeinbox.com/">Fake Inbox</a></p></div>
<div class="level-item has-text-centered"><p><a href="https://temp-mail.org/en/">TempMail</a></p></div>
</nav>
<p style="padding:0 5em 2em 5em;" class="is-size-6 has-text-italic">** There are <a href="https://duckduckgo.com/?q=email+anonymous+service+free&t=h_&df=y&ia=web">plenty of these services</a> and we're not endorsing any of them. Also — honorable mention — it's less anonymous (for obvious reasons), but if your email provider supports <a href="https://en.wikipedia.org/wiki/Email_address#Subaddressing">subaddressing</a> you can do something like this: take your email address ("Alphabet@gmail.com" let's say) and you can endlessly just append a '+' (or, often, *any* character) and then a random string to the end of it and all of these addresses will also deliver to Alphabet@gmail.com (so Alphabet+123456@gmail.com or Alphabet+tebahplA@gmail.com and so on).</p>

<p>
  <form>
  <div class="input-group control has-icons-left has-icons-right">
    <div class="field">
    <input v-model="prescreen.email" :class="['input',isEmailValid('prescreen')?'is-success':'is-error']" type="text" placeholder="Email">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
    <span class="icon is-small is-right">
      <font-awesome-icon v-if="isEmailValid('prescreen')" icon="check" />
      <font-awesome-icon v-if="!isEmailValid('prescreen')" icon="frown" />
    </span>
</div NB=".field">
  </div NB=".input-group">
  &nbsp;
<textarea  v-model="prescreen.content" class="textarea" placeholder="" rows="10"></textarea>
<button @click="addPreScreen" :class="['GBW-btn-light','button','is-large','is-light','is-fullwidth',prescreen.waiting?'is-loading':'']" :disabled="!isEmailValid('prescreen')" type="submit">{{prescreen.status}}</button>
<p v-if="!isEmailValid('prescreen')" class="is-error has-text-centered is-size-7">(please enter a valid email address)</p>
</form>

</p>

  </div>
</div>
<div class="GBW-footer-faux columns">
  <div class="column is-1">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div>
</div NB="GBW-footer-faux">
</section>



<!--
    ---------++++++++++++============************   ___    ____  ____  ____  ____  ___   ________  __
   ---------++++++++++++============************   /   |  / __ \/ __ \/ __ \/ __ \/   | / ____/ / / /
  ---------++++++++++++============************   / /| | / /_/ / /_/ / /_/ / / / / /| |/ /   / /_/ /
 ---------++++++++++++============************   / ___ |/ ____/ ____/ _, _/ /_/ / ___ / /___/ __  /
---------++++++++++++============************   /_/  |_/_/   /_/   /_/ |_|\____/_/  |_\____/_/ /_/
-->
<section id="APPROACH" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    Our Approach
    </h1>
<p class="GBW-pullquote-right">We do. And we love it.</p>
<p>Probably you know why you're here: you know that <em>something</em> more can be done with your data.</p>
<p>Perhaps you've heard about what data are doing for other companies and you're curious. Or maybe you're already convinced that your data can work better for you -- clearer insight into your operation or analyses of your clientele, let's say. Or maybe you want them cleaned up to better support or improve your current operations and workflows. Maybe you know you want an in-house or public visualization or a clean and easy API that can automate reporting or periodic analyses or real-time alerting.</p>
<p>But who in your organization has the time for this?</p>
<hr/>
<p class="GBW-pullquote-left">Here's what we'll do.</p>
<p>First we'll meet and talk. It will feel a lot like an interview, maybe a little like an interrogation, but it's all in good fun. And vital to the understanding of your situation.</p>
<p>Then the meeting will end and we'll retreat and study what we've heard; investigate any technologies we don't already know, any data sources that might help; and revisit any work we've already done that might inform (or shortcut, even) your situation. Almost certainly there will be follow-ups. (Just emails, don't worry.)</p>
<p>After that – and this tends to depend on the situation – we will deliver ideas. Ideas about solutions. They might simply be recommendations, they might be sketches for custom solutions, or it might be a comprehensive and long-term analysis. We're a small, agile, and attentive firm, which means we really spend the time on *your* problems. Because they've become ours.</p>
<hr/>
<p class="GBW-pullquote-right">Then it's time for us to deliver.</p>
<p>In some cases we'll be done at this point. Otherwise it's probably time to meet again to set timelines, do technical demos, make more sketches together, and more questions. We want to get it right.</p>
<p>Reserving the right to follow-up and iterate, of course, we'll get you where you want to be. Possibly beyond.</p>

  </div>
</div>
<div class="GBW-footer-faux columns">
  <div class="column is-1">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div>
</div NB="GBW-footer-faux">
</section>

<!-- 
    about.about.aboutabout.about.aboutabout.about.about:: ___    ____  ____  __  ________
   about.about.aboutabout.about.aboutabout.about.about:: /   |  / __ )/ __ \/ / / /_  __/
  about.about.aboutabout.about.aboutabout.about.about:: / /| | / __  / / / / / / / / /
 about.about.aboutabout.about.aboutabout.about.about:: / ___ |/ /_/ / /_/ / /_/ / / /
about.about.aboutabout.about.aboutabout.about.about:: /_/  |_/_____/\____/\____/ /_/
 -->
<section id="ABOUT" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    About Us
    </h1>
    
<p>{{nameOfThing}} is a data-focused development and consulting firm devoted to helping our clients solve data problems and maximize data capability. We can clean, fix, and refine your data. We can optimize them. We can find external data that augment or inform yours. And we can build all manner of custom applications that present your own data back to you exactly how you need it. </p>
<p>We deliver solutions that allow you to focus on what you do best, on top of the powerful tool that is your own data.</p>


  </div>
</div>
<div class="GBW-footer-faux columns">
  <div class="column is-1">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div>
</div NB="GBW-footer-faux">
</section>

<!-- 
     contact.contact.contact.contact........... __ __  __________  _   ___________   ____________
  contact.contact.contact.contact........... __/ // /_/ ____/ __ \/ | / /_  __/   | / ____/_  __/
 contact.contact.contact.contact........... /_  _  __/ /   / / / /  |/ / / / / /| |/ /     / /
contact.contact.contact.contact........... /_  _  __/ /___/ /_/ / /|  / / / / ___ / /___  / /
 contact.contact.contact.contact........... /_//_/  \____/\____/_/ |_/ /_/ /_/  |_\____/ /_/
 -->
<section id="CONTACT" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    Contact Us
    </h1>

    <p>
       If you're not sure you want to talk to us (!) feel free to use our anonymous prescreen form <a @click.prevent="actives.pane='#PRESCREEN'" href="#">here</a>. Otherwise, it would be great to hear from you (optionally telling us a little about your situation).
    </p>

    <p>

  <form>

    <div class="input-group control">
    <div class="field">
    <input v-model="contact.name" class="input" type="text" placeholder="name">
</div NB=".field">
  </div NB=".input-group">
  &nbsp;
  <div class="input-group control has-icons-left has-icons-right">
    <div class="field">
    <input v-model="contact.email" :class="['input',isEmailValid('contact')?'is-success':'is-error']" type="text" placeholder="email">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
    <span class="icon is-small is-right">
      <font-awesome-icon v-if="isEmailValid('contact')" icon="check" />
      <font-awesome-icon v-if="!isEmailValid('contact')" icon="frown" />
    </span>
</div NB=".field">
  </div NB=".input-group">
  &nbsp;
<textarea  v-model="contact.content" class="textarea" placeholder="" rows="10"></textarea>
<button @click="addContact" :class="['GBW-btn-light','button','is-large','is-light','is-fullwidth',contact.waiting?'is-loading':'']" :disabled="!isEmailValid('contact')" type="submit">{{contact.status}}</button>
<p v-if="!isEmailValid('contact')" class="is-error has-text-centered is-size-7">(please enter a valid email address)</p>
</form>

</p>

  </div>
</div>
<div class="GBW-footer-faux columns">
  <div class="column is-1">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div>
</div NB="GBW-footer-faux">
</section>

<!-- 
  •••••••••••••••••••••••••••••••••••••••••••••••••    __________  ____  __   _____
 •••••••••••••••••••••••••••••••••••••••••••••••••    /_  __/ __ \/ __ \/ /  / ___/
  •••••••••••••••••••••••••••••••••••••••••••••••••    / / / / / / / / / /   \__ \
 •••••••••••••••••••••••••••••••••••••••••••••••••    / / / /_/ / /_/ / /______/ /
•••••••••••••••••••••••••••••••••••••••••••••••••    /_/  \____/\____/_____/____/
 -->
<section id="TOOLS" class="hero is-fullheight GBW-div-invert">
<div class="hero-body">
  <div class="container">

    <h1 class="title GBW-copy-default">
    Tools
    </h1>
    <h2 class="subtitle has-text-grey-light">
      There's a chance you don't need us at all! Here are some common tools for working with data, information, and the systems that consume and produce them.
    </h2>


  
  </div NB=".container">
</div NB=".hero-body">
<div class="GBW-footer-faux columns">
  <div class="column is-1">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div>
</div NB="GBW-footer-faux">
</section>


<footer class="footer" id="GBW-footer">
  <div class="columns">
    
  <div class="column is-one-third"></div NB=".column">
<div class="column is-one-third">
<!-- middl -->
</div NB=".column">
<div class="column is-one-third has-text-right">
  <!-- logo: <a href="https://www.vecteezy.com/vector-art/157676-music-notes">Music Notes by Vecteezy</a> -->
</div NB=".column">
</div NB=".columns">
  <div class="is-pulled-left">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div NB="is-pulled-left">
</footer>
</section>

<!-- 
    •••••••••••••••••••••••••••••••••••••••••••••••••••••• __  __________________
   •••••••••••••••••••••••••••••••••••••••••••••••••••••• /  |/  / ____/_  __/   |
  •••••••••••••••••••••••••••••••••••••••••••••••••••••• / /|_/ / __/   / / / /| |
 •••••••••••••••••••••••••••••••••••••••••••••••••••••• / /  / / /___  / / / ___ |
•••••••••••••••••••••••••••••••••••••••••••••••••••••• /_/  /_/_____/ /_/ /_/  |_|

https://www.freepik.com/free-vector/skyscraper-construction-isometric-composition_6405847.htm#page=1&query=isometric scene&position=7

https://www.freepik.com/free-vector/road-collision-accident-isometric_6088354.htm#page=1&query=isometric scene&position=39

https://www.freepik.com/free-vector/living-room-interior-isometric-scene_6147646.htm#page=2&query=isometric+scene&position=21

https://www.freepik.com/free-vector/home-workplace-isometric-scene_6147649.htm#page=2&query=isometric+scene&position=32

  -->

</div NB="#gbw-vue-root">
</template>

<script>
import CONFIGG from '../Config.json';
import EMAILJS from 'emailjs-com';

import { db } from '../main'

export default {
  components: {
  },
  name: "Volley Consulting",
  created: function() {
    this.CONFIG = CONFIGG.mode=="prod"?CONFIGG.prod:CONFIGG.dev
    this.actives = {
        pane: (this.$route.params.pane) ? this.$route.params.pane : '#HOME',
        basemap: (this.$route.params.basemap) ? this.$route.params.basemap : null,
        updatekey: (this.$route.params.updatekey) ? this.$route.params.updatekey : null,
        geom: null
      }
  },
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.keyMonitor)
  },
  mounted: function() {

    window.document.body.onscroll = ()=>{
    this.actives.pane=null
}

  },
  firestore () {
    return {
      prescreens:db.collection('prescreens')
    }
  },
  data() {
    return {
      FONT:'Karla',
//       fonts:[
//       'Abel',
// 'Alatsi',
// 'Arimo',
// 'Be Vietnam',
// 'Darker Grotesque',
// 'Gayathri',
// 'Hammersmith One',
// 'Hind',
// 'Karla',
// 'Krub',
// 'Kulim Park',
// 'Lato',
// 'Nunito',
// 'Open Sans',
// 'PT Sans Narrow',
// 'Sawarabi Gothic',
// 'Source Sans Pro',
// 'Titillium Web',
// 'Varela Round',
// 'Voltaire'
//       ],
      nameOfThing:'%3CVo||eY%3E',
      CONFIG: null,
      showNav: false,
      loadings: { maplayer: false, app: false, popupopen: false },
      page: {
        splayed: false,
        panes: [{
          label: '',
          slug: '#HOME'
        },
        // { label: 'M1', slug: '#M1' }, 
        { label: 'Your Situation', slug: '#PRESCREEN' },
        { label: 'About Us',slug: '#ABOUT' },
        { label: 'Our Approach',slug: '#APPROACH' },
        { label: 'Contact Us',slug: '#CONTACT' },
        { label: 'Tools',slug: '#TOOLS' }]
      },
      project: { shorthand: "Volley" },
      console: { msgs: [] },
      actives: { pane: 'default'},
      prescreen: {status:"Submit",waiting:false,"email":null,"content":null,"timestamp":new Date()},
      contact: {status:"Submit",waiting:false,"email":null,"name":null,"content":null,"timestamp":new Date()}
    };
  },
  methods: {
    isEmailValid: function(w) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if(w=='prescreen'){
            return (this.prescreen.email == "")? "" : (reg.test(this.prescreen.email)) ? true : false;}
            else if(w=='contact'){
              return (this.contact.email == "")? "" : (reg.test(this.contact.email)) ? true : false;
            }
    },
    sendEmailPrescreen: function() {
      let O={reply_to:this.prescreen.email,prescreenBody:this.prescreen.content}
      console.log(O)
      EMAILJS.send('gmail', 'gbw_prescreen',O , 'user_B6haXsW376PCoTkyZ4eYy')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.prescreen.status='tnx!'
        }, (error) => {
            console.log('FAILED...', error);
            this.prescreen.status='plz try again'
        })
        .finally(()=>{
        this.prescreen.waiting=false
      })
    },
    sendEmailContact: function() {
      let O={reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name}
      console.log(O)
      EMAILJS.send('gmail', 'gbw_contact',O , 'user_B6haXsW376PCoTkyZ4eYy')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.contact.status='tnx!'
        }, (error) => {
            console.log('FAILED...', error);
            this.contact.status='plz try again'
        })
        .finally(()=>{
        this.contact.waiting=false
      })
    },
      addPreScreen: function (name, image) {
        this.prescreen.waiting=true
      
      db.collection('prescreens').add({replied:false,reply_to:this.prescreen.email,prescreenBody:this.prescreen.content})
      .then(ref => {
this.sendEmailPrescreen()
        console.log("ref", ref);

})
    },
      addContact: function (name, image) {
        this.contact.waiting=true
      
      db.collection('contacts').add({replied:false,reply_to:this.contact.email,contactBody:this.contact.content,name:this.contact.name})
      .then(ref => {
this.sendEmailContact()
        console.log("ref", ref);

})
    },
    keyMonitor: function(e) {

      if (e.altKey) { this.page.splayed = !this.page.splayed }
      if (e.key.toLowerCase() == 'escape') { this.modals = { settings: false } }

    }

  } //methods
  ,watch: {
    "actives.pane":{
      handler: function (vnew, vold) {
        // we intercept HOME so we zoom to *actual* top that includes nav
        let target = vnew=='#HOME'?'#GBW-nav':vnew
        this.$scrollTo(target)
        
      }
    }//actives.pane
  } //watch
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style></style>
