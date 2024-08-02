import React, { useState } from "react";
import { BiBath } from "react-icons/bi";
import { FaCircleChevronDown, FaCircleChevronRight } from "react-icons/fa6";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBalcony } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import rectangle23 from "../assets/rectangle23.png";

export const ProductCarddetail = ({ product }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [filled, setFilled] = useState(false);

	const navigate = useNavigate();

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};
	const handleClick = () => {
		setFilled(!filled);
	};

	const getDescription = (description) => {
		if (isExpanded) {
			return description;
		} else {
			return description.length > 100
				? `${description.substring(0, 30)}...`
				: description;
		}
	};

	return (
		<div className="bg-white border-gray-600 rounded-xl shadow mob:flex mob:flex-row mob:h-screen">
			<div className="grid grid-cols-3 gap-4 justify-between h-[250px] w-full mob:flex mob:flex-col mob:gap-10" style={{ gridTemplateColumns: '1fr 3fr 1fr' }}>
			<img
				src={product.image}
				alt=""
				className="rounded-tl-xl rounded-bl-xl w-full h-full"
			/>
			<div className="flex flex-col gap-4 mob:px-2">
				<div className="flex flex-row items-center justify-between mob:flex mob:flex-row mob:justify-between">
					<h2 className="text-xl font-medium ">{product.title}</h2>
					<div onClick={handleClick}>
						{filled ? (
							<HiHeart size={20} color="F11A7B" />
						) : (
							<HiOutlineHeart size={20} />
						)}
					</div>
				</div>
				<div className="grid grid-cols-3 items-center justify-between bg-gray-100 w-full border-gray-500 rounded-xl py-2 px-6 mr-4 mob:w-full">
					<div className="flex flex-row items-center">
						<IoBedOutline size={40} color="F11A7B" className="mob:hidden"/>
						<div className="">
							<h2 className="text-gray-600 font-light">
								Furnished
							</h2>
							<p className="text-black font-bold overflow-hidden">
								{product?.details?.furnished}
							</p>
						</div>
					</div>

					<div className="flex flex-row items-center">
						<BiBath size={40} color="F11A7B"className="mob:hidden" />
						<div className="">
							<h2 className="text-gray-600 font-light">
								Bathroom
							</h2>
							<p className="text-black font-bold">
								{product?.baths}
							</p>
						</div>
					</div>

					<div className="flex flex-row items-center">
						<MdOutlineBalcony size={40} color="F11A7B"className="mob:hidden" />
						<div className="">
							<h2 className="text-gray-600 font-light">
								Balcony
							</h2>
							<p className="text-black font-bold">
								{product?.balcony}
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row mob:overflow-hidden">
					<p className="w-[900px] text-gray-700 font-medium text-sm mob:overflow-hidden">
						{getDescription(product.description)}
					</p>
					<button onClick={handleToggle} className="text-black">
						{isExpanded ? (
							<FaCircleChevronDown />
						) : (
							<FaCircleChevronRight />
						)}
					</button>
				</div>
			</div>
			<div className="bg-gray-200 border rounded-tr-xl rounded-br-xl">
				<div className="flex flex-col items-center justify-center gap-2 px-6 py-4">
					<h2 className="text-xl font-extrabold">
						₹{product?.price * 3}
					</h2>
					<p className="text-sm font-extralight">Security Deposit</p>
					<button className="border-[#3E001F] text-[#3E001F] font-bold py-2 px-10 border rounded-full text-nowrap">
						Contact Owner
					</button>
					<button
						className="bg-[#3E001F] text-white font-bold py-2 px-14 border rounded-full"
						onClick={() => navigate(`/product/${product?._id}`)}
					>
						Know More
					</button>
				</div>
			</div>
			</div>
		</div>
	);
};
export default ProductCarddetail;
