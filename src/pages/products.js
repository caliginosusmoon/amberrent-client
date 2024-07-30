import React, { useState } from "react";
import Hero_Section from "../components/hero-section";
import WhyChooseUs from "../components/why-choose-us";
import BelongAndThrive from "../components/belong-and-thrive";
import SelectPurpose from "../components/select-purpose";
import StoriesHome from "../components/stories-home";
import { BsPersonSquare } from "react-icons/bs";
import rectangle23 from "../assets/rectangle23.png";
import { HiHeart } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBath} from "react-icons/bi";
import { MdOutlineBalcony } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import { FaCircleChevronDown, FaCircleChevronRight } from "react-icons/fa6";

function ProductsPage() {
     const [isExpanded, setIsExpanded]=useState(false);
     const [filled, setFilled]=useState(false);
     const handleToggle=()=>{
        setIsExpanded(!isExpanded);
       
     }
      const handleClick=()=>{
        setFilled(!filled);
      }
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

            <div className="w-full px-8 py-10">
             <div className=" w-full">
                <h2 className="text-[#F11A7B] text-3xl font-bold pb-10">Our List of Houses</h2>
                <div className="bg-white border-gray-600 rounded-xl shadow flex flex-row justify-between h-[200px]">
                    <img src={rectangle23} alt="" className="rounded-tl-xl rounded-bl-xl"/>
                   <div className="flex flex-col gap-4">
                   <div className="flex flex-row items-center justify-between">
                        <h2 className="text-xl font-medium ">1BHK house for rent in Kalinganagar, Bhubaneswar</h2>
                         <div onClick={handleClick}>
                            {filled?(<HiHeart size={20} color="F11A7B"/>):(<HiOutlineHeart size={20}/>)}
                         </div>
                    </div>
                  <div className="grid grid-cols-3 items-center justify-between bg-gray-200 w-full border-gray-500 rounded-xl py-2 px-6 ">
                  <div className="flex flex-row items-center">
                        <IoBedOutline size={40} color="F11A7B"/>
                        <div className="">
                        <h2 className="text-gray-600 font-light">Furnished</h2>
                        <p className="text-black font-bold">Unfurnished</p>
                        </div>
                    </div>
              
                    <div className="flex flex-row items-center">
                        <BiBath size={40} color="F11A7B"/>
                        <div className="">
                        <h2 className="text-gray-600 font-light">Bathroom</h2>
                        <p className="text-black font-bold">1</p>
                        </div>
                    </div>
                   
                    <div className="flex flex-row items-center">
                        <MdOutlineBalcony size={40} color="F11A7B"/>
                        <div className="">
                        <h2 className="text-gray-600 font-light">Balcony</h2>
                        <p className="text-black font-bold">1</p>
                        </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                  <p className="w-[900px] text-gray-700 font-medium text-sm">{isExpanded? "A good house for rent in a friendly neighborhood features a well-maintained...":"A good house for rent in a friendly neighborhood features a well-maintained, spacious layout with modern amenities and a safe environment. It is located near essential services, schools, parks, and has a welcoming community with low crime rates. The area promotes a sense of community through regular events and well-kept public spaces"} </p>
                  <button onClick={handleToggle} className="text-black">{isExpanded ?<FaCircleChevronDown/>:<FaCircleChevronRight/>}</button>
                  
                    </div>
                     </div>
                   <div className="bg-gray-200 border rounded-tr-xl rounded-br-xl">
                    <div className="flex flex-col items-center justify-center gap-2 px-6 py-4">
                    <h2 className="text-xl font-extrabold">₹ 5000</h2>
                    <p className="text-sm font-extralight">Security Deposit</p>
                    <button className="border-[#3E001F] text-[#3E001F] font-bold py-2 px-10 border rounded-full">Contact Owner</button>
                    <button className="bg-[#3E001F] text-white font-bold py-2 px-14 border rounded-full">Know More</button>
                    </div>
                   </div>
                </div>
             </div>
            </div>

		</div>
	);
}

export default ProductsPage;
