"use-strict";

import { About } from "../components/About.js";
import { Header } from "../components/Header.js";
import { headerController } from "../controllers/header.controller.js";

export function AboutView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#181818";
    body.style.color = "#EBEAEC";
    Header(true, "About");
    headerController();
    About();
};