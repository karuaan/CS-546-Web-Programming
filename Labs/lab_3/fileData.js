/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports = 
{
	getFileAsString: async function (path) 
	{
	    if (!path) 
	    {
	        throw "No Path Provided!";
	    }

		let file = await fs.readFileAsync(path, 'utf8');
		return file;
	},

	getFileAsJSON: async function (path) 
	{
		if (!path)
		{
			throw "No Path Provided!";
		}

		let file = await fs.readFileAsync(path, 'utf8');
		let JSONd = await JSON.parse(file);
		return JSONd;
	},

	saveStringToFile: async function(path, text) 
	{
		if (!path)
		{
			throw "No Path Provided!";
		}
		
		let file = await fs.writeFileAsync(path, text, 'utf8');
		return file;
	},

	saveJSONToFile: async function (path, obj) 
	{
		if (!path)
		{
			throw "No Path Given!";
		}

		let file = await fs.writeFileAsync(path, JSON.stringify(obj));
		return file;
	},
};





