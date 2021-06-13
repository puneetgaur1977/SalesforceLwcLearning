import { LightningElement } from 'lwc';
import getAccountList from "@salesforce/apex/AccountController.filterImperativeAccountByType";
export default class ImperativeApexCallWithfilter extends LightningElement {
    accounts;
    searchKey;
    delay;
    searchHandler(event){
        window.clearTimeout(this.delay);
        this.searchKey = event.target.value;
        this.delay = setTimeout(()=>{
            this.serachResult();
        },1000)
    }
    serachResult(){
        getAccountList(
            {
                account : this.searchKey
            }).then(result=>{
                this.accounts = result;
            }).catch(error=>{
                console.log(error);
            })
    }
}