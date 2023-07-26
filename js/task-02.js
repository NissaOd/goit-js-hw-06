const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
//1 вариант
// document.querySelector("#ingredients").append(...ingredients.map(element => {
//   const elementOfList = document.createElement('li');
//   elementOfList.textContent = element;
//   elementOfList.classList.add("item");
//   return elementOfList;
// }));

// 2вариант
const murkup = ingredients.map(element => {
    const elementOfList = document.createElement('li');
    elementOfList.textContent = element;
    elementOfList.classList.add("item");
    return elementOfList;
})
document.querySelector("#ingredients").append(...murkup);