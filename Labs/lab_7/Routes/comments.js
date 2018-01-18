/**
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const express = require('express');
const router = express.Router();
const data = require("../Data");
const commentData = data.comments;
const recipeData = data.recipes;

router.get("/recipe/:id", async (req, res) => 
{
  try 
  {
    const recipeComments = await commentData.getAllCommentsForRecipe(req.params.id);
    res.json({ recipeComments });
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
  }

});

router.get("/:commentId", async (req, res) => 
{
  
  try 
  {
    const comments = await commentData.getAllCommentsByCommentId(req.params.commentId);
    res.json({ comments });
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
  }

});

router.post("/:recipeId", async (req, res) =>
{

  const commentInfo = req.body;

  if (!commentInfo) 
  {
    res.status(400).json({ error: "You Must Provide Data to Create a Comment!" });
    return;
  }

  if (!req.params.recipeId) 
  {
    res.status(400).json({ error: "You Must Provide commentId!" });
    return;
  }

  if (!commentInfo.poster) 
  {
    res.status(400).json({ error: "You Must Provide Poster Information!" });
    return;
  }

  if (!commentInfo.comment)
  {
  	res.status(400).json({ error: "You Must Provide  Comment!" });
    return;
  }

  try 
  {
  
    const newComment = await commentData.addComment
    (
      req.params.recipeId,
      commentInfo.poster,
      commentInfo.comment
    );
    res.json(newComment);
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
  }
});

router.put("/:rid/:cid", async (req, res) => 
{
  
  const commenting = req.body;

  try 
  {
    const updatedComment = await commentData.updateComment(req.params.rid, req.params.cid, commenting);
    res.json({ updatedComment });
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
  }

});

router.delete("/:id", async (req, res) =>
{

  console.log(commentData);

	try 
  {
    await commentData.removeComment(req.params.id);
    res.sendStatus(200);
  } 

  catch (e) 
  {
    res.sendStatus(500);
    return;
  }
});

module.exports = router;