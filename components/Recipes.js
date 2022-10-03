import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/Recipes";
import recipeCircle from "../assets/image/recipeCircle.svg";
import recipeRectangle from "../assets/image/recipeRectangle.svg";
import { recipeData } from "../utils/recipeData";

const Recipes = () => {
  return (
    <Wrappers>
      {recipeData.map((item) => {
        const {
          Srno,
          RecipeName,
          TranslatedRecipeName,
          Ingredients,
          TranslatedIngredients,
          PrepTimeInMins,
          CookTimeInMins,
          TotalTimeInMins,
          Servings,
          Cuisine,
          Course,
          Diet,
          Instructions,
          TranslatedInstructions,
          URL,
        } = item;
        return (
          <div>
            <div className="weekRecipe">
              <div>
                <p className="tag">Recipe of the week</p>
                <span>{RecipeName}</span>
                <p className="details">
                  Have you ever made pasta with vodka sauce? It's a <br />
                  velvety creamy tomato sauce that happens to be cooked with a
                  splash of vodka, which remarkably makes this simple sauce
                  taste simply sublime.
                </p>
                <p className="details">
                  Typically pasta alla vodka is made with penne pasta. For this
                  version we are adding in some fresh shrimp, to make the dish
                  more of a main course, and using fettuccine pasta.
                </p>
                <button>Get the Recipe</button>
              </div>
              <div>
                <Image src={recipeCircle} />
              </div>
            </div>
            <div className="trendingRecipe">
              <div className="image">
                <Image src={recipeRectangle} />
              </div>
              <div>
                <p className="tag">Trending Recipe</p>
                <span>Four-Cheese Lasagna With Fresh Pasta</span>
                <p className="details">
                  This is not your Aunt Mary’s lasagna—or one you’ve likely
                  encountered from any family member! There’s no tomato sauce
                  and no meat. Just fresh pasta sheets layered with four
                  different kinds of delicious cheese
                </p>
                <p className="details">
                  This lasagna is golden with crispy-chewy edges on top and
                  creamy insides in the middle. This makes a heavenly and
                </p>
                <button>Get the Recipe</button>
              </div>
            </div>
          </div>
        );
      })}
    </Wrappers>
  );
};

export default Recipes;
