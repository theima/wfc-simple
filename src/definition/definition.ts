import { Tile } from './tile'

export interface Definition {
    path: string,
    tilesize: 48,
    unique: boolean,
    tiles: Tile[],
    neighbors: {left:string, right:string}[]
}