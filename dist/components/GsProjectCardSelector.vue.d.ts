type TagBackgroundColor = 'ui-green' | 'ui-emerald-green' | 'ui-beige';
type Color = 'ui-green' | 'ui-emerald-green' | 'ui-beige' | 'ui-black' | 'ui-white' | 'ui-red' | 'ui-yellow' | 'ui-blue' | 'ui-blue-light' | 'ui-purple-light' | 'ui-sky-blue' | 'ui-gold' | 'ui-brown' | 'ui-orange' | 'ui-torquoise';
interface Props {
    title: string;
    subtitle: string;
    /**
     * The description text to display in the card.
     * Supports HTML content which will be safely rendered.
     * @example "Learn more about our <a href='#'>impact projects</a>"
     */
    description: string;
    /**
     * The location text to display in the card footer.
     * Supports HTML content which will be safely rendered.
     * @example "Located in <strong>Central Africa</strong>"
     */
    location: string;
    imageUrl: string;
    imageAlt?: string;
    tagBackgroundColor?: TagBackgroundColor;
    tagFontColor?: Color;
    tagText?: string;
    cardBackgroundColor?: 'grey-scale-10' | 'grey-scale-20';
    locationIcon?: string;
    variant?: 'horizontal' | 'compact';
    readMoreVariant?: 'text' | 'chevron';
    enableHover?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        description?(_: {}): any;
        location?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    readMore: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onReadMore?: (() => any) | undefined;
}>, {
    variant: "horizontal" | "compact";
    imageAlt: string;
    tagText: string;
    tagBackgroundColor: TagBackgroundColor;
    tagFontColor: Color;
    cardBackgroundColor: "grey-scale-10" | "grey-scale-20";
    locationIcon: string;
    readMoreVariant: "text" | "chevron";
    enableHover: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsProjectCardSelector.vue.d.ts.map