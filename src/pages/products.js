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
				<div className="">
					<h2 className="text-[#982176] font-bold text-5xl text-center py-10">
						Our List of Houses
					</h2>
					<div className="w-full flex flex-col gap-12 mob:flex-col">
						{products.length > 0 &&
							products
								?.map((product) => (
									<ProductCarddetail product={product} />
								))
								.reverse()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
