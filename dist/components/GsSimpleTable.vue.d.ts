import { SimpleTableColumn, SimpleTableItem } from '../helpers/interfaces';
interface SimpleTableProps {
    columns: SimpleTableColumn[];
    items: SimpleTableItem[];
    loading?: boolean;
    minHeight?: string;
    skeletonRowCount?: number;
    rowsClickable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        row?(_: {
            item: SimpleTableItem;
        }): any;
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SimpleTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "row-click": (item: SimpleTableItem) => any;
}, string, import('vue').PublicProps, Readonly<SimpleTableProps> & Readonly<{
    "onRow-click"?: ((item: SimpleTableItem) => any) | undefined;
}>, {
    loading: boolean;
    minHeight: string;
    skeletonRowCount: number;
    rowsClickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=GsSimpleTable.vue.d.ts.map