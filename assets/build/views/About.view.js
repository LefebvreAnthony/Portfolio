"use-strict";

import { About } from "../components/About.js";
import { Canvas } from "../components/Canvas.js";
import { Header } from "../components/Header.js";
import { AboutController } from "../controllers/About.controller.js";
import { headerController } from "../controllers/header.controller.js";

export function AboutView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#181818";
    body.style.color = "#EBEAEC";
    Header(true, "About");
    headerController();
    About();
    Canvas();
    AboutController();
};