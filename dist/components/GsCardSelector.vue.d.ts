interface Props {
    text: string;
    selected?: boolean;
    value: string | number;
    name: string;
    disabled?: boolean;
    imageSrc?: string;
    imageAlt?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number) => any;
    "update:selected": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((value: string | number) => any) | undefined;
    "onUpdate:selected"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    selected: boolean;
    imageSrc: string;
    imageAlt: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=GsCardSelector.vue.d.ts.map