interface Props {
    /**
     * The model value for the input
     */
    modelValue?: string;
    /**
     * Label text for the input
     */
    label?: string;
    /**
     * Placeholder text when input is empty
     */
    placeholder?: string;
    /**
     * Description text to show below the input
     */
    description?: string;
    /**
     * Whether the input has an error
     * @default false
     */
    error?: boolean;
    /**
     * Error message to display
     */
    errorMessage?: string;
    /**
     * Whether the input is in a success state
     * @default false
     */
    success?: boolean;
    /**
     * Success message to display
     */
    successMessage?: string;
    /**
     * Whether the input is disabled
     * @default false
     */
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    error: boolean;
    success: boolean;
    disabled: boolean;
    modelValue: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=GsTextField.vue.d.ts.map