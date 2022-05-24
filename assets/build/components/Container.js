"use-strict";

import { RemoveChild } from "../utils/removeElements.js";

export const Container = {
    base() {
        const main = document.querySelector("main");
        RemoveChild(main);
        main.removeAttribute("id");
        const container = document.createElement("div");
        container.setAttribute("id", "container");
        main.appendChild(container);
        return container;
    },
    subContainer() {
        const subContainer = document.createElement("div");
        subContainer.setAttribute("id", "sub_container");

        return subContainer;
    }
}