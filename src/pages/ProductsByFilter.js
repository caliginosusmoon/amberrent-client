import React from "react";
import { useLocation } from "react-router-dom";
import ProductCarddetail from "../components/ProductCarddetail";

const ProductsByFilter = () => {
	const location = useLocation();
	const { products } = location.state || { products: [] };

	return (
		<div>
			<h1 className="text-[#982176] font-bold text-5xl text-center py-10">
				Showing {products.length} results:{" "}
			</h1>
			<ul>
				{products.length > 0 &&
					products?.map((product) => (
						<ProductCarddetail product={product} />
					))}
			</ul>
		</div>
	);
};

export default ProductsByFilter;
