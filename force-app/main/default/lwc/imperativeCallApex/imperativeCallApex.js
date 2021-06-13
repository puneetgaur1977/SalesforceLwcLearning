import { LightningElement } from 'lwc';
import getImperativeAccountList from "@salesforce/apex/AccountController.getImperativeAccountList";
export default class ImperativeCallApex extends LightningElement {
    accounts;
    handleClick(event){
        getImperativeAccountList().then(result=>{
            this.accounts = result;
        }).catch(error=>{
            console.log('Error=>',JSON.stringify(error));
        })
    }
    handleCancel(event){
        this.accounts=null;
    }
}