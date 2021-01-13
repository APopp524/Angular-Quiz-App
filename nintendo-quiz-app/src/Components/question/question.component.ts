import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/Models/Question";
import { questionsArray } from "src/app/Seed/seed";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  questions = questionsArray;
  currentQuestion: Question;
  
  constructor() {}
  
  ngOnInit(): void {}
}

onSelect(question: Quesetion): void {
  this.currentQuestion = question;
}

