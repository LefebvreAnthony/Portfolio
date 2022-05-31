"use-strict";

export function animArrows(element, px) {
    let arrow = document.querySelector(element);

    let kE1 = new KeyframeEffect(arrow,
        [{ transform: `translateY(${px})` }, { opacity: "1", offset: 0 }], { duration: 500, iterations: Infinity, direction: "alternate", easing: 'ease-in-out' })

    return new Animation(kE1, document.timeline);
};

export function animBlobImg() {
    let figure = document.querySelector(".main_project > figure > img");

    let kE1 = new KeyframeEffect(figure,
        { transform: "translateX(0)" }, { duration: 2000, fill: "forwards", delay: 1000, easing: "ease-out" }
    );
    return new Animation(kE1, document.timeline);
};
export function animBlobImgReverse() {
    let figure = document.querySelector(".main_project > figure > img");

    let kE1 = new KeyframeEffect(figure,
        { transform: "translateX(700px)" }, { duration: 850, easing: "ease-out", iterations: 2, direction: "alternate" }
    );
    return new Animation(kE1, document.timeline);
};

export function animContentProject() {
    let content = document.querySelector('.project_description');

    let kE1 = new KeyframeEffect(content,
        [{ opacity: "0" }, { transform: "scaleY(1)" }], { duration: 2000, fill: "forwards", delay: 1000, easing: "ease-out" }
    );

    return new Animation(kE1, document.timeline);
};

export function animTransitionContent() {
    let divBefore = document.querySelector(".project_description--before");

    let kE1 = new KeyframeEffect(divBefore,
        [{ width: "100%" }], { duration: 500, delay: 300, easing: "ease-out", iterations: 2, direction: "alternate" }
    );

    return new Animation(kE1, document.timeline);
}