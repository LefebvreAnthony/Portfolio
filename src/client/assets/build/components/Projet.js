"use-strict";

import { HTMLElement } from "../utils/HtmlElement.js";
import { Projects } from "../content/Projects.contents.js";
import { Arrows } from "./Arrows.js";
import { Container } from "./Container.js";
import { SvgMorph } from "./Morph.image.js";

export class ProjectContent {

    constructor(key) {
        this._key = key;
        this.project = Projects.get(key);
        this.technos = Projects.get(key).technos;
        this.container = Container.base();
        this.figure = document.createElement("figure");
        this.img = document.createElement("img");
        this.containerDescription = new HTMLElement("div").attributes([["class", "project_description"]]);
        this.containerTechnos = new HTMLElement("div").attributes([["class", "list_technos"]]);
        this.beforeDesc = new HTMLElement("div").attributes([["class", "project_description--before"]]);
        this.h2 = document.createElement("h2");
        this.h3 = new HTMLElement("h3").text("Technologies Stack :");
        this.pDescription = document.createElement("p");
        this.btnSee = new HTMLElement("button").text("See more");
        this.btnGit = new HTMLElement("button").attributes([["class", "btn_git"]]);
        this.arrowBot = new HTMLElement("span", "arrow-down").element;
        this.arrowTop = new HTMLElement("span", "arrow-up").attributes([["class", "hide"]]);
        this.ul = document.createElement("ul");
    }

    create() {
        let fragment = new DocumentFragment();

        container.className = "main_project";
        this.btnGit.innerHTML = `<svg width="86" height="70" viewBox="0 0 86 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.5269 -0.0689681C73.2035 -0.103338 67.8063 0.685422 58.795 6.71655C53.8838 5.4891 48.6582 4.88339 43.4237 4.88339C37.6642 4.88339 31.8439 5.61475 26.4161 7.10372C13.4785 -1.72237 7.76797 0.0863618 7.76797 0.0863618C4.03991 9.40917 6.34368 16.3115 7.04389 18.0258C2.6621 22.7548 -0.0128784 28.7936 -0.0128784 36.1949C-0.0128784 41.7824 0.623072 46.794 2.17679 51.1506C2.26296 51.4868 2.23503 51.4118 2.38021 51.6997C2.72251 52.6016 3.1031 53.477 3.53087 54.3224C3.67745 54.6266 3.81087 54.8518 3.81087 54.8518C8.17852 62.9933 16.7886 68.2525 32.108 69.9038L55.2776 69.93C71.615 68.31 79.4546 63.0351 83.0672 54.8387L83.2968 54.3049C83.6391 53.477 83.9376 52.6155 84.7538 49.7156C85.5699 46.8157 85.935 41.7936 85.935 36.1926C85.935 28.1598 82.918 21.7323 78.0186 16.8423C78.8747 14.0787 80.0185 7.9412 76.8767 0.0841219C76.8767 0.0841219 76.4362 -0.0555281 75.527 -0.0690381L75.5269 -0.0689681ZM57.2681 29.4093C61.0406 29.4011 64.2721 30.0488 66.6983 32.5942V32.5964C69.7341 35.7843 71.5107 39.6331 71.5107 43.7808C71.5107 63.1469 59.0555 63.6737 43.6927 63.6737C28.3273 63.6737 15.8747 60.9901 15.8747 43.7808C15.8747 39.6606 17.6254 35.8347 20.6238 32.6598C25.6253 27.3685 34.0893 30.1705 43.6928 30.1705C48.6224 30.1697 53.2523 29.418 57.2683 29.4092L57.2681 29.4093ZM28.6516 35.1121C25.455 35.1121 22.8635 39.4339 22.8635 44.7676C22.8635 50.102 25.4549 54.4253 28.6516 54.4253C31.8483 54.4253 34.4397 50.102 34.4397 44.7676C34.4397 39.4347 31.8484 35.1159 28.6516 35.1121ZM59.7071 35.1121C56.5104 35.1121 53.919 39.4339 53.919 44.7676C53.919 50.102 56.5103 54.4253 59.7071 54.4253C62.9037 54.4253 65.4952 50.102 65.4952 44.7676C65.4952 39.4347 62.9038 35.1159 59.7071 35.1121Z" fill="#181818"/>
        </svg>
        `;

        this.figure.appendChild(this.img);
        this.containerTechnos.append(this.h3, this.ul);
        this.containerDescription.append(this.beforeDesc, this.h2, this.pDescription, this.btnSee, this.btnGit, this.containerTechnos);
        this.arrowBot.appendChild(Arrows.arrowDown("#181818"));
        this.arrowTop.appendChild(Arrows.arrowUp("#181818"));

        fragment.append(this.figure, this.containerDescription, this.arrowBot, this.arrowTop);
        this.container.append(fragment, SvgMorph());

        this.update();
    }
    update() {

        this.img.src = this.project.img;
        this.h2.textContent = this.project.h2;
        this.pDescription.textContent = this.project.desc;
        this.ul.innerHTML = "";
        for (let tech in this.technos) {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = this.technos[tech];
            li.appendChild(img);
            this.ul.appendChild(li);
        }
        this.controllers();
    }
    controllers() {
        this.btnSee.addEventListener("click", () => window.open(this.project.link));
        this.btnGit.addEventListener("click", () => window.open(this.project.linkGit));
    }
    next() {
        let entries = Projects.entries();

        for (let [k, v] of entries) {
            if (k == this._key) {
                let next = entries.next().value;
                this._key = next[0];
                this.project = next[1];
                this.technos = Projects.get(this._key).technos
                break;
            };
        };

        this.update();
    }
    previous() {
        let entries = Projects.entries();
        let key, value;

        for (const [k, v] of entries) {
            if (k == this._key) break;
            key = k;
            value = v;
        };
        this._key = key;
        this.project = value;
        this.technos = Projects.get(this._key).technos;

        this.update();
    }
};