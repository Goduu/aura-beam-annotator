import { FC, ReactNode } from 'react';
import { ColorKeys } from './colors';
export type AuraBeamAnnotatorProps = {
    title: string;
    children: ReactNode;
    positioning?: 'left' | 'right';
    color?: ColorKeys;
};
export declare const AuraBeamAnnotator: FC<AuraBeamAnnotatorProps>;
//# sourceMappingURL=AuraBeamAnnotator.d.ts.map