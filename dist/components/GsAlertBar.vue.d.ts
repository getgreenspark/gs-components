type AlertBarType = 'info' | 'success' | 'error' | 'warning';
interface Props {
    /**
     * The type of alert to display
     */
    type?: AlertBarType;
    /**
     * Optional title for the alert.
     * Supports HTML content which will be safely rendered.
     * @example "<strong>Important:</strong> Please note"
     */
    title?: string;
    /**
     * The main message to display.
     * Supports HTML content which will be safely rendered.
     * @example "Visit our <a href='#'>documentation</a> for more info"
     */
    message: string;
    /**
     * Makes the alert take the full width of its container
     */
    fullWidth?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        message?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    type: AlertBarType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsAlertBar.vue.d.ts.map