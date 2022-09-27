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

for(let n = 1; n <=100; n++){
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz");
    } else if(n%3==0){
        console.log("Fizz");
    } else if(n%5==0){
        console.log("Buzz");
    } else {
        console.log(n);
    }
}

let m=1
while(m<=100){
    let result = m%3==0 && m%5==0 ? "FizzBuzz" : (m%3==0 ? "Fizz" : (m%5==0 ? "Buzz": m));
    console.log(result);
    m++;
}

for(let i=1; i<=100; i++){
    switch(true){
        case (i % 3 == 0) :
            console.log("Fizz");
            break;
        case (i % 5 == 0) :
            console.log("Buzz");
            break;
        case (i %5 == 0 && i% 3 ==0) :
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
    }
}