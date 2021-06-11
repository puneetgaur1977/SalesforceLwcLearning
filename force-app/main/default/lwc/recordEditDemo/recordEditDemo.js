import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class RecordEditDemo extends LightningElement {
    objectName = CONTACT_OBJECT;
    recordId = '0031700001GFEMcAAP';
    fields={
        accountField : ACCOUNT_FIELD,
        nameField : NAME_FIELD,
        titleField : TITLE_FIELD,
        phoneField : PHONE_FIELD,
        emailField : EMAIL_FIELD
    };
    handleCancel(event){
        //alert('handleCancel');
        /*this.template.querySelectorAll(‘.conName:nth-child(odd)’);*/
        let collectionList = this.template.querySelectorAll('lightning-input-field');
        console.log(JSON.stringify(collectionList));
        //console.log('Value1–>'+collectionList[0].textContent);
        if(collectionList){
            Array.from(collectionList).forEach(field =>{
                //alert('Hello');
                field.reset()
            });
        }
        /*this.template.querySelectorAll(‘.conName:nth-child(odd)’);*/
    }
}