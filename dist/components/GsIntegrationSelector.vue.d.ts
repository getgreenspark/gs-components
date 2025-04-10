interface Props {
    modelValue?: boolean;
    /**
     * The label text to display next to the icon.
     * Supports HTML content which will be safely rendered.
     * @example "Connect to <strong>Slack</strong>"
     */
    label?: string;
    disabled?: boolean;
    icon?: string;
    tagLabel?: string;
    errorMessages?: string | string[];
    hideDetails?: boolean;
    density?: 'default' | 'comfortable' | 'compact';
    color?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: boolean) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    color: string;
    disabled: boolean;
    icon: string;
    label: string;
    modelValue: boolean;
    density: "default" | "comfortable" | "compact";
    errorMessages: string | string[];
    hideDetails: boolean;
    tagLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsIntegrationSelector.vue.d.ts.map