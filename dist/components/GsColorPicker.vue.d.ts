interface Props {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    colorModes?: ColorModes[];
    clearable?: boolean;
}
type ColorModes = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa';
type __VLS_Props = Props;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    placeholder: string;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=GsColorPicker.vue.d.ts.map