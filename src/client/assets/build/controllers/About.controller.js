"use-strict";

import { aboutAnimationTransition, downloadAnimation, SkillsAnimation, SocialAnimation } from "../animations/about.animation.js";
import { AboutsContents } from "../content/Abouts.contents.js";

export function AboutController(about, linkActive) {
    let nav = document.querySelectorAll('#subNav li');

    linkActive == 0 ? nav[0].classList.add("active") : nav[2].classList.add("active");
    //* Nav SKILLS
    nav[0].addEventListener("click", () => {
        about.update(AboutsContents.aboutMe());
        setTimeout(() => downloadAnimation().forEach(element => { element.play() }), 1700);
    });
    //* Nav SKILL
    nav[1].addEventListener("click", () => {
        about.update(AboutsContents.skills());
        setTimeout(() => {
            SkillsAnimation().forEach(anim => { anim.play() });
        }, 2000)
    });

    //* Nav CONTACT
    nav[2].addEventListener("click", () => {
        about.update(AboutsContents.contactMe());
        setTimeout(() => {
            SocialAnimation().forEach(anim => { anim.play() });
            let link = document.querySelectorAll("#container_contact--title li");
            link[0].addEventListener("click", () => { window.open("https://github.com/LefebvreAnthony") });
            link[1].addEventListener("click", () => { window.open("https://www.linkedin.com/in/anthony-lefebvre-240177176/") });
        }, 2300);
    });

    //? Active nav
    nav.forEach(el => {
        el.addEventListener("click", () => {
            nav.forEach(li => li.classList.remove("active"));
            aboutAnimationTransition().play()
            el.classList.toggle("active");
        })
    });
}