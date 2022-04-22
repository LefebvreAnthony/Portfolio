"use-strict";

export function headerController() {
    const btnBurger = document.getElementById("bar_burger");
    const nav = document.querySelector('nav');
    btnBurger.addEventListener("click", () => {
        nav.style.top = "0";
        console.log('hello')
    })
};