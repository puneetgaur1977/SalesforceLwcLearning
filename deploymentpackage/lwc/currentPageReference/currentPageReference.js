import { LightningElement , wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
export default class currentPageReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get pageReferece(){
        return this.pageRef ? JSON.stringify(this.pageRef, null,2):'';
    }
}