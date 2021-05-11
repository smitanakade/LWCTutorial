import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;
    checkboxSelectHandler(){
        alert("HERE");
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMethod= childComponent.selectCheckbox(this.value);
   console.log("Parent==",returnedMethod);
    }
    onInputChangeHandler(event){
        this.value= event.target.value;
    }
}