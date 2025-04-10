interface MenuItem {
    text: string;
    selected: boolean;
}
interface Props {
    items: MenuItem[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    itemClick: (...args: any[]) => void;
    "update:items": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onItemClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:items"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=GsSubmenu.vue.d.ts.map