// Odin simple calculator

"use strict"

let op1 = 0;    // displayCurr
let op2 = 0;    // displayPrev
let operator = "";
let result = 0;
let isNewOperation = true;

let displayPrev = document.querySelector("#displayPrev");
let displayCurr = document.querySelector("#displayCurr");
let container = document.querySelector("#container");
let currentOperation = document.querySelector(".operator");

const add = (op1, op2) => {
    console.log(typeof op1, typeof op2)
    let sum = parseFloat(op2) + parseFloat(op1);    
    displayCurr.textContent = sum;
    op1 = sum;
}    

const subtract = (op1, op2) => {
    displayCurr.textContent = op2 - op1;
}

const multiply = (op1, op2) => {  
    displayCurr.textContent = op2 * op1;
}

const divide = (op1, op2) => {
  displayCurr.textContent =  op2 / op1;   
}

const updateDisplay = () => {
    displayCurr.textContent = op1.toString();
}

const appendNumber = (value) => {  
    if(op1 === 0 && value !== ".") {
        op1 = parseFloat(value); //Replace leading zero
    } else {
        op1 = parseFloat(op1.toString() + value); // Append value
    }    
    // Remove leading zeros for integers but keep "0." for decimals
    if(!op1.toString().includes(".")) {
        op1 = op1.toString().replace(/^0+(?=\d)/, "");
    }            
    updateDisplay();        
} 

const appendDecimal = () => {
    if(!op1.toString().includes(".")) {
        op1 = parseFloat(op1 + " .0");  // add decimal point if not present  
    }
    updateDisplay();
} 

const operate = (op1, op2, operator) => {
    switch (operator) {
        case ("+"):
            add(op1, op2);            
            break;
        case ("-"):
            subtract(op1, op2);
            break;
        case ("*"):
            multiply(op1, op2);
            break;
        case ("/"): 
            divide(op1, op2);
            break;        
    }
}

const allClear = () => {
    console.log("All clear function");
    op1 = 0;
    op2 = 0;
    operator = "";
    result = 0;
    isNewOperation = true;
    displayCurr.textContent = "0";
    displayPrev.textContent = "0";
}

const changeSign = () => {    
    console.log("change sign function");
    op1 = parseFloat(displayCurr.textContent);
    op1 = -op1;
    displayCurr.textContent = op1;
    updateDisplay(); 
}

const backSpace = () => {
    let temp = displayCurr.textContent;
    op1 = temp.substring(0, temp.length - 1) || "0"; // ensure op1 is never empty
    displayCurr.textContent = op1;    
    updateDisplay(); 
}

const percentage = () => {
    op1 /= 100;
    updateDisplay();
}

const equals = () => {    
    operate(op1, op2, operator);
    op2 = parseFloat(displayCurr.textContent); 
    displayPrev.textContent = op2;
    op1 = 0;    
}

const setOperator = (newOperator) => {
    console.log("percentage function");
    if(!isNewOperation) {
        operate(op1, op2, operator);
    }
    operator = newOperator;
    op2 = displayCurr.textContent;
    displayPrev.textContent = `${op2} ${operator}`;
    op1 = 0;
    isNewOperation = false;
}

container.addEventListener("click", (e) => {
    console.log("1) container.addEventListener");
    let target = e.target;    
    switch(target.value){
        case "allClear":
            allClear();                
            break;
        case  "9":             
        case  "8":
        case  "7":
        case  "6":
        case  "5":
        case  "4":
        case  "3":
        case  "2":
        case  "1":
        case  "0":
            appendNumber(target.value);
            break; 
        case ".":
            appendDecimal("."); 
            break; 
        case "sign":
            changeSign();
            break;
        case "backspace":
            backSpace();
            break; 
        case "+":             
        case "-":            
        case "*":            
        case "/":
            setOperator(target.value);                       
            break;
        case "%":            
            percentage();                      
            break; 
        case "=":            
            equals();           
            break;
    }
});
