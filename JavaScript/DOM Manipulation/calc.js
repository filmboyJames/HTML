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

const input1 = document.getElementById("input1");

const input2 = document.getElementById("input2");

const output = document.getElementById("output");

const plus = () => {
    output.value = parseInt(input1.value)+parseInt(input2.value);
    console.log(output.value);
    history();

}

const minus = () => {
    output.value = parseInt(input1.value)-parseInt(input2.value);
    console.log(output.value);
    history();

}

const times = () => {
    output.value = parseInt(input1.value)*parseInt(input2.value);
    console.log(output.value);
    history();

}

const divide = () => {
    output.value = parseInt(input1.value)/parseInt(input2.value);
    console.log(output.value);
    history();

}

const modulo = () => {
    output.value = parseInt(input1.value)%parseInt(input2.value);
    console.log(output.value);
    history();

}

//ADDITIONAL EXTRA - maaaybe...

const history = () => {
    const hist = document.createElement("p");
    hist.innerText = output.value;
    const output = document.getElementById("output");
    output.prepend(document.body.appendChild(hist));
}