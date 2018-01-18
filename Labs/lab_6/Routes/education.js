/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => 
{
	res.json
	(
		[
			{
				"schoolName": "MK Ghandhi School",
				"degree": "Kindergarten  Diploma",
				"favoriteClass": "Sports",
				"favoriteMemory": "I remember a time when I fell during an track event between many schools and got back up. All the students in my school cheered me on."
			},

			{
				"schoolName": "Kennedy Park Elementary School #27",
				"degree": "ESL (English Second Language) Diploma",
				"favoriteClass": "Gym",
				"favoriteMemory": "Don't remember much from this school. I was only in this school for 1 year."
			},

			{
				"schoolName": "Woodbine Avenue Elementary School #23",
				"degree": "Elementary School Diploma",
				"favoriteClass": "Science",
				"favoriteMemory": "I remember hitting a grand slam one time during recess."
			},

			{
				"schoolName": "Avenel Middle School",
				"degree": "Middle School Diploma",
				"favoriteClass": "Algebra I",
				"favoriteMemory": "I rememeber during the olympaid tryouts, I received the highest score in school history."
			},

			{
				"schoolName": "South Brunswick High School",
				"degree": "High School Diploma",
				"favoriteClass": "Introduction to Computer Science",
				"favoriteMemory": "Programming Zork in Pascal with a group."
			},

			{
				"schoolName": "Stevens Institute of Technology",
				"degree": "Bachelors of Computer Science In Progress",
				"favoriteClass": "CS 370",
				"favoriteMemory": "The time when me and my frineds went to an Indian Restaurant in NYC. There they have a challenge for the spiciest curry in America and one of my friends tried the challenge. He lasted 4 bites and quit."
			},
		]

	);
});

router.post("/", (req, res) => 
{
	res.send(501);
});

module.exports = router;