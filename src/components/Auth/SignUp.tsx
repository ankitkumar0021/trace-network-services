'use client'
import { getResetPassword } from "@/routes/routes";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);
  
  const [showSignUp, setShowSignUp] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    agreeToPolicy: false
  });

  const toggleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignUp(!showSignUp);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {!showSignUp ? (
          <>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border rounded-sm px-4 py-2 outline-none text-sm" 
            />
            <div className="relative">
              <input 
                type={showSignInPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full border rounded-md px-4 py-2 outline-none text-sm pr-12" 
              />
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                onClick={() => setShowSignInPassword(!showSignInPassword)}
              >
                {showSignInPassword ? <FaEyeSlash color="#333333"/> : <FaEye color="#333333"/>}
              </div>
            </div>
            <div className="flex justify-between items-center text-sm my-8">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-rubik font-light text-sm text-[#333333]">Remember me</span>
              </label>
              <Link href={getResetPassword()} className="text-primary font-semibold underline">
                I forgot my password
              </Link>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="md:col-span-2 bg-primary w-fit text-white font-semibold py-5 px-10 transition transform hover:scale-105 duration-300 cursor-pointer">
                SIGN IN
              </button>
            </div>
            <p className="text-center text-sm">
              <a 
                href="#" 
                className="text-primary font-semibold underline" 
                onClick={toggleSignUp}
              >
                Sign up 
              </a> 
              if you don&apos;t have an account
            </p>
          </>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
              value={formData.email}
              onChange={handleInputChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type={showSignUpPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full border rounded-md px-4 py-2 outline-none text-sm pr-12"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <div 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                >
                  {showSignUpPassword ? <FaEyeSlash color="#333333"/> : <FaEye color="#333333"/>}
                </div>
              </div>
              
              <div className="relative">
                <input
                  type={showSignUpConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className="w-full border rounded-md px-4 py-2 outline-none text-sm pr-12"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                />
                <div 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                  onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                >
                  {showSignUpConfirmPassword ? <FaEyeSlash color="#333333"/> : <FaEye color="#333333"/>}
                </div>
              </div>
            </div>
            
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
              value={formData.phone}
              onChange={handleInputChange}
            />
            
            <input
              type="text"
              name="address"
              placeholder="House number and street name"
              className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
              value={formData.address}
              onChange={handleInputChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="postcode"
                placeholder="Enter your postcode / zip"
                className="w-full border rounded-sm px-4 py-2 outline-none text-sm"
                value={formData.postcode}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex items-start gap-3 mt-6">
              <input
                type="checkbox"
                name="agreeToPolicy"
                className="mt-1 w-8 h-8"
                checked={formData.agreeToPolicy}
                onChange={handleInputChange}
              />
              <p className="text-sm font-rubik font-normal text-[#333333]">
                Your personal data will be used to support your experience throughout this website, 
                to manage access to your account, and for other purposes described in our 
                <Link href="/privacy-policy" className="text-primary font-semibold underline"> privacy policy</Link>.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                type="submit" 
                className="bg-primary w-full md:w-fit text-white font-semibold py-5 px-10 transition transform hover:scale-105 duration-300 cursor-pointer"
              >
                SIGN UP
              </button>
            </div>
            
            <p className="text-center text-sm mt-4">
              <a 
                href="#" 
                className="text-primary font-semibold underline" 
                onClick={toggleSignUp}
              >
                Sign in{" "}
              </a> 
              if you already have an account
            </p>
          </div>
        )}
      </div>
    </div>
  );
}