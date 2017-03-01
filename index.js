var express = require('express')

var app = express()

var name = null

app.get('/', function (req, res) {
  var greeting = name ? "hi " + name : ''

  res.send(greeting + '(ﾉ´ヮ´)ﾉ*:･ﾟ✧ ')
})

app.get('/name/set', (req, res) => {
  name = req.query.name

  res.redirect('/')
})


var port = process.env.PORT || 3000
app.listen(port, console.log('listening on PORT ', port))

