import React from "react";

const Review = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center pb-10'>
        Add Your Review Here
      </h1>
      <form action='' className='text-center px-5'>
        <textarea
          placeholder='Massage'
          className='textarea textarea-bordered textarea-lg w-full max-w-lg mx-auto block'
        ></textarea>
        <button className='btn btn-primary mt-2 mb-14' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
