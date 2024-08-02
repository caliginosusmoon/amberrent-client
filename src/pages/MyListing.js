import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../config";
import { useParams } from "react-router-dom";
import ProductCarddetail from "../components/ProductCarddetail";


const MyListing = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await axios.get(
					`${url}product/products/user/${id}`
				);
				setProducts(allProducts?.data);
				console.log(allProducts?.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="px-10 w-screen mob:px-0">
			<h2 className="text-[#982176] font-bold text-5xl text-center py-10">
				My Listings
			</h2>
			<div className="mob:flex mob:flex-col flex flex-col gap-10 mob:gap-0">
				{products.length > 0 &&
					products?.map((product) => (
						<ProductCarddetail product={product}/>
					))}
			</div>
		</div>
	);
};

export default MyListing;
