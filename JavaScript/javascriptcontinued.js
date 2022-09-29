'use strict';

//Recap - Console Outputs
console.log("Hi"); //Print -informationatal
console.error("Hi, I am an error"); //Print - error
console.warn("WARNING WARNING"); //Print - warning, not an error
console.group("Hellos"); //Print - groups together multiple console outputs
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.groupEnd(); 

//Variables
//There are three specific ways to declare variables:
//const - Constant, once assigned a value, it is not changed
//let - Block scoped variable, can update its value
//var - DO NOT USE (a global scope variable that led to issues of security and access, replaced with const and let above)

let a = "abc";
console.log("Type of a: ",typeof(a));
console.log("Value:",a);
a = 123;
console.log("Type of a: ",typeof(a));
console.log("Value:",a);

//Data Types
//string, boolean, bigint, symbol, null, undefined, number, nAn
console.log(typeof(true));

//Operators
//+, -, /, *, % 
//>, <, >=, <=
//& and | - bitwise operator (even though first part of & might be false, it will check the other side, most useful for Boolean type)
//! - NOT operator
//&& - logical AND operator
//|| - logical OR operator
//= - assignment operator
//== - compares and checks equality of two values
//=== - checks equality of values but also their data types
console.log(1 == "1"); //true
console.log(1 === "1"); //false

let x = 2; //type is number, value is 2
let y = "2"; //type is string, value is 2
console.log(typeof(x));
console.log(typeof(y));
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

//Iteration - loops, when you have a set of instructions you want to do repeatedly for a certain amount of time
//Types of Loop
// for loop - use when you know how many times you want the loop to execute
// Use the below 2 loops when you don't know how many times the loop will execute, because it depends on some other calculation
// while loop - only executes when the given condition is true
// do while loop - executes at least once regardless of if the condition is met

//for(initialisation; condition; iterator){statement/s}
for(let i=0; i<=10;i++){
    console.log(i);
    i += 2; //Short form of i = i+2
}

let i = 21;

//while loop
while(i>20){
    console.log("While loop");
    i --;
}

//do-while loop
do{
    console.log("do while loop");
} while(i>20);

//Conditionals
//truthy and falsey - All values have an inherent Boolean value, defaults to truthy or falsey
// examples of falsey
let g; //Undefined - falsey
console.log(typeof(g));

if(g){
    console.log("falsey, not executed");
}

//example of truthy
let h = 45;
if(h){
    console.log("truthy, executed");
}

//if statements 
//if(condition){statements}else if(condition2){statements2}...else{default}
let temp = 15;
if(temp<20){
    console.log("Turn on heating");
    if(temp==15){
        console.log("Ideal");
    }
}else if(temp >= 20 && temp <= 27){
    console.log("Turn on AC");
}else{
    console.log("Do nothing");
}

//Switch Cases - checks for specific conditions
let day = "Tue";
switch(day){
    case "Mon":
        console.log("Day 1");
        break; //Without a break, the code will execute every case after one that is met!
    case "Tue":
        console.log("Day 2");
        break;
    case "Wed":
        console.log("Day 3");
        break;
    case "Thu":
        console.log("Day 4");
        break;
    default:
        console.log("Default")
}

//Ternary Statements
//ternary operator - ?
// Syntax: 
// condition ? valueifTrue : valueifFalse
let age = 10;
if(age>=25){
    console.log("Can buy alcohol");
}else{
    console.log("Can't buy alcohol");
}

let tern = age>=25 ? "Can buy alcohol" : "Can't buy alcohol";
console.log(tern, "ternary");

//Objects - Defined as an unordered collection of related data (key:value pairs)

let personObj = {
    name: "James",
    age: 37,
    job: "Analyst"
}
console.log("Person: ",personObj);
console.log(JSON.stringify(personObj)); //Method to take an object and convert it into a string

//JSON - JavaScript Object Notation
let myObj = `[{
    name: "James",
    age: 37,
    job: "Analyst"
},
{
name: "Jimes",
    age: 38,
    job: "Analyster"
}]`;
console.log("JSON", myObj);

//Example of loading JSON DATA:
//GET request
// fetch("people.json")
// .then(response => response.json())
// .then(data => console.log("fetch", data));

//Arrays
const myArr = [1, "2", 3, 4, 5, 6, 7];
const names = ["bob", "mickey", "eeyore", "minnie"];
console.log(myArr);
console.log(names);
console.log(names[2]); //eeyore
names.push("jerry"); //It is a constant, but you can add entries using methods, e.g. of the format "method( ... )"
console.log(names);

//Destructuring
const [a1, a2, a3, a4, a5, a6, a7] = myArr;
console.log(myArr[0]+myArr[1]);
console.log(a1+a2); //Output as string, i.e. "1"+"2" = 12
console.log(a1+parseInt(a2)); //Output as number i.e. 1+2 = 3
//Spread operator ...
const[name1, name2, ...rest] = names;
console.log(name2);
console.log("rest", rest);

const grades = [21, 43, 54, 64, 23, 96, 27, 84, 100];
const[,,,grade, ...others] = grades;
console.log(grade);
console.log(others);

let myObj2 = {
    name: "Peppy",
    breed: "chihuahua"
}
console.log(myObj2);

const n = myObj2.name;
console.log(n);

myObj2 = {...myObj2, ...{size:"xs", colour:"brown"}}; //To add an entry to an existing object, ...myObj2 copies the first, and adds new entries
console.log("updated:",myObj2);

//Functions/methods are a set of instructions you want to execute/reuse
//Three ways to write functions

//1. function - global scope, can call the function before it's been declared
myFun("normal function", "hi");

function myFun(p, x){
    console.log(p);
    console.log(p+x);
}

//2. function expression - has to be initialised before called
// myFun2("Function Expression"); // THIS LINE WOULDN'T RUN FROM HERE
const myFun2 = function(x){
    console.log(x);
}

myFun2("Function Expression");

//3. arrow functions - more concise way of writing function expressions, also has to be initialised before called
const myFun3 = (z) => console.log(z);

const myFun4 = (t,u) => {
    let sum = t+u;
    console.log(t,"+",u,"=",sum);
} //Doing two statements so need curly braces, for only one action these are not needed

myFun3("arrow function");
myFun4(3,4);

