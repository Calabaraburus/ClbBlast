//  AnalizedData.ts - ClbBlast
//
//  Calabaraburus (c) 2022
//
//  Author:Natalchishin Taras

import { TileModel } from "../../models/TileModel";
import { TileController } from "../tiles/TileController";

export class AnalizedData {
  destroiedTilesCount = 0;
  aliveTilesCount = 0;
  specialTiles = 0;
  justCreatedTiles: TileController[] = [];
  connectedTiles: TileTypeToConnectedTiles[] = [];
  individualTiles: TileController[] = [];
}

export class TileTypeToConnectedTiles {
  tileModel: TileModel;
  connectedTiles: Set<TileController>;
}
