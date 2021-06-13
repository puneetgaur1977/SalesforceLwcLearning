import { LightningElement } from 'lwc';
import {NavigationMixin} from  'lightning/navigation';
import {encodeDefaultFieldValues} from  'lightning/pageReferenceUtils';
export default class NavigateObjectPage extends NavigationMixin(LightningElement) {
    handleClick(event){
        //alert('New');
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    handleClickWithDefault(event){
        const defaultValue = encodeDefaultFieldValues({
            FirstName:'Zero',
            LastName: 'Hero',
            LeadSource : 'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues : defaultValue
            }
        })
    }
    navigateToListView(event){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName : 'Recent'
            }
        })
    }
    navigateToFile(event){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}