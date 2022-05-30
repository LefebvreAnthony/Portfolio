"use-strict";

export function aboutAnimation() {

};

export function downloadAnimation() {
    let download = [...document.querySelectorAll("#download path")];
    let teub = download.map(path => {
        let kE1 = new KeyframeEffect(path, [
            { strokeDashoffset: "240", stroke: "#BDE6F1" },
            { strokeDashoffset: "0", stroke: "#EBEAEC" },
        ], { easing: "ease-in-out", direction: "alternate-reverse", iterations: Infinity, duration: 3500, delay: 1500 });
        return new Animation(kE1, document.timeline);
    })
    return teub
};