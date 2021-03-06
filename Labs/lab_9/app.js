/**
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const express = require('express');
const app = express();
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');	
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const configureRoutes = require('./Routes');
const session = require('express-session');

const handlebarsInstance = exphbs.create
({
	defaultLayout: 'main',
	helpers: 
	{
		asJSON: (obj, spacing) => 
		{
			if (typeof spacing === "number")
				return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

			return new Handlebars.SafeString(JSON.stringify(obj));
		}
	},
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => 
{
	
	if (req.body && req.body._method) 
	{
		req.method = req.body._method;
		delete req.body._method;
	}

	next();
};


app.use(session
({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: 
	{
		secure: false 
	}
}))



app.use('/public', express.static(__dirname + '/public'));
app.use(flash()); 
app.use(cookieParser());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded
({
	extended: true
}))

app.use(rewriteUnsupportedBrowserMethods);
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configureRoutes(app);

app.listen(3000, 'localhost', () => 
{
	console.log('server running on http://localhost:3000');
});