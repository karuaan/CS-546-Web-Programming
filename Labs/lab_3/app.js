/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const fd = require("./fileData");
const tmec = require("./textMetrics");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function main()
{
	try
	{	
		let check = await fd.getFileAsJSON("chapter1.result.json");
		console.log(check);
	}

	catch(e)
	{
		if(e["errno"] == -4058 || undefined || null) // Checks if error is error number -4058 which says file does not exist
		{
			try
			{
				let fileText = await fd.getFileAsString("chapter1.txt");
				//console.log(fileText);
				let simplifyText = await tmec.simplify(fileText);
				let dFile = await fd.saveStringToFile("chapter1.debug.txt", simplifyText);
				let metricRes = await fd.saveJSONToFile("chapter1.result.json", tmec.createMetrics(simplifyText));
				console.log(metricRes);
			}

			catch(e)
			{
				console.error(e);
			}
		}
	}

	try
	{	
		let check1 = await fd.getFileAsJSON("chapter2.result.json");
		console.log(check1);
	}

	catch(e)
	{
		if(e["errno"] == -4058 || undefined || null) // Checks if error is error number -4058 which says file does not exist
		{
			try
			{
				let fileText1 = await fd.getFileAsString("chapter2.txt");
				//console.log(fileText);
				let simplifyText1 = await tmec.simplify(fileText1);
				let dFile1 = await fd.saveStringToFile("chapter2.debug.txt", simplifyText1);
				let metricRes1 = await fd.saveJSONToFile("chapter2.result.json", tmec.createMetrics(simplifyText1));
				console.log(metricRes1);
			}

			catch(e)
			{
				console.error(e);
			}
		}
	}

	try
	{	
		let check2 = await fd.getFileAsJSON("chapter3.result.json");
		console.log(check2);
	}

	catch(e)
	{
		if(e["errno"] == -4058 || undefined || null) // Checks if error is error number -4058 which says file does not exist
		{
			try
			{
				let fileText2 = await fd.getFileAsString("chapter3.txt");
				//console.log(fileText);
				let simplifyText2 = await tmec.simplify(fileText2);
				let dFile2 = await fd.saveStringToFile("chapter3.debug.txt", simplifyText2);
				let metricRes2 = await fd.saveJSONToFile("chapter3.result.json", tmec.createMetrics(simplifyText2));
				console.log(metricRes2);
			}

			catch(e)
			{
				console.error(e);
			}
		}
	}
}

main();
