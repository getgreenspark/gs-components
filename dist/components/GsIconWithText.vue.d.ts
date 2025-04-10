interface Props {
    /** MDI icon name (e.g. 'mdi-check') */
    mdiIcon?: string;
    /** Path to custom icon */
    iconPath?: string;
    /** Alt text for custom icon */
    iconAlt?: string;
    /** Icon size in pixels */
    iconSize?: string | number;
    /** Icon color using design system variables */
    iconColor?: string;
    /**
     * Text content to display next to the icon.
     * Supports HTML content which will be safely rendered.
     * @example "Check out our <a href='#'>documentation</a>"
     */
    text: string;
    /** Typography variant for the text */
    textVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title-1' | 'title-2' | 'big-description' | 'description' | 'body' | 'caption' | 'minimum';
    /** HTML tag to use for the text */
    tag?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        text?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    tag: string;
    iconSize: string | number;
    iconColor: string;
    textVariant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "title-1" | "title-2" | "big-description" | "description" | "body" | "caption" | "minimum";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsIconWithText.vue.d.ts.map