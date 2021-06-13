import { LightningElement , wire } from 'lwc';
import {createRecordInputFilteredByEditedFields, updateRecord} from 'lightning/uiRecordApi';
import {getListUi} from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [
    {label : "Id", fieldName : 'Id'},
    {label : "Name", fieldName : 'Name'},
    {label : "Title", fieldName : 'Title'},
    {label : "Phone", fieldName : 'Phone', editable:true},
    {label : "Email", fieldName : 'Email', type: 'email', editable:true}
]


export default class UpdateRecordDemo extends LightningElement {
    contacts=[];
    columnsName= COLS;
    draftValues=[];
    @wire(getListUi,{
        objectApiName : CONTACT_OBJECT,
        listViewApiName : 'AllContacts'
    })
    allContactHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts=data.records.records.map(item =>{
                return{
                    "Id" : this.getValue(item, 'Id'),
                    "Name" : this.getValue(item,'Name'),
                    "Title" : this.getValue(item,'Title'),
                    "Email" : this.getValue(item,'Email'),
                    "Phone" : this.getValue(item,'Phone')
                }
            })
        }
        if(error){
            console.log(error);
        }
    }
    getValue(data, fieldName){
        //console.log(JSON.stringify(data));
        return data.fields[fieldName].value;
    }
    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues));
        const recordInputs = event.detail.draftValues.map(draft =>{
            const fields = {...draft};
            return {fields:fields}
        })
        //alert(JSON.stringify(recordInput));
        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('Updated Success');
            this.draftValues=[];
        }).then(error=>{
            console.log(error);
        })

    }
}