import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToExternalWebPage extends NavigationMixin(LightningElement) {
        /*import { NavigationMixin } from 'lightning/navigation';
        classname extends NavigationMixin(LightningElement)*/
        navigateToWebPage(event){
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://www.salesforce.com'
                }
            });
        }
}