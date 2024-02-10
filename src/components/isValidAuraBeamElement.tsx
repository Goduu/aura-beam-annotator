import { ReactElement, isValidElement } from "react";
import { AuraBeam } from "../AuraBeam";
import { AuraBeamAnnotator } from "../AuraBeamAnnotator";
import { AuraBeamBody } from "../AuraBeamBody";
import { AuraBeamTitle } from "../AuraBeamTitle";
import { AuraBeamVerticalDivider } from "../AuraBeamVerticalDivider";

/**
 * Checks if the given element is a valid AuraBeam component or one of its related components.
 * @param object - The element to be checked.
 * @returns True if the element is a valid AuraBeam component or one of its related components, false otherwise.
 */
export function isValidAuraBeamElement<P>(object: {} | null | undefined): object is ReactElement<P> {
    return isValidElement(object) && (object.type === AuraBeam || object.type === AuraBeamAnnotator || object.type === AuraBeamBody || object.type === AuraBeamTitle || object.type === AuraBeamVerticalDivider);
}
