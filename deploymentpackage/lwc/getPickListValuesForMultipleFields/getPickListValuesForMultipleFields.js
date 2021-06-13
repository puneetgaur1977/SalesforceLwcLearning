import { LightningElement , wire} from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo } from'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPickListValuesForMultipleFields extends LightningElement {
    industryOptions=[];
    typeOptions=[];
    selectedIndustry;
    selectedType;
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo;
    @wire(getPicklistValuesByRecordType,{objectApiName : ACCOUNT_OBJECT,
    recordTypeId : '$objectInfo.data.defaultRecordTypeId'})
    pickListHandler({data , error}){
        if(data){
            //console.log(data.Industry);
            this.industryOptions = [...this.generatePickList(data.picklistFieldValues.Industry)];
            this.typeOptions = [...this.generatePickList(data.picklistFieldValues.Type)];
        }
        if(error){
            console.log(error);
        }
    }
    generatePickList(data){
        return data.values.map(item =>({label : item.label, value: item.value}));
    }
    handleChange(event) {
        const {name, value} = event.target;
        if(name === 'Industry'){
            this.selectedIndustry = value;
        }
        if(name === 'Type'){
            this.selectedType = value;
        }
        
    }
    
}