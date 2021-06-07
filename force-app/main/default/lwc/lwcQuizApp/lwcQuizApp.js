import { LightningElement } from 'lwc';

export default class LwcQuizApp extends LightningElement {
    selected={}; //for answers
    correctAnswer = 0;
    isSubmitted = false;
    myQuestions=[
        {
            id:"Question 1",
            Question: "Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loo"
            },
            correctAnswer:"c"
        },
        {
            id:"Question 2",
            Question: "Which of the file is invalid un LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question 3",
            Question: "Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"@track",
                c:"if:true"
            },
            correctAnswer:"b"
        },
    ];
    changeHandler(event){
        let answer = event.target.value;
        let question = event.target.name;
        console.log('Answer=',answer);
        console.log('question=',question); 
        const {name, value} = event.target;
        this.selected={...this.selected,[name]:value};

    }
    get allNotSelected(){
        //alert('Hello');
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    handleSubmit(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswer = correct.length;
        console.log('Correct Answers=',this.correctAnswer);
        this.isSubmitted = true;
    }
    handleReset(event){
        this.selected={};
        this.correctAnswer = 0; 
        this.isSubmitted = false;
    }
    get isScoredFull(){
            return `slds-text-heading_large ${this.correctAnswer === this.myQuestions.length?
            'slds-text-color_success':'slds-text-color_error'}`;
    }
}