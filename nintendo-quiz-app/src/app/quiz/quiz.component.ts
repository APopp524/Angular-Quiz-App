import { Component, OnInit } from "@angular/core";
import { QuizApiService } from "../quiz-api.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  questions = [];
  answer = false;
  num = 0;
  scores = 0;
  seconds: number;
  timer;
  quizProgress: number;
  width: number = 10;

  constructor(private quizapi: QuizApiService) {}

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.questions = [];
    this.seconds = 0;
    this.quizProgress = 0;
    this.quizapi.getQuestion().subscribe(async (res) => {
      let quiz = res["results"];
      quiz.forEach((element) => {
        element.incorrect_answers.push(element.correct_answer);
        element.incorrect_answers.sort(() => 0.5 - Math.random());
      });
      this.questions = await quiz;
      this.num = 0;
      this.scores = 0;
      this.width = 0;
    });
  }

  checkAnswer(correct_answer: any, userAnswer: any) {
    this.answer = correct_answer == userAnswer ? true : false;
    this.answer ? (this.scores += 10) : (this.scores -= 5);
    this.num < this.questions.length ? (this.num += 1) : null;
    this.width += 10;
  }
}
