import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import AR_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormDemo extends LightningElement {
    recordId='0011700001MAZRCAA5';
    objectName = ACCOUNT_OBJECT;
    fieldList = [AR_FIELD,INDUSTRY_FIELD,TYPE_FIELD,NAME_FIELD];
    successHandler(event){
        const showToast = new ShowToastEvent({
            title : "Account Created",
            message : "Record id",
            variant: "success"
        });
        this.dispatchEvent(showToast);
        //alert('Updated');
    }
}