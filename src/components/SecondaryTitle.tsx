import React, { FC, ReactNode } from 'react'
import { ColorKeys, bgColors, borderColors } from '../colors';

export type SecondaryTitleProps = {
    text: string | ReactNode;
    color: ColorKeys
    positionLeft: boolean;
}

export const SecondaryTitle: FC<SecondaryTitleProps> = ({ text, color, positionLeft }) => {
    return (
        <>
            <div className={`h-7 w-7 rounded-sm mx-1.5 ${bgColors[color]} absolute ${!positionLeft && "right-0"}`}></div>
            <h3 className={`text-xl bold shadow-none ${positionLeft ? "ml-14" : "mr-14 "}`}>
                <span className={`z-10 absolute inset-y-0  border-r-8  ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}`}> </span>
                {text}
            </h3>
        </>
    )
}
