"use-strict";

import { AnimationHome2 } from "../animations/home.animation.js";
import { AnimationsNav } from "../animations/nav.animation.js";
import { navController } from "./nav.controller.js";

export function headerController() {
    const nav = document.querySelector('nav');
    const body = document.querySelector("body");
    const btnBurger = document.getElementById("bar_burger");
    const btnsHome = [document.querySelector(".container_flex > figure"), document.querySelector("nav > ul > li")];

    const animNav = AnimationsNav();
    const animHome = AnimationHome2();

    let valid = true;
    let color = window.getComputedStyle(body).color == "rgb(235, 234, 236)" ? "#181818" : "#EBEAEC";

    nav.style.setProperty("--bgNav", color);
    btnsHome.forEach(btn => {
        btn.style.cursor = "pointer";
        btn.addEventListener("click", () => {
            animHome.forEach(anim => {
                anim.play();
            });
        })
    })
    btnBurger.addEventListener("click", () => {
        if (valid) {
            for (let i in animNav) animNav[i].play();
            valid = false
        } else for (let i in animNav) animNav[i].reverse();
    });

    navController();
};