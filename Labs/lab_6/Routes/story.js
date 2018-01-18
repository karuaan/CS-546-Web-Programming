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
				"storyTitle": "Old Apartment Troubles",
				"story": "When me and mon first arrived to America, we lived in an Apartment in Woodbridge. The apartment were very nice actually. Nice neighbors, schools both elementary and middle schools were across the street and there was a nice and clean playground in the behind the house. Everything was great except for one thing: The Heater. This issue was okay during the summer times since we never had to turn on the heater, however, during winter this was a very big issue. None of the heaters in the house wold work. It became so bad that we would sit with our feet on the sofas. The hard wood flooring became so cold you couldn't walk around the house. Eventually the Apartment people were able to figure out what the problem was with the heater after us bugging them for 3 years.I do not know how we were ever able to live through this for a couple years but we did eventually. I can still feel the cold floor on my feet and the cold air while writing this story. I think this has contributed to me never feeling cold when the average person does. I can walk out side in shorts at 40 degrees and enjoy the weather as long as the wind isn't horrible. Eventually we left the apartment after living there for 8 years and bought a house in South Brunswick. As great as the new home is, I still miss my old home. Me and my family look back at those days and laugh about how we would stay in the cold."
			}
		)
});

router.post("/", (req, res) => 
{
	res.send(501);
});

module.exports = router;
