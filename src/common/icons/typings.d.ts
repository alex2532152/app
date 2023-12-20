declare module '*.svg' {
    type SvgComponent = import('../models/SvgComponent').SvgComponent;

    export const Svg: SvgComponent;  
    const src: string;

    export default src;
}