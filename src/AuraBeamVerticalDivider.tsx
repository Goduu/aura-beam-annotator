import React, { FC } from 'react'
import { ColorKeys, borderColors } from './colors';

export type AuraBeamVerticalDividerProps = {
    direction: 'l-to-r' | 'r-to-l';
    color?: ColorKeys;
}

export const AuraBeamVerticalDivider: FC<AuraBeamVerticalDividerProps> = ({ direction = "l-to-r", color = "white" }) => {
    const dirToRight = direction === 'l-to-r';

    return (
        <div className='mx-5 relative min-w-20'>
            <div className={`pb-5 h-5 ${borderColors[color]} ${dirToRight ? "border-l-8" : "border-r-8"} `} />
            <div className={`${dirToRight && "inset-y-0"} m-l-[-0.5px] m-b-[-0.5px] left-0 ${borderColors[color]} border-b-8 w-full`} />
            <div className={`pb-5 mb-[-0.5px] relative h-20 ${dirToRight ? "border-r-8" : "border-l-8"} ${borderColors[color]}`} />
        </div>
    )
}
