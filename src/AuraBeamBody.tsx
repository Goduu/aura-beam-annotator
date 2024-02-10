import React, { FC, ReactNode, useContext } from 'react'
import { Color } from './colors';
import { Line } from './components/Line';

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
export const AuraBeamBody: FC<AuraBeamBodyProps> = ({ children, color, positioning }) => {
    const right = positioning === "right"

    return (
        <div className="mt-[-0.5px] pb-16 mb-[-0.5px] relative">
            <Line color={color} right={right} />
            <div className={`mt-4 drop-shadow-none ${!right ? "ml-14" : "mr-14 text-right"}`}>
                {children}
            </div>
        </div>
    )
}
