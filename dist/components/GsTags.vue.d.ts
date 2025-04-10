type Color = 'ui-green' | 'ui-emerald-green' | 'ui-beige' | 'ui-black' | 'ui-white' | 'ui-red' | 'ui-yellow' | 'ui-blue' | 'ui-blue-light' | 'ui-purple-light' | 'ui-sky-blue' | 'ui-gold' | 'ui-brown' | 'ui-orange' | 'ui-torquoise' | 'project-blue' | 'project-orange' | 'project-green' | 'project-turquoise' | 'project-purple' | 'project-pastel-blue' | 'project-pastel-orange' | 'project-pastel-green' | 'project-pastel-turquoise' | 'project-pastel-purple' | 'gray-light-7C' | 'none';
interface Props {
    label: string;
    backgroundColor?: Color;
    borderColor?: Color;
    fontColor?: Color;
    icon?: string;
    iconSize?: number;
    fontSize?: 'caption' | 'body' | 'description';
    bold?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    bold: boolean;
    icon: string;
    backgroundColor: Color;
    borderColor: Color;
    iconSize: number;
    fontColor: Color;
    fontSize: "caption" | "body" | "description";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=GsTags.vue.d.ts.map