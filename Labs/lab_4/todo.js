/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const mongoCollections = require("./mongoConnections");
const tasks = mongoCollections.tasks;
const id = require("node-uuid");

module.exports =
{
	async createTask(title, description)
	{
		if (!title)
		{
			throw "No Title Found!";
		}

		if (!description)
		{
			throw "No Description Found!";
		}

		let newTask =
		{
			_id: id.v4(),
			title: title,
			description: description,
			completed: false,
			completedAt: null
		};

		const taskCollection = await tasks();
		const newInfo = await taskCollection.insertOne(newTask);
		const newID = newInfo.insertedId;
		const newTasks = await this.getTask(newID);
		return newTasks;
	},

	async getAllTasks()
	{
		const taskCollection = await tasks();
		const taskList = await taskCollection.find({}).toArray();

		return taskList;
	},

	async getTask(id)
	{
		if (!id)
		{
			throw "No ID Provided!";
		}

		const taskCollection = await tasks();
		const todoItem = await taskCollection.findOne({ _id: id });
		if (todoItem == null)
		{
			throw "No Task With ID Found!";
		}

		return todoItem;
	},

	async completeTask(taskId)
	{
		const taskCollection = await tasks();
		const completeT = await taskCollection.findOne({ _id: taskId });

		let date = new Date();
		let currentHour = date.getHours();
		let currentMinute = date.getMinutes();

		if (!taskId)
		{
			throw "No Task ID Found!";
		}

		const compledTask = await taskCollection.updateOne({ _id: id }, { $set: { completed: true, completedAt: `${currentHour}:${currentMinute}`}});
		const completeTasks = await this.getTask(id);
		return completeTasks;
	},

	async removeTasks(id)
	{
		if (!id)
		{
			throw "No ID Provided!";
		}

		const taskCollection = await tasks();
		const deleteInfo = await taskCollection.removeOne({ _id: id });

		if (deleteInfo === 0)
		{
			throw "Could not Delete Task with ID of ${id}";
		}
	},

	async removeAll()
	{
		let taskCollection = await tasks();
		await taskCollection.remove({});
	},
};