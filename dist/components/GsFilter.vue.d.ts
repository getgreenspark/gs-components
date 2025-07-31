import { PropType } from 'vue';
type Category = {
    title: string;
    value: string;
};
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
    };
    categories: {
        type: PropType<Category[]>;
        default: () => never[];
    };
}>, {}, {}, {}, {
    searchByCategory(value: string): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
    };
    categories: {
        type: PropType<Category[]>;
        default: () => never[];
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    categories: Category[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=GsFilter.vue.d.ts.map