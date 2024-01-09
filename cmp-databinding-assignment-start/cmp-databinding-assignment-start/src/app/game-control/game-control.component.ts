import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent{
  @Output() oddEmmiter = new EventEmitter<{num:number}>();
  @Output() evenEmmiter = new EventEmitter<{num:number}>();
  private _num :number = 0;
  myInterval;
  constructor(){
  }
 
  getNum() 
  {
    this.myInterval = setInterval(()=>{
      if(this._num%2 !=0)
        this.onOddNumber();
      else
        this.onEvenNumber();
      this._num++;
    },1000)
  }

  stopInterval() 
  {
    clearInterval(this.myInterval);
  }

  onOddNumber()
  {
    this.oddEmmiter.emit({num: this._num});
  }
  onEvenNumber()
  {
    this.evenEmmiter.emit({num: this._num});
  }
}
