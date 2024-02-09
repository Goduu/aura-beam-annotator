import React, { FC, ReactNode } from 'react'
import { ColorKeys, bgColors, borderColors } from '../colors';
import { Line } from './Line';

export type SecondaryTitleProps = {
    text: string | ReactNode;
    color: ColorKeys
    right: boolean;
}

export const SecondaryTitle: FC<SecondaryTitleProps> = ({ text, color, right }) => {
    return (
        <>
            <div className={`h-7 w-7 rounded-sm mx-1.5 ${bgColors[color]} absolute ${right && "right-0"}`} />
            <h3 className={`text-xl bold shadow-none ${right ? "mr-14" : "ml-14"}`}>
                <Line color={color} right={right} />
                {text}
            </h3>
        </>
    )
}
