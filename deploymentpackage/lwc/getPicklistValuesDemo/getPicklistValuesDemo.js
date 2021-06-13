import { LightningElement , wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesDemo extends LightningElement {
    industryOptions=[];
    typeOptions=[];
    selectedIndustry;
    selectedType;
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryPickListValues({data , error}){
        if(data){
            console.log(data);
            this.industryOptions = [...this.generatePickList(data)];
        }
        if(error){
            console.log(error);
        }
    }
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD })
    typePickListValues({data , error}){
        if(data){
            console.log(data);
            this.typeOptions = [...this.generatePickList(data)];
        }
        if(error){
            console.log(error);
        }
    }
    generatePickList(data){
        return data.values.map(item =>({label : item.label, value: item.value}));
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    handleTypeChange(event){
        this.selectedType = event.detail.value;
    }
}