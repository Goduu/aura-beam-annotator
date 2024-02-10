import { FC, ReactNode } from 'react';
import { Color } from './colors';
/**
 * Props for the AuraBeamBody component.
 */
export type AuraBeamBodyProps = {
    /**
     * The content of the AuraBeamBody.
     */
    children: ReactNode;
    /**
     * The positioning of the AuraBeamBody.
     * Prop automatically set by the AuraBeamAnnotator component.
     */
    positioning?: 'left' | 'right';
    /**
     * The color of the AuraBeamBody.
     * Prop automatically set by the AuraBeamAnnotator component.
     */
    color?: Color;
};
/**
 * Renders the body of the AuraBeam component.
 * The body is the main content of the AuraBeam.
 *
 * @component
 * @param {AuraBeamBodyProps} props - The props for the AuraBeamBody component.
 * @param {ReactNode} props.children - The content to be rendered inside the AuraBeamBody component.
 * @param {string} [props.positioning="left"] - The positioning of the AuraBeamBody component. Can be "left" or "right".
 * @param {Color} [props.color="white"] - The color of the AuraBeamBody component.
 * @returns {JSX.Element} The rendered AuraBeamBody component.
 */
export declare const AuraBeamBody: FC<AuraBeamBodyProps>;
//# sourceMappingURL=AuraBeamBody.d.ts.map