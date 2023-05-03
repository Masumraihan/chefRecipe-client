import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeBanner from "./RecipeBanner/RecipeBanner";
import RecipeInfo from "./RecipeInfo/RecipeInfo";

const Recipes = () => {
  const [chef, setChef] = useState({});
  const recipeData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const loadChefData = async () => {
      const { data } = await axios.get(
        `https://chef-recipe-assignment-server-masumraihan.vercel.app/chefs/${id}`
      );
      setChef(data);
    };
    loadChefData();
  }, []);
  return (
    <>
      <RecipeBanner chef={chef} />
      <RecipeInfo recipeData={recipeData} />
    </>
  );
};

export default Recipes;
