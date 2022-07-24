import { _decorator, Component, Node, Vec2, CCInteger } from 'cc';
import { TileModel } from '../tile/TileModel';
const { ccclass, property } = _decorator;

/**
 * Represents game field model
 */
@ccclass('FieldModel')
export class FieldModel {

    /**
     * Tiles cols count
     */
    @property({ type: CCInteger })
    Cols: number;

    /**
     * Tiles rows count
     */
    @property({ type: CCInteger })
    Rows: number;

    /**
     * Tile model collection
     */
    @property({ type: [TileModel], visible: true, tooltip: "Tile models" })
    tiles: TileModel[] = [];

    /**
     * Get standart tile models
     * @returns collection of std tile models
     */
    public getStandartTiles(): TileModel[] { 
        return this.tiles.filter(item=>!item.SpecialTile)
    }
}

