type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'link';
type ButtonSize = 'small' | 'large';
type ButtonTag = 'a' | 'button' | 'router-link';
type ButtonType = 'button' | 'submit' | 'reset';
type AnchorTarget = '_blank' | '_self' | '_parent' | '_top';
type ButtonProps = {
    tag?: ButtonTag;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    href?: string;
    width?: string;
    target?: AnchorTarget;
    buttonType?: ButtonType;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{}>, {
    tag: ButtonTag;
    variant: ButtonVariant;
    target: AnchorTarget;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsButton.vue.d.ts.map