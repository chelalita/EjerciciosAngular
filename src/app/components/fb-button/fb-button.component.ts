import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-button',
  templateUrl: './fb-button.component.html',
  styleUrls: ['./fb-button.component.css'],
  host: {
    '(click)': 'onClick()'
  }
})

export class FbButtonComponent {
  public countClicks = 100;

  onClick(){
    if (this.countClicks == 101) {
      this.countClicks--;
    } else {
      this.countClicks++;
    }
  }
}


