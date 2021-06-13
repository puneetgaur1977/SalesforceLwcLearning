import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    slotFooterHandler(event){
        const footerElement = this.template.querySelector('.slds-card__footer');
        /*this.template.querySelector('.main').textContent
        this.template.querySelector('.conName:first-child')*/
        if(footerElement){
            footerElement.classList.remove('slds-hide');
        }
    }
}