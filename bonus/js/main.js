const arrayImage = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const thumbnails = document.getElementsByClassName("thumb-item");

let img = document.getElementById("img");
img.src = arrayImage[0];

let index = 0;
const btn_next = document.getElementById("next");
btn_next.addEventListener("click",
    function () {
        index = (index + 1) % arrayImage.length;
        img.src = arrayImage[index];
        thumbnails[index - 1].classList.remove("filter-none");
        thumbnails[index].classList.add("filter-none");
        if (index === arrayImage.length - 1) {
            index = 0;
        }
    }
)

const btn_previous = document.getElementById("previous");
btn_previous.addEventListener("click",
    function () {
        if (index > 0) {
            index--;
        }
        else {
            index = arrayImage.length - 1;
        }
        img.src = arrayImage[index];
    }
)