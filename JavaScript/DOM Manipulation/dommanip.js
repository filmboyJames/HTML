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

const para = document.querySelector("body > div.divhold > p"); //Can go to any webpage, inspect an element and then copy its path 
para.innerText = "Hello";

//Event handling
const greet = () => console.log("Hello World!");

newButton.onclick = greet;
//newButton.addEventListener("click",greet);
newButton.onmouseover = greet;

//Type newButton.on and can then scroll through options in the dropdown!

//Extra Exercise 
//Create a function that creates a paragraph tag

const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "paraID";
    newPara.innerText = "New paragraph made";
    document.body.appendChild(newPara);
}

makePara();

//Create another function that changes the text of that paragraph tag to what is in a textbox


const updatePara = () =>{
    const existingPara = document.getElementById("paraID");//grab ID of existing paragraph tag
    console.log(existingPara);
    const newTextValue = document.getElementById("paraText").value
    console.log(newTextValue,"- value in box");
    const newText = document.getElementById("paraText");//grab ID of next text 
    console.log(newText," - the element");
    existingPara.innerText = newText;//assign input text box to existing text
}

updatePara();

// //Create another function that deletes the paragraph tag

const deletePara = () => {
    const existPara = document.getElementById("paraID");
    existPara.remove();
}

// deletePara();