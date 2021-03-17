import { PegColor } from './peg-color';

export class Guess {
    constructor(
        public colors: PegColor[], // A tippelt színeket jelző tömb, benne pontosan 4 elemmel.
        public keys: PegColor[]) { // A tippek helyességét jelző tömb, benne pontosan 4 elemmel.
    }
}
