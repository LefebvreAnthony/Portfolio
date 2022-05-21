"use-strict";

import { Technos } from "./technos.contents.js";

export const Projects = new Map([
    [
        "quizz",
        {
            img: "./assets/img/background/bgRight.png",
            h2: "Quizz Game Project",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://al.quiz.promo-105.codeur.online/index.html",
            technos: {
                js: Technos.js,
                node: Technos.node,
                sass: Technos.sass,

            }

        }
    ],
    [
        "form",
        {
            img: "./assets/img/background/bgRight.png",
            h2: "Form Project",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://anthonyl.promo-105.codeur.online/ECF1/",
            technos: {
                js: "",
                php: "",
            }
        }
    ],
    [
        "OhMyFood",
        {
            img: "./assets/img/background/bgRight.png",
            h2: "OhMyFood",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://lefebvreanthony.github.io/P3-OC/",
            technos: {

            }
        }
    ]
])