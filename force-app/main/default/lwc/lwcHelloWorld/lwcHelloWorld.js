import { LightningElement , track } from 'lwc';

export default class LwcHelloWorld extends LightningElement {
    fullName = "Zero to Hero";
    titl= "Aura";
    users=["Puneet","Gaur"];
    object={
        name:"Puneet"
    };
    getName(){
        
    }
    changeHandler(event){
        this.title = event.target.value;
    }
    address={
        city: "Gilbert",
        postcode: "85295",
        country: "USA"
    };
    trackHandler(event){
        //this.address = {...this.address, "city":event.target.value}; - No need to keep track
        this.address.city = event.target.value;
    }
    users=["Puneet","Gaur"];
    num1=10;
    num2=20;
    get firstName(){
        return this.users[0];
    }
    get totalNum(){
        return this.num1*this.num2;
    }

}