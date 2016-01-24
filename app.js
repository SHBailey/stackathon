var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/webaudio'))



app.listen(3000, function() {
	console.log('Ready to Shred on port 3000!')
})


app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});



module.exports = app;
