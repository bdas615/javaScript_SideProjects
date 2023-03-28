
let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

function sum() {

    let result = num1 + num2;
    document.getElementById('sum-el').textContent = "Sum : " + result ;
}

function subtract(){

    let result =  num1 - num2;
    document.getElementById('sum-el').textContent = "Subtraction : " + result;
}

function divide(){

    if(num2==0){
        document.getElementById('sum-el').textContent = "Denominator cannot be 0";
    }
    else{
        let result =  num1/num2;
        document.getElementById('sum-el').textContent = "Divide : " + result;
    } 
}

function multiply(){
    let result =  num1*num2;
    document.getElementById('sum-el').textContent = "Multiply : " + result; 
}
