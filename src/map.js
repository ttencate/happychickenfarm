(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map",
{ "height":32,
 "layers":[
        {
         "draworder":"topdown",
         "name":"grass",
         "objects":[
                {
                 "gid":101,
                 "height":1024,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":0,
                 "y":1024
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":2,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":1024,
                 "y":1024
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":3,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":1024,
                 "y":2048
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":4,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":0,
                 "y":2048
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":5,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":0,
                 "y":3072
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":6,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":1024,
                 "y":3072
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":2048,
                 "y":3072
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":8,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":2048,
                 "y":2048
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":9,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":2048,
                 "y":1024
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":10,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":2048,
                 "y":0
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":11,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":-1024,
                 "y":1024
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":12,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":-1024,
                 "y":0
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":13,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":0,
                 "y":0
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":14,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":1024,
                 "y":0
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":15,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":-1024,
                 "y":2048
                }, 
                {
                 "gid":101,
                 "height":1024,
                 "id":16,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":1024,
                 "x":-1024,
                 "y":3072
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24],
         "height":32,
         "name":"walls",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextobjectid":17,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.0.3",
 "tileheight":64,
 "tilesets":[
        {
         "columns":10,
         "firstgid":1,
         "image":"..\/assets\/images\/tileset.png",
         "imageheight":640,
         "imagewidth":640,
         "margin":0,
         "name":"tileset",
         "spacing":0,
         "tilecount":100,
         "tileheight":64,
         "tilewidth":64
        }, 
        {
         "columns":0,
         "firstgid":101,
         "grid":
            {
             "height":1,
             "orientation":"orthogonal",
             "width":1
            },
         "margin":0,
         "name":"images",
         "spacing":0,
         "tilecount":1,
         "tileheight":1024,
         "tiles":
            {
             "0":
                {
                 "image":"..\/assets\/images\/grass.png",
                 "imageheight":1024,
                 "imagewidth":1024
                }
            },
         "tilewidth":1024
        }],
 "tilewidth":64,
 "type":"map",
 "version":1,
 "width":32
});