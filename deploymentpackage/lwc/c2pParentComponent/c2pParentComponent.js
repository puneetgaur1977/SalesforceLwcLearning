import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isModalVisible = false;
    handleClick(event){
        this.isModalVisible = true;
    }
    closeModalPopup(event){
        //this.isModalVisible = false;
       // alert(JSON.stringify(event.detail));
        if(event.detail.isClose){
            this.isModalVisible = false;
        }
    }
}