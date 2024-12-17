import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  questions: any[] = [];
  id: any;
  quesTitle: any;
  opt1: any;
  opt2: any;
  opt3: any;
  opt4: any;
  currentQuestion: any;
  oldselectedOption: any;
  newselectedOption: any;
  QuestionLength: any;
  selectedOption: any;
  OPT: any;
  hasSelectedOption!: boolean;


  constructor(private router: Router) { }


  ngOnInit(): void {
    this.Questions();
    this.showFirstQusetion();
    const storedQuestions = JSON.parse(localStorage.getItem('Questions') || '[]');
    this.QuestionLength = storedQuestions.length;
    // console.log("length>>", this.QuestionLength);

  }

  Questions() {
    this.questions.push({
      id: "1",
      quesTitle: "What is the capital of Australia?",
      opt1: "Sydney",
      opt2: "Melbourne",
      opt3: "Canberra",
      opt4: "Brisbane",
      correctOPT: "Canberra"
    },
      {
        id: "2",
        quesTitle: "Which city is the capital of France?",
        opt1: "Paris",
        opt2: "Marseille",
        opt3: "Lyon",
        opt4: "Nice",
        correctOPT: "Paris"
      },
      {
        id: "3",
        quesTitle: "Which city serves as the capital of Brazil?",
        opt1: "Rio de Janeiro",
        opt2: "São Paulo",
        opt3: "Salvador",
        opt4: "Brasília",
        correctOPT: "Brasília"
      },
      {
        id: "4",
        quesTitle: "What is the capital of Japan?",
        opt1: "Osaka",
        opt2: "Tokyo",
        opt3: "Kyoto",
        opt4: "Yokohama",
        correctOPT: "Tokyo"
      },
      {
        id: "5",
        quesTitle: "What is the capit?",
        opt1: "Osaka",
        opt2: "Tokyo",
        opt3: "Kyoto",
        opt4: "Yokohama",
        correctOPT: "Tokyo"
      },
    )

    console.log(this.questions);

    localStorage.setItem('Questions', JSON.stringify(this.questions));

  }

  FirstQuestionID: number = 1;
  showFirstQusetion() {
    const storedQuestions = JSON.parse(localStorage.getItem('Questions') || '[]');
    let nextQuestion = storedQuestions.find((question: { id: number; }) => question.id == this.FirstQuestionID);

    if (nextQuestion) {
      this.id = nextQuestion.id;
      this.quesTitle = nextQuestion.quesTitle;
      this.opt1 = nextQuestion.opt1;
      this.opt2 = nextQuestion.opt2;
      this.opt3 = nextQuestion.opt3;
      this.opt4 = nextQuestion.opt4;
    }

  }

  currentQuestionID: number = 2;
  i: number = 0;
  j: number = 1;

  displayNextQuestion() {

    if (!this.hasSelectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

    const storedQuestions = JSON.parse(localStorage.getItem('Questions') || '[]');
    let nextQuestion = storedQuestions.find((question: { id: number; }) => question.id == this.currentQuestionID);

    if (nextQuestion) {
      this.id = nextQuestion.id;
      this.quesTitle = nextQuestion.quesTitle;
      this.opt1 = nextQuestion.opt1;
      this.opt2 = nextQuestion.opt2;
      this.opt3 = nextQuestion.opt3;
      this.opt4 = nextQuestion.opt4;
    }

    if (this.currentQuestionID < this.questions.length) {
      this.currentQuestionID++;
      // Set hasSelectedOption to false after incrementing currentQuestionID
      this.hasSelectedOption = false;
    }

    if (this.i == 0) {
      this.ansStoreInLocal();
    }

    if (this.j == this.QuestionLength) {
      this.router.navigate(['/result']);
    }

    this.j++;
  }

  selectedAns: any[] = [];
  getLastAns: any;
  BGcolor: any;

  onClickAns(selectedOption: string) {

    const existingAnswer = this.selectedAns.find(ans => ans.SelectedOption === selectedOption);
    this.OPT = selectedOption;
    if (!existingAnswer) {

      const newAnswer = {
        id: this.selectedAns.length + 1,
        SelectedOption: selectedOption,
      };


      this.selectedAns.push(newAnswer);
      // console.log("Selected Answers:", this.selectedAns);

      sessionStorage.setItem('Selected Ans.', JSON.stringify(this.selectedAns));

      this.getLastAns = this.selectedAns.splice(0, 1);

      this.BGcolor = "#A6F29B";
    } else {
      // console.log("Answer already stored.");
    }

    // Set hasSelectedOption to true after selecting an option
    this.hasSelectedOption = true;

   
  }

  FinalAns: any[] = [];

  ansStoreInLocal() {
    const storedQuestions = JSON.parse(sessionStorage.getItem('Selected Ans.') || '[]');
    let nextQuestion = storedQuestions.find((selectedAns: { id: number; }) => selectedAns.id);


    const lastAns = {
      id: this.FinalAns.length + 1,
      SelectedOption: nextQuestion.SelectedOption,
    };

    // console.log("last Answers:se", lastAns);

    this.FinalAns.push(lastAns);
    // console.log("Final Answers:lo", this.selectedAns);

    localStorage.setItem('Selected Answer ', JSON.stringify(this.FinalAns));
  }

}