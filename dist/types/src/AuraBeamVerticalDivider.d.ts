import { FC } from 'react';
import { AuraBeamColor } from './colors';
/**
 * Props for the AuraBeamVerticalDivider component.
 */
export type AuraBeamVerticalDividerProps = {
    /**
     * The direction of the vertical divider.
     * - 'l-to-r': Left to right direction.
     * - 'r-to-l': Right to left direction.
     */
    direction: 'l-to-r' | 'r-to-l';
    /**
     * The color of the vertical divider.
     * Can be any Tailwind base color name.
     */
    color?: AuraBeamColor;
};
/**
 * AuraBeamVerticalDivider component represents a vertical divider used in the AuraBeam application.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.direction - The direction of the divider. Default is "l-to-r".
 * @param {AuraBeamColor} props.color - The color of the divider. Default is "white".
 * @returns {JSX.Element} The rendered AuraBeamVerticalDivider component.
 */
export declare const AuraBeamVerticalDivider: FC<AuraBeamVerticalDividerProps>;
//# sourceMappingURL=AuraBeamVerticalDivider.d.ts.map