"use-strict";

export const Arrows = {

    arrowDown(fillColor) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let attr = {
            "width": "70",
            "heigth": "70",
            "viewBox": "0 0 70 70",
            "fill": "none",
        };
        for (let key in attr) {
            svg.setAttribute(key, attr[key]);
        };
        svg.innerHTML = `<path d="M17.5 21L35 38.5L52.5 21L59.5 24.5L35 49L10.5 24.5L17.5 21Z" fill="${fillColor}"/>`;


        return svg;

    },
    arrowUp(fillColor) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let attr = {
            "width": "70",
            "heigth": "70",
            "viewBox": "0 0 70 70",
            "fill": "none",
        };
        for (let key in attr) {
            svg.setAttribute(key, attr[key]);
        };
        svg.innerHTML = `
        <path d="M52.5 49L35 31.5L17.5 49L10.5 45.5L35 21L59.5 45.5L52.5 49Z" fill="${fillColor}"/>`;


        return svg;

    }
}