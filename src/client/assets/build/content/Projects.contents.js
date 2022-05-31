"use-strict";

import { Technos } from "./technos.contents.js";

export const Projects = new Map([
    [
        "quizz",
        {
            img: "./assets/img/projects/quizzGame.png",
            h2: "Quizz Game Project",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://al.quiz.promo-105.codeur.online/index.html",
            linkGit: "https://github.com/LucasLenoir/Quizz_Game",
            technos: {
                js: Technos.js,
                node: Technos.node,
                sass: Technos.sass,
                html: Technos.html
            }
        }
    ],
    [
        "form",
        {
            img: "./assets/img/projects/formContact.png",
            h2: "Form Project",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://anthonyl.promo-105.codeur.online/ECF1/",
            linkGit: "https://github.com/LefebvreAnthony/ECM1",
            technos: {
                js: Technos.js,
                php: Technos.php,
                htmlCss: Technos.htmlCss
            }
        }
    ],
    [
        "OhMyFood",
        {
            img: "./assets/img/projects/ohMyFood.png",
            h2: "OhMyFood",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor",
            link: "https://lefebvreanthony.github.io/P3-OC/",
            linkGit: "https://github.com/LefebvreAnthony/P3-OC",
            technos: {
                html: Technos.html,
                sass: Technos.sass
            }
        }
    ]
]);