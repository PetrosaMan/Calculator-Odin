// Odin simple calculator

"use strict"

let op1 = "0";    // displayCurr
let op2 = "0";    // displayPrev
let operator = "";
let result = 0;
let isNewOperation = true;

let displayPrev = document.querySelector("#displayPrev");
let displayCurr = document.querySelector("#displayCurr");
let container = document.querySelector("#container");
let currentOperation = document.querySelector(".operator");

const add = (op1, op2) => {
    let sum = parseFloat(op2) + parseFloat(op1);    
    displayCurr.textContent = sum;
    op1 = sum.toString();
}    

const subtract = (op1, op2) => {
    console.log(parseFloat(op2) - parseFloat(op1));
    displayCurr.textContent = parseFloat(op2) - parseFloat(op1);
}

const multiply = (op1, op2) => {
    console.log(parseFloat(op2) * parseFloat(op1));
    displayCurr.textContent = parseFloat(op2) * parseFloat(op1);
}

const divide = (op1, op2) => {
    console.log(parseFloat(op2) / parseFloat(op1));
    displayCurr.textContent =  parseFloat(op2) / parseFloat(op1);   
}

const updateDisplay = () => {
    console.log("2) updateDisplayfunction called");
    displayCurr.textContent = op1;
}

const appendNumber = (value) => {  
    if(op1 === 0 && value !== ".") {
        op1 = value; //Replace leading zero
    } else {
        op1 += value; // Append value
    }    
    // Remove leading zeros for integers but keep "0." for decimals
    if(!op1.includes(".")) {
        op1 = op1.replace(/^0+(?=\d)/, "");
    }            
    updateDisplay();        
} 

const appendDecimal = () => {
    console.log("appendDecimal called");
    if(op1 === "") {
        op1 ="0."; // start with "0." if empty
    } else if(!op1.includes(".")) {
        op1 += ".";  // Appends decimal point
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
    op1 = "0";
    op2 = "0";
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
    updateDisplay; // Is this necessary
}

const backSpace = () => {
    let temp = displayCurr.textContent;
    op1 = temp.substring(0, temp.length - 1)
    displayCurr.textContent = op1;
    if(displayCurr.textContent === "") {
        displayCurr.textContent += "0";
    }
    updateDisplay(); // Is this necessary
}

const percentage = () => {
    console.log("percentage function");
    displayCurr.textContent = parseFloat(op1) / 100;
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
            console.log("case +");
            if (!isNewOperation) {
                operate(op1, op2, operator);
            }           
            operator = "+"; 
            op2 = displayCurr.textContent         
            displayPrev.textContent = `${op2} ${operator}`;            
            op1 = "0"; 
            isNewOperation = false;                   
            break;
        case "-":
            console.log("case -");
            if (!isNewOperation) {
                operate(op1, op2, operator);
            }           
            operator = "-"; 
            op2 = displayCurr.textContent         
            displayPrev.textContent = `${op2} ${operator}`;            
            op1 = "0"; 
            isNewOperation = false;                   
            break;
        case "*":     
            console.log("case *");
            if (!isNewOperation) {
                operate(op1, op2, operator);
            }           
            operator = "*"; 
            op2 = displayCurr.textContent         
            displayPrev.textContent = `${op2} ${operator}`;            
            op1 = "0"; 
            isNewOperation = false;                   
            break;
        case "/":
            console.log("case /");
            if (!isNewOperation) {
                operate(op1, op2, operator);
            }           
            operator = "/"; 
            op2 = displayCurr.textContent         
            displayPrev.textContent = `${op2} ${operator}`;            
            op1 = "0"; 
            isNewOperation = false;                   
            break;
        case "%":
            console.log("case %");
            op1 = displayCurr.textContent;
            percentage();                      
            break; 
        case "=":
            console.log("case = ");
            operate(op1, op2, operator);
            op2 = displayCurr.textContent; 
            displayPrev.textContent = op2;
            op1 = "0";           
            break;
    }
});
