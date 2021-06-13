import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api
    title;
    handleClick(event){
        const eventCust = new CustomEvent('sendmsg', {detail:
            {
                msg:"Hello From Lwc"
            }
        });
        this.dispatchEvent(eventCust);
    }
}