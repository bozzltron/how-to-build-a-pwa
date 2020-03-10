var express = require('express')
var app = express()

app.get('/manifest:id.json', function (req, res) {
  res.sendFile(__dirname + `/manifest-${req.params.id}.json`);
})

app.listen(3000)
console.log("Listening on 3000");