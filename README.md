// global variables
let op1 = "0";    // displayCurr
let op2 = "0";    // displayPrev
let operator = "";
let result = 0;
let isNewOperation = true;

// query selectors
let displayPrev = document.querySelector("#displayPrev");
let displayCurr = document.querySelector("#displayCurr");
let container = document.querySelector("#container");
let currentOperation = document.querySelector(".operator");

// functions used and order of calling

Functions called from operate():
     - const add = (op1, op2) => {}   
     - const subtract = (op1, op2) => {}    
     - const multiply = (op1, op2) => {}   
     - const divide = (op1, op2, operator) => {}
   
Functions called from eventListener():
    - const appendNumber = (value) => {}
    - const appendDecimal = () => {}   
    - const updateDisplay = () => {}
    - const operate = (op1, op2, operator) => {}   

container.addEventListener() => {}

```
  // Coding:
  // Generally in javaScript keep numbers as numbers and 
  // only change to strings when necessary.
  // Example: 

  op1 = 45.23;
  // Check if number already contains a decimal point 
  if(!op1.toString().includes(".")) {
    // add decimal point if not present:
    op1 = op1.toString() + ".";
  } 

```  

    