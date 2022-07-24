import { _decorator, Component, Node, Sprite, SpriteFrame, random, randomRangeInt, logID, log, EventTarget, Color, Vec2 } from 'cc';
import { TileModel } from './TileModel';
const { ccclass, property } = _decorator;

@ccclass('TileController')
export class TileController extends Component {

    public clickedEvent: EventTarget = new EventTarget();

    /**Tile model */
    @property(TileModel)
    tileModel: TileModel;

    private _isDestroied = false;
    get isDestroied(): boolean {
        return this._isDestroied;
    }

    get tileTypeId(): number {
        return this.tileModel.Id;
    }

    private _col: number = 0;
    get col(): number {
        return this._col;
    }
    set col(value: number) {
        this._col = value;
    }

    private _row: number = 0;
    get row(): number {
        return this._row;
    }
    set row(value: number) {
        this._row = value;
    }

    private _curSprite: Sprite;

    start() {
        this._curSprite = this.getComponent(Sprite);
        this.updateSprite();
    }

    public setTile(tileModel: TileModel) {
        if (tileModel == null) {
            log("[tile] tile model can't be null");
            return;
        }

        this.tileModel = tileModel;
    }

    updateSprite() {
        if (this._curSprite != null) {
            this._curSprite.spriteFrame = this.tileModel.Sprite;
        }
    }

    public clicked() {
        this.clickedEvent.emit("TileController", this);
    }

    public destroyTile() {
        this._curSprite.spriteFrame = null;
        this._isDestroied = true;
    }

    update(deltaTime: number) {

    }

    move(from: Vec2, to: Vec2) {

    }
}

