import ClientGame from './client/ClientGame';
import './index.scss';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'gameField' });
});

// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';

// const canvas = document.getElementById('gameField');
// const ctx = canvas.getContext('2d');
// const spriteW = 48;
// const spriteH = 48;

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;

// terrain.addEventListener('load', () => {
//   console.log(worldCfg);
//   const { map } = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       console.log(cfgCell[0]);
//       console.log(sprites.terrain[cfgCell[0]].frames[0]);
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       console.log(sX, sY, sW, sH);
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   });
// });
//   const { map } = worldCfg;
// map.forEach((cfgRow, y) => {
//   cfgRow.forEach((cfgCell, x) => {
//     console.log(cfgCell.length);
//     console.log(sprites.terrain[cfgCell[0]].frames[0]);
//     const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//     console.log(sX, sY, sW, sH);
//     // ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//   });
// });
