import { LightningElement } from 'lwc';
import signinTemplate from  './signinTemplate.html';
import signupTemplate from  './signupTemplate.html';
import renderTemplate from  './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectBtn = '';
    render(){
        if(this.selectBtn === 'Signup')
            return signupTemplate;
        if(this.selectBtn === 'Success')
            return signinTemplate;
        return renderTemplate; 
    }
    handleClick(event){
        this.selectBtn = event.target.label;
    }
    handleSave(event){
        console.log('Sign In Successfully');
    }
}