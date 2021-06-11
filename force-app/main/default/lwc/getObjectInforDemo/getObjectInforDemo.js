import { LightningElement , wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import {getObjectInfos} from 'lightning/uiObjectInfoApi';
export default class GetObjectInforDemo extends LightningElement {
    defaultRecordTypeId;
    apiName;
    objectInfos;
    objectApiNames = [ACCOUNT_OBJECT,CONTACT_OBJECT];
    @wire(getObjectInfo,{objectApiName : ACCOUNT_OBJECT})
    objectInfo({data, error}){
        if(data){
            //console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.apiName = data.apiName;
        }
        if(error){
            console.log(error);
        }
    }
    @wire(getObjectInfos,{objectApiNames: '$objectApiNames'})
    objectsInfo({data, error}){
        //alert('Hello');
        //alert(JSON.stringify(data));
        if(data){
            this.objectInfos = data;
            console.log('Object Infor',data);
        }
        if(error){
            console.log(error);
        }
    }
}