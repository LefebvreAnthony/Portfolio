"use-strict";

import { AnimationHome } from "../animations/home.animation.js";
import { AboutView } from "../views/About.view.js";
import { ProjectView } from "../views/project.view.js";

export function homeController() {
    const btn = document.querySelectorAll('button');
    btn.forEach(button => {
        button.addEventListener("click", () => {
            for (let i in AnimationHome()) {
                AnimationHome()[i].play();
            };
        });
    });
    btn[0].addEventListener("click", ProjectView);
    btn[1].addEventListener("click", AboutView);
};