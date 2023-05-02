import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeInfo = ({ recipeData }) => {
  console.log(recipeData);
  const { chef_id, cooking_method, ingredients, rating, recipe_name } =
    recipeData;
  return (
    <div className='container mx-auto py-7'>
      <h1 className='text-4xl text-center font-bold'>{recipe_name}</h1>
      {/*<div className='grid md:grid-cols-2 gap-5 px-5 md:px-0 mt-8 items-center'>
        <div className="w-2/3 mx-auto">
          <Rating style={{ maxWidth: 120,marginBottom:20 }} value={rating} readOnly />
          <p>{cooking_method}</p>
        </div>
        <div>
            {
                ingredients.map(item => <li>{item}</li>)
            }
        </div>
      </div>*/}
      <div className='card lg:card-side bg-base-100'>
        <div className='w-2/3'>
          <p>
            <Rating
              style={{ maxWidth: 120, marginBottom: 20 }}
              value={rating}
              readOnly
            />
          </p>
          <p>{cooking_method}</p>
          <div className='card-actions mt-6'>
            <button className='btn btn-primary'>Favorite</button>
          </div>
        </div>
        <div className='card-body'>
          <h2 className='card-title'>New album is released!</h2>
          <p>
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
