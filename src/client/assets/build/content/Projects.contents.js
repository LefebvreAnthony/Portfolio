"use-strict";

import { Technos } from "./technos.contents.js";

export const Projects = new Map([
    [
        "quizz",
        {
            img: "./assets/img/projects/quizzGame.png",
            h2: "Quizz Game Project",
            desc: "3 weeks deadline project exclusively built with JavaScript. The project scope was to build a quiz web application where the user could play a random quiz or create his own throught his personal space. Each question is related to a specific category and the user can check his personal stats for each category.",
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
            img: "./assets/img/projects/FormContact.png",
            h2: "Form Project",
            desc: "Full responsive form created under a week deadline with Php. Inputs verfification on both side(front/back) ",
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
            desc: "Fully customised restaurant website, built exclusively with html and Sass.",
            link: "https://lefebvreanthony.github.io/P3-OC/",
            linkGit: "https://github.com/LefebvreAnthony/P3-OC",
            technos: {
                html: Technos.html,
                sass: Technos.sass
            }
        }
    ]
]);