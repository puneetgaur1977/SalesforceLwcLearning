import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditWithCustomInput extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue='';
    handleChange(event){
        this.inputValue = event.target.value;
    }
    handleSubmit(event){
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        /*this.template.querySelectorAll(‘.conName:nth-child(odd)’);*/
       if(!value.includes('Australia')){
           inputCmp.setCustomValidity("The account name must include 'Australi'");
       }else{
           inputCmp.setCustomValidity("");
           const fields = event.detail.fields;
           fields.Name = value;
           this.template.querySelector('lightning-record-edit-form').submit(fields);
       }
       inputCmp.reportValidity();
    }
    successHandler(event){
        this.showToast('Success','Account has ben created successfully!!!','success', null);
    }
    handleError(event){
        this.showToast('Error','Error creating an Account','error', null);
    }
    showToast(title, message, variant , messageDataVal){
        const evt = new ShowToastEvent({
            title : title,
            message : message,
            variant : variant,
            messageData : messageDataVal,
            mode : 'sticky'
        });
        this.dispatchEvent(evt);
    }
}