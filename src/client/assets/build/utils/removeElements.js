"use-strict";

export function RemoveChild(element) {
    let range = document.createRange();

    range.selectNodeContents(element);
    range.deleteContents();
};