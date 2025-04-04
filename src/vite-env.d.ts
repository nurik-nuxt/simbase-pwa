/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface BeforeInstallPromptEvent extends Event {
    prompt(): void;
    userChoice: Promise<PromptResponseObject>;
}

interface PromptResponseObject {
    outcome: 'accepted' | 'dismissed';
}