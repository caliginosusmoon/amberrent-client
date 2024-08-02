import React from "react";
import { useLocation } from "react-router-dom";
import ProductCarddetail from "../components/ProductCarddetail";

const ProductsByFilter = () => {
	const location = useLocation();
	const { products } = location.state || { products: [] };

	return (
		<div>
			<h1>Results Page</h1>
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
