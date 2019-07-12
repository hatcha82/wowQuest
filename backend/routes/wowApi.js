var express = require('express');
var router = express.Router();
const request = require('request');
/* GET users listing. */
router.get('/', async function(req, res, next) {
   var url = 'http://auction-api-kr.worldofwarcraft.com/auction-data/a4f37c17cb7e855ce9f197fd40c69d07/auctions.json';
  request( encodeURI(url),{ json: true }, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    res.json(body)
  });

  
  
  
  // var result  = await request(url,  { json: true });
});

module.exports = router;
