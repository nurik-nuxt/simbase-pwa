"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
// import router from './router'
var vue_2 = require("@ionic/vue");
require("@ionic/vue/css/core.css");
// Основные стили Ionic (опционально):
require("@ionic/vue/css/normalize.css");
require("@ionic/vue/css/structure.css");
require("@ionic/vue/css/typography.css");
require("swiper/swiper-bundle.css");
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(vue_2.IonicVue);
// app.use(router)
app.mount('#app');
