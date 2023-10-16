import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { createRouter, createWebHistory } from "vue-router";
// import {classenroll} from "./components/classenroll.vue"

// import store from './store/store'
import router from './router';

// const router = createRouter({
//     history : createWebHistory(),
//     routes: [
//     //     {
//     //     path: '/',
//     //     component: App.vue,
//     // },
//     // {
//     //     path: '/classenroll',
//     //     component: classenroll.vue,
//     // }
// ]
// })
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGJGfV5yd0VHal1YTnJcUj0eQnxTdEZiWX5ccXdUT2RYUURyXQ==');


const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(pinia);
// store
app.mount("#app");



document.addEventListener("DOMContentLoaded", function(e) {
    var acc = document.getElementsByClassName("accordion");
  var i;
  console.log("main.js");
  console.log(acc);
  
  for (i = 0; i < acc.length; i++) {
    console.log("hello");
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.dir(this.nextElementSibling);
      var panel = this.nextElementSibling;
      console.log(panel);
      if (panel.style.display === "block") {
        console.log("panel is block");
        panel.style.display = "none";
      } else {
        console.log("panel is block");
        panel.style.display = "block";
      }
    });
  }
  
  var acc = document.getElementsByClassName("accordion1");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel1 = this.nextElementSibling;
      if (panel1.style.display === "block") {
        panel1.style.display = "none";
      } else {
        panel1.style.display = "block";
      }
    });
  }
  
  var acc = document.getElementsByClassName("accordion2");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel2 = this.nextElementSibling;
      if (panel2.style.display === "block") {
        panel2.style.display = "none";
      } else {
        panel2.style.display = "block";
      }
    });
  }
  
  var acc = document.getElementsByClassName("accordion3");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel3 = this.nextElementSibling;
      if (panel3.style.display === "block") {
          panel3.style.display = "none";
      } else {
          panel3.style.display = "block";
      }
    });
  }
  
  });