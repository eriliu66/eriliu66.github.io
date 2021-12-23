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

/*let set1 = document.getElementById("set1");
let set2 = document.getElementById("set2");
let set3 = document.getElementById("set3");

let overlay1 = document.getElementById("overlay1")
let overlay2 = document.getElementById("overlay2")
let overlay3 = document.getElementById("overlay3")
let overlaytext1 = document.getElementById("overlaytext1")
let overlaytext2 = document.getElementById("overlaytext2")
let overlaytext3 = document.getElementById("overlaytext3")

function unhideBlackOverlay1() {
    overlay1.style.display = "block";
    overlaytext1.style.display = "block";
}
function hideBlackOverlay1() {
    overlay1.style.display = "none";
    overlaytext1.style.display = "none";
}

function unhideBlackOverlay2() {
    overlay2.style.display = "block";
    overlaytext2.style.display = "block";
}
function hideBlackOverlay2() {
    overlay2.style.display = "none";
    overlaytext2.style.display = "none";
}

function unhideBlackOverlay3() {
    overlay3.style.display = "block";
    overlaytext3.style.display = "block";
}
function hideBlackOverlay3() {
    overlay3.style.display = "none";
    overlaytext3.style.display = "none";
}

set1.onmouseover = unhideBlackOverlay1;
set1.onmouseout = hideBlackOverlay1;
set2.onmouseover = unhideBlackOverlay2;
set2.onmouseout = hideBlackOverlay2;
set3.onmouseover = unhideBlackOverlay3;
set3.onmouseout = hideBlackOverlay3;*/