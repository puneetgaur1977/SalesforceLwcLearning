import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    handleClick(event){
        this.isVisible = true;
    }
    changeHandler(event){
        this.name= event.target.value;
    }
    get isHelloString(){
        return this.name === 'hello'
    }
}