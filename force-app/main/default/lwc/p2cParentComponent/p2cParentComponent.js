import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    progressBar=10;
    carouselDataVal=[
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Second Card",
            description : "Second card description.",
        },
    ];
    handleKeyUp(event){
        this.progressBar = event.target.value;
    }
    handleClick(event){
        this.template.querySelector('c-p2c-slider-component').reset();
        /*this.template.querySelector('.main').textContent
        this.template.querySelector('.conName:first-child')*/
    } 
}