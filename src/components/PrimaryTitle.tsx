import React, { FC, ReactNode } from 'react'
import { AuraBeamColor, bgColors, borderColors } from '../colors';
import { Line } from './Line';

export type PrimaryTitleProps = {
    text: string | ReactNode;
    color: AuraBeamColor
    right: boolean;
}

export const PrimaryTitle: FC<PrimaryTitleProps> = ({ text, color, right }) => {
    return (
        <>
            <div className={`h-10 w-10 rounded-full mt-[-1px] ${bgColors[color]} absolute ${right && "right-0"}`} />
            <h2 className={`text-4xl bold shadow-none mt-[-1px] ${!right ? "ml-16" : "mr-16 "}`}>
                <div className={`border-t-8 w-9 ${borderColors[color]} absolute ${right ? "right-4 border-l-8 rounded-tl-full" : "left-4 border-r-8 rounded-tr-full"}`} />
                <Line color={color} right={right} />
                <div className='w-full relative'>
                    <div className={`border-b-8 h-full mt-[0.245px] w-6 ${borderColors[color]} absolute ${right ? "right-[-20px] border-r-8 rounded-br-full" : "left-[-20px] border-l-8 rounded-bl-full"}`} />
                    <div className={`w-full border-b-8 p-2 ${borderColors[color]} ${right ? "pl-4 text-right" : "pr-4"}`} >
                        {text}
                    </div>
                </div>
            </h2 >
        </>
    )
}
