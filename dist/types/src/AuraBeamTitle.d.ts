import { FC, ReactNode } from 'react';
import { Color } from './colors';
/**
 * Props for the AuraBeamTitle component.
 */
export type AuraBeamTitleProps = {
    /**
     * The title text or ReactNode to be displayed.
     */
    title?: string | ReactNode;
    /**
     * The type of the title.
     * Can be "primary" or "secondary".
     */
    type?: "primary" | "secondary";
    /**
     * The positioning of the title.
     * Can be "left" or "right".
     */
    positioning?: 'left' | 'right';
    /**
     * The color of the title.
     * Should be one of the predefined color keys.
     * Prop automatically set by the AuraBeamAnnotator component.
     */
    color?: Color;
};
/**
 * Renders the title component for the AuraBeam.
 * The title is the main heading of the AuraBeam.
 *
 * @component
 * @param {AuraBeamTitleProps} props - The props for the AuraBeamTitle component.
 * @param {string} props.title - The title text.
 * @param {string} [props.type="primary"] - The type of the title (primary or secondary).
 * @param {Color} [props.color="white"] - The color of the title.
 * @param {string} [props.positioning="left"] - The positioning of the title (left or right).
 * @returns {JSX.Element} The rendered AuraBeamTitle component.
 */
export declare const AuraBeamTitle: FC<AuraBeamTitleProps>;
//# sourceMappingURL=AuraBeamTitle.d.ts.map