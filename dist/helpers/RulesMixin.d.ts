export declare const RulesMixin: import('vue').DefineComponent<{}, {}, {
    rules: {
        arrayMinLength: (minLength: number) => (value: Array<unknown>) => boolean | import('@tolgee/core').TranslationValue;
        domain: (value: string) => boolean;
        email: (value: string) => boolean | import('@tolgee/core').TranslationValue;
        emailName: (value: string) => boolean;
        maxlength: (maxLength?: number) => <Type>(value: string | Array<Type>) => boolean | import('@tolgee/core').TranslationValue;
        maxTwoDecimal: (value: number) => boolean;
        maxValue: (maxValue?: number) => (v: number | string) => boolean | import('@tolgee/core').TranslationValue;
        minlength: (minLength: number) => <Type>(value: string | Array<Type>) => boolean | import('@tolgee/core').TranslationValue;
        minValue: (minValue?: number, validationText?: string) => (v: number | string) => boolean | import('@tolgee/core').TranslationValue;
        password: (value: string) => boolean | import('@tolgee/core').TranslationValue;
        positiveInteger: (value: number) => boolean;
        required: (value: number | string) => boolean | import('@tolgee/core').TranslationValue;
        unique: <Type>(collection: Array<Type>) => (value: Type) => boolean;
        url: (value: string) => boolean | import('@tolgee/core').TranslationValue;
    };
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
//# sourceMappingURL=RulesMixin.d.ts.map