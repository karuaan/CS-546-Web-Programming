/**
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const data = require('../Data/');

let settings = (passport) =>
{
	passport.use(new LocalStrategy((user, pass, valid) =>
	{
		let validation = data.verification(user, pass);

		if (validation.status)
		{
			return valid(null, validation.message);
		}

		else
		{
			return valid(null, false, 
			{
				message: validation.message
			});
		}

		
	}));

	passport.serializeUser((user, valid) =>
	{
		valid(null, user);
	});

	passport.deserializeUser((user, valid) =>
	{
		let newData = user.split(' ');

		if (newData.length != 2)
		{
			return valid(null, false, 
			{
				message: "Not Valid!"
			});
		}

		let username = newData[0];
		let password = newData[1];

		let output = data.verification(username, password);

		if(output.staus)
		{
			return valid(null, output.message);
		}

		else 
		{
			return valid(null, false, 
			{
				message: output.message
			});
		}
	});
}

settings(passport);

let routes = (app) =>
{
	app.use(passport.initialize());
	app.use(passport.session());

	app.get('/', async (req, res) => 

		if (req.isAuthenticated())
		{
			res.redirect(301, '/private/');
		}

		else 
		{
			res.redirect(301, '/login/');
		}
	})

	app.get('/private', async (req, res) =>
	{
		if (req.isAuthenticated())
		{
			let uname = await req.user.split(' ')[0];
			let udata = await data.getUser(uname);

			res.render('private.handlebars', 
			{
				username: uname,
				alias: udata.alias,
				firstName: udata.firstName,
				lastName: udata.lastName,
				profession: udata.profession,
				bio: udata.bio
			});
		}

		else
		{
			res.redirect(301, '/login')
		}
	}),

	app.post('/login', passport.authenticate('local', 
	{
		successRedirect: '/private',
		failureRedirect: '/',
		failureFlash: true,
		successFlash: "Completed!"
	})); 
}

module.exports = routes

