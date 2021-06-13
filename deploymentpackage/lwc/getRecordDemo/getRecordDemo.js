import { LightningElement , wire ,api } from 'lwc';
import {getRecord , getFieldValue , getFieldDisplayValue} from 'lightning/uiRecordApi'; 
import NAME_FIELD from'@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from'@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from'@salesforce/schema/Account.AnnualRevenue';
export default class GetRecordDemo extends LightningElement {
    @api 
    recordId
    owner
    name
    AnnualRevenue;
    //@wire(getRecord,{recordId : '$recordId', 
    //layoutTypes:['Full'],modes:['View']})
    /*/@wire(getRecord,{recordId : '$recordId', 
    fields:[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandler({data,error}){
        if(data){
            this.name= data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;
            this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
        }
    }*/
    @wire(getRecord,{recordId : '$recordId', 
    fields:[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandler({data,error}){
        if(data){
            this.name= getFieldDisplayValue(data,NAME_FIELD)? getFieldDisplayValue(data,NAME_FIELD) : getFieldValue(data,NAME_FIELD);
            this.owner = getFieldValue(data,OWNER_NAME_FIELD);
            this.AnnualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD)? getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD) : getFieldValue(data,ANNUAL_REVENUE_FIELD);
        }
    }

}