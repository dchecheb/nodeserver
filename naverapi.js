const request = require('request');
const {MovieInfo} = require('./models');
const option = {
    query  :'%a', 
    display: 100,
    country: 'KR' 
};

request.get({
    uri: 'https://openapi.naver.com/v1/search/movie', 
    qs : option,
    headers: {
        'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
    }
}, function(err, res, body) {
    let json = JSON.parse(body) // json 파싱
    let items = json['items'];
    for (let i=0; i<items.length; i++) {
        let jtitle = items[i]['title']
        MovieInfo.create({
            title : jtitle,
            image : items[i]['image'],
            subtitle : items[i]['subtitle'],
            pubdate : items[i]['pubDate'],
            director : items[i]['director'],
            actor : items[i]['actor'],
            user_rating : items[i]['userRating'],
            rated_num : 1,
        });
    };
})
