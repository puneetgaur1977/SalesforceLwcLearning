import { LightningElement , wire } from 'lwc';
import Id from '@salesforce/user/Id';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import USER_EMAIL_FIELD from '@salesforce/schema/User.Email';
import {getRecord} from'lightning/uiRecordApi';
const FIELDS_NAME=[USER_NAME_FIELD,USER_EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId =Id;
    userDetails;
    //00517000009EYnuAAG
    //@wire(adapter, adaperConfi)
    //propertCong;
    @wire(getRecord,{recordId : '$userId', fields:['User.Name','User.Email']})
    userDetailHandler(response){
        console.log(response);
        let data = response.data;
        let error = response.error;
        if(data){
            this.userDetails = data.fields;
        }
        if(error){
            console.log(error);
        }
    }
     @wire(getRecord,{recordId : '$userId', fields:FIELDS_NAME})
     userDetailProperty;
}