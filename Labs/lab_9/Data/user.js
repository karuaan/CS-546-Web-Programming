/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const bcrypt = require('bcrypt-nodejs');

let users = 
{
	masterdecetive123:
	{
		password: '$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD',
		alias: "Sherlock Holmes",
		firstName: "Sherlock",
		lastName: "Holmes",
		profession: "Detective",
		bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."		
	},

	lemon:
	{
		password: '$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm',
		alias: 'Liz Lemon',
		firstName: 'Elizabeth',
		lastName: 'Lemon',
		profession: 'Writer',
		bio: 'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.'		
	},

	theboywholived:
	{
		password: '$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK',
		alias: 'Harry Potter',
		firstName: 'Harry',
		lastName: 'Potter',
		profession: 'Student',
		bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."
	}
}

module.exports =
{
	getUser: (id) =>
	{
		return users[id];
	}, 

	verification: (username, password) =>
	{
		let usersData = await users[username];

		if (!usersData)
		{
			return
			{
				status: false,
				message: "Username is Not Found!"
			};
		}

		if (!bcrypt.compareSync(password, usersData.password))
		{
			return
			{
				status: false,
				message: "User Password is Incorrect!"
			};
		}

		else
		{
			return
			{
				status: true,
				message: `${username} ${password}`
			}
		}
	},
}