import React from 'react';
import rectangle23 from "../assets/rectangle23.png";
import riluggagedepositfill from "../assets/ri_luggage-deposit-fill.png";
import cilcash from "../assets/cil_cash.png";
import carbon_floorplan from "../assets/carbon_floorplan.png";
import { BiHeart } from 'react-icons/bi';


function BelongAndThrive() {
  return (
    <div className='w-full'>
        <div className='bg-[#F11A7B] uppercase w-full flex items-center justify-center'>
            <p className='text-white text-6xl font-extrabold'>Belong And Thrive</p>
        </div>

       <div className='px-10 py-6'>
         
       <p className='text-2xl font-bold pt-6'>Recommended Properties</p>
        <p className='text-base font-light pb-6'>Your place of pride with us</p>
        
        <div className='grid grid-cols-4 items-center gap-2'>
         {[
            {
                image: rectangle23,
                title:"Semi Furnished 2BHK in Mumbai",
                description:"Bandra West, Mumbai",
                iconnew: riluggagedepositfill,
                title2:"₹25000",
                description2:"Rent/Month",
                icon2:cilcash,
                title3:"₹80000",
                description3:"Security Deposit",
                icon3:carbon_floorplan,
                title4:"750",
                description4:"Sqrt Area",

            },
            {
              image: rectangle23,
              title:"Semi Furnished 2BHK in Mumbai",
              description:"Bandra West, Mumbai",
              iconnew: riluggagedepositfill,
              title2:"₹25000",
              description2:"Rent/Month",
              icon2:cilcash,
              title3:"₹80000",
              description3:"Security Deposit",
              icon3:carbon_floorplan,
              title4:"750",
              description4:"Sqrt Area",
            },
            {
              image: rectangle23,
              title:"Semi Furnished 2BHK in Mumbai",
              description:"Bandra West, Mumbai",
              iconnew: riluggagedepositfill,
              title2:"₹25000",
              description2:"Rent/Month",
              icon2:cilcash,
              title3:"₹80000",
              description3:"Security Deposit",
              icon3:carbon_floorplan,
              title4:"750",
              description4:"Sqrt Area",
            },
            {
              image: rectangle23,
              title:"Semi Furnished 2BHK in Mumbai",
              description:"Bandra West, Mumbai",
              iconnew: riluggagedepositfill,
              title2:"₹25000",
              description2:"Rent/Month",
              icon2:cilcash,
              title3:"₹80000",
              description3:"Security Deposit",
              icon3:carbon_floorplan,
              title4:"750",
              description4:"Sqrt Area",
            }
         ].map((card) => (
            <div key={card.title} className='bg-white shadow-2xl flex flex-col rounded-2xl'>
               <img src={card.image} width={400} height={500} />

              <div className='p-4'>
              <div className='pt-2 pb-10'>
              <h2 className='flex flex-row items-center justify-between text-lg font-semibold'>{card.title} <BiHeart/></h2>
              <p className='text-gray-600'>{card.description}</p>
                </div>

              <div className='grid grid-cols-5 gap-2 justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <img src={card.icon2} width={40} height={40}/>
                <h2 className='text-md font-bold whitespace-nowrap'>{card.title2}</h2>
                <p className='whitespace-nowrap font-medium text-xs'>{card.description2}</p>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'gray', margin: '0 20px' }}></div>

                <div  className='flex flex-col items-center'>
                <img src={card.iconnew} width={40} height={40}/>
                <h2 className='text-md font-bold whitespace-nowrap'>{card.title3}</h2>
                <p className='whitespace-nowrap font-medium text-xs'>{card.description3}</p>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'gray', margin: '0 20px' }}></div>

                <div  className='flex flex-col items-center'>
                <img src={card.icon3} width={40} height={40}/>
                <h2 className='text-md font-bold whitespace-nowrap'>{card.title4}</h2>
                <p className='whitespace-nowrap font-medium text-xs'>{card.description4}</p>
                </div>  
                </div>

                </div>
           </div>
            
         ))
         }
        </div>
          
      
        </div>
    </div>
  )
}

export default BelongAndThrive