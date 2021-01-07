import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar">
          <img src="/assets/images/nintendo.png" width="200" height="70" class="animate__animated animate__jackInTheBox animate__duration-5s">
      <h1 class="animate__animated animate__fadeIn animate__slower">Quiz Time</h1>
          </div>
    </nav>
  `,
  styles: []
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}