'use strict';

console.log("Hello world!");

const text = "This is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("%c" + text, "color:black; background-color: white; font-size: 20px;padding: 5px;");

console.log("%c" + text + "%c" + text, "color:red;", "color:yellow;");

const firstname = "James";
const lastname = "Stewart";
const birthplace = "Edinburgh";
const starsign = "Aries";

console.log(firstname + "%c" + firstname, "color:purple; font-style:italic");

console.log("This is %c a message with some CSS. "+firstname,"color:yellow; font-style: italic; background-color: blue; padding: 2px")

let myCarMake = "Toyota";
let myCarModel = "RAV4";

console.log("My favourite car is "+myCarMake +" and the model is "+myCarModel);

console.log(`My favourite car is ${myCarMake} and the model is ${myCarModel}`);

console.log(`%c The car in front of my house is a ${myCarMake} ${myCarModel}`, "color:orange; font-family:fantasy; font-style:bold; background-color: black; padding: 10px");