import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track finalResult;
    @track previousResult= [];
    firstNumber;
    secondNumber;

    numberChangeHandler(event){
     const inpuBoxName =  event.target.name;
     if(inpuBoxName === 'firstNumber'){
         this.firstNumber = event.target.value;
     }else if(inpuBoxName === 'secondNumber'){
         this.secondNumber = event.target.value;
     }

    }
    additionHandler(){
        const firstNo= parseInt(this.firstNumber);
        const secondNo = parseInt(this.secondNumber);
        console.log(firstNo+secondNo);
        
        this.finalResult = `This is addition of ${firstNo} + ${secondNo} = ${firstNo+secondNo}`;
        this.previousResult.push(this.finalResult);
    }
    substractionHandler(event){
        const firstNo= parseInt(this.firstNumber);
        const secondNo = parseInt(this.secondNumber);
        
        this.finalResult = `This is susbtraction of ${firstNo} - ${secondNo} = ${firstNo-secondNo}`;
        this.previousResult.push(this.finalResult);

    }
    multiplicationHandler(event){
        const firstNo= parseInt(this.firstNumber);
        const secondNo = parseInt(this.secondNumber);
        
        this.finalResult = `This is multipulicaiton of ${firstNo} * ${secondNo} = ${firstNo*secondNo}`;
        this.previousResult.push(this.finalResult);

    }
    divisionHandler(event){
        const firstNo= parseInt(this.firstNumber);
        const secondNo = parseInt(this.secondNumber);
        
        this.finalResult = `This is division of ${firstNo} /${secondNo} = ${firstNo/secondNo}`;
        this.previousResult.push(this.finalResult);

    }
}