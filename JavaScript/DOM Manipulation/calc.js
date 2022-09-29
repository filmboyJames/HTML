'use strict'

console.log("Calculator");

function add(x,y){
    let sum = x+y;
    console.log(sum);
}

function sub(x,y){
    let diff = x-y;
    console.log(diff);
}

function mult(x,y){
    let prod = x*y;
    console.log(prod);
}

function div(x,y){
    let  frac = x/y;
    console.log(frac);
}

const counter = document.getElementById("counter");//Getting the input box element

const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
    history();

}

const plusOne = () => {
    counter.value = parseInt(counter.value) +1;
    history();
}

const reset = () => {
    counter.value = "0";
    history();
}

const minusFive = () => {
    counter.value = parseInt(counter.value) - 5;
    history();

}

const plusFive = () => {
    counter.value = parseInt(counter.value) +5;
    history();
}

//ADDITIONAL EXTRA - maaaybe...

const history = () => {
    const hist = document.createElement("p");
    hist.innerText = counter.value;
    const output = document.getElementById("output");
    output.prepend(document.body.appendChild(hist));
}