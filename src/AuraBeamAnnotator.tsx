import React, { FC, ReactNode } from 'react';
import { Color } from './colors';
import { Line } from './components/Line';
import { SharedPropContext } from './components/Context';

/**
 * Props for the AuraBeamAnnotator component.
 */
export type AuraBeamAnnotatorProps = {
    /** The children of the component. */
    children?: ReactNode;
    /**
     * The positioning of the component.
     * Can be either 'left' or 'right'.
     */
    positioning?: 'left' | 'right';
    /**
     * The color of the component. 
     * Can be any Tailwind base color name.
     */
    color?: Color;
};


/**

AuraBeamAnnotator component.
The Annotator defines the positioning and color of its children components.
@component
@param {Object} props - The component props.
@param {ReactNode} props.children - The children nodes.
@param {string} props.positioning - The positioning of the component ('left' or 'right').
@param {Color} props.color - The color of the component.
@returns {JSX.Element} The rendered AuraBeamAnnotator component. 
*/
export const AuraBeamAnnotator: FC<AuraBeamAnnotatorProps> = ({ color = "white", positioning = "left", children }) => {
    const right = positioning === 'right'

    return (
        <div className={`relative flex flex-col ${right ? 'items-end' : 'items-start'}`}>
            <Line color={color} right={right} />
            <SharedPropContext.Provider value={{ color, positioning }}>
                {children}
            </SharedPropContext.Provider>
        </div>
    );
};