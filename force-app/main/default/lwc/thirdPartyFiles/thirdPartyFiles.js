import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadScript , loadStyle} from 'lightning/platformResourceLoader';
/*NameSpace: import sampleResource from '@salesforce/resourceUrl/namespace__resourceReference';*/
export default class ThirdPartyFiles extends LightningElement {
    currentdate='';
    isLibraryLoaded = false;
    renderedCallback(){
        if(this.isLibraryLoaded)
            return;
        else{
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen();
            }).catch(error =>{
                alert(error);
                console.log(error);
            })
            this.isLibraryLoaded = true;
        }
        
    }
    setDateOnScreen(){
       this.currentdate = moment().format('LLLL');
    }
}