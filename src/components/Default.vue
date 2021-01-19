<template>
  <div id="GBW-vue-root" :style="`font-family:${FONT}`" :class="[page.schema=='light'?'G-GBW-schema-light':'G-GBW-schema-dark']">
    <vue-particles style="position:absolute;top: 0;left: 0;width: 100%;height: 100%;" :color="page.schema=='light'?'#372554':'#dedede'" :particleOpacity="0.2" :particlesNumber="101" shapeType="edge" :particleSize="3" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.2" :linesDistance="150" :moveSpeed="1" :hoverEffect="false" hoverMode="grab" :clickEffect="false" clickMode="push" />
    <!-- 

<title></title>

    <meta itemprop="name">
    <meta property="og:title">
    <meta name="twitter:title">
    <meta name="description"/>
    <meta itemprop="description">
    <meta property="og:description">
    <meta name="twitter:description">

   -->
    <vue-headful :title="page.nameOfThing" :description="page.descriptionOfThing" :keywords="page.keywordsForThing" url="http://volleyconsulting.com" , lang='en' />
    <nav id="GBW-nav" :class="['navbar',page.schema=='light'?'N-GBW-schema-light':'N-GBW-schema-dark']" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarGBW">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarGBW" class="navbar-menu" :class="[showNav?'is-active':'',showNav?'GBW-div-secondary':'']">
        <div class="navbar-start">
          <div @click="page.schema=page.schema=='light'?'dark':'light'" class="navbar-item">
            <font-awesome-icon icon="moon" />
          </div>
          <a @click.prevent="actives.pane=pane.slug" v-for="pane in page.panes" class="navbar-item">
          {{pane.label}}
        </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item calm">
            <!-- <button @click="actives.pane='#PRESCREEN'" class="button is-large GBW-btn" type="submit">Prescreen Us!</button> -->
            <button @click="modals.prescreen=true" class="button is-large GBW-btn" type="submit">Prescreen Us!</button>
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
  <section id="HOME_OG" class="hero is-fullheight GBW-div-splash">
    <div class="columns is-vcentered" style="padding-top:12%;">
    <div class="column is-1"></div NB=".column">
    <div class="column is-6">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
          {{nameOfThing}}
          </h1>
          <h2 class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h2>
    <p class="title  ">data-focused consulting and development</p>
<h3 class="subtitle is-size-3">
  <button @click="actives.pane='#PRESCREEN'" class="button is-large GBW-btn-light" type="submit">Prescreen Us!</button>
</h3>
        </div>
      </div NB=".hero-body">
    </div ".column">
  <div class="column is-5 has-text-centered">
    
    <figure class="image is-128x128">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
  </div ".column">
</div NB=".columns">
</section>
  -->
    <!--
    ---------++++++++++++============************   ___    ____  ____  ____  ____  ___   ________  __
   ---------++++++++++++============************   /   |  / __ \/ __ \/ __ \/ __ \/   | / ____/ / / /
  ---------++++++++++++============************   / /| | / /_/ / /_/ / /_/ / / / / /| |/ /   / /_/ /
 ---------++++++++++++============************   / ___ |/ ____/ ____/ _, _/ /_/ / ___ / /___/ __  /
---------++++++++++++============************   /_/  |_/_/   /_/   /_/ |_|\____/_/  |_\____/_/ /_/
-->
    <!-- <section id="APPROACH" :class="['hero','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']"> -->
    <section id="HOME" :class="['hero','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']">
      <div class="hero-body">
        <div class="container">
          <!-- <h1 class="title GBW-copy-default">
    Our Approach
    </h1> -->
          <div class="columns">
            <div class="column is-one-half">
              <p class="has-text-weight-bold pl-0 is-size-3">You know that <em>something</em> more can be done with your data.</p>
              <p class="pt-6 is-size-5">Perhaps you've heard about what data are doing for other companies and you're curious. Or maybe you're already convinced that your data can work better for you -- clearer insight into your operation or analyses of your clientele, let's say. Or maybe you want them cleaned up to better support or improve your current operations and workflows. Maybe you know you want an in-house or public visualization or a clean and easy API that can automate reporting or periodic analyses or real-time alerting.</p>
              <p class="is-size-5">But who in your organization has the time and acumen for this?</p>
              <p class="has-text-weight-bold pl-0 pt-6 is-size-3">We do.</p>
            </div>
            <div v-if="page.schema=='dark'" class="pt-6 GBW-branding column is-one-half has-text-centered"><img width=250px id="GBW-iso-logo" src="@/assets/volley-logo-light.svg"></img>
              <p>Volley</p>
              <p style="padding-top:0;font-variant:small-caps;">Consulting</p>
            </div>
            <div v-else class="pt-6 GBW-branding column is-one-half has-text-centered"><img width=250px id="GBW-iso-logo" src="@/assets/volley-logo-dark.svg"></img>
              <p>Volley</p>
              <p style="padding-top:0;font-variant:small-caps;">Consulting</p>
            </div>
          </div nb="/.columns">
          <div class="columns">
            <div class="column is-one-half">
            </div>
            <div class="column"></div>
          </div nb="/.columns">
          <!-- <p class="GBW-pullquote-right icon-volley-logo"></p> -->
          <!-- <p>Probably you know why you're here: </p>
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
<p>Reserving the right to follow-up and iterate, of course, we'll get you where you want to be.</p> -->
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
    ••••••••••••••••• +++++++++++============++++++++++ •••••• ____  ____  ___________ __________  _____________   __
   ••••••••••••••••• +++++++++++============++++++++++ •••••• / __ \/ __ \/ ____/ ___// ____/ __ \/ ____/ ____/ | / /
  ••••••••••••••••• +++++++++++============++++++++++ •••••• / /_/ / /_/ / __/  \__ \/ /   / /_/ / __/ / __/ /  |/ /
 ••••••••••••••••• +++++++++++============++++++++++ •••••• / ____/ _, _/ /___ ___/ / /___/ _, _/ /___/ /___/ /|  /
••••••••••••••••• +++++++++++============++++++++++ •••••• /_/   /_/ |_/_____//____/\____/_/ |_/_____/_____/_/ |_/
 -->
    <div :class="['modal',modals.prescreen?'is-active':'']">
      <!--
  <div class="modal-background"></div>
  <div class="modal-content">
    <section id="PRESCREEN" :class="['hero','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']">
<div class="hero-body">
  <div class="container">
    <h1 class="title">
    What's Happening?
    </h1>

    <p>
       Tell us about your data problem and we will write back with our initial thoughts. Very seriously - no hard sell, no fee, just a conversation about your situation. Think of it as free data therapy!</p>
       <p>An actual human being is going to read what you write and reply. (So of course don't put any sensitive information in here - just describe what's bugging you about your data situation).
    </p>

    <p>All we need is <em>an</em> email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using a DEA service (see Tools)</p>
<p>&nbsp;</p>


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
  </div>
-->
      <div class="modal-background"></div>
      <div id="PRESCREEN" :class="['modal-card',page.schema=='light'?'MO-GBW-schema-light':'MO-GBW-schema-dark']">
        <header class="modal-card-head">
          <p class="modal-card-title">What's Happening?</p>
          <button @click="modals.prescreen=false" class="delete is-large" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-7 has-text-left">
              <p>
                Tell us about your data problem and we will write back with our initial thoughts.</p>
              <p>An actual human being is going to read what you write and reply, so of course don't put any sensitive information in here. Just describe what's bugging you about your data situation.
              </p>
            </div>
            <div class="column is-5 has-text-justified">
              <div style="font-weight:800;font-size:1.5em;">No hard sell, no fee, just a conversation about your situation - free data therapy!</div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p>All we need is <em>an</em> email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using a DEA service.</p>
            </div>
          </div>
          <!--       <p>
       Tell us about your data problem and we will write back with our initial thoughts.</p>
       <p>An actual human being is going to read what you write and reply, so of course don't put any sensitive information in here. Just describe what's bugging you about your data situation.
    </p>

    <p>All we need is <em>an</em> email address to which we reply, so if you're leery of writing into a website, please feel free to get a burner address using a DEA service (see Tools).</p>

    <div class="GBW-pullquote-right">No hard sell, no fee, just a conversation about your situation - free data therapy!</div> -->
          <form>
            <div class="input-group control has-icons-left has-icons-right">
              <div class="field">
                <input v-model="prescreen.email" :class="['input',isEmailValid('prescreen')?'is-success':'is-error']" type="text" placeholder="Email">
                <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
                <span class="icon is-small is-right">
      <font-awesome-icon v-if="isEmailValid('prescreen')" icon="thumbs-up" />
      <font-awesome-icon v-if="!isEmailValid('prescreen')" icon="frown" />
    </span>
              </div NB=".field">
            </div NB=".input-group">
            &nbsp;
            <textarea v-model="prescreen.content" class="textarea" placeholder="" rows="10"></textarea>
            <button @click="addPreScreen" :class="['GBW-btn-light','button','is-large','is-light','is-fullwidth',prescreen.waiting?'is-loading':'']" :disabled="!isEmailValid('prescreen')" type="submit">{{prescreen.status}}</button>
            <p v-if="!isEmailValid('prescreen')" class="is-error has-text-centered is-size-7">(please enter a valid email address)</p>
          </form>
        </section>
        <!--     <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer> -->
      </div>
    </div>
    <!-- 
    about.about.aboutabout.about.aboutabout.about.about:: ___    ____  ____  __  ________
   about.about.aboutabout.about.aboutabout.about.about:: /   |  / __ )/ __ \/ / / /_  __/
  about.about.aboutabout.about.aboutabout.about.about:: / /| | / __  / / / / / / / / /
 about.about.aboutabout.about.aboutabout.about.about:: / ___ |/ /_/ / /_/ / /_/ / / /
about.about.aboutabout.about.aboutabout.about.about:: /_/  |_/_____/\____/\____/ /_/
 -->
    <section id="ABOUT" :class="['hero','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']">
      <div class="hero-body is-size-5">
        <div class="container">
          <h1 class="title">
    About Us
    </h1>
          <p>Volley is a data-focused development and consulting firm devoted to helping our clients solve data problems and maximize data capability. We can clean, fix, and refine your data. We can optimize them. We can find external data that augment or inform yours. And we can build all manner of custom applications that present your own data back to you exactly how you need it. </p>
          <p>We deliver solutions that allow you to focus on what you do best - <em>on top of</em> the powerful tool that is your own data.</p>
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
    <section id="CONTACT" :class="['hero','is-size-5','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
    Contact Us
    </h1>
          <p>
            If you're not sure you want to talk to us feel free to use our anonymous prescreen form <a @click.prevent="modals.prescreen=true" href="#">here</a>. Otherwise, it would be great to hear from you.
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
              <textarea v-model="contact.content" class="textarea" placeholder="" rows="10"></textarea>
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
 
<section id="TOOLS" :class="['hero','is-fullheight',page.schema=='light'?'M-GBW-schema-light':'M-GBW-schema-dark']">
<div class="hero-body">
  <div class="container">

    <h1 class="title">
    Tools
    </h1>
    <h2 class="subtitle has-text-grey-light">
      There's a chance you don't need us at all! Here are some common tools for working with data, information, and the systems that consume and produce them.
    </h2>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-info">
          <p class="title"><a href="https://openrefine.org/">OpenRefine</a></p>
          
          <p class="image is-128x128 is-pulled-left">
            <img src="@/assets/logo-ext-openrefine.svg">
    </p>
          <p class="">OpenRefine gets it. People with messy data don't always know the myriad ways *in which* they're messy. So if nothing else (there's actually plenty else), OpenRefine lets you interrogate (and optionally fix) your data, row-by-row or problem-by-problem or facet-by-facet. There's a very powerful scripting engine in there for bulk operations and such, but the first value to notice will be how *clearly* you'll be able to see what you have. Finally, maybe.</p>
        </article>
         <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article> 
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title"><a href="https://qgis.org/en/site/">QGIS</a></p>
        
    <p class="image is-128x128 is-pulled-right">
          <img src="@/assets/logo-ext-qgis.svg">
    </p>
          <p>QGIS is a very powerful (very free) open source GIS. A GIS is a software that connects data to space - think population-by-county or crime hotspots, that sort of thing.</p><p>Even if you hastily (and probably mistakenly!) presume your data don't have a spatial aspect, the tabular functionality (analysis, conversion, interrogation ,etc.) of a GIS can be worth the install. The thing absolutely comes alive, however, if your data possess even a modicum of explicit or implicit spatiality.</p>
          
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">eMail Burners and Subaddressing</p>
        <div class="content">
          <nav class="level">
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
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">US Census</p>
        

    <p class="image is-128x128 is-pulled-right">
        <img src="@/assets/logo-ext-uscb.svg">
    </p>
<p>
        The US Census Bureau -- b. 1790! -- is, by Constitutional edict, only a count of the U.S. population. But then how do you explain how we know that there are <a href="https://data.census.gov/cedsci/map?q=Disability&g=0400000US05.050000&tid=ACSST1Y2019.S1810&hidePreview=false&vintage=2019&layer=VT_2019_050_00_PY_D1&cid=S1810_C03_001E&mode=customize">three counties</a> with over 17.7% of the total civilian noninstitutionalized population living with a disability in Arkansas (the state most-afflicted by disability in the Union)?
      </p>

      <p>Or how do we know that <a href="https://data.census.gov/cedsci/table?q=commute&g=0200000US2&tid=ACSST1Y2019.S0802&hidePreview=true">half of the country's population</a> aged 25 to 44 take public transportation to work and that the number dwindles to 7.1% by the time we are 55-59 years old? It's kind of amazing.</p>

      <p>The topics go on and on, and sometimes with remarkable granularity. For instance, did you know that "a privy or chemical toilet is not considered a flush toilet"? Your <a href="https://www2.census.gov/programs-surveys/ahs/2019/2019%20AHS%20Definitions.pdf">Census Bureau does</a>! And these data sprawl out and down across <a href="https://www.census.gov/programs-surveys/surveys-programs.html">far more programs</a> than just the famous Decennial Census.</p>

      <p>Not to be lost in the sheer expanse of Census data, however, is how easy and valuable it can be to <em>connect</em> to them. Given most of the collected attributes are about a specific place (a County, a Block, a Zip Code Tabulation Area, etc.) it's often almost trivial to get this or that fact about an area or areas that are specific to (and englightening of) your data.</p>
    
        <div class="content">

        </div>
      </div>
    </article>
  </div>
</div>
  
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


<footer id="GBW-footer" :class="['footer',page.schema=='light'?'F-GBW-schema-light':'F-GBW-schema-dark']">
  <div class="columns">
    
  <div class="column is-one-third"></div NB=".column">
<div class="column is-one-third">
</div NB=".column">
<div class="column is-one-third has-text-right">
</div NB=".column">
</div NB=".columns">
  <div class="is-pulled-left">
    <a @click.prevent="actives.pane='#HOME'" href="">
      (<font-awesome-icon icon="arrow-up" />)
    </a>
  </div NB="is-pulled-left">
</footer>
</section>
-->
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
  components: {},
  name: "VolleyConsulting",
  created: function() {
    this.CONFIG = CONFIGG.mode == "prod" ? CONFIGG.prod : CONFIGG.dev
    this.actives = {
      pane: (this.$route.params.pane) ? this.$route.params.pane : '#HOME',
      basemap: (this.$route.params.basemap) ? this.$route.params.basemap : null,
      updatekey: (this.$route.params.updatekey) ? this.$route.params.updatekey : null,
      geom: null
    }



    //     this.axios.get("https://api.ipify.org?format=json", function(data) { 

    // this.axios.get(`http://api.ipstack.com/data.ip?access_key=90464beedcf2fbaf1fa958adfa9b720f&output=json`,(data)=>{
    //   console.log('ipstack data:',data);
    //   alert(data)
    // })})



  }, //created
  beforeDestroy: function() {
    window.removeEventListener('keydown', this.keyMonitor)
  },
  mounted: function() {

    this.axios.get(`http://worldtimeapi.org/api/ip`, { "accept": "application/json" })
      .then((wtarezult) => {

        // console.log("wtarezult", wtarezult);

        // console.log('calcdhour:',this.$MOMENT(wtarezult.data.datetime).hour())
        // console.log('fakedhour:',this.$MOMENT("2020-08-22T15:16:08.735098-04:00").hour())

        let hour = this.$MOMENT(wtarezult.data.datetime).hour();
        this.page.schema = (hour > 8 && hour < 21) ? 'light' : 'dark'

      }, (error) => {
        console.log('FAILED...', error);

      })


    // console.log('fakedhour:',)

    window.document.body.onscroll = () => {
      this.actives.pane = null
    }

    window.addEventListener('keydown', this.keyMonitor)

  },
  firestore() {
    return {
      prescreens: db.collection('prescreens')
    }
  },
  data() {
    return {
      FONT: 'Roboto',
      CONFIG: null,
      showNav: false,
      loadings: { maplayer: false, app: false, popupopen: false },
      modals: { prescreen: false },
      page: {
        splayed: false,
        schema: 'light',
        nameOfThing: 'Volley Consulting',
        descriptionOfThing: 'Volley Consulting is a small firm from Brookline, Massachusetts that brings years and years of experience with a wide variety of data problems and solutions from across many, many domains.',
        keywordsForThing: ['data consulting', 'data cleanup', 'custom development'],
        panes: [{
            label: 'Your Situation',
            slug: '#HOME'
          },
          // { label: 'M1', slug: '#M1' }, 
          // { label: 'Approach',slug: '#APPROACH' },
          // { label: 'Your Situation', slug: '#PRESCREEN' },
          { label: 'Contact Us', slug: '#CONTACT' },
          // { label: 'Tools',slug: '#TOOLS' },
          { label: 'About', slug: '#ABOUT' }
        ]
      },
      project: { shorthand: "Volley" },
      console: { msgs: [] },
      actives: { pane: 'default' },
      prescreen: { status: "Submit", waiting: false, "email": null, "content": null, "timestamp": new Date() },
      contact: { status: "Submit", waiting: false, "email": null, "name": null, "content": null, "timestamp": new Date() }
    };
  },
  methods: {
    isEmailValid: function(w) {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (w == 'prescreen') {
        return (this.prescreen.email == "") ? "" : (reg.test(this.prescreen.email)) ? true : false;
      } else if (w == 'contact') {
        return (this.contact.email == "") ? "" : (reg.test(this.contact.email)) ? true : false;
      }
    },
    sendEmailPrescreen: function() {
      let O = { reply_to: this.prescreen.email, prescreenBody: this.prescreen.content }
        // console.log(O)
      EMAILJS.send('gmail', 'gbw_prescreen', O, 'user_B6haXsW376PCoTkyZ4eYy')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          this.prescreen.status = 'tnx!'
        }, (error) => {
          console.log('FAILED...', error);
          this.prescreen.status = 'plz try again'
        })
        .finally(() => {
          this.prescreen.waiting = false
        })
    },
    sendEmailContact: function() {
      let O = { reply_to: this.contact.email, contactBody: this.contact.content, name: this.contact.name }
      console.log(O)
      EMAILJS.send('gmail', 'gbw_contact', O, 'user_B6haXsW376PCoTkyZ4eYy')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          this.contact.status = 'TNX! We will be eager to reply.'
        }, (error) => {
          console.log('FAILED...', error);
          this.contact.status = 'plz try again'
        })
        .finally(() => {
          this.contact.waiting = false
        })
    },
    addPreScreen: function(name, image) {
      this.prescreen.waiting = true

      db.collection('prescreens').add({ replied: false, reply_to: this.prescreen.email, prescreenBody: this.prescreen.content })
        .then(ref => {
          this.sendEmailPrescreen()

        })
    },
    addContact: function(name, image) {
      this.contact.waiting = true

      db.collection('contacts').add({ replied: false, reply_to: this.contact.email, contactBody: this.contact.content, name: this.contact.name })
        .then(ref => {
          this.sendEmailContact()
          console.log("ref", ref);

        })
    },
    keyMonitor: function(e) {

        if (e.altKey) { this.page.splayed = !this.page.splayed }
        if (e.key.toLowerCase() == 'escape') {
          // this.$_.each(modals,mo=>{mo=false})
          /*this.modals=this.$_.mapObject(this.modals, (mov, mok)=>{
  return {mov:false}
});*/
          this.modals = this.$_.mapObject(this.modals, (mo, mk) => {
            return mk = false
          });
        }

      } //keymonitor
      ,
    getColor: function(el) {



      } //getcolor

  } //methods
  ,
  watch: {
    "actives.pane": {
      handler: function(vnew, vold) {
        // we intercept HOME so we zoom to *actual* top that includes nav
        let target = vnew == '#HOME' ? '#GBW-nav' : vnew
        this.$scrollTo(target)

      }
    } //actives.pane
  } //watch
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style></style>
