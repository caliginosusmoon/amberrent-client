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
				setProductDetails(response.data); // Ensure to set the correct data
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
				<div className="bg-[#3E001F] flex flex-row text-[#F6FFCE] items-center sticky top-0 justify-between p-4 mx-8">
					<h2 className="text-2xl font-bold font-sans">LOGO</h2>
					<ul className="flex flex-row items-center right-0 justify-items-end justify-end gap-16">
						<li>List with us</li>
						<li>Stories</li>
						<li>My lists</li>
						<li>My shortlists</li>
						<BsPersonSquare />
					</ul>
				</div>
				<div className="grid m-8">
					<div>
						<h1 className="text-[#F11A7B] font-bold text-lg">
							Rs.{productDetails.price}
						</h1>
					</div>
					<div>{productDetails.title}</div>
				</div>
				<div className="grid grid-cols-2">
					<div className="rounded-lg m-8">
						<img src={house} alt="house" />
					</div>
					<div>
						<div className="grid grid-cols-3 border-0 bg-[#FFE5AD54] rounded-lg m-8 p-2">
							<div className="flex flex-wrap">
								<div className="pt-1 pl-2 pr-2">
									<IoBed />
								</div>
								<div> {productDetails.beds} beds</div>
							</div>
							<div className="flex flex-wrap">
								<div className="pt-1 pl-2 pr-2">
									<FaBath />
								</div>
								<div>{productDetails.baths} baths</div>
							</div>
							<div className="flex flex-wrap">
								<div className="pt-1 pl-2 pr-2">
									<MdBalcony />
								</div>
								<div>{productDetails.balconies} balcony</div>
							</div>
						</div>
						<div className="border-0 bg-[#FFE5AD54] rounded-lg m-8 p-2">
							<div>
								<h1 className="text-[#982176] font-semibold">
									Details
								</h1>
							</div>
							<div className="grid grid-rows-3">
								<div className="grid grid-cols-2">
									<div className="p-2">
										<div className="font-thin">
											Super Built Area
										</div>
										<div className="font-semibold">
											{productDetails.area} sqft
										</div>
									</div>
									<div className="p-2">
										<div className="font-thin">Parking</div>
										<div className="font-semibold">
											{productDetails.parking}
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="p-2">
										<div className="font-thin">
											Additional Rooms
										</div>
										<div className="font-semibold">
											{productDetails.additionalRooms}
										</div>
									</div>
									<div className="p-2">
										<div className="font-thin">
											Furnished
										</div>
										<div className="font-semibold">
											{productDetails.furnished}
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="p-2">
										<div className="font-thin">Floor </div>
										<div className="font-semibold">
											{productDetails.floor}
										</div>
									</div>
									<div className="p-2">
										<div className="font-thin">
											Maintenance{" "}
										</div>
										<div className="font-semibold">
											{productDetails.maintenance}/month
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="border-2 rounded-lg p-8 m-8 col-span-3">
						<div>
							<h1 className="text-[#982176] font-semibold">
								Features
							</h1>
						</div>
						<div className="grid grid-cols-3">
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">
										Age of Construction
									</div>
									<div className="font-semibold">
										{productDetails.ageOfConstruction}
									</div>
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									Visitor Parking
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									Water Storage
								</div>
							</div>
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">Facing</div>
									<div className="font-semibold">
										{productDetails.facing}
									</div>
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									Park
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									Friendly Neighbourhood
								</div>
							</div>
							<div>
								<div className="pt-2 pr-6 pl-4 pb-2">
									<div className="font-thin">Status</div>
									<div className="font-semibold">
										{productDetails.status}
									</div>
								</div>
								<div className="font-semibold pt-2 pr-6 pl-4 pb-2">
									Security
								</div>
							</div>
						</div>
						<div>
							<div className="text-[#982176] font-semibold">
								Description
							</div>
							<div className="p-2">
								{productDetails.description}
							</div>
						</div>
					</div>
					{/*<div>
					<div className='text-[#982176]'>Find Us</div>
					<div> map paste here!</div>
				</div>*/}
				</div>
				<div className="grid grid-cols-2 place-content-center m-8">
					<div className="flex justify-start">
						<div className="pt-1 pl-2 pr-2">
							<IoIosContact />{" "}
						</div>
						<div>{productDetails.contactName}</div>
					</div>
					<div>
						<button class="bg-[#982176] p-1 rounded-lg hover:bg-[#F11A7B] text-white ...">
							Contact owner
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
