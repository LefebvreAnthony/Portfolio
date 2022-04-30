"use-strict";

export const Container = {
    base() {
        const main = document.querySelector("main");
        main.innerHTML = "";
        const container = document.createElement("div");
        main.appendChild(container);
        return container;

    },
    subContainer() {

    }
}