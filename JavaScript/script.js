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



let isMutable = 10;
const isImmutable = 12;

isMutable = 15;

//isImmutable = 20; //This causes an error!

var isInsecure = "Don't use me";

//Use camel case for variables (i.e. capitalise at every word)

//Two TYPES of types
//Primitives and objects

let aBoolean = true;
let aNumber = 4;
let aString = "Some text";
let aBigInt = 99999999999999999n; //n is a numeric literal
let aSymbol = Symbol("description in here"); //These are unique
let aNull = null;
let anUndefined;

////console.log(aNull);
//console.log(typeof(aNull));

//console.log(anUndefined);
//console.log(typeof(anUndefined));

//An object 

let myObject = {
    key : "value",
    anotherKey : 12345
};

console.log(myObject);
console.log(myObject.anotherKey);

//String Concatenation - joining strings end to end, and is quite memory intensive (the example below requires three strings to output the line on the console)

let string1= "13 * 12 = ";
let result = 13*12;

console.log(string1 + result);

//String interpolation
//Using one string and literals containing placeholders called template literals

let string2=`13 * 12 = ${13*12}, 1 + 1= ${1+1}`;
console.log(string2);

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`%cThe total bill is £${totalMoney} and the remaining amount of money to be paid is £${totalMoney - moneyPaidSoFar}`, "font-style:italic; color:white; background-color:black");