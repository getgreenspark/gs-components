type AlertBarType = 'info' | 'success' | 'error' | 'warning';
interface Props {
    type?: AlertBarType;
    title?: string;
    message: string;
    fullWidth?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    type: AlertBarType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsAlertBar.vue.d.ts.map