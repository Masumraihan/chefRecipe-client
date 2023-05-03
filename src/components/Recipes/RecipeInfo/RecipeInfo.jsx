import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SingleRecipe from "./SingleRecipe";

const RecipeInfo = ({ recipeData }) => {
  const { chef_id, recipes } = recipeData;
  return (
    <div className='py-10'>
      <h1 className='text-center text-4xl font-bold'>Our Recipes</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 container mx-auto '>
        {recipes.map((recipe, i) => (
          <SingleRecipe key={i} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeInfo;
