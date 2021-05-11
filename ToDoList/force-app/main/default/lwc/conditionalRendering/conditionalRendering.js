import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track diplayCondition;
    @track cityList =['jaipur', 'Melbourne','Bombay','korba'];

    handleChange(event){
        this.diplayCondition= event.target.checked;
    }

}