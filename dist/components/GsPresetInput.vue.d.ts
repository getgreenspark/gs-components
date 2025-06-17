interface Preset {
    label: string;
    value: number;
    info?: string;
}
type __VLS_Props = {
    presets: Preset[];
    modelValue: number;
    prefix?: string;
    postfix?: string;
    inputLabel?: string;
    inputPlaceholder?: string;
    inputRules?: ((...args: (string | number)[]) => unknown)[];
    inputHideDetails?: boolean;
    prependInner?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:model-value": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:model-value"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsPresetInput.vue.d.ts.map