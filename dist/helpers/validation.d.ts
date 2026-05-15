import { TranslationValue } from '@tolgee/vue';
export declare const maxTwoDecimal: (value: number) => boolean;
export declare const positiveInteger: (value: number) => boolean;
export declare const maxlength: (maxLength?: number) => <Type>(value: string | Array<Type>) => boolean | TranslationValue;
export declare const minlength: (minLength: number) => <Type>(value: string | Array<Type>) => boolean | TranslationValue;
export declare const maxValue: (maxValue?: number) => (v: number | string) => boolean | TranslationValue;
export declare const minValue: (minValue?: number, validationText?: string) => (v: number | string) => boolean | TranslationValue;
export declare const url: (value: string) => boolean | TranslationValue;
export declare const domain: (value: string) => boolean;
export declare const required: (value: number | string) => boolean | TranslationValue;
export declare const email: (value: string) => boolean | TranslationValue;
export declare const emailName: (value: string) => boolean;
export declare const password: (value: string) => boolean | TranslationValue;
export declare const repeated: <Type>(collection: Array<Type>) => (value: Type) => boolean;
export declare const unique: <Type>(collection: Array<Type>) => (value: Type) => boolean;
export declare const arrayMinLength: (minLength: number) => (value: Array<unknown>) => boolean | TranslationValue;
//# sourceMappingURL=validation.d.ts.map