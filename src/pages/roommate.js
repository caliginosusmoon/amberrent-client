import React from 'react'
import person from '../assets/person.png';
import { BsPersonSquare } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { MdBalcony } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";





function Roommate() {
  return (
    <div>
        <div className="bg-[#3E001F] flex flex-row text-[#F6FFCE] items-center sticky top-0 justify-between p-4 mx-8 ">
                <h2 className="text-2xl font-bold font-sans">LOGO</h2>
                <ul className="flex flex-row items-center right-0 justify-items-end justify-end gap-16">
                    <li>List with us</li>
                    <li>Stories</li>
                    <li>My lists</li>
                    <li>My shortlists</li>
                    <BsPersonSquare />
                </ul>
        </div>
        <div className='border-0 bg-[#CCF4FA80] rounded-lg m-8 p-8'>
            <div>
                <div className='grid grid-cols-4 pb-4'>
                    <div>
                        <img src={person} alt="person" />
                    </div>
                    <div className='col-span-3'>
                        <div className='p-4'>
                            <div className='font-semibold text-2xl'>Rohan kapoor</div>
                            <div className='flex flex-wrap'>
                                <div className='pt-1 pl-2 pr-2'><FaLocationDot /></div>
                                <div>address</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 p-4'>
                            <div className='p-2'>
                                <div className='font-thin'>Rent</div>
                                <div className='font-bold'>Rs. 5000</div>
                            </div>
                            <div className='p-2'>
                                <div className='font-thin'>age</div>
                                <div className='font-bold'>25</div>
                            </div>
                            <div className='p-2'>
                                <div className='font-thin'>looking for</div>
                                <div className='font-bold'>any</div>
                            </div>
                            <div className='p-2'>
                                <div className='font-thin'>looking for</div>
                                <div className='font-bold'>Roommate</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid p-2 grid-cols-2'>
                    <div className='font-semibold'>looking for roommate? contact rohan </div>
                    <div className='flex flex-wrap'>
                        <div className='pt-1 pl-2 pr-6'><IoCallOutline /></div>
                        <div className='pt-1 pl-2 pr-6'><FaRegMessage /></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-2 rounded-lg m-8 p-8'>
            <div>
                <div className='text-[#F11A7B] font-bold text-lg'>Rs. 10000</div>
                <div className='flex flex-wrap'><div className='pt-1 pl-2 pr-2'><FaLocationDot /></div><div>address</div></div>
            </div>
            <div className='grid grid-cols-3 border-0 bg-[#CCF4FA80] rounded-lg m-8 p-2'>
                <div className='flex flex-wrap'><div className='pt-1 pl-2 pr-2'><IoBed /></div><div> 2 beds</div></div>
                <div className='flex flex-wrap'><div className='pt-1 pl-2 pr-2'><FaBath /></div><div>2 baths</div></div>
                <div className='flex flex-wrap'><div className='pt-1 pl-2 pr-2'><MdBalcony /></div><div>1 balcony</div></div>
            </div>
            <div>
                <div className='text-[#982176] font-semibold'>Details</div>
                <div className='grid grid-cols-4'>
                    <div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                        <div className='p-2'>
                            <div className='font-thin'>Furnished</div>
                            <div className='font-bold'>Semi furnished</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='m-8'>
            <div className='text-[#982176] font-semibold'>Description</div>
            <div>A good house for rent in a friendly neighborhood features a well-maintained, spacious layout with modern amenities and a safe environment. It is located near essential services, schools, parks, and has a welcoming community with low crime rates. The area promotes a sense of community through regular events and well-kept public spaces.. </div>
        </div>
    </div>
  )
}

export default Roommate;