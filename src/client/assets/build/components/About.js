"use-strict";

import { HTMLElement } from "../utils/HtmlElement.js";
import { AboutsContents } from "../content/Abouts.contents.js";
import { RemoveChild } from "../utils/removeElements.js";
import { Container } from "./Container.js";

export class AboutContents {
    constructor() {
        this.container = Container.base();
        this.subContainer = Container.subContainer();
        this.nav = new HTMLElement("nav", "subNav").element;
        this.ul = new HTMLElement("ul").element;
        this.blockTransition = new HTMLElement("div", "about-transition").element;
        this.arrNav = ["Profile", "Skills", "Contact"];
    }

    create() {
        let main = document.querySelector("main");
        this.container.className = "about";

        main.setAttribute("id", "about");

        this.arrNav.forEach(li => {
            let element = new HTMLElement("li").text(li);
            this.ul.appendChild(element);
        });
        this.nav.appendChild(this.ul);
        this.subContainer.append(this.nav, this.blockTransition);
        this.container.appendChild(AboutsContents.aboutMe());
        main.appendChild(this.subContainer);
    }

    update(fragment, contact) {
        if (!contact) {

            setTimeout(() => {
                RemoveChild(this.container);
                this.container.appendChild(fragment);
            }, 1500)
        } else {
            RemoveChild(this.container);
            this.container.appendChild(fragment);

        }
    }
}