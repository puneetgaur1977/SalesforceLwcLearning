import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {
    navigateToAuraComp(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: "c__AuraNavigation"
            },
            state:{
                "c__Id" : "122223344"
            }
        });
    }
}