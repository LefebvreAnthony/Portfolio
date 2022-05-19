"use-strict";

export function AboutController() {
    let subNav = document.querySelectorAll('.about ul > li');
    let canvas = document.getElementById("canvas");
    let aboutMe = document.getElementById("container_about_me");
    subNav[2].addEventListener("click", (e) => {
        canvas.remove()
        aboutMe.remove()
    })
}