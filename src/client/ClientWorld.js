class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
    console.log(this, 'game,engine,levelCfg,height,width', 'vhgh game,engine,levelCfg,height,width');
  }

  init() {
    console.log('MAP INIT', 'MAP INIT', 'MAP INIT', this.width, this.height);
    const { map } = this.levelCfg;
    const height = 600 / this.height;
    const width = 600 / this.width;
    map.forEach((cfgRow, y) => {
      cfgRow.forEach((cfgCell, x) => {
        this.engine.renderSpriteFrame({
          sprite: ['terrain', cfgCell[0][0]],
          frame: 0,
          x: x * width,
          y: y * height,
          w: width,
          h: height,
        });
      });
    });
  }
}
export default ClientWorld;
