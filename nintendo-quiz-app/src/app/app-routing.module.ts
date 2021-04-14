import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { StartButtonComponent } from "./start-button/start-button.component";

const routes: Routes = [
  { path: "", component: StartButtonComponent },
  { path: "questionquiz", component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
