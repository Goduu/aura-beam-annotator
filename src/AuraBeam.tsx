import React, { FC, ReactNode } from 'react'

export type AuraBeamProps = {
    children: ReactNode;
};

/**
AuraBeam gives the drop shadow effect to the beams.
It is used to wrap and style the other components.
@param children - The content to be wrapped by the AuraBeam component.
@returns The AuraBeam component. 
*/
export const AuraBeam: FC<AuraBeamProps> = ({ children }) => {
    return (
        <div className='flex flex-col gap-0 py-4 drop-shadow-[0_0_0.9rem_#55555590] dark:drop-shadow-[0_0_0.9rem_#ffffff70]'>{children}</div>
    )
}
