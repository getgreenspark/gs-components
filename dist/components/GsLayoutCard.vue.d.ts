import { GsLayoutCardContentGap, GsLayoutCardPadding, GsLayoutCardTitleSize, GsLayoutCardTitleTag, GsLayoutCardVariant } from '../helpers/interfaces';
type __VLS_Props = {
    title?: string;
    description?: string;
    titleTag?: GsLayoutCardTitleTag;
    titleSize?: GsLayoutCardTitleSize;
    variant?: GsLayoutCardVariant;
    padding?: GsLayoutCardPadding;
    flushOnMobile?: boolean;
    stretch?: boolean;
    contentGap?: GsLayoutCardContentGap;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        actions?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    variant: GsLayoutCardVariant;
    padding: GsLayoutCardPadding;
    titleTag: GsLayoutCardTitleTag;
    titleSize: GsLayoutCardTitleSize;
    flushOnMobile: boolean;
    stretch: boolean;
    contentGap: GsLayoutCardContentGap;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsLayoutCard.vue.d.ts.map