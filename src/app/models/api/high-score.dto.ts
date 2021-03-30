export interface HighScoreDto {
  user: string;
  playTimeInSeconds: number;
  date: string;
  guessesMade: number;
  possibleValues: number;
  maximumPossibleGuesses: number;
  allowDuplicates: boolean;
}
