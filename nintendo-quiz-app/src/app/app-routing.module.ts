import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizCardComponent } from "./quiz-card/quiz-card.component";

const routes: Routes = [
  { path: "app-quiz-card", component: QuizCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
