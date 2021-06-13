import { LightningElement , wire} from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi';
export default class GetNavItemsDemo extends LightningElement {
    result;
    @wire(getNavItems,{
        navItemNames:['standard-Account'],
        pageSize : 30
    })
    navItemHandler({data,error}){
        if(data){
            console.log(data);
            this.result = data.navItems[0];
            //alert(JSON.stringify(this.result));
        }
        if(error){
            console.log(error);
        }
    }
}