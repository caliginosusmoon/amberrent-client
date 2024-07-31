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
	const [productDetails, setProductDetails] = useState();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const product = await axios.get(`${url}product/products/${id}`);
				setProductDetails(product);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<div>
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
					<div className="grid m-8">
						<div>
							<h1 className="text-[#F11A7B] font-bold text-lg">
								Rs.14,900
							</h1>
						</div>
						<div>
							2 bhk 125 sq-ft flat/apartment for rent in kalinga
							nagar, Bhubaneswar
						</div>
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
									<div> 2 beds</div>
								</div>
								<div className="flex flex-wrap">
									<div className="pt-1 pl-2 pr-2">
										<FaBath />
									</div>
									<div>2 baths</div>
								</div>
								<div className="flex flex-wrap">
									<div className="pt-1 pl-2 pr-2">
										<MdBalcony />
									</div>
									<div>1 balcony</div>
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
												{" "}
												1250sqft
											</div>
										</div>
										<div className="p-2">
											<div className="font-thin">
												Parking
											</div>
											<div className="font-semibold">
												{" "}
												1 Car
											</div>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="p-2">
											<div className="font-thin">
												Additional Rooms
											</div>
											<div className="font-semibold">
												{" "}
												1 Store Room
											</div>
										</div>
										<div className="p-2">
											<div className="font-thin">
												Furnished
											</div>
											<div className="font-semibold">
												{" "}
												Semi Furnished
											</div>
										</div>
									</div>
									<div className="grid grid-cols-2">
										<div className="p-2">
											<div className="font-thin">
												Floor{" "}
											</div>
											<div className="font-semibold">
												2 of 2 (Available)
											</div>
										</div>
										<div className="p-2">
											<div className="font-thin">
												Maintenance{" "}
											</div>
											<div className="font-semibold">
												1000/month
											</div>
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
										Less than 5 years
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
									<div className="font-semibold"> South</div>
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
										Immediately
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
								Best location newly built Semifurnished flat . A
								Well maintained flat with park infront ,parking
								and open terrace. Best suited for Working
								Professionals e.g Doctor, Medical Students on
								flat sharing, other Salaried.
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
						<div>Siya Singh</div>
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
