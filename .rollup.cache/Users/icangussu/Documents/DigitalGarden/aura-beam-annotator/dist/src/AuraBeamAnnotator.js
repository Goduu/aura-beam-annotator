import React from 'react';
import { bgColors, borderColors } from './colors';
export const AuraBeamAnnotator = ({ title, color = "white", positioning = "left", children }) => {
    const positionLeft = positioning === 'left';
    return (React.createElement("div", { className: `relative flex flex-col px-1 ${positionLeft ? 'items-start' : 'items-end'}` },
        React.createElement("div", { className: "relative flex items-center gap-2" },
            React.createElement("div", { className: `h-10 w-10 rounded-full ${bgColors[color]} absolute ${!positionLeft && "right-0"}` }),
            React.createElement("h2", { className: `text-4xl bold shadow-none ${positionLeft ? "ml-12" : "mr-12 "}` },
                React.createElement("span", { className: `z-10 absolute inset-y-0  border-r-8 rounded-sm ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}` }, " "),
                title)),
        React.createElement("div", { className: "mt-[-0.5px] pb-20 mb-[-0.5px] relative" },
            React.createElement("div", { className: `z-10 absolute inset-y-0  border-r-8 rounded-sm ${borderColors[color]} ${positionLeft ? "left-0 ml-4" : "right-0 mr-4"}` }, " "),
            React.createElement("div", { className: `mt-4 drop-shadow-none ${positionLeft ? "ml-12" : "mr-12 text-right"}` }, children))));
};
//# sourceMappingURL=AuraBeamAnnotator.js.map