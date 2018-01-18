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
		{
			"name": "Karan Shah",
			"biography": "I was born in Mumbai, India in 1996. As a young child I was a very outgoing and naughty child. I would sneak out of my classes to play cricket with my frinds. I would randomly walk into my friends houses without letting anyone know. Even if this was the case I was always a good kid and would be showered by love from everyone around me. \nAt an age of 5, my father (Pragnesh Shah) came to America alone in pursuit for a better job in computer engineering. A year later, me and my mother (Purvi Shah) finally moved to America to live with my Father. Every 2-3 years we go back to India to visit our family members (There are too many to name). I enjoy my life here because this country has a lot of opportunities and experiences that I would experience differently in India. However, there a lot of things I really miss about India. First, I miss a lot of my close relatives. Being an only child and none of my relatives in America I grew up alone when compared to most of my other cousins. Last time I went to India for my cousin sisters wedding, my cousin brother (who is a couple months younger than me but has the same relationship to the sister) knew so many more people at the wedding. This shows that I have missed a lot of things relating to my culture. The other thing that I miss is definately the Indian food you get in Mumbai. This is not just me but everyone that comes from Mumbai always the food no matter how unhygenic the food is and where it is served. One thing I recommend is when in Mumbai never get food from restaurants, instead you get the street food from the stalls on the side of the street which seem dirty. Just standing and eating that delicious food makes everyone miss that country a lot.",
			"favoriteShows": ["Breaking Bad", "Friends", "Dexter", "Cosmos", "Death Note", "One Piece", "Hunter X Hunter", "Naruto", "Dragon Ball Z", "Shokugeki no Soma"],
			"hobbies": ["Playing League of Legends", "Eating", "Tasting Food at new restaurants", "Sleeping", "Traveling", "Watching Movies", "Watching Football", "Die Hard New Orleans Saints Fan"]
		}
	);
});

router.post("/", (req, res) => 
{
	res.send(501);
});

module.exports = router;