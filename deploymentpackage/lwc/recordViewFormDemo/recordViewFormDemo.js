import { LightningElement , api} from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
export default class RecordViewFormDemo extends LightningElement {
    @api 
    recordId;
    @api 
    objectApiName;

}