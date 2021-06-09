import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToHome extends NavigationMixin(LightningElement) {
    navigateHome(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    navigateChatter(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
    navigateToNewRecord(event){
        
    }
}