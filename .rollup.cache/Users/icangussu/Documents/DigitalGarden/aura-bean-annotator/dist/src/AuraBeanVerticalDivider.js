import React from 'react';
import { borderColors } from './colors';
export const AuraBeanVerticalDivider = ({ direction, color = "current" }) => {
    const dirToRight = direction === 'l-to-r';
    return (React.createElement("div", { className: ' mx-5 relative' },
        React.createElement("div", { className: `pb-5 h-5 ${borderColors[color]} ${dirToRight ? "border-l-8" : "border-r-8"} ` }),
        React.createElement("div", { className: `${dirToRight && "inset-y-0"} m-l-[-0.5px] m-b-[-0.5px] left-0 ${borderColors[color]} border-b-8 w-full` }),
        React.createElement("div", { className: `pb-5 mb-[-0.5px] relative h-20 ${dirToRight ? "border-r-8" : "border-l-8"} ${borderColors[color]}` })));
};
//# sourceMappingURL=AuraBeanVerticalDivider.js.map