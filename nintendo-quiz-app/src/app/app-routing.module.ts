import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizCardComponent } from "../Components/quiz-card/quiz-card.component";
import { MainPageComponent } from "src/Pages/main-page/main-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "app-quiz-card", component: QuizCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
