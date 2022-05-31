import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6h7gm-s2kzrzZVOyCVbzV-Yzjoei7aKk",
    authDomain: "mmi-1-firebase-vuejs-3-4e5f5.firebaseapp.com",
    projectId: "mmi-1-firebase-vuejs-3-4e5f5",
    storageBucket: "mmi-1-firebase-vuejs-3-4e5f5.appspot.com",
    messagingSenderId: "769815267894",
    appId: "1:769815267894:web:27645a8d9c7044feb9e697"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
