import { Component, OnInit } from "@angular/core";
import { questionsArray } from "src/app/Seed/seed";

@Component({
  selector: "app-quiz-card",
  templateUrl: "./quiz-card.component.html",
  styleUrls: ["./quiz-card.component.css"],
})
export class QuizCardComponent implements OnInit {
  questions = questionsArray;
  index: number;
  questionId = questionsArray[0];
  questionPrompt = "";
  startingPrompt = [0];
  questionChoices = "";

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
    this.displayQuestion();
  }

  private displayQuestion() {
    this.questionId = questions[this.index].id;
    this.questionPrompt = questions[this.index].prompt;
    this.questionChoices = questions[this.index].choices.toString();
    console.log(this.questionChoices);
  }

  public next() {
    if (this.questionId < questions.length) {
      this.index++;
      this.displayQuestion();
    } else {
      this.endQuiz();
    }
  }

  public previous() {
    this.index--;
    this.displayQuestion();

    console.log(this.index);
  }

  // public disableBtn() {
  //   document.getElementById("previous-btn").disabled = false;
  // }

  public endQuiz() {
    console.log("end of quiz");
  }
}

const questions = questionsArray;

// let startingQuestion = questions.find(
//   (questionsArray) => questionsArray.id === 1
// );

// for (let index = 0; index < questionsArray.length; index++) {
//   const questionsList = questionsArray[index];
//   console.log(questionsList);
// }
