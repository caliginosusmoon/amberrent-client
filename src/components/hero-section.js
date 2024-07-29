import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { LuLocate } from 'react-icons/lu';
import group13 from "../assets/group13.png"
import group15 from "../assets/group15.png"
import group20 from "../assets/group20.png"
import homebg from "../assets/homebg.png"


function Hero_Section() {

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
    const [selectedState, setSelectedState] = useState("");
  
    const handleChange = (event) => {
      setSelectedState(event.target.value);
    }; 

  return (
    <div className='w-full flex flex-row px-8'>
      <div style={{ backgroundImage: `url(${homebg})`, backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",}}
        className='w-full border rounded-b-xl flex flex-col items-center pt-36 bottom-0 mb-10'>

        <h2 className='text-white text-8xl font-semibold'>LIVE WITH PRIDE</h2>

      <div style={{
       backgroundImage: "linear-gradient(to top, #FFE5AD, #F6FFCE)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:'cover',
        width:1150
      }}
      className='border rounded-tl-2xl rounded-tr-2xl w-[900px] py-2 items-center'>
         <ul className='flex flex-row text-[#3E001F] items-center justify-around gap-20 text-md py-4'>
          <li className='hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold'>Rental</li>
          <li className='hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold'>Flatmate</li>
          <li className='hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold'>Co-Living/PG</li>
         </ul>

         <div className=' flex flex-row justify-between items-center bg-white py-2 border rounded-2xl shadow-inner px-4'>
         <div className='flex flex-row items-center'>
          <CiLocationOn size={20}/>
      <select id="state-dropdown" value={selectedState} onChange={handleChange} style={{outline: 'none',}}>
   
        <option value="" disabled><LuLocate/> Odisha</option>
        {statesOfIndia.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}

      </select>
      <p className='text-4xl font-medium text-gray-300'>|</p>
  </div>
      <button className='text-[#F6FFCE] bg-[#3E001F] border-none rounded-2xl px-10 py-1 text-base'>Search</button>
      {/* {selectedState && <p>You selected: {selectedState}</p>} */}
         </div>

         <ul className='flex flex-row items-center justify-around py-6'>
          <li className='flex flex-row items-center gap-2'>
            <img src={group20}width={50} height={50}></img>
            <div className='flex flex-col'>
              <p className='text-[#F11A7B] font-bold text-2xl'>5000+</p>
              <p className='font-bold text-md'>Houses Rented</p>
            </div>
          </li>
          <li className='flex flex-row items-center gap-2'>
          <img src={group13}width={50} height={50}></img>
          <div>
              <p className='text-[#F11A7B] font-bold text-2xl'>10000+</p>
              <p className='font-bold text-md'>Happy Customers</p>
            </div>
          </li>
          <li className='flex flex-row items-center gap-2'>
          <img src={group15} width={50} height={50}></img>
          <div>
              <p className='text-[#F11A7B] font-bold text-2xl'>2000+</p>
              <p className='font-bold text-md'>Trusted Owners</p>
            </div>
          </li>
         </ul>
      </div>
      </div>
    </div>
  )
}


export default Hero_Section;