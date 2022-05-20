import { Tile } from './tile'

export interface Definition {
    path: string,
    tilesize: number,
    unique: boolean,
    tiles: Tile[],
    neighbors: {left:string, right:string}[]
}