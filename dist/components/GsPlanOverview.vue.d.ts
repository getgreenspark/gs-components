interface Props {
    imageUrl?: string;
    title?: string;
    /**
     * The description text to display below the title.
     * Supports HTML content which will be safely rendered.
     * @example "For companies just getting started on their <strong>positive impact</strong> journey."
     */
    description?: string;
    tagText?: string;
    showTag?: boolean;
    /**
     * List of features included in the plan.
     * Each feature supports HTML content which will be safely rendered.
     * @example ["Create and manage your impact with <a href='#'>vetted climate projects</a>"]
     */
    features?: string[];
    priceText?: string;
    billingCycle?: string;
    billingType?: string;
    showTrialNotice?: boolean;
    trialMessage?: string;
    onUpdatePaymentClick?: () => void;
    onManagePlanClick?: () => void;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    title: string;
    description: string;
    imageUrl: string;
    tagText: string;
    showTag: boolean;
    features: string[];
    priceText: string;
    billingCycle: string;
    billingType: string;
    showTrialNotice: boolean;
    trialMessage: string;
    onUpdatePaymentClick: () => void;
    onManagePlanClick: () => void;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=GsPlanOverview.vue.d.ts.map