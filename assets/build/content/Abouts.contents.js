"use-strict";

import { Canvas } from "../components/Canvas.js";

export const AboutsContents = {

    aboutMe() {
        let fragment = new DocumentFragment();
        let aboutMe = document.createElement("div");
        let myName = document.createElement("p");
        let myDesc = document.createElement("p");

        aboutMe.setAttribute("id", "container_about_me");
        myDesc.className = "soft";

        myName.textContent = "Hi, my name is Anthony, i'm a developper web fullStack.";
        myDesc.textContent = "Former cook i new find my happiness in this job, here are somes links to find out more about my career.";
        aboutMe.append(myName, myDesc);
        fragment.append(aboutMe);

        return fragment;
    },
    skills() {

        let fragment = new DocumentFragment();
        let canvas = document.createElement("canvas");

        canvas.setAttribute("id", "canvas");
        Canvas(canvas);

        fragment.append(canvas);

        return fragment;
    },
    contactMe() {

        let fragment = new DocumentFragment();

        return fragment;

    }
}