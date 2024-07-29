import React from 'react';
import rectangle13 from "../assets/rectangle13.png";
import rectangle14 from "../assets/rectangle14.png";

function SelectPurpose() {
  return (
    <div className='w-full'>
  
          <div className='grid grid-cols-2 w-full h-[500px] py-10 gap-4'>
        <div style={{backgroundImage: `linear-gradient(to left, rgba(168,168, 168, 0.22), rgba(25, 25, 25,1)), url(${rectangle13})`, backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", }} className='border rounded-tr-lg rounded-br-xl'>
          <div className='py-6 px-8'>
          <h2 className='text-[#F11A7B] text-2xl font-bold'>Are you a property owner?</h2>
          <p className='text-white'>List your property here</p>
          </div>
        </div>
        <div style={{backgroundImage: `linear-gradient(to left, rgba(168,168, 168, 0.22), rgba(25, 25, 25,1)), url(${rectangle14})`, backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", }} className='border rounded-tl-lg rounded-bl-xl'>
         <div className='py-6 px-8'>
         <h2 className='text-[#F11A7B] text-2xl font-bold'>Looking for a Flatmate?</h2>
         <p className='text-white'>List your PG/hostel or flat with us</p>
         </div>
        </div>
        </div>
        </div>
   
  )
}

export default SelectPurpose
            