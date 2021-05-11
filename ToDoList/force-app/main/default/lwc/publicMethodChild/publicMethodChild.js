import { LightningElement, track,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

   @track value = ['red'];
    options =  [
            { label: 'Ross', value: 'red' },
            { label: 'Rachel', value: 'blue' },
            { label: 'smita', value: 'green' },
            { label: 'kagde', value: 'black' }
        ];
    @api
    selectCheckbox(checkboxValue){
       const selectedCheckbox = this.options.find(checkbox =>{
           return checkboxValue === checkbox.value;

        })
        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "sucessfully checked";
        }
        }
        }



