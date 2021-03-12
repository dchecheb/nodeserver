const request = require('request')
const option = {
    query  :'%a', 
    display: 200,
    country: "KR" 
}

request.get({
    uri: 'https://openapi.naver.com/v1/search/movie', 
    qs : option,
    headers: {
        'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
    }
}, function(err, res, body) {
    let json = JSON.parse(body) //json으로 파싱
    console.log(json)
})