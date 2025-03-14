import { App } from 'vue';
import { default as GsButton } from './components/GsButton.vue';
declare module 'vue' {
    interface GlobalComponents {
        GsButton: (typeof import('./components/GsButton.vue'))['default'];
    }
}
export { GsButton };
declare const GsComponents: {
    install(app: App): void;
};
export default GsComponents;
//# sourceMappingURL=index.d.ts.map