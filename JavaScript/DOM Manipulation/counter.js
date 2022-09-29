'use strict'

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
