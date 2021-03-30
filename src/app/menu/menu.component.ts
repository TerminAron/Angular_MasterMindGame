import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GameDto } from '../models/api';

@Component({
  selector: 'mm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private api: ApiService) { }

  games: GameDto[];

  ngOnInit(): void {
    this.api.getGames().subscribe(games => {
      console.log(games);
      this.games = games;
    });
  }

}
