import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";

import { CgProductHunt } from "react-icons/cg";
import ProductsPage from "./pages/products";
import ListWithUs from "./components/list-with-us";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import AddListing from "./pages/AddListing";
import MyListing from "./pages/MyListing";
import Stories from "./pages/stories";
import AboutPage from "./pages/about";

const App = () => {
	return (
		<div className="w-full max-width-[1300px] mob:px-0 mob:w-screen">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/product/:id" element={<ProductDetail />} />
					<Route path="/productsPage" element={<ProductsPage />} />
					<Route path="/register/user/:id" element={<ListWithUs />} />
					<Route path="/addproduct" element={<AddListing />} />
					<Route path="/my-listings/:id" element={<MyListing />} />
					<Route path="/stories" element={<Stories />} />
					<Route path="/about" element={<AboutPage />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
