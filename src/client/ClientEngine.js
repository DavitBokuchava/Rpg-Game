import EventSourceMixin from '../common/EventSourceMixin';
import ClientCamera from './ClientCamera';
import ClientInput from './ClientInput';

class ClientEngine {
  constructor(canvas) {
    console.log(canvas, ' #### canvas');
    Object.assign(this, {
      canvas,
      ctx: null,
      imageLoaders: [],
      sprites: {},
      images: {},
      camera: new ClientCamera({ canvas, engine: this }),
      input: new ClientInput(canvas),
    });
    this.ctx = canvas.getContext('2d');
    this.loop = this.loop.bind(this);
  }

  start() {
    this.loop();
  }

  loop(timestamp) {
    const { ctx, canvas } = this;
    ctx.fileStyle = 'black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.trigger('render', timestamp);
    this.initNextFrame();
  }

  initNextFrame() {
    window.requestAnimationFrame(this.loop);
  }

  loadSprites(spritesGroup) {
    this.imagesLoader = [];
    for (let groupName in spritesGroup) {
      // console.log(' ###### sprites', groupName);
      const group = spritesGroup[groupName];
      this.sprites[groupName] = group;
      for (let spriteName in group) {
        //  console.log('####### spriteName', spriteName, group[spriteName]);
        const { img } = group[spriteName];
        console.log('imgimgimg', img);
        if (!this.images[img]) {
          this.imagesLoader.push(this.loadImage(img));
        }
      }
      // console.log('###### group of sprites', group);
    }

    return Promise.all(this.imagesLoader);
  }

  loadImage(url) {
    return new Promise((resolve) => {
      const i = new Image();
      this.images[url] = i;
      i.onload = () => resolve(i);
      i.src = url;
    });
  }

  renderSpriteFrame({ sprite, frame, x, y, w, h }) {
    // console.log(sprite, ' spritespritesprite');
    const spriteCfg = this.sprites[sprite[0]][sprite[1]];
    const [fx, dy, dw, fh] = spriteCfg.frames[frame];
    // console.log(fx, dy, dw, fh, ' ##########  x, dy, dw, fh');
    const img = this.images[spriteCfg.img];
    // console.log(this.images, 'this.imagesthis.imagesthis.images');
    this.ctx.drawImage(img, fx, dy, dw, fh, x, y, w, h);
  }
}

Object.assign(ClientEngine.prototype, EventSourceMixin);

export default ClientEngine;
