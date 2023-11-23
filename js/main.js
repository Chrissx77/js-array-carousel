const item_colletion = document.getElementsByClassName("item");
console.log(item_colletion);


let index = 0;
const btn_next = document.getElementById("next");
btn_next.addEventListener("click",
    function () {
        if (index < item_colletion.length - 1) {
            item_colletion[index].classList.remove("active");
            index++;
            item_colletion[index].classList.add("active");
            if (index === item_colletion.length - 1) {
                btn_next.style.display = "none";
            }
        }
    }
)

let i = item_colletion.length - 1;
const btn_previous = document.getElementById("previous");
btn_previous.addEventListener("click",
    function () {
        if (i >= 0) {
            item_colletion[i].classList.remove("active");
            i--;
            item_colletion[i].classList.add("active");
            if (i === 0) {
                btn_previous.style.display = "none";
            }
        }
    }
)
