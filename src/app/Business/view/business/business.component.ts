import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  resultAns: any;
  result: any[] = [];
  Questionslength: any;
  checkingID: number = 1;
  crtAns = "Correct Answer :->";
  wrgAns = "Worng Answer :->";
  slctAns = "Selected Answer :->";
  trueCounter: number = 0;
  falseCounter: number = 0;
  countingID: number = 1;
  booleanValue: any;

  id: any;
  quesTitle: any;
  opt1: any;
  opt3: any;
  opt2: any;
  opt4: any;
  correctOPT: any;
  selectedAns: any;
  displayAns: any;




  ngOnInit() {
    const Questions = JSON.parse(localStorage.getItem('Questions') || '[]');
    this.Questionslength = Questions.length;
    // console.log("length of questions>>", this.Questionslength);
    this.reviewAns();
    this.checkTheAns();
  }

  checkTheAns() {
    for (var i = 1; i <= this.Questionslength; i++) {

      const Questions = JSON.parse(localStorage.getItem('Questions') || '[]');
      let checkQuestion = Questions.find((question: { id: number; }) => question.id == this.checkingID);

      const Answers = JSON.parse(localStorage.getItem('Selected Answer ') || '[]');
      let checkAnswer = Answers.find((selectedAns: { id: number; }) => selectedAns.id == this.checkingID);

      if (checkQuestion.correctOPT == checkAnswer.SelectedOption) {
        this.resultAns = "True";
        this.booleanValue = 1;
      } else {
        this.resultAns = "False";
        this.booleanValue = 0;
      }

      const resultAns = {
        id: this.result.length + 1,
        correctOPT: checkQuestion.correctOPT,
        SelectedOption: checkAnswer.SelectedOption,
        resultAnswer: this.resultAns,
        booleanValue: this.booleanValue,
      }

      this.result.push(resultAns);
      // console.log("check ans>>", this.result);

      localStorage.setItem('Result Answer', JSON.stringify(this.result));

      this.checkingID++;

      // console.log("check  id >>", this.checkingID);

    }

    for (var i = 1; i <= this.Questionslength; i++) {

      const counter = JSON.parse(localStorage.getItem('Result Answer') || '[]');
      let countAns = counter.find((result: { id: number; }) => result.id == this.countingID);

      if (countAns.booleanValue == 1) {
        this.trueCounter++;
      } else {
        this.falseCounter++;
      }

      this.countingID++;
    }
    // console.log("trueCounter>>", this.trueCounter);
    // console.log("falseCounter>>", this.falseCounter);
  }

  Answer: any;
  correctColor: any;
  wrongColor: any;
  whiteColor: any;


  DisplayTheAns() {

    const storedQuestions = JSON.parse(localStorage.getItem('Display All Answer') || '[]');
    let displayAns = storedQuestions.find((question: { id: number; }) => question.id);
    this.Answer = storedQuestions;

    if (displayAns) {
      this.id = displayAns.id;
      this.quesTitle = displayAns.quesTitle;
      this.opt1 = displayAns.opt1;
      this.opt2 = displayAns.opt2;
      this.opt3 = displayAns.opt3;
      this.opt4 = displayAns.opt4;
      this.correctOPT = displayAns.correctOPT;
      this.selectedAns = displayAns.selectedAns;
    }

    this.correctColor = "#A6F29B";
    this.wrongColor = "#FF474C"; 
    this.whiteColor = "#FFFFFF";

  }


  FirstQuestionID: number = 1;
  showAns!: { id: any; quesTitle: any; opt1: any; opt2: any; opt3: any; opt4: any; correctOPT: any; selectedAns: any; };
  showAllAns: any[] = [];

  reviewAns() {

    for (var i = 1; i <= this.Questionslength; i++) {
      const storedQuestions = JSON.parse(localStorage.getItem('Questions') || '[]');
      let nextQuestion = storedQuestions.find((question: { id: number; }) => question.id == this.FirstQuestionID);

      const Answers = JSON.parse(localStorage.getItem('Selected Answer ') || '[]');
      let checkAnswer = Answers.find((selectedAns: { id: number; }) => selectedAns.id == this.FirstQuestionID);

      this.showAns = {
        id: nextQuestion.id,
        quesTitle: nextQuestion.quesTitle,
        opt1: nextQuestion.opt1,
        opt2: nextQuestion.opt2,
        opt3: nextQuestion.opt3,
        opt4: nextQuestion.opt4,
        correctOPT: nextQuestion.correctOPT,
        selectedAns: checkAnswer.SelectedOption,
      }

      this.showAllAns.push(this.showAns);

      localStorage.setItem('Display All Answer', JSON.stringify(this.showAllAns));

      this.FirstQuestionID++;

      // console.log(this.FirstQuestionID);
    }

  }

}
