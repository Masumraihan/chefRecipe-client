import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

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
        className='hero min-h-[75vh]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className=' flex flex-col w-full items-center gap-5 lg:flex-row '>
            <div className='grid w-1/2 flex-grow card rounded-box place-items-center'>
              <img className=" h-56 aspect-video rounded-2xl" src={image} alt="" />
              <h1 className='mb-5 text-5xl font-bold'>{chef_name}</h1>
              <p className='mb-5 '>{short_bio}</p>
            </div>
            <div className='divider lg:divider-horizontal'>OR</div>
            <div className='text-2xl bg-base-300 bg-opacity-40 text-black px-5 py-10 font-semibold w-1/2 md:text-start flex-grow card rounded-box '>
              <p className='flex items-center gap-2'>
                {" "}
                <FaLongArrowAltRight className='text-primary' />{" "}
                {years_of_experience} years of Experience
              </p>
              <p className='flex items-center gap-2'>
                {" "}
                <FaLongArrowAltRight className='text-primary' />{" "}
                {number_of_recipes} Recipes
              </p>
              <p className='flex items-center gap-2'>
                <FaLongArrowAltRight className='text-primary' />
                <span>{likes} people likes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeBanner;
