import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";
import { Toaster, toast } from "react-hot-toast";

const Review = () => {

  const handleReview = (e) => {
    e.preventDefault()
    toast.success("Thanks for your feedback")
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center pb-10'>
        Add Your Review Here
      </h1>
      <form onSubmit={handleReview} className='text-center px-5'>
        <div className='form-control pb-2 max-w-lg mx-auto w-full'>
          <label className='label'>
            <span className='label-text'>Your Email</span>
          </label>
          <input
            type='email'
            placeholder='email'
            className='input input-bordered '
            required
          />
            <div className="flex justify-between items-center py-2">
              <p className="font-semibold">Rate Our Food:</p>
            <Rating value={0} style={{ maxWidth: 120 }} />
            </div>
        </div>
        <textarea
          placeholder='Massage'
          className='textarea textarea-bordered textarea-lg w-full max-w-lg mx-auto block'
          required
        ></textarea>
        <button className='btn btn-primary mt-2 mb-14' type='submit'>
          Submit
        </button>
      </form>
        <Toaster/>
    </div>
  );
};

export default Review;
