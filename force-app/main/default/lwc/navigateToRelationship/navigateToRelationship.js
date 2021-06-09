import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRelationship extends NavigationMixin(LightningElement) {
    handleClick(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                actionName: "view",
                recordId: "0011700001Lpp6DAAR",
                objectApiName: "Account",
                relationshipApiName: "Contacts"
            }
        });
    }
}