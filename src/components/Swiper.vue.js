"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("swiper/vue");
// Import Swiper styles
require("swiper/css");
require("../style.css");
var ChatView_vue_1 = require("./ChatView.vue");
var ChatMain_vue_1 = require("./ChatMain.vue");
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    components: {
        ChatMain: ChatMain_vue_1.default,
        Swiper: vue_1.Swiper,
        SwiperSlide: vue_1.SwiperSlide,
    },
    setup: function () {
        return {};
    },
});
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ChatMain: ChatMain_vue_1.default,
    Swiper: vue_1.Swiper,
    SwiperSlide: vue_1.SwiperSlide,
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.swiper;
/** @type {[typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "mySwiper" }, { initialSlide: (1) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "mySwiper" }, { initialSlide: (1) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.SwiperSlide;
/** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_8;
var __VLS_9 = {}.SwiperSlide;
/** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var __VLS_12;
var __VLS_13 = {}.SwiperSlide;
/** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_14), false));
__VLS_16.slots.default;
var __VLS_17 = {}.ChatMain;
/** @type {[typeof __VLS_components.ChatMain, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_18), false));
var __VLS_16;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mySwiper']} */ ;
var __VLS_dollars;
var __VLS_self;
