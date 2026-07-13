import { GsPageSectionContentGap, GsPageSectionPadding, GsPageSectionTitleSize, GsPageSectionTitleTag, GsPageSectionVariant } from '../helpers/interfaces';
type __VLS_Props = {
    title?: string;
    description?: string;
    titleTag?: GsPageSectionTitleTag;
    titleSize?: GsPageSectionTitleSize;
    variant?: GsPageSectionVariant;
    padding?: GsPageSectionPadding;
    flushOnMobile?: boolean;
    stretch?: boolean;
    contentGap?: GsPageSectionContentGap;
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
    variant: GsPageSectionVariant;
    padding: GsPageSectionPadding;
    titleTag: GsPageSectionTitleTag;
    titleSize: GsPageSectionTitleSize;
    flushOnMobile: boolean;
    stretch: boolean;
    contentGap: GsPageSectionContentGap;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsPageSection.vue.d.ts.map