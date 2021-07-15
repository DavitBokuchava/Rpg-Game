import PositionedObject from '../common/PositionedObject';
import ClientCell from './ClientCell';

class ClientWorld extends PositionedObject {
  constructor(game, engine, levelCfg) {
    super();

    const worldHeight = levelCfg.map.length;
    const worldWidth = levelCfg.map[0].length;
    const cellSize = engine.canvas.height / levelCfg.camera.height;
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: worldHeight * cellSize,
      width: worldWidth * cellSize,
      worldHeight,
      worldWidth,
      cellWidth: cellSize,
      cellHeight: cellSize,
      map: [],
    });
  }

  init() {
    const { levelCfg, map, worldWidth, worldHeight } = this;
    for (let row = 0; row < worldHeight; row++) {
      for (let col = 0; col < worldWidth; col++) {
        if (!map[row]) {
          map[row] = [];
        }
        map[row][col] = new ClientCell({
          world: this,
          cellCol: col,
          cellRow: row,
          cellCfg: levelCfg.map[row][col],
        });
      }
    }
  }

  render(time) {
    const { map, worldWidth, worldHeight } = this;
    for (let row = 0; row < worldHeight; row++) {
      for (let col = 0; col < worldWidth; col++) {
        map[row][col].render(time);
      }
    }
  }

  cellAt(col, row) {
    return this.map[row] && this.map[row][col];
  }
}
export default ClientWorld;

// // aconsole.log(this.engine.canvas.height, 'game,engine,levelCfg,height,width', 'vhgh game,engine,levelCfg,height,width');
// console.log('MAP INIT', 'MAP INIT', 'MAP INIT', this.width, this.height);
// const { map } = this.levelCfg;
// const height = this.engine.canvas.height / this.height;
// const width = this.engine.canvas.width / this.width;
// map.forEach((cfgRow, y) => {
//   cfgRow.forEach((cfgCell, x) => {
//     this.engine.renderSpriteFrame({
//       sprite: ['terrain', cfgCell[0][0]],
//       frame: 0,
//       x: x * width,
//       y: y * height,
//       w: width,
//       h: height,
//     });
//   });
// });
