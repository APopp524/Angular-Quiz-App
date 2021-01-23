import { computeDecimalDigest } from "@angular/compiler/src/i18n/digest";
import { Question } from "src/app/Models/Question";

export const questionsArray: any = [
  {
    id: 1,
    prompt:
      "The Nintendo company was founded in 1889 and originally made what?",
    choices: ["Action Figures", "Wooden Cars", "Playing Cards", "Shoes"],
    answer: "Playing Cards",
  },
  {
    id: 2,
    prompt: "In which year was the game Duck Hunt released?",
    choices: ["1995", "1999", "1984", "1982"],
    answer: "1984",
  },
  {
    id: 3,
    prompt: "What was the sequel to Super Mario World called?",
    choices: [
      "Super Mario World 2: Wario War",
      "Super Mario World 2: Yoshi's Island",
      "Super Mario Sunshine",
      "Super Mario 64",
    ],
    answer: "Super Mario World 2: Yoshi's Island",
  },
];
