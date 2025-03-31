import { App } from 'vue';
import { default as GsButton } from './components/GsButton.vue';
import { default as GsAlertBar } from './components/GsAlertBar.vue';
declare module 'vue' {
    interface GlobalComponents {
        GsButton: (typeof import('./components/GsButton.vue'))['default'];
        GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default'];
    }
}
export { GsButton, GsAlertBar };
declare const GsComponents: {
    install(app: App): void;
};
export default GsComponents;
//# sourceMappingURL=index.d.ts.map