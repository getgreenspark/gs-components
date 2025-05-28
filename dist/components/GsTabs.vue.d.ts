import { PropType } from 'vue';
export interface TabItem {
    label: string;
    value: string;
    disabled?: boolean;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    tabs: {
        type: PropType<TabItem[]>;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {}, {
    selectTab(tab: TabItem): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    tabs: {
        type: PropType<TabItem[]>;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=GsTabs.vue.d.ts.map