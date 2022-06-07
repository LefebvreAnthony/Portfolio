"use-strict";

export function SvgLogoFilter() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let doorsLeft = document.querySelector(".doors_left");
    let yes = 0.05
    let lol = 0.001;
    svg.style.display = "none";

    let lolo;
    function run() {
        if (!lolo) {

            lolo = setInterval(() => {
                if (yes >= 0.2) {
                    lol = - 0.001
                } else if (yes <= 0.01) {
                    lol = +0.001
                }
                yes += lol
            }, 50)
        }
    }

    setInterval(() => {

        if (window.getComputedStyle(doorsLeft).left.split("p")[0] <= -400 || window.getComputedStyle(doorsLeft).bottom.split("p")[0] <= -300) {
            clearInterval(lolo)
            lolo = null;
        } else {
            run();
            svg.innerHTML = `
            <filter id="turbTest">
                <feTurbulence type="turbulence" baseFrequency="${yes} ${yes}" numOctaves="3" result="turb"/>
                <feDisplacementMap in2="turb" in="SourceGraphic" scale="10" xChannelSelector="A" yChannelSelector="A" />
            </filter>
        `;
        }
    }, 50)

    return svg;
}