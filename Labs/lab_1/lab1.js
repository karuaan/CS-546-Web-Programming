/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

// Function 1: Sum Of Squares

function Squared(s)
{
	if (s == null)
	{
		throw "No Input Found!";
	}

	else if (isNaN(s))
	{
		throw "Input is wrong type. All inputs should be numeric!"
	}

	square = s*s;
	return square;
}

function sumOfSquares(x, y, z)
{
	if (x == null || y == null || z == null)
	{
		throw "No Input Found!";
	}

	else if (isNaN(x) || isNaN(y) || isNaN(z))
	{
		throw "Input is wrong type. All inputs should be numeric!"
	}

	let x2 = Squared(x);
	let y2 = Squared(y);
	let z2 = Squared(z);

	let Sum = x2 + y2 + z2;

	return Sum;
}

// Function 2: Say Hello To Someone

function sayHelloTo (fname, lname, title)
{
	let i = false;
	
	if(fname !== undefined) 
	{
		if(typeof(fname) !== 'string') 
		{
			i = true;
			throw "Inputs Must be Strings!";
		}
	} 
	
	else 
	{
		fname = '';
	}

	if(lname !== undefined) 
	{
		if(typeof(lname) !== 'string') 
		{
			i = true;
			throw "Inputs Must be Strings!";
		}
	} 
	
	else 
	{
		lname = '';
	}

	if(title !== undefined) 
	{
		if(typeof(title) !== 'string') 
		{
			i = true;
			throw "Inputs Must be Strings!";
		}
	} 
	
	else 
	{
		title = '';
	}
	
	if (fname === undefined || typeof(fname) !== 'string') 
	{
		fname = '';
	}

	if (lname === undefined || typeof(lname) !== 'string')
	{
		lname = '';
	}

	if (title === undefined || typeof(title) !== 'string')
	{
		title = '';
	}

	if (fname != '' || lname != '' || title != '')
		{
			if (lname == "" && title == "")
			{
				console.log(`Hello, ${fname}!`);
			}

			else if (title == undefined)
			{
				console.log(`Hello, ${fname} ${lname}. I hope you are having a good day!`);
			}

			else
			{
				console.log(`Hello, ${title} ${fname} ${lname}! Have a good evening!`);
			}
		}

	else 
	{
		throw "No Inputs Found!";
	}
}

// Function 3: Cups of Coffee Song

function cupsOfCoffee(numCups)
{
	if (numCups == null)
	{
		throw "No Input Found!";
	}

	else if (typeof(numCups) !== 'number') 
	{
		throw "Input Must Be Numeric!"
	}

	else if (numCups <= 0)
	{
		throw "Number has to be greater than zero!"
	}

	else
	{

		let cupsLeft = numCups - 1;

		while(numCups > 0)
		{
			if (numCups > 2)
			{
				console.log(`\n${numCups} cups of coffee on the desk! ${numCups} cups of coffee! \nPick one up, drink the cup, ${cupsLeft} cups of coffee on the desk!`);
				numCups--;
			}

			else if (numCups == 2)
			{
				console.log(`\n${numCups} cups of coffee on the desk! ${numCups} cups of coffee! \nPick one up, drink the cup, 1 cup of coffee on the desk!`);
				numCups--;
			}

			else if (numCups == 1)
			{
				console.log(`\n${numCups} cup of coffee on the desk! ${numCups} cup of coffee! \nPick one up, drink the cup, no more left coffee on the desk!`);
				numCups--;
			}
		} 
	}
}

// Function 4: Occurrences Of Substrings

function occurrencesOfSubstring(fullString, subString)
{
	if (fullString == null || subString == null)
	{
		throw "No Input Found!";
	}

	else if (typeof(fullString) !== "string" || typeof(subString) !== "string")
	{
		throw "Inputs must be Strings!";
	}

	let counter = 0;

	let length = fullString.length;
	let SSlength = subString.length;

	if (SSlength > 1)
	{
		for (i = 0; i <= length; i++)
		{
			let a = 0;
			let j = i + 1;
			let k = 1;

			while (j <= i + SSlength - 1 && k <= i + SSlength)
			{
				if (fullString[i] == subString[0] && fullString[j] == subString[k])
				{
					a++;
				}

				j++;
				k++;
			}

			if (a == SSlength - 1)
			{
				counter++;
			}
		}

		console.log(`${counter}`);
	}

	else
	{
		for (i = 0; i <= length; i++)
		{
			if (fullString[i] == subString)
			{
				counter++;
			}
		}

		console.log(`${counter}`);
	}
}

// Function 5: Randomize Sentences

function getRandomInt(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomizeSentences(para)
{

	if (typeof(para) !== "string")
	{
		throw "Input has to be a String!";
	}

	else
	{
		let b = para.match(/[^\.!\?]+[\.!\?]+/g);
		
		if (b == null)
		{
			throw "No Input Received!";
		}

		else
		{
			let arrlength = b.length;
			let sentences = [];

			if (arrlength == 0)
			{
				throw "No Input received!";
			}

			else if (arrlength == 1)
			{
				throw "Input has to be bigger";
			}

			else
			{
				for (i = 0; i < arrlength; i++)
				{
					let z = getRandomInt(0, arrlength - 1 - i);
					sentences.push(b[z]);
					b.splice(z, 1);
				}

				return sentences;
			}
		}
	}
}

// Test Cases

// Function 1 Cases 
//console.log("Function 1 Test Cases: \n");
//console.log("////////////////////////////////////////////////////////////////////////////////");

//console.log("sumOfSquares(1, 5, 10) = ");
//console.log(sumOfSquares(1, 5, 10));
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sumOfSquares(2, 8, 16) = ");
//sumOfSquares(2, 8, 16);
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sumOfSquares(1, 12, 3) = ");
//sumOfSquares(1, 12, 3);
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sumOfSquares(1, 16, 5) = ");
//sumOfSquares(1, 16, 5);
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sumOfSquares('Hi', 2, 5) = ");
//sumOfSquares("Hi", 2, 5);
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

// Function 2 Test Cases

//console.log("Function 2 Test Cases: \n");
//console.log("////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo() = ");
//sayHelloTo();
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo('Phil') = ");
//sayHelloTo("Phil");
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo('Phil', 'Barresi') = ");
//sayHelloTo("Phil", "Barresi");
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo('Phil', 'Barresi', 'Mr.') = ");
//sayHelloTo("Phil", "Barresi", "Mr.");
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo('') = ");
//sayHelloTo('');
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

//console.log("sayHelloTo(5, 10, 'Hi') = ");
//sayHelloTo(5, 10, 'Hi');
//console.log("\n////////////////////////////////////////////////////////////////////////////////");

// Function 3 Test Cases

// console.log("Function 3 Test Cases: \n");
// console.log("////////////////////////////////////////////////////////////////////////////////");

// console.log("cupsOfCoffee(5) = ");
// cupsOfCoffee(5);
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("cupsOfCoffee(3) = ");
// cupsOfCoffee(3);
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// //console.log("cupsOfCoffee('5') = ");
// //cupsOfCoffee('5');
// //console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("cupsOfCoffee(2) = ");
// cupsOfCoffee(2);
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("cupsOfCoffee(10) = ");
// cupsOfCoffee(10);
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// Function 4 Test Cases

// console.log("Function 4 Test Cases");
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("occurrencesOfSubstring('Helllllllo, class!', 'll') = ");
// occurrencesOfSubstring("Helllllllo, class!", "ll");
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("occurrencesOfSubstring('hello world', 'o') = ");
// occurrencesOfSubstring("hello world", "o");
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log("occurrencesOfSubstring(5, 'o') = ");
// occurrencesOfSubstring(5, "o");

// console.log("Function 5 Test Cases"); 
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations. Hello, world!";
// console.log(randomizeSentences(paragraph));
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// var str = "I like turtles. Do you? Awesome! hahaha. lol!!! What's going on????";
// console.log(randomizeSentences(str));
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log(randomizeSentences());
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log(randomizeSentences(""));
// console.log("\n////////////////////////////////////////////////////////////////////////////////");

// console.log(randomizeSentences(5));
// console.log("\n////////////////////////////////////////////////////////////////////////////////");


