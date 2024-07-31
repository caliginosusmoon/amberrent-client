import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import ProductDetails from "./pages/productDetails";

function App() {
	return (
		<div className="w-full max-width-[1300px]">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/productDetails"
						element={<ProductDetails />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
