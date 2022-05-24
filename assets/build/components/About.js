"use-strict";

import { AboutsContents } from "../content/Abouts.contents.js";
import { RemoveChild } from "../utils/removeElements.js";
import { Container } from "./Container.js";

export class AboutContents {
    constructor() {
        this.container = Container.base();
        this.subContainer = Container.subContainer();
        this.nav = document.createElement("nav");
        this.ul = document.createElement("ul");
        this.arrNav = ["Profile", "Skills", "Contact"];
    }

    create() {
        let main = document.querySelector("main");
        this.container.className = "about";

        this.nav.setAttribute("id", "subNav");
        main.setAttribute("id", "about");

        this.arrNav.forEach(li => {
            let element = document.createElement("li");
            element.textContent = li;
            this.ul.appendChild(element);
        });
        this.nav.appendChild(this.ul);
        this.subContainer.appendChild(this.nav);
        this.container.appendChild(AboutsContents.aboutMe());
        main.appendChild(this.subContainer);
    }

    update(fragment) {
        RemoveChild(this.container);
        this.container.appendChild(fragment);
    }
}