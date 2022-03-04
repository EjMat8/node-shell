const request = require('request');

const curl = (done, url) => {
  request(url, function (error, response, body) {
    if(error) {
      done('Something went wrong')
    }
    else{
      done(body)
    }
  })
}

module.exports = curl
