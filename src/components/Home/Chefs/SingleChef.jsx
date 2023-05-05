import React from "react";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const SingleChef = ({ chefInfo }) => {
  const {
    image,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    id,
  } = chefInfo;
  return (
    <>
      <div className='card bg-base-100 shadow-xl mx-5 md:mx-0'>
        <figure className='w-full'>
          <LazyLoad>
            <img
              src={image}
              alt={chef_name}
              className='rounded-md w-full aspect-video lg:h-72'
            />
          </LazyLoad>
        </figure>
        <div className='card-body justify-between'>
          <div className='flex flex-col gap-2'>
            <div className="border-b-2 pb-2">
              <h2 className='card-title'>{chef_name}</h2>
            </div>
            <p>Experience: {years_of_experience} year</p>
            <p>Recipe: {number_of_recipes} items </p>
          </div>
          <div className='card-actions justify-between items-center'>
            <div className='flex items-center gap-1 text-xl'>
              <FaHeart className='text-red-600' />
              <span> {likes}</span>
            </div>
            <Link to={`recipes/${id}`} className='btn btn-primary'>
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChef;
