import { App } from 'vue';
import { default as GsAlertBar } from './components/GsAlertBar.vue';
import { default as GsButton } from './components/GsButton.vue';
import { default as GsCardSelector } from './components/GsCardSelector.vue';
import { default as GsCheckbox } from './components/GsCheckbox.vue';
import { default as GsColorPicker } from './components/GsColorPicker.vue';
import { default as GsDivider } from './components/GsDivider.vue';
import { default as GsFloatingActionMenu } from './components/GsFloatingActionMenu.vue';
import { default as GsIconWithText } from './components/GsIconWithText.vue';
import { default as GsIntegrationSelector } from './components/GsIntegrationSelector.vue';
import { default as GsManagePlan } from './components/GsManagePlan.vue';
import { default as GsNotificationBar } from './components/GsNotificationBar.vue';
import { default as GsPlanOverview } from './components/GsPlanOverview.vue';
import { default as GsProgressBar } from './components/GsProgressBar.vue';
import { default as GsProjectFilter } from './components/GsProjectFilter.vue';
import { default as GsProjectCardSelector } from './components/GsProjectCardSelector.vue';
import { default as GsRadioButton } from './components/GsRadioButton.vue';
import { default as GsSubmenu } from './components/GsSubmenu.vue';
import { default as GsTags } from './components/GsTags.vue';
import { default as GsTextField } from './components/GsTextField.vue';
import { default as GsTypography } from './components/GsTypography.vue';
import { default as GsVerification } from './components/GsVerification.vue';
declare module 'vue' {
    interface GlobalComponents {
        GsButton: (typeof import('./components/GsButton.vue'))['default'];
        GsAlertBar: (typeof import('./components/GsAlertBar.vue'))['default'];
        GsCardSelector: (typeof import('./components/GsCardSelector.vue'))['default'];
        GsCheckbox: (typeof import('./components/GsCheckbox.vue'))['default'];
        GsColorPicker: (typeof import('./components/GsColorPicker.vue'))['default'];
        GsDivider: (typeof import('./components/GsDivider.vue'))['default'];
        GsFloatingActionMenu: (typeof import('./components/GsFloatingActionMenu.vue'))['default'];
        GsIconWithText: (typeof import('./components/GsIconWithText.vue'))['default'];
        GsIntegrationSelector: (typeof import('./components/GsIntegrationSelector.vue'))['default'];
        GsManagePlan: (typeof import('./components/GsManagePlan.vue'))['default'];
        GsNotificationBar: (typeof import('./components/GsNotificationBar.vue'))['default'];
        GsPlanOverview: (typeof import('./components/GsPlanOverview.vue'))['default'];
        GsProgressBar: (typeof import('./components/GsProgressBar.vue'))['default'];
        GsProjectFilter: (typeof import('./components/GsProjectFilter.vue'))['default'];
        GsProjectCardSelector: (typeof import('./components/GsProjectCardSelector.vue'))['default'];
        GsRadioButton: (typeof import('./components/GsRadioButton.vue'))['default'];
        GsSubmenu: (typeof import('./components/GsSubmenu.vue'))['default'];
        GsTags: (typeof import('./components/GsTags.vue'))['default'];
        GsTextField: (typeof import('./components/GsTextField.vue'))['default'];
        GsTypography: (typeof import('./components/GsTypography.vue'))['default'];
        GsVerification: (typeof import('./components/GsVerification.vue'))['default'];
    }
}
export { GsButton, GsAlertBar, GsColorPicker, GsCardSelector, GsCheckbox, GsDivider, GsFloatingActionMenu, GsIconWithText, GsIntegrationSelector, GsManagePlan, GsNotificationBar, GsPlanOverview, GsProgressBar, GsProjectFilter, GsProjectCardSelector, GsRadioButton, GsSubmenu, GsTags, GsTextField, GsTypography, GsVerification, };
declare const GsComponents: {
    install(app: App): void;
};
export default GsComponents;
//# sourceMappingURL=index.d.ts.map