import { Component, Input, OnInit } from '@angular/core';
import { PegColor } from '../models/peg-color';
import { PegType } from '../models/peg-type';

@Component({
  selector: 'mm-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.scss']
})
export class PegComponent implements OnInit {

  @Input() // Az Input dekorátort importálnunk kell a jelenlegi scope-ba. Ehhez használhatjuk a VS Code segítségét (Ctrl+. a kurzort a hibára helyezve) vagy fentre beírhatjuk: import { Input } from '@angular/core';
  color: PegColor; // Hasonlóképp a PegColor-ra is, csak itt a lokális '../models/peg-color'-ból importálunk.

  @Input()
  type: PegType;



  get colorLower() {
    return this.color ?? "unset";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
