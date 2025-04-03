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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var ChatList_vue_1 = require("./ChatList.vue");
var ChatView_vue_1 = require("./ChatView.vue");
// Исходный список чатов (можно загрузить с сервера и т. д.)
var chatList = (0, vue_1.ref)([
    {
        id: 1,
        name: 'Иван Петров',
        avatar: 'https://placehold.co/40?text=IP',
        lastMessage: 'Привет! Как дела?',
        lastTime: '14:30',
    },
    {
        id: 2,
        name: 'Мария Сидорова',
        avatar: 'https://placehold.co/40?text=MS',
        lastMessage: 'Когда встретимся?',
        lastTime: '13:10',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
    {
        id: 3,
        name: 'Другой контакт',
        avatar: 'https://placehold.co/40?text=DC',
        lastMessage: 'Ок, принято!',
        lastTime: 'Вчера',
    },
]);
// Идентификатор выбранного чата
var selectedChatId = (0, vue_1.ref)(null);
// При клике на чат в списке:
function selectChat(chatId) {
    selectedChatId.value = chatId;
}
// При нажатии "назад" в детальном экране:
function unselectChat() {
    selectedChatId.value = null;
}
// Текущий выбранный чат
var selectedChat = (0, vue_1.computed)(function () {
    return chatList.value.find(function (item) { return item.id === selectedChatId.value; });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
if (!__VLS_ctx.selectedChatId) {
    /** @type {[typeof ChatList, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(ChatList_vue_1.default, new ChatList_vue_1.default(__assign({ 'onSelect': {} }, { chats: (__VLS_ctx.chatList) })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onSelect': {} }, { chats: (__VLS_ctx.chatList) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
    var __VLS_3 = void 0;
    var __VLS_4 = void 0;
    var __VLS_5 = void 0;
    var __VLS_6 = {
        onSelect: (__VLS_ctx.selectChat)
    };
    var __VLS_2;
}
else {
    /** @type {[typeof ChatView, ]} */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(ChatView_vue_1.default, new ChatView_vue_1.default(__assign({ 'onBack': {} }, { name: (((_a = __VLS_ctx.selectedChat) === null || _a === void 0 ? void 0 : _a.name) || ''), avatar: (((_b = __VLS_ctx.selectedChat) === null || _b === void 0 ? void 0 : _b.avatar) || '') })));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ 'onBack': {} }, { name: (((_c = __VLS_ctx.selectedChat) === null || _c === void 0 ? void 0 : _c.name) || ''), avatar: (((_d = __VLS_ctx.selectedChat) === null || _d === void 0 ? void 0 : _d.avatar) || '') })], __VLS_functionalComponentArgsRest(__VLS_7), false));
    var __VLS_10 = void 0;
    var __VLS_11 = void 0;
    var __VLS_12 = void 0;
    var __VLS_13 = {
        onBack: (__VLS_ctx.unselectChat)
    };
    var __VLS_9;
}
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            ChatList: ChatList_vue_1.default,
            ChatView: ChatView_vue_1.default,
            chatList: chatList,
            selectedChatId: selectedChatId,
            selectChat: selectChat,
            unselectChat: unselectChat,
            selectedChat: selectedChat,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
