import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import { CgProductHunt } from "react-icons/cg";
import ProductsPage from "./pages/products";
import ListWithUs from "./components/list-with-us";

function App() {
	return (
		<div className="w-full max-width-[1300px]">
			{/* <Home /> */}
			{/* <ProductsPage/> */}
			<ListWithUs/>
		</div>
	);
}

export default App;
