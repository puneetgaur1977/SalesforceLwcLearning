import { LightningElement , wire } from 'lwc';
import SAMPLEMESSAGE from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, publish, subscribe, unsubscribe} from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue;
    @wire(MessageContext)
    context;
    handleMessage(event){
        this.inputValue = event.target.value;
    }
    handleClick(event){
        //alert('Hello');
        const message={
            lmsData:{
                value: this.inputValue
            }
        }
        publish(this.context,SAMPLEMESSAGE,message);
    }
}