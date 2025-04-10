interface Props {
    icon: string;
    title: string;
    description?: string;
    buttonLabel?: string;
    buttonIcon?: string;
    disabled?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "button-click": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onButton-click"?: (() => any) | undefined;
}>, {
    description: string;
    disabled: boolean;
    buttonLabel: string;
    buttonIcon: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsManagePlan.vue.d.ts.map