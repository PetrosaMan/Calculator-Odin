"use strict" 

function Calculator() {

    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";    
    this.display = "";
    this.decimal = "";

    this.allClear = function() {        
        this.currentOperand = "";
        this.previousOperand = "";
        this.display = "";
        this.operator = "";
        document.querySelector("#display").textContent = 0;
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

    this.changeSign = function() {
        console.log("change sign function");
        let temp = parseFloat(this.currentOperand);
        temp = -temp;
        console.log("temp: ", temp);
        this.currentOperand = temp;
        console.log(this.currentOperand);
        this.updateDisplay();
        return;
    }

    this.percentage = function(a) {
        return parseFloat(a) / 100;
    }    
    
    this.updateDisplay = function() {        
        this.display = this.currentOperand;
        document.querySelector("#display").textContent = this.display;
        return;       
    }

    this.backSpace = function() {        
        let temp = this.display;        
        this.display = temp.substring(0, temp.length-1);        
        this.currentOperand = this.display;
        this.updateDisplay(); 
    }

    this.appendNumber = function(value) {  
        if(this.currentOperand === 0 && value !== ".") {
            this.currentOperand = value; //Replace leading zero
        } else {
            this.currentOperand += value; // Append value
        }
        
        // Remove leading zeros for integers but keep "0." for decimals
        if(!this.currentOperand.includes(".")) {
            this.currentOperand = this.currentOperand.replace(/^0+(?=\d)/, "");
        }            
        this.updateDisplay();        
    } 
        
    this.appendDecimal = function() {
        if(this.currentOperand === "") {
            this.currentOperand ="0."; // start with "0." if empty
        } else if(!this.currentOperand.includes(".")) {
            this.currentOperand += ".";  // Appends decimal point
        }
        this.updateDisplay();
    }   
    
    let container = document.querySelector("#container");    
    
    container.addEventListener("click", (e) => {
        let target = e.target;
        console.log("e.target: ", target);
        switch(target.value){
            case "allClear":
                this.allClear();                
                break;
            case  "9":
                this.appendNumber("9");
                break; 
            case  "8":
                this.appendNumber("8");
                break; 
            case  "7":
                this.appendNumber("7");
                break; 
            case  "6":
                this.appendNumber("6");
                break;
            case  "5":
                this.appendNumber("5");
                break;
            case  "4":
                this.appendNumber("4");
                break;
            case  "3":
                this.appendNumber("3");
                break; 
            case  "2":
                this.appendNumber("2");
                break; 
            case  "1":
                this.appendNumber("1");
                break;
            case  "0":
                this.appendNumber("0");
                break; 
            case ".":
                this.appendDecimal("."); 
                break; 
            case "sign":
                this.changeSign();
                break;
            case "backspace":
                this.backSpace();
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


