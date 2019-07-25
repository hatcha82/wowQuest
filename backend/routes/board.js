var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio')

router.get('/powerbbs.php', async function(req, res, next) {
  console.log(req.url)
  var url = `http://m.inven.co.kr/board/${req.url}`;
  console.log(url)
  request( encodeURI(url),{ json: false }, function (error, response, body) {
      const $ = cheerio.load(body)
      var style=`
      <style>
      figure{margin:0 auto;padding:0}
      #boardList{padding:0}
      ul li{display: block;list-style:none;padding:5px 0}
      ul li img{display:none}
      a.subject{display:block}
      a.cmtWrapForList.icon_mt{display:none}
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
      <img src="http://upload.inven.co.kr/upload/2014/07/31/icon/i1961742099.jpg"/>
      추천수:${recCount}
      <div>
      ${subject}
      </div>
      <div>
      ${contents} 
      </div>
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
module.exports = router;