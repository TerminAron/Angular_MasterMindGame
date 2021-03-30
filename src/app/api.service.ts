import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameDto, GameOptionsDto, HighScoreDto } from './models/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static readonly baseUrl: string = "http://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<void>(`${ApiService.baseUrl}user/login`, { username, password }, { withCredentials: true });
  }

  register(username: string, password: string) {
    return this.http.post<void>(`${ApiService.baseUrl}user/register`, { username, password }, { withCredentials: true });
  }

  getGames() {
    return this.http.get<GameDto[]>(`${ApiService.baseUrl}games`, { withCredentials: true });
  }

  postGame(options: GameOptionsDto) {
    return this.http.post<GameDto>(`${ApiService.baseUrl}games`, options, { withCredentials: true });
  }

  getGame(gameId: string) {
    return this.http.get<GameDto>(`${ApiService.baseUrl}games/${gameId}`, { withCredentials: true });
  }

  postGuess(gameId: string, numbers: number[]) {
    return this.http.post<GameDto>(`${ApiService.baseUrl}games/${gameId}/guess`, numbers, { withCredentials: true });
  }

  getHighScores(entries?: number) {
    return this.http.get<HighScoreDto[]>(`${ApiService.baseUrl}highscores${entries != 0 ? `?entries=${entries}` : ''}`, { withCredentials: true })
  }
}
