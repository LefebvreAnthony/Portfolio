"use-strict";

export function TransitionPage() {
    let doorTop = document.querySelector('.doors_top');
    let doorBottom = document.querySelector('.doors_bottom');

    const KE1 = new KeyframeEffect(doorTop, [
        { top: "0" }
    ],
        {
            duration: 1000,
            easing: "ease-in",
            direction: "alternate",
            fill: "forwards",
            iterations: 2
        }
    );
    const KE2 = new KeyframeEffect(doorBottom, [
        { bottom: "0" }
    ],
        {
            duration: 1000,
            easing: "ease-in",
            direction: "alternate",
            fill: "forwards",
            iterations: 2
        }
    );

    const animDoorTop = new Animation(KE1, document.timeline);
    const animDoorBottom = new Animation(KE2, document.timeline);

    return [animDoorTop, animDoorBottom];
}