'use strict'

console.log("Calculator");

const input1 = document.getElementById("input1");

const input2 = document.getElementById("input2");

const output = document.getElementById("output");

const plus = () => {
    output.value = parseInt(input1.value)+parseInt(input2.value);
    console.log(output.value);
}

const minus = () => {
    output.value = parseInt(input1.value)-parseInt(input2.value);
    console.log(output.value);
}

const times = () => {
    output.value = parseInt(input1.value)*parseInt(input2.value);
    console.log(output.value);
}

const divide = () => {
    output.value = parseInt(input1.value)/parseInt(input2.value);
    console.log(output.value);
}

const modulo = () => {
    output.value = parseInt(input1.value)%parseInt(input2.value);
    console.log(output.value);
}

const numberInput = (num) => {
    input1.value = num;
    console.log(input1.value);
}

const numberInput2 = (num) => {
    input2.value = num;
    console.log(input1.value);
}


