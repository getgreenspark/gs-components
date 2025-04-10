type ProgressColor = 'ui-black' | 'ui-emerald-green' | 'ui-red';
type BackgroundColor = 'ui-white' | 'ui-beige';
interface Props {
    /**
     * The current value of the progress bar (0-100)
     */
    modelValue: number;
    /**
     * The color of the progress bar fill
     * @default 'ui-emerald-green'
     */
    color?: ProgressColor;
    /**
     * The background color of the progress bar
     * @default 'ui-white'
     */
    backgroundColor?: BackgroundColor;
    /**
     * Whether to show the percentage text
     * @default true
     */
    showPercentage?: boolean;
    /**
     * Height of the progress bar in pixels
     * @default 8
     */
    height?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    color: ProgressColor;
    height: number;
    backgroundColor: BackgroundColor;
    showPercentage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsProgressBar.vue.d.ts.map