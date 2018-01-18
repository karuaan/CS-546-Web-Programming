/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const mongoCollections = require("../Connections/mongoConnections");
const recipes = mongoCollections.recipes;
const recipe = require("./recipes");
const uuid = require("node-uuid");

module.exports = 
{
	async getAllCommentsForRecipe(recipeID)
	{
		const recipesCollection = await recipes();

		const recipeComments = await recipesCollection.findOne({ _id: recipeID }, { 'comments._id': 1, _id: 1, title: 1, 'comments.poster': 1, 'comments.comment': 1 }).toArray();
		return recipeComments;
	},

	async getAllCommentsByCommentId(commentId)
	{
		if (!commentId)
		{
			throw "You Must Provide an ID!";
		}

		const recipesCollection = await recipes();

		const comments =  await recipesCollection.findOne({ 'comments._id': commentId }, { title: 1, comments: { $elemMatch: { 'recipe._id': id } } }).toArray();
		return comments;
	},

	async getComment(id)
	{
		if (!id)
		{
			throw "You Must Provide an ID!";
		}

		const commentCollection = await comments();

		const comment = await commentsCollection.findOne({ _id: id });
		if (comment == null)
		{
			throw "No Comment With ID Found!";
		}

		return comment;
	},

	async addComment(id, poster, comment)
	{
		if (!id)
		{
			throw "No ID Found!";
		}

		if (!poster)
		{
			throw "No poster Found!";
		}

		if (!comment)
		{
			throw "No Comment Found!";
		}

		let newRecipe =
		{
			
		};

		const recipesCollection = await recipes();
		const newComment = await recipesCollection.updateOne({ _id: id }, { $addToSet : { comments: { _id: uuid.v4(), poster: poster, comment: comment}}});
		return newComment;
	},

	async removeComment(id)
	{
		if (!id)
		{
			throw "No ID Provided!";
		}

		const recipesCollection = await recipes();
		const removedComment = await recipesCollection.update( { 'comments._id': id }, { $pull: { 'comments': { '_id': id } } });

		if (removedComment === 0)
		{
			throw "Could not Delete Comment with ID of ${id}";
		}
	},

	async updateComment(rid, cid, updatedComment)
	{
		if (!rid)
		{
			throw "You Must Provide a Recipe ID!";
		}

		if (!cid)
		{
			throw "You Must Provide a Comment ID!";
		}

		if (!updatedComment)
		{
			throw "You Must Provide an Update!";
		}

		const recipesCollection = await recipes();
		
		if (updatedComment.comment || updatedComment)
		{
			const updatedComments = await recipesCollection.update( { _id: rid, 'comments._id': cid }, { $set: {  'comments.$.poster': updatedComment.poster, 'comments.$.comment': updatedComment.comment }});
			const updatedCommentsData = await this.getAllCommentsByCommentId(cid);
			return updatedCommentsData;
		}

		else if (updatedComment.comment || updatedComment.poster == undefined)
		{
			const updatedComments = await recipesCollection.update( { _id: rid, 'comments._id': cid }, { $set: { 'comments.$.comment': updatedComment.comment }});
			const updatedCommentsData = await this.getAllCommentsByCommentId(cid);
			return updatedCommentsData;
		}

		else 
		{
			const updatedComments = await recipesCollection.update( { _id: rid, 'comments._id': cid }, { $set: {  'comments.$.poster': updatedComment.poster }});
			const updatedCommentsData = await this.getAllCommentsByCommentId(cid);
			return updatedCommentsData;
		}
	},

};