import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {
    const recipeData = useLoaderData()
    const {id} = useParams()
    return (
        <div>
            <h1>this is recipes</h1>
        </div>
    );
};

export default Recipes;