import { LightningElement } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordDemo extends LightningElement {
    recordId='';
    changeHandler(event){
        this.recordId= event.target.value;
    }
    handleClick(event){
        deleteRecord(this.recordId).then((result)=>{
            //console.log('Record Successfully Delete');
            this.showToast('Success','Record has been deleted successfully!!!','success');
            this.template.querySelector('form.inputForm').reset();
        }).catch(error=>{
            //alert(JSON.stringify(error));
            this.showToast('Error','Delete Record Failed!!!','error');
            console.log('Delete Failed');
        })
    }
    showToast(titleValue,displayMessage,displayVariant){
        this.dispatchEvent(new ShowToastEvent({
            title: titleValue,
            message: displayMessage,
            variant: displayVariant //variant can be error
        }));
    }
}