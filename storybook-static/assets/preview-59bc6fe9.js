import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const{useParameter:f,addons:R,useEffect:S,useMemo:N}=__STORYBOOK_MODULE_PREVIEW_API__;var g=Object.defineProperty,A=(e,t)=>{for(var r in t)g(e,r,{get:t[r],enumerable:!0})},O={};A(O,{initializeThemeState:()=>_,pluckThemeFromContext:()=>T,useThemeParameters:()=>h});var c="themes",v=`storybook/${c}}`,M="theme",L={},P={REGISTER_THEMES:`${v}/REGISTER_THEMES`};function T({globals:e}){return e[M]||""}function h(){return f(c,L)}function _(e,t){R.getChannel().emit(P.REGISTER_THEMES,{defaultTheme:t,themes:e})}var k="html",m=e=>e.split(" ").filter(Boolean),y=({themes:e,defaultTheme:t,parentSelector:r=k})=>(_(Object.keys(e),t),(u,d)=>{let{themeOverride:s}=h(),o=T(d);return S(()=>{let n=s||o||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([E])=>E!==n).forEach(([E,p])=>{let l=m(p);l.length>0&&a.classList.remove(...l)});let i=m(e[n]);i.length>0&&a.classList.add(...i)},[s,o,r]),u()});const b=[y({themes:{light:"light",dark:"dark"},defaultTheme:"light"})],x={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{b as decorators,x as default};