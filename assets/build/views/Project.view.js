"use-strict";

import { Header } from "../components/Header.js";
import { headerController } from "../controllers/header.controller.js";

export function Project() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#EBEAEC";
    body.style.color = "#181818";
    Header(false, "Project");
};