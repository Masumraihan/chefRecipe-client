import React from "react";
import { FaHeart } from "react-icons/fa";

const RecipeBanner = ({ chef }) => {
  const {
    chef_name,
    image,
    short_bio,
    years_of_experience,
    number_of_recipes,
    likes,
    id,
  } = chef;
  return (
    <>
      <div
        className='hero min-h-[70vh]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>{chef_name}</h1>
            <p className='mb-5 '>
              {short_bio}
            </p>
            <div className="text-xl ">
                <p>{years_of_experience} years of Experience</p>
                <p>{number_of_recipes} Recipes</p>
                <p className="flex justify-center items-center gap-2"><FaHeart className="text-red-600"/> <span>{likes} people likes</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeBanner;
