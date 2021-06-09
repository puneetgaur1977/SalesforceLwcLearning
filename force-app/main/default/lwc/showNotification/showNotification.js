import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class ShowNotification extends NavigationMixin(LightningElement) {
    handleClick(event){
        // const evt = new ShowToastEvent({
        //     title :'Success',
        //     message : 'Account Created',
        //     variant : 'Success'
        // });
        // this.dispatchEvent(evt);
        this.showToast('Success','Account Creation','Success', null);
    }
    handleClick1(event){
        this.showToast('Error','Error Account Creation','Error', null);
    }
    handleClick2(event){
        this.showToast('Warning','Password should have 15 chacaters','warning', null);
    }
    handleClick3(event){
        this.showToast('Info','PSummer 20 is available','info', null);
    }
    handleClick4(event){
        let messageDataVal = [
            'salesforce',{
                url:'http://www.salesforce.com',
                label : 'Click Here'
            }
        ];
        this.showToast('Success',"{0} Display Message Data Here {1}",'success', messageDataVal);
    }
    showToast(title, message, variant , messageDataVal){
        const evt = new ShowToastEvent({
            title : title,
            message : message,
            variant : variant,
            messageData : messageDataVal,
            mode : 'sticky'
        });
        this.dispatchEvent(evt);
    }
    handleRecordClick() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0011700001Lpp6DAAR',
                actionName: 'view',
            },
        }).then(url => {
            const event = new ShowToastEvent({
                "title": "Success!",
                "message": "Record {0} created! See it {1}!",
                "messageData": [
                    'Salesforce',
                    {
                        url,
                        label: 'here'
                    }
                ]
            });
            this.dispatchEvent(event);
        });

    }
}