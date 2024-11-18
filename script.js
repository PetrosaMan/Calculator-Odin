"use strict" 

function Calculator(containerId) {

    this.operandOne = "";
    this.operandTwo = "";
    this.operator = "";
    this.display = "0";

    this.container = document.querySelector(`#${containerId}`);
    
   // add event listener to the container
    this.container.addEventListener('click',(event) => {
        let target = event.target;        
        switch(target.value) {
            case '0':
                console.log('0 clicked');
                break;
            case '1':
                console.log('1 clicked');
                break;
            default:
                console.log('bad input');       
        }

    });

}

// Create an instance of the calculator
let calc = new Calculator('container');
