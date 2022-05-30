"use-strict";

import { downloadAnimation } from "../animations/about.animation.js";
import { AboutsContents } from "../content/Abouts.contents.js";

export function AboutController(about) {
    let nav = document.querySelectorAll('#subNav li');
    nav[0].addEventListener("click", () => {
        about.update(AboutsContents.aboutMe());
        downloadAnimation().forEach(element => { element.play() });
    });
    nav[1].addEventListener("click", () => about.update(AboutsContents.skills()));
    nav[2].addEventListener("click", () => about.update(AboutsContents.contactMe()));
}