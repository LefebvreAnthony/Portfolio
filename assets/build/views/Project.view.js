"use-strict";

import { Header } from "../components/Header.js";
import { ProjectContent } from "../components/Projet.js";
import { headerController } from "../controllers/header.controller.js";
import { projectController } from "../controllers/project.controller.js";

export function ProjectView() {
    const body = document.querySelector('body');
    body.style.backgroundColor = "#EBEAEC";
    body.style.color = "#181818";
    Header(false, "Project");
    let project = new ProjectContent("quizz");
    project.create();
    headerController();
    projectController(project);
};