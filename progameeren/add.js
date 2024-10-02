function Count(Number1, Number2){
let FinalNumber = Number1 + Number2;
console.log(Number1, "+", Number2,"=", FinalNumber);
}

Count(7,16)

function Multiply(Number1, Number2){
    let FinalMultiNumber = Number1 * Number2;
    console.log(Number1, "x", Number2,"=", FinalMultiNumber)
}

Multiply(7,16)

console.log("-------------------")

function WhichBigger(Number1, Number2){
    if(Number1 > Number2){
        return Number1 + " is groter dan " + Number2
    }
    if(Number1 < Number2){
        return Number2 + " is groter dan " + Number1
    }
    if(Number1 == Number2){
        return Number2 + " is even groot als " + Number1;
    }
    else{
        return "nummers pls"
    }
}

let biggerNumber1 = "nein"
let biggerNumber2 = 69

let biggerNumber = WhichBigger(biggerNumber1,biggerNumber2);
console.log(biggerNumber)

