/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const aboutFile = require("./about");
const storyFile = require("./story");
const educationFile = require("./education");

const constructorMethod = (app) => 
{
	app.use("/about", aboutFile);
	app.use("/story", storyFile);
	app.use("/education", educationFile);
	app.use("*", (req, res) => 
	{
		res.sendStatus(404);
	});
};

module.exports = constructorMethod;