"use-strict";

export function AnimationsNav() {
    const nav = document.querySelector('nav');
    const svg = document.querySelectorAll("#bar_burger > svg > path");
    const KE1 = new KeyframeEffect(nav, [{ top: "-100%" }, { top: "0" }], { duration: 500, easing: "ease-in", fill: "forwards" });
    const KE2 = new KeyframeEffect(svg[0], { transformOrigin: "bottom left", transform: "translate(-18px, -17px) rotate(29deg)" }, {
        duration: 300,
        fill: "forwards"
    });
    const KE3 = new KeyframeEffect(svg[1], { transform: "translateY(-14px)" }, { duration: 300, fill: "forwards" });

    const navDownAnimation = new Animation(KE1, document.timeline);
    const line1 = new Animation(KE2, document.timeline);
    const line2 = new Animation(KE3, document.timeline);

    return [navDownAnimation, line1, line2];
};