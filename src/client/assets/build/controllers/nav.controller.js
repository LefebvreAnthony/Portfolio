"use-strict";

import { SocialAnimation } from "../animations/about.animation.js";
import { TransitionPage } from "../animations/transition.page.animation.js";
import { AboutView } from "../views/About.view.js";
import { ContactView } from "../views/Contact.view.js";
import { ProjectView } from "../views/project.view.js";

export function navController() {
    let btns = document.querySelectorAll('header li');
    let texts = document.querySelectorAll(".text-transition");

    for (let i = 1; i < btns.length; i++) {

        btns[i].style.cursor = "pointer";
        btns[i].addEventListener('click', () => {
            texts.forEach(text => {
                text.textContent = btns[i].innerText;
            })
            for (let i in TransitionPage()) {
                TransitionPage()[i].play();
            };
        });
    };

    //& btn project nav
    btns[1].addEventListener("click", () => {
        setTimeout(() => {
            ProjectView();
        }, 1000);
    });

    //& btn about nav
    btns[2].addEventListener("click", () => {
        setTimeout(() => {
            AboutView();
        }, 1000);
    });

    //& btn about contact
    btns[3].addEventListener("click", () => {
        setTimeout(() => {
            ContactView();
            setTimeout(() => {
                SocialAnimation().forEach(anim => { anim.play() });
                let link = document.querySelectorAll("#container_contact--title li");
                link[0].addEventListener("click", () => { window.open("https://github.com/LefebvreAnthony") });
                link[1].addEventListener("click", () => { window.open("https://www.linkedin.com/in/anthony-lefebvre-240177176/") });
            }, 1000);
        }, 1000);
    });
}