import { LightningElement } from 'lwc';

export default class LwcLooping extends LightningElement {
    carList = ["Ford","Audi","Maruti","Hyundai","Mercedes"];
    ceoList=[
        {
            id:1,
            company:"Google",
            ceo:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple",
            ceo:"Tom Cook"
        },
        {
            id:3,
            company:"Amazon",
            ceo:"Puneet Gaur"
        },
    ];
}