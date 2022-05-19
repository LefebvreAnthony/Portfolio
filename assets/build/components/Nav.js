"use-strict";


export function Nav() {
    let fragment = new DocumentFragment();
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    let arrNav = ["Home", "Project", "About", "Contact"];

    arrNav.forEach(el => {
        let li = document.createElement("li");
        li.textContent = el;
        ul.appendChild(li);
    })
    nav.appendChild(ul);
    fragment.appendChild(nav);
    return fragment;
};