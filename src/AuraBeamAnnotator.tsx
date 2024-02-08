import React, { FC, ReactNode } from 'react';
import { ColorKeys, bgColors, borderColors } from './colors';
import { PrimaryTitle } from './components/PrimaryTitle';
import { SecondaryTitle } from './components/SecondaryTitle';

export type AuraBeamAnnotatorProps = {
    title?: string | ReactNode;
    type?: "primary" | "secondary";
    children?: ReactNode;
    positioning?: 'left' | 'right';
    color?: ColorKeys;
};

export const AuraBeamAnnotator: FC<AuraBeamAnnotatorProps> = ({ title, type = "primary", color = "white", positioning = "left", children }) => {
    const positionLeft = positioning === 'left'
    const primary = type === "primary";

    return (
        <div className={`relative flex flex-col px-1 ${positionLeft ? 'items-start' : 'items-end'}`}>
            <div className="relative flex items-center gap-2">
                {/* circle */}
                {primary ?
                    <PrimaryTitle text={title} color={color} positionLeft={positionLeft} />
                    :
                    <SecondaryTitle text={title} color={color} positionLeft={positionLeft} />
                }
            </div>
            {children ?
                <div className="mt-[-0.5px] pb-16 mb-[-0.5px] relative">
                    {/* line */}
                    <div className={`z-10 absolute inset-y-0  border-r-8 ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}`}> </div>
                    <div className={`mt-4 drop-shadow-none ${positionLeft ? "ml-14" : "mr-14 text-right"}`}>
                        {children}
                    </div>
                </div>
                :
                <div className='pb-6'>
                    <div className={`z-10 absolute inset-y-0  border-r-8 ${borderColors[color]} ${positionLeft ? "left-0 ml-5" : "right-0 mr-5"}`}> </div>
                </div>
            }

        </div>
    );
};