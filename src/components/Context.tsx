import { createContext } from "react";
import { AuraBeamAnnotatorProps } from "../AuraBeamAnnotator";
import { Color } from "../colors";

type SharedProps = {
    color: Color;
    positioning: "left" | "right";

}
const defaultValues: SharedProps = {
    color: "white",
    positioning: "left",
}

export const SharedPropContext = createContext(defaultValues);
