import { BitmapData } from './bitmap-data';
import { Tile } from './tile';

export interface LoadedTile extends Tile {
    bitmap: BitmapData;
}