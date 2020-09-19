// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import CONFIGD from "./Config.json";
import moment from 'moment';
import underscore from "vue-underscore";
import vueHeadful from 'vue-headful';
import Buefy from 'buefy';
import VueParticles from 'vue-particles';
import VueScrollTo from 'vue-scrollto';

import * as VUETHREEJS from 'vue-threejs'
Vue.use(VUETHREEJS)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// firebase stuff
// import VueFire from 'vuefire'
import VUEFIRESTORE from 'vue-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VUEFIRESTORE)

import {
	library
} from '@fortawesome/fontawesome-svg-core'
import {
	faArrowUp
} from '@fortawesome/free-solid-svg-icons'
library.add(faArrowUp)
import {
	faFrown
} from '@fortawesome/free-solid-svg-icons'
library.add(faFrown)
import {
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
library.add(faThumbsUp)
import {
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope);
import {
	faCheck
} from '@fortawesome/free-solid-svg-icons'
import {
	faMoon
} from '@fortawesome/free-solid-svg-icons'
library.add(faMoon);
import {
	FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

var firebaseApp = firebase.initializeApp({
	// databaseURL: "https://gbw1-28f50.firebaseio.com",
	databaseURL: "https://volley-prescreen.firebaseio.com",
	projectId: "volley-prescreen"
})

export const db = firebase.firestore()
const firestore = firebaseApp.firestore();
const settings = {};
firestore.settings(settings);



let CONFIG = CONFIGD.mode == 'prod' ? CONFIGD.prod : CONFIGD.dev

Vue.component('vue-headful', vueHeadful)

Vue.use(underscore);
Vue.use(VueParticles)
Vue.use(VueScrollTo, {
	container: "body",
	duration: 500,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
})

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$MOMENT', {
	value: moment
})


new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: {
		App
	}
});