'use strict';

const newElement = document.createElement("h3");

newElement.innerText = "Let's add some text, baby!";

document.body.appendChild(newElement);

const newP = document.createElement("p");

newP.innerText = "Another one";

document.body.replaceChild(newP, newElement);

const newStyle = document.createElement("style");

newStyle.innerText = "body {font-size: 34px}";

document.head.appendChild(newStyle);

// let newTitle = document.querySelector("head > meta");

// console.log(newTitle.getAttribute(charset));


