"use-strict";

import { AboutsContents } from "../content/Abouts.contents.js";

export function AboutController(about) {
    let nav = document.querySelectorAll('#subNav li');
    nav[0].addEventListener("click", () => about.update(AboutsContents.aboutMe()));
    nav[1].addEventListener("click", () => about.update(AboutsContents.skills()));
    nav[2].addEventListener("click", () => about.update(AboutsContents.contactMe()));
}