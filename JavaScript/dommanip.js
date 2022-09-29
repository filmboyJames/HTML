'use strict'
//DOM Manipulation
const title = document.createElement("h1"); //Creating a H1 tag

title.innerText = "Let's manipulate the DOM";// Adding the text in between the H1 tag

document.body.appendChild(title); //The h1 tag is going in the body tag

const div = document.getElementById("myDiv"); //Finding an element with id = myDiv

console.log("target div:",div); //Prints details

const newButton = document.createElement("button");//Creates a button element

newButton.innerText = "PRESS ME"; //Update text of the button element

div.prepend(newButton); //Adds the button to the div we got

const secondDiv = document.querySelector("body > div.divhold");

console.log(secondDiv);

const para = document.querySelector("body > div.divhold > p");
para.innerText = "Hello";

//Event handling
const greet = () => console.log("Hello World!");

newButton.onclick = greet;
//newButton.addEventListener("click",greet);
newButton.onmouseover = greet;

//Type newButton.on and can then scroll through options!