/* about page hover effect */

let set1 = document.getElementById("set1");
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
set3.onmouseout = hideBlackOverlay3;