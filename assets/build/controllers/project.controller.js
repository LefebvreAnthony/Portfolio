"use-strict";

import { arrowDown } from "../animations/project.animation.js";

export function projectController() {
    const animArrow = arrowDown();
    animArrow.play();
}