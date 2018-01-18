/** 
 Karan Shah
 CS 546 
 I pledge my honor that I have abided by the Stevens Honors System. 
**/

const express = require('express');
const router = express.Router();
const data = require("../Data");
const recipesData = data.recipes;

router.get("/:id", async (req, res) => 
{

  try 
  {
    const recipes = await recipesData.getRecipe(req.params.id);
    res.json(recipes);
  } 
  
  catch (e) 
  {
    res.status(404).json({ error: "User not found" });
  }

});

router.get("/", async (req, res) => 
{

  try 
  {
    const recipeList = await recipesData.getAllRecipes();
    res.json(recipeList);
  } 

  catch (e) 
  {
    res.send(e);
    //res.sendStatus(500);
  }

});

router.post("/", async (req, res) => 
{

  const recipe = req.body;

  if (!recipe) 
  {
    res.status(400).json({ error: "You Must Provide Data to Create a Recipe!" });
    return;
  }

  if (!recipe.title) 
  {
    res.status(400).json({ error: "You Must Provide a Recipe Title!"});
    return;
  }

  if (!recipe.ingredients) 
  {
    res.status(400).json({ error: "You Must Provide Recipe Ingredients!" });
    return;
  }

  if (!recipe.steps)
  {
  	res.status(400).json({ error: "You Must Provide Recipe Steps!" });
    return;
  }

  try 
  {
  
    const newRecipe = await recipesData.addRecipe
    (
      recipe.title,
      recipe.ingredients,
      recipe.steps
    );
    res.json(newRecipe);
  } 

  catch (e) {
    res.json({ error: e.toString() });
  }

});

router.put("/:id", async (req, res) => 
{
  
  const recipeInfo = req.body;

  try 
  {
    await recipesData.getRecipe(req.params.id);
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
    return;
  }

  try 
  {
    const updatedRecipe = await recipesData.updateRecipe(req.params.id, recipeInfo);
    res.json(updatedRecipe);
  } 

  catch (e) 
  {
    res.json( { error: e.toString() });
  }

});

router.delete("/:id", async (req, res) =>
{

  try 
  {
    await recipesData.getRecipe(req.params.id);
  } 

  catch (e) 
  {
    res.json({ error: e.toString() });
    return;
  }

  try 
  {
    await recipesData.removeRecipe(req.params.id);
    res.sendStatus(200);
  } 

  catch (e) 
  {
    res.sendStatus(500);
    return;
  }

});

module.exports = router;
