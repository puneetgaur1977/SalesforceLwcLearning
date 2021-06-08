import { LightningElement, wire } from 'lwc';
import SAMPLEMESSAGE from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, publish, subscribe, unsubscribe} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receiveMessage;
    connectedCallback(){
        this.subscribeMessage();
    }
    @wire(MessageContext)
    context;
    subscribeMessage(){
        subscribe(this.context, SAMPLEMESSAGE, (message)=>{
            this.handleMessage(message)},{scope:APPLICATION_SCOPE});
    }
    handleMessage(message){
        this.receiveMessage = message.lmsData.value ? message.lmsData.value : 'No Message Published';
    }
}