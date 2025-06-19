import React from "react";
import { BsFillTagsFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const locationData = {
  name: "Amanda Food Court",
  address: "45 North Street, Uitenhage, Eastern Cape, 5043",
  phone: "041 111 3964",
  email: "support@agilelogix.com",
  daysOpen: "Mon, Tues, Wed, Thur, Fri, Sat, Sun",
  categories: ["Restaurants", "Travel"],
  directionsUrl: "https://maps.google.com/?q=45+North+Street+Uitenhage",
  websiteUrl: "https://amandafoodcourt.example.com",
};
export default function LocationCard() {
  return (
    <div className="border-b border-gray-300 p-4">
      <h2 className="text-base font-michroma font-semibold text-[#32373C] mb-4">{locationData.name}</h2>
      <div className="flex items-start gap-3 mb-2">
        <IoLocationOutline color="#cb2800" className="mt-1" />
        <p className="text-[#555D66] font-rubik font-normal text-sm">{locationData.address}</p>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <CiMobile3 color="#cb2800" className="mt-1" />      
        <p className="text-[#555D66] font-rubik font-normal text-sm">{locationData.phone}</p>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <IoMailOutline  color="#cb2800" className="mt-1" />
        <p className="text-[#555D66] font-rubik font-normal text-sm">{locationData.email}</p>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <SlCalender  color="#cb2800" className="mt-1" />
        <p className="text-[#555D66] font-rubik font-normal text-sm">{locationData.daysOpen}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <BsFillTagsFill   color="#cb2800" className="mt-1" />
        {locationData.categories.map((cat, idx) => (
          <span
            key={idx}
            className="text-gray-700 hover:text-primary cursor-pointer"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <a
          href={locationData.directionsUrl}
          className="flex-1 inline-flex justify-center items-center bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary transition-colors"
        >
          Directions
        </a>
        <a
          href={locationData.websiteUrl}
          className="flex-1 inline-flex justify-center items-center border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          Website
        </a>
      </div>
    </div>
  );
}
