"use-strict";

export function arrowDown() {
    let arrow = document.querySelector('.main_project > span');

    let kE1 = new KeyframeEffect(arrow,
        [{ transform: "translateY(15px)" }, { opacity: "1", offset: 0 }], { duration: 500, iterations: Infinity, direction: "alternate", easing: 'ease-in-out' })

    return new Animation(kE1, document.timeline);
};

export function blobImg() {
    let figure = document.querySelector(".main_project > figure");
    console.log();
    let kE1 = new KeyframeEffect(figure,
        [
            { transform: "scale(0)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 7000,
            fill: "forwards",
            delay: 500
        }
    );
    return new Animation(kE1, document.timeline);
}