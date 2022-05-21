"use-strict";

import { Projects } from "../content/Projects.contents.js";
import { Arrows } from "./Arrows.js";
import { Container } from "./Container.js";
import { SvgMorph } from "./Morph.image.js";

export class ProjectContent {

    constructor(key) {
        this._key = key
        this.project = Projects.get(key)
        this.container = Container.base();
        this.figure = document.createElement("figure");
        this.img = document.createElement("img");
        this.containerDescription = document.createElement("div");
        this.beforeDesc = document.createElement("div");
        this.h2 = document.createElement("h2");
        this.pDescription = document.createElement("p");
        this.btnSee = document.createElement("button");
        this.arrowBot = document.createElement("span");
        this.arrowTop = document.createElement("span");
    }

    create() {
        this.update();
        let fragment = new DocumentFragment();

        container.className = "main_project";
        this.containerDescription.className = "project_description";
        this.beforeDesc.className = "project_description--before";
        this.arrowTop.className = "hide";
        this.arrowBot.setAttribute("id", "arrow-down")
        this.arrowTop.setAttribute("id", "arrow-up")


        this.figure.appendChild(this.img);
        this.containerDescription.append(this.beforeDesc, this.h2, this.pDescription, this.btnSee);
        this.arrowBot.appendChild(Arrows.arrowDown("#181818"));
        this.arrowTop.appendChild(Arrows.arrowUp("#181818"));

        fragment.append(this.figure, this.containerDescription, this.arrowBot, this.arrowTop);
        this.container.append(fragment, SvgMorph());
    }
    update() {

        this.img.src = this.project.img;
        this.h2.textContent = this.project.h2;
        this.pDescription.textContent = this.project.desc;
        this.btnSee.textContent = "See more";
        this.controllers();
    }
    controllers() {
        this.btnSee.addEventListener("click", () => {
            window.location.assign(this.project.link);
        })
    }
    next() {
        let entries = Projects.entries();

        for (let [k, v] of entries) {
            if (k == this._key) {
                let next = entries.next().value;
                this._key = next[0]
                this.project = next[1];
                break
            }
        }

        this.update();
    }
    previous() {
        let entries = Projects.entries();
        let key, value

        for (const [k, v] of entries) {
            if (k == this._key) break
            key = k
            value = v
        }
        this._key = key
        this.project = value

        this.update();
    }
};