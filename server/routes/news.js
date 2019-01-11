var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  news = [
    {
      'digest': 1,
      'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
      'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
      'source': 'cnn',
      'title': 'testing',
    },
    {
      'digest': 2,
      'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
      'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
      'source': 'cnn',
      'title': 'testing2',

    },
    {
      'digest': 3,
      'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
      'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
      'source': 'cnn',
      'title': 'testing3',
    }
  ];
  res.json(news);
});

module.exports = router;
