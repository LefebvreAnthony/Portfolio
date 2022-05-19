"use-strict";

import { SvgNavAbout } from "./SvgNavAbout.js";

export function NavAbout() {
    let fragment = new DocumentFragment();
    let subNav = document.createElement("nav");
    let ul = document.createElement("ul");
    let arrLi = ["Languages", "Cv", "Contact"];

    subNav.setAttribute("id", "subNav");
    arrLi.forEach(li => {
        let element = document.createElement("li");
        element.textContent = li;
        ul.appendChild(element);
    });
    subNav.append(ul, SvgNavAbout());
    fragment.appendChild(subNav);

    return fragment;
}