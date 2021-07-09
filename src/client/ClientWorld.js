/* eslint-disable no-eval */
class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
  }

  init() {
    console.log('MAP INIT', 'MAP INIT', 'MAP INIT');
    this.engine.renderSpriteFrame({
      sprite: ['terrain', 'grass'],
      frame: 0,
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    });
  }
}
export default ClientWorld;
