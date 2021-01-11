import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //   {
  //     id: 1,
  //     question:
  //       "The Nintendo company was founded in 1889 and originally made what?",
  //     choices: ["Action Figures", "Wooden Cars", "Playing Cards", "Shoes"],
  //     correctAnswer: "Playing Cards",
  //     answer: null,
  //   },
  //   {
  //     id: 2,
  //     question: "In which year was the game Duck Hunt released?",
  //     choices: ["1995", "1999", "1984", "1982"],
  //     correctAnswer: "1984",
  //     answer: null,
  //   },
  //   {
  //     id: 3,
  //     question: "What was the sequel to Super Mario World called?",
  //     choices: [
  //       "Super Mario World 2: Wario War",
  //       "Super Mario World 2: Yoshi's Island",
  //       "Super Mario Sunshine",
  //       "Super Mario 64",
  //     ],
  //     correctAnswer: "Super Mario World 2: Yoshi's Island",
  //     answer: null,
  //   },
  // ],
}
