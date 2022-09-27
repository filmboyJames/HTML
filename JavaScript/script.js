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

//let a;
//let b = "12345";
//let c = 12344;
//let d = true;
let e = {a:"JavaScript"};

//console.log(typeof(a));
//console.log(typeof(b));
//console.log(typeof(c));
//console.log(typeof(d));
console.log(typeof(e));

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay;

console.log(`%cThe total bill is £${totalMoney} and the remaining amount of money to be paid is £${totalMoney - moneyPaidSoFar}`, "font-style:italic; color:white; background-color:black");

// ASI = Automatic Semi-Colon Insertion
//JavaScript automatically inserts semi-colons for us

//let a = 1;
//let b = 1;

//a
//++
//b

//console.log(`a = ${a}\nb= ${b}`);

//ASI interprets the above as a; ++b; etc

//let c = 1;
//let d = 1;
//c++; d;

//console.log(`c = ${c}\nd= ${d}`);


//ITERATION
//Loops

//FOR
//Uses a counter and runs while a condition is met

for(let i=0; i<10; i++){
    console.log(`i=${i}`)
};

//WHILE
//Works with Booleans, runs until a condition is no longer true

let condition=true;
let increment=0;
while(condition === true){
    console.log(`increment = ${increment}`);
    increment++;

    if(increment === 3) {
        condition = false;
    }
}

//DO-WHILE
//Like a while loop but it will ALWAYS run at least once

let a =false;
do{
    console.log("Run Forrest Run");
} while(a===true);

//SWITCH CASES
//These run until a break or return, and can be much more effective than large if-else-if statements

let num =1;
switch(num){
    case 0:
        console.log("number is zero");
    case 1:
        console.log("We are number one");
    case 4:
        console.log("We're at 4");
    case 10:
        console.log("We made it to ten!");
        break;
    default: 
        console.warn("Not here");
}

//Iterator is equal to 2
//Condition is i<=6
//if true print i+1 
//then iterate i by 2
//if false stop
//WHILE
let i=2;
while(i<=6){
    console.log(i+1);
    i = i+2;
}

//FOR
for(let i = 2; i<=6; i = i+2){
    console.log(i+1);
}

//Iteration Exercises 
//1 and 4

for(let a1=100; a1<=200; a1++){
    console.log(a1);
}

let a4=100;
while(a4<=200){
    console.log(a4);
    a4++;
}

//2 and 4

for(let a2=100; a2<=200; a2++){
    switch(a2%2){
        case 0:
            console.log("-");
        case 1:
            console.log("*");
    }
}
//3
let a3=1;
while(a3<=10){
    for(let i=0; i<10;i++){
        console.log(a3);
    }
    a3++;
}

//5
let day = new Date();

switch(day){
    case Monday:

}