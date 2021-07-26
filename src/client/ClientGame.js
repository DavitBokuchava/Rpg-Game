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
    return new ClientEngine(document.getElementById(this.cfg.tagId),this);
  }

  createWorld() {
    console.log(
      levelCfg,
      '  this, this.engine, levelCfgthis, this.engine, levelCfgthis, this.engine, levelCfgJJJJJJJJJJJJJJJJ',
    );
    return new ClientWorld(this, this.engine, levelCfg);
  }

  getWorld() {
    console.log(this.map,"this.mapthis.mapthis.map")
    return this.map;
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      //  console.log('this.enginethis.engine this.enginethis.engine', this.engine);
      this.map.init();
      this.engine.on('render', (_, time) => {
        // console.log('rebser', time);
        this.engine.camera.focusAtGameObject(this.player);
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
      // this.movePlayerToDir(dir)
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft:(keydown)=>keydown && this.movePlayerToDir('left'),
      ArrowRight:(keydown)=>keydown && this.movePlayerToDir('right'),
      ArrowUp:(keydown)=>keydown && this.movePlayerToDir('up'),
      ArrowDown:(keydown)=>keydown && this.movePlayerToDir('down')

    })
  }
  movePlayerToDir(dir){
    const dirs = {
      left:[-1,0],
      right:[1,0],
      up:[0,-1],
      down:[0,1]
    }
     const {player} = this;
    if (player && player.motionProgress === 1) {
      const canMovie = player.moveByCellCoord(dirs[dir][0],dirs[dir][1], (cell) => {
        console.log(cell.findObjectsByType('grass'));
        return cell.findObjectsByType('grass').length;
      });
      if(canMovies){
        player.setState(dir);
        player.once('motion-stopped',()=>player.setState('main'));
      }
    }

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


    //   ArrowLeft: (keydown) => {
    //     console.log(keydown, 'keydownkeydownkeydown');
    //     if (keydown) {
    //       this.player.moveByCellCoord(-1, 0, (cell) => {
    //         console.log(cell.findObjectsByType('grass'));
    //         return cell.findObjectsByType('grass').length;
    //       });
    //     }
    //   },
    //   ArrowRight: (keydown) => {
    //     console.log(keydown, 'keydownkeydownkeydown');
    //     if (keydown) {
    //       this.player.moveByCellCoord(+1, 0, (cell) => {
    //         console.log(cell.findObjectsByType('grass'));
    //         return cell.findObjectsByType('grass').length;
    //       });
    //     }
    //   },
    //   ArrowUp: (keydown) => {
    //     console.log(keydown, 'keydownkeydownkeydown');
    //     if (keydown) {
    //       this.player.moveByCellCoord(0, -1, (cell) => {
    //         console.log(cell.findObjectsByType('grass'));
    //         return cell.findObjectsByType('grass').length;
    //       });
    //     }
    //   },
    //   ArrowDown: (keydown) => {
    //     console.log(keydown, 'keydownkeydownkeydown');
    //     if (keydown) {
    //       this.player.moveByCellCoord(0, +1, (cell) => {
    //         console.log(cell.findObjectsByType('grass'));
    //         return cell.findObjectsByType('grass').length;
    //       });
    //     }
    //   },
    // });