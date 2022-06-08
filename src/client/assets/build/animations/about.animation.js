"use-strict";

//? Transitions pages
export function aboutAnimationTransition() {
    let blockTransition = document.getElementById("about-transition");
    let kE1 = new KeyframeEffect(blockTransition, [{ width: "72vw", left: "-360%" },], { duration: 1500, iterations: 2, direction: "alternate" });
    if (window.innerWidth <= 1080) {
        kE1 = new KeyframeEffect(blockTransition, [{ height: "72vh", bottom: "-76vh" },], { duration: 1500, iterations: 2, direction: "alternate" });
    }

    return new Animation(kE1, document.timeline);
};

export function downloadAnimation() {
    let download = [...document.querySelectorAll("#download path")];
    let animationCloud = download.map(path => {
        let kE1 = new KeyframeEffect(path, [
            { strokeDashoffset: "240", stroke: "#BDE6F1" },
            { strokeDashoffset: "0", stroke: "#EBEAEC" },
        ], { easing: "ease-in-out", direction: "reverse", iterations: Infinity, duration: 3500, delay: 1500 });
        return new Animation(kE1, document.timeline);
    })
    return animationCloud;
};

//? Page Contact

export function SocialAnimation() {
    let paths = [...document.querySelectorAll("#container_contact--title svg path")];
    let animationSocial = paths.map(path => {
        let kE1 = new KeyframeEffect(path,
            [{ strokeDashoffset: "2000", stroke: "#EBEAEC", fill: "#181818" }],
            { duration: 1500, easing: "ease-in-out", fill: "forwards" }
        );
        return new Animation(kE1, document.timeline);
    });
    return animationSocial;
};
export function SkillsAnimation() {
    let paths = [...document.querySelectorAll("#container_skills svg path")];
    let animationSocial = paths.map(path => {
        let kE1 = new KeyframeEffect(path,
            [{ strokeDashoffset: "2000", stroke: "#EBEAEC", fill: "#181818" }],
            { duration: 4500, easing: "ease-in-out", fill: "forwards" }
        );
        return new Animation(kE1, document.timeline);
    });
    return animationSocial;
}