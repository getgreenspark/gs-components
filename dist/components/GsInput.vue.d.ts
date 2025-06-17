declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    hideDetails: {
        default: boolean;
        type: BooleanConstructor;
    };
    label: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {
    input(v: string): void;
    blur(e: MouseEvent): void;
    updateError(e: KeyboardEvent): void;
}, import('vue').DefineComponent<{}, {}, {
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
        positiveInteger: (value: number) => boolean | import('@tolgee/core').TranslationValue;
        required: (value: number | string) => boolean | import('@tolgee/core').TranslationValue;
        unique: <Type>(collection: Array<Type>) => (value: Type) => boolean;
        url: (value: string) => boolean | import('@tolgee/core').TranslationValue;
    };
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, import('vue').ComponentOptionsMixin, ("blur" | "update:modelValue" | "update:error")[], "blur" | "update:modelValue" | "update:error", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    hideDetails: {
        default: boolean;
        type: BooleanConstructor;
    };
    label: {
        type: StringConstructor;
    };
}>> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:error"?: ((...args: any[]) => any) | undefined;
}>, {
    hideDetails: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=GsInput.vue.d.ts.map