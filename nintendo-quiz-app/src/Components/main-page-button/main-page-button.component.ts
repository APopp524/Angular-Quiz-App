import { Component, OnInit } from "@angular/core";

@Component({
  selector: "main-page-button",
  templateUrl: "./main-page-button.component.html",
  styleUrls: ["./main-page-button.component.css"],
})
export class MainPageButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isButtonVisible = true;
}