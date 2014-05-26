var express = require('express')
  , routes = require('./routes')
  , https = require('http')
  , http = require('http')
  , path = require('path')
  , _	= require("underscore")
  , req = require('needle')
  , lessMiddleware = require('less-middleware')
  , app = express();



// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'jade');
// app.use(express.static());
app.use(express.favicon(path.join(__dirname,'/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('6397EA6158CA269858155B7B842BF'));
app.use(express.cookieSession());
app.use(app.router);
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(request, response) {	
	
	var body = [];
	body.push("result");
	
	req.post('https://dev-madeinyerevan.lsq.io/api/v1/item', {
		  "data":{
			"token":"123456",
			"query":{},
			"request":"read"
		}
	}, function(err, resp, body){  		
		console.log('body',body.result[0]);
		response.render(__dirname + '/views/index.jade', {		
		    startups: [body.result]
		});
	});
});

app.post('/create', function(request, response) {
	console.log(request.body);
 
	req.post('https://dev-madeinyerevan.lsq.io/api/v1/item', {
	  "data":
	  { "token" : "123456"
	    ,"request" : "create"
	    ,"model": {
	      "title": request.body.title
	      ,"body":{
	        "email": request.body.email
	        ,"url": request.body.url
	        ,"city": request.body.city
	        ,"founders": request.body.foundersAr
	        , "title": request.body.title
	        //,"logo": request.body.logo
	      }
	      ,"group": "submission"
	    }
	  }
	}, function(err, resp, body){ 
		console.log(body); 		
		response.send(body);		
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


