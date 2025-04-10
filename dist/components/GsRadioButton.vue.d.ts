interface Props {
    /**
     * The model value for the radio button
     */
    modelValue?: string | number | undefined;
    /**
     * The value of this radio button
     */
    value?: string | number | undefined;
    /**
     * The label text for the radio button
     */
    label?: string;
    /**
     * Whether the radio button is disabled
     * @default false
     */
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | undefined) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | undefined) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string | number;
    value: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=GsRadioButton.vue.d.ts.map