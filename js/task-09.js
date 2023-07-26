// 1 вариант

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// document.querySelector(".change-color").addEventListener("click", () => {
//     const color = getRandomHexColor();

//     document.querySelector("body").style.backgroundColor = color;
//     document.querySelector(".color").textContent = color;
// })

// 2 вариант
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// document.querySelector(".change-color").addEventListener("click", () => {


//     document.querySelector("body").style.backgroundColor = getRandomHexColor();
//     document.querySelector(".color").textContent = getRandomHexColor();
// })


// 3 вариант
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
    bodyEl.style.backgroundColor = textEl.textContent = getRandomHexColor();
})