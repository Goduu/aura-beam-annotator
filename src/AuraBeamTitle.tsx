import React, { FC, ReactNode, useContext } from 'react';
import { Color } from './colors';
import { PrimaryTitle } from './components/PrimaryTitle';
import { SecondaryTitle } from './components/SecondaryTitle';
import { SharedPropContext } from './components/Context';

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
export const AuraBeamTitle: FC<AuraBeamTitleProps> = ({ title, type = "primary", ...props }) => {
    const sharedProps = useContext(SharedPropContext);
    const right = props.positioning ? props.positioning === "right" : sharedProps.positioning === 'right';
    const primary = type === "primary";

    return (
        <div className="relative flex items-center gap-2">
            {primary ?
                <PrimaryTitle text={title} right={right} color={props.color || sharedProps.color} />
                :
                <SecondaryTitle text={title} right={right} color={props.color || sharedProps.color} />
            }
        </div>
    );
};