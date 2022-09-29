'use strict'

// //Callbacks - pass in a function as an argument/parameter into another function

// const greet = (firstname,lastname) => {
//     console.log(firstname, lastname);
//     alert(`Hello ${firstname},${lastname}`);
// }

// const bye = (firstname,lastname) => {
//     console.log(firstname, lastname);
//     alert(`Bye ${firstname},${lastname}`);
// }

// const fullname = (f,l) => console.log(f+l);

// const userInput = (callback) => {
//     let fname = prompt("Please enter your first name: ");
//     let sname = prompt("Please enter your last name: ");
//     callback(fname, sname);
    
// }

// //greet("James","S");

// // // //Define which function will be our callback function
// userInput(greet); //i.e. we callback the greet function here
// userInput(bye);
// userInput(fullname);

// // Promises - an operation that hasn't been completed
// // They have three possible states which are
// // - fulfilled
// // - rejected
// // - pending

// let prom = new Promise((resolve, reject)=> {
//     let x = 2 + 5;
//     if (x==8){
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// //Calling the promise
// //try-catch-finally block example below

// prom.then((message)=>{
//     console.log(`Then block - status is: ${message}`);
// }).catch((message)=>{
//     console.log(`Catch block - status is : ${message}`);
//     console.error(message);
// }).then(()=>{//finally block, doesn't need to be there
//     console.log("Finally block - runs regardless")
// })

// //Closures - data privacy

// //outer function - fname, intro
// const fullName = (fname) =>{
//     let intro = "My name is ";
//     //inner function  - s
//     //(i.e. nesting a function)
//     const lname = (s) =>{
//         return `${intro} ${fname} ${s}`;
//     }
//     return lname;
// }

// let first = fullName("Ash");//fname = Ash
// console.log(first); //fullName returns the lname arrow function which then returns the string

// let second = first("Siva");
// console.log(second);//Actual values that the inner function has used


//Closures Exercises 1
let outermultiply = (n1) => {
    let innermultiply = (n2) =>{
        return n1*n2;
    };
    return innermultiply;
}

let product = outermultiply(3);

console.log(product);

let finalproduct = product(2);

console.log(finalproduct);
//Closures Exercises 2
let person = () => {
    let firstname = "Michael";
    return {
        getName: function() {
            return firstname;
        },
        setName: function (newName) {
            firstname = newName;
        },

    };
}

let personA = person()
console.log(personA.getName());
personA.setName("Palin");
console.log(personA.getName());

//Closures Exercises 3

let counter = (start) =>{
    console.log("Counter starts at: ", start);
    return (amt) => {
        console.log("Change by: ", amt);
        return start + amt;
    }
}
    let counterA = counter(1)
    console.log("Counter now reads: ",counterA(-2));

//Callback and Promises Exercise 1

const plusten = (input) => {
    alert(`This is your number plus ten: ${parseInt(input)+10}`);
}

const userInput = (callback) => {
    let input = prompt(`Please enter your number`);
    callback(input);
}

userInput(plusten);

// let newProm = new Promise(resolve,reject)=> {
//     let a = 10
//     if (a>8){
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// //newProm.then(())

