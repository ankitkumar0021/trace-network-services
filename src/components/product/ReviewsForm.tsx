import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ReviewsForm() {

  const validationSchema = Yup.object().shape({
    review: Yup.string().required("Review is required"),
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    agree: Yup.boolean()
      .oneOf([true], "You must agree to save your information")
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      review: "",
      fullName: "",
      email: "",
      agree: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return (
    <>
      <div className='space-y-4'>
        <p className='text-sm text-[#212121]'>There are no reviews yet.</p>
        <h2 className='text-2xl text-[#212121]'>Be the first to review “HIKMICRO 5202ZC Charger”</h2>
        <div className='text-sm text-[#333333]'><p>Your email address will not be published. Required fields are marked *</p></div>
        {/* Rating Stars */}
        {/* <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="text-2xl"
            >
              <MdStar
                className={`${
                  star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'
                } transition-colors`}
              />
            </button>
          ))}
          <span className="text-sm text-[#212121] ml-2">{rating} of 5 stars</span>
        </div> */}
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        <div>
          <textarea
            name="review"
            placeholder="Your review..."
            className="w-full h-32 border-1 px-4 py-3 text-[#2d2c44] placeholder:text-[#2d2c44]/50"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.review}
          />
          {touched.review && errors.review && (
            <p className="text-primary text-sm mt-1">{errors.review}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Your Full Name"
              className="w-full h-12 border-1 px-4 text-[#2d2c44] placeholder:text-[#2d2c44]/50"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <p className="text-primary text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full h-12 border-1 px-4 text-[#2d2c44] placeholder:text-[#2d2c44]/50"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className="text-primary text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            className="h-5 w-5 mt-1 text-[#2d2c44]"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.agree}
          />
          <label htmlFor="agree" className="text-[#2d2c44]">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        {touched.agree && errors.agree && (
          <p className="text-primary text-sm mt-1">{errors.agree}</p>
        )}

        <button 
          type="submit" 
          className="font-medium text-white rounded-full px-12 py-4 bg-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}