import React, { FC, ReactNode } from 'react'
import { Color, bgColors } from '../colors';
import { Line } from './Line';

export type PrimaryTitleProps = {
    text: string | ReactNode;
    color: Color
    right: boolean;
}

export const PrimaryTitle: FC<PrimaryTitleProps> = ({ text, color, right }) => {
    return (
        <>
            <div className={`h-10 w-10 rounded-full mt-[-1px] ${bgColors[color]} absolute ${right && "right-0"}`} />
            <h2 className={`text-4xl bold shadow-none mt-[-1px] ${!right ? "ml-14" : "mr-14 "}`}>
                <Line color={color} right={right} />
                {text}
            </h2>
        </>
    )
}
