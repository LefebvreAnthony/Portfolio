"use-strict";


export function Nav() {
    const body = document.querySelector('body');
    return `
    <nav>
        <ul>
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    `
};