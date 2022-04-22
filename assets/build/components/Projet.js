"use-strict";

import { Container } from "./Container.js";

export function UnitProject() {
    const container = Container.base();
    container.className = "main_project"
    return container.innerHTML = `
        <figure>
            <img src="./assets/img/imgProject.png" alt="img project" />
        </figure>
        <div>
            <h2>Name project</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litor</p>
            <button>See more</button>
        </div>
        <span>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 21L35 38.5L52.5 21L59.5 24.5L35 49L10.5 24.5L17.5 21Z" fill="#222222"/>
            </svg>
        </span>
    `
}