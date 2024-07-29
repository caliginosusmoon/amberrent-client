import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import storyprofile from "../assets/story-profile.png";
import starfilled from "../assets/filled-star.png";
import starunfilled from "../assets/unfilled-star.png";

function StoriesHome() {
    const [rating, setRating] = useState(0);
  
    const handleClick = (index) => {
      setRating(index + 1);
    };
  return (
    <div>
         <div className='flex flex-row items-center gap-4 text-[#3E001F] py-10'>
           <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
           <span className='font-extrabold text-2xl whitespace-nowrap'>Real Stories, Real Trust</span>
           <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
        </div>
         <div className='grid grid-cols-3 gap-5 items-center'>
        <div className='bg-white hover:bg-[#F11A7B] hover:-translate-y-7 duration-300 border rounded-xl flex flex-col items-center shadow-xl w-[480px] h-[600px] py-8'>
            <img src={storyprofile} width={150} height={150} className='py-6'/>
            <div className=' flex flex-col items-center'>
                <h2 className='text-lg font-extrabold'>Nina Hundson</h2>
                <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{ 
                    color: index < rating ? 'yellow' : 'gray', 
                    cursor: 'pointer', 
                    fontSize: '24px' 
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            </div>
            <div className='py-10 px-16 pb-10'>
                <h2 className='text-lg font-bold pb-2'>Heading of review</h2>
                <p className='text-xs font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus ultrices felis, sed aliquam dolor dapibus at. Duis fermentum dolor eu faucibus commodo. In ut ex et elit pellentesque varius. Etiam varius, arcu rhoncus sagittis dictum, nisi ex sodales tellus, et ullamcorper eros arcu in lorem.</p>
            </div>
        </div>

        <div className='bg-white hover:bg-[#F11A7B] hover:-translate-y-7 duration-300 border rounded-xl flex flex-col items-center shadow-xl w-[480px] h-[600px] py-8'>
            <img src={storyprofile} width={150} height={150} className='py-6'/>
            <div className=' flex flex-col items-center'>
                <h2 className='text-lg font-extrabold'>Nina Hundson</h2>
                <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{ 
                    color: index < rating ? 'yellow' : 'gray', 
                    cursor: 'pointer', 
                    fontSize: '24px' 
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            </div>
            <div className='py-10 px-16 pb-10'>
                <h2 className='text-lg font-bold pb-2'>Heading of review</h2>
                <p className='text-xs font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus ultrices felis, sed aliquam dolor dapibus at. Duis fermentum dolor eu faucibus commodo. In ut ex et elit pellentesque varius. Etiam varius, arcu rhoncus sagittis dictum, nisi ex sodales tellus, et ullamcorper eros arcu in lorem.</p>
            </div>
        </div>

        <div className='bg-white hover:bg-[#F11A7B] hover:-translate-y-7 duration-300 border rounded-xl flex flex-col items-center shadow-xl w-[480px] h-[600px] py-8'>
            <img src={storyprofile} width={150} height={150} className='py-6'/>
            <div className=' flex flex-col items-center'>
                <h2 className='text-lg font-extrabold'>Nina Hundson</h2>
                <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{ 
                    color: index < rating ? 'yellow' : 'gray', 
                    cursor: 'pointer', 
                    fontSize: '24px' 
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            </div>
            <div className='py-10 px-16 pb-10'>
                <h2 className='text-lg font-bold pb-2'>Heading of review</h2>
                <p className='text-xs font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus ultrices felis, sed aliquam dolor dapibus at. Duis fermentum dolor eu faucibus commodo. In ut ex et elit pellentesque varius. Etiam varius, arcu rhoncus sagittis dictum, nisi ex sodales tellus, et ullamcorper eros arcu in lorem.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default StoriesHome