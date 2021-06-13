import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AR_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import BILLING_FIELD from '@salesforce/schema/Account.BillingAddress';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
export default class RecordValidationCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    recordId='0011700001MAZRCAA5';
    fields={
        accountName : NAME_FIELD,
        annualRevenue : AR_FIELD,
        billingAdd : BILLING_FIELD,
        phone : PHONE_FIELD
    }
}