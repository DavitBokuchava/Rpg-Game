import PositionedObject from '../common/PositionedObject';
import ClientGameObject from './ClientGameObject';

class ClientCell extends PositionedObject {
  constructor(cfg) {
    super();
    const { cellWidth, cellHeight } = cfg.world;
    Object.assign(
      this,
      {
        cfg,
        objects: [],
        x: cellWidth * cfg.cellCol,
        y: cellHeight * cfg.cellRow, // there was cellWidth
        width: cellWidth,
        height: cellHeight,
      },
      cfg,
    );

    this.initGameObjects();
  }

  initGameObjects() {
    const { cellCfg } = this;
    
    // this.objects = cellCfg[0].map((objCfg) => new ClientGameObject({ cell: this, objCfg }));
    this.objects = cellCfg.map((layer,layerId)=> layer.map((objCfg) => new ClientGameObject({ cell: this, objCfg,layerId })) )
  }

  render(time, layerId) {
    const { objects } = this;
    if(objects[layerId]){
      objects.forEach((obj) => obj.render(time));
    }
    
  }

  addGameObject(objToAdd) {
    const {objects} = this;
    if(!objects[objToAdd.layerId] === undefined){
      objectToAdd.layerId = objects.length
    }
    if(!objects[objToAdd.layerId]){
      objects[objToAdd.layerId] = []
    }
    objects[objToAdd.layerId].push(objToAdd);
  }

  removeGameObject(objToRemove) {
    // this.objects = this.objects.filter((obj) => obj !== objToRemove);
    this.objects.forEach((layer,layerId)=>this.objects[layerId] = layer.filter((obj) => obj !== objToRemove))
  }

  findObjectsByType(type) {
    let foundObjects = [];
    this.objects.forEach((layer)=> foundObjects = [...foundObjects, ...layer].filter((obj) => obj.type === type))
    return foundObjects;
  }
}

export default ClientCell;
