"use-strict";

import { animArrows, animBlobImg, animContentProject, animTransitionContent, animBlobImgReverse } from "../animations/project.animation.js";

export function projectController() {
    let arrowDown = document.getElementById("arrow-down");
    let arrowUp = document.getElementById("arrow-up");
    let block = document.querySelector(".project_description--before");

    //* run anims
    animArrows("#arrow-down", "15px").play();
    animArrows("#arrow-up", " -15px").play();
    animBlobImg().play();
    animContentProject().play();

    function trans() {
        animTransitionContent().play();
        animBlobImgReverse().play();
        setTimeout(() => {
            arrowUp.style.display = "block";
        }, 1800)

    }
    arrowDown.addEventListener("click", trans)
    arrowUp.addEventListener("click", trans)
    window.onwheel = trans
}