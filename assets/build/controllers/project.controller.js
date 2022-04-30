"use-strict";

import { arrowDown, blobImg } from "../animations/project.animation.js";

export function projectController() {
    const animArrow = arrowDown();
    animArrow.play();
    blobImg().play();
}