import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersEven = [];
  numbersOdd = [];
  onOddAdded(data: {num: number})
  {
    this.numbersOdd.push({num: data.num})
  }
  onEvenAdded(data: {num: number})
  {
    this.numbersEven.push({num: data.num})
  }
}
