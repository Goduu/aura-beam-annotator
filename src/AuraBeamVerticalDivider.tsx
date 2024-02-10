import React, { FC } from 'react'
import { Color, borderColors } from './colors';

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
    color?: Color;
}

/**
 * AuraBeamVerticalDivider component represents a vertical divider used in the AuraBeam application.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.direction - The direction of the divider. Default is "l-to-r".
 * @param {Color} props.color - The color of the divider. Default is "white".
 * @returns {JSX.Element} The rendered AuraBeamVerticalDivider component.
 */
export const AuraBeamVerticalDivider: FC<AuraBeamVerticalDividerProps> = ({ direction = "l-to-r", color = "white" }) => {
    const dirToRight = direction === 'l-to-r';

    return (
        <div className='mx-4 relative min-w-20'>
            <div className={`pb-5 h-5 ${borderColors[color]} ${dirToRight ? "border-l-8" : "border-r-8"} `} />
            <div className={`${dirToRight && "inset-y-0"} m-l-[-0.5px] m-b-[-0.5px] left-0 ${borderColors[color]} border-b-8 w-full`} />
            <div className={`pb-5 mb-[-0.5px] relative h-20 ${dirToRight ? "border-r-8" : "border-l-8"} ${borderColors[color]}`} />
        </div>
    )
}
