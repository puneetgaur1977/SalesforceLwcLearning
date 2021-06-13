import { LightningElement } from 'lwc';
const BOOK_URL ='https://www.googleapis.com/books/v1/volumes?q=';
export default class GoogleBookApp extends LightningElement {
    bookSearchKey = 'Man';
    timer;
    bookList;
    connectedCallback(){
        this.showBook();
    }
    changeHandler(event){
        this.bookSearchKey = event.target.value;
        if(this.bookSearchKey != 'New' && this.bookSearchKey !='' && this.bookSearchKey != null){
            window.clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                this.showBook();
            },1000)
        }else{
            this.showBook();
        }
    }
    showBook(){
        let endPoint = BOOK_URL+this.bookSearchKey;
        fetch(endPoint).then(
            response => response.json()
            ).then(
                data =>{
                    this.bookList = data;
                    console.log('List of Books=>',this.bookList);
                }
            ).catch(error=>{
                console.log(error);
            })
    }
    resetValue(event){
        this.bookSearchKey = 'Man';
        this.showBook();
    }
}