import { LightningElement, wire } from 'lwc';
import SAMPLEMESSAGE from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, publish, subscribe, unsubscribe} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receiveMessage;
    subscription;
    connectedCallback(){
        this.subscribeMessage();
    }
    @wire(MessageContext)
    context;
    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLEMESSAGE, (message)=>{
            this.handleMessage(message)},{scope:APPLICATION_SCOPE});
    }
    handleMessage(message){
        this.receiveMessage = message.lmsData.value ? message.lmsData.value : 'No Message Published';
    }
    handleUnsubscribe(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}