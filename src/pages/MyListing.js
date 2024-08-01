import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../config";
import { useParams } from "react-router-dom";

const MyListing = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await axios.get(
					`${url}products/user/${id}`
				);
				setProducts(allProducts?.data);
				console.log(allProducts?.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	return <div>MyListing</div>;
};

export default MyListing;
