var express = require('express')

var server = express()
server.use(express.static(__dirname + '/../client/'))

var port = 3000
server.listen(port, function() {
  console.log('server listening on port ' + port)
})
