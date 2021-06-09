import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import hasShowDetails from '@salesforce/customPermission/show_details';
export default class CheckPermissionSet extends LightningElement {
    get hasViewAllDataAvailable(){
        //alert(hasViewAllData);
        return hasViewAllData;
    }
    get hasCustomPermissionAvailable(){
        //alert(hasViewAllData);
        return hasShowDetails;
    }
}