var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio')

router.get('/powerbbs.php', async function(req, res, next) {
  console.log(req.url)
  var url = `http://m.inven.co.kr/board${req.url}`;
  console.log(url)
  request( encodeURI(url),{ json: false }, function (error, response, body) {
      const $ = cheerio.load(body)
      var style=`
      <style>
      figure{margin:0 auto;padding:0}
      #boardList{padding:0}
      ul li{display: block;list-style:none;padding:5px 0;border-bottom:1px solid #dfdfdf}
      a.subject{display:block;text-decoration: none;}
      div.view span.info{font-size:0.7em;}
      div.list span.info{font-size:0.8em;}
      div.list img{font-size:0.8em;}
      a.cmtWrapForList.icon_mt{display:none}
      </style>
      `
      $('#articleSubject img').remove()
      var subject = $('#articleSubject').html();
      var contents = $('#imageCollectDiv').html()
      var link = `원본 출처 : <a href="${url}">${url}</a>`
      var recCount = $("#recomresult").text();
      var list = $("#articleList").html();
      var html = `
      ${style}      
      추천수:${recCount}
      <div class="view">
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
      <div class="list">
      ${list}
      </div>
      `
          
      var mainList = `
      ${style}  
      <div class="list">
      ${list}
      </div>
      
      `
      res.send(subject == null ? mainList : html)
  });
});
module.exports = router;