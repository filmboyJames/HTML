'use strict'

console.log("Calculator");

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
    const addToBody = document.body.appendChild(hist);const output2 = document.getElementById("output");
    output2.prepend(addToBody);
}