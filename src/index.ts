import { BitmapData } from './definition/bitmap-data';
import { Definition } from './definition/definition';
import { LoadedTile } from './definition/loaded-tile';
import { LoadedDefinition } from './definition/loaded.definition';
import { Tile } from './definition/tile';
import { lcgRandom } from './lcg';
import { summerDefinition } from './summer.definition';


var c:HTMLCanvasElement;
var wfc = require('wavefunctioncollapse');

function toImageData(path:string):Promise<ImageData> {
    if (!c) {
        c = document.createElement("canvas");
    }
const promise:Promise<ImageData> = new Promise((resolve, reject)=> {
    var img = new Image
  img.src = path
  img.onload = function(e){    
    const height = img.width;
    const width = img.height;
    c.width = width;
    c.height = height;
    var ctx = c.getContext("2d")
    ctx?.drawImage(img,0,0)
    const data:ImageData = ctx?.getImageData(0,0,width,height)!
    resolve(data);
  }
});
  return promise;
}
function loadTileBitmapData (basePath:string, tile:LoadedTile, number?:number) {
  const unique = number !== undefined;
  const tilePath = basePath + tile.name + (unique ? ' ' + number : '') + '.png';

  return toImageData(tilePath).then(function (result) {
    if (unique) {
      tile.bitmap[number] = new Uint8Array(result.data); //add the bitmap data in each tile variant
    } else {
      tile.bitmap = new Uint8Array(result.data); //add the bitmap data in each tile
    }

    return true;
  });
}
function loadDefinition(definition:Definition, callback:(error?:Error, result?: LoadedDefinition)=> void):void {
    const tiles = definition.tiles.map(t => ({...t}));
    const promises:Promise<any>[] = [];
    const path = definition.path;
    tiles.map(function (tile) {
        const loadedTile:LoadedTile = tile as any;
    if (definition.unique) {
      if (loadedTile.symmetry === 'X') {
        loadedTile.bitmap = new Array(1);
        promises.push(loadTileBitmapData(path, loadedTile, 0));
      } else {
        loadedTile.bitmap = new Array(4);
        promises.push(loadTileBitmapData(path, loadedTile, 0));
        promises.push(loadTileBitmapData(path, loadedTile, 1));
        promises.push(loadTileBitmapData(path, loadedTile, 2));
        promises.push(loadTileBitmapData(path, loadedTile, 3));
      }
    } else {
      promises.push(loadTileBitmapData(path, loadedTile));
    }
  });
  Promise.all(promises).then(function () {
      const loadedDefinition:LoadedDefinition = {...definition, tiles} as any
    callback(undefined, loadedDefinition);
  }, function (error) {
    callback(error,);
  });
}

var start = function(id: ImageData){
  let output = document.getElementById("output") as HTMLCanvasElement;
  let ctx = output.getContext("2d")
  let imgData = ctx?.createImageData(30, 20)
  // input, width, height, N, outputWidth, outputHeight, periodicInput, periodicOutput, symmetry, ground
  let model = new wfc.OverlappingModel(id.data, id.width, id.height, 2, 30, 20, true, false, 1, 0)
  //seed, limit
  var success = model.generate(Math.random, 0)
  model.graphics(imgData?.data)
  ctx?.putImageData(imgData!, 0, 0)
  console.log(success)
}



/*
toImageData( 'test.png').then( (id:ImageData) => {
    start(id)
});
*/
loadDefinition(summerDefinition, (err?:any, definition?:LoadedDefinition) => {
    if (err) {
    throw err;
  }

  const destWidth = 12;
  const destHeight = 12;
  const canvasWidth = destWidth*definition!.tilesize;
  const canvasHeight = destHeight*definition!.tilesize
  
  //try catch to prevent the eventual errors from being silenced by the promise...
    let output = document.getElementById("output") as HTMLCanvasElement;
  let ctx = output.getContext("2d")!
  ctx.canvas.width =canvasWidth;
  ctx.canvas.height = canvasHeight;
  let imgData = ctx.createImageData(canvasWidth, canvasHeight)!
  try {
    const model = new wfc.SimpleTiledModel(definition, null, destWidth, destHeight, false);
    const finished = model.generate(lcgRandom('test'));

    if (finished) {
      console.log('Success');
      const result = model.graphics(imgData.data);
      ctx.putImageData(imgData, 0, 0)
    } else {
      console.log('The generation ended in a contradiction');
    }
  } catch(e:any) {
    console.log('An error occurred');
    console.log(e.stack);
  }
});