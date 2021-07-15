import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
    // console.log('this.enginethis.enginethis.enginethis.engineKJLKJLJ',  cfg);
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    console.log(
      levelCfg,
      '  this, this.engine, levelCfgthis, this.engine, levelCfgthis, this.engine, levelCfgJJJJJJJJJJJJJJJJ',
    );
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      //  console.log('this.enginethis.engine this.enginethis.engine', this.engine);
      this.map.init();
      this.engine.on('render', (_, time) => {
        // console.log('rebser', time);
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        console.log(keydown, 'keydownkeydownkeydown');
        if (keydown) {
          this.player.moveByCellCoord(-1, 0, (cell) => {
            console.log(cell.findObjectsByType('grass'));
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('cfgwidthwidthwidth', cfg);
      console.log('Game INIT', document.getElementById(cfg.tagId));
    }
  }
}

export default ClientGame;
