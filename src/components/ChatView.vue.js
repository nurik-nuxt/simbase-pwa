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
var vue_2 = require("vue");
var props = (0, vue_2.defineProps)();
console.log(props);
var emits = (0, vue_2.defineEmits)();
// Список сообщений (для примера – захардкоженный)
var messages = (0, vue_1.ref)([
    {
        text: 'Привет! Как дела?',
        time: '14:30',
        from: 'message-from-them',
    },
    {
        text: 'Привет! Всё отлично, спасибо!',
        time: '14:32',
        from: 'message-from-me',
    },
]);
// Текущее вводимое сообщение
var newMessage = (0, vue_1.ref)('');
// Метод отправки сообщения
function sendMessage() {
    if (!newMessage.value.trim())
        return;
    var msg = {
        text: newMessage.value,
        time: new Date().toLocaleTimeString().slice(0, 5),
        from: 'message-from-me',
    };
    messages.value.push(msg);
    newMessage.value = '';
}
// Метод "Назад"
function onBack() {
    emits('back');
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['chat-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['send-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-container" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: "chat-header" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.onBack) }, { class: "back-button" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-user-info" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ class: "user-avatar" }, { src: (__VLS_ctx.avatar), alt: "User Avatar" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "user-name" }));
(__VLS_ctx.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat-actions" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: "chat-messages" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.messages)); _i < _a.length; _i++) {
    var _b = _a[_i], msg = _b[0], i = _b[1];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: (i) }, { class: "message" }), { class: (msg.from) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "message-text" }));
    (msg.text);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "message-time" }));
    (msg.time);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)(__assign({ class: "chat-footer" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign(__assign(__assign({ onKeyup: (__VLS_ctx.sendMessage) }, { value: (__VLS_ctx.newMessage) }), { class: "chat-input" }), { type: "text", placeholder: "Сообщение" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.sendMessage) }, { class: "send-button" }));
/** @type {__VLS_StyleScopedClasses['chat-container']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-header']} */ ;
/** @type {__VLS_StyleScopedClasses['back-button']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-user-info']} */ ;
/** @type {__VLS_StyleScopedClasses['user-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['user-name']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-messages']} */ ;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['message-text']} */ ;
/** @type {__VLS_StyleScopedClasses['message-time']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-input']} */ ;
/** @type {__VLS_StyleScopedClasses['send-button']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            messages: messages,
            newMessage: newMessage,
            sendMessage: sendMessage,
            onBack: onBack,
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
