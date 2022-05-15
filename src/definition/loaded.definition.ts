import { Definition } from './definition';
import { LoadedTile } from './loaded-tile';

export interface LoadedDefinition extends Definition {
    tiles: LoadedTile[];
}