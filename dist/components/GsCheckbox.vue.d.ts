type TextSize = 'description' | 'body';
interface Props {
    /**
     * The model value for the checkbox
     */
    modelValue?: boolean;
    /**
     * The label text to display next to the checkbox.
     * Supports HTML content which will be safely rendered.
     * @example "I agree to the <a href='#'>Terms & Conditions</a>"
     */
    label?: string;
    /**
     * Whether the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The size of the label text
     * @default 'description'
     */
    textSize?: TextSize;
    /**
     * Whether the label text should be bold
     * @default false
     */
    bold?: boolean;
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
    bold: boolean;
    color: string;
    disabled: boolean;
    label: string;
    modelValue: boolean;
    density: "default" | "comfortable" | "compact";
    textSize: TextSize;
    errorMessages: string | string[];
    hideDetails: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsCheckbox.vue.d.ts.map