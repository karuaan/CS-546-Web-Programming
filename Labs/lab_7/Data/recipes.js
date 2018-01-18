/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/


const mongoCollections = require("../Connections/mongoConnections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

module.exports = 
{
	async getAllRecipes()
	{
		const recipesCollection = await recipes();

		const recipesAll = await recipesCollection.find({}, { title: 1 }).toArray();

		return recipesAll;
	},

	async getRecipe(id)
	{
		if (!id)
		{
			throw "You need to provide an ID!";
		}

		const recipesCollection = await recipes();

		const recipeItem = await recipesCollection.findOne({ _id: uuid });
		if (recipeItem == null)
		{
			throw "No Recipe With ID Found!";
		}

		return recipeItem;
	},

	async addRecipe(title, ingredients = [], steps)
	{
		if (!title)
		{
			throw "No Title Found!";
		}

		if (!ingredients)
		{
			throw "No Ingredients Found!";
		}

		if (!steps)
		{
			throw "No Steps Found!";
		}

		let newRecipe =
		{
			_id: uuid.v4(),
			title: title,
			ingredients: ingredients,
			steps: steps,
			comments: [],
		};

		const recipeCollection = await recipes();
		const newRec = await recipeCollection.insertOne(newRecipe);
		const newID = newRec.insertedId;
		const newRecipes = await this.getRecipe(newID);
		return newRecipes;
	},

	async removeRecipe(id)
	{
		if (!id)
		{
			throw "No ID Provided!";
		}

		const recipesCollection = await recipes();
		const removedRecipe = await recipesCollection.removeOne({ _id: id });

		if (removedRecipe === 0)
		{
			throw "Could not Delete Recipe with ID of ${id}";
		}
	},

	async removeAllRecipes()
	{
		let recipesCollection = await recipes();
		await recipesCollection.remove({});
	},

	async updateRecipe(id, updatedRecipe)
	{
		if (!id)
		{
			throw "You Must Provide ID!";
		}

		if (!updatedRecipe)
		{
			throw "You Must Provide an Update!";
		}

		const recipesCollection = await recipes();
		let updatedRecipeData = {};

		if (updatedRecipe.title)
		{
			updatedRecipeData.title = updatedRecipe.title;
		}

		if (updatedRecipe.ingredients)
		{
			updatedRecipeData.ingredients = updatedRecipe.ingredients;
		}

		if (updatedRecipe.comments)
		{
			updatedRecipeData.comments = updatedRecipe.comments;
		}

		let updatedRecipes = { $set: updatedRecipeData };

		const updatedRecipesData = await recipesCollection.updateOne({ _id: id }, updatedRecipes);
		const newUpdatedRecipes = await this.getRecipe(id);
		return newUpdatedRecipes;
	},

};