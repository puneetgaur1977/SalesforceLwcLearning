import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames=[
        "Puneet",
        "Gaur",
        "Shaurya Gaur",
        "Srishti Gaur"
    ];
    fecthDetailHandler(event){
        const elem = this.template.querySelector('lightning-card').title =  'Changed Lightning Card'
        const elemHeading = this.template.querySelector('h1');
        elemHeading.style.border="1px solid red";
        elemHeading.innerText = 'Change Heading In Template ddd';
        console.log(elemHeading.innerText);
        const collectionList = this.template.querySelectorAll('.name');
        //console.log('Value1–>'+collectionList[0].textContent);
        // Array.from(collectionList).forEach(item=>{
        //     console.log(item.innerText);
        // })
        Array.from(collectionList).forEach(item=>{
            /**logic here !*/
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
          });
        const childElement= this.template.querySelector('.child');
        childElement.innerHTML = '<p>Hey I am a child Element</p>';
    }
}