"use-strict";

import { TransitionPage } from "../animations/transition.page.animation.js";
import { AboutView } from "../views/About.view.js";
import { ProjectView } from "../views/project.view.js";

export function navController() {
    let btns = document.querySelectorAll('li');

    btns.forEach(btn => {
        btn.style.cursor = "pointer";
        btn.addEventListener('click', () => {
            for (let i in TransitionPage()) {
                TransitionPage()[i].play();
            }
        })
    });

    //& btn project nav
    btns[1].addEventListener("click", () => {
        ProjectView();
    });


    //& btn about nav
    btns[2].addEventListener("click", () => {
        AboutView();
    })
}