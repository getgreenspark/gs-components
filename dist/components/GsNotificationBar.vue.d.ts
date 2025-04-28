type NotificationBarProps = {
    icon?: string;
    title?: string;
    /**
     * The description text to display below the title.
     * This prop is used as a fallback when no description slot is provided.
     */
    description?: string;
    buttonLabel?: string;
    buttonIcon?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<NotificationBarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "button-click": () => any;
}, string, import('vue').PublicProps, Readonly<NotificationBarProps> & Readonly<{
    "onButton-click"?: (() => any) | undefined;
}>, {
    title: string;
    icon: string;
    description: string;
    buttonLabel: string;
    buttonIcon: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsNotificationBar.vue.d.ts.map