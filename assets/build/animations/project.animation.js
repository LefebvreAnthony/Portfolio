"use-strict";

export function arrowDown() {
    let arrow = document.querySelector('.main_project > span')
    console.log(arrow);

    let kE1 = new KeyframeEffect(arrow,
        [{ transform: "translateY(15px)" }, { opacity: "1", offset: 0 }], { duration: 500, iterations: Infinity, direction: "alternate", easing: 'ease-in-out' })

    return new Animation(kE1, document.timeline)
}