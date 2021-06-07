import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {
    percent=10;
    handleInput(event){
        this.percent = event.target.value;
    }
    get percentage(){
        //alert('Test');
        return `width:${this.percent}%`
    }
}