import { Component, OnInit } from "@angular/core";

@Component({
  selector: "start-button",
  templateUrl: "./start-button.component.html",
  styleUrls: ["./start-button.component.css"],
})
export class StartButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public loadComponent = false;
  loadMyChildComponent() {
    this.loadComponent = true;
  }

  public isButtonVisible = true;
}
