
const { mul } = require("./calc")

console.log(mul(2, 5))

import("./index.css")

import Icon from './icon.png';


const h1 = document.createElement("h1");
h1.innerText = "Hello webpack";
h1.classList.add("txt");

const img = document.createElement("img");
img.src = Icon;


document.querySelector(".box").append(h1);
document.querySelector(".images").append(img);

