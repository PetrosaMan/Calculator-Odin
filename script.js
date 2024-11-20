"use strict" 

function Calculator(container) {

    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";    
    this.display = "0";

    this.allClear = function() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.display = "0";
        this.operator = "";
    }

    this.add = function(a, b) {        
        return parseFloat(a) + parseFloat(b);
    }

    this.subtract = function(a, b) {
        return parseFloat(a) - parseFloat(b);
    }    

    this.multiply = function(a, b) {
        return parseFloat(a) * parseFloat(b);
    }

    this.divide = function(a, b) {
        return parseFloat(a) / parseFloat(b);
    }

    this.changeSign = function(a) {
        return parseFloat(-a);
    }

    this.percentage = function(a) {
        return parseFloat(a) / 100;
    }
   
}
// Create an instance of the calculator
let calc = new Calculator('container');

console.log(calc.add(2, 4));
console.log(calc.subtract(2, 4));
console.log(calc.multiply(2, 4));
console.log(calc.divide(2, 4));
console.log(calc.changeSign(7));
console.log(calc.changeSign(-8));
console.log(calc.percentage(20));


