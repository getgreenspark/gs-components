import { App } from 'vue';
import { default as GsAlertBar } from './components/GsAlertBar.vue';
import { default as GsButton } from './components/GsButton.vue';
import { default as GsFilter } from './components/GsFilter.vue';
import { default as GsTabs, TabItem } from './components/GsTabs.vue';
import { default as GsTag } from './components/GsTag.vue';
import { default as GsDivider } from './components/GsDivider.vue';
import { default as GsInput } from './components/GsInput.vue';
declare module 'vue' {
    interface GlobalComponents {
        GsButton: (typeof import('./components/GsButton.vue'))['default'];
        GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default'];
        GsFilter: (typeof import('./components/GsFilter.vue'))['default'];
        GsTabs: (typeof import('./components/GsTabs.vue'))['default'];
        GsTag: (typeof import('./components/GsTag.vue'))['default'];
        GsDivider: (typeof import('./components/GsDivider.vue'))['default'];
        GsInput: (typeof import('./components/GsInput.vue'))['default'];
    }
}
export { GsButton, GsAlertBar, GsFilter, GsTabs, type TabItem, GsTag, GsDivider, GsInput };
declare const GsComponents: {
    install(app: App): void;
};
export default GsComponents;
//# sourceMappingURL=index.d.ts.map