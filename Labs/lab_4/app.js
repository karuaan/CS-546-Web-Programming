/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const tasks = require("./todo");
const connection = require("./Mongoconnection");
const id = require("node-uuid");
const mongoCollections = require("./Mongoconnections");
//const updatedCollection = mongoCollections.remove();
const todo = mongoCollections.tasks;


const main = async() =>
{
	await tasks.removeAll();
	
	const nTask = await tasks.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
	console.log("New Task Added!");
	console.log(tasks);

	const pokemon = await tasks.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");

	const allTasks = await tasks.getAllTasks();
	const getAllTasks = await tasks.getAllTasks();
	console.log(getAllTasks);

	const removeFirst = await tasks.removeTasks(allTasks[0]._id);

	const taskTotal = await tasks.getAllTasks();
	console.log(taskTotal);

	const completeTask = await tasks.completeTask(taskTotal[0]._id);
	console.log(completeTask);

	const db = await connection();
  	await db.close();
  	console.log("Done!");
};

main();