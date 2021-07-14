import ClientEngine from './ClientEngine';
import sprites from '../configs/sprites';

import ClientWorld from './ClientWorld';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
    });
    console.log('this.enginethis.enginethis.enginethis.engine', this.engine);
    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    console.log(this.levelCfg, '  this, this.engine, levelCfgthis, this.engine, levelCfgthis, this.engine, levelCfg');
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      // console.log('this.enginethis.engine this.enginethis.engine', this.engine);
      this.map.init();
      this.engine.on('render', (_, time) => {
        console.log('rebser', time);
        this.map.render();
      });
      this.engine.start();
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('Game INIT', document.getElementById(cfg.tagId));
    }
  }
}

export default ClientGame;
