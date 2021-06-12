import { LightningElement , api , wire} from 'lwc';
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

export default class CallApexClass extends LightningElement {
    result=[];
    accountList =[];

    @wire(getAccountList)
    accountLis({data,error}){
        if(data){
            console.log(data);
            //this.result = data;
            this.result = data.map(key=>{
                let newType = key.Type=== 'Customer - Channel' ? 'Channel':
                key.Type=== 'Customer - Direct' ? 'Direct' : '--------';
                return {...key, newType};
            })
        }
        if(error){
            console.log(error);
        }
    }
}