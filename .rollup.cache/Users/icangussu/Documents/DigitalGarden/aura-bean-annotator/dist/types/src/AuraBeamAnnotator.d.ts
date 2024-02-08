import { FC, ReactNode } from 'react';
import { ColorKeys } from './colors';
export type AuraBeamAnnotatorProps = {
    title: string;
    positioning: 'left' | 'right';
    children: ReactNode;
    color?: ColorKeys;
};
export declare const AuraBeamAnnotator: FC<AuraBeamAnnotatorProps>;
//# sourceMappingURL=AuraBeamAnnotator.d.ts.map