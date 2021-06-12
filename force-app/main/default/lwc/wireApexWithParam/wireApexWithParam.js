import { LightningElement , wire } from 'lwc';
import getAccountDetailForSelectedType from "@salesforce/apex/AccountController.filterAccountByType";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class WireApexWithParam extends LightningElement {
    result;
    selectedType;
    typeOptions=[];
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;
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
    @wire(getAccountDetailForSelectedType,{
        type : '$selectedType'
    })
    filterAccountRecord({data,error}){
        if(data){
            //console.log()
            this.result=data;
        }
        if(error){
            console.log(error);
        }
    }
    handleTypeChange(event){
        this.selectedType = event.target.value;
    }
    generatePickList(data){
        return data.values.map(item =>({label : item.label, value: item.value}));
    }
}