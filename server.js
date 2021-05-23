require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'Hello API'});
});

// whoami endpoint
app.get('/api/whoami', (req, res) => {
  let headers = req.headers
  res.json({ipaddress: headers['x-forwarded-for'], language: headers['accept-language'], software: headers['user-agent']})
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
