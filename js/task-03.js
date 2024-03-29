const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
// 1вариант
// const galleryRef = document.querySelector(".gallery");

// galleryRef.insertAdjacentHTML("afterbegin", images.reduce((result, { url, alt }) => {
//   return result + `<li><img src="${url}" alt="${alt}"></li>`;
// }, ""));

// galleryRef.style.display = "flex";
// galleryRef.style.flexDirection = "column";
// galleryRef.style.alignItems = "center";
// galleryRef.style.gap = "10px";

// galleryRef.querySelectorAll("img").forEach(img => 
//   img.style.width = "1000px"
// );


//2 вариант
const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", images.reduce((result, { url, alt }) => {
    return result + `<li><img src="${url}" alt="${alt}"></li>`;
}, ""));

galleryRef.style.display = "flex";
galleryRef.style.flexDirection = "column";
galleryRef.style.alignItems = "center";
galleryRef.style.gap = "10px";
galleryRef.style.padding = "0";
galleryRef.style.listStyle = "none"

galleryRef.querySelectorAll("img").forEach(img =>
    img.style.width = "100%",
);