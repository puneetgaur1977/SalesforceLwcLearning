import { LightningElement } from 'lwc';

export default class LwcChildComponentLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor Call');
    }
    connectedCallback(){
        console.log('Child Connected Callback Call');
        throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        console.log('Child rendered callback');
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback called');
    }
}