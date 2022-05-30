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
        this.blockTransition = document.createElement("div");
        this.arrNav = ["Profile", "Skills", "Contact"];
    }

    create() {
        let main = document.querySelector("main");
        this.container.className = "about";

        this.blockTransition.setAttribute("id", "about-transition");
        this.nav.setAttribute("id", "subNav");
        main.setAttribute("id", "about");

        this.arrNav.forEach(li => {
            let element = document.createElement("li");
            element.textContent = li;
            this.ul.appendChild(element);
        });
        this.nav.appendChild(this.ul);
        this.subContainer.append(this.nav, this.blockTransition);
        this.container.appendChild(AboutsContents.aboutMe());
        main.appendChild(this.subContainer);
    }

    update(fragment) {
        setTimeout(() => {
            RemoveChild(this.container);
            this.container.appendChild(fragment);
        }, 1500)
    }
}