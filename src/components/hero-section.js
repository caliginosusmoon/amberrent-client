import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuLocate } from "react-icons/lu";
import group13 from "../assets/group13.png";
import group15 from "../assets/group15.png";
import group20 from "../assets/group20.png";
import homebg from "../assets/homebg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../config";

function Hero_Section() {
	const citiesOfIndia = [
		"Delhi",
		"Mumbai",
		"Hyderabad",
		"Bengaluru",
		"Pune",
		"Bhubaneswar",
		"Kolkata",
	];
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await axios.get(`${url}product/products`);
				setProducts(allProducts?.data);
				setFilteredProducts(allProducts?.data);
				console.log(allProducts?.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};
		fetchProducts();
	}, []);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const handleSearch = () => {
		const filtered = products.filter((product) => {
			return (
				(selectedCategory
					? product.category === selectedCategory
					: true) &&
				(selectedCity ? product?.location?.city === selectedCity : true)
			);
		});
		// setFilteredProducts(filtered);
		console.log(products);
		console.log(selectedCategory, selectedCity);

		console.log("filtered", filtered);

		navigate("/filteredProducts", {
			state: { products: filtered },
		});
	};

	const handleChange = (event) => {
		setSelectedCity(event.target.value);
	};

	return (
		<div className="w-full h-full flex flex-row px-8 mob:w-full mob:px-0 mob:h-full">
			<div
				style={{
					backgroundImage: `url(${homebg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				className="w-full border rounded-b-xl flex flex-col items-center pt-36 bottom-0 mb-10 h-[calc(100svh-13rem)] mob:px-5 min-h-[400px] mob:h-[calc(100svh-28rem)] mob:justify-center"
			>
				<h2 className="text-white text-8xl font-semibold mob:text-3xl mob:w-screen mob:text-center">
					LIVE WITH PRIDE
				</h2>

				<div
					style={{
						backgroundImage:
							"linear-gradient(to top, #FFE5AD, #F6FFCE)",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						width: "70%",
					}}
					className="border rounded-tl-2xl rounded-tr-2xl w-[900px] py-2 items-center mob:w-full"
				>
					<ul className="flex flex-row text-[#3E001F] items-center justify-around gap-20 text-md py-4 mob:gap-0 mob:justify-center ">
						<li
							className="hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold mob:px-2"
							onClick={() => handleCategoryChange("Rental")}
						>
							Rental
						</li>
						<li
							className={`hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold ${
								selectedCategory === "Flatmate" &&
								"text-[#F6FFCE] bg-[#3E001F]"
							}`}
							onClick={() => handleCategoryChange("Flatmate")}
						>
							Flatmate
						</li>
						<li
							className="hover:text-[#F6FFCE] hover:bg-[#3E001F] hover:rounded-2xl duration-300 py-1 px-10 text-md font-extrabold mob:px-2 mob:text-center"
							onClick={() => handleCategoryChange("PG")}
						>
							Co-Living/PG
						</li>
					</ul>

					<div className=" flex flex-row justify-between items-center bg-white py-2 border rounded-2xl shadow-inner px-4 mob:w-full mob:justify-center">
						<div className="flex flex-row mob:flex-col items-center">
							<div>Select City</div>
							<p className="text-4xl font-medium text-gray-300 mob:hidden">
								|
							</p>
							<div className="flex flex-col mob:flex mob:flex-row">
								<CiLocationOn size={20} />
								<select
									id="state-dropdown"
									value={selectedCity}
									onChange={handleChange}
									style={{ outline: "none" }}
								>
									<option value="" disabled>
										<LuLocate />
										See All Properties
									</option>
									{citiesOfIndia.map((state, index) => (
										<option key={index} value={state}>
											{state}
										</option>
									))}
								</select>
							</div>
						</div>
						<button
							className="text-[#F6FFCE] bg-[#3E001F] border-none rounded-2xl px-10 py-1 text-base mob:px-5"
							onClick={handleSearch}
						>
							Search
						</button>
						{/* {selectedState && <p>You selected: {selectedState}</p>} */}
					</div>

					<ul className="flex flex-row items-center justify-around py-6 mob:flex-col mob:justify-center">
						<li className="flex flex-row items-center gap-2">
							<img src={group20} width={50} height={50}></img>
							<div className="flex flex-col">
								<p className="text-[#F11A7B] font-bold text-2xl">
									5000+
								</p>
								<p className="font-bold text-md">
									Houses Rented
								</p>
							</div>
						</li>
						<li className="flex flex-row items-center gap-2">
							<img src={group13} width={50} height={50}></img>
							<div className="flex flex-col">
								<p className="text-[#F11A7B] font-bold text-2xl">
									10000+
								</p>
								<p className="font-bold text-md">
									Happy Customers
								</p>
							</div>
						</li>
						<li className="flex flex-row items-center gap-2">
							<img src={group15} width={50} height={50}></img>
							<div className="flex flex-col">
								<p className="text-[#F11A7B] font-bold text-2xl">
									2000+
								</p>
								<p className="font-bold text-md">
									Trusted Owners
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Hero_Section;
