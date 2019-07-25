var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio')
var html5Tempalte = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>Wow 게시판</title>
    
      <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128960444-3"></script>
      <script type="text/javascript" src="//t1.daumcdn.net/adfit/static/ad.min.js" async></script>
      
      
      


      <script>
        var whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true, hide: { 'droppedby': false, 'dropchance': true }}
window.dataLayer = window.dataLayer || []
function gtag () { dataLayer.push(arguments) }
        gtag('js', new Date())

gtag('config', 'UA-128960444-3')
      </script>
      <script src="https://wow.zamimg.com/widgets/power.js"></script>
  </head>
  <body>
    <div id="app">{{BODY}}</div>
   
  </body>
</html>

`
router.get('/powerbbs.php', async function(req, res, next) {
  console.log(req.url)
  var url = `http://m.inven.co.kr/board${req.url}`;
  console.log(url)
  request( encodeURI(url),{ json: false }, function (error, response, body) {
      const $ = cheerio.load(body)
      // var style=`
      // <style>
      // figure{margin:0 auto;padding:0;width:100%;height:auto}
      // figure iframe{height:auto;width:100%}
      // #boardList{padding:0}
      // ul li{display: block;list-style:none;padding:5px 0;border-bottom:1px solid #dfdfdf}
      // a.subject{display:block;text-decoration: none;}
      // div.view span.info{font-size:0.7em;}
      // div.list span.info{font-size:0.8em;}
      // div.list img{font-size:0.8em;}
      // a.cmtWrapForList.icon_mt{display:none}
      // </style>
      // `
      // $('#articleSubject img').remove()
      // var subject = $('#articleSubject').html();
      // var contents = $('#imageCollectDiv').html()
      // var link = `원본 출처 : <a href="${url}">${url}</a>`
      // var recCount = $("#recomresult").text();
      // var list = $("#articleList").html();
      // var html = `
      // ${style}      
      // 추천수:${recCount}
      // <div class="view">
      // ${subject}
      // </div>
      // <div>
      // ${contents} 
      // </div>
      // <br>
      // <br>
      // ${link}   
      // <br>
      // <br>
      // <div class="list">
      // ${list}
      // </div>
      // `
          
      // var mainList = `
      // ${style}  
      // <div class="list">
      // ${list}
      // </div>
      
      // `
      // html = subject == null ? mainList : html;
      // html=  html5Tempalte.replace(`{{BODY}}`, html)
      $('.mobileDaNs1 ').remove()
      $("#mobileHeadline").remove()
      res.send($.html())
  });
});
module.exports = router;