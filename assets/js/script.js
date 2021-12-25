/* about page */

let picset1 = document.getElementById("pic-set-1");
let picset2 = document.getElementById("pic-set-2");
let picset3 = document.getElementById("pic-set-3");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let pd1 = document.getElementById("pd1");
let pd2 = document.getElementById("pd2");
let pd3 = document.getElementById("pd3");

function description1() {
    if (window.getComputedStyle(img1).getPropertyValue("opacity") === "1") {
        img1.style.opacity = "0";
        pd1.style.opacity = "1";
    } else {
        img1.style.opacity = "1";
        pd1.style.opacity = "0";
    }
}

picset1.onclick = description1;

function description2() {
    if (window.getComputedStyle(img2).getPropertyValue("opacity") === "1") {
        img2.style.opacity = "0";
        pd2.style.opacity = "1";
    } else {
        img2.style.opacity = "1";
        pd2.style.opacity = "0";
    }
}

picset2.onclick = description2;

function description3() {
    if (window.getComputedStyle(img3).getPropertyValue("opacity") === "1") {
        img3.style.opacity = "0";
        pd3.style.opacity = "1";
    } else {
        img3.style.opacity = "1";
        pd3.style.opacity = "0";
    }
}

picset3.onclick = description3;