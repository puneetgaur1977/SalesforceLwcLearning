import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandle(event){
        const{name,value} = event.target;
        this.formFields[name]=value;
    }
    handleClick(event){
        //alert(JSON.stringify(this.formFields));
        const recordInput = {apiName :CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(response=>{
            this.showToast('Success',`Contact is created ${response.id}`,'success');
            this.template.querySelector('form.createForm').reset();
            this.formFields = {};
        }).catch(error=>{
            this.showToast('Error Creating Record',error.body.message,'error');
        })
    }
    showToast(titleMess, messageData, variantData){
        this.dispatchEvent(new ShowToastEvent({
            title: titleMess,
            message: messageData,
            variant: variantData//variant can be error
        }));
    }
}