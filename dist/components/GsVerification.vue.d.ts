interface VerificationItem {
    /**
     * Path to the icon image
     */
    iconPath: string;
    /**
     * Text to display next to the icon.
     * Supports HTML content which will be safely rendered.
     */
    text: string;
}
interface Props {
    /**
     * Title text to display at the top of the component
     * @default "Verification"
     */
    title?: string;
    /**
     * Array of verification items to display
     */
    items: VerificationItem[];
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    title: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=GsVerification.vue.d.ts.map