"use-strict";

export function AnimationHome() {
    const doorLeft = document.querySelector('.doors_left');
    const doorRight = document.querySelector('.doors_right');
    let KE1 = new KeyframeEffect(doorLeft, { left: "-55%" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    let KE2 = new KeyframeEffect(doorRight, { right: "-55%" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    if (window.innerWidth <= 550) {
        KE1 = new KeyframeEffect(doorLeft, { bottom: "-55%" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
        KE2 = new KeyframeEffect(doorRight, { top: "-55%" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    }

    const animDoorLeft = new Animation(KE1, document.timeline);
    const animDoorRight = new Animation(KE2, document.timeline);

    return [animDoorLeft, animDoorRight];

};
export function AnimationHome2() {

    const doorLeft = document.querySelector('.doors_left');
    const doorRight = document.querySelector('.doors_right');

    let KE1 = new KeyframeEffect(doorLeft, { left: "0" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    let KE2 = new KeyframeEffect(doorRight, { right: "0" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    if (window.innerWidth <= 550) {
        KE1 = new KeyframeEffect(doorLeft, { bottom: "0" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
        KE2 = new KeyframeEffect(doorRight, { top: "0" }, { duration: 2000, easing: "cubic-bezier(.93, .06, .72, .73)", fill: "forwards" });
    }
    const animDoorLeft = new Animation(KE1, document.timeline);
    const animDoorRight = new Animation(KE2, document.timeline);

    return [animDoorLeft, animDoorRight];
};