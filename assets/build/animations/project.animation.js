"use-strict";

export function arrowDown() {
    let arrow = document.querySelector('.main_project > span');

    let kE1 = new KeyframeEffect(arrow,
        [{ transform: "translateY(15px)" }, { opacity: "1", offset: 0 }], { duration: 500, iterations: Infinity, direction: "alternate", easing: 'ease-in-out' })

    return new Animation(kE1, document.timeline);
};

export function animBlobImg() {
    let figure = document.querySelector(".main_project > figure > img");

    let kE1 = new KeyframeEffect(figure,
        { transform: "translateX(0)" }, { duration: 2000, fill: "forwards", delay: 1000, easing: "ease-out" }
    );
    return new Animation(kE1, document.timeline);
};

export function animContentProject() {
    let content = document.querySelector('.project_description');

    let kE1 = new KeyframeEffect(content,
        [
            { opacity: "0" },
            { transform: "scaleY(1)" }
        ],
        {
            duration: 2000,
            fill: "forwards",
            delay: 1000,
            easing: "ease-out"
        }
    )
    return new Animation(kE1, document.timeline);
}