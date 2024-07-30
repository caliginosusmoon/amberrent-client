import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import { CgProductHunt } from "react-icons/cg";
import ProductsPage from "./pages/products";

function App() {
	return (
		<div className="w-full max-width-[1300px]">
			{/* <Home /> */}
			<ProductsPage/>
		</div>
	);
}

export default App;
