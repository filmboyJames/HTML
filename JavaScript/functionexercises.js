'use strict'
//Functions 1
function takeaway(x,y){
    console.log("Takeaway from each other equals", x-y);
};

takeaway(3,4);
//Functions 2
const welcome = function(name,age,gender){
    console.log("My name is ", name, ", I am ", age, " years old and my gender is ", gender);
}
//Functions 3
welcome("James", 37, "male");

const powerup = (n1,n2) => console.log(Math.pow(n1,n2));

powerup(2,3);

//Destructuring 1
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin=false} = user;

// alert ( name );
// alert ( age );
// alert ( isAdmin );

// Scope 1

// function addPoop(x){
//     let y = "plop";
//     console.log(x," has poop now added");
// }

// addPoop("James");


// if (y ==plop){
//     console.log("Plop exists");
//     let z = Turd;
// } else {
//     console.log("Plop doesn't exist");
// }

// console.log(z);

function doSomething() {
    let a =1;
    console.log(a);
    console.log(foo());
    function foo() {
        return 2;
    }
}
doSomething();