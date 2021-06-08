import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    handlOk(event){
        // const customEvent = new CustomEvent('close',{
        //     bubbles : false,
        //     details: 'hello'
        // });
        this.dispatchEvent(new CustomEvent('close',{
            bubbles : true,
            detail:{
                message: "Successfully Completed Task",
                isClose: true
            }
        })); 
    
    }
    footerEvent(event){
        alert('Footer Event');
    }
}