const arrayImage = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
console.log(arrayImage);

let img = document.getElementById("img");
img.src = arrayImage[0];

let index = 0;
const btn_next = document.getElementById("next");
btn_next.addEventListener("click",
    function () {
        index = (index + 1) % arrayImage.length;
        img.src = arrayImage[index];
    }
)

let i = item_colletion.length - 1;
const btn_previous = document.getElementById("previous");
btn_previous.addEventListener("click",
    function () {
        i = (i - 1) % 0;
        img.src = arrayImage[i];
    }
)








// const item_colletion = document.getElementsByClassName("item");
// console.log(item_colletion);


// let index = 0;
// const btn_next = document.getElementById("next");
// btn_next.addEventListener("click",
//     function () {
//         btn_previous.style.display = "block";
//         if (index < item_colletion.length - 1) {
//             item_colletion[index].classList.remove("active");
//             index++;
//             item_colletion[index].classList.add("active");
//             if (index === item_colletion.length - 1) {
//                 btn_next.style.display = "none";
//                 index = 0
//             }
//         }
//     }
// )

// let i = item_colletion.length - 1;
// const btn_previous = document.getElementById("previous");
// btn_previous.addEventListener("click",
//     function () {
//         btn_next.style.display = "block";
//         if (i >= 0) {
//             item_colletion[i].classList.remove("active");
//             i--;
//             item_colletion[i].classList.add("active");
//             if (i === 0) {
//                 btn_previous.style.display = "none";
//                 i = item_colletion.length - 1;
//             }
//         }
//     }
// )
