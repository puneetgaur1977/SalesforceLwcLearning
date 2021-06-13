import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
export default class UserInformationComponent extends LightningElement {
    userInformation = {
        Id : USER_ID,
        isGuest : IS_GUEST
    };
}