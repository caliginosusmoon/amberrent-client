import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../config";
import ProductCarddetail from "../components/ProductCarddetail";

const ProductsPage = () => {
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
			<div className="w-full px-8 py-10">
				<div className=" w-full">
					<h2 className="text-[#F11A7B] text-3xl font-bold pb-10">
						Our List of Houses
					</h2>
					<div className="flex flex-col gap-12">
						{products.length > 0 &&
							products?.map((product) => (
								<ProductCarddetail product={product} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
