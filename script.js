"use strict" 

function Calculator(containerId) {

    this.operandOne = "";
    this.operandTwo = "";
    this.operator = "";
    this.display = "0";
    this.target;

    this.container = document.querySelector(`#${containerId}`);
    
   // add event listener to the container
    this.container.addEventListener('click',(event) => {       
        let target = event.target;      

        switch(target.value) {
            case '.':
                if(this.display.includes('.')) {
                    return;
                } 
                this.display += '.';
                break;
            case '0':                                  
                if (this.display === '0') {
                    this.display = "0";                                           
                } else {
                    this.display += '0'
                } 

                break;
            case '1':
                this.display += '1';                
                break;
            case '2':                 
                this.display += '2';               
                break; 
            case '3':                 
                this.display += '3';               
                break; 
            case '4':                 
                this.display += '4';               
                break; 
            case '5':                 
                this.display += '5';               
                break; 
            case '6':                 
                this.display += '6';               
                break; 
            case '7':                 
                this.display += '7';               
                break; 
            case '8':                 
                this.display += '8';               
                break; 
            case '9':                 
                this.display += '9';               
                break;                                 
            default:
                console.log('bad input');
                break;
        }         
            this.display = this.display.replace(/^0+(?=\d)/, '');
        console.log("this.display ", this.display);
    });

}

// Create an instance of the calculator
let calc = new Calculator('container');
