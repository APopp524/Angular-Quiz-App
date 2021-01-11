import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuizCardComponent } from "./quiz-card/quiz-card.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { StartButtonComponent } from "./start-button/start-button.component";
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    QuizCardComponent,
    StartButtonComponent,
    QuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
