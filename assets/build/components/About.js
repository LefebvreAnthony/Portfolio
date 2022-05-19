"use-strict";

import { Container } from "./Container.js";
import { NavAbout } from "./NavAbout.js";

export function About() {
    let container = Container.base();
    container.className = "about";
    let fragment = new DocumentFragment();
    let aboutMe = document.createElement("div");
    let myName = document.createElement("p");
    let myDesc = document.createElement("p");
    let canvas = document.createElement("canvas");

    aboutMe.setAttribute("id", "container_about_me");
    canvas.setAttribute("id", "canvas");
    myDesc.className = "soft";

    myName.textContent = "Hi, my name is Anthony, i'm developper web fullStack.";
    myDesc.textContent = "Former cook i new find my happiness in this job, here are somes links to find out more about my career.";

    aboutMe.append(myName, myDesc);
    fragment.append(aboutMe, canvas, NavAbout());
    container.appendChild(fragment);
}