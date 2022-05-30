"use-strict";

export function aboutAnimationTransition() {
    let blockTransition = document.getElementById("about-transition");

    let kE1 = new KeyframeEffect(blockTransition, [
        { width: "72vw", left: "-360%" },
    ],
        { duration: 1500, iterations: 2, direction: "alternate" });
    return new Animation(kE1, document.timeline);
};

export function downloadAnimation() {
    let download = [...document.querySelectorAll("#download path")];
    let teub = download.map(path => {
        let kE1 = new KeyframeEffect(path, [
            { strokeDashoffset: "240", stroke: "#BDE6F1" },
            { strokeDashoffset: "0", stroke: "#EBEAEC" },
        ], { easing: "ease-in-out", direction: "reverse", iterations: Infinity, duration: 3500, delay: 1500 });
        return new Animation(kE1, document.timeline);
    })
    return teub
};