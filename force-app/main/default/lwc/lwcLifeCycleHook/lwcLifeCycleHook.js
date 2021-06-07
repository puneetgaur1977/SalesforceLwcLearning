import { LightningElement } from 'lwc';

export default class LwcLifeCycleHook extends LightningElement {
    name;
    isChildVisible = false;
    constructor(){
        super();
        console.log('Parent Constructor Call');
    }
    connectedCallback(){
        console.log('Parent Connected Callback Call');
    }
    // render(){
    //     console.log('parent render callback'); 
    // }
    renderedCallback(){
        console.log('parent renderedCallback callback');
    }
    changeHandler(event){
        this.name = event.target.value;
    }
    handleClick(event){
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}