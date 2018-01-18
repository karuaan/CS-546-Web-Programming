/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

module.exports = 
{
	description: "This Program makes Shapes. You can make Triangles, Squares and Rhombuses",

	square: (lines) =>
	{
		if (typeof lines === "number")
		{
			if (lines > 1)
			{
				var i = 0;

				for (i; i < lines; i++)
				{
					var lineSq = "|";
					var j = 0;

					for (j; j < lines; j++)
					{
						if (i == 0 || i == (lines - 1))
						{
							lineSq = lineSq + "-";
						}

						else
						{
							lineSq = lineSq + " ";
						}
					}
					lineSq = lineSq + "|";
					console.log(lineSq);
				}

				console.log();
			}

			else 
			{
				throw "Input Must be Greater Than 1!";
			}
		}
		
		else
		{
			throw "Input Must be a Number!";
		}
	},


	triangle: (lines) =>
	{
		function buildRow(rNum, tSize)
		{
			var rString = "";
			var i = 0;

			if (rNum == tSize)
			{
				for (i; i < tSize * 2; i++)
				{
					if (i == 0)
					{
						rString += "/";
					}

					else if (i == (tSize * 2 - 1)) 
					{
						rString += "\\";
					}

					else
					{
						rString += "-";
					}
				}
			}

			else 
			{
				for (i; i < tSize; i++)
				{
					if (i + rNum == tSize)
					{
						rString += "/";
					}

					else
					{
						rString += " ";
					}
				}

				for (i = tSize - 1; i > 0; i--)
				{
					if (i + rNum == tSize)
					{
						rString += "\\";
					}

					else 
					{
						rString += " ";
					}
				}
			}

			return rString;
		}

		if (typeof lines === "number")
		{
			var i = 0;

			if (lines > 0)
			{
				for (i = 1; i <= lines; i++)
				{
					console.log(buildRow(i, lines));
				}

				console.log();
			}

			else
			{
				throw "Input Must be Greater Than 0!";
			}
		}

		else
		{
			throw "Input Must be a Number!";
		}
	},


	rhombus: (lines) =>
	{
		function topRow(rNum, rSize)
		{
			var rString = "";
			var i;

			if (rNum == 1)
			{
				for (i = 1; i < rSize/2; i++)
				{
					rString += " ";
				}

				rString += "/-\\";

				for (i = 1; i < rSize/2; i++)
				{
					rString += " ";
				}
			}

			else
			{
				for (i = 0; i < rSize/2; i++)
				{
					if (rNum + i == rSize/2)
					{
						rString += "/";
					}

					else
					{
						rString += " ";
					}
				}

				rString += " ";

				for (i = (rSize/2) - 1; i >= 0; i--)
				{
					if (rNum + i == rSize/2)
					{
						rString += "\\";
					}

					else
					{
						rString += " ";
					}
				}
			}
			return rString;
		}

		function botRow(rNum, rSize)
		{
			var rString = "";
			var i;

			if (rNum == 1)
			{
				for (i = 1; i < rSize/2; i++)
				{
					rString += " ";
				}

				rString += "\\-/";

				for (i = 1; i < rSize/2; i++)
				{
					rString += " ";
				}
			}

			else
			{
				for (i = 0; i < rSize/2; i++)
				{
					if (rNum + i == rSize/2)
					{
						rString += "\\";
					}

					else
					{
						rString += " ";
					}
				}

				rString += " ";

				for (i = (rSize/2) - 1; i >= 0; i--)
				{
					if (rNum + i == rSize/2)
					{
						rString += "/";
					}

					else
					{
						rString += " ";
					}
				}
			}
			return rString;
		}
		
		if (typeof lines === "number")
		{
			var i;

			if (lines % 2 == 0)
			{
				for (i = 1; i <= lines/2; i++)
				{
					console.log(topRow(i, lines));
				}

				for (i = lines/2; i > 0; i--)
				{
					console.log(botRow(i, lines));
				}

				console.log();
			}

			else
			{
				throw "Input Must be a Positive Even Number!";
			}
		}

		else
		{
			throw "Input Must be a Number!";
		}
	}
}