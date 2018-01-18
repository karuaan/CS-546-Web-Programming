/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const express = require("express");
let app = express();
let configRoutes = require("./Routes");

configRoutes(app);

app.listen(3000, () => 
{
	
	console.log("Routes are running on port 3000");
	
});