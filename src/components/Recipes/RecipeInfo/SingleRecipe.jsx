import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SingleRecipe = ({ recipe }) => {
  const [isFold, setIsFold] = useState(true);
  const [isDisable,setIsDisable] = useState(false)

  const handleFavorite = () => {
    toast.success("Item Added Successfully")
    setIsDisable(true)
  }

  const { recipe_name, cooking_method, ingredients, rating } = recipe;

  return (
    <div className='card mt-5 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{recipe_name}</h2>
        <div>
          <p className='mb-5'>
            {isFold ? cooking_method.slice(0, 250) : cooking_method}....{" "}
            {isFold ? (
              <button onClick={() => setIsFold(false)} className='text-primary'>
                read more
              </button>
            ) : (
              <button onClick={() => setIsFold(true)} className='text-primary'>
                read less
              </button>
            )}
          </p>
          <Rating value={rating} style={{ maxWidth: 120,marginBottom:15 }} readOnly />
          <ul>
            {ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='card-actions absolute bottom-5 right-5'>
          <button onClick={handleFavorite} disabled={isDisable} className='btn btn-primary'>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
