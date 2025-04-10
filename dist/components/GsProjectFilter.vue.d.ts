interface MenuItem {
    text: string;
    selected: boolean;
    icon?: string;
}
interface Props {
    items: MenuItem[];
    label: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemClick: (...args: any[]) => void;
    "update:items": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onItemClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:items"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsProjectFilter.vue.d.ts.map