var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio')
/* GET users listing. */

http://m.inven.co.kr/board/powerbbs.php?come_idx=5417&stype=nickname&svalue=%EB%82%98%EC%9D%B4%EC%96%B4%EC%8A%A4&eq=1&l=4364

router.get('/', async function(req, res, next) {
   var url = 'http://auction-api-kr.worldofwarcraft.com/auction-data/a4f37c17cb7e855ce9f197fd40c69d07/auctions.json';
  // request( encodeURI(url),{ json: true }, function (error, response, body) {
  //   //console.log('error:', error); // Print the error if one occurred
  //   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   //console.log('body:', body); // Print the HTML for the Google homepage.
  //   res.json(body)
  // });
  res.send('ok')
  // var result  = await request(url,  { json: true });
});


router.get('/inven', async function(req, res, next) {
  var url = `http://m.inven.co.kr/board/powerbbs.php?come_idx=5417&l=${req.query.id}`;
 request( encodeURI(url),{ json: false }, function (error, response, body) {
    const $ = cheerio.load(body)
    var style=`
    <style>
    figure{width:100%;margin:0;padding:0}
    </style>
    `
    $('#articleSubject img').remove()
    var subject = $('#articleSubject').html();
    var contents = $('#imageCollectDiv').html()
    var link = `원본 출처 : <a href="${url}">${url}</a>`
    var recCount = $("#recomresult").text();
    var comments = $("#articleList").html();
    var html = `
    ${style}
    추천수:${recCount}
    ${subject}
    ${contents} 
    <br>
    <br>
    ${link}   
    <br>
    <br>
    ${comments}
    `
    res.send(html)
 });
 

});

router.get('/quests', async function(req, res, next) {
  var url = 'https://ko.classic.wowhead.com/quest=826?xml';

  request( encodeURI(url),{ json: true }, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body)
  });
});

router.post('/url', async function(req, res, next) {
  var requredURL = req.body.url;
  var url = `${requredURL}&locale=ko_KR&access_token=USrOnq5XdqbClPI2ehzoVpn9EyA0i7O5Pz`;
  
  request( encodeURI(url),{ json: true }, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(body)
  });  
});
module.exports = router;
