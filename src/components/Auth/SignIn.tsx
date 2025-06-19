'use client'

import React, { useState } from 'react';
import { getResetPassword } from '@/routes/routes';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import SignUp from './SignUp';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const formik = useFormik({
    initialValues: { 
      name: '', 
      password: '', 
      remember: false 
    },
    
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  if (showSignUp) return <SignUp />;

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full sm:max-w-1/2 space-y-6">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
              className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2 outline-none text-sm pr-12"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.remember}
                className="w-5 h-5"
              />
              <span className="font-rubik font-light text-sm text-[#333333]">Remember me</span>
            </label>
            <Link href={getResetPassword()} className="text-primary font-semibold underline">
              I forgot my password
            </Link>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-primary w-fit text-white font-semibold py-5 px-10 transition transform hover:scale-105 duration-300 cursor-pointer">
              SIGN IN
            </button>
          </div>
        </form>

        <p className="text-center text-sm">
          <button className="text-primary font-semibold underline" onClick={() => setShowSignUp(true)}>
            Sign up
          </button>{' '}
          if you don’t have an account
        </p>
      </div>
    </div>
  );
}
