import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyC3itAZSe9Uv1Nc98kS9bScPEKTcYEB2Rk",
  authDomain: "crm-for-vuejs.firebaseapp.com",
  databaseURL: "https://crm-for-vuejs.firebaseio.com",
  projectId: "crm-for-vuejs",
  storageBucket: "crm-for-vuejs.appspot.com",
  messagingSenderId: "761056619039",
  appId: "1:761056619039:web:ccb9e3c7015c086542c32a",
  measurementId: "G-B0XGBCVZS8"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

