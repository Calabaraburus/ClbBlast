import { _decorator, Component, Node, Vec2, SpriteFrame, CCInteger, CCBoolean, CCString } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Represents field model
 */
@ccclass('TileModel')
export class TileModel {

    @property({ type: CCInteger, visible: true })
    Id: number = 0;

    @property({ type: CCString, visible: true })
    Name: string = "";

    @property({ type: SpriteFrame, visible: true })
    Sprite: SpriteFrame = null;

    @property({ type: CCBoolean, visible: true })
    SpecialTile: number = 0;

}
