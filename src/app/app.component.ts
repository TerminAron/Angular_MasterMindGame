import { Component } from '@angular/core';
import { Guess } from './models/guess';
import { PegColor } from './models/peg-color';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  guesses: Guess[];
  currentGuess: PegColor[];
  possibleValues: PegColor[] = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];

  constructor() {
    this.initGame();
  }

  initGame() {
    this.guesses = [];
    this.currentGuess = [];
    for(let i = 0; i <= 5; i++){
      let x = `ZZPMTX`.charCodeAt(i);
      let m = x % 6;
      this.currentGuess.push(this.possibleValues[m]);
    }
    //for (let _ of Array(4).keys())
      //this.currentGuess.push('unset');
    for (let _ of Array(10).keys())
      this.guesses.push(new Guess(['unset', 'unset','unset','unset'], ['unset', 'unset','unset','unset']));
    console.log(this.guesses);
  }
}
