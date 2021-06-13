import { LightningElement } from 'lwc';
import {NavigationMixin} from  'lightning/navigation';

export default class NavigateLWCPage extends NavigationMixin(LightningElement) {
    navigateToLWCPage(event){
        var definition = {
            componentDef : 'c:navLWCTarget',
            attributes:{
                recordId : '123455'
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#'+btoa(JSON.stringify(definition))
            }
        });
    }
}