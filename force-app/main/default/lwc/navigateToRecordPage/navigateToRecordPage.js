import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0031700001GFEMcAAP',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0031700001GFEMcAAP',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}