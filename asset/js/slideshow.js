
// slide show
var imgArray = [
    "./asset/img/ny.jpg",
    "./asset/img/la.jpg",
    "./asset/img/chicago.jpg"
]
var h2Array = [
    "New York",
    "Los Angeles",
    "Chicago"
]
var subH2Array = [
    "The atmosphere in New York is lorem ipsum.",
    "We had the best time playing at Venice Beach!",
    "Thank you, Chicago - A night we won't forget."
]

var image = document.querySelector("#slide");
var title = document.querySelector(".sub-text .text-heading");
var subTitle = document.querySelector(".sub-text .text-description")
var i = 0;

function next() {
    i++;
    if (i > 2) {
        i = 0;
    }
    image.src = imgArray[i];
    title.innerText = h2Array[i];
    subTitle.innerText = subH2Array[i];
}

function back() {
    i--;
    if (i < 0) {
        i = 2;
    }
    image.src = imgArray[i];
    title.innerText = h2Array[i];
    subTitle.innerText = subH2Array[i];
}

setInterval(
    function next() {
        i++;
        if (i == 3) {
            i = 0;
        }
        image.src = imgArray[i];
        title.innerText = h2Array[i];
        subTitle.innerText = subH2Array[i];
    }
    , 2000);

// hover
function fover() {
    var hover = document.querySelector(".sub-text");
    hover.style.display = "block";
}
function fout() {
    var notHover = document.querySelector(".sub-text");
    notHover.style.display = "none";
}



