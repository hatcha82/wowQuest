var express = require('express');
var router = express.Router();
const fs = require('fs');  
const folder = `${__dirname}/../public/static/와우오리퀘스트/`;


function readFolder(folder, area){
  
  var list = [];
  fs.readdirSync(folder).forEach(file => {
    var path = `${folder}${file}`
    var obj = { name : file , path : path , relPath : path.replace(__dirname,''), area : area}
    console.log(path)
    if(isDir(path)){
      obj.type = "dir"      
    }else{
      obj.type = "file"
    }   
    list.push(obj);
  });
  return list;
}
function readClassQuestFolder(folder, area){
  
  var list = [];
  fs.readdirSync(folder).forEach(file => {
    var path = `${folder}/${file}`
    var obj = { name : file , path : path , relPath : path.replace(__dirname,''), area : area}   
    if(isDir(path)){
      obj.type = "dir"      
    }else{
      obj.type = "file"
    }   
    list.push(obj);
  });
  return list;
}

router.get('/classQuestlist', function (req, res) {
  var allList = []
  var questFolder = `${folder}와우섬게 직업퀘`
  var list = readClassQuestFolder(questFolder)
  list.forEach(dir => {
    var area = dir
    console.log(`${folder}${dir.name}`)
    if(dir.type == 'dir'){            
        area.children =  readClassQuestFolder(`${questFolder}/${dir.name}`,dir.name).filter(quest => quest.type == 'file')             
    }
  });
  res.json(list);
});
router.get('/list', function (req, res) {
  
  var allList = []
  var list = readFolder(folder)
  list.forEach(dir => {
    var area = dir
    if(dir.type == 'dir'){
      if(dir.name != '와우섬게 직업퀘'){
        area.children =  readFolder(`${folder}/${dir.name}`,dir.name)
        allList.push(area);
      }
    }
  })
  res.json(allList);
});
router.get('/list/:area', function (req, res) {
  var list = readFolder(`${folder}${req.params.area}`)
  res.json(list);
});
function isDir(path) {
  try {
      var stat = fs.lstatSync(path);     
      return stat.isDirectory();
  } catch (e) {
      // lstatSync throws an error if path doesn't exist
     
      
      return false;
  }
}

// router.get('/', function (req, res, next) {
//   res.send(movies)
// });

// router.get('/:id', function (req, res, next) {
//   var id = parseInt(req.params.id, 10)
//   var movie = movies.filter(function (movie) {
//     return movie.id === id
//   });
//   res.send(movie)
// });

module.exports = router;
