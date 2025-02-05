import React, { useEffect, useState } from "react";
import rectangle23 from "../assets/rectangle23.png";
import riluggagedepositfill from "../assets/ri_luggage-deposit-fill.png";
import cilcash from "../assets/cil_cash.png";
import carbon_floorplan from "../assets/carbon_floorplan.png";
import { BiHeart } from "react-icons/bi";
import axios from "axios";
import { url } from "../config";

const BelongAndThrive = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await axios.get(`${url}product/products`);
				setProducts(allProducts?.data);
				console.log(allProducts?.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<div>
			<div className="w-full">
				<div className="bg-[#F11A7B] uppercase w-full flex items-center justify-center">
					<p className="text-white text-6xl font-extrabold">
						Belong And Thrive
					</p>
				</div>

				<div className="px-10 py-6">
					<p className="text-2xl font-bold pt-6">
						Recommended Properties
					</p>
					<p className="text-base font-light pb-6">
						Your place of pride with us
					</p>
					<div className="grid grid-cols-4 items-center gap-2"></div>
					<div>
						{products.length > 0 &&
							products
								.slice(0, 7)
								.map((product, index) => (
									<ProductCard
										key={index}
										product={product}
									/>
								))}
					</div>
				</div>
			</div>
		</div>
	);
};

const ProductCard = ({ product }) => (
	<div>
		<div
			key={product.title}
			className="bg-white shadow-2xl flex flex-col rounded-2xl"
		>
			<img src={product.image} width={400} height={500} />

			<div className="p-4">
				<div className="pt-2 pb-10">
					<h2 className="flex flex-row items-center justify-between text-lg font-semibold">
						{product.title} <BiHeart />
					</h2>
					<p className="text-gray-600">{product.description}</p>
				</div>

				<div className="grid grid-cols-5 gap-2 justify-center">
					<div className="flex flex-col items-center justify-center">
						<img src={cilcash} width={40} height={40} />
						<h2 className="text-md font-bold whitespace-nowrap">
							{product.price}
						</h2>
						<p className="whitespace-nowrap font-medium text-xs">
							{"Rent/Month"}
						</p>
					</div>
					<div
						style={{
							width: "1px",
							height: "40px",
							backgroundColor: "gray",
							margin: "0 20px",
						}}
					></div>

					<div className="flex flex-col items-center">
						<img
							src={riluggagedepositfill}
							width={40}
							height={40}
						/>
						<h2 className="text-md font-bold whitespace-nowrap">
							{product.price * 3}
						</h2>
						<p className="whitespace-nowrap font-medium text-xs">
							{"Security Deposit"}
						</p>
					</div>
					<div
						style={{
							width: "1px",
							height: "40px",
							backgroundColor: "gray",
							margin: "0 20px",
						}}
					></div>

					<div className="flex flex-col items-center">
						<img src={carbon_floorplan} width={40} height={40} />
						<h2 className="text-md font-bold whitespace-nowrap">
							{product?.details?.superBuiltArea}
						</h2>
						<p className="whitespace-nowrap font-medium text-xs">
							{"Sqrt Area"}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default BelongAndThrive;
