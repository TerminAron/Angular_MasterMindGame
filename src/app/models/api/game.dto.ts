import { GuessDto, GameOptionsDto, PlayState } from '.';

export interface GameDto {
  elapsedSecons: number;
  gameCreated: string;
  givenGuesses: GuessDto[];
  id: string;
  userId: string;
  options: GameOptionsDto;
  playState: PlayState;
}
