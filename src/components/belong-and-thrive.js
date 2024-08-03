import React, { useEffect, useState } from "react";
import rectangle23 from "../assets/rectangle23.png";
import riluggagedepositfill from "../assets/ri_luggage-deposit-fill.png";
import cilcash from "../assets/cil_cash.png";
import carbon_floorplan from "../assets/carbon_floorplan.png";
import { BiHeart } from "react-icons/bi";
import axios from "axios";
import { url } from "../config";
import { useNavigate } from "react-router-dom";
const BelongAndThrive = () => {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
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
			<div className="w-full mob:px-0">
				<div className="bg-[#F11A7B] uppercase w-full flex items-center justify-center">
					<p className="text-white text-5xl py-2 font-bold mob:text-center mob:items-center">
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
					<div className="grid grid-cols-4 items-center gap-5 mob:flex mob:flex-col mob:w-[350px] mob:px-4">
						{products.length > 0 &&
							products

								.map(
									(product, index) =>
										index > products.length - 5 && (
											<ProductCard
												key={index}
												product={product}
												navigate={navigate}
											/>
										)
								)
								.reverse()}
					</div>
				</div>
			</div>
		</div>
	);
};

const ProductCard = ({ product, navigate }) => {
	function shortdescription() {
		const words = product.description.split(" ");
		if (words.length > 20) {
			return words.slice(0, 10).join(" ") + "...";
		}
		return product.description;
	}
	return (
		<div className="w-[100%] h-[100%]">
			<div
				onClick={() => navigate(`/product/${product?._id}`)}
				key={product.title}
				className="bg-white shadow-2xl flex flex-col rounded-2xl mob:w-full mob:px-0"
			>
				<img
					src={product.image}
					width={400}
					height={500}
					className="border rounded-tl-xl rounded-tr-xl"
				/>

				<div className="p-4">
					<div className="pt-2 pb-10">
						<h2 className="flex flex-row items-center justify-between text-lg font-semibold">
							{product.title} <BiHeart />
						</h2>
						<p className="text-gray-600 overflow-hidden py-4 text-xs">
							{shortdescription()}
						</p>
					</div>

					<div className="grid grid-cols-5 gap-2 justify-center mob:flex mob:flex-col">
						<div className="flex flex-col items-center mob:flex mob:flex-row">
							<img src={cilcash} width={20} height={20} />
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

						<div className="flex flex-col items-center mob:flex mob:flex-row">
							<img
								src={riluggagedepositfill}
								width={20}
								height={20}
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

						<div className="flex flex-col items-center mob:flex mob:flex-row">
							<img
								src={carbon_floorplan}
								width={20}
								height={20}
							/>
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
};

export default BelongAndThrive;
