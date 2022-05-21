"use-strict";

import { animArrows, animBlobImg, animContentProject, animTransitionContent, animBlobImgReverse } from "../animations/project.animation.js";
import { Projects } from "../content/Projects.contents.js";

export function projectController(project) {
    let arrowDown = document.getElementById("arrow-down");
    let arrowUp = document.getElementById("arrow-up");
    let index = 1;

    //* run anims
    animArrows("#arrow-down", "15px").play();
    animArrows("#arrow-up", " -15px").play();
    animBlobImg().play();
    animContentProject().play();

    function trans() {
        if (index < Projects.size) {

            animTransitionContent().play();
            animBlobImgReverse().play();
        }
        setTimeout(() => arrowUp.toggle("hide"), 1800);
    }
    function scroll(event) {

        if (event.deltaY > 0 && index < Projects.size) {
            index++
            trans();
            setTimeout(() => project.next(), 500);
        }
        if (event.deltaY < 0 && index > 1) {
            index--
            trans();
            setTimeout(() => project.previous(), 500);

        }
    }
    arrowDown.addEventListener("click", () => {
        index--;
        trans();
        setTimeout(() => project.next(), 500);
    });
    arrowUp.addEventListener("click", () => {
        index++;
        trans();
        setTimeout(() => project.previous(), 500);
    });

    window.onwheel = scroll;
}