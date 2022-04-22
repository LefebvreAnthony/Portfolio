"use-strict";

import { Container } from "../components/Container.js";
import { Header } from "../components/Header.js";
import { UnitProject } from "../components/Projet.js";
import { headerController } from "../controllers/header.controller.js";
import { projectController } from "../controllers/project.controller.js";

export function ProjectView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#EBEAEC";
    body.style.color = "#181818";
    Header(false, "Project");
    UnitProject();
    headerController();
    projectController();
};