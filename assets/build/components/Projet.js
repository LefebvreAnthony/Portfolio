"use-strict";

import { arrowDown } from "../animations/project.animation.js";
import { Arrows } from "./Arrows.js";
import { Container } from "./Container.js";
import { SvgMorph } from "./Morph.image.js";

export function UnitProject() {
    const arrows = Arrows;
    const container = Container.base();
    container.className = "main_project";
    return container.innerHTML = `
        <figure>
            <img src="./assets/img/background/bgRight.png" alt="img project" />
        </figure>
        <div>
            <h2>Name project</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor</p>
            <button>See more</button>
        </div>
        <span>
            ${arrows.arrowDown("#181818")}
        </span>
        ${SvgMorph()}
    `
}