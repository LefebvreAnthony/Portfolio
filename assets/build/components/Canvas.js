"use-strict";

export function Canvas(canvas) {
    canvas.width = window.innerWidth * 70 / 100;
    canvas.height = window.innerHeight * 50 / 100;
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "./assets/img/background/sakuraLeft.png";
    let img1 = new Image();
    img1.src = "./assets/img/background/sakuraRight.png";

    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    };
    img1.onload = () => {
        ctx.drawImage(img1, canvas.width - img1.width, 0)
    };
}