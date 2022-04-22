"use-strict";

import { AnimationNav } from "../animations/nav.animation.js";

export function headerController() {
    const nav = document.querySelector('nav');
    const body = document.querySelector("body");
    const btnBurger = document.getElementById("bar_burger");
    const anim = AnimationNav();

    let valid = true;
    let color = window.getComputedStyle(body).color == "rgb(235, 234, 236)" ? "#181818" : "#EBEAEC";

    nav.style.setProperty("--bgNav", color);

    btnBurger.addEventListener("click", () => {


        if (valid) {
            for (let i in anim) anim[i].play();
            valid = false
        } else for (let i in anim) anim[i].reverse();

    })
};