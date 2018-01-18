/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

module.exports =
{
	simplify: (text) =>
	{
		if (typeof text === "string")
		{
			//console.log(text);
			return text.toLowerCase().replace(/\s\s+/g, ' ').replace(/[^A-Za-z0-9 ]/g, '');
			//console.log('a');
		}

		else
		{
			throw "Input Must be a String!";
		}
	},

	createMetrics: (text) =>
	{
		if (typeof text === "string")
		{
			var textArr = module.exports.simplify(text).split(" ");
			var wdict = {};
			var mdict = {};

			var totalWords = 0;
			var uniqueWords = 0;
			var longWords = 0;
			var totalLetters = 0;
			var i = 0;

			for (i; i < textArr.length; i++)
			{
				//console.log('c');
				totalWords += 1;
				totalLetters += textArr[i].length;

				if (textArr[i].length >= 6)
				{
					longWords += 1;
				}

				if (textArr[i] in wdict)
				{
					wdict[textArr[i]] += 1;
				}

				else
				{
					wdict[textArr[i]] = 1;
					uniqueWords += 1;
				}

				//console.log('d');
			}
			
			mdict["totalLetters"] = totalLetters;
			mdict["totalWords"] = totalWords;
			mdict["uniqueWords"] = uniqueWords;
			mdict["longWords"] = longWords;
			mdict["averageWordLength"] = totalLetters/totalWords;
			mdict["wordOccurences"] = wdict;

			return mdict;

			//console.log('e');
		}

		else
		{
			throw "Input must be a String!";
		}
	}
};