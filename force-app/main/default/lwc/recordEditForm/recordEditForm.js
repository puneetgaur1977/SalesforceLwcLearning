import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditForm extends LightningElement {
    recordId='0011700001Lpp6DAAR'
    objectApiName='Account'

    fields = ['Name', 'AnnualRevenue', 'Industry'];
    //fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    handleSubmit(event){
        alert(JSON.stringify(NAME_FIELD));
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        fields.LastName = 'My Custom Last Name'; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
     }
     successHandler(event){
        let messageDataVal = [
            'salesforce',{
                url:'/'+this.recordId,
                label : 'Click Here'
            }
        ];
        //this.showToast('Success',"{0} Display Message Data Here {1}",'success', messageDataVal);
        const evt = new ShowToastEvent({
            title : 'Success',
            message : "{0} Display Message Data Here {1}",
            variant : 'success',
            messageData : messageDataVal,
        });
        this.dispatchEvent(evt);
     }
}