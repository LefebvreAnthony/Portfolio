"use-strict";

import { downloadAnimation } from "../animations/about.animation.js";
import { AboutContents } from "../components/About.js";
import { AboutsContents } from "../content/Abouts.contents.js";
import { Header } from "../components/Header.js";
import { AboutController } from "../controllers/About.controller.js";
import { headerController } from "../controllers/header.controller.js";

export function ContactView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#181818";
    body.style.color = "#EBEAEC";
    Header(true, "About", "Contact");
    headerController();
    let about = new AboutContents();
    about.create();
    about.update(AboutsContents.contactMe(), "yes");
    downloadAnimation().forEach(element => { element.play() });
    AboutController(about);
};