type AlertBarType = 'info' | 'success' | 'error' | 'warning';
interface Props {
    /**
     * The type of alert to display
     */
    type?: AlertBarType;
    /**
     * Optional title for the alert.
     * Supports HTML content which will be safely rendered.
     * @example "<strong>Important:</strong> Please note"
     */
    title?: string;
    /**
     * The main message to display.
     * Supports HTML content which will be safely rendered.
     * @example "Visit our <a href='#'>documentation</a> for more info"
     */
    message: string;
    /**
     * Makes the alert take the full width of its container
     */
    fullWidth?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    type: AlertBarType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsAlertBar.vue.d.ts.map