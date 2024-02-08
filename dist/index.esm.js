import e from"react";var r={slate:"border-slate-500",gray:"border-gray-500",zinc:"border-zinc-500",neutral:"border-neutral-500",stone:"border-stone-500",red:"border-red-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-500",lime:"border-lime-500",green:"border-green-500",emerald:"border-emerald-500",teal:"border-teal-500",cyan:"border-cyan-500",sky:"border-sky-500",blue:"border-blue-500",indigo:"border-indigo-500",violet:"border-violet-500",purple:"border-purple-500",fuchsia:"border-fuchsia-500",pink:"border-pink-500",rose:"border-rose-500",white:"border-white",black:"border-black",lightBlue:"border-lightBlue-500",transparent:"border-transparent",blueGray:"border-blueGray-500",warmGray:"border-warmGray-500",trueGray:"border-trueGray-500",coolGray:"border-coolGray-500",inherit:"border-inherit",current:"border-current"},t={slate:"bg-slate-500",gray:"bg-gray-500",zinc:"bg-zinc-500",neutral:"bg-neutral-500",stone:"bg-stone-500",red:"bg-red-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-500",lime:"bg-lime-500",green:"bg-green-500",emerald:"bg-emerald-500",teal:"bg-teal-500",cyan:"bg-cyan-500",sky:"bg-sky-500",blue:"bg-blue-500",indigo:"bg-indigo-500",violet:"bg-violet-500",purple:"bg-purple-500",fuchsia:"bg-fuchsia-500",pink:"bg-pink-500",rose:"bg-rose-500",white:"bg-white",black:"bg-black",lightBlue:"bg-lightBlue-500",transparent:"bg-transparent",blueGray:"bg-blueGray-500",warmGray:"bg-warmGray-500",trueGray:"bg-trueGray-500",coolGray:"bg-coolGray-500",inherit:"bg-inherit",current:"bg-current"},a=function(a){var l=a.text,o=a.color,n=a.positionLeft;return e.createElement(e.Fragment,null,e.createElement("div",{className:"h-10 w-10 rounded-full ".concat(t[o]," absolute ").concat(!n&&"right-0")}),e.createElement("h2",{className:"text-4xl bold shadow-none ".concat(n?"ml-14":"mr-14 ")},e.createElement("span",{className:"z-10 absolute inset-y-0  border-r-8  ".concat(r[o]," ").concat(n?"left-0 ml-4":"right-0 mr-4")}," "),l))},l=function(a){var l=a.text,o=a.color,n=a.positionLeft;return e.createElement(e.Fragment,null,e.createElement("div",{className:"h-7 w-7 rounded-sm mx-1.5 ".concat(t[o]," absolute ").concat(!n&&"right-0")}),e.createElement("h3",{className:"text-xl bold shadow-none ".concat(n?"ml-14":"mr-14 ")},e.createElement("span",{className:"z-10 absolute inset-y-0  border-r-8  ".concat(r[o]," ").concat(n?"left-0 ml-4":"right-0 mr-4")}," "),l))},o=function(t){var o=t.title,n=t.type,c=void 0===n?"primary":n,i=t.color,b=void 0===i?"white":i,d=t.positioning,m=void 0===d?"left":d,s=t.children,g="left"===m,u="primary"===c;return e.createElement("div",{className:"relative flex flex-col px-1 ".concat(g?"items-start":"items-end")},e.createElement("div",{className:"relative flex items-center gap-2"},u?e.createElement(a,{text:o,color:b,positionLeft:g}):e.createElement(l,{text:o,color:b,positionLeft:g})),s?e.createElement("div",{className:"mt-[-0.5px] pb-16 mb-[-0.5px] relative"},e.createElement("div",{className:"z-10 absolute inset-y-0  border-r-8 ".concat(r[b]," ").concat(g?"left-0 ml-4":"right-0 mr-4")}," "),e.createElement("div",{className:"mt-4 drop-shadow-none ".concat(g?"ml-14":"mr-14 text-right")},s)):e.createElement("div",{className:"pb-6"},e.createElement("div",{className:"z-10 absolute inset-y-0  border-r-8 ".concat(r[b]," ").concat(g?"left-0 ml-5":"right-0 mr-5")}," ")))},n=function(r){var t=r.children;return e.createElement("div",{className:"flex flex-col gap-0 py-4 drop-shadow-[0_0_0.9rem_#55555590] dark:drop-shadow-[0_0_0.9rem_#ffffff70]"},t)},c=function(t){var a=t.direction,l=void 0===a?"l-to-r":a,o=t.color,n=void 0===o?"white":o,c="l-to-r"===l;return e.createElement("div",{className:"mx-5 relative min-w-20"},e.createElement("div",{className:"pb-5 h-5 ".concat(r[n]," ").concat(c?"border-l-8":"border-r-8"," ")}),e.createElement("div",{className:"".concat(c&&"inset-y-0"," m-l-[-0.5px] m-b-[-0.5px] left-0 ").concat(r[n]," border-b-8 w-full")}),e.createElement("div",{className:"pb-5 mb-[-0.5px] relative h-20 ".concat(c?"border-r-8":"border-l-8"," ").concat(r[n])}))};export{o as AuraBeamAnnotator,n as AuraBeamAnnotatorContainer,c as AuraBeamVerticalDivider};
