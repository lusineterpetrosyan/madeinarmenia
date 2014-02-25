var express = require('express')
  , routes = require('./routes')
  , https = require('http')
  , http = require('http')
  , path = require('path')
  , _	= require("underscore")
  , req = require('needle')
  , app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('6397EA6158CA269858155B7B842BF'));
app.use(express.cookieSession());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(request, response) {	

	req.post('https://dev-madeinyerevan.lsq.io/api/v1/item', {
			  "data":{
				"token":"123456",
				"query":{},			
			    "request":"read"
			}
		}, function(err, resp, body){  		
		
		console.log(body.result[0].title);
		response.render(__dirname + '/views/index.jade', {
		        startups: [body.result]
		});
	});

});

app.get('/:id', routes.startup);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});