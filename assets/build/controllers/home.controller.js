import { About } from "../views/About.view.js";
import { Project } from "../views/project.view.js";

export function homeController() {

    const btn = document.querySelectorAll('button');
    btn.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            const doorLeft = document.querySelector('.doors_left');
            const doorRight = document.querySelector('.doors_right');
            setTimeout(() => {
                doorLeft.classList.add("doors_left--active");
                doorRight.classList.add("doors_right--active");
            }, 300)
        })
        btn[0].addEventListener("click", () => {
            Project();
        })
        btn[1].addEventListener("click", () => {
            About();
        })
    })
};