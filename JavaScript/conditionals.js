'use strict';

let age = 50;
if(age >= 18 && age <= 65){
    console.log("Age Appropriate")
} else if(age<18){
    console.log("Underage");
} else {
    console.log("Age outwith range");
}

age >= 50 ? console.log("Over 50") : console.log("Under 50");