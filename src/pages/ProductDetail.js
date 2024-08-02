import React, { useEffect, useState } from "react";
import { IoIosContact } from "react-icons/io";
import person from "../assets/person.png";
import house from "../assets/house.png";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { MdBalcony } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../config";

const ProductDetail = () => {
	const { id } = useParams();
	const [productDetails, setProductDetails] = useState(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await axios.get(
					`${url}product/products/${id}`
				);
				setProductDetails(response.data);
				console.log("product detail", response.data);
				// Ensure to set the correct data
			} catch (error) {
				console.error("Error fetching product details:", error);
			}
		};

		if (id) {
			fetchProductDetails();
		}
	}, [id]);

	if (!productDetails) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div>
				<div className="grid m-8">
					<div>
						<h1 className="text-[#F11A7B] font-bold text-4xl">
							Rs.{productDetails.price}
						</h1>
					</div>
					<div className="text-lg">{productDetails.title}</div>
				</div>
				<div className="grid grid-cols-2 mob:flex mob:flex-col">
					<div className="rounded-lg m-8 items-center justify-center">
						<img src={productDetails.image} alt="house" width={600} height={400}/>
					</div>
					<div>
						<div className="grid grid-cols-3 border-0 bg-[#FFE5AD54] rounded-lg m-8 p-2 items-center justify-center">
							<div className="flex flex-wrap items-center">
								<div className="pt-1 pl-2 pr-2">
									<IoBed size={40} className="mob:hidden"/>
								</div>
								<div className="text-xl"> {productDetails.beds} Beds</div>
							</div>
							<div className="flex flex-wrap items-center">
								<div className="pt-1 pl-2 pr-2">
									<FaBath size={40} className="mob:hidden"/>
								</div>
								<div className="text-xl">{productDetails.baths} Baths</div>
							</div>
							<div className="flex flex-wrap items-center">
								<div className="pt-1 pl-2 pr-2">
									<MdBalcony size={40} className="mob:hidden"/>
								</div>
								<div className="text-xl">{productDetails.balcony} Balcony</div>
							</div>
						</div>
						<div className="border-0 bg-[#FFE5AD54] rounded-lg m-8 p-2">
							
								<h1 className="text-[#982176] font-semibold text-xl">
									Details
								</h1>
						
							<div className="flex flex-col gap-16">
								<div className="grid grid-cols-2">
									<div className="p-2">
										<h2 className="font-light text-xl mob:text-lg">
											Super Built Area
										</h2>
										<div className="font-semibold text-gray-600">
											{
												productDetails?.details
													?.superBuiltArea
											}{" "}
											sqft
										</div>
									</div>
									<div className="p-2">
										<h2 className="font-light text-xl mob:text-lg">Parking</h2>
										<div className="font-semibold">
											{productDetails?.details?.parking}
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="p-2">
										<h2 className="font-light text-xl mob:text-lg">
											Additional Rooms
										</h2>
										<div className="font-semibold">
											{
												productDetails?.details
													?.additionalRooms
											}
										</div>
									</div>
									<div className="p-2">
										<h2 className="font-light text-xl mob:text-lg">
											Furnished
										</h2>
										<div className="font-semibold">
											{productDetails?.details?.furnished}
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="p-2">
										<h2 className="font-light text-xl mob:text-lg">Floor </h2>
										<div className="font-semibold">
											{productDetails?.details?.floor}
										</div>
									</div>
									<div className="p-2 whitespace-nowrap mob:overflow-hidden">
										<h2 className="font-light text-xl mob:text-lg">
											Maintenance{" "}
										
										<span className="font-semibold">
											{
												productDetails?.details
													?.maintenance
											}
											/month
										</span>
										</h2>
										
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 ">
					<div className="border-2 rounded-lg p-8 m-8 col-span-3 text-lg mob:p-0">
						<div>
							<h1 className="text-[#982176] font-semibold text-xl">
								Features
							</h1>
						</div>
						<div className="grid grid-cols-3 mob:flex mob:flex-row">
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">
										Age of Construction
									</div>
									<div className="font-semibold">
										{
											productDetails?.features
												?.ageOfConstruction
										}
									</div>
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									{productDetails?.features?.visitorParking &&
										"Visitor Parking"}
								</div>
								{productDetails?.features?.waterStorage && (
									<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
										"Water Storage"
									</div>
								)}
							</div>
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">Facing</div>
									<div className="font-semibold">
										{productDetails?.features?.facing}
									</div>
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									{productDetails?.features?.park && "Park"}
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									{productDetails?.features
										?.friendlyNeighborhood &&
										"Friendly Neighbourhood"}
								</div>
							</div>
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">Status</div>
									<div className="font-semibold">
										{productDetails?.features?.status}
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="text-[#982176] font-semibold text-xl">
								Description
							</div>
							<div className="p-2 ">
								{productDetails.description}
							</div>
						</div>
					</div>
					{/*<div>
					<div className='text-[#982176]'>Find Us</div>
					<div> map paste here!</div>
				</div>*/}
				</div>
				<div className="flex flex-row items-center m-8 justify-between">
					<div className="flex ">
						<div className="pt-1 pl-2 pr-2">
							<IoIosContact size={40}/>{" "}
						</div>
						<div>{productDetails?.owner?.name}</div>
					</div>
					<div>
						<button class="bg-[#982176] px-10 py-2 text-xl rounded-2xl hover:bg-[#F11A7B] text-white ...">
							Contact owner
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
