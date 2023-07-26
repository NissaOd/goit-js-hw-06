// вариант 1
// const valueRef = document.querySelector("#value");

// document.querySelector("[data-action = 'decrement']").addEventListener("click", () => {
//     valueRef.textContent -= 1;
// });

// document.querySelector("[data-action = 'increment']").addEventListener("click", () => {
//     valueRef.textContent = Number(valueRef.textContent) + 1;
// });

//вариант 2 

let valueRef = Number(document.querySelector("#value").textContent);
document.querySelector("[data-action='decrement']").addEventListener("click", () => {
    valueRef -= 1;
    document.querySelector("#value").textContent = valueRef;
});
document.querySelector("[data-action='increment']").addEventListener("click", () => {
    valueRef += 1;
    document.querySelector("#value").textContent = valueRef;
});