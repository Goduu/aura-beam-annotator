import React, { FC, ReactNode } from 'react'
import { ColorKeys, bgColors, borderColors } from '../colors';

export type PrimaryTitleProps = {
    text: string | ReactNode;
    color: ColorKeys
    positionLeft: boolean;
}

export const PrimaryTitle: FC<PrimaryTitleProps> = ({ text, color, positionLeft }) => {
    return (
        <>
            <div className={`h-10 w-10 rounded-full ${bgColors[color]} absolute ${!positionLeft && "right-0"}`}></div>
            <h2 className={`text-4xl bold shadow-none ${positionLeft ? "ml-14" : "mr-14 "}`}>
                <span className={`z-10 absolute inset-y-0  border-r-8  ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}`}> </span>
                {text}
            </h2>
        </>
    )
}
