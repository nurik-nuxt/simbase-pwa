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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var props = (0, vue_1.defineProps)();
console.log(props);
var emits = (0, vue_1.defineEmits)();
function onSelectChat(chatId) {
    emits('select', chatId);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['chat-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-list-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "chat-list" }));
var _loop_1 = function (chat) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onSelectChat(chat.id);
        } }, { key: (chat.id) }), { class: "chat-item" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (chat.avatar), alt: "avatar" }, { class: "chat-item-avatar" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-item-info" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-item-name" }));
    (chat.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-item-lastMessage" }));
    (chat.lastMessage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-item-time" }));
    (chat.lastTime);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.chats)); _i < _a.length; _i++) {
    var chat = _a[_i][0];
    _loop_1(chat);
}
/** @type {__VLS_StyleScopedClasses['chat-list-container']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-list']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item-info']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item-name']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item-lastMessage']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-item-time']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            onSelectChat: onSelectChat,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
