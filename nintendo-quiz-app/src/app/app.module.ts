import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuizCardComponent } from "../Components/quiz-card/quiz-card.component";
import { AppHeaderComponent } from "../Components/app-header/app-header.component";
import { StartButtonComponent } from "../Components/start-button/start-button.component";
import { QuestionComponent } from "../Components/question/question.component";
import { MainPageComponent } from "../Pages/main-page/main-page.component";
import { MainPageButtonComponent } from "../Components/main-page-button/main-page-button.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    QuizCardComponent,
    StartButtonComponent,
    QuestionComponent,
    MainPageComponent,
    MainPageButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
