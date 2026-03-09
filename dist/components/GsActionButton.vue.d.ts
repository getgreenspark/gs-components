export interface ActionButtonItem {
    icon: string;
    title: string;
    text: string;
    to?: string;
}
type ActionButtonProps = {
    label?: string;
    items?: ActionButtonItem[];
    disabled?: boolean;
    fullWidth?: boolean;
    width?: string;
};
declare const _default: import('vue').DefineComponent<ActionButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (item: ActionButtonItem, index: number) => any;
}, string, import('vue').PublicProps, Readonly<ActionButtonProps> & Readonly<{
    onSelect?: ((item: ActionButtonItem, index: number) => any) | undefined;
}>, {
    label: string;
    items: ActionButtonItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=GsActionButton.vue.d.ts.map