"use-strict";

import { arrowDown, animBlobImg, animContentProject } from "../animations/project.animation.js";

export function projectController() {
    const animArrow = arrowDown();
    animArrow.play();
    animBlobImg().play();
    animContentProject().play();
}