"use-strict";

export function SvgNavAbout() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let sw = 20 * (window.innerWidth / 100);
    let sh = 70 * (window.innerHeight / 100);
    let yes = 0.05
    let lol = 0.001;
    svg.style.display = "none";
    setInterval(() => {
        if (yes >= 0.2) {
            lol = - 0.001
        } else if (yes <= 0.01) {
            lol = +0.001
        }
        yes += lol
        svg.innerHTML = `
            <filter id="turbTest">
                <feTurbulence type="turbulence" baseFrequency="${yes} ${yes}" numOctaves="3" result="turb"/>
                <feDisplacementMap in2="turb" in="SourceGraphic" scale="10" xChannelSelector="A" yChannelSelector="A" />
            </filter>
        `;
    }, 50)
    return svg;
}