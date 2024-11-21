"use strict" 

function Calculator() {

    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";    
    this.display = "0";
    this.decimal = "";

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

    let disp = document.querySelector("#display");
    console.log(disp);
    
    this.updateDisplay = function() {        
        this.display = this.currentOperand;
        console.log("display ", this.display);
        //disp.value = this.currentOperand;
    }

    this.appendNumber = function(value) {        
        this.currentOperand += value;
        this.currentOperand.replace(/^0+(?=\d)/, "");
        this.updateDisplay();        
    } 
    
    this.appendDecimal = function() {        
        if(this.currentOperand.includes(".")) {
            return;
        } else {
            this.appendNumber(".");
        }
    }

    

    let container = document.querySelector("#container");
    
    
    container.addEventListener("click", (e) => {
        let target =e.target;
        switch(target.value){
            case "allClear":
                this.allClear();                
                break;
            case  "7":
                this.appendNumber("7");
                break;   
        }
    });
   
}
// Create an instance of the calculator
let calc = new Calculator();

//console.log(calc.add(2, 4));
//console.log(calc.subtract(2, 4));
//console.log(calc.multiply(2, 4));
//console.log(calc.divide(2, 4));
//console.log(calc.changeSign(7));
//console.log(calc.changeSign(-8));
//console.log(calc.percentage(20));


