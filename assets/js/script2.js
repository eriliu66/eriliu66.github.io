/* image carousel */

let buttonPrev = document.getElementById("button-prev");
let buttonNext = document.getElementById("button-next");
let carouselRow = document.getElementById("carousel-row");
let imageList = document.getElementsByClassName("carousel-image");

let imageNum = 0;
let totalImages = imageList.length;

function checkControls() {
    if (imageNum === 0) {
        buttonPrev.style.visibility = "hidden";
    } else {
        buttonPrev.style.visibility = "visible";
    }
    if (imageNum === totalImages - 1) {
        buttonNext.style.visibility = "hidden";
    } else {
        buttonNext.style.visibility = "visible";
    }
}

function nextImage() {
    imageNum += 1;
    let pixelShift = 0
    for (let i=0; i < imageNum; i += 1) {
        pixelShift = pixelShift + imageList[i].offsetWidth; 
    }
    carouselRow.style.left = -pixelShift + "px";
    checkControls();
}

buttonNext.onclick = nextImage;

function prevImage() {
    imageNum -= 1;
    let pixelShift = 0;
    for (let i=0; i < imageNum; i += 1) {
        pixelShift = pixelShift + imageList[i].offsetWidth;
    }
    carouselRow.style.left = -pixelShift + "px";
    checkControls();
}

buttonPrev.onclick = prevImage;