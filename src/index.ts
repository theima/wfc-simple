const imageSrc = require('./test.png')
var wfc = require('wavefunctioncollapse');

var img_url_to_data = function(path:string, callback:any){
  var img = new Image
  img.src = path
  img.onload = function(e){
    console.log(e);
    console.log(this);
    
    const height = img.width;
    const width = img.height;
    var c = document.createElement("canvas")
    c.width = width;
    c.height = height;
    var ctx = c.getContext("2d")
    ctx?.drawImage(img,0,0)
    callback(ctx?.getImageData(0,0,width,height))
  }
}
var start = function(id: ImageData){
  let output = document.getElementById("output") as HTMLCanvasElement;
  let ctx = output.getContext("2d")
  let imgData = ctx?.createImageData(48, 48)
  // input, width, height, N, outputWidth, outputHeight, periodicInput, periodicOutput, symmetry, ground
  let model = new wfc.OverlappingModel(id.data, id.width, id.height, 2, 48, 48, true, false, 1, 0)
  //seed, limit
  var success = model.generate(Math.random, 0)
  model.graphics(imgData?.data)
  ctx?.putImageData(imgData!, 0, 0)
  console.log(success)
}
img_url_to_data('test.png',start);