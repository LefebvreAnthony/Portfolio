"use-strict";

import { downloadAnimation } from "../animations/about.animation.js";
import { AboutContents } from "../components/About.js";
import { Header } from "../components/Header.js";
import { AboutController } from "../controllers/About.controller.js";
import { headerController } from "../controllers/header.controller.js";

export function AboutView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#181818";
    body.style.color = "#EBEAEC";
    Header(true, "About", "About");
    headerController();
    let about = new AboutContents();
    about.create();
    downloadAnimation().forEach(element => { element.play() });
    AboutController(about, 0);
};