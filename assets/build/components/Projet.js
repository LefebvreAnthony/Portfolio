"use-strict";

import { Arrows } from "./Arrows.js";
import { Container } from "./Container.js";
import { SvgMorph } from "./Morph.image.js";

export function UnitProject() {
    const arrows = Arrows;
    const container = Container.base();

    container.className = "main_project";

    let fragment = new DocumentFragment();
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let containerDescription = document.createElement("div");
    let beforeDesc = document.createElement("div");
    let h2 = document.createElement("h2");
    let pDescription = document.createElement("p");
    let btnSee = document.createElement("button");
    let arrow = document.createElement("span");
    let arrowUp = document.createElement("span");


    img.src = `./assets/img/background/bgRight.png`;
    containerDescription.className = "project_description";
    beforeDesc.className = "project_description--before";
    arrow.setAttribute("id", "arrow-down");
    arrowUp.setAttribute("id", "arrow-up");
    h2.textContent = "Name Project";
    pDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor";
    btnSee.textContent = "See more";

    figure.appendChild(img);
    containerDescription.append(beforeDesc, h2, pDescription, btnSee);
    arrow.appendChild(arrows.arrowDown("#181818"));
    arrowUp.appendChild(arrows.arrowUp("#181818"));
    fragment.append(figure, containerDescription, arrow, arrowUp)
    container.append(fragment, SvgMorph());

    return fragment;
}