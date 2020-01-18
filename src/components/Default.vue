<template>
<div id="GBW-vue-root">
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
  <button @click="actives.pane='#PRESCREEN'" class="button is-large" type="">Prescreen Us!</button>
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
<section id="PRESCREEN" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    What's Happening?
    </h1>

    <p>
       Tell us about your data problem and we will write back with our initial thoughts. Very seriously - no hard sell, no fee, just a conversation about your situation. Think of it as free data therapy :-) An actual human being is going to read what you write and reply. (So of course don't put any sensitive information in here - just describe what's bugging you about your data situation).
    </p>

    <p>All we need is <em>an</em> email address to which we reply, so if you're leery of writing into a website, please feel free to use a burner address using any of these services:</p>

    <ul>
      <li><a href="https://maildrop.cc/">Maildrop</a></li>
        <li><a href="https://www.guerrillamail.com/">Guerilla Mail</a></li>
        <li><a href="http://www.fakeinbox.com/">Fake Inbox</a></li>
        <li><a href="https://temp-mail.org/en/">TempMail</a></li>
        <li>(honorable mention) It's less anonymous (for obvious reasons), but if your email provider supports "<a href="https://en.wikipedia.org/wiki/Email_address#Subaddressing">subaddressing</a>" you can do something like this: take your email address ("Alphabet@gmail.com" let's say) and you can endlessly just append a '+' and then a random string to the end of it and all of these addresses will also deliver to Alphabet@gmail.com (so Alphabet+123456@gmail.com or Alphabet+tebahplA@gmail.com and so on).</li>
      </ul>
    
<p>
  <form>
  <div class="input-group control has-icons-left has-icons-right">
    <div class="field">
    <input v-model="prescreen.email" :class="['input',isEmailValid()?'is-success':'is-error']" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
    <span class="icon is-small is-right">
      <font-awesome-icon v-if="isEmailValid()" icon="check" />
      <font-awesome-icon v-if="!isEmailValid()" icon="frown" />
    </span>
</div NB=".field">
  </div NB=".input-group">
  &nbsp;
<textarea  v-model="prescreen.content" class="textarea" placeholder="" rows="10"></textarea>
<button @click="addPreScreen" :class="['button','is-large','is-dark','is-fullwidth',prescreen.waiting?'is-loading':'']" :disabled="!isEmailValid()" type="submit">{{prescreen.status}}</button>
<p v-if="!isEmailValid()" class="is-error has-text-centered is-size-7">(please enter a valid email address)</p>
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
     contact.contact.contact.contact.contact.contact........... __ __  __________  _   ___________   ____________
  contact.contact.contact.contact.contact.contact........... __/ // /_/ ____/ __ \/ | / /_  __/   | / ____/_  __/
 contact.contact.contact.contact.contact.contact........... /_  _  __/ /   / / / /  |/ / / / / /| |/ /     / /
contact.contact.contact.contact.contact.contact........... /_  _  __/ /___/ /_/ / /|  / / / / ___ / /___  / /
 contact.contact.contact.contact.contact.contact........... /_//_/  \____/\____/_/ |_/ /_/ /_/  |_\____/ /_/
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
    <input v-model="contact.email" :class="['input',isEmailValid()?'is-success':'is-error']" type="email" placeholder="email">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
    <span class="icon is-small is-right">
      <font-awesome-icon v-if="isEmailValid()" icon="check" />
      <font-awesome-icon v-if="!isEmailValid()" icon="frown" />
    </span>
</div NB=".field">
  </div NB=".input-group">
  &nbsp;
<textarea  v-model="contact.content" class="textarea" placeholder="" rows="10"></textarea>
<button @click="addContact" :class="['button','is-large','is-dark','is-fullwidth',contact.waiting?'is-loading':'']" :disabled="!isEmailValid()" type="submit">{{contact.status}}</button>
<p v-if="!isEmailValid()" class="is-error has-text-centered is-size-7">(please enter a valid email address)</p>
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
    
<p>Probably you know why you're here: you know that something more can be done with your data.</p>
<p>Perhaps you've heard about what data are doing for other companies and you're curious. Or maybe you're already convinced that your data can work better for you -- clearer insight into your operation or analyses of your clientele, let's say. Or maybe you want them cleaned up to better support or improve your current operations and workflows. Maybe you know you want an in-house or public visualization or a clean and easy API that can automate reporting or periodic analyses or real-time alerting.</p>
<p>But who in your organization has the time for this?</p>
<p>We do. And we love it.</p>
<p>Here's what we'll do: we'll meet and talk. It will feel a lot like an interview, maybe a little like an interrogation, but it's all in good fun. And vital to the understanding of your situation.</p>
<p>Then the meeting will end and we'll retreat and study what we've heard; investigate any technologies we don't already know, any data sources that might help; and revisit any work we've already done that might inform (or shortcut, even) your situation.</p>
<p>Almost certainly there will be follow-ups. (Just emails, don't worry.)</p>
<p>After that – and this tends to depend on the situation – we will deliver ideas. Ideas about solutions. They might simply be recommendations, they might be sketches for custom solutions, or it might be a comprehensive and long-term analysis. We're a small, agile, and attentive firm, which means we really spend the time on *your* problems. Because they've become ours.</p>
<p>In some cases we'll be done at this point. Otherwise it's probably time to meet again to set timelines, do technical demos, make more sketches together, and more questions. We want to get it right.</p>
<p>Then it's time for us to deliver. Reserving the right to follow-up and iterate, of course, we'll get you where you want to be. Possibly beyond.</p>

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
    ++++++++++++++++++=======............++++++++++++++++++=======.........,,,,,,,, ___    ____  ____  __  ________
   ++++++++++++++++++=======............++++++++++++++++++=======.........,,,,,,,, /   |  / __ )/ __ \/ / / /_  __/
  ++++++++++++++++++=======............++++++++++++++++++=======.........,,,,,,,, / /| | / __  / / / / / / / / /
 ++++++++++++++++++=======............++++++++++++++++++=======.........,,,,,,,, / ___ |/ /_/ / /_/ / /_/ / / /
++++++++++++++++++=======............++++++++++++++++++=======.........,,,,,,,, /_/  |_/_____/\____/\____/ /_/
 -->
<section id="ABOUT" class="hero is-fullheight GBW-div-bold">
<div class="hero-body">
  <div class="container">
    <h1 class="title GBW-copy-default">
    About Us
    </h1>
    
<p>{{nameOfThing}} is a data-focused development and consulting firm devoted to helping our clients solve data problems and maximize data capability. We can clean, fix, and refine your data. We can optimize them. We can find external data that augment or inform yours. And we can build all manner of customer applications that present your own data back to you exactly how you need it. </p>
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

<div class="columns" style="margin-bottom:5em;">
<div class="column"><p class="subtitle">OpenRefine</p>
<p><figure style="margin-right:1em;" class="image is-96x96 is-pulled-left"><img class="other-logo" src="@/assets/logo-ext-refine.png"></figure><a target="_blank" href="https://openrefine.org/">OpenRefine</a> is a data scrubbing <em>monster</em>. It finds duplicates for you; it normalizes same-but-not values for you (think "Mr." vs "Mister" or "1001" as a string vs 1001 as an integer); it does semantic lookups and associations against third-party APIs and sources (think address lookups [geocoding] or name searches against Wikipedia). It does much more than this. For real!</p>
</div NB=".column">

</div NB=".columns">
<div class="columns" style="margin-bottom:5em;">
<div class="column"><p class="subtitle">IFTTT, Parabola.io, Pipefy</p>
<p><figure style="margin-right:1em;" class="image is-64x64 is-pulled-left"><img class="other-logo" src="@/assets/logo-ext-ifttt.svg"></figure><a target="_blank" href="">IFTTT</a>, <a target="_blank" href="">Parabola.io</a>, nad <a target="_blank" href="https://www.pipefy.com/">Pipefy</a> are all task automators, at various degrees of sophistication. In the absence of a custom API designed to facilitate data-based visualization, analysis, or interrogation, somewhat minimal triggers and workflows can be set up in one or all of these platforms that can liven up your assets and begin making them do things for you.</p>
</div NB=".column">
</div NB=".columns">

<div class="columns" style="margin-bottom:5em;">
<div class="column"><p class="subtitle">Carto</p>
<p><figure style="margin-right:1em;" class="image is-64x64 is-pulled-left"><img class="other-logo" src="@/assets/logo-ext-carto.svg"></figure>Working with data that have implicit or explicit spatial attributes opens up fantastic capability and faculty. Getting there can be laborious, however, and <a target="_blank" href="https://carto.com/">Carto.com</a> endeavors to abstract a lot of the grittier aspects of doing spatial data work. Pro tip, though? All the powers Carto injects into using spatial data -- <a target="_blank" href="https://carto.com/developers">query, storage, an automatic API</a> -- can also featurize plain old tabular data as well. You don't <em>have</em> to map them.</p>
</div NB=".column">
<div class="column"><p class="subtitle">QGIS</p><p><figure style="margin-right:1em;" class="image is-64x64 is-pulled-right"><img class="other-logo" src="@/assets/logo-ext-qgis.svg"></figure><a target="_blank" href="">QGIS</a> is a legendary GIS project - software for the visualization, manipulation, and analysis of spatial data. Associate your customers' addresses with coordinates, connect their zip codes to Census demographics, aggregate sales data per retail location -- once your data are implicitly or explicitly spatial you're open to a new world of analysis and visualization, and QGIS is a 100% free and open source software that makes it easy (easi<em>er</em>, anyway).</p></div NB=".column">
  <div class="column"><p class="subtitle">LibreOffice</p>
  <p><figure style="margin-right:1em;" class="image is-24x24 is-pulled-left"><img class="other-logo" src="https://bulma.io/images/placeholders/24x24.png"></figure><a target="_blank" href="">LibreOffice</a> is a bit of an honorable mention, really. In fact we don't recommend doing data work at all in this alternative to the Microsoft Office suite, but it's a legendary project that has brought Office capabilities to countless users for the absolute price of zero dollars.</p>
</div NB=".column">
</div NB=".columns">
  
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
  name: "GBW",
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
      nameOfThing:'%3CGBW%3E',
      CONFIG: null,
      showNav: false,
      loadings: { maplayer: false, app: false, popupopen: false },
      page: {
        splayed: false,
        panes: [{
          label: 'Home',
          slug: '#HOME'
        },
        // { label: 'M1', slug: '#M1' }, 
        { label: 'Your Situation', slug: '#PRESCREEN' },
        { label: 'About Us',slug: '#ABOUT' },
        { label: 'Our Approach',slug: '#APPROACH' },
        { label: 'Contact Us',slug: '#CONTACT' },
        { label: 'Tools',slug: '#TOOLS' }]
      },
      project: { shorthand: "GBW" },
      console: { msgs: [] },
      actives: { pane: 'default'},
      prescreen: {status:"Submit",waiting:false,"email":null,"content":null,"timestamp":new Date()},
      contact: {status:"Submit",waiting:false,"email":null,"name":null,"content":null,"timestamp":new Date()}
    };
  },
  methods: {
    isEmailValid: function() {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return (this.prescreen.email == "")? "" : (reg.test(this.prescreen.email)) ? true : false;
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
